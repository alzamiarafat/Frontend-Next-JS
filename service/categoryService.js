import { apiUrl } from '../config';
import axios from "axios";

export const categoryService = {

    getCategory() {
        const body = {
            query: `
            query {
                getCategories (pagination: {limit: 100 skip: 0}) {
                    message
                    statusCode
                    result {
                        count
                        categories {
                            uid
                            name
                            parent {
                            uid
                            name
                            }
                            parents {
                            uid
                            name
                            }
                            isActive
                            inActiveNote
                            createdAt
                            updatedAt
                        }
                    }
                }
            }
        `
        }

        return axios.post(apiUrl, body);
    },

    createCategory(params) {
        const requestData = {
            query: `
          mutation {
              createCategory(category: {name: "${params.name}" parentCategoryUid: "${params.parentUid}"}) {
                  message
                  statusCode
                  result {
                      uid
                      name
                      parent {
                          uid
                          name
                      }
                      parents {
                          uid
                          name
                      }
                      isActive
                      inActiveNote
                      createdAt
                      updatedAt
                  }
              }
          }
        `
        }

        return axios.post(apiUrl, requestData);
    },

    updateCategory(params) {
        const requestData = {
            query: `
                mutation {
                    updateCategory (categoryUid: "${params.id}" category:{name: "${params.name}"}) {
                        message
                        statusCode
                        result {
                            uid
                            name
                            parent {
                                uid
                                name
                            }
                            parents {
                                uid
                                name
                            }
                            isActive
                            inActiveNote
                            createdAt
                            updatedAt
                        }
                    }
                }
            `
        }

        return axios.post(apiUrl, requestData);
    },
};