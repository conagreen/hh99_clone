# hh99_clone

항해99 capter04 클론코딩 - velog

[영상으로 보러가기](https://www.youtube.com/watch?v=6VHe8WF6yf0)

```
개발 인원: 백앤드 2명 (강미진, 정석진) / 프론트엔드 2명 (김다영, 조윤경)
개발 기간: 2021.04.02 ~ 2021.04.08
```
# 목차

- [1. 주제](#주제)
- [2. stack](#stack)
- [3. 개발 환경](#개발환경)
- [4. 기능](#기능)
- [5. 동작화면](#동작화면)

<br>

## 주제

스프링부트와 리액트를 이용한 velog 클론코딩

<br>

## stack
- Backend: Java 8
- Frontend: react, redux, thunk, styled-component

<br>

## 개발환경
- Java: JDK 1.8
- IDE: IntelliJ
- DB : mySQL
- 빌드 관리 : Gradle
- 프레임워크: SpringBoot
> - ORM: Spring-Data-JPA
> - 보안 : Spring security
> - 형상 관리 툴 : git
> - Others: Lombok

<br>

## 기능

1. 게시글, 댓글 기본 CRUD 및 좋아요 기능
2. 회원가입 / JWT를 이용한 로그인 구현

<br>

## 동작화면


### 메인페이지
![](https://images.velog.io/images/ouo_yoonk/post/38ab1bae-edb1-4d47-b0e6-3e86f0be83bc/v_main.gif)
- 전체 목록조회
- 트렌딩, 최신 포스트 조회

### 상세페이지
![](https://images.velog.io/images/ouo_yoonk/post/20be1575-a695-44f7-b58a-d29aa0af6853/detail2.gif)

### 로그인, 회원가입
![](https://images.velog.io/images/ouo_yoonk/post/fb39d42f-af0e-4a76-be36-fb877e597eb2/v_login.gif)

### 글쓰기, 수정, 삭제
![](https://images.velog.io/images/ouo_yoonk/post/ea49d5f6-fcb6-4f2b-9fc2-5b62d4b69656/v_write.gif)
- toast editor 라이브러리 이용

![](https://images.velog.io/images/ouo_yoonk/post/b407834d-b8b8-457c-91e7-77e72996a90f/v_ud.gif)
- 작성자만 수정, 삭제 가능

### 댓글 달기, 수정, 삭제
![](https://images.velog.io/images/ouo_yoonk/post/c866e4ca-f4da-4d3c-93a9-87cd3a8366df/v_comment.gif)

### 반응형
![](https://images.velog.io/images/ouo_yoonk/post/9df2b531-1e94-488a-8a29-5ae4842223ad/response.gif)
