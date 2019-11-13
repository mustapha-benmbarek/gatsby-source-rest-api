/* @title: <<gatsby-004-source-rest-api>> program written in Gatsby-JS.
 * @desc: A simple webapp starter using rest api as a source.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: ["https://jsonplaceholder.typicode.com/users"]
      }
    }
  ]
};
