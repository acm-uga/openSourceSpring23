# Getting Started

### Reference Documentation

For further reference, please consider the following sections:

-   [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
-   [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/3.0.2/maven-plugin/reference/html/)
-   [Create an OCI image](https://docs.spring.io/spring-boot/docs/3.0.2/maven-plugin/reference/html/#build-image)
-   [GraalVM Native Image Support](https://docs.spring.io/spring-boot/docs/3.0.2/reference/html/native-image.html#native-image)
-   [Distributed Tracing Reference Guide](https://micrometer.io/docs/tracing)
-   [Getting Started with Distributed Tracing](https://docs.spring.io/spring-boot/docs/3.0.2/reference/html/actuator.html#actuator.micrometer-tracing.getting-started)
-   [Spring Data R2DBC](https://docs.spring.io/spring-boot/docs/3.0.2/reference/htmlsingle/#data.sql.r2dbc)
-   [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/3.0.2/reference/htmlsingle/#using.devtools)
-   [Spring Reactive Web](https://docs.spring.io/spring-boot/docs/3.0.2/reference/htmlsingle/#web.reactive)

### Guides

The following guides illustrate how to use some features concretely:

-   [Accessing data with R2DBC](https://spring.io/guides/gs/accessing-data-r2dbc/)
-   [Building a Reactive RESTful Web Service](https://spring.io/guides/gs/reactive-rest-service/)

### Additional Links

These additional references should also help you:

-   [Configure AOT settings in Build Plugin](https://docs.spring.io/spring-boot/docs/3.0.2/maven-plugin/reference/htmlsingle/#aot)
-   [R2DBC Homepage](https://r2dbc.io)

## Getting started for UGA students

One of the easiest ways to run the backend is with intellij IDEA. I highly recommend you make a student account and snag the ultimate version; you'll get a bunch of Spring related tooling, along with warnings (sometimes) when you accidentally write blocking code in a nonblocking context. Helpful!

To actually run the backend, just clone and open this repo with intellij, and click the popup in the bottom right.

![image](https://user-images.githubusercontent.com/50535827/220209420-2fbb1c86-b464-47b2-8bb9-a7660f0f1114.png)

The Spring app is almost ready to run! Now we just need a postgres db running, or the application will crash at runtime.

Make sure [psql](https://docs.timescale.com/timescaledb/latest/how-to-guides/connecting/psql/) and [docker](https://www.docker.com/products/docker-desktop/) are installed, then call `./backend/scripts/init_db.sh`.

If you've got a postgres container running, smash the button in the top right

![image](https://user-images.githubusercontent.com/50535827/220210741-e4628c41-0fcc-4f69-a40e-e577da11bcba.png)

Make sure your runtime configuration is running the BackendApplication.java file

And then [make a request](https://www.postman.com/) to any of the available routes in Routers.java. See below for two examples

![image](https://user-images.githubusercontent.com/50535827/220211118-60773195-a306-4abd-8c3c-e3937dcc2edb.png)

![image](https://user-images.githubusercontent.com/50535827/220211183-68e003ca-13c2-48d4-ac6a-43b104f3b3b7.png)

## GraalVM Native Support

This project has been configured to let you generate either a lightweight container or a native executable.
It is also possible to run your tests in a native image.

### Lightweight Container with Cloud Native Buildpacks

If you're already familiar with Spring Boot container images support, this is the easiest way to get started.
Docker should be installed and configured on your machine prior to creating the image.

To create the image, run the following goal:

```
$ ./mvnw spring-boot:build-image -Pnative
```

Then, you can run the app like any other container:

```
$ docker run --rm backend:0.0.1-SNAPSHOT
```

### Executable with Native Build Tools

Use this option if you want to explore more options such as running your tests in a native image.
The GraalVM `native-image` compiler should be installed and configured on your machine.

### Configuring build environment

GraalVM is required to build any SpringBoot application.
Some effort is reaquired to install GraalVM, if you want to skip this, then install
IntelliJ IDEA. Otherwise, the following instructions work for Mac and most \*NIX users.

###1.
####Download GraalVM
**NOTE: GraalVM 22.3+ is required, and use Java 17**
Grab a release from [here](https://github.com/graalvm/graalvm-ce-builds/releases)

-   aarch64 means ARM and Apple Silicon.
-   amd64 means most Intel architectures.

###2.
####unzip
`tar -xzf graalvm-ce-java<version>-darwin-<architecture>-<version>.tar.gz`
###3.
####Fix permissions
Catalina sometimes sandboxes files like this. Undo this sandboxing before using the image
`sudo xattr -r -d com.apple.quarantine path/to/graalvm/folder/`
###4.
####Move to Java VM path
Sudo is usually necessary to modify /Library/\*
`sudo mv /path/to/graalvm-ce-java<version> /Library/Java/JavaVirtualMachines/`

###5.
####Set $PATH and set Java Runtime
The image is installed, but java will use whatever other image is previously
installed. To override and use this version, we have to export a few env variables.
If you're familiar with env variables, then continue as you normally would. Otherwise
read step 6 first.

```BASH
export PATH=/Library/Java/JavaVirtualMachines/<graalvm>/Contents/Home/bin:$PATH
export JAVA_HOME=/Library/Java/JavaVirtualMachines/<graalvm>/Contents/Home
```

###6.
####(OPTIONAL) Set runtime as permanent
Environment variables only affect the CURRENT terminal session. If this session or
window closes, then the environment is reset to the defaults in your ~/.bashrc, ~/.zshrc, or other.

To set this as permanent, add the exports from Step 5 into your ~/.zshrc or ~/.bashrc.

Here's an alias command that I use to make this easier for dev.

`alias graal="export PATH=/Library/Java/JavaVirtualMachines/graalvm-ce-java17-22.3.1/Contents/Home/bin:$PATH ; export JAVA_HOME=/Library/Java/JavaVirtualMachines/graalvm-ce-java17-22.3.1/Contents/Home; echo 'java path set to graalvm'"`

### Compile with GraalVM

To create the executable, run the following goal:

```
$ ./mvnw native:compile -Pnative
```

Then, you can run the app as follows:

```
$ target/backend
```

You can also run your existing tests suite in a native image.
This is an efficient way to validate the compatibility of your application.

To run your existing tests in a native image, run the following goal:

```
$ ./mvnw test -PnativeTest
```
