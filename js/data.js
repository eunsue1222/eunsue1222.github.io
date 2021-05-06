const qnaList = [
  {
    q: '1. 눈을 떠보니 고등학생으로 돌아간 당신! 당신이 듣고 있는 수업은? (학창시절 좋아했던 수업을 선택해주세요.)',
    a: [
      { answer: 'a. 언어', score: 10 },
      { answer: 'b. 음악', score: 10 },
      { answer: 'c. 체육', score: 16 },
      { answer: 'c. 창재(창의적 재량활동)', score: 11 }
    ]
  },
  {
    q: '2. 정말 오랜만에 찾아온 휴일! 당신이 할 일은?',
    a: [
      { answer: 'a. 예술은 국가가 허락한 유일한 마약! 오랜만에 공연이나 볼까?', score: 13 },
      { answer: 'b. 아~ 뻐근해 오랜만에 운동으로 몸 좀 풀어볼까?', score: 16 },
      { answer: 'c. 좋아! 의미 있는 시간을 보내보자! (봉사활동이나 신앙생활을 하러 간다)', score: 14 },
      { answer: 'd. 그동안 배워보고 싶은 게 있었는데, 이번 기회에 배워볼까?', score: 12 }
    ]
  },
  {
    q: '3. 커피를 마시고 싶은 당신, 당신이 커피를 마시기 위해 할 일은?',
    a: [
      { answer: 'a. 아 뭘 커피를 만들어 먹어~ 돈 주고 사먹어야지!', score: 2 },
      { answer: 'b. 좋아! 원두부터 재배해볼까?', score: 15 },
      { answer: 'c. 어떻게 나 혼자 먹어? 같이 먹어야지!', score: 10 },
      { answer: 'd. 커피는 직접 내려마셔야 제 맛이지!', score: 13 }
    ]
  },
  {
    q: '4. 이제 그 얘기 좀 그만해! 당신이 가장 많이 들은 말은?',
    a: [
      { answer: 'a. 컴 다운! 춤 좀 그만 춰! 누가 보는거 아니야?', score: 14 },
      { answer: 'b. 너 운동 좀 그만해... 그러다 김종국 된다', score: 13 },
      { answer: 'c. 어휴... 넌 너무 착해서 탈이야', score: 16 },
      { answer: 'd. 어! 이러다 나 너 목소리(이름) 까먹을 것 같아!', score: 5 }
    ]
  },
  {
    q: '5. 어... 저 반한 것 같아요! 당신의 이상형은?',
    a: [
      { answer: 'a. 지적이고 의지되는 곰 같은 사람', score: 0 },
      { answer: 'b. 귀엽고 감정표현이 풍부한 토끼 같은 사람', score: 0 },
      { answer: 'c. 외적으로 완벽한 사슴 같은 사람', score: 0 },
      { answer: 'd. 나랑 필이 잘 통하는 강아지 같은 사람', score: 0 }
    ]
  },
  {
    q: '6. 오랜만에 여행을 떠나는 당신, 당신의 여행 스타일은?',
    a: [
      { answer: 'a. 금강산도 식후경! 맛집은 다 내 꺼!', score: 5 },
      { answer: 'b. 여행은 힐링이지! 좋은 풍경 다 내 꺼!', score: 10 },
      { answer: 'c. 여행은 만남이지! 외국인 친구들 다 내 꺼!', score: 15 },
      { answer: 'd. 여행은 경험이지! 모든 명소 다 내 꺼!', score: 7 }
    ]
  },
  {
    q: '7. 눈을 떠보니 무인도에 있는 당신! 당신 옆에 놓인 물건은?',
    a: [
      { answer: 'a. 책', score: 6 },
      { answer: 'b. 공', score: 15 },
      { answer: 'c. 빗자루', score: 6 },
      { answer: 'c. 카메라', score: 8 }
    ]
  },
  {
    q: '8. 내가 생각하는 나의 장점은?',
    a: [
      { answer: 'a. 외유내강 (내면이 단단한 나란 인간...)', score: 14 },
      { answer: 'b. 창의력 대장!', score: 6 },
      { answer: 'c. 활동적이다 하면 나지!', score: 22 },
      { answer: 'd. 지적 호기심이 높은 나란 사람^^', score: 9 }
    ]
  },
  {
    q: '9. 드디어 꿈꿔왔던 대학 생활! 당신의 대학 생활 로망은?',
    a: [
      { answer: 'a. 스릴 만점! 출튀하기', score: 15 },
      { answer: 'b. 폭포공원에 돗자리 깔고 맥주 한잔?', score: 8 },
      { answer: 'c. 로망은 무슨... 과제나 해야지', score: 2 },
      { answer: 'd. 친구랑 같이 헌혈하기', score: 10 }
    ]
  },
  {
    q: '10. 나는 새로 파진 동아리 단톡방에서...',
    a: [
      { answer: 'a. 예의 상 “안녕하세요~”와 이모티콘을 보내는 사람', score: 0 },
      { answer: 'b. 초대 됐으나 읽씹하는 사람', score: 0 },
      { answer: 'c. 초대 됐으나 안읽씹하는 사람', score: 0 },
      { answer: 'd. “안녕하세요~ 이름이 어떻게 되시나요?” 질문 폭격기', score: 0 }
    ]
  }
]

const infoList = [
  {
    from: 0,
    to: 60,
    mLeft: '10%',
    name: '가등록동아리',
    desc: '~~~'
  },
  {
    from: 61,
    to: 70,
    mLeft: '25%',
    name: '학술분과',
    desc: '~~~'
  },
  {
    from: 71,
    to: 80,
    mLeft: '40%',
    name: '문예창작분과',
    desc: '~~~'
  },
  {
    from: 81,
    to: 90,
    mLeft: '55%',
    name: '종교분과',
    desc: '~~~'
  },
  {
    from: 91,
    to: 100,
    mLeft: '70%',
    name: '교양분과',
    desc: '~~~'
  },
  {
    from: 101,
    to: 110,
    mLeft: '85%',
    name: '봉사분과',
    desc: '~~~.'
  },
  {
    from: 111,
    to: 120,
    mLeft: '85%',
    name: '공연예술분과',
    desc: '~~~.'
  },
  {
    from: 121,
    to: 130,
    mLeft: '85%',
    name: '체육분과',
    desc: '~~~'
  }
]
