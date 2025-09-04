plugins {
    id 'org.springframework.boot' version '3.2.0' // 최신 LTS 버전
    id 'io.spring.dependency-management' version '1.1.4' // RELEASE 제거 및 최신 버전
    id 'java'
}

group 'com.jojoldu.book'
version '1.0.4-SNAPSHOT-'+new Date().format("yyyyMMddHHmmss")

java {
    sourceCompatibility = JavaVersion.VERSION_17 // Java 17로 업그레이드 (Spring Boot 3.x 최소 요구사항)
}

repositories {
    mavenCentral()
    // jcenter()는 deprecated되어 제거
}

// JUnit 5 설정
test {
    useJUnitPlatform()
}

dependencies {
    // Spring Boot Starters
    implementation 'org.springframework.boot:spring-boot-starter-web'

    // Test dependencies
    testImplementation 'org.springframework.boot:spring-boot-starter-test'

    // Lombok 설정
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'
    testCompileOnly 'org.projectlombok:lombok'
    testAnnotationProcessor 'org.projectlombok:lombok'
}