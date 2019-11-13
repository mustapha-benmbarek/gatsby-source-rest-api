/* @title: <<gatsby-004-source-rest-api>> program written in Gatsby-JS.
 * @desc: A simple webapp starter using rest api as a source.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allRestApiUsers {
        edges {
          node {
            id
            name
            phone
            email
            address {
              city
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1>Source Rest Api</h1>
      <h2>by Mustapha Benmbarek</h2>
      <p>
        This page renders all data fetched from a rest api source
        (https://jsonplaceholder.typicode.com/users).
      </p>

      <p>
        <table width="100%">
          <tr>
            <td className="bold">Name</td>
            <td className="bold">Email</td>
            <td className="bold">Phone</td>
            <td className="bold">City</td>
          </tr>

          {data.allRestApiUsers.edges.map(edge => {
            return (
              <tr>
                <td >{edge.node.name}</td>
                <td>{edge.node.email}</td>
                <td>{edge.node.phone}</td>
                <td>{edge.node.address.city}</td>
              </tr>
            );
          })}
        </table>
      </p>
    </div>
  );
};

export default IndexPage;
