# 애저 리소스 프로비저닝 #

## 애저 포탈 ##

### 애저 리소스 프로비저닝 ###

애저 포탈에서 직접 한꺼번에 리소스를 프로비저닝하기 위해서는 아래 버튼을 클릭합니다.

[애저 디플로이 버튼]

로그인 후에는 아래와 같은 화면이 보입니다. 여기서 기본값이 지정되어 있지 않은 곳은 임의로 값을 지정하여 입력합니다.

[애저 디플로이 화면]


### 애저 리소스 삭제 ###

아래 그림과 같이 리소스 그룹 전체를 삭제합니다. 이 버튼을 클릭하면 이 리소스 그룹 안에 있는 모든 리소스들을 삭제시킵니다.

[애저 리소스 그룹 삭제]


## 애저 CLI ##

### 리포지토리 포크 ###

아래 리포지토리를 본인의 계정으로 포크합니다. 모든 실습은 본인의 계정으로 포크한 리포지토리를 통해 진행합니다.

> https://github.com/devkimchi/pwa-workshop


### 리포지토리 클론 ###

파워셸 콘솔 혹은 터미널에서 아래와 같은 명령어를 입력합니다.

```bash
git clone https://github.com/<username>/pwa-workshop.git
```


### 애저 CLI 로그인 ###

```bash
az login
```


### 애저 리소스 그룹 생성 ###

```bash
az group create \
  -n <RESOURCE_GROUP_NAME> \
  -l koreacentral \
  --verbose
```


### ARM 템플릿 실행 ###

```bash
az group deployment create \
  -n storage-account \
  -g <RESOURCE_GROUP_NAME> \
  --template-file azuredeploy.json \
  --parameters @azuredeploy.parameters.json \
  --verbose
```


