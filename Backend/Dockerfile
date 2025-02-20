# Use Maven to build the app
FROM maven:3.9.1-eclipse-temurin-17 AS build

# Set working directory
WORKDIR /app

# Copy pom.xml and download dependencies (cached layer for efficiency)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the entire project and build the JAR
COPY . .
RUN mvn clean package -DskipTests

# Use a minimal JDK to run the built app
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/target/*.jar backend.jar

# Expose the application port
EXPOSE 8080

# Run the backend app
CMD ["java", "-jar", "backend.jar"]
