package com.sat.backend.rest.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.sat.backend.model.User;

@Path("/")
public class ExampleService {

  User user;

  @GET
  public Response example() {
    return Response.status(200).entity("HELLO JERSEY 2.0 - Example").build();

  }

  @GET
  @Path("/hello")
  public Response getHello() {
    return Response.status(200).entity("HELLO JERSEY 2.0").build();
  }

  @GET
  @Path("/defaultUser")
  @Produces(MediaType.APPLICATION_JSON)
  public User getUser() {
    return new User("GERA", "ZENOBI", "1234");
  }

  @GET
  @Path("/multipleFormatUser")
  @Produces({ MediaType.APPLICATION_JSON,
      MediaType.APPLICATION_XML + "; qs=0.9" })
  // if client accepts both "application/xml" and "application/json"
  // (equally), then a server always sends "application/json", since
  // "application/xml" has a lower quality factor.
  public User get2FormatUser() {
    return new User("XML OR JSON", "2 FORMAT SUPPORT", "987654321");
  }

  @POST
  @Path("/postMessage")
  @Consumes(MediaType.APPLICATION_JSON)
  public Response postClichedMessage(User user) {
    System.out.println(user.toString());
    return Response.status(200).entity("User processed Successfully").build();
  }

  @POST
  @Path("/printMessage")
  @Consumes("text/plain")
  public void printMessage(String message) {
    System.out.println(message);
  }

  @GET
  @Path("users/{username: [a-zA-Z][a-zA-Z_0-9]*}")
  // it only matches the resource if the regular expression matches. 404
  // return otherwise
  @Produces("text/xml")
  public String getUser(@PathParam("username") String userName) {
    return "You entered the following username: " + userName;
  }

  @POST
  @Path("/form")
  @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
  public void post(@FormParam("name") String name) {
    // Store the message
    System.out.println(name);
  }

  /**
   * Se pueden hacer @BeanParam POJOs para extraer parametros que sean
   * necesarios en varios distintos requests
   */

}
