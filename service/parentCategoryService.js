import { apiUrl } from '../config';
import axios from "axios";

export const parentCategoryService = {

    getParentCategory() {
        const body = {
            query: `
            query {
                getCategories (pagination: {limit: 100000 skip: 0}) {
                  result {
                    categories {
                      parents {
                        name
                        uid
                      }
                    }
                  }
                }
              }
            `
        }

        return axios.post(apiUrl, body);
    }
};