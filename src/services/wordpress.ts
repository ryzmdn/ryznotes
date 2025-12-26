import axios, { AxiosInstance } from "axios";
import { API_CONFIG } from "@/constants";

/**
 * WordPress API service
 * Handles all WordPress REST API interactions
 */

class WordPressService {
  private client: AxiosInstance;

  constructor() {
    // Use a fallback URL if API_CONFIG is not available
    const baseURL =
      API_CONFIG.WORDPRESS_BASE_URL ||
      process.env.NEXT_PUBLIC_WORDPRESS_API ||
      "";

    this.client = axios.create({
      baseURL,
      timeout: API_CONFIG.TIMEOUT,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }

  /**
   * Fetch posts from WordPress API
   */
  async getPosts<T = unknown>(params?: Record<string, unknown>): Promise<T[]> {
    try {
      if (!this.client.defaults.baseURL) {
        console.warn("WordPress API URL not configured");
        return [];
      }
      const response = await this.client.get<T[]>("/posts", {
        params: {
          per_page: 100,
          _embed: true,
          ...params,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }

  /**
   * Fetch a single post by slug
   */
  async getPostBySlug<T = unknown>(slug: string): Promise<T | null> {
    try {
      const posts = await this.getPosts<T>({
        slug,
      });
      return posts[0] || null;
    } catch (error) {
      console.error("Error fetching post by slug:", error);
      return null;
    }
  }

  /**
   * Fetch categories
   */
  async getCategories<T = unknown>(): Promise<T[]> {
    try {
      if (!this.client.defaults.baseURL) {
        return [];
      }
      const response = await this.client.get<T[]>("/categories", {
        params: {
          per_page: 100,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }

  /**
   * Fetch tags
   */
  async getTags<T = unknown>(): Promise<T[]> {
    try {
      if (!this.client.defaults.baseURL) {
        return [];
      }
      const response = await this.client.get<T[]>("/tags", {
        params: {
          per_page: 100,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching tags:", error);
      return [];
    }
  }
}

export const wordPressService = new WordPressService();
