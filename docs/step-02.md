# 로컬에서 애저로 PWA 수동 배포 #

## 애저 블롭 저장소 환경 설정 ##

애저 블롭 저장소를 정적 웹사이트 호스팅으로 활용하기 위해서는 아래와 같이 설정을 변경해 주어야 합니다.

```bash
az storage blob service-properties update \
  --account-name <BLOB_STORAGE_NAME> \
  --static-website true \
  --index-document index.html \
  --404-document 404.html \
  --verbose
```


## 애저 블롭 저장소 URL 확인 ##

정적 웹사이트 호스팅을 위한 주소를 아래 명령어를 통해 확인합니다.

```bash
az storage account show \
  -g <RESOURCE_GROUP_NAME> \
  -n <BLOB_STORAGE_NAME> \
  --verbose
```


## PWA 패키지 복원 ##

로컬에서 PWA를 실행시키기 위해서 우선 npm 패키지를 복원합니다.

```bash
npm install
```


## PWA 로컬 빌드 ##

로컬에서 PWA를 빌드합니다.

```bash
npm run build
```


## PWA 로컬 테스트 (이부분 현재 꺠지는 중) ##

로컬에서 PWA를 테스트합니다.

```bash
npm run test
```


## 애저 CLI를 이용한 PWA 수동 배포 ##

애저 CLI를 이용해서 PWA를 애저 블롭 저장소로 수동 배포합니다.

```bash
az storage blob upload-batch \
  -s build \
  -d \$web \
  --account-name <BLOB_STORAGE_NAME> \
  --verbose
```

배포가 끝난 후, 앞서 확인했던 애저 블롭 저장소 URL을 통해 웹사이트로 접속해 봅니다.
