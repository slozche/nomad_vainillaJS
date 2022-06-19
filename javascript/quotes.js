const quotes = [
    {quote : '가장 큰 영광은 한 번도 실패하지 않음이 아니라, 실패할 때마다 다시 일어서는데에 있다. ',
    author : '공자'
    },
    {quote : '나는 내가 더 노력할 수록 운이 더 좋아진다는 것을 발견했다.',
    author : '토마스 제퍼슨'
    },
    {quote : '슬럼프는 자기 내면에 있는 꾀병인거 같아요. 마음 속 어딘가에 하기 싫은 구석이 있는데 슬럼프를 핑계로 안하는 것이죠. 하지만 저는 반대로 끊임없이 도전했어요. ',
    author : '이상화'
    },
    {quote : '동기부여가 당신을 시작하게 한다. 습관이 당신을 계속 움직이게 한다.',
    author : '크리스 그로서'
    },
    {quote : '희망이 있는 곳에 반드시 시련이 있는 법이다.',
    author : '무라카미 하루키'
    },
    {quote : '인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.',
    author : '롤리 다스칼'
    },
    {quote : '계단 전체를 볼 필요가 없습니다. 첫 걸음 만 밟으면됩니다.',
    author : '마틴 루터 킹 주니어'
    },
    {quote : '당신이 얼마나 많은 실수를하거나 얼마나 느리게 진행하든, 당신은 여전히 ​​노력하지 않는 모든 사람들보다 앞서 있습니다.',
    author : '토니 로빈스'
    },
    {quote : '실수를 하면서 보낸 삶은 더 명예로울 뿐만 아니라 아무것도하지 않는 삶보다 더 유용합니다.    ',
    author : '조지 버나드 쇼'
    },
    {quote : '모든 위대한 것에는 작은 시작이 있습니다.',
    author : '피터 센게'
    }
]

const quote = document.querySelector('#quote div:first-child')
const author = document.querySelector('#quote div:last-child')
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author