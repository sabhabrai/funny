import {DialogueTranslationEntries, SimpleTranslationEntries} from "#app/interfaces/locales";

// Dialogue of the NPCs in the game when the player character is male (or unset)
export const PGMdialogue: DialogueTranslationEntries = {
  "youngster": {
    "encounter": {
      1: "嘿，想來對戰嗎？",
      2: "你也是新人訓練師嗎？",
      3: "嘿，我之前沒見過你。我們來對戰吧！",
      4: "我剛輸了，所以我正在尋找更多的寶可夢。$等等！你看起來很弱！\n來吧，我們對戰吧！",
      5: "我們見過面嗎？我記不太清了。$嗯，不管怎樣，很高興見到你！",
      6: "好的！我們上吧！",
      7: "好的！我來啦！我會向你展示我的實力！",
      8: "嚯嚯嚯...我會向你展示我的寶可夢有多厲害！",
      9: "不要浪費時間打招呼。你準備好了就放馬過來！",
      10: "別掉以輕心，$否則你可能會被小朋友打到哭鼻子哦。",
      11: "我精心培養了我的寶可夢。不許你傷害它們！",
      12: "恭喜你成功了！從這以後可不輕鬆哦。",
      13: "戰鬥永無止境！歡迎來到沒有盡頭的世界！",
    },
    "victory": {
      1: "哇！你很強！",
      2: "我根本沒機會贏，對吧？",
      3: "我會等長大了再來打敗你！",
      4: "呃。我沒有更多寶可夢了。",
      5: "不可能…不可能！我怎麼可能又輸了…",
      6: "不！我輸了！",
      7: "哇！你真是太不可思議了！我既驚訝又欽佩！",
      8: "這怎麼…怎麼可能…$明明我和我的寶可夢是最強大的…",
      9: "下次我不會輸了！我們找時間再對戰吧！",
      10: "天哪！你看不出我還只是個小孩子嗎！$你那樣全力以赴太賴了！",
      11: "你的寶可夢更棒啊！和我交換吧！",
      12: "我之前有點上頭，我說了什麼來著？",
      13: "啊哈哈！就是這樣！$對！你已經熟悉這個世界了！",
    }
  },
  "lass": {
    "encounter": {
      1: "我們來對戰吧，好嗎？",
      2: "你看起來像是個新人訓練師。我們來戰鬥吧！",
      3: "我不認識你。來對戰怎麼樣？",
      4: "讓我們來進行一場有趣的寶可夢對戰吧！",
      5: "我會向你展示如何真正使用寶可夢！",
      6: "一場認真的對戰從始於認真的開場白！$你確定你準備好了嗎？",
      7: "花無重開日，人無再少年。$你在對戰中只有一次機會。$很快，你就只能活在回憶中了。",
      8: "你最好對我手下留情，好嗎？$當然我會認真對戰的！",
      9: "學校很無聊，我無事可做。$*哈欠*…我只是來對戰打發時間。",
    },
    "victory": {
      1: "那真是令人印象深刻！我還有很多要學習。",
      2: "我沒想到你會這麼輕易地打敗我…",
      3: "我希望有一天，我們能再進行一場對戰。",
      4: "那真是場非常有趣的對戰！$你讓我精疲力盡了…",
      5: "你給我上了一課！你真是太棒了！",
      6: "說真的，我輸了。$這，怎麼說，真的好難過，但你也真的很厲害。",
      7: "我不需要像這樣的記憶。刪除記憶中…",
      8: "嘿！我告訴過你要對我手下留情！$不過，當你認真的時候，你真的很酷。",
      9: "實際上，我開始厭倦對戰了…$一定有新的事情可以做…",
    }
  },
  "breeder": {
    "encounter": {
      1: "聽話的寶可夢，自私的寶可夢…$寶可夢有獨特的性格呢。",
      2: "儘管我出生貧寒，但我的寶可夢培養的很好。",
      3: "嗯，你有沒有管教你的寶可夢？$過度溺愛是不好的。",
    },
    "victory": {
      1: "對每個寶可夢因材施教是很重要的。",
      2: "不像一無是處的我…這些寶可夢都很優秀。",
      3: "過度的讚美會寵壞寶可夢和人。",
    },
    "defeat": {
      1: "即使輸了，也不應該對你的寶可夢發火。",
      2: "相當好的寶可夢，對吧？我很會養東西。",
      3: "無論你多麼愛你的寶可夢，$你仍要在它沒做好時管教它們。",
    }
  },
  "breeder_female": {
    "encounter": {
      1: "寶可夢永遠不會背叛你。$它們會回報你對它們的愛。",
      2: "要我教教你訓練優秀寶可夢的技巧嗎？",
      3: "特別的寶可夢有特別的培育技巧。",
    },
    "victory": {
      1: "呃…事情不應該是這樣的。$我是不是用錯了能量方塊？",
      2: "這怎麼會發生在我的寶可夢身上…$你給你的寶可夢餵了什麼？",
      3: "如果我輸了，我告訴你我只是在消磨時間。$你根本不會傷害到我的自尊心。",
    },
    "defeat": {
      1: "這證明了我的寶可夢已經接受了我的愛。",
      2: "訓出好寶可夢的真正技巧是捉到好的寶可夢。",
      3: "寶可夢的強弱取決於你的飼養方式。",
    }
  },
  "fisherman": {
    "encounter": {
      1: "啊！你讓我錯過了一次咬鉤！$你打算怎麼辦？",
      2: "走開！你嚇跑了寶可夢！",
      3: "讓我看看你能否贏得勝利！",
    },
    "victory": {
      1: "算了吧。",
      2: "下一次，我將捲土重來，凱旋而歸！",
      3: "我想這次我低估了海流。",
    },
  },
  "fisherman_female": {
    "encounter": {
      1: "哇！我釣到了一條大魚！",
      2: "線已收好，準備提竿！",
      3: "準備製造波浪！",
    },
    "victory": {
      1: "我會帶著更強大的魚鉤回來。",
      2: "下次我會贏得勝利。",
      3: "我只是在為回歸磨利我的魚鉤！",
    },
  },
  "swimmer": {
    "encounter": {
      1: "是時候潛水了！",
      2: "讓我們一起乘風破浪，贏得勝利！",
      3: "該一鳴驚人了！",
    },
    "victory": {
      1: "沉浸在失敗中！",
      2: "失敗的波浪！",
      3: "後浪死在沙灘上，我猜。",
    },
  },
  "backpacker": {
    "encounter": {
      1: "收拾行李，開始遊戲！",
      2: "讓我看看你是否能跟上！",
      3: "全副武裝，挑戰者！",
      4: "我花了20年時間試圖找到自己……但我在哪裡？",
    },
    "victory": {
      1: "這次絆倒了！",
      2: "哦，我覺得我迷路了。",
      3: "死路！",
      4: "等一下！嘿！你不知道我是誰嗎？",
    },
  },
  "ace_trainer": {
    "encounter": {
      1: "你看起來挺自信的。",
      2: "你的寶可夢…… 讓我看看……",
      3: "因為我是王牌訓練師，人們認為我很強。",
      4: "你知道成為王牌訓練師需要什麼嗎？",
    },
    "victory": {
      1: "是的…… 你的寶可夢很棒……",
      2: "什麼？！我是戰鬥天才啊！",
      3: "理所應當，你才是主角！",
      4: "好好好！你可以成為王牌訓練師！",
    },
    "defeat": {
      1: "我將把我的身體和靈魂全都奉獻給寶可夢對戰！",
      2: "一切都在我的預料之中… \n沒有什麼好驚訝的…",
      3: "我覺得我長大後有點玻璃心，$你太壓力我我會垮的……",
      4: "我當然很強大，不會輸。$而且重要的是我要優雅地贏。",
    }
  },
  "parasol_lady": {
    "encounter": {
      1: "是時候用優雅和從容來為戰鬥添彩了！",
    },
    "victory": {
      1: "我的優雅依然完好無損！",
    }
  },
  "twins": {
    "encounter": {
      1: "準備好囉，因為我們聯手，\n麻煩雙倍！",
      2: "兩顆心，一條繩$讓我們看看你能否跟上我們雙胞胎的力量！",
      3: "希望你準備好了面對雙倍的麻煩，$因為我們即將燃起來啦！",
    },
    "victory": {
      1: "雖然我們在這一輪輸了，$但我們的羈絆依然堅不可摧！",
      2: "我們的雙胞胎精神，才不會就此熄滅。",
      3: "我們會作為充滿活力的二人組，$捲土重來，變得更強！",
    },
    "defeat": {
      1: "雙胞胎的力量至高無上！",
      2: "兩顆心，一起贏！",
      3: "笑容成雙，共舞成雙！",
    }
  },
  "cyclist": {
    "encounter": {
      1: "準備好在我後面吃土吧！",
      2: "挑戰者，準備好！我要把你打得落花流水！",
      3: "全速前進，讓我看看你能不能跟得上！",
    },
    "victory": {
      1: "輪子可能不轉了，但我的決心沒有停下。",
      2: "被超越了！",
      3: "通往勝利的道路還有許多曲折等待探索。",
    },
  },
  "black_belt": {
    "encounter": {
      1: "我讚揚你挑戰我的勇氣！$因為我是踢力最強的人！",
      2: "哦，我明白了。你想被切成碎片嗎？$或者你更喜歡當個沙袋？",
    },
    "victory": {
      1: "哦。是寶可夢在戰鬥。$我強大的踢擊一點忙都沒幫上。",
      2: "嗯…如果我無論如何都會輸，我希望能被徹底打敗。",
    },
  },
  "battle_girl": {
    "encounter": {
      1: "你不必試圖勾引我。你可以輸給我。",
    },
    "victory": {
      1: "很難說再見，但我們快沒時間了……",
    },
  },
  "hiker": {
    "encounter": {
      1: "人到中年後，我的身體和我爬過的山一樣強壯！",
      2: "我從父母那裡遺傳了這副魁梧的身材…$就像一座活生生的山脈…",
    },
    "victory": {
      1: "至少在BMI方面我不能輸！",
      2: "這還不夠……永遠不夠。$我的壞膽固醇還不夠高……",
    },
  },
  "ranger": {
    "encounter": {
      1: "當我身處大自然中，其他事情都不重要了。",
      2: "如果我生活中沒有大自然，有時就會突然感到焦慮。",
    },
    "victory": {
      1: "無論我是贏是輸，\n對廣闊的大自然來說並不重要……",
      2: "與城市生活的窒息感相比，\n這種事情微不足道。",
    },
    "defeat": {
      1: "我贏了。但與浩瀚的大自然相比，\n勝利算不了什麼…",
      2: "與我的焦慮症相比，我覺得你也不會怎樣…",
    }
  },
  "scientist": {
    "encounter": {
      1: "我的研究將引導這個世界走向和平與歡樂。",
    },
    "victory": {
      1: "我是個天才…我不應該輸給你這樣的人…",
    },
  },
  "school_kid": {
    "encounter": {
      1: "……嘿嘿。我對計算和分析很有信心。",
      2: "我正在盡可能地積累經驗，$因為我希望有一天能成為道館館主。",
    },
    "victory": {
      1: "哦…計算和分析也許和個例不太匹配呀…",
      2: "我想，即使是艱難困苦的經歷，也有存在的意義。",
    }
  },
  "artist": {
    "encounter": {
      1: "我以前很受歡迎，但現在已經徹底過氣了。",
    },
    "victory": {
      1: "隨著時代的變遷，價值觀也在變化。$我意識到這一點已經太晚了。",
    },
  },
  "guitarist": {
    "encounter": {
      1: "當我彈奏著走向勝利的旋律時，$準備好感受失敗的節奏吧！",
    },
    "victory": {
      1: "暫時沉默了，但我不屈的旋律將繼續演奏。",
    },
  },
  "worker": {
    "encounter": {
      1: "人們總誤解我，這讓我很煩。$我比大家想象的要乾淨得多。",
    },
    "victory": {
      1: "我真的不想曬傷皮膚，所以我想在陰涼處工作。",
    },
  },
  "worker_female": {
    "encounter": {
      1: "人們總是誤解我，這讓我很煩。 $我比大家想象的要乾淨得多。",
    },
    "victory": {
      1: "我真的不想曬傷皮膚，\n所以我想在陰涼處工作。",
    },
    "defeat": {
      1: "我的身體和心靈並不總同步。",
    }
  },
  "worker_double": {
    "encounter": {
      1: "你會知道我們怎麼擊敗你的。我們在工地訓練過！",
    },
    "victory": {
      1: "真奇怪…怎麼會這樣…我不應該被打敗的。",
    },
  },
  "hex_maniac": {
    "encounter": {
      1: "我通常只聽古典音樂，但如果我輸了，$我想我應該試試新時代的音樂！",
      2: "我的每一滴眼淚都讓我變得更加堅強。",
    },
    "victory": {
      1: "樂壇新時代的曙光就此出現了嗎？",
      2: "現在我變得更強了。我隨著他人怨恨而成長。",
    },
    "defeat": {
      1: "“新時代”指的是二十世紀的古典作曲家，對吧？",
      2: "不要糾結於悲傷或沮喪。$你可以用悲憤來激勵自己。",
    }
  },
  "psychic": {
    "encounter": {
      1: "嘿！集中！",
    },
    "victory": {
      1: "呃呃呃！",
    },
  },
  "officer": {
    "encounter": {
      1: "準備好，因為正義即將得到伸張！",
      2: "準備好維護法律，在戰場上伸張正義！",
    },
    "victory": {
      1: "正義的分量比以往還要沉重……",
      2: "失敗的陰影，在警局中徘徊。",
    }
  },
  "beauty": {
    "encounter": {
      1: "我最後的戰鬥…我就是這麼看待這場對戰的…",
    },
    "victory": {
      1: "很有趣…有時間再來一場最後的戰鬥…",
    },
  },
  "baker": {
    "encounter": {
      1: "希望你準備好品嚐失敗的滋味！",
    },
    "victory": {
      1: "我會捲土重來的。",
    },
  },
  "biker": {
    "encounter": {
      1: "是時候加速，把你甩在後面了！",
    },
    "victory": {
      1: "我會為下一場比賽調整狀態。",
    },
  },
  "firebreather": {
    "encounter": {
      1: "我的火焰會吞噬你！",
      2: "我的靈魂在燃燒，我要讓你看看它有多滾燙！",
      3: "快來看看吧！"
    },
    "victory": {
      1: "我燃成灰了…",
      2: "哟！ 好燙！",
      3: "嗷！ 我的鼻尖燒焦了！"
    },
  },
  "sailor": {
    "encounter": {
      1: "夥計，如果你輸了，你就得挨板子！",
      2: "來吧！這關係到我作為水手的尊嚴！",
      3: "你好啊！你暈船麼？"
    },
    "victory": {
      1: "啊，被孩子打敗了。",
      2: "你的精神讓我沉淪！",
      3: "好像是我暈船了…"
    },
  },
  "archer": {
    "encounter": {
      1: "Before you go any further, let's see how you far against us, Team Rocket!",
      2: "I have received reports that your skills are not insignificant. Let's see if they are true.",
      3: "I am Archer, an Admin of Team Rocket. And I do not go easy on enemies of our organization."
    },
    "victory": {
      1: "What a blunder!",
      2: "With my current skills, I was not up to the task after all.",
      3: "F-forgive me, Giovanni... For me to be defeated by a mere trainer..."
    },
  },
  "ariana": {
    "encounter": {
      1: `Hold it right there! We can't someone on the loose." 
          $It's harmful to Team Rocket's pride, you see.`,
      2: `I don't know or care if what I'm doing is right or wrong...
          $I just put my faith in Giovanni and do as I am told`,
      3: "Your trip ends here. I'm going to take you down!"
    },
    "victory": {
      1: `Tch, you really are strong. It's too bad. 
          $If you were to join Team Rocket, you could become an Executive.`,
      2: "I... I'm shattered...",
      3: "Aaaieeeee! This can't be happening! I fought hard, but I still lost…"
    },
  },
  "proton": {
    "encounter": {
      1: "What do you want? If you interrupt our work, don't expect any mercy!",
      2: `What do we have here? I am often labeled as the scariest and cruelest guy in Team Rocket…
         $I strongly urge you not to interfere with our business!`,
      3: "I am Proton, an Admin of Team Rocket. I am here to put an end to your meddling!"
    },
    "victory": {
      1: "The fortress came down!",
      2: "You may have won this time… But all you did was make Team Rocket's wrath grow…",
      3: "I am defeated… But I will not forget this!"
    },
  },

  "petrel": {
    "encounter": {
      1: `Muhahaha, we've been waiting for you. Me? You don't know who I am? It is me, Giovanni.
          $The majestic Giovanni himself! Wahahaha! …Huh? I don't sound anything like Giovanni?
          $I don't even look like Giovanni? How come? I've worked so hard to mimic him!`,
      2: "I am Petrel, an Admin of Team Rocket. I will not allow you to interfere with our plans!",
      3: "Rocket Executive Petrel will deal with this intruder!"
    },
    "victory": {
      1: "OK, OK. I'll tell you where he is.",
      2: "I… I couldn't do a thing… Giovanni, please forgive me…",
      3: "No, I can't let this affect me. I have to inform the others…"
    },
  },
  "tabitha": {
    "encounter": {
      1: "Hehehe! So you've come all the way here! But you're too late!",
      2: `Hehehe... Got here already, did you? We underestimated you! But this is it! 
          $I'm a cut above the Grunts you've seen so far. I'm not stalling for time.
          $I'm going to pulverize you!`,
      3: "I'm going to give you a little taste of pain! Resign yourself to it!"
    },
    "victory": {
      1: `Hehehe! You might have beaten me, but you don't stand a chance against the Boss!
          $If you get lost now, you won't have to face a sound whipping!`,
      2: "Hehehe... So, I lost, too...",
      3: "Ahya! How could this be? For an Admin like me to lose to some random trainer..."
    },
  },
  "courtney": {
    "encounter": {
      1: "The thing...The thing that you hold...That is what... That's what we of Team Magma seek...",
      2: "... Well then...Deleting...",
      3: "...Ha. ...Analyzing... ...Hah♪"
    },
    "victory": {
      1: "... ...Change...the world.",
      2: `As anticipated. Unanticipated. You. Target lock...completed.
         $Commencing...experiment. You. Forever. Aha... ♪`,
      3: "...Again? That's unanticipated. ...I knew it. You...are interesting! ...Haha. ♪"
    },
  },
  "shelly": {
    "encounter": {
      1: `Ahahahaha! You're going to meddle in Team Aqua's affairs?
         $You're either absolutely fearless, simply ignorant, or both!
         $You're so cute, you're disgusting! I'll put you down`,
      2: "What's this? Who's this spoiled brat?",
      3: "Cool your jets. Be patient. I'll crush you shortly."
    },
    "victory": {
      1: `Ahahahaha! We got meddled with unexpectedly! We're out of options.
         $We'll have to pull out. But this isn't the last you'll see of Team Aqua!
         $We have other plans! Don't you forget it!`,
      2: "Ahhh?! Did I go too easy on you?!",
      3: `Uh. Are you telling me you've upped your game even more during the fight?
         $You're a brat with a bright future… My Pokémon and I don't have any strength left to fight…
         $Go on… Go and be destroyed by Archie.`
    },
  },
  "matt": {
    "encounter": {
      1: "Hoohahaha! What, you got a screw loose or something? Look at you, little Makuhita person!",
      2: "Oho! You! You're that funny kid!",
      3: "What are you doing here? Did you follow us?"
    },
    "victory": {
      1: "All right then, until the Boss has time for you, I'll be your opponent!",
      2: `I can feel it! I can feel it, all right! The strength coming offa you!
          $More! I still want more! But looks like we're outta time...`,
      3: "That was fun! I knew you'd show me a good time! I look forward to facing you again someday!"
    },
  },
  "mars": {
    "encounter": {
      1: "I'm Mars, one of Team Galactic's top Commanders.",
      2: "Team Galactic's vision for the future is unwavering. Opposition will be crushed without mercy!",
      3: "Feeling nervous? You should be!"
    },
    "victory": {
      1: "This can't be happening! How did I lose?!",
      2: "You have some skill, I'll give you that.",
      3: "Defeated... This was a costly mistake."
    }
  },
  "jupiter": {
    "encounter": {
      1: "Jupiter, Commander of Team Galactic, at your service.",
      2: "Resistance is futile. Team Galactic will prevail!",
      3: "You're trembling... scared already?"
    },
    "victory": {
      1: "No way... I lost?!",
      2: "Impressive, you've got guts!",
      3: "Losing like this... How embarrassing."
    }
  },
  "saturn": {
    "encounter": {
      1: "I am Saturn, Commander of Team Galactic.",
      2: "Our mission is absolute. Any hindrance will be obliterated!",
      3: "Is that fear I see in your eyes?"
    },
    "victory": {
      1: "Impossible... Defeated by you?!",
      2: "You have proven yourself a worthy adversary.",
      3: "Bestowed in defeat... This is unacceptable."
    }},
  "zinzolin": {
    "encounter": {
      1: "You could become a threat to Team Plasma, so we will eliminate you here and now!",
      2: "Oh, for crying out loud... I didn't expect to have to battle in this freezing cold!",
      3: "You're an impressive Trainer to have made it this far. But it ends here."
    },
    "victory": {
      1: "Ghetsis... I have failed you...",
      2: "It's bitter cold. I'm shivering. I'm suffering. Yet, I still stand victorious.",
      3: "Hmph. You're a smarter Trainer than I expected, but not smart enough."
    }
  },
  "rood": {
    "encounter": {
      1: "You are a threat to Team Plasma. We cannot let you walk away from here and now!",
      2: "Oh, this icy wind... I never thought I'd have to fight here!",
      3: "You are a remarkable Trainer to have made it this far. But this is where it ends."
    },
    "victory": {
      1: "Ghetsis... I have failed my mission...",
      2: "The cold is piercing. I'm shivering. I'm suffering. Yet, I have triumphed.",
      3: "Hm. You are a talented Trainer, but unfortunately not talented enough."
    }
  },
  "xerosic": {
    "encounter": {
      1: "Ah ha ha! It would be my pleasure. Come on, little Trainer! Let's see what you've got!",
      2: "Hmm... You're more powerful than you look. I wonder how much energy there is inside you.",
      3: "I've been waiting for you! I need to do a little research on you! Come, let us begin!"
    },
    "victory": {
      1: "Ah, you're quite strong. Oh yes—very strong, indeed.",
      2: "Ding-ding-ding! You did it! To the victor go the spoils!",
      3: "Wonderful! Amazing! You have tremendous skill and bravery!"
    }
  },
  "bryony": {
    "encounter": {
      1: "I am Bryony, and it would be my pleasure to battle you. Show me what you've got.",
      2: "Impressive... You're more powerful than you appear. Let's see the true extent of your energy.",
      3: "I've anticipated your arrival. It's time for a little test. Shall we begin?"
    },
    "victory": {
      1: "You're quite strong. Oh yes—very strong, indeed.",
      2: "Ding-ding-ding! You've done well. Victory is yours.",
      3: "Wonderful! Remarkable! Your skill and bravery are commendable."
    }
  },
  "rocket_grunt": {
    "encounter": {
      1: "Prepare for trouble!"
    },
    "victory": {
      1: "Team Rocket blasting off again!"
    },
  },
  "magma_grunt": {
    "encounter": {
      1: " If you get in the way of Team Magma, don’t expect any mercy!"
    },
    "victory": {
      1: "Huh? I lost?!"
    },
  },
  "aqua_grunt": {
    "encounter": {
      1: "No one who crosses Team Aqua gets any mercy, not even kids!"
    },
    "victory": {
      1: "You're kidding me!"
    },
  },
  "galactic_grunt": {
    "encounter": {
      1: "Don't mess with Team Galactic!"
    },
    "victory": {
      1: "Shut down..."
    },
  },
  "plasma_grunt": {
    "encounter": {
      1: "We won't tolerate people who have different ideas!"
    },
    "victory": {
      1: "Plasmaaaaaaaaa!"
    },
  },
  "flare_grunt": {
    "encounter": {
      1: "Fashion is most important to us!"
    },
    "victory": {
      1: "The future doesn't look bright for me."
    },
  },
  "rocket_boss_giovanni_1": {
    "encounter": {
      1: "So! I must say, I am impressed you got here!"
    },
    "victory": {
      1: "WHAT! This cannot be!"
    },
    "defeat": {
      1: "Mark my words. Not being able to measure your own strength shows that you are still a child."
    }
  },
  "rocket_boss_giovanni_2": {
    "encounter": {
      1: "My old associates need me... Are you going to get in my way?"
    },
    "victory": {
      1: "How is this possible...?\nThe precious dream of Team Rocket has become little more than an illusion..."
    },
    "defeat": {
      1: "Team Rocket will be reborn again, and I will rule the world!"
    }
  },
  "magma_boss_maxie_1": {
    "encounter": {
      1: "I will bury you by my own hand. I hope you appreciate this honor!"
    },
    "victory": {
      1: "Ugh! You are... quite capable...\nI fell behind, but only by an inch..."
    },
    "defeat": {
      1: "Team Magma will prevail!"
    }
  },
  "magma_boss_maxie_2": {
    "encounter": {
      1: "You are the final obstacle remaining between me and my goals.\nBrace yourself for my ultimate attack! Fuhahaha!"
    },
    "victory": {
      1: "This... This is not.. Ngh..."
    },
    "defeat": {
      1: "And now... I will transform this planet to a land ideal for humanity."
    }
  },
  "aqua_boss_archie_1": {
    "encounter": {
      1: "I'm leader of Team Aqua, so I'm afraid it's the rope's end for you."
    },
    "victory": {
      1: "Let's meet again somewhere. I'll be sure to remember that face."
    },
    "defeat": {
      1: "Brilliant! My team won't hold back now!"
    }
  },
  "aqua_boss_archie_2": {
    "encounter": {
      1: "I've been waiting so long for this day to come.\nThis is the true power of my team!"
    },
    "victory": {
      1: "Like I figured..."
    },
    "defeat": {
      1: "I'll return everything in this world to its original, pure state!!"
    }
  },
  "galactic_boss_cyrus_1": {
    "encounter": {
      1: "You were compelled to come here by such vacuous sentimentality\nI will make you regret paying heed to your heart!"
    },
    "victory": {
      1: "Interesting. And quite curious."
    },
    "defeat": {
      1: "I will create my new world..."
    }
  },
  "galactic_boss_cyrus_2": {
    "encounter": {
      1: "So we meet again. It seems our fates have become intertwined.\nBut here and now, I will finally break that bond!"
    },
    "victory": {
      1: "How? How? HOW?!"
    },
    "defeat": {
      1: "Farewell."
    }
  },
  "plasma_boss_ghetsis_1": {
    "encounter": {
      1: "I won't allow anyone to stop me! No matter who does what!"
    },
    "victory": {
      1: "How can this be? I'm the creator of Team Plasma! I'm perfect!"
    },
    "defeat": {
      1: "I am the perfect ruler of a perfect new world! Mwa ha ha!"
    }
  },
  "plasma_boss_ghetsis_2": {
    "encounter": {
      1: "Come now! I want to see your face at the moment you lose all hope!"
    },
    "victory": {
      1: "My calculations... No! My careful schemes! The world should be mine!"
    },
    "defeat": {
      1: "Kyurem! Use Absofusion!"
    }
  },
  "flare_boss_lysandre_1": {
    "encounter": {
      1: "Do you want to stop me? Show me in battle."
    },
    "victory": {
      1: "You are here to stop me. But I ask you to wait. "
    },
    "defeat": {
      1: "Pokemon...Shall no longer exist."
    }
  },
  "flare_boss_lysandre_2": {
    "encounter": {
      1: "The future you want, or the future I want... Let us see which one is more deserving, shall we?"
    },
    "victory": {
      1: "Whaugh!"
    },
    "defeat": {
      1: "Fools with no vision will continue to befoul this beautiful world."
    }
  },
  "brock": {
    "encounter": {
      1: "我對岩石屬性寶可夢的專精會擊敗你！來吧！",
      2: "我磐石般的意志將壓倒你！",
      3: "讓我展示給你看看，我寶可夢真正的力量！",
    },
    "victory": {
      1: "你寶可夢的力量戰勝了我堅如磐石的防禦！",
      2: "世界很大！很高興有機會和你戰鬥。",
      3: "也許我應該回去追尋我成為寶可夢飼養員的夢想……",
    },
    "defeat": {
      1: "最好的進攻就是堅固的防守！$那是我做事的方式！",
      2: "下次來和我一起研究岩石屬性，$更好地了解如何與它們對戰！",
      3: "哈哈，我在各地的旅行有所回報了！",
    }
  },
  "misty": {
    "encounter": {
      1: "我的戰策就是使用水屬性寶可夢全面進攻！",
      2: "嗨，我會讓你見識我的水屬性寶可夢的力量！",
      3: "我的夢想是踏上旅程，與強大的訓練師戰鬥……$你能滿足我嗎？",
    },
    "victory": {
      1: "你真的很強……我承認，你有技術的……",
      2: "哼……你知道你只是運氣好，對吧？！",
      3: "哇，你太過分了！不敢相信你打敗我了！",
    },
    "defeat": {
      1: "強大的小霞對你來說，太過分了嗎？",
      2: "我希望你看到了我寶可夢優雅的游泳技巧！",
      3: "你的寶可夢無法匹敵我的心腹和驕傲！",
    }
  },
  "lt_surge": {
    "encounter": {
      1: "我的電屬性寶可夢在戰爭中救了我！$我來給你展示一下！",
      2: "立正！我要電到你投降！",
      3: "我會像對待敵軍一樣，狠狠電你！",
    },
    "victory": {
      1: "哇！你的隊伍有真傢伙，小子！",
      2: "啊啊，你很強！連我的電擊技巧都輸給了你。",
      3: "這失敗真是把我給電麻了！",
    },
    "defeat": {
      1: "哦耶！我的電屬性寶可夢是世界第一！",
      2: "哈哈哈！真是一場電動人心的戰鬥，小子！",
      3: "寶可夢對戰等於戰爭，$我向你展示了軍隊中的格鬥技巧！",
    }
  },
  "erika": {
    "encounter": {
      1: "啊，這裡天氣真好…$哦，對戰？那好吧。",
      2: "我在寶可夢對戰上的造詣，$可以與我的插花技巧相媲美。",
      3: "哦，希望我寶可夢的宜人香氣\n不會再讓我睡著…",
      4: "看看花園裡的花朵，如此令人心曠神怡。",
    },
    "victory": {
      1: "哦！我認輸啦~",
      2: "這場比賽非常愉快。",
      3: "啊，看來我輸了…",
      4: "哦，我的天哪。",
    },
    "defeat": {
      1: "我怕我會打瞌睡…",
      2: "哦，我天。看來我的草屬性寶可夢擊敗了你。",
      3: "那場戰鬥是如此令人心曠神怡。",
      4: "哦…這就完啦？",
    }
  },
  "janine": {
    "encounter": {
      1: "我正在掌握毒屬性攻擊的藝術。$今天我來和你過過招！",
      2: "父親相信我能獨當一面。$我來證明他說的對！",
      3: "我的忍術，僅次於我的父親！$你能跟的上嗎？",
    },
    "victory": {
      1: "就算現在，我仍然需要繼續訓練…我明白了。",
      2: "你的戰鬥技巧，超過了我。",
      3: "我要好好努力提高我的技術。",
    },
    "defeat": {
      1: "呵呵…毒液耗盡了你所有的力量。",
      2: "哈！你根本無法抵擋我卓越的忍技！",
      3: "我沒有辜負父親對我的信任。",
    }
  },
  "sabrina": {
    "encounter": {
      1: "我的超能力預見了你的到來！",
      2: "我不喜歡戰鬥，但如果你想，$我會展示我的實力！",
      3: "我能感覺到你的雄心壯志。$我倒要看看你是不是虛有其表。",
    },
    "victory": {
      1: "你的力量……遠遠超出了我的預知……",
      2: "我沒有準確預測到你的實力。",
      3: "即使我強大的超能力也無法感知到你這樣強大的人。",
    },
    "defeat": {
      1: "這場勝利……和我看到的未來一樣啊！",
      2: "也許我預感到有強大實力的人，是另一個……",
      3: "在你奮不顧身投入戰鬥之前，\n磨練你的能力。$如果你這樣做，你才未來可期……",
    }
  },
  "blaine": {
    "encounter": {
      1: "哈！希望你帶了燒傷治療藥！",
      2: "我火熱的寶可夢將所有挑戰者都焚燒殆盡！",
      3: "準備好玩火吧！",
    },
    "victory": {
      1: "我已經焚燒殆盡了！甚至連灰燼都沒有留下！",
      2: "我沒有把火焰煽得足夠高嗎？",
      3: "我燃盡了……但這讓我進步的動力燃燒得更旺了！",
    },
    "defeat": {
      1: "我的熊熊烈火無法被撲滅！",
      2: "我的寶可夢因這次勝利而變得更加強大！",
      3: "哈！我的激情燃得比你的更熱烈！",
    }
  },
  "giovanni": {
    "encounter": {
      1: "我，火箭隊的領袖，\n會讓你的世界感受到痛苦！",
      2: "我在這裡的訓練在我再次面對老朋友之前至關重要。",
      3: "我認為你還沒有準備好迎接你即將經歷的失敗！",
    },
    "victory": {
      1: "什麼！我輸了？！ 我沒什麼可和你說的！",
      2: "哼……你永遠無法理解我希望實現的目標。",
      3: "這次失敗只是暫時的。$我將找準時機，讓火箭隊浴火重生。",
    },
    "defeat": {
      1: "不知自己幾斤幾兩，\n說明你仍然只是一個孩子。",
      2: "不要再試圖干涉我。",
      3: "我希望你明白挑戰我是多麼愚蠢。",
    }
  },
  "roxanne": {
    "encounter": {
      1: "您能否展示一下您是如何戰鬥的麼？",
      2: "你可以和更多訓練師戰鬥來學到很多東西。",
      3: "哦，被你抓到我正在用功了~$你想戰鬥嗎？",
    },
    "victory": {
      1: "哦，看來我輸了。$我明白了。",
      2: "看來我在戰鬥方面還有更多東西要學。",
      3: "我會把今天在這裡學到的東西銘記於心。",
    },
    "defeat": {
      1: "從我們的對戰中，我學到了很多。$希望你也是。",
      2: "我期待再次與你戰鬥。$希望你能運用在此學到的東西。",
      3: "我憑借我所學到的一切贏得了勝利。",
    }
  },
  "brawly": {
    "encounter": {
      1: "哦，夥計，挑戰者！$讓我看看你的能耐！",
      2: "你看起來很厲害嘛。$來對戰吧！",
      3: "是時候掀起風暴了！$我們上吧！",
    },
    "victory": {
      1: "哦哇，你把我沖走了！",
      2: "你駕馭了我的海浪，把我打敗了！",
      3: "我覺得我就像是在武鬥洞窟裡迷路了！",
    },
    "defeat": {
      1: "哈哈，我駕馭了大浪！$有時間再挑戰我吧。",
      2: "再和我一起衝浪吧！",
      3: "就像潮水的漲落，\n我希望你也能再來挑戰我。",
    }
  },
  "wattson": {
    "encounter": {
      1: "是時候被電擊了！$哈哈哈！",
      2: "我要讓火星子飛蹦！$哈哈哈！",
      3: "我希望你帶了麻痺藥！$哇哈哈哈！",
    },
    "victory": {
      1: "看來我的電量用完了！$哇哈哈哈！",
      2: "你完全接地了是吧！$哇哈哈哈！",
      3: "謝謝你給我電了一下！$哇哈哈哈！",
    },
    "defeat": {
      1: "電充充滿，有時間再挑戰我吧！$哇哈哈哈！",
      2: "我希望你覺得我們的戰鬥激情似電！$哇哈哈哈！",
      3: "你沒想到我贏了吧？$哇哈哈哈！",
    }
  },
  "flannery": {
    "encounter": {
      1: "很高興見到你！等等，不對……$我要粉碎你！",
      2: "我才當道館主沒多久，\n但我會讓你灰飛煙滅！",
      3: "是時候展示爺爺教給我的招式了！來對戰吧！",
    },
    "victory": {
      1: "你讓我想起了我的爺爺……$難怪我輸了。",
      2: "我是不是太努力了？$我應該放鬆，不能太上頭了。",
      3: "失敗才不會嗆到我。$是時候重新點燃訓練了！",
    },
    "defeat": {
      1: "我希望我讓祖父感到驕傲了……$有時間我們再戰鬥吧。",
      2: "我……我簡直不敢相信我贏了！$按照自己的方式做事奏效了！",
      3: "早點用炙熱的招式再來交手吧！",
    }
  },
  "norman": {
    "encounter": {
      1: "我沒想到你能一路來到這裡。$我們來對戰吧。",
      2: "作為道館主，我會盡一切努力贏得勝利。$我們開始吧！",
      3: "你最好全力以赴。$對戰的時候到了！",
    },
    "victory": {
      1: "我輸給了你……？$但規則就是規則。",
      2: "難道我不該從城都搬家嗎……？",
      3: "我不敢相信。$這是一場好對戰。",
    },
    "defeat": {
      1: "我們都盡力了。$希望我們不久之後能再對戰。",
      2: "你應該嘗試挑戰我的孩子。$可能會有一些收穫！",
      3: "謝謝你精彩的戰鬥。$下次好運。",
    }
  },
  "winona": {
    "encounter": {
      1: "我一直在天空中翱翔尋找獵物…$而你就是我的目標！",
      2: "不管戰況如何，我都會和我的飛行寶可夢$以優雅的姿態獲勝。來戰鬥吧！",
      3: "我希望你不怕高。$我們一起升上高空吧！",
    },
    "victory": {
      1: "你是我見過的第一位比我更有風度的訓練師。$打的非常出色。",
      2: "哦，我的飛行系寶可夢都已經墜落了！$好吧。",
      3: "儘管我倒下了，我的寶可夢將繼續翱翔！",
    },
    "defeat": {
      1: "我與我的飛行系寶可夢，\n將永遠優雅地起舞！",
      2: "我希望你喜歡我們的演出。$我們優雅的舞蹈已經落幕。",
      3: "你願意再來觀看我們優雅的編舞嗎？",
    }
  },
  "tate": {
    "encounter": {
      1: "嘿嘿嘿…$看到我沒和妹妹在一起，很驚訝麼？",
      2: "我可以讀懂你在想什麼…$你想要戰鬥！",
      3: "你如何擊敗一個…$讀懂你一舉一動的人？",
    },
    "victory": {
      1: "贏不了啊…$我想小南了…",
      2: "你和寶可夢之間的聯繫比我們更強。",
      3: "如果我和小南聯手，我們會贏的。$我們可以了解彼此的想法！",
    },
    "defeat": {
      1: "我和我的寶可夢無與倫比！",
      2: "如果你連我都打不過，\n你肯定也打不過小南。",
      3: "這多虧了我和小南的嚴格訓練。$我可以與寶可夢一心同體。",
    }
  },
  "liza": {
    "encounter": {
      1: "呵呵呵…$看到我沒和哥哥一起，很驚訝嗎？",
      2: "我可以讀懂你渴望什麼…$你想戰鬥，不是嗎？",
      3: "你如何擊敗一個…$與寶可夢們一心同體的人？",
    },
    "victory": {
      1: "贏不了啊…$我想小楓了…",
      2: "你和寶可夢之間的聯繫…$比我強。",
      3: "如果我和小楓在一起，我們會贏的。$我們甚至可以接上彼此的話！",
    },
    "defeat": {
      1: "我和我的寶可夢勢不可擋。",
      2: "如果你連我都打不過，\n你肯定也打不過小楓。",
      3: "這多虧了我和小楓的嚴格訓練。$我可以與我的寶可夢一心同體。",
    }
  },
  "juan": {
    "encounter": {
      1: "別害羞啊。$我們來戰鬥吧！",
      2: "啊哈哈哈，敬請期待\n我和水屬性寶可夢的盛大演出！",
      3: "我就是正在逼近的風暴！$你能經受住考驗嗎？",
      4: "請你見證我們的表演。$由我和寶可夢共同創造的宏偉水之幻境！",
    },
    "victory": {
      1: "你可能是一個能挑戰米可利的天才！",
      2: "我專注於優雅，而你刻苦鍛鍊。$你能擊敗我是很正常的。",
      3: "啊哈哈哈！$好吧，這次你贏了。",
      4: "從你身上，我感受到了技巧的光輝，\n它將戰勝一切。",
    },
    "defeat": {
      1: "寶可夢和我創造的水之幻境，讓我取得了勝利。",
      2: "啊哈哈哈，我贏了，你輸了。",
      3: "要我把我的服裝借給你嗎？\n可能能幫到你對戰啊！$啊哈哈哈，我開玩笑的！",
      4: "我是贏家！也就是說，你輸了。",
    }
  },
  "crasher_wake": {
    "encounter": {
      1: "極限! 極限! 看好了!$極限假面…就此…登場!",
      2: "極限! 極限! 極限假面!",
      3: "我是滔滔巨浪，將你沖走！",
    },
    "victory": {
      1: "我真是笑得合不攏嘴啊！$哈哈哈！那真是太有趣了！",
      2: "呼哇！結束收尾了！$我該怎麼說呢……$我還想再對戰！我還想再繼續戰鬥！",
      3: "啊啊啊啊啊!?",
    },
    "defeat": {
      1: "耶！就是這樣！",
      2: "我贏了，但我還想要更多！\n我還想再更多地戰鬥！",
      3: "再見！",
    }
  },
  "falkner": {
    "encounter": {
      1: "我將向你展示華麗的飛行寶可夢真正的力量！",
      2: "風啊，伴我同行！",
      3: "爸爸！我希望你能在空中注視著我的戰鬥！",
    },
    "victory": {
      1: "明白了……我會禮貌地退場。",
      2: "輸了就是輸了。你確實很強大。",
      3: "…行吧! 嗯, 我輸了。",
    },
    "defeat": {
      1: "爸爸！我用你珍愛的飛行寶可夢贏了……",
      2: "飛行系寶可夢才是最強的！",
      3: "感覺我正在追趕上我的父親！",
    }
  },
  "nessa": {
    "encounter": {
      1: "無論你的小腦瓜子在搞什麼陰謀詭計，$我和我的搭檔都會確保它石沉大海。",
      2: "我來這裡可不是為了閒聊，\n而是為了贏！",
      3: "這是我的寶可夢給你的一點小禮物……\n我希望你能接受！",
    },
    "victory": {
      1: "你和你的寶可夢太過分了……",
      2: "怎麼……？這怎麼可能？！",
      3: "我完全被沖走了！",
    },
    "defeat": {
      1: "洶湧的海浪再次襲來！",
      2: "是時候乘風破浪，取得勝利了！",
      3: "誒嘿嘿！",
    }
  },
  "melony": {
    "encounter": {
      1: "我不會手下留情！",
      2: "好吧，我想我們應該開始了。",
      3: "我會把你凍得結結實實的！",
    },
    "victory": {
      1: "你……你可厲害了，是不是？",
      2: "如果你找到瑪瓜，一定要好好教訓他，好嗎？",
      3: "你的破冰方式有點過於直接了呢……",
    },
    "defeat": {
      1: "現在你知道戰鬥有多殘酷了吧？",
      2: "嘿！看來我又贏了！",
      3: "你是在保留實力嗎？",
    }
  },
  "marlon": {
    "encounter": {
      1: "你看起來很強！來吧！讓我們開始吧！",
      2: "我的強大像大海一樣無邊無際。$你會被我沖走，絕對的。",
      3: "哦豁，由我來面對你！這可不得了咯！",
    },
    "victory": {
      1: "你太厲害了！\n你培養了一些非常強大的寶可夢啊，$你已經掌握了訓練師的精髓！",
      2: "你不僅僅是看起來，\n你是真的強，真的！$呃，我也被沖走了！",
      3: "你像兇猛的波浪一樣強壯！",
    },
    "defeat": {
      1: "你很強，但這還不足以動搖大海，懂？",
      2: "嘻！看來我又贏了！",
      3: "甜蜜的勝利！",
    }
  },
  "shauntal": {
    "encounter": {
      1: "打擾了。你是挑戰者，對嗎？$我是四天王的幽靈系寶可夢使用者，$婉龍，我將是你的對手。",
      2: "我非常喜歡描寫來到這裡的訓練師，\n以及他們訓練的寶可夢。$我可以用你和你的寶可夢作為主題嗎？",
      3: "每個與寶可夢相處的人都有故事要講。$接下來要講的故事是怎樣的呢？",
    },
    "victory": {
      1: "哇。我驚呆了！",
      2: "對…對不起！我必須先向我的寶可夢道歉……$都是因為我讓你們有了不好的經歷，真的很抱歉！",
      3: "你要知道，我仍然是四天王之一！",
    },
    "defeat": {
      1: "額呵呵。",
      2: "給了我下一部小說的絕佳素材！",
      3: "就這樣，又一篇故事來到尾聲……",
    }
  },
  "marshal": {
    "encounter": {
      1: "我的師傅，阿戴克，\n看到了你作為訓練師的潛力，$對你很有興趣。$我要來考驗你——挖掘你力量的極限。\n丹田發力！",
      2: "勝利，決定性的勝利，\n正是我所求！挑戰者，我來了！",
      3: "在我的心中，我尋求著成為戰士的力量，\n克服自身的所有弱點！$以我的信念，取勝！",
    },
    "victory": {
      1: "呼！幹得好！",
      2: "不要停止戰鬥，追求更高的目標！",
      3: "你和你寶可夢展現的力量\n給我留下了深刻的印象……",
    },
    "defeat": {
      1: "嗯…",
      2: "這真是場好戰鬥。",
      3: "哈啊！哈啊！嗨呀啊！",
    }
  },
  "cheren": {
    "encounter": {
      1: "你讓我想起了一位老朋友。$這讓我對這場寶可夢戰鬥感到興奮！",
      2: "不考慮清楚這一點，\n寶可夢對戰就沒有了意義。$這就是失去了和寶可夢一同戰鬥的意義。",
      3: "我的名字是黑連！我是道館館主，\n也是老師！$很高興認識你。",
    },
    "victory": {
      1: "謝謝……我又能發現自己的不足了。",
      2: "謝謝…接近理想的道路…我好像隱約看到了。",
      3: "嗯……這值得思考。",
    },
    "defeat": {
      1: "作為道館館主，我要成為你要跨越的壁壘！",
      2: "好吧！",
      3: "正因為有寶可夢，我們才能走到這裡。$為什麼寶可夢會幫助我們，\n這個恐怕不僅是寶可夢與訓練家…$而是生命與生命之間的問題。",
    }
  },
  "chili": {
    "encounter": {
      1: "咿呀！是時候玩火了！！我是三兄弟中最強的！",
      2: "嗒噠！如火似焰的伯特——就是我\n——你接下來的對手！",
      3: "我將向你展示，\n我和我熾熱的火系寶可夢的能耐！",
    },
    "victory": {
      1: "被你幹掉了。我……燃盡了……",
      2: "哇吼！你燃起來了！",
      3: "啊！被你幹碎了！",
    },
    "defeat": {
      1: "我燃起來啦！和我玩兒，你就會被燙傷！",
      2: "你要是玩兒火，就會被燙傷！",
      3: "我說，拜託，\n你的對手是我，沒機會贏的！",
    }
  },
  "cilan": {
    "encounter": {
      1: "無關個人情感…也不會有艱難的感受…$我和我的草屬性寶可夢會…$呃…不管什麼樣的對手我們都會應戰的。",
      2: "所以，呃，如果你願意的話，我會，\n呃，盡我所能做好，呃，你知道的，你的對手。",
      3: "好吧……所以，我是天桐，\n我喜歡草屬性寶可夢。",
    },
    "victory": {
      1: "呃……已經結束了嗎？",
      2: "…真是太意外了。你真…強。$看起來就算是伯特或寇恩都贏不了你…",
      3: "…嗯。看起來我來的…不是時候？",
    },
    "defeat": {
      1: "哈？我贏了？",
      2: "我想…$我想我贏了，因為我一直在和我的兄弟伯特和寇恩競爭，\n我們都變得更強了。",
      3: "…這…這是一次非常嚇人的經歷呢…",
    }
  },
  "roark": {
    "encounter": {
      1: "我需要看看你作為訓練師的潛力。$還有，我要看看與你並肩作戰的寶可夢的堅韌！",
      2: "來吧！這些是我的岩石系寶可夢，我的驕傲！",
      3: "岩石屬性寶可夢就是最強的！",
      4: "我要看看你作為訓練師的潛力。$還要看看與你並肩作戰的寶可夢的堅韌！",
    },
    "victory": {
      1: "什麼？不可能！我強化的寶可夢們！",
      2: "……我大腦過載了。$下次邀請你參加地下的化石挖掘比賽。",
      3: "有你這種技術，贏得勝利是很正常的。",
      4: "什麼？！連這也不夠？",
      5: "我搞砸了。",
    },
    "defeat": {
      1: "看？我為我的搖滾戰鬥風格感到驕傲！",
      2: "謝謝！這場戰鬥給了我自信，$我感覺能夠打敗我父親了！",
      3: "我感覺就像我砸穿了一塊頑石！",
    }
  },
  "morty": {
    "encounter": {
      1: "只要我再多努力一點，我就能看到我遇到傳說中的寶可夢的未來！$你會幫助我達到那個水平！",
      2: "據說，彩虹色的寶可夢會\n出現在真正強大的訓練師面前。 $我一直相信著這個美麗的傳說，\n所以，從出生開始，\n就在這裡進行著秘密的修行。$因為這樣，其他人看不到的東西\n我也能夠看得到…$我看到的，是那個將傳說中的寶可夢\n召喚到這片大地上的人的影子。$我一直相信，那就是我自己！\n希望你也能助我一臂之力！",
      3: "無論你相信還是不相信，神秘的力量確實存在。",
      4: "你可以見證我訓練的成果。",
      5: "你必須讓你與寶可夢的靈魂合二為一。你能做到嗎？",
      6: "嘿，你想成為我訓練的一部分嗎？",
    },
    "victory": {
      1: "我還不夠好……",
      2: "我明白了…你的旅程…去了遙遠的地方，你見過的比我多得多。$我羨慕你…",
      3: "這怎麼可能……",
      4: "我認為我們的潛力沒什麼不同。$但是，我覺得你並不簡單，似乎還有什麼……",
      5: "我想我需要更多的訓練。",
      6: "那太遺憾了",
    },
    "defeat": {
      1: "我又向前邁進了一步。",
      2: "呵呵呵……",
      3: "什…麼？！那還不夠？",
      4: "我感覺就像我砸穿了一塊頑石！",
      5: "哈哈哈啊！",
      6: "我知道我會贏！",
    }
  },
  "crispin": {
    "encounter": {
      1: "我想贏，所以接下來我正要贏！",
      2: "我想對戰就對戰！懂嗎！就應該這樣！",
    },
    "victory": {
      1: "我想贏……但我還是輸了！",
      2: "我輸了……因為我贏不了！",
    },
    "defeat": {
      1: "嘿，等一下。我是不是贏了？$我覺得我贏了！太滿足了！",
      2: "哇哦！那太棒了！",
    }
  },
  "amarys": {
    "encounter": {
      1: "我想幫助某個人。因此，我不能輸。$…我們的戰鬥現在開始。",
    },
    "victory": {
      1: "我還不夠，我明白了。",
    },
    "defeat": {
      1: "勝利屬於我。打得好。",
    }
  },
  "lacey": {
    "encounter": {
      1: "我將用我平時的隊伍\n作為四天王的一員面對你。",
    },
    "victory": {
      1: "打得真好呀~",
    },
    "defeat": {
      1: "讓我們為你寶可夢的努力給予熱烈的掌聲！",
    }
  },
  "drayton": {
    "encounter": {
      1: "哥們，我喜歡椅子。\n你喜歡椅子嗎？簡直是救星。$我不明白為什麼大家不一直坐著。\n站著多累人！",
    },
    "victory": {
      1: "我早該想到的！",
    },
    "defeat": {
      1: "嘿嘿嘿！別介意我，\n我只是在這裡小贏一下。$如果你不開心，我懂，\n但別因為我對烏栗發火，OK？",
    }
  },
  "ramos": {
    "encounter": {
      1: "我用那些強壯的植物\n蓋出來的遊樂場精彩嗎？$它們的力量象徵著我這個園丁兼道館館主的實力，\n你真的確定能夠與之抗衡嗎？",
    },
    "victory": {
      1: "你信任你的寶可夢，\n它們也信任你…不錯的戰鬥，小豆芽。",
    },
    "defeat": {
      1: "呵呵呵…確實，\n脆弱的小草甚至能穿透混凝土。",
    }
  },
  "viola": {
    "encounter": {
      1: "敗陣時的後悔，勝利的瞬間…$都是最棒的影象！很好呀，很好呀！$那麼來吧！",
      2: "我的鏡頭總會聚焦在勝利上，\n我不會讓任何事情破壞這個畫面！",
    },
    "victory": {
      1: "你和你的寶可夢向我展示了一個全新的鏡頭機位！\n很好呀，很好呀！",
      2: "你通過鏡頭看到的世界，\n和你與寶可夢並肩作戰時看到的世界…$視角不同，即使是同一個世界看起來也完全不同。",
    },
    "defeat": {
      1: "我勝利那一刻的照片，\n將是一個真正的贏家，對吧！",
      2: "是的！我拍了些很棒的照片！",
    }
  },
  "candice": {
    "encounter": {
      1: "向小菘我挑戰嗎？好啊！\n我就是在等待強者$但是我也氣勢高昂，很強哦？",
      2: "寶可夢也好，時尚也好，戀愛也好，\n無論做什麼都氣勢高昂！$就說到這兒吧，讓你見識一下我的氣勢，\n要做好覺悟哦！",
    },
    "victory": {
      1: "好厲害！我有點尊敬你了。",
      2: "好厲害！我有點尊敬你了！$嗯，感覺是被你的氣勢給壓倒了。",
    },
    "defeat": {
      1: "你的氣勢我看到了，但我還是不會輸的！",
      2: "怎麼樣？小菘我的氣勢！\n寶可夢們的氣勢滿滿哦！",
    }
  },
  "gardenia": {
    "encounter": {
      1: "你身上有一種勝利的氣息。\n那麼不管怎樣，$這應該會是場有趣的戰鬥。\n讓我們對戰吧！",
    },
    "victory": {
      1: "太棒了！你可擅長對戰了，不是嗎？",
    },
    "defeat": {
      1: "太好了！我的寶可夢和我都很棒！",
    }
  },
  "aaron": {
    "encounter": {
      1: "好的！讓我來接受你的挑戰！",
    },
    "victory": {
      1: "戰鬥是一件深刻而複雜的事情……",
    },
    "defeat": {
      1: "戰勝一位四天王並不容易。",
    }
  },
  "cress": {
    "encounter": {
      1: "沒！錯！你必須面對\n與我和我高貴的水屬性的戰鬥！",
    },
    "victory": {
      1: "輸了？我？我不敢相信。",
    },
    "defeat": {
      1: "當你的對手是我時，這是必然的結果。",
    }
  },
  "allister": {
    "encounter": {
      1: "我是歐尼奧。$我…我來了……",
    },
    "victory": {
      1: "我差點被嚇得丟了面具…那真是…$哇。我可以看清你真正的實力。",
    },
    "defeat": {
      1: "這真是太棒了！",
    }
  },
  "clay": {
    "encounter": {
      1: "咳咳! 讓我好等，不是嗎，孩子？$好吧，是時候看看你能做到什麼了！",
    },
    "victory": {
      1: "真是的……我先說好，\n我可沒有手下留情。",
    },
    "defeat": {
      1: "最重要的是輸掉的時候該怎麼辦。$只要你能在失敗中找到教訓，\n就能夠不斷地成長！",
    }
  },
  "kofu": {
    "encounter": {
      1: "我會給你上一整道水系寶可夢大餐！\n但別真吃了它們！",
    },
    "victory": {
      1: "吃了嗎！你真是活力又新鮮啊，\n不是嗎！$就是有點太鮮活了！",
    },
    "defeat": {
      1: "你要再來找我，聽見了嗎？",
    }
  },
  "tulip": {
    "encounter": {
      1: "請讓我運用我的化妝技巧，$讓你可愛的小寶可夢變得更美麗！",
    },
    "victory": {
      1: "你妝點的力量宛如魔法加固，\n完全沖洗不掉啊。",
    },
    "defeat": {
      1: "你知道嗎，在我這行，\n那些沒天賦的人往往會很快消失，$再也不會被提起。",
    }
  },
  "sidney": {
    "encounter": {
      1: "你給我的印象不錯，\n我猜這會是一場精彩的對戰。$很棒！看起來真的很棒！$你和我，讓我們享受一場\n只能在這裡上演的戰鬥吧！",
    },
    "victory": {
      1: "嗯，你覺得怎樣？我輸了！\n嗯，不過這很有趣，所以無所謂啊。",
    },
    "defeat": {
      1: "別介意，OK？",
    }
  },
  "phoebe": {
    "encounter": {
      1: "過去我在修行時得到了\n能與幽靈寶可夢親密交流的能力。$沒錯，我和寶可夢之間\n有著強烈的羈絆。$那麼，來試試看你有沒有能力\n傷到我的寶可夢吧！",
    },
    "victory": {
      1: "哦，天呀。我輸了。",
    },
    "defeat": {
      1: "我期待著下次再和你戰鬥！",
    }
  },
  "glacia": {
    "encounter": {
      1: "我在這兒見到的盡是些\n弱不禁風的訓練家和寶可夢。$你又如何呢？如果你能讓我不得不用\n上全力的話就再好不過了！",
    },
    "victory": {
      1: "你和你的寶可夢…\n你們的靈魂燃燒得多麼熱烈啊！$這股激烈的熱能仿佛能征服一切。\n$難怪我的冰屬性技巧也奈何不了你了。",
    },
    "defeat": {
      1: "一場充滿激情的戰鬥，確實。",
    }
  },
  "drake": {
    "encounter": {
      1: "對於我們這些將寶可夢視為\n同伴一同戰鬥的訓練家來說，$你知道怎樣才能贏得勝利嗎？\n你知道獲得勝利的條件嗎？$如果你不知道，\n那麼你永遠也無法戰勝我！",
    },
    "victory": {
      1: "幹得漂亮，就是這樣。",
    },
    "defeat": {
      1: "我在這場戰鬥中全力以赴了！",
    }
  },
  "wallace": {
    "encounter": {
      1: "你的氣質變了，\n我能感覺到這一點。$現在，把你和你的寶可夢\n的力量展現給我看吧。$作為回禮，就由我和我的寶可夢\n演出一場水之幻影吧！",
    },
    "victory": {
      1: "精彩。此刻，我能從你身上感覺到\n身為寶可夢訓練家的可靠與高貴。$我真榮幸能遇到你和你的寶可夢。",
    },
    "defeat": {
      1: "偉大的幻影！",
    }
  },
  "lorelei": {
    "encounter": {
      1: "只要能讓我用冰屬性寶可夢，\n就絕對沒人能贏得過我！\n能凍住對方可是很厲害的哦！$因為如果被凍住，你的寶可夢就無法動彈了！\n啊哈哈！你做好覺悟了吧！",
    },
    "victory": {
      1: "你怎麼敢！",
    },
    "defeat": {
      1: "一旦你被凍結，你就什麼都做不了。",
    }
  },
  "will": {
    "encounter": {
      1: "我曾經環遊世界，\n日以繼夜地做著超能力寶可夢的修行之旅。$我會不斷變強！沒理由會在這裡輸掉！",
    },
    "victory": {
      1: "……不會吧……",
    },
    "defeat": {
      1: "就差一點。\n我想知道你缺少了什麼。",
    }
  },
  "malva": {
    "encounter": {
      1: "我的內心可是一直燃燒著呢。$燃燒著對你的怒火！",
    },
    "victory": {
      1: "挑戰者出色地擊敗了四天王之一，帕琦拉。",
    },
    "defeat": {
      1: "真開心啊，能將你徹底粉碎！",
    }
  },
  "hala": {
    "encounter": {
      1: "老哈拉讓你放開嗓子！"
    },
    "victory": {
      1: "我能感受到你在旅途中所獲得的力量。"
    },
    "defeat": {
      1: "啊哈哈。多麼有趣的戰鬥。"
    }
  },
  "molayne": {
    "encounter": {
      1: "我將隊長的位置讓給了我的表弟馬瑪內,\n但我對自己的能力很有信心。 $我的力量就像超新星一樣！",
    },
    "victory": {
      1: "我發現了一個有趣的訓練師對手！",
    },
    "defeat": {
      1: "啊哈哈。多麼有趣的戰鬥。",
    }
  },
  "rika": {
    "encounter": {
      1: "我要對你手下留情，但……騙你的啦！ $好好動腦！",
    },
    "victory": {
      1: "不錯，小子。",
    },
    "defeat": {
      1: "啊哈哈哈哈！你真的很特别，小子！",
    }
  },
  "bruno": {
    "encounter": {
      1: "我們將用勢不可擋的力量磨滅你！呼哈！",
    },
    "victory": {
      1: "為什麼？我怎麼會輸？",
    },
    "defeat": {
      1: "你可以隨意挑戰我，\n但結果永遠不會改變！",
    }
  },
  "bugsy": {
    "encounter": {
      1: "我是阿筆！\n對蟲系寶可夢的熟悉不會輸給任何人的！",
    },
    "victory": {
      1: "哇，太棒了！\n你是個寶可夢專家！$我的研究還沒有完成。\n好吧，你贏了。",
    },
    "defeat": {
      1: "謝謝！多虧了我們的戰鬥，\n我的研究也取得了進展！",
    }
  },
  "koga": {
    "encounter": {
      1: "哇哈哈哈哈！$寶可夢不僅僅是關於蠻力，拭目以待吧！",
    },
    "victory": {
      1: "啊！你證明了自己！",
    },
    "defeat": {
      1: "懂不懂要對忍者的技巧心神畏懼？",
    }
  },
  "bertha": {
    "encounter": {
      1: "啊，讓老婆婆看看你學到了什麼？",
    },
    "victory": {
      1: "好吧，親愛的孩子，\n不得不說，那令人印象深刻。$你的寶可夢相信你並盡最大努力為你贏得勝利。$儘管我輸了，\n我也止不住笑呢！",
    },
    "defeat": {
      1: "哈哈哈！看來老婆婆我贏了！",
    }
  },
  "lenora": {
    "encounter": {
      1: "那麼，挑戰者，讓我來研究$你與你精心養育的寶可夢要如何戰鬥！",
    },
    "victory": {
      1: "我關於你的理論是正確的。$你不僅僅是有天賦……你很努力！\n我向你致敬！",
    },
    "defeat": {
      1: "啊哈哈！如果你輸了，\n一定要分析原因，$並在下一場戰鬥中運用那些知識！",
    }
  },
  "siebold": {
    "encounter": {
      1: "只要我活著，我將不斷努力尋求終極美食…$以及和最強的對手戰鬥！",
    },
    "victory": {
      1: "您的事蹟，我志米銘記在心。",
    },
    "defeat": {
      1: "我們的寶可夢戰鬥就像我靈魂的養料。\n它將讓我繼續前進。$這就是我將向你表示敬意的方式，\n感謝你在戰鬥中全力以赴！",
    }
  },
  "roxie": {
    "encounter": {
      1: "準備好了嗎！我要給你上一課！",
    },
    "victory": {
      1: "夠野的！你的想法比我的還要毒！",
    },
    "defeat": {
      1: "嘿，拜託！認真點！\n你要加把勁啊!",
    }
  },
  "olivia": {
    "encounter": {
      1: "沒什麼開場白。\n是時候和我麗姿，戰鬥了！",
    },
    "victory": {
      1: "真的很可愛……你和你的寶可夢……",
    },
    "defeat": {
      1: "嗯哼。",
    }
  },
  "poppy": {
    "encounter": {
      1: "哦！你想和我進行寶可夢對戰麼？",
    },
    "victory": {
      1: "嗚哇？！嘛……",
    },
    "defeat": {
      1: "耶！我做到了！我擊~敗~了~你！\n你可以來…打…復仇之戰？$只要你想，隨時來打復仇之戰吧！",
    }
  },
  "agatha": {
    "encounter": {
      1: "寶可夢是用來戰鬥的！我會讓你看看真正訓練家的戰鬥！"
    },
    "victory": {
      1: "哦，我的天！你真是個特別的孩子！"
    },
    "defeat": {
      1: "哈哈哈，這才是正確的戰鬥方式！"
    }
  },
  "flint": {
    "encounter": {
      1: "希望你已經熱身完畢，\n因為這裡即將大爆炸！",
    },
    "victory": {
      1: "不可思議！$你的動作如此火熱，讓我看起來溫吞吞的！",
    },
    "defeat": {
      1: "嗯？就這嗎？\n我覺得你得再激情點。",
    }
  },
  "grimsley": {
    "encounter": {
      1: "一無所有，\n或者，贏下所有！",
    },
    "victory": {
      1: "一旦失敗，\n就意味著失去一切……$下一次我要追尋勝利！",
    },
    "defeat": {
      1: "如果有人贏了，\n和他對戰的人就會輸。",
    }
  },
  "caitlin": {
    "encounter": {
      1: "當花兒綻開時、我便出現。\n成為你在等待的人…$你似乎同時具備實力和善意$我所尋找的是擁有卓越力量的對手…$請用出你的全力吧！",
    },
    "victory": {
      1: "我和我的寶可夢學到了很多！非常感謝。",
    },
    "defeat": {
      1: "我渴望以優雅的姿態取得勝利。",
    }
  },
  "diantha": {
    "encounter": {
      1: "與你的寶可夢對戰\n讓你充滿了未來的希望…$說真的，這讓我更有活力地面對新的一天，確實如此！",
    },
    "victory": {
      1: "擁有高尚靈魂的訓練家和寶可夢的身姿，\n讓我的心激烈地震顫…",
    },
    "defeat": {
      1: "哦，太棒了！你覺得怎麼樣？\n我的隊伍很酷吧~對吧？",
    }
  },
  "wikstrom": {
    "encounter": {
      1: "年輕的挑戰者，幸會！\n我乃是著名的鋼鐵之刃，公爵雁鎧! $讓我們開始戰鬥吧！預備！",
    },
    "victory": {
      1: "輝煌！你與你尊貴的\n寶可夢之間的信任居然勝過了我！",
    },
    "defeat": {
      1: "哦哦哦！這是怎麼回事，\n我的心止不住地在震顫！ $與如此有價值的對手的勝利\n讓我的靈魂飛翔——我心翱翔！",
    }
  },
  "acerola": {
    "encounter": {
      1: "對戰只是找個樂子！來吧，我來會會你！",
    },
    "victory": {
      1: "我……我說不出話！你是怎麼做到的？！",
    },
    "defeat": {
      1: "哈哈！真是嚇人倒怪的勝利呀！",
    }
  },
  "larry_elite": {
    "encounter": {
      1: "……你好，我是青木。$麻煩的是我還要兼任四天王。",
    },
    "victory": {
      1: "好吧，我們翅膀下的疾風止於你這了啊…",
    },
    "defeat": {
      1: "是時候和老闆開會了。",
    }
  },
  "lance": {
    "encounter": {
      1: "我一直在等你。讓我來試試你有幾斤幾兩。",
      2: "我知道你能走這麼遠。讓我們開始吧。",
    },
    "victory": {
      1: "被你拿下了啊。你太出色了!",
      2: "我從沒想到會有另一個訓練師打敗我……$我很驚訝。",
    },
    "defeat": {
      1: "就差一點。想再試一次嗎？",
      2: "我沒覺得你弱，別因此困擾。",
    }
  },
  "karen": {
    "encounter": {
      1: "我是梨花，你想和我的惡屬性寶可夢$來一場對決嗎？",
      2: "我和你見過的那些人不一樣。",
      3: "你組建了一支迷人的隊伍。$我們的戰鬥應該會是場精彩的比賽。",
    },
    "victory": {
      1: "不！我贏不了。你是怎麼做到變得這麼強的？",
      2: "我不會偏離我所選擇的道路。",
      3: "冠軍正期待與你見面。",
    },
    "defeat": {
      1: "意料之中。",
      2: "嗯，還算有點意思。",
      3: "隨時歡迎你來找我。",
    }
  },
  "milo": {
    "encounter": {
      1: "看起來你顯然很了解寶可夢。$這會是一場激烈的戰鬥！$如果我想贏，我得讓我的寶可夢極巨化！",
    },
    "victory": {
      1: "草的力量凋謝了…多麼不可思議的挑戰者！",
    },
    "defeat": {
      1: "這必將讓你大吃一驚。",
    }
  },
  "lucian": {
    "encounter": {
      1: "請稍等，我正在讀的書\n正要進入最精彩的部分…$英雄獲得了一把神秘之劍，\n即將面臨最後的考驗…啊，算了。$既然你能走到這一步，\n我就不說這些了，和你戰鬥吧。$讓我看看你是否\n能像我書中的主角一樣榮耀！",
    },
    "victory": {
      1: "我明白了…看來你把我逼入了絕境。",
    },
    "defeat": {
      1: "我得維護我的名譽。",
    }
  },
  "drasna": {
    "encounter": {
      1: "你很厲害吧，\n而且相當相當地厲害呢。$我很高興，能和這樣的對手交手，\n就能更好地培養寶可夢們了。",
    },
    "victory": {
      1: "哎呀，就這麼結束了，\n不好意思，可以的話歡迎再來。",
    },
    "defeat": {
      1: "怎麼會這樣？",
    }
  },
  "kahili": {
    "encounter": {
      1: "那麼，既然來了……\n要不來看看今天的風更青睞誰？$是你……還是我？",
    },
    "victory": {
      1: "讓我這個四天王都感到沮喪，$看來你的力量貨真價實。",
    },
    "defeat": {
      1: "那真是一記好球！",
    }
  },
  "hassel": {
    "encounter": {
      1: "讓你親身感受一下什麼叫做猛烈的對戰氣息吧！",
    },
    "victory": {
      1: "這次幸運之神對我微笑了，但是……$誰知道我下次會不會這麼幸運。",
    },
    "defeat": {
      1: "那可真厲害！",
    }
  },
  "blue": {
    "encounter": {
      1: "能走到這裡，你一定非常優秀。",
    },
    "victory": {
      1: "我只輸給過他，現在又是你……？$你問他是誰？哈哈哈……",
    },
    "defeat": {
      1: "看吧？我的實力就是我來到這裡的原因。",
    }
  },
  "piers": {
    "encounter": {
      1: "準備好和我的隊伍來個大狂歡吧！$尖釘鎮，是時候嗨起來了！",
    },
    "victory": {
      1: "我和我的隊伍已經盡力了。$找個時間再來對戰吧……",
    },
    "defeat": {
      1: "我的喉嚨因為呼喊而變得沙啞……$但這是一場激動人心的戰鬥！",
    }
  },
  "red": {
    "encounter": {
      1: "…!",
    },
    "victory": {
      1: "…?",
    },
    "defeat": {
      1: "…!",
    }
  },
  "jasmine": {
    "encounter": {
      1: "哦……你的寶可夢給人印象深刻。$我想我會享受這場戰鬥的。",
    },
    "victory": {
      1: "你真的很強。我也得加把勁了。",
    },
    "defeat": {
      1: "我從沒想到會贏。",
    }
  },
  "lance_champion": {
    "encounter": {
      1: "我依舊是冠軍，所以我不會留情的。",
    },
    "victory": {
      1: "這就是新冠軍的崛起。",
    },
    "defeat": {
      1: "我成功捍衛了冠軍的頭銜。",
    }
  },
  "steven": {
    "encounter": {
      1: "告訴我…你在和寶可夢的旅途過程中看到了什麼？$邂逅了那麼多的訓練師，\n你都會有什麼樣的感受呢？$在這豐饒的大地上旅行…\n有沒有喚醒你內在的某種東西？$你不如就用一場對戰來告訴我你心中的答案吧。$我也會和我的寶可夢用這種方式\n將我們所知道的告訴你的！",
    },
    "victory": {
      1: "沒想到連我這個聯盟冠軍\n都敗在你的手上了呢…",
    },
    "defeat": {
      1: "正如我所期待的。謝謝！",
    }
  },
  "cynthia": {
    "encounter": {
      1: "我，竹蘭，接受你的挑戰！\n我是絕不會手軟的！",
    },
    "victory": {
      1: "無論對戰多麼有趣，\n它總會有結束的時候……",
    },
    "defeat": {
      1: "即使你輸了，\n也永遠不要失去你對寶可夢的熱愛。",
    }
  },
  "iris": {
    "encounter": {
      1: "你知道嗎？\n我真的很期待和強大的訓練師進行認真的戰鬥！$我的意思是，來吧！\n到達這裡的是那些渴望勝利的訓練師，$他們與經歷過無數艱難\n戰鬥的寶可夢一起戰鬥！$如果我和那樣的人戰鬥，\n不僅我會變得更強，我的寶可夢也會！$我們也會更好地了解彼此！\n好！做好準備吧！$我是艾莉絲，寶可夢聯盟冠軍，\n我，將打敗你！",
    },
    "victory": {
      1: "啊……我盡力了，但我們輸了……",
    },
    "defeat": {
      1: "耶！我們贏了！",
    }
  },
  "hau": {
    "encounter": {
      1: "我想知道，訓練師是否會根據他們是\n來自溫暖地區還是寒冷地區而以不同的方式戰鬥。$讓我們來測試一下！",
    },
    "victory": {
      1: "那太棒了！我覺得我現在有點了解你的感覺了！",
    },
    "defeat": {
      1: "老鐵，這才叫戰鬥！",
    }
  },
  "geeta": {
    "encounter": {
      1: "我決定再試一次。$來吧…讓我看看你的訓練成果。",
    },
    "victory": {
      1: "我期待著你的成就！",
    },
    "defeat": {
      1: "怎麼，這就結束了？",
    }
  },
  "nemona": {
    "encounter": {
      1: "耶！我太興奮了！讓我們稍微放輕鬆！",
    },
    "victory": {
      1: "好吧，太糟了，但我還是玩得很開心！$下次我一定會贏你！",
    },
    "defeat": {
      1: "好吧，那是一場很棒的戰鬥！$肯定是會有收穫的啦。",
    }
  },
  "leon": {
    "encounter": {
      1: "來享受一段冠軍時刻吧！",
    },
    "victory": {
      1: "我的冠軍生涯結束了……但這是多麼美好的冠軍時刻啊！但這是多麼美好的冠軍時刻啊！謝謝你給了我最精彩的一戰！",
    },
    "defeat": {
      1: "名副其實的冠軍時刻！",
    }
  },
  "whitney": {
    "encounter": {
      1: "嘿！你不認為寶可夢超級可愛嗎？",
    },
    "victory": {
      1: "哇啊！哇啊！你太壞了！",
    },
    "defeat": {
      1: "就是這樣！",
    }
  },
  "chuck": {
    "encounter": {
      1: "哈！你想挑戰我？你是勇敢還是無知？",
    },
    "victory": {
      1: "你很強！能不能收我為徒？",
    },
    "defeat": {
      1: "搞定。你明白我比你強得多了嗎？",
    }
  },
  "katy": {
    "encounter": {
      1: "不要放鬆警惕，除非你想被蟲絲絆倒哦！",
    },
    "victory": {
      1: "我可愛的寶可夢們都像蒼蠅一樣墜落了！",
    },
    "defeat": {
      1: "開飯啦，我可愛的彩粉蝶！",
    }
  },
  "pryce": {
    "encounter": {
      1: "年輕不代表能獲得勝利！經驗才是關鍵。",
    },
    "victory": {
      1: "無與倫比！贏得完美，試著不要忘記你現在的感受。",
    },
    "defeat": {
      1: "正如我所料。",
    }
  },
  "clair": {
    "encounter": {
      1: "你知道我是誰嗎？知道還敢挑戰我？",
    },
    "victory": {
      1: "我想知道以你現在的水平能走多遠，有趣。",
    },
    "defeat": {
      1: "就是這樣。",
    }
  },
  "maylene": {
    "encounter": {
      1: "我現在要挑戰你，我不會保留任何實力。$請準備好戰鬥！",
    },
    "victory": {
      1: "是我輸了…",
    },
    "defeat": {
      1: "太棒了。",
    }
  },
  "fantina": {
    "encounter": {
      1: "你來挑戰吧。我會勝利。$這就是家緣市的道館館主。",
    },
    "victory": {
      1: "你是最強的，我認輸了。",
    },
    "defeat": {
      1: "我非常，非常高興！",
    }
  },
  "byron": {
    "encounter": {
      1: "和我兒子瓢太一樣的年輕人啊！$我相信培養年輕人\n關係到寶可夢光明的未來！$為此就讓我來成為\n年輕人必須跨越的堡壘吧！",
    },
    "victory": {
      1: "唔！我千錘百煉的寶可夢！",
    },
    "defeat": {
      1: "哈哈哈哈！怎麼樣！我千錘百煉的寶可夢！",
    }
  },
  "olympia": {
    "encounter": {
      1: "戰鬥是決定命運的古老傳統。讓我們開始吧！",
    },
    "victory": {
      1: "創造你自己的道路。$不要讓任何東西阻擋你的路、你的命運、你的未來。",
    },
    "defeat": {
      1: "我們的道路現在已經清晰了。",
    }
  },
  "volkner": {
    "encounter": {
      1: "能留到最後的訓練家想必肯定是很強的…$希望你會是能讓我回憶起\n寶可夢對戰樂趣的訓練家！",
    },
    "victory": {
      1: "我輸了…$你的心意，寶可夢的不顧一切。$戰鬥的時候就讓我熱血沸騰。",
    },
    "defeat": {
      1: "完全沒感覺…$和我希望的完全不一樣！",
    }
  },
  "burgh": {
    "encounter": {
      1: "唔…我有預感，\n只要贏了這場戰鬥就能畫出更好的畫來…$嗯！戰鬥充滿了幻象！那麼，馬上開始吧。",
      2: "當然，我對我所有的寶可夢都相當驕傲！ $現在…讓我們馬上開始吧！",
    },
    "victory": {
      1: "結束了嗎？我的女神拋棄我了嗎？",
      2: "啊唔，輸了……你還真是很強啊。",
    },
    "defeat": {
      1: "唔啊……好……好美啊！",
      2: "偶爾也有一些不是很好看的勝利，$但只要努力了，\n不管怎麼樣的戰鬥，都是很美麗的。",
    }
  },
  "elesa": {
    "encounter": {
      1: "最後一擊！\n在確信這一點的時候全身會流淌過電流！$為追求這個快感，\n我要用可愛的寶可夢們讓你頭暈眼花。",
    },
    "victory": {
      1: "本想讓你頭暈的，\n結果我倒反被你電到了。",
    },
    "defeat": {
      1: "感覺還不夠啊……下次能使出全力來嗎？",
    }
  },
  "skyla": {
    "encounter": {
      1: "終於到決戰了！\n這是決定頂點的寶可夢對戰吧？$我最喜歡頂點了！\n在高的地方能看到很遠很遠！$好了！就讓我和你好好地玩一場吧！",
    },
    "victory": {
      1: "和你的戰鬥讓我更強了……謝謝。",
    },
    "defeat": {
      1: "不管是贏了還是輸了，戰鬥都能得到一些東西。",
    }
  },
  "brycen": {
    "encounter": {
      1: "有其他的人和寶可夢在一起，$這份支持會讓自己更強…\n讓我來給你展示一下這樣的強大吧！",
    },
    "victory": {
      1: "你和你的寶可夢！配合得天衣無縫！\n華麗的友情！",
    },
    "defeat": {
      1: "嘗試極限！鍛鍊！",
    }
  },
  "drayden": {
    "encounter": {
      1: "現在我尋求的是\n能讓我看到光明未來的年輕訓練家。$你有多少實力，就讓我用我的經驗，\n我對寶可夢傾注的愛來驗證吧！",
    },
    "victory": {
      1: "失敗後湧現的這灼熱的意志…\n該怎麼說呢…",
    },
    "defeat": {
      1: "啊啊啊！你的實力就這種程度嗎！",
    }
  },
  "grant": {
    "encounter": {
      1: "我只期待一件事。. $通過超越彼此，\n我們找到通往更高境界的道路。",
    },
    "victory": {
      1: "你是一堵我無法逾越的牆！",
    },
    "defeat": {
      1: "不要放棄。\n這就是人生的真諦。$大道至簡。",
    }
  },
  "korrina": {
    "encounter": {
      1: "小女子科爾尼來大顯身手啦！",
    },
    "victory": {
      1: "正因為有你，\n才能讓你的寶可夢進化！",
    },
    "defeat": {
      1: "好勁爆的戰鬥呀！",
    }
  },
  "clemont": {
    "encounter": {
      1: "哦！我很高興我們能見面！",
    },
    "victory": {
      1: "你對戰鬥的熱情激勵了我！",
    },
    "defeat": {
      1: "看來我的訓練師成長強化機-馬克2號，\n真的起作用了！",
    }
  },
  "valerie": {
    "encounter": {
      1: "哦，這不是一個年輕的訓練師嗎……\n能這樣遇見你真是太好了。 $我想你已經獲得了這場戰鬥的資格，\n作為對你努力的獎勵。 $難以捉摸的妖精可能看起來像微風一樣脆弱，\n像花朵一樣精緻，但很堅強。",
    },
    "victory": {
      1: "我希望明天你也能找到一些值得會心微笑的事物……",
    },
    "defeat": {
      1: "哦，天哪，這太遺憾了……",
    }
  },
  "wulfric": {
    "encounter": {
      1: "你知道嗎？\n我們都說戰鬥能學到東西，羈絆之類的，$但實際上，我這麼做只是因為有趣。 $誰在乎那些華而不實的東西？\n我們來戰鬥吧！",
    },
    "victory": {
      1: "傑出！我像冰山一樣堅硬，但你徹底擊潰了我！",
    },
    "defeat": {
      1: "和我幹的結果就是這樣！",
    }
  },
  "kabu": {
    "encounter": {
      1: "每個訓練師和寶可夢都在努力追求勝利。$但這意味著你的對手也在努力贏得勝利。$最終，比賽是由哪一方\n能夠發揮出他們真正的潛力來決定的。",
    },
    "victory": {
      1: "我很高興今天能和你戰鬥！",
    },
    "defeat": {
      1: "這是我感覺自己的成長的好方式！",
    }
  },
  "bea": {
    "encounter": {
      1: "你有沒有一種不可動搖的精神，\n受到什麼攻擊都安如磐石？ $就讓我來試試吧？",
    },
    "victory": {
      1: "我感受到了你的寶可夢\n在戰鬥中被你指揮時的戰鬥之魂。",
    },
    "defeat": {
      1: "每個人都希望能有一場這樣的好比賽。",
    }
  },
  "opal": {
    "encounter": {
      1: "讓我看看你和你的寶可夢的表現如何！",
    },
    "victory": {
      1: "你不夠粉嫩呀，\n但你是一個優秀的訓練師，$還擁有著優秀的寶可夢。",
    },
    "defeat": {
      1: "對你來說太慘了，我覺得。",
    }
  },
  "bede": {
    "encounter": {
      1: "就讓我來證明你有多可憐，我有多強大。",
    },
    "victory": {
      1: "我懂了……好吧。其實我還沒拿出全力呢。",
    },
    "defeat": {
      1: "我覺得我打得不錯。",
    }
  },
  "gordie": {
    "encounter": {
      1: "好了，我們來做個了結吧！",
    },
    "victory": {
      1: "我只想要挖一個洞爬進去……$好吧，現在更像是掉了進去。",
    },
    "defeat": {
      1: "像往常一樣戰鬥，勝利就會隨之而來！",
    }
  },
  "marnie": {
    "encounter": {
      1: "事實上，言而總之… \n人家自己也想當冠軍呀! $所以別認為我在針對你！",
    },
    "victory": {
      1: "好吧，我還是輸了……\n但是我看到了很多你和你寶可夢的優點哦",
    },
    "defeat": {
      1: "希望你喜歡我們的戰鬥策略。",
    }
  },
  "raihan": {
    "encounter": {
      1: "我打算擊敗冠軍，贏得錦標賽，\n並向世界證明奇巴納大人有多強！",
    },
    "victory": {
      1: "就算輸了我也好帥。$真是罪孽深重啊。$看來得再來張自拍了！",
    },
    "defeat": {
      1: "為了紀念此刻，來張自拍吧！",
    }
  },
  "brassius": {
    "encounter": {
      1: "你應該準備好了吧，\一起完成這美麗的藝術作品吧！",
    },
    "victory": {
      1: "啊……前衛！",
    },
    "defeat": {
      1: "我將立即開始新的創作！",
    }
  },
  "iono": {
    "encounter": {
      1: "誰在奇述！是我奇樹！\n做好準備了嗎！$...$直播開始！\n今天的小挑戰者有多強？$奇樹不知道哦~\n讓我們一起來看看吧！",
    },
    "victory": {
      1: "你的閃耀如1000萬伏特！朋友！",
    },
    "defeat": {
      1: "奇樹奇樹捕獲你的眼球！",
    }
  },
  "larry": {
    "encounter": {
      1: "歸根結底，普普通通就是最強。",
    },
    "victory": {
      1: "哼，給我上了一道“戰敗”。",
    },
    "defeat": {
      1: "下班打卡，走了",
    }
  },
  "ryme": {
    "encounter": {
      1: "寶貝, 一起! \n搖滾搖到骨子裡!",
    },
    "victory": {
      1: "你好酷！我佩服！\n我的靈魂為你哭！",
    },
    "defeat": {
      1: "再會, 寶貝!",
    }
  },
  "grusha": {
    "encounter": {
      1: "我保證我寶可夢的力量\n會讓你感到寒冷徹骨！",
    },
    "victory": {
      1: "你燃燒的熱情……老實說，我有點喜歡。",
    },
    "defeat": {
      1: "你沒有升溫。",
    }
  },
  "marnie_elite": {
    "encounter": {
      1: "你已經走到這一步了？$哼~ 看看你能不能對付我的寶可夢！",
      2: "我將全力以赴, 別覺得我會手下留情哦~",
    },
    "victory": {
      1: "不敢相信…我輸掉了… $但是你確實贏得好，幹得漂亮捏~",
      2: "看來我還要多多學習呀，\n不過你打得很不錯哦~",
    },
    "defeat": {
      1: "你打得不錯，但是我更勝一籌！$祝你下次好運啦~",
      2: "看來我的練習有所回報了。\n感謝一戰！",
    }
  },
  "nessa_elite": {
    "encounter": {
      1: "海流正在朝著對我有利的方向轉變。$準備好被捲走了嗎？",
      2: "讓我們在這場戰鬥中掀起波瀾！$我希望你做好準備！",
    },
    "victory": {
      1: "你完美地渡過了這片水域......幹得好！",
      2: "看來我現在無法與你匹敵。幹得好！",
    },
    "defeat": {
      1: "水總能找到出路。\n真是爽快的一戰！",
      2: "你打得很好，\n但海洋的力量是不可阻擋的！",
    }
  },
  "bea_elite": {
    "encounter": {
      1: "做好準備！我的鬥志熊熊燃燒！",
      2: "讓我們看看你是否能跟上我永不停歇的節奏！",
    },
    "victory": {
      1: "你的實力......令人印象深刻。\n你真的值得這場勝利。",
      2: "我以前從未感受過這種強度。\n太棒了！",
    },
    "defeat": {
      1: "我的高強度訓練又帶來勝利了！\n幹得好！",
      2: "你有實力，但我的訓練更努力。\n精彩的戰鬥！",
    }
  },
  "allister_elite": {
    "encounter": {
      1: "黑暗降臨...你準備好面對你的恐懼了嗎？",
      2: "讓我們看看你能否應對我所操控的黑暗。",
    },
    "victory": {
      1: "你已經驅散了陰影......\n暫時。幹得很好。",
      2: "你的光芒刺穿了我的黑暗。幹得好。",
    },
    "defeat": {
      1: "黑影在輕語...\n你的力量還不夠。",
      2: "黑暗獲勝了......\n也許下次你會看到光明。",
    }
  },
  "raihan_elite": {
    "encounter": {
      1: "風暴來臨！你能挺過這場戰鬥嗎！",
      2: "準備好面對風暴之眼！",
    },
    "victory": {
      1: "你戰勝了風暴...難以置信！",
      2: "你完美地駕馭了風……打得好！",
    },
    "defeat": {
      1: "又一場風暴襲來，又一場勝利！打得好！",
      2: "你被我的風暴捲入了！祝你下次好運！",
    }
  },
  "alder": {
    "encounter": {
      1: "準備好和合眾最強的訓練家交手吧！"
    },
    "victory": {
      1: "精彩！簡直就是天下無雙！"
    },
    "defeat": {
      1: `戰鬥結束後，我的心像是吹過了溫和的風…
	  	$真是厲害！`
    }
  },
  "kieran": {
    "encounter": {
      1: `我的努力讓我越來越強！
	  	$所以我不會輸。`
    },
    "victory": {
      1: `不可能…
	  	$真是一場有趣又激動人心的戰鬥啊！`
    },
    "defeat": {
      1: `哇塞，好一場戰鬥！
	  	$你得多練練了。`
    }
  },
  "rival": {
    "encounter": {
      1: "@c{smile}嘿，我在找你呢！我知道你急著上路，\n但至少說個再見吧…$@c{smile_eclosed}所以你終於要開始追逐夢想了？\n我幾乎不敢相信。$@c{serious_smile_fists}來都來了，來一場對戰怎麼樣？\n畢竟，我想看看你是不是準備周全了。$@c{serious_mopen_fists}不要手下留情，我想讓你全力以赴！",
    },
    "victory": {
      1: "@c{shock}哇…你徹底擊敗了我。\n你是真初學者嗎？$@c{smile}也許是靠點運氣，但是…\n誰知道，你可能真的能一路走下去。$順便說一下，博士讓我給你這些東西。它們看起來可牛了。$@c{serious_smile_fists}祝你好运！",
    },
  },
  "rival_female": {
    "encounter": {
      1: "@c{smile_wave}你在這兒啊！我到處找你呢！$@c{angry_mopen}你忘了和你最好的朋友說再見了嗎？$@c{smile_ehalf}你要去追逐夢想了，對吧？\n從今天開始，是不是…$@c{smile}不管怎樣，忘了我的事就原諒你吧，\n但有個條件。@c{smile_wave_wink}你必須和我對戰！$@c{angry_mopen}全力以赴！\n你也不想讓你的冒險在開始之前就結束了，對吧？",
    },
    "victory": {
      1: "@c{shock}你剛開始就已經這麼強了？！@d{96}$@c{angry}你是不是開了？$@c{smile_wave_wink}只是開個玩笑啦！@d{64} @c{smile_eclosed}我輸地心服口服了…\n我感覺你出去挺有天賦的。$@c{smile}順便說一下，博士想讓我給你一些東西。\n希望它們能幫上忙！$@c{smile_wave}像往常一樣盡力而為！\n我相信你！",
    },
  },
  "rival_2": {
    "encounter": {
      1: "@c{smile}嘿，你也在這裡嗎？$@c{smile_eclosed}一路過關斬將，是吧？$@c{serious_mopen_fists}我知道看起來好像我尾隨著你來到這裡，\n怎麼可能啦。$@c{serious_smile_fists}說真的，自從你在老家打敗我後，\n我就一直很渴望再比一場。$我自己也進行了很多訓練，\n所以這次我肯定會好好打一場。$@c{serious_mopen_fists}不要手下留情，就像以前一樣！$讓我們開始吧！",
    },
    "victory": {
      1: "@c{neutral_eclosed}哦。我過於自信了。$@c{smile}不過沒關係。我猜到可能會這樣。$@c{serious_mopen_fists}這只意味著我下次需要更努力！$$@c{smile}呃，不是特意幫你，我正好有多餘的這個，\n我覺得你可能想要。$$@c{serious_smile_fists}不過這次之後別指望再有了！$我不能一直給我的對手優勢。$@c{smile}反正，保重！",
    },
  },
  "rival_2_female": {
    "encounter": {
      1: "@c{smile_wave}哦，真巧，在這裡遇見你。\n看來你還沒輸過嘛。@c{angry_mopen}哈……好傢伙！$@c{angry_mopen}我知道你在想什麼，\n不，我才不會跟蹤你什麼呢。 @c{smile_eclosed}我只是碰巧在附近。$@c{smile_ehalf}我為你感到高興，但我只想讓你知道\n有時輸了是可以接受的。$@c{smile}我們從錯誤中學到的東西\n往往比我們一直成功時學到的還要多。$@c{angry_mopen}無論如何，我為了我們的複賽已經努力訓練了\n所以你最好全力以赴！",
    },
    "victory": {
      1: "@c{neutral}我……沒打算會輸來著……$@c{smile}嗷……好吧。看來我要再更加努力訓練了！$@c{smile_wave}我還給你帶了個這個$@c{smile_wave_wink}不用謝我哦~.$@c{angry_mopen}不過，這是最後一個啦！\n 你可別想再從我這賺小便宜了~$@c{smile_wave}要保重哦！",
    },
    "defeat": {
      1: "輸了有時候也不要緊的…",
    }
  },
  "rival_3": {
    "encounter": {
      1: "@c{smile}嘿，看看這是誰！好久不見啊。$@c{neutral}你……還是沒輸過？哈…$@c{neutral_eclosed}這有點……不太對勁。$沒有你一起，回家的感覺有很不一樣。$@c{serious}雖然我知道這挺別扭的，但我就直說了。$@c{neutral_eclosed}我覺得你有點兒難以理解。$@c{serious}沒有人能夠戰無不勝。$失敗乃成功之母。$@c{neutral_eclosed}你已經贏得了夠好的成績，\n但前面道阻且長，只會愈發艱難。 @c{neutral}你做好準備了沒？$@c{serious_mopen_fists}如果做好了，證明給我看吧。",
    },
    "victory": {
      1: "@c{angry_mhalf}這太離譜了……我幾乎從沒停下訓練……$我們之間的差距怎麼還是這麼大？",
    },
  },
  "rival_3_female": {
    "encounter": {
      1: "@c{smile_wave}好久不見！還沒輸過，對吧。$@c{angry}我覺得你點煩了。@c{smile_wave_wink}開玩笑啦！$@c{smile_ehalf}但說真的，你現在不想家嗎？\n 不想…我嗎?$我……我的意思是，我們真的很想你。$@c{smile_eclosed}我支持你的一切，包括你的夢想。\n但現實就是你早晚會經歷失敗。$@c{smile}當你失敗的時候，我想像往常一樣陪在你身邊。$@c{angry_mopen}現在，給你看看我變得多強了吧！",
    },
    "victory": {
      1: "@c{shock}都這樣了……還是不夠嗎？$這樣下去，你就永遠不會回來了……",
    },
    "defeat": {
      1: "你盡力了，現在讓我們回家吧。",
    }
  },
  "rival_4": {
    "encounter": {
      1: "@c{neutral}嘿。$我不會對你說什麼拐彎抹角的客套話。$@c{neutral_eclosed}我來，就是為了贏，簡單明了。$@c{serious_mhalf_fists}我將所有時間都投入到訓練中，\n掌握了如何發揮我的潛力。$@c{smile}當你削減掉不必要的睡眠和社交後，\n你會得到很多額外的時間。$@c{serious_mopen_fists}但在我獲勝之前，這些都不重要了。$@c{neutral_eclosed}我甚至已經到達了戰無不敗的境地。$@c{smile_eclosed}我覺得你的思路倒是也沒毛病。$@c{angry_mhalf}失敗是屬於弱者的，\n我已經不再軟弱了。$@c{serious_mopen_fists}準備好吧。",
    },
    "victory": {
      1: "@c{neutral}你…@d{64} 你是人嗎？",
    },
  },
  "rival_4_female": {
    "encounter": {
      1: "@c{neutral}是我哦！沒又把我忘了吧……是嗎？$@c{smile}你應該為自己走了這麼遠感到驕傲。恭喜你！$但看來你的旅程到此為止了。$@c{smile_eclosed}你喚醒了我體內一些我從未有過的東西。\n就像我現在滿腦子除了訓練還是訓練。$@c{smile_ehalf}我幾乎已經沒空吃飯睡覺了，\n我沒日沒夜訓練我的寶可夢，每次都能變得更強。$@c{neutral}事實上，我……幾乎不認識自己了。$現在，我終於達到了巔峰。\n我感覺我已經戰無不勝了。$而且你知道嗎？這一切都是因為你。$@c{smile_ehalf}我不知道到底是該感謝你還是恨你。$@c{angry_mopen}做好準備…",
    },
    "victory": {
      1: "@c{neutral}你…@d{64} 你是人嗎？",
    },
    "defeat": {
      1: "@c{smile}你應該為自己走了這麼遠感到驕傲。",
    }
  },
  "rival_5": {
    "encounter": {
      1: "@c{neutral}…"
    },
    "victory": {
      1: "@c{neutral}…"
    },
  },
  "rival_5_female": {
    "encounter": {
      1: "@c{neutral}…"
    },
    "victory": {
      1: "@c{neutral}…"

    },
    "defeat": {
      1: "$@c{smile_ehalf}…"
    }
  },
  "rival_6": {
    "encounter": {
      1: "@c{smile_eclosed}又見面了。$@c{neutral}我花了點時間思考反思\n有理由說明為什麼這一切都顯得如此奇妙。$@c{neutral_eclosed}你所追逐的夢想，我想擊敗你的決心…$這都是某種龐大使命的一部分。$@c{serious}這不僅僅是關於我和你… 而是關於這個世界， @c{serious_mhalf_fists}我的使命就是將你推向極限。$@c{neutral_eclosed}我是否達成了那個使命，我說不上來，但我已盡我所能。$@c{neutral}我們最終到達的這個地方看起來很可怕\n 然而不知何故，我心中毫無畏懼，好像我早就來過這裡。$@c{serious_mhalf_fists}你也有同樣的感覺，對吧？$@c{serious}……這裡好像有什麼東西在呼喚我。\n這是世界早已記錄的一切。$那些我們經歷過的時光，那些記憶猶新的過去，\n其實只是遙遠的回憶。$@c{neutral_eclosed}誰能保證它們是否真的發生過。$@c{serious_mopen_fists}你必須繼續前進，不然的話，這一切將永無止境。\n這件事而只有你能辦成。$@c{serious_smile_fists}我不清楚這一切意味著什麼，但我知道……$@c{serious_mopen_fists}如果現在你不能就此擊敗我，\n你將毫無機會可言。",
    },
    "victory": {
      1: "@c{smile_eclosed}看來我的使命在這裡已經完成了。\n我想讓你答應我一件事。$@c{smile}在你拯救世界之後，要回家。",
    },
  },
  "rival_6_female": {
    "encounter": {
      1: "@c{smile_ehalf}又只有我們兩個人了。$@c{smile_eclosed}你知道嗎，我在心裡想啊想，\n想了好久……$@c{smile_ehalf}這一切背後是有什麼原因嗎，\n為什麼一切現在看起來都這麼奇怪……$@c{smile}你有你的夢想，而我內心有這個抱負……$我不禁感覺這一切背後有一個更龐大的力量，$掌控者我們所做的一切，你和我之間。$@c{smile_eclosed}我想我注定要推動你……到你的極限。$@c{smile_ehalf}我不清楚我是否一直做得很好，\n但到現在為止，我已經盡力了。$這個奇怪而可怕的地方……\n一切看起來都那麼清晰……$這是世界早已記錄的一切。$@c{smile_eclosed}我好像記不清我們一起度過的日子了。$@c{smile_ehalf}那些回憶到底是真的嗎？\n怎麼感覺這麼久遠……$@c{angry_mopen}你得繼續前進，不然的話，這一切將永無止境。\n你是唯一能做到這件事的。$@c{smile_ehalf}我……不知道這一切意味著什麼……\n但我明白$@c{neutral}如果你現在不能就此擊敗我，\n你將毫無機會可言。",
    },
    "victory": {
      1: "@c{smile_ehalf}我……\n我想我完成了我的使命……$@c{smile_eclosed}答應我……在你拯救世界之後\n……要……平安到家。$@c{smile_ehalf}……謝謝你。",
    },
  },
};


// Dialogue of the NPCs in the game when the player character is female. For languages that do not have gendered pronouns, this can be set to PGMdialogue.
export const PGFdialogue: DialogueTranslationEntries = PGMdialogue;

// Dialogue of the endboss of the game when the player character is male (Or unset)
export const PGMbattleSpecDialogue: SimpleTranslationEntries = {
  "encounter": `看來終於又到了那個時候。\n你知道自己為何會來到這裡，不是嗎？
    $你被吸引到這裡，因為你以前就來過這裡。\n無數次。
    $儘管，或許可以數一數。\n準確地說，這實際上是你的第{{cycleCount}}次循環。
    $每一次循環，你的思想都會恢復到之前的狀態。\n即便如此，不知何故，你之前自我的殘留仍然存在。
    $直到現在，你仍未成功，但我感覺這次你身上有一種異樣的氣息。
    $你是這裡唯一的人，儘管感覺上還有……另一個人。
    $你最終會成為對我來的一個硬茬嗎？\n我渴望了數千年的挑戰？
    $我們，開始。`,
  "firstStageWin": `我明白了。我所感覺到的氣息確實是真實的。\n看來我不再需要保留實力了。
        $別讓我失望。`,
  "secondStageWin": "…漂亮。"
};

// Dialogue of the endboss of the game when the player character is female. For languages that do not have gendered pronouns, this can be set to PGMbattleSpecDialogue.
export const PGFbattleSpecDialogue: SimpleTranslationEntries = PGMbattleSpecDialogue;

// Dialogue that does not fit into any other category (e.g. tutorial messages, or the end of the game). For when the player character is male
export const PGMmiscDialogue: SimpleTranslationEntries = {
  "ending":
      `@c{smile}哦?你贏了？@d{96} @c{smile_eclosed}我應該早猜到了\n你回來了。
        $@c{smile}結束了。@d{64} 你終結了這個循環。
        $@c{serious_smile_fists}你也完成了自己的夢想，不是嗎？\n你甚至一次都沒失敗。
        $@c{neutral}我是唯一能夠記得你所作所為的人@d{96}\n我覺得這應該也還行吧？
        $@c{serious_smile_fists}你的傳奇將永遠留存於我們心中。
        $@c{smile_eclosed}不管了，我真是受夠這個地方了，你也一樣嗎？我們回家吧。
        $@c{serious_smile_fists}可能等我們回家以後，再打一場？\n要是你想的話`,
  "ending_female":
      `@c{shock}你回來了？@d{32} 也就是說…@d{96} 你贏了呀！？\n@c{smile_ehalf}我應該早料到了。
        $@c{smile_eclosed}當然…我一直有這種感覺\n@c{smile}一切都結束了，對麼？ 你打破了循環。
        $@c{smile_ehalf}你也完成了自己的夢想，不是嗎？\n你甚至一次都沒失敗。
        $我是唯一能夠記得你所作所為的人\n@c{angry_mopen}我會努力不忘掉哒！
        $@c{smile_wave_wink}開玩笑啦，@d{64} @c{smile}我才不會忘呢。@d{32}\n你的傳奇將永遠留存於我們心中。
        $@c{smile_wave}不管了，@d{64} 時候不早了@d{96} ，應該吧？\n在這地方還真搞不清楚。
        $一起回家吧。 @c{smile_wave_wink}可能明天，我們再來打一場，為了重溫回憶嘛~`,
};
// Dialogue that does not fit into any other category (e.g. tutorial messages, or the end of the game). For when the player character is female. For languages that do not have gendered pronouns, this can be set to PGMmiscDialogue.
export const PGFmiscDialogue: SimpleTranslationEntries = PGMmiscDialogue;


// Dialogue of the named double battles in the game. For when the player is male (or unset).
export const PGMdoubleBattleDialogue: DialogueTranslationEntries = {
  "blue_red_double": {
    "encounter": {
      1: "青綠：嘿，赤紅，\n讓這傢伙看看我們是什麼來頭！$赤紅:...$青綠: 見識下真新鎮的實力！",
    },
    "victory": {
      1: "青綠：打得真不錯$赤紅: ...",
    },
  },
  "red_blue_double": {
    "encounter": {
      1: "赤紅: ...!$青綠：他人狠話不多。$青綠： 他人狠話不多。$青綠： 但別被他耍了，\n畢竟他可是個冠軍！",
    },
    "victory": {
      1: "赤紅: ...!$青綠: 下次我們一定會贏你！",
    },
  },
  "tate_liza_double": {
    "encounter": {
      1: "小楓:嘿嘿嘿……你驚訝嗎？$小南:這裡有兩個道館館主？$小楓: 我們是雙胞胎！$小南:我們無需交談，因為……我們可以通曉彼此的想法$小楓: 我們的組合……$小南: 你能打敗嗎？",
    },
    "victory": {
      1: "小楓：什麼？我們的組合……$小南：被瓦解了！",
    },
  },
  "liza_tate_double": {
    "encounter": {
      1: "小南：呵呵呵……你驚訝吧？$小楓：這裡有兩個道館館主？$小南：我們可以通曉……$小楓：彼此的想法……$小南：全在我們腦中！$小楓：我們的組合……$小南：你能打敗嗎？",
    },
    "victory": {
      1: "小楓：你和你的寶可夢……$小南：簡直像親兄弟姐妹！",
    },
  },
  "wallace_steven_double": {
    "encounter": {
      1: "大吾：米可利, 展現冠軍的實力吧！$米可利：我們將展示豐緣的實力！$米可利：我們將展示豐緣的實力！$大吾：要上了！",
    },
    "victory": {
      1: "大吾：打得真不錯！$米可利：我們下次會贏的！",
    },
  },
  "steven_wallace_double": {
    "encounter": {
      1: "大吾：你有什麼稀有的寶可夢嗎？$米可利：大吾……我們是來對戰的，\n不是來炫耀寶可夢的。$大吾：哦……知道了… 那麼要上了！",
    },
    "victory": {
      1: "大吾：戰鬥結束了，\n來看看我的稀有寶可夢！$米可利：大吾……",
    },
  },
  "alder_iris_double": {
    "encounter": {
      1: "阿戴克：我們倆是合眾最強的訓練家！$艾莉絲：與最強來一場最激烈的戰鬥吧！",
    },
    "victory": {
      1: "阿戴克：哇哦！你真是超級厲害！$艾莉絲：我們下次會贏的啦！",
    },
  },
  "iris_alder_double": {
    "encounter": {
      1: "艾莉絲：歡迎！挑戰者，\n合眾地區最強的冠軍大駕光臨！$阿戴克：艾莉絲，你是不是有點太興奮了…",
    },
    "victory": {
      1: "艾莉絲：這樣的失敗可不好受啊…$阿戴克：但是只有失敗才能讓我們變強！",
    },
  },
  "piers_marnie_double": {
    "encounter": {
      1: "瑪俐：哥哥，給他們展現尖釘鎮的實力！$聶梓：我們帶來黑暗！",
    },
    "victory": {
      1: "瑪俐：你的強光亮瞎我們的黑暗了啦……$聶梓：實在太亮了…",
    },
  },
  "marnie_piers_double": {
    "encounter": {
      1: "聶梓: 台下準備好了嗎！$瑪俐: 哥哥，我們是來對戰的，\n不是來唱歌的……",
    },
    "victory": {
      1: "聶梓：這首歌獻給大家！$瑪俐：哥哥……",
    },
  },
};

// Dialogue of the named double battles in the game. For when the player is female. For languages that do not have gendered pronouns, this can be set to PGMdoubleBattleDialogue.
export const PGFdoubleBattleDialogue: DialogueTranslationEntries = PGMdoubleBattleDialogue;
