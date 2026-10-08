# Git 협업 실습 작업 보고서 (GIT_WORK.md)

- **원격 저장소 주소**: [https://github.com/dyj02056/next-practice](https://github.com/dyj02056/next-practice)
- **실습 환경**: 동일 PC 환경에서 2개의 로컬 저장소 폴더(`c:\work\git-practice-minsu`, `c:\work\git-practice-jiyun`) 구성 후 GitHub Flow 방식(main 및 기능 브랜치) 적용

---

## 1. Pull Request 목록 및 작업 내용

| PR 번호 | PR 제목 | 작업 브랜치 | 대상 브랜치 | 상태 | 작업 내용 요약 | PR URL |
| :---: | :--- | :--- | :--- | :---: | :--- | :--- |
| **PR #1** | `feat: add minsu work log (minsu.md)` | `feature/minsu` | `main` | **Merged** | 민수 작업 일지 파일 생성 및 보완 커밋(추가 설명) 반영 후 병합 | [PR #1 링크](https://github.com/dyj02056/next-practice/pull/1) |
| **PR #2** | `feat: add jiyun work log (jiyun.md)` | `feature/jiyun` | `main` | **Merged** | 지윤 작업 일지 파일 생성 및 검토 후 병합 | [PR #2 링크](https://github.com/dyj02056/next-practice/pull/2) |
| **PR #3** | `docs: add collaboration checklist (checklist.md)` | `feature/checklist` | `main` | **Merged** | 최신 main 기준 점검표 파일 추가 및 검토 후 병합 | [PR #3 링크](https://github.com/dyj02056/next-practice/pull/3) |

---

## 2. 각 폴더별 주요 실행 명령 및 실제 콘솔 출력

### 2.1 저장소 복제 (민수 & 지윤 폴더)
```powershell
# 민수 폴더 클론
git clone https://github.com/dyj02056/next-practice.git c:\work\git-practice-minsu
# 출력:
# Cloning into 'c:\work\git-practice-minsu'...

# 지윤 폴더 클론
git clone https://github.com/dyj02056/next-practice.git c:\work\git-practice-jiyun
# 출력:
# Cloning into 'c:\work\git-practice-jiyun'...
```

---

### 2.2 민수 폴더 (`git-practice-minsu`) 작업

#### [1] 브랜치 생성 및 minsu.md 커밋
```powershell
git checkout -b feature/minsu
# Switched to a new branch 'feature/minsu'

git add minsu.md
git commit -m "docs: 민수 작업 일지 추가"
# [feature/minsu 750435b] docs: 민수 작업 일지 추가
#  1 file changed, 5 insertions(+)
#  create mode 100644 minsu.md
```

#### [2] 로컬 main 브랜치로 전환 및 로컬 merge 테스트
```powershell
git checkout main
# Switched to branch 'main'

git merge feature/minsu
# Updating 1d03362..750435b
# Fast-forward
#  minsu.md | 5 +++++
#  1 file changed, 5 insertions(+)
#  create mode 100644 minsu.md

# 원격 동기화 상태 유지를 위해 로컬 main 리셋 후 작업 브랜치 복귀
git reset --hard origin/main
# HEAD is now at 1d03362 Initial commit
git checkout feature/minsu
# Switched to branch 'feature/minsu'
```

#### [3] 원격 저장소 푸시 및 PR 생성 후 보완 커밋 반영
```powershell
git push origin feature/minsu
# To https://github.com/dyj02056/next-practice.git
#  * [new branch]      feature/minsu -> feature/minsu

# (minsu.md 파일 내용 보완 후 추가 커밋 및 푸시)
git add minsu.md
git commit -m "docs: 민수 작업 일지 보완 사항 추가"
# [feature/minsu ce02b29] docs: 민수 작업 일지 보완 사항 추가
#  1 file changed, 1 insertion(+)

git push origin feature/minsu
#    750435b..ce02b29  feature/minsu -> feature/minsu
# -> GitHub PR #1에 커밋 2건(750435b, ce02b29) 자동 반영 확인
```

---

### 2.3 지윤 폴더 (`git-practice-jiyun`) 작업

#### [1] 브랜치 생성 및 jiyun.md 커밋
```powershell
git checkout -b feature/jiyun
# Switched to a new branch 'feature/jiyun'

git add jiyun.md
git commit -m "docs: 지윤 작업 일지 추가"
# [feature/jiyun 7ba1b14] docs: 지윤 작업 일지 추가
#  1 file changed, 5 insertions(+)
#  create mode 100644 jiyun.md
```

#### [2] 로컬 main 브랜치로 전환 및 로컬 merge 테스트
```powershell
git checkout main
# Switched to branch 'main'

git merge feature/jiyun
# Updating 1d03362..7ba1b14
# Fast-forward
#  jiyun.md | 5 +++++
#  1 file changed, 5 insertions(+)
#  create mode 100644 jiyun.md

git reset --hard origin/main
# HEAD is now at 1d03362 Initial commit
git checkout feature/jiyun
# Switched to branch 'feature/jiyun'
```

#### [3] 원격 저장소 푸시
```powershell
git push origin feature/jiyun
# To https://github.com/dyj02056/next-practice.git
#  * [new branch]      feature/jiyun -> feature/jiyun
```

---

### 2.4 GitHub PR 병합 및 두 폴더의 `main` pull 동기화

GitHub 상에서 PR #1, PR #2를 각각 `Create a merge commit` 방식으로 병합 완료 후 로컬 main에서 pull 수행:

#### 민수 폴더에서 pull:
```powershell
git checkout main
git pull origin main
# From https://github.com/dyj02056/next-practice
#    1d03362..de0d22b  main       -> origin/main
# Updating 1d03362..de0d22b
# Fast-forward
#  jiyun.md | 5 +++++
#  minsu.md | 6 ++++++
#  2 files changed, 11 insertions(+)
#  create mode 100644 jiyun.md
#  create mode 100644 minsu.md
```

#### 지윤 폴더에서 pull:
```powershell
git checkout main
git pull origin main
# From https://github.com/dyj02056/next-practice
#    1d03362..de0d22b  main       -> origin/main
# Updating 1d03362..de0d22b
# Fast-forward
#  jiyun.md | 5 +++++
#  minsu.md | 6 ++++++
#  2 files changed, 11 insertions(+)
#  create mode 100644 jiyun.md
#  create mode 100644 minsu.md
```
-> **양쪽 폴더 모두 `minsu.md`와 `jiyun.md`가 정상적으로 존재함을 확인.**

---

### 2.5 점검표 브랜치(`feature/checklist`) 실습 및 브랜치 정리

#### [1] 지윤 폴더에서 feature/checklist 생성 및 PR 병합
```powershell
git checkout -b feature/checklist
# Switched to a new branch 'feature/checklist'

git add checklist.md
git commit -m "docs: 협업 점검표(checklist.md) 추가"
git push origin feature/checklist
# * [new branch]      feature/checklist -> feature/checklist
# -> GitHub PR #3 생성 및 Merge commit 병합 완료
```

#### [2] 두 폴더에서 최종 pull 및 작업 완료 브랜치 삭제 정리
```powershell
# 민수 폴더:
git checkout main
git pull origin main
# Updating de0d22b..407ba9a
# Fast-forward
#  checklist.md | 9 +++++++++
git branch -d feature/minsu
# Deleted branch feature/minsu (was ce02b29).

# 지윤 폴더:
git checkout main
git pull origin main
# Updating de0d22b..407ba9a
# Fast-forward
#  checklist.md | 9 +++++++++
git branch -d feature/jiyun
# Deleted branch feature/jiyun (was 7ba1b14).
git branch -d feature/checklist
# Deleted branch feature/checklist (was ce9d9ed).
```

#### 최종 커밋 그래프 로그 (`git log --graph --oneline`):
```text
*   407ba9a Merge pull request #3 from feature/checklist
|\  
| * ce9d9ed docs: 협업 점검표(checklist.md) 추가
|/  
*   de0d22b Merge pull request #2 from feature/jiyun
|\  
| * 7ba1b14 docs: 지윤 작업 일지 추가
* |   236548c Merge pull request #1 from feature/minsu
|\ \  
| |/  
|/|   
| * ce02b29 docs: 민수 작업 일지 보완 사항 추가
| * 750435b docs: 민수 작업 일지 추가
|/  
* 1d03362 Initial commit
```

---

## 3. 필수 질문 답변

### Q1. main에서 `git merge feature/minsu`를 실행하면 어느 브랜치가 변경을 받는가?
**답변**: 현재 체크아웃되어 있는 브랜치인 **`main` 브랜치**가 변경을 받습니다. `git merge <target>` 명령은 현재 위치한 브랜치에 지정한 대상 브랜치의 커밋 이력을 합치는 동작을 수행하기 때문입니다.

### Q2. GitHub에서 PR을 병합한 뒤에도 각 폴더에서 pull해야 하는 이유는 무엇인가?
**답변**: GitHub 상의 PR 병합은 원격 저장소(`origin/main`)에서만 이루어진 변경 사항이므로, 각 작업자의 로컬 저장소(`main`)에는 아직 그 커밋이 자동으로 반영되지 않습니다. 따라서 로컬 작업 환경을 원격의 최신 통합 상태와 일치시키기 위해 각 폴더에서 반드시 `git pull`을 실행해야 합니다.

