# iNeedYourHeartBeat

사용자의 위치를 기반으로 가장 가까운 자가 제세동기의 위치를 알려주는 서비스입니다.

## 사용 기술 스택

<img src="https://img.shields.io/badge/nextJs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">

## 주요 기능

### 1. 사용자 위치 정보 받아오기

<img width="700" alt="Screenshot 2023-06-24 at 10 59 30 AM" src="https://github.com/Majesty-jun/iNeedYourHeartBeat/assets/83108580/9049f2a1-9f73-480e-8747-7a531daaaf3d">

Navigator API를 사용하여 사용자의 위치 정보를 위도, 경도 단위로 받아올 수 있도록 구현하였습니다.

### 2. 공공데이터포털 OpenAPI 데이터 받아오기

<img width="715" alt="Screenshot 2023-06-24 at 10 53 48 AM" src="https://github.com/Majesty-jun/iNeedYourHeartBeat/assets/83108580/e75de8d8-74be-4b86-b2b6-9c7c29217b9b">

[국립중앙의료원](https://www.data.go.kr/data/15000652/openapi.do)에서 제공하는 데이터를 사용자의 위도, 경도 정보를 기반으로 받아오도록 구현하였습니다.

### 3. 카카오맵 API를 통한 지도 로드

카카오에서 제공하는 카카오맵 API를 통해 지도를 로드하고,  
받아온 사용자의 위치정보를 기반으로 지도의 중심을 움직이고,  
자가 제세동기의 위치를 기반으로 지도에 마크를 표시할 수 있도록 구현하였습니다.
