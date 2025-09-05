# 🧭 Spring Boot 프로젝트 — Initial Commit README

> **목표**  
> 개발을 전혀 모르는 분도 **초기 커밋 상태의 Spring Boot 프로젝트를 바로 실행**하고, 간단한 API를 **직접 추가/확인**할 수 있도록 단계별로 안내합니다. 
---

## 0) 이것만 따라하면 됩니다 (요약)

1. **자바 설치 확인**: 터미널(명령 프롬프트)에서 `java -version` 실행 → 17 이상이면 OK  
2. **프로젝트 폴더로 이동**: `cd <프로젝트_폴더>`  
3. **실행**  
   - Gradle(권장):  
     - **Windows**: `gradlew.bat bootRun`  
     - **macOS/Linux**: `./gradlew bootRun`  
   - Maven:  
     - **Windows**: `mvnw.cmd spring-boot:run`  
     - **macOS/Linux**: `./mvnw spring-boot:run`  
4. **정상 동작 확인**: 브라우저에서 `http://localhost:8080` 접속 → 서버 로그에 `Started ... in ... seconds`가 보이면 성공  
5. **내 첫 API 만들고 테스트(선택)**: 아래 6-1 단계의 `HelloController` 추가 → `http://localhost:8080/hello` 확인

---

## 1) 프로젝트 소개

- 이 저장소는 **Spring Boot 기반 백엔드 애플리케이션의 초기 커밋(Initial Commit)** 입니다.
- 현재 상태에서는 **기본 실행 환경**과 **빌드 도구 설정(Gradle 또는 Maven)**, **테스트 실행 구조**가 준비되어 있습니다.
- 필요 시, 간단한 컨트롤러를 추가하여 API 응답을 확인할 수 있습니다.

---

## 2) 준비물 (Prerequisites)

- **Java 17 이상** (OpenJDK 17 권장)
- **Git** (저장소 복제/버전관리용)
- (선택) **IntelliJ IDEA Community** 또는 **VS Code**

### 2-1) 설치 여부 확인
터미널(명령 프롬프트)에서 다음 명령으로 버전을 확인하세요.

```bash
java -version
git --version




## 3) 결과

<img width="772" height="302" alt="image" src="https://github.com/user-attachments/assets/701f1de4-85b7-4564-abcd-7abcb6841c8c" />

로컬호스트/h2-consol에서 결과 수정, 삭제

