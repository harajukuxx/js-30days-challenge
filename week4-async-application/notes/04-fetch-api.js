/**
 * ApiClient - Class-based HTTP Client
 * สำหรับจัดการการเรียก API ด้วย Fetch
 */

class ApiClient {
  /**
   * สร้าง instance ของ ApiClient
   * @param {string} baseUrl - URL พื้นฐานของ API
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl.replace(/\/+$/, ""); // ลบ trailing slash
  }

  /**
   * เมธอดหลักสำหรับจัดการทุก Request (Private)
   * @private
   */
  async #request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        let errorDetails;
        try {
          errorDetails = await response.json();
        } catch {
          errorDetails = await response.text();
        }
        throw new Error(
          `HTTP Error! Status: ${response.status} - ${JSON.stringify(errorDetails)}`,
        );
      }

      // DELETE และบาง request ที่ไม่มี body
      if (response.status === 204 || options.method === "DELETE") {
        return { success: true, status: response.status };
      }

      return await response.json();
    } catch (error) {
      console.error(
        `[API Error] [${options.method || "GET"}] ${url}:`,
        error.message,
      );
      throw error;
    }
  }

  /*
const options = {
  method: 'POST',                  // สั่งว่าให้ใช้ Method อะไร (GET, POST, PUT, DELETE)
  headers: {                       // แนบข้อมูลหัวกระดาษ เช่น แฟ้มข้อมูลชนิดไหน, รหัสผ่าน Token
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 12345'
  },
  body: JSON.stringify(data),      // ก้อนข้อมูลที่จะส่งไปเก็บในเซิร์ฟเวอร์ (ใช้กับ POST/PUT)
  mode: 'cors',                    // ตั้งค่าเรื่องความปลอดภัยข้ามโดเมน
  cache: 'no-cache',               // สั่งว่าไม่ต้องจำค่าเก่าในแคชนะ ให้ดึงใหม่ทุกครั้ง
};
 */

  // ===================== CRUD Methods =====================
  /**
   * GET - ดึงข้อมูล
   */
  async get(endpoint, options = {}) {
    return this.#request(endpoint, { method: "GET", ...options });
  }

  /**
   * POST - สร้างข้อมูลใหม่
   */
  async post(endpoint, body, options = {}) {
    return this.#request(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    });
  }

  /**
   * PUT - แก้ไขข้อมูลทั้งหมด (Replace)
   */
  async put(endpoint, body, options = {}) {
    return this.#request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      ...options,
    });
  }

  /**
   * PATCH - แก้ไขบางส่วน (Partial Update)
   */
  async patch(endpoint, body, options = {}) {
    return this.#request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
      ...options,
    });
  }

  /**
   * DELETE - ลบข้อมูล
   */
  async delete(endpoint, options = {}) {
    return this.#request(endpoint, { method: "DELETE", ...options });
  }
}

// ===================== ใช้งาน =====================

const api = new ApiClient("https://jsonplaceholder.typicode.com");

async function runDemo() {
  try {
    console.log("=== ทดสอบ ApiClient ===\n");

    // GET
    const post = await api.get("/posts/1");
    console.log("🟢 GET Success:", post.title);

    // POST
    const newPost = await api.post("/posts", {
      title: "Test Post",
      body: "Hello World",
      userId: 1,
    });
    console.log("🔵 POST Success, ID:", newPost.id);

    // PUT
    await api.put("/posts/1", {
      id: 1,
      title: "อัพเดททั้งหมดด้วย PUT",
      body: "เนื้อหาใหม่ทั้งก้อน",
      userId: 1,
    });
    console.log("🟡 PUT Success");

    // PATCH
    const patched = await api.patch("/posts/1", {
      title: "แก้แค่หัวข้อด้วย PATCH",
    });
    console.log("🟠 PATCH Success:", patched.title);

    // DELETE
    await api.delete("/posts/1");
    console.log("🔴 DELETE Success");

    console.log("\n✅ ทดสอบทั้งหมดเสร็จสมบูรณ์");
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

// รันทดสอบ
runDemo();

/*
import { ApiClient } from './ApiClient.js';

const api = new ApiClient('https://jsonplaceholder.typicode.com');

// ใช้งานได้เลย
const post = await api.get('/posts/1');
const newPost = await api.post('/posts', { title: 'Hello', body: 'World' });
await api.put('/posts/1', { title: 'Updated' });
await api.delete('/posts/1');
*/
