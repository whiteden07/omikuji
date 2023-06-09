'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const message = document.getElementById('message')

  btn.addEventListener('click',() => {
    const results = ['大吉',
                     '中吉',
                     '小吉',
                     '末吉',
                     '凶',
                     '両津勘吉',
                     'れなきち',
                     '福沢諭吉',
                     'ひみつきち',
                     '僻地(へきち)',
                     '徳川綱吉',
                     '吉幾三',
                     '中井貴一',
                     'たぬきち',
                     'もち吉',
                     '博多華丸・大吉']

    const messages = ['今日のあなたは優勝です。\n 何をしても大成功なので積極的にいきましょう。',
　　　　　　                   'そこそこ良い運勢でしょう。チューイングガムを噛むと良いかも。チュー吉だけにね。',
                      'まあまあの運勢でしょう。名前に「しょう」が付く人と会話すると良いことが起こるかも...？',
                      '一番ビミョーで困る結果ですね。運勢を良くも悪くもするのは自分次第。\n ラッキーアイテムはスウェ（末）ット。',
                      '浅草寺のおみくじは凶の割合が高いらしいですが、このサイトではどの結果も均一に現れるよう作成しています。ということは、あなたはある意味運が良いのかも...？',
                      '葛飾区にいる警察官。今日は上手い話に要注意。何か罠が潜んでいるかも。ラッキーアイテムは下駄。',
                      'このおみくじの作者のあだ名です。\n これを引いてくれたあなたは大大大大吉です。',
                      '財布の中にいると嬉しい人物。\n お財布の中のレシートを整理すると金運アップ。',
                      '「秘密基地」と聞いてあなたは何を思い浮かべますか？『ぼくなつ』の秘密基地？\n 私はエウレカセブンのED曲が思い浮かびました。',
　　　　　　                   '私の出身...げふんげふん。失礼しました。僻地にも良いところはあるのです。今日はちょっと田舎にお出かけすると良いことがあるかも。',
　　　　　　                   'もはや「きち」ではないじゃないか！というツッコミはおいといて。\n 今日は動物を大切にすると良いことが起こりそう。あ〜ネコ飼いたい。',
　　　　　　                   '「〜きち」でも「きち〜」でもない。\n 今日は新しいことを始めるのに良い日。\n 始める時は「よし、いくぞ」という掛け声を忘れずに。',
　　　　　　                   'ミキプルーンの神様。\n　今日はプルーンを使ったデザートを食べると運勢アップ。\n プルーンは高血圧の改善にも良いんだぜ。',
　　　　　　                   '「どうぶつの森」のキャラクター。\n今日は金銭トラブルに注意しましょう。気づいたら高額なローンを組まされているかも...？',
　　　　　　                   '「もちはもち吉ぃ！」のCMでおなじみの和菓子店。今日は緑茶と一緒に和菓子を食べると運勢アップ。\n 本店の福岡県直方市にもぜひ遊びに来てね。',
　　　　　　                   '福岡県を愛してやまないお笑いコンビ。\n 地元を大切にする気持ちを忘れずに。'
                      ]
    const n = Math.floor(Math.random() * results.length);
    result.innerText = results[n]
    message.innerText = messages[n]
  });
}
