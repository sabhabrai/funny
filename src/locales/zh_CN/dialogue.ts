import {DialogueTranslationEntries, SimpleTranslationEntries} from "#app/interfaces/locales";

// Dialogue of the NPCs in the game when the player character is male (or unset)
export const PGMdialogue: DialogueTranslationEntries = {
  "youngster": {
    "encounter": {
      1: "嘿，想来对战吗？",
      2: "你也是新人训练师吗？",
      3: "嘿，我之前没见过你。我们来对战吧！",
      4: "我刚输了，所以我正在寻找更多的宝可梦。$等等！你看起来很弱！\n来吧，我们对战吧！",
      5: "我们见过面吗？我记不太清了。$嗯，不管怎样，很高兴见到你！",
      6: "好的！我们上吧！",
      7: "好的！我来啦！我会向你展示我的实力！",
      8: "嚯嚯嚯...我会向你展示我的宝可梦有多厉害！",
      9: "不要浪费时间打招呼。你准备好了就放马过来！",
      10: "别掉以轻心，$否则你可能会被小朋友打到哭鼻子哦。",
      11: "我精心培养了我的宝可梦。不许你伤害它们！",
      12: "恭喜你成功了！从这以后可不轻松哦。",
      13: "战斗永无止境！欢迎来到没有尽头的世界！",
    },
    "victory": {
      1: "哇！你很强！",
      2: "我根本没机会赢，对吧？",
      3: "我会等长大了再来打败你！",
      4: "呃。我没有更多宝可梦了。",
      5: "不可能…不可能！我怎么可能又输了…",
      6: "不！我输了！",
      7: "哇！你真是太不可思议了！我既惊讶又钦佩！",
      8: "这怎么…怎么可能…$明明我和我的宝可梦是最强大的…",
      9: "下次我不会输了！我们找时间再对战吧！",
      10: "天哪！你看不出我还只是个小孩子吗！$你那样全力以赴太赖了！",
      11: "你的宝可梦更棒啊！和我交换吧！",
      12: "我之前有点上头，我说了什么来着？",
      13: "啊哈哈！就是这样！$对！你已经熟悉这个世界了！",
    }
  },
  "lass": {
    "encounter": {
      1: "我们来对战吧，好吗？",
      2: "你看起来像是个新人训练师。我们来战斗吧！",
      3: "我不认识你。来对战怎么样？",
      4: "让我们来进行一场有趣的宝可梦对战吧！",
      5: "我会向你展示如何真正使用宝可梦！",
      6: "一场认真的对战从始于认真的开场白！$你确定你准备好了吗？",
      7: "花无重开日，人无再少年。$你在对战中只有一次机会。$很快，你就只能活在回忆中了。",
      8: "你最好对我手下留情，好吗？$当然我会认真对战的！",
      9: "学校很无聊，我无事可做。$*哈欠*…我只是来对战打发时间。",
    },
    "victory": {
      1: "那真是令人印象深刻！我还有很多要学习。",
      2: "我没想到你会这么轻易地打败我…",
      3: "我希望有一天，我们能再进行一场对战。",
      4: "那真是场非常有趣的对战！$你让我精疲力尽了…",
      5: "你给我上了一课！你真是太棒了！",
      6: "说真的，我输了。$这，怎么说，真的好难过，但你也真的很厉害。",
      7: "我不需要像这样的记忆。删除记忆中…",
      8: "嘿！我告诉过你要对我手下留情！$不过，当你认真的时候，你真的很酷。",
      9: "实际上，我开始厌倦对战了…$一定有新的事情可以做…",
    }
  },
  "breeder": {
    "encounter": {
      1: "听话的宝可梦，自私的宝可梦…$宝可梦有独特的性格呢。",
      2: "尽管我出生贫寒，但我的宝可梦培养的很好。",
      3: "嗯，你有没有管教你的宝可梦？$过度溺爱是不好的。",
    },
    "victory": {
      1: "对每个宝可梦因材施教是很重要的。",
      2: "不像一无是处的我…这些宝可梦都很优秀。",
      3: "过度的赞美会宠坏宝可梦和人。",
    },
    "defeat": {
      1: "即使输了，也不应该对你的宝可梦发火。",
      2: "相当好的宝可梦，对吧？我很会养东西。",
      3: "无论你多么爱你的宝可梦，$你仍要在它没做好时管教它们。",
    }
  },
  "breeder_female": {
    "encounter": {
      1: "宝可梦永远不会背叛你。$它们会回报你对它们的爱。",
      2: "要我教教你训练优秀宝可梦的技巧吗？",
      3: "特别的宝可梦有特别的培育技巧。",
    },
    "victory": {
      1: "呃…事情不应该是这样的。$我是不是用错了能量方块？",
      2: "这怎么会发生在我的宝可梦身上…$你给你的宝可梦喂了什么？",
      3: "如果我输了，我告诉你我只是在消磨时间。$你根本不会伤害到我的自尊心。",
    },
    "defeat": {
      1: "这证明了我的宝可梦已经接受了我的爱。",
      2: "训出好宝可梦的真正技巧是捉到好的宝可梦。",
      3: "宝可梦的强弱取决于你的饲养方式。",
    }
  },
  "fisherman": {
    "encounter": {
      1: "啊！你让我错过了一次咬钩！$你打算怎么办？",
      2: "走开！你吓跑了宝可梦！",
      3: "让我看看你能否赢得胜利！",
    },
    "victory": {
      1: "算了吧。",
      2: "下一次，我将卷土重来，凯旋而归！",
      3: "我想这次我低估了海流。",
    },
  },
  "fisherman_female": {
    "encounter": {
      1: "哇！我钓到了一条大鱼！",
      2: "线已收好，准备提竿！",
      3: "准备制造波浪！",
    },
    "victory": {
      1: "我会带着更强大的鱼钩回来。",
      2: "下次我会赢得胜利。",
      3: "我只是在为回归磨利我的鱼钩！",
    },
  },
  "swimmer": {
    "encounter": {
      1: "是时候潜水了！",
      2: "让我们一起乘风破浪，赢得胜利！",
      3: "该一鸣惊人了！",
    },
    "victory": {
      1: "沉浸在失败中！",
      2: "失败的波浪！",
      3: "后浪死在沙滩上，我猜。",
    },
  },
  "backpacker": {
    "encounter": {
      1: "收拾行李，开始游戏！",
      2: "让我看看你是否能跟上！",
      3: "全副武装，挑战者！",
      4: "我花了20年时间试图找到自己……但我在哪里？",
    },
    "victory": {
      1: "这次绊倒了！",
      2: "哦，我觉得我迷路了。",
      3: "死路！",
      4: "等一下！嘿！你不知道我是谁吗？",
    },
  },
  "ace_trainer": {
    "encounter": {
      1: "你看起来挺自信的。",
      2: "你的宝可梦…… 让我看看……",
      3: "因为我是王牌训练师，人们认为我很强。",
      4: "你知道成为王牌训练师需要什么吗？",
    },
    "victory": {
      1: "是的…… 你的宝可梦很棒……",
      2: "什么？！我是战斗天才啊！",
      3: "理所应当，你才是主角！",
      4: "好好好！你可以成为王牌训练师！",
    },
    "defeat": {
      1: "我将把我的身体和灵魂全都奉献给宝可梦对战！",
      2: "一切都在我的预料之中… \n没有什么好惊讶的…",
      3: "我觉得我长大后有点玻璃心，$你太压力我我会跨的……",
      4: "我当然很强大，不会输。$而且重要的是我要优雅地赢。",
    }
  },
  "parasol_lady": {
    "encounter": {
      1: "是时候用优雅和从容来为战斗添彩了！",
    },
    "victory": {
      1: "我的优雅依然完好无损！",
    }
  },
  "twins": {
    "encounter": {
      1: "准备好咯，因为我们联手，\n麻烦双倍！",
      2: "两颗心，一条绳$让我们看看你能否跟上我们双胞胎的力量！",
      3: "希望你准备好了面对双倍的麻烦，$因为我们即将燃起来啦！",
    },
    "victory": {
      1: "虽然我们在这一轮输了，$但我们的羁绊依然坚不可摧！",
      2: "我们的双胞胎精神，才不会就此熄灭。",
      3: "我们会作为充满活力的二人组，$卷土重来，变得更强！",
    },
    "defeat": {
      1: "双胞胎的力量至高无上！",
      2: "两颗心，一起赢！",
      3: "笑容成双，共舞成双！",
    }
  },
  "cyclist": {
    "encounter": {
      1: "准备好在我后面吃土吧！",
      2: "挑战者，准备好！我要把你打的落花流水！",
      3: "全速前进，让我看看你能不能跟的上！",
    },
    "victory": {
      1: "轮子可能不转了，但我的决心没有停下。",
      2: "被超越了！",
      3: "通往胜利的道路还有许多曲折等待探索。",
    },
  },
  "black_belt": {
    "encounter": {
      1: "我赞扬你挑战我的勇气！$因为我是踢力最强的人！",
      2: "哦，我明白了。你想被切成碎片吗？$或者你更喜欢当个沙袋？",
    },
    "victory": {
      1: "哦。是宝可梦在战斗。$我强大的踢击一点忙都没帮上。",
      2: "嗯…如果我无论如何都会输，我希望能被彻底打败。",
    },
  },
  "battle_girl": {
    "encounter": {
      1: "你不必试图勾引我。你可以输给我。",
    },
    "victory": {
      1: "很难说再见，但我们快没时间了……",
    },
  },
  "hiker": {
    "encounter": {
      1: "人到中年后，我的身体和我爬过的山一样强壮！",
      2: "我从父母那里遗传了这副魁梧的身材…$就像一座活生生的山脉…",
    },
    "victory": {
      1: "至少在BMI方面我不能输！",
      2: "这还不够……永远不够。$我的坏胆固醇还不够高……",
    },
  },
  "ranger": {
    "encounter": {
      1: "当我身处大自然中，其他事情都不重要了。",
      2: "如果我生活中没有大自然，有时就会突然感到焦虑。",
    },
    "victory": {
      1: "无论我是赢是输，\n对广阔的大自然来说并不重要……",
      2: "与城市生活的窒息感相比，\n这种事情微不足道。",
    },
    "defeat": {
      1: "我赢了。但与浩瀚的大自然相比，\n胜利算不了什么…",
      2: "与我的焦虑症相比，我觉得你也不会怎样…",
    }
  },
  "scientist": {
    "encounter": {
      1: "我的研究将引导这个世界走向和平与欢乐。",
    },
    "victory": {
      1: "我是个天才…我不应该输给你这样的人…",
    },
  },
  "school_kid": {
    "encounter": {
      1: "……嘿嘿。我对计算和分析很有信心。",
      2: "我正在尽可能地积累经验，$因为我希望有一天能成为道馆馆主。",
    },
    "victory": {
      1: "哦…计算和分析也许和个例不太匹配呀…",
      2: "我想，即使是艰难困苦的经历，也有存在的意义。",
    }
  },
  "artist": {
    "encounter": {
      1: "我以前很受欢迎，但现在已经彻底过气了。",
    },
    "victory": {
      1: "随着时代的变迁，价值观也在变化。$我意识到这一点已经太晚了。",
    },
  },
  "guitarist": {
    "encounter": {
      1: "当我弹奏着走向胜利的旋律时，$准备好感受失败的节奏吧！",
    },
    "victory": {
      1: "暂时沉默了，但我不屈的旋律将继续演奏。",
    },
  },
  "worker": {
    "encounter": {
      1: "人们总误解我，这让我很烦。$我比大家想象的要干净得多。",
    },
    "victory": {
      1: "我真的不想晒伤皮肤，所以我想在阴凉处工作。",
    },
  },
  "worker_female": {
    "encounter": {
      1: "人们总是误解我，这让我很烦。 $我比大家想象的要干净得多。",
    },
    "victory": {
      1: "我真的不想晒伤皮肤，\n所以我想在阴凉处工作。",
    },
    "defeat": {
      1: "我的身体和心灵并不总同步。",
    },
  },
  "worker_double": {
    "encounter": {
      1: "你会知道我们怎么击败你的。我们在工地训练过！",
    },
    "victory": {
      1: "真奇怪…怎么会这样…我不应该被打败的。",
    },
  },
  "hex_maniac": {
    "encounter": {
      1: "我通常只听古典音乐，但如果我输了，$我想我应该试试新时代的音乐！",
      2: "我的每一滴眼泪都让我变得更加坚强。",
    },
    "victory": {
      1: "乐坛新时代的曙光就此出现了吗？",
      2: "现在我变得更强了。我随着他人怨恨而成长。",
    },
    "defeat": {
      1: "“新时代”指的是二十世纪的古典作曲家，对吧？",
      2: "不要纠结于悲伤或沮丧。$你可以用悲愤来激励自己。",
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
      1: "准备好，因为正义即将得到伸张！",
      2: "准备好维护法律，在战场上伸张正义！",
    },
    "victory": {
      1: "正义的分量比以往还要沉重……",
      2: "失败的阴影，在警局中徘徊。",
    }
  },
  "beauty": {
    "encounter": {
      1: "我最后的战斗…我就是这么看待这场对战的…",
    },
    "victory": {
      1: "很有趣…有时间再来一场最后的战斗…",
    },
  },
  "baker": {
    "encounter": {
      1: "希望你准备好品尝失败的滋味！",
    },
    "victory": {
      1: "我会卷土重来的。",
    },
  },
  "biker": {
    "encounter": {
      1: "是时候加速，把你甩在后面了！",
    },
    "victory": {
      1: "我会为下一场比赛调整状态。",
    },
  },
  "firebreather": {
    "encounter": {
      1: "我的火焰会吞噬你！",
      2: "我的灵魂在燃烧，我要让你看看它有多滚烫！",
      3: "快来看看吧！"
    },
    "victory": {
      1: "我燃成灰了…",
      2: "哟！ 好烫！",
      3: "嗷！ 我的鼻尖烧焦了！"
    },
  },
  "sailor": {
    "encounter": {
      1: "伙计，如果你输了，你就得挨板子！",
      2: "来吧！这关系到我作为水手的尊严！",
      3: "你好啊！你晕船么？"
    },
    "victory": {
      1: "啊，被孩子打败了。",
      2: "你的精神让我沉沦！",
      3: "好像是我晕船了…"
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
  "colress": {
    "encounter": {
      1: "You could become a threat to Team Plasma, so we must eliminate you here for the sake of my research!",
      2: "Oh, for crying out loud... I didn't expect to have to fight so soon. Fascinating!",
      3: "You're an impressive Trainer to have made it this far. Let's see how you fare against my strategies."
    },
    "victory": {
      1: "Ghetsis... I must report this...",
      2: "It's bitter cold. I'm shivering. Yet my mind is focused on the data!",
      3: "Hmph. You're a smarter Trainer than I expected. Quite intriguing."
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
      1: "你要有麻烦了！"
    },
    "victory": {
      1: "好讨厌的感觉啊！"
    },
  },
  "magma_grunt": {
    "encounter": {
      1: "如果你挡在熔岩队路上，那就别指望我们手下留情！"
    },
    "victory": {
      1: "哈？我输了？！"
    },
  },
  "aqua_grunt": {
    "encounter": {
      1: "即使是小孩，如果要和海洋队作对，也别指望我们手下留情！"
    },
    "victory": {
      1: "你在开玩笑吧？"
    },
  },
  "galactic_grunt": {
    "encounter": {
      1: "别惹银河队！"
    },
    "victory": {
      1: "停机了…"
    },
  },
  "plasma_grunt": {
    "encounter": {
      1: "异端不共戴天！"
    },
    "victory": {
      1: "等离子子子子子子！"
    },
  },
  "flare_grunt": {
    "encounter": {
      1: "时尚最重要！"
    },
    "victory": {
      1: "未来一片黑暗啊…"
    },
  },
  "rocket_boss_giovanni_1": {
    "encounter": {
      1: "我不得不说，能来到这里，你的确很不简单！"
    },
    "victory": {
      1: "什么！这不可能！"
    },
    "defeat": {
      1: "记住我的话。无法衡量自己的力量，说明你还是个孩子。"
    }
  },
  "rocket_boss_giovanni_2": {
    "encounter": {
      1: "我的老伙计还需要我…你要挡我的路吗？"
    },
    "victory": {
      1: "这怎么可能…？\n火箭队的梦想…就这么成为泡影了…"
    },
    "defeat": {
      1: "火箭队会重生，而我会统治世界！"
    }
  },
  "magma_boss_maxie_1": {
    "encounter": {
      1: "我会亲手埋葬你，希望你能喜欢！"
    },
    "victory": {
      1: "啊！你…很厉害…我落后了…一点…"
    },
    "defeat": {
      1: "熔岩队必胜！"
    }
  },
  "magma_boss_maxie_2": {
    "encounter": {
      1: "你是我实现目标最后的障碍。\n准备好迎接我最强的一击吧！哈哈哈哈！"
    },
    "victory": {
      1: "这…这不…呃"
    },
    "defeat": {
      1: "现在…我要把这个星球变成人类的理想国度！"
    }
  },
  "aqua_boss_archie_1": {
    "encounter": {
      1: "我是海洋队的老大，所以，你的路大概走到头了。"
    },
    "victory": {
      1: "下次再见吧。我会记住你的脸的。"
    },
    "defeat": {
      1: "天才！我的队伍不会再退缩了！"
    }
  },
  "aqua_boss_archie_2": {
    "encounter": {
      1: "我等这一天很久了。\n这就是我的真实力量！"
    },
    "victory": {
      1: "果然很强……啊！"
    },
    "defeat": {
      1: "我会让这世界上的一切回归到最初的纯净状态！！"
    }
  },
  "galactic_boss_cyrus_1": {
    "encounter": {
      1: "但在这之前，让我见识见识你那敢向银河队叫板的实力吧。"
    },
    "victory": {
      1: "有意思，简直太有意思了。"
    },
    "defeat": {
      1: "我要创造我的新世界…"
    }
  },
  "galactic_boss_cyrus_2": {
    "encounter": {
      1: "是啊，我和你还真是有缘呢。\n不过，这段孽缘…就让我在此斩断吧！"
    },
    "victory": {
      1: "怎么可能！怎么可能！怎么可能！"
    },
    "defeat": {
      1: "永别了。"
    }
  },
  "plasma_boss_ghetsis_1": {
    "encounter": {
      1: "无论是谁做了什么！都无法阻止我！"
    },
    "victory": {
      1: "怎么回事？我可是建立了等离子队的完美的人啊！\n是要改变世界的完美的统治者！"
    },
    "defeat": {
      1: "我是坐拥世界的完美统治者！哇哈哈哈！"
    }
  },
  "plasma_boss_ghetsis_2": {
    "encounter": {
      1: "来吧！让我看看你彻底绝望时的那张脸！"
    },
    "victory": {
      1: "不！我的伟大目标！我要完全支配世界啊！"
    },
    "defeat": {
      1: "酋雷姆！融合吧！"
    }
  },
  "flare_boss_lysandre_1": {
    "encounter": {
      1: "你想要阻止我？在对战中展示给我看吧！"
    },
    "victory": {
      1: "看来你的确是想要阻止我。但是，先等一下。"
    },
    "defeat": {
      1: "宝可梦…不该存在。"
    }
  },
  "flare_boss_lysandre_2": {
    "encounter": {
      1: "你我的未来…究竟哪个才正确，\n就让我们来问问各自的宝可梦吧！"
    },
    "victory": {
      1: "哇啊啊啊！"
    },
    "defeat": {
      1: "没有远见的蠢货会继续玷污这个美丽的世界。"
    }
  },
  "brock": {
    "encounter": {
      1: "我对岩石属性宝可梦的专精会击败你！来吧！",
      2: "我磐石般的意志将压倒你！",
      3: "让我展示给你看看，我宝可梦真正的力量！",
    },
    "victory": {
      1: "你宝可梦的力量战胜了我坚如磐石的防御！",
      2: "世界很大！很高兴有机会和你战斗。",
      3: "也许我应该回去追寻我成为宝可梦饲养员的梦想……",
    },
    "defeat": {
      1: "最好的进攻就是坚固的防守！$那是我做事的方式！",
      2: "下次来和我一起研究岩石属性，$更好地了解如何与它们对战！",
      3: "哈哈，我在各地的旅行有所回报了！",
    },
  },
  "misty": {
    "encounter": {
      1: "我的战策就是使用水属性宝可梦全面进攻！",
      2: "嗨，我会让你见识我的水属性宝可梦的力量！",
      3: "我的梦想是踏上旅程，与强大的训练师战斗……$你能满足我吗？",
    },
    "victory": {
      1: "你真的很强……我承认，你有技术的……",
      2: "哼……你知道你只是运气好，对吧？！",
      3: "哇，你太过分了！不敢相信你打败我了！",
    },
    "defeat": {
      1: "强大的小霞对你来说，太过分了吗？",
      2: "我希望你看到了我宝可梦优雅的游泳技巧！",
      3: "你的宝可梦无法匹敌我的心腹和骄傲！",
    },
  },
  "lt_surge": {
    "encounter": {
      1: "我的电属性宝可梦在战争中救了我！$我来给你展示一下！",
      2: "立正！我要电到你投降！",
      3: "我会像对待敌军一样，狠狠电你！",
    },
    "victory": {
      1: "哇！你的队伍有真家伙，小子！",
      2: "啊啊，你很强！连我的电击技巧都输给了你。",
      3: "这失败真是把我给电麻了！",
    },
    "defeat": {
      1: "哦耶！我的电属性宝可梦是世界第一！",
      2: "哈哈哈！真是一场电动人心的战斗，小子！",
      3: "宝可梦对战等于战争，$我向你展示了军队中的格斗技巧！",
    },
  },
  "erika": {
    "encounter": {
      1: "啊，这里天气真好…$哦，对战？那好吧。",
      2: "我在宝可梦对战上的造诣，$可以与我的插花技巧相媲美。",
      3: "哦，希望我宝可梦的宜人香气\n不会再让我睡着…",
      4: "看看花园里的花朵，如此令人心旷神怡。",
    },
    "victory": {
      1: "哦！我认输啦~",
      2: "这场比赛非常愉快。",
      3: "啊，看来我输了…",
      4: "哦，我的天哪。",
    },
    "defeat": {
      1: "我怕我会打瞌睡…",
      2: "哦，我天。看来我的草属性宝可梦击败了你。",
      3: "那场战斗是如此令人心旷神怡。",
      4: "哦…这就完啦？",
    },
  },
  "janine": {
    "encounter": {
      1: "我正在掌握毒属性攻击的艺术。$今天我来和你过过招！",
      2: "父亲相信我能独当一面。$我来证明他说的对！",
      3: "我的忍术，仅次于我的父亲！$你能跟的上吗？",
    },
    "victory": {
      1: "就算现在，我仍然需要继续训练…我明白了。",
      2: "你的战斗技巧，超过了我。",
      3: "我要好好努力提高我的技术。",
    },
    "defeat": {
      1: "呵呵…毒液耗尽了你所有的力量。",
      2: "哈！你根本无法抵挡我卓越的忍技！",
      3: "我没有辜负父亲对我的信任。",
    },
  },
  "sabrina": {
    "encounter": {
      1: "我的超能力预见了你的到来！",
      2: "我不喜欢战斗，但如果你想，$我会展示我的实力！",
      3: "我能感觉到你的雄心壮志。$我倒要看看你是不是虚有其表。",
    },
    "victory": {
      1: "你的力量……远远超出了我的预知……",
      2: "我没有准确预测到你的实力。",
      3: "即使我强大的超能力也无法感知到你这样强大的人。",
    },
    "defeat": {
      1: "这场胜利……和我看到的未来一样啊！",
      2: "也许我预感到有强大实力的人，是另一个……",
      3: "在你奋不顾身投入战斗之前，\n磨练你的能力。$如果你这样做，你才未来可期……",
    },
  },
  "blaine": {
    "encounter": {
      1: "哈！希望你带了烧伤治疗药！",
      2: "我火热的宝可梦将所有挑战者都焚烧殆尽！",
      3: "准备好玩火吧！",
    },
    "victory": {
      1: "我已经焚烧殆尽了！甚至连灰烬都没有留下！",
      2: "我没有把火焰煽得足够高吗？",
      3: "我燃尽了……但这让我进步的动力燃烧得更旺了！",
    },
    "defeat": {
      1: "我的熊熊烈火无法被扑灭！",
      2: "我的宝可梦因这次胜利而变得更加强大！",
      3: "哈！我的激情燃得比你的更热烈！",
    },
  },
  "giovanni": {
    "encounter": {
      1: "我，火箭队的领袖，\n会让你的世界感受到痛苦！",
      2: "我在这里的训练在我再次面对老朋友之前至关重要。",
      3: "我认为你还没有准备好迎接你即将经历的失败！",
    },
    "victory": {
      1: "什么！我输了？！ 我没什么可和你说的！",
      2: "哼……你永远无法理解我希望实现的目标。",
      3: "这次失败只是暂时的。$我将找准时机，让火箭队浴火重生。",
    },
    "defeat": {
      1: "不知自己几斤几两，\n说明你仍然只是一个孩子。",
      2: "不要再试图干涉我。",
      3: "我希望你明白挑战我是多么愚蠢。",
    },
  },
  "roxanne": {
    "encounter": {
      1: "您能否展示一下您是如何战斗的么？",
      2: "你可以和更多训练师战斗来学到很多东西。",
      3: "哦，被你抓到我正在用功了~$你想战斗吗？",
    },
    "victory": {
      1: "哦，看来我输了。$我明白了。",
      2: "看来我在战斗方面还有更多东西要学。",
      3: "我会把今天在这里学到的东西铭记于心。",
    },
    "defeat": {
      1: "从我们的对战中，我学到了很多。$希望你也是。",
      2: "我期待再次与你战斗。$希望你能运用在此学到的东西。",
      3: "我凭借我所学到的一切赢得了胜利。",
    },
  },
  "brawly": {
    "encounter": {
      1: "哦，伙计，挑战者！$让我看看你的能耐！",
      2: "你看起来很厉害嘛。$来对战吧！",
      3: "是时候掀起风暴了！$我们上吧！",
    },
    "victory": {
      1: "哦哇，你把我冲走了！",
      2: "你驾驭了我的海浪，把我打败了！",
      3: "我觉得我就像是在武斗洞窟里迷路了！",
    },
    "defeat": {
      1: "哈哈，我驾驭了大浪！$有时间再挑战我吧。",
      2: "再和我一起冲浪吧！",
      3: "就像潮水的涨落，\n我希望你也能再来挑战我。",
    },
  },
  "wattson": {
    "encounter": {
      1: "是时候被电击了！$哈哈哈！",
      2: "我要让火星子飞蹦！$哈哈哈！",
      3: "我希望你带了麻痹药！$哇哈哈哈！",
    },
    "victory": {
      1: "看来我的电量用完了！$哇哈哈哈！",
      2: "你完全接地了是吧！$哇哈哈哈！",
      3: "谢谢你给我电了一下！$哇哈哈哈！",
    },
    "defeat": {
      1: "电充充满，有时间再挑战我吧！$哇哈哈哈！",
      2: "我希望你觉得我们的战斗激情似电！$哇哈哈哈！",
      3: "你没想到我赢了吧？$哇哈哈哈！",
    },
  },
  "flannery": {
    "encounter": {
      1: "很高兴见到你！等等，不对……$我要粉碎你！",
      2: "我才当道馆主没多久，\n但我会让你灰飞烟灭！",
      3: "是时候展示爷爷教给我的招式了！来对战吧！",
    },
    "victory": {
      1: "你让我想起了我的爷爷……$难怪我输了。",
      2: "我是不是太努力了？$我应该放松，不能太上头了。",
      3: "失败才不会呛到我。$是时候重新点燃训练了！",
    },
    "defeat": {
      1: "我希望我让祖父感到骄傲了……$有时间我们再战斗吧。",
      2: "我……我简直不敢相信我赢了！$按照自己的方式做事奏效了！",
      3: "早点用炽热的招式再来交手吧！",
    },
  },
  "norman": {
    "encounter": {
      1: "我没想到你能一路来到这里。$我们来对战吧。",
      2: "作为道馆主，我会尽一切努力赢得胜利。$我们开始吧！",
      3: "你最好全力以赴。$对战的时候到了！",
    },
    "victory": {
      1: "我输给了你……？$但规则就是规则。",
      2: "难道我不该从城都搬家吗……？",
      3: "我不敢相信。$这是一场好对战。",
    },
    "defeat": {
      1: "我们都尽力了。$希望我们不久之后能再对战。",
      2: "你应该尝试挑战我的孩子。$可能会有一些收获！",
      3: "谢谢你精彩的战斗。$下次好运。",
    },
  },
  "winona": {
    "encounter": {
      1: "我一直在天空中翱翔寻找猎物…$而你就是我的目标！",
      2: "不管战况如何，我都会和我的飞行宝可梦$以优雅的姿态获胜。来战斗吧！",
      3: "我希望你不怕高。$我们一起升上高空吧！",
    },
    "victory": {
      1: "你是我见过的第一位比我更有风度的训练师。$打的非常出色。",
      2: "哦，我的飞行系宝可梦都已经坠落了！$好吧。",
      3: "尽管我倒下了，我的宝可梦将继续翱翔！",
    },
    "defeat": {
      1: "我与我的飞行系宝可梦，\n将永远优雅地起舞！",
      2: "我希望你喜欢我们的演出。$我们优雅的舞蹈已经落幕。",
      3: "你愿意再来观看我们优雅的编舞吗？",
    }
  },
  "tate": {
    "encounter": {
      1: "嘿嘿嘿…$看到我没和妹妹在一起，很惊讶么？",
      2: "我可以读懂你在想什么…$你想要战斗！",
      3: "你如何击败一个…$读懂你一举一动的人？",
    },
    "victory": {
      1: "赢不了啊…$我想小南了…",
      2: "你和宝可梦之间的联系比我们更强。",
      3: "如果我和小南联手，我们会赢的。$我们可以了解彼此的想法！",
    },
    "defeat": {
      1: "我和我的宝可梦无与伦比！",
      2: "如果你连我都打不过，\n你肯定也打不过小南。",
      3: "这多亏了我和小南的严格训练。$我可以与宝可梦一心同体。",
    },
  },
  "liza": {
    "encounter": {
      1: "呵呵呵…$看到我没和哥哥一起，很惊讶吗？",
      2: "我可以读懂你渴望什么…$你想战斗，不是吗？",
      3: "你如何击败一个…$与宝可梦们一心同体的人？",
    },
    "victory": {
      1: "赢不了啊…$我想小枫了…",
      2: "你和宝可梦之间的联系…$比我强。",
      3: "如果我和小枫在一起，我们会赢的。$我们甚至可以接上彼此的话！",
    },
    "defeat": {
      1: "我和我的宝可梦势不可挡。",
      2: "如果你连我都打不过，\n你肯定也打不过小枫。",
      3: "这多亏了我和小枫的严格训练。$我可以与我的宝可梦一心同体。",
    },
  },
  "juan": {
    "encounter": {
      1: "别害羞啊。$我们来战斗吧！",
      2: "啊哈哈哈，敬请期待\n我和水属性宝可梦的盛大演出！",
      3: "我就是正在逼近的风暴！$你能经受住考验吗？",
      4: "请你见证我们的表演。$由我和宝可梦共同创造的宏伟水之幻境！",
    },
    "victory": {
      1: "你可能是一个能挑战米可利的天才！",
      2: "我专注于优雅，而你刻苦锻炼。$你能击败我是很正常的。",
      3: "啊哈哈哈！$好吧，这次你赢了。",
      4: "从你身上，我感受到了技巧的光辉，\n它将战胜一切。",
    },
    "defeat": {
      1: "宝可梦和我创造的水之幻境，让我取得了胜利。",
      2: "啊哈哈哈，我赢了，你输了。",
      3: "要我把我的服装借给你吗？\n可能能帮到你对战啊！$啊哈哈哈，我开玩笑的！",
      4: "我是赢家！也就是说，你输了。",
    },
  },
  "crasher_wake": {
    "encounter": {
      1: "极限! 极限! 看好了!$极限假面…就此…登场!",
      2: "极限! 极限! 极限假面!",
      3: "我是滔滔巨浪，将你冲走！",
    },
    "victory": {
      1: "我真是笑得合不拢嘴啊！$哈哈哈！那真是太有趣了！",
      2: "呼哇！结束收尾了！$我该怎么说呢……$我还想再对战！我还想再继续战斗！",
      3: "啊啊啊啊啊!?",
    },
    "defeat": {
      1: "耶！就是这样！",
      2: "我赢了，但我还想要更多！\n我还想再更多地战斗！",
      3: "再见！",
    },
  },
  "falkner": {
    "encounter": {
      1: "我将向你展示华丽的飞行宝可梦真正的力量！",
      2: "风啊，伴我同行！",
      3: "爸爸！我希望你能在空中注视着我的战斗！",
    },
    "victory": {
      1: "明白了……我会礼貌地退场。",
      2: "输了就是输了。你确实很强大。",
      3: "…行吧! 嗯, 我输了。",
    },
    "defeat": {
      1: "爸爸！我用你珍爱的飞行宝可梦赢了……",
      2: "飞行系宝可梦才是最强的！",
      3: "感觉我正在追赶上我的父亲！",
    },
  },
  "nessa": {
    "encounter": {
      1: "无论你的小脑瓜子在搞什么阴谋诡计，$我和我的搭档都会确保它石沉大海。",
      2: "我来这里可不是为了闲聊，\n而是为了赢！",
      3: "这是我的宝可梦给你的一点小礼物……\n我希望你能接受！",
    },
    "victory": {
      1: "你和你的宝可梦太过分了……",
      2: "怎么……？这怎么可能？！",
      3: "我完全被冲走了！",
    },
    "defeat": {
      1: "汹涌的海浪再次袭来！",
      2: "是时候乘风破浪，取得胜利了！",
      3: "诶嘿嘿！",
    },
  },
  "melony": {
    "encounter": {
      1: "我不会手下留情！",
      2: "好吧，我想我们应该开始了。",
      3: "我会把你冻得结结实实的！",
    },
    "victory": {
      1: "你……你可厉害了，是不是？",
      2: "如果你找到玛瓜，一定要好好教训他，好吗？",
      3: "你的破冰方式有点过于直接了呢……",
    },
    "defeat": {
      1: "现在你知道战斗有多残酷了吧？",
      2: "嘿！看来我又赢了！",
      3: "你是在保留实力吗？",
    },
  },
  "marlon": {
    "encounter": {
      1: "你看起来很强！来吧！让我们开始吧！",
      2: "我的强大像大海一样无边无际。$你会被我冲走，绝对的。",
      3: "哦豁，由我来面对你！这可不得了咯！",
    },
    "victory": {
      1: "你太厉害了！\n你培养了一些非常强大的宝可梦啊，$你已经掌握了训练师的精髓！",
      2: "你不仅仅是看起来，\n你是真的强，真的！$呃，我也被冲走了！",
      3: "你像凶猛的波浪一样强壮！",
    },
    "defeat": {
      1: "你很强，但这还不足以动摇大海，懂？",
      2: "嘻！看来我又赢了！",
      3: "甜蜜的胜利！",
    },
  },
  "shauntal": {
    "encounter": {
      1: "打扰了。你是挑战者，对吗？$我是四天王的幽灵系宝可梦使用者，$婉龙，我将是你的对手。",
      2: "我非常喜欢描写来到这里的训练师，\n以及他们训练的宝可梦。$我可以用你和你的宝可梦作为主题吗？",
      3: "每个与宝可梦相处的人都有故事要讲。$接下来要讲的故事是怎样的呢？",
    },
    "victory": {
      1: "哇。我惊呆了！",
      2: "对…对不起！我必须先向我的宝可梦道歉……$都是因为我让你们有了不好的经历，真的很抱歉！",
      3: "你要知道，我仍然是四天王之一！",
    },
    "defeat": {
      1: "额呵呵。",
      2: "给了我下一部小说的绝佳素材！",
      3: "就这样，又一篇故事来到尾声……",
    },
  },
  "marshal": {
    "encounter": {
      1: "我的师傅，阿戴克，\n看到了你作为训练师的潜力，$对你很有兴趣。$我要来考验你——挖掘你力量的极限。\n丹田发力！",
      2: "胜利，决定性的胜利，\n正是我所求！挑战者，我来了！",
      3: "在我的心中，我寻求着成为战士的力量，\n克服自身的所有弱点！$以我的信念，取胜！",
    },
    "victory": {
      1: "呼！干得好！",
      2: "不要停止战斗，追求更高的目标！",
      3: "你和你宝可梦展现的力量\n给我留下了深刻的印象……",
    },
    "defeat": {
      1: "嗯…",
      2: "这真是场好战斗。",
      3: "哈啊！哈啊！嗨呀啊！",
    }
  },
  "cheren": {
    "encounter": {
      1: "你让我想起了一位老朋友。$这让我对这场宝可梦战斗感到兴奋！",
      2: "不考虑清楚这一点，\n宝可梦对战就没有了意义。$这就是失去了和宝可梦一同战斗的意义。",
      3: "我的名字是黑连！我是道馆馆主，\n也是老师！$很高兴认识你。",
    },
    "victory": {
      1: "谢谢……我又能发现自己的不足了。",
      2: "谢谢…接近理想的道路…我好像隐约看到了。",
      3: "嗯……这值得思考。",
    },
    "defeat": {
      1: "作为道馆馆主，我要成为你要跨越的壁垒！",
      2: "好吧！",
      3: "正因为有宝可梦，我们才能走到这里。$为什么宝可梦会帮助我们，\n这个恐怕不仅是宝可梦与训练家…$而是生命与生命之间的问题。",
    }
  },
  "chili": {
    "encounter": {
      1: "咿呀！是时候玩火了！！我是三兄弟中最强的！",
      2: "嗒哒！如火似焰的伯特——就是我\n——你接下来的对手！",
      3: "我将向你展示，\n我和我炽热的火系宝可梦的能耐！",
    },
    "victory": {
      1: "被你干掉了。我……燃尽了……",
      2: "哇吼！你燃起来了！",
      3: "啊！被你干碎了！",
    },
    "defeat": {
      1: "我燃起来啦！和我玩儿，你就会被烫伤！",
      2: "你要是玩儿火，就会被烫伤！",
      3: "我说，拜托，\n你的对手是我，没机会赢的！",
    }
  },
  "cilan": {
    "encounter": {
      1: "无关个人情感…也不会有艰难的感受…$我和我的草属性宝可梦会…$呃…不管什么样的对手我们都会应战的。",
      2: "所以，呃，如果你愿意的话，我会，\n呃，尽我所能做好，呃，你知道的，你的对手。",
      3: "好吧……所以，我是天桐，\n我喜欢草属性宝可梦。",
    },
    "victory": {
      1: "呃……已经结束了吗？",
      2: "…真是太意外了。你真…强。$看起来就算是伯特或寇恩都赢不了你…",
      3: "…嗯。看起来我来的…不是时候？",
    },
    "defeat": {
      1: "哈？我赢了？",
      2: "我想…$我想我赢了，因为我一直在和我的兄弟伯特和寇恩竞争，\n我们都变得更强了。",
      3: "…这…这是一次非常吓人的经历呢…",
    }
  },
  "roark": {
    "encounter": {
      1: "我需要看看你作为训练师的潜力。$还有，我要看看与你并肩作战的宝可梦的坚韧！",
      2: "来吧！这些是我的岩石系宝可梦，我的骄傲！",
      3: "岩石属性宝可梦就是最强的！",
      4: "我要看看你作为训练师的潜力。$还要看看与你并肩作战的宝可梦的坚韧！",
    },
    "victory": {
      1: "什么？不可能！我强化的宝可梦们！",
      2: "……我大脑过载了。$下次邀请你参加地下的化石挖掘比赛。",
      3: "有你这种技术，赢得胜利是很正常的。",
      4: "什么？！连这也不够？",
      5: "我搞砸了。",
    },
    "defeat": {
      1: "看？我为我的摇滚战斗风格感到骄傲！",
      2: "谢谢！这场战斗给了我自信，$我感觉能够打败我父亲了！",
      3: "我感觉就像我砸穿了一块顽石！",
    }
  },
  "morty": {
    "encounter": {
      1: "只要我再多努力一点，我就能看到我遇到传说中的宝可梦的未来！$你会帮助我达到那个水平！",
      2: "据说，彩虹色的宝可梦会\n出现在真正强大的训练师面前。 $我一直相信着这个美丽的传说，\n所以，从出生开始，\n就在这里进行着秘密的修行。$因为这样，其他人看不到的东西\n我也能够看得到…$我看到的，是那个将传说中的宝可梦\n召唤到这片大地上的人的影子。$我一直相信，那就是我自己！\n希望你也能助我一臂之力！",
      3: "无论你相信还是不相信，神秘的力量确实存在。",
      4: "你可以见证我训练的成果。",
      5: "你必须让你与宝可梦的灵魂合二为一。你能做到吗？",
      6: "嘿，你想成为我训练的一部分吗？",
    },
    "victory": {
      1: "我还不够好……",
      2: "我明白了…你的旅程…去了遥远的地方，你见过的比我多得多。$我羡慕你…",
      3: "这怎么可能……",
      4: "我认为我们的潜力没什么不同。$但是，我觉得你并不简单，似乎还有什么……",
      5: "我想我需要更多的训练。",
      6: "那太遗憾了",
    },
    "defeat": {
      1: "我又向前迈进了一步。",
      2: "呵呵呵……",
      3: "什…么？！那还不够？",
      4: "我感觉就像我砸穿了一块顽石！",
      5: "哈哈哈啊！",
      6: "我知道我会赢！",
    }
  },
  "crispin": {
    "encounter": {
      1: "我想赢，所以接下来我正要赢！",
      2: "我想对战就对战！懂吗！就应该这样！",
    },
    "victory": {
      1: "我想赢……但我还是输了！",
      2: "我输了……因为我赢不了！",
    },
    "defeat": {
      1: "嘿，等一下。我是不是赢了？$我觉得我赢了！太满足了！",
      2: "哇哦！那太棒了！",
    }
  },
  "amarys": {
    "encounter": {
      1: "我想帮助某个人。因此，我不能输。$…我们的战斗现在开始。",
    },
    "victory": {
      1: "我还不够，我明白了。",
    },
    "defeat": {
      1: "胜利属于我。打得好。",
    }
  },
  "lacey": {
    "encounter": {
      1: "我将用我平时的队伍\n作为四天王的一员面对你。",
    },
    "victory": {
      1: "打得真好呀~",
    },
    "defeat": {
      1: "让我们为你宝可梦的努力给予热烈的掌声！",
    }
  },
  "drayton": {
    "encounter": {
      1: "哥们，我喜欢椅子。\n你喜欢椅子吗？简直是救星。$我不明白为什么大家不一直坐着。\n站着多累人！",
    },
    "victory": {
      1: "我早该想到的！",
    },
    "defeat": {
      1: "嘿嘿嘿！别介意我，\n我只是在这里小赢一下。$如果你不开心，我懂，\n但别因为我对乌栗发火，OK？",
    }
  },
  "ramos": {
    "encounter": {
      1: "我用那些强壮的植物\n盖出来的游乐场精彩吗？$它们的力量象征着我这个园丁兼道馆馆主的实力，\n你真的确定能够与之抗衡吗？",
    },
    "victory": {
      1: "你信任你的宝可梦，\n它们也信任你…不错的战斗，小豆芽。",
    },
    "defeat": {
      1: "呵呵呵…确实，\n脆弱的小草甚至能穿透混凝土。",
    }
  },
  "viola": {
    "encounter": {
      1: "败阵时的后悔，胜利的瞬间…$都是最棒的影象！很好呀，很好呀！$那么来吧！",
      2: "我的镜头总会聚焦在胜利上，\n我不会让任何事情破坏这个画面！",
    },
    "victory": {
      1: "你和你的宝可梦向我展示了一个全新的镜头机位！\n很好呀，很好呀！",
      2: "你通过镜头看到的世界，\n和你与宝可梦并肩作战时看到的世界…$视角不同，即使是同一个世界看起来也完全不同。",
    },
    "defeat": {
      1: "我胜利那一刻的照片，\n将是一个真正的赢家，对吧！",
      2: "是的！我拍了些很棒的照片！",
    },
  },
  "candice": {
    "encounter": {
      1: "向小菘我挑战吗？好啊！\n我就是在等待强者$但是我也气势高昂，很强哦？",
      2: "宝可梦也好，时尚也好，恋爱也好，\n无论做什么都气势高昂！$就说到这儿吧，让你见识一下我的气势，\n要做好觉悟哦！",
    },
    "victory": {
      1: "好厉害！我有点尊敬你了。",
      2: "好厉害！我有点尊敬你了！$嗯，感觉是被你的气势给压倒了。",
    },
    "defeat": {
      1: "你的气势我看到了，但我还是不会输的！",
      2: "怎么样？小菘我的气势！\n宝可梦们的气势满满哦！",
    }
  },
  "gardenia": {
    "encounter": {
      1: "你身上有一种胜利的气息。\n那么不管怎样，$这应该会是场有趣的战斗。\n让我们对战吧！",
    },
    "victory": {
      1: "太棒了！你可擅长对战了，不是吗？",
    },
    "defeat": {
      1: "太好了！我的宝可梦和我都很棒！",
    },
  },
  "aaron": {
    "encounter": {
      1: "好的！让我来接受你的挑战！",
    },
    "victory": {
      1: "战斗是一件深刻而复杂的事情……",
    },
    "defeat": {
      1: "战胜一位四天王并不容易。",
    },
  },
  "cress": {
    "encounter": {
      1: "没！错！你必须面对\n与我和我高贵的水属性的战斗！",
    },
    "victory": {
      1: "输了？我？我不敢相信。",
    },
    "defeat": {
      1: "当你的对手是我时，这是必然的结果。",
    }
  },
  "allister": {
    "encounter": {
      1: "我是欧尼奥。$我…我来了……",
    },
    "victory": {
      1: "我差点被吓得丢了面具…那真是…$哇。我可以看清你真正的实力。",
    },
    "defeat": {
      1: "这真是太棒了！",
    }
  },
  "clay": {
    "encounter": {
      1: "咳咳! 让我好等，不是吗，孩子？$好吧，是时候看看你能做到什么了！",
    },
    "victory": {
      1: "真是的……我先说好，\n我可没有手下留情。",
    },
    "defeat": {
      1: "最重要的是输掉的时候该怎么办。$只要你能在失败中找到教训，\n就能够不断地成长！",
    }
  },
  "kofu": {
    "encounter": {
      1: "我会给你上一整道水系宝可梦大餐！\n但别真吃了它们！",
    },
    "victory": {
      1: "吃了吗！你真是活力又新鲜啊，\n不是吗！$就是有点太鲜活了！",
    },
    "defeat": {
      1: "你要再来找我，听见了吗？",
    }
  },
  "tulip": {
    "encounter": {
      1: "请让我运用我的化妆技巧，$让你可爱的小宝可梦变得更美丽！",
    },
    "victory": {
      1: "你妆点的力量宛如魔法加固，\n完全冲洗不掉啊。",
    },
    "defeat": {
      1: "你知道吗，在我这行，\n那些没天赋的人往往会很快消失，$再也不会被提起。",
    }
  },
  "sidney": {
    "encounter": {
      1: "你给我的印象不错，\n我猜这会是一场精彩的对战。$很棒！看起来真的很棒！$你和我，让我们享受一场\n只能在这里上演的战斗吧！",
    },
    "victory": {
      1: "嗯，你觉得怎样？我输了！\n嗯，不过这很有趣，所以无所谓啊。",
    },
    "defeat": {
      1: "别介意，OK？",
    }
  },
  "phoebe": {
    "encounter": {
      1: "过去我在修行时得到了\n能与幽灵宝可梦亲密交流的能力。$没错，我和宝可梦之间\n有著强烈的羁绊。$那么，来试试看你有没有能力\n伤到我的宝可梦吧！",
    },
    "victory": {
      1: "哦，天呀。我输了。",
    },
    "defeat": {
      1: "我期待着下次再和你战斗！",
    },
  },
  "glacia": {
    "encounter": {
      1: "我在这儿见到的尽是些\n弱不禁风的训练家和宝可梦。$你又如何呢？如果你能让我不得不用\n上全力的话就再好不过了！",
    },
    "victory": {
      1: "你和你的宝可梦…\n你们的灵魂燃烧得多么热烈啊！$这股激烈的热能仿佛能征服一切。\n$难怪我的冰属性技巧也奈何不了你了。",
    },
    "defeat": {
      1: "一场充满激情的战斗，确实。",
    },
  },
  "drake": {
    "encounter": {
      1: "对于我们这些将宝可梦视为\n同伴一同战斗的训练家来说，$你知道怎样才能赢得胜利吗？\n你知道获得胜利的条件吗？$如果你不知道，\n那么你永远也无法战胜我！",
    },
    "victory": {
      1: "干得漂亮，就是这样。",
    },
    "defeat": {
      1: "我在这场战斗中全力以赴了！",
    },
  },
  "wallace": {
    "encounter": {
      1: "你的气质变了，\n我能感觉到这一点。$现在，把你和你的宝可梦\n的力量展现给我看吧。$作为回礼，就由我和我的宝可梦\n演出一场水之幻影吧！",
    },
    "victory": {
      1: "精彩。此刻，我能从你身上感觉到\n身为宝可梦训练家的可靠与高贵。$我真荣幸能遇到你和你的宝可梦。",
    },
    "defeat": {
      1: "伟大的幻影！",
    },
  },
  "lorelei": {
    "encounter": {
      1: "只要能让我用冰属性宝可梦，\n就绝对没人能赢得过我！\n能冻住对方可是很厉害的哦！$因为如果被冻住，你的宝可梦就无法动弹了！\n啊哈哈！你做好觉悟了吧！",
    },
    "victory": {
      1: "你怎么敢！",
    },
    "defeat": {
      1: "一旦你被冻结，你就什么都做不了。",
    },
  },
  "will": {
    "encounter": {
      1: "我曾经环游世界，\n日以继夜地做着超能力宝可梦的修行之旅。$我会不断变强！没理由会在这里输掉！",
    },
    "victory": {
      1: "……不会吧……",
    },
    "defeat": {
      1: "就差一点。\n我想知道你缺少了什么。",
    },
  },
  "malva": {
    "encounter": {
      1: "我的内心可是一直燃烧着呢。$燃烧着对你的怒火！",
    },
    "victory": {
      1: "挑战者出色地击败了四天王之一，帕琦拉。",
    },
    "defeat": {
      1: "真开心啊，能将你彻底粉碎！",
    },
  },
  "hala": {
    "encounter": {
      1: "老哈拉让你放开嗓子！",
    },
    "victory": {
      1: "我能感受到你在旅途中获得的力量。",
    },
    "defeat": {
      1: "啊哈哈。多么有趣的战斗。",
    },
  },
  "rika": {
    "encounter": {
      1: "我要对你手下留情，但……骗你的啦！$好好动脑！",
    },
    "victory": {
      1: "不错，小子。",
    },
    "defeat": {
      1: "啊哈哈哈哈！你真的很特别，小子！",
    },
  },
  "molayne": {
    "encounter": {
      1: "我将队长的位置让给了我的表弟马玛内,\n但我对自己的能力很有信心。 $我的力量就像超新星一样！",
    },
    "victory": {
      1: "我发现了一个有趣的训练师对手！",
    },
    "defeat": {
      1: "啊哈哈。多么有趣的战斗。",
    }
  },
  "bruno": {
    "encounter": {
      1: "我们将用势不可挡的力量磨灭你！呼哈！",
    },
    "victory": {
      1: "为什么？我怎么会输？",
    },
    "defeat": {
      1: "你可以随意挑战我，\n但结果永远不会改变！",
    }
  },
  "bugsy": {
    "encounter": {
      1: "我是阿笔！\n对虫系宝可梦的熟悉不会输给任何人的！",
    },
    "victory": {
      1: "哇，太棒了！\n你是个宝可梦专家！$我的研究还没有完成。\n好吧，你赢了。",
    },
    "defeat": {
      1: "谢谢！多亏了我们的战斗，\n我的研究也取得了进展！",
    }
  },
  "koga": {
    "encounter": {
      1: "哇哈哈哈哈！$宝可梦不仅仅是关于蛮力，拭目以待吧！",
    },
    "victory": {
      1: "啊！你证明了自己！",
    },
    "defeat": {
      1: "懂不懂要对忍者的技巧心神畏惧？",
    }
  },
  "bertha": {
    "encounter": {
      1: "啊，让老婆婆看看你学到了什么？",
    },
    "victory": {
      1: "好吧，亲爱的孩子，\n不得不说，那令人印象深刻。$你的宝可梦相信你并尽最大努力为你赢得胜利。$尽管我输了，\n我也止不住笑呢！",
    },
    "defeat": {
      1: "哈哈哈！看来老婆婆我赢了！",
    }
  },
  "lenora": {
    "encounter": {
      1: "那么，挑战者，让我来研究$你与你精心养育的宝可梦要如何战斗！",
    },
    "victory": {
      1: "我关于你的理论是正确的。$你不仅仅是有天赋……你很努力！\n我向你致敬！",
    },
    "defeat": {
      1: "啊哈哈！如果你输了，\n一定要分析原因，$并在下一场战斗中运用那些知识！",
    }
  },
  "siebold": {
    "encounter": {
      1: "只要我活着，我将不断努力寻求终极美食…$以及和最强的对手战斗！",
    },
    "victory": {
      1: "您的事迹，我志米铭记在心。",
    },
    "defeat": {
      1: "我们的宝可梦战斗就像我灵魂的养料。\n它将让我继续前进。$这就是我将向你表示敬意的方式，\n感谢你在战斗中全力以赴！",
    }
  },
  "roxie": {
    "encounter": {
      1: "准备好了吗！我要给你上一课！",
    },
    "victory": {
      1: "够野的！你的想法比我的还要毒！",
    },
    "defeat": {
      1: "嘿，拜托！认真点！\n你要加把劲啊!",
    }
  },
  "olivia": {
    "encounter": {
      1: "没什么开场白。\n是时候和我丽姿，战斗了！",
    },
    "victory": {
      1: "真的很可爱……你和你的宝可梦……",
    },
    "defeat": {
      1: "嗯哼。",
    }
  },
  "poppy": {
    "encounter": {
      1: "哦！你想和我进行宝可梦对战么？",
    },
    "victory": {
      1: "呜哇？！嘛……",
    },
    "defeat": {
      1: "耶！我做到了！我击~败~了~你！\n你可以来…打…复仇之战？$只要你想，随时来打复仇之战吧！",
    }
  },
  "agatha": {
    "encounter": {
      1: "宝可梦是为战斗而生的！ \n让我来告诉你什么是真正的战斗吧！"
    },
    "victory": {
      1: "呵呵！你可真是了不起！"
    },
    "defeat": {
      1: "额哈哈哈，真正的战斗就是该这样。"
    }
  },
  "flint": {
    "encounter": {
      1: "希望你已经热身完毕，\n因为这里即将大爆炸！",
    },
    "victory": {
      1: "不可思议！$你的动作如此火热，让我看起来温吞吞的！",
    },
    "defeat": {
      1: "嗯？就这吗？\n我觉得你得再激情点。",
    },
  },
  "grimsley": {
    "encounter": {
      1: "一无所有，\n或者，赢下所有！",
    },
    "victory": {
      1: "一旦失败，\n就意味着失去一切……$下一次我要追寻胜利！",
    },
    "defeat": {
      1: "如果有人赢了，\n和他对战的人就会输。",
    }
  },
  "caitlin": {
    "encounter": {
      1: "当花儿绽开时、我便出现。\n成为你在等待的人…$你似乎同时具备实力和善意$我所寻找的是拥有卓越力量的对手…$请用出你的全力吧！",
    },
    "victory": {
      1: "我和我的宝可梦学到了很多！非常感谢。",
    },
    "defeat": {
      1: "我渴望以优雅的姿态取得胜利。",
    },
  },
  "diantha": {
    "encounter": {
      1: "与你的宝可梦对战\n让你充满了未来的希望…$说真的，这让我更有活力地面对新的一天，确实如此！",
    },
    "victory": {
      1: "拥有高尚灵魂的训练家和宝可梦的身姿，\n让我的心激烈地震颤…",
    },
    "defeat": {
      1: "哦，太棒了！你觉得怎么样？\n我的队伍很酷吧~对吧？",
    },
  },
  "wikstrom": {
    "encounter": {
      1: "年轻的挑战者，幸会！\n我乃是著名的钢铁之刃，公爵雁铠! $让我们开始战斗吧！预备！",
    },
    "victory": {
      1: "辉煌！你与你尊贵的\n宝可梦之间的信任居然胜过了我！",
    },
    "defeat": {
      1: "哦哦哦！这是怎么回事，\n我的心止不住地在震颤！ $与如此有价值的对手的胜利\n让我的灵魂飞翔——我心翱翔！",
    }
  },
  "acerola": {
    "encounter": {
      1: "对战只是找个乐子！来吧，我来会会你！",
    },
    "victory": {
      1: "我……我说不出话！你是怎么做到的？！",
    },
    "defeat": {
      1: "哈哈！真是吓人倒怪的胜利呀！",
    }
  },
  "larry_elite": {
    "encounter": {
      1: "……你好，我是青木。$麻烦的是我还要兼任四天王。",
    },
    "victory": {
      1: "好吧，我们翅膀下的疾风止于你这了啊…",
    },
    "defeat": {
      1: "是时候和老板开会了。",
    }
  },
  "lance": {
    "encounter": {
      1: "我一直在等你。让我来试试你有几斤几两。",
      2: "我知道你能走这么远。让我们开始吧。",
    },
    "victory": {
      1: "被你拿下了啊。你太出色了!",
      2: "我从没想到会有另一个训练师打败我……$我很惊讶。",
    },
    "defeat": {
      1: "就差一点。想再试一次吗？",
      2: "我没觉得你弱，别因此困扰。",
    }
  },
  "karen": {
    "encounter": {
      1: "我是梨花，你想和我的恶属性宝可梦$来一场对决吗？",
      2: "我和你见过的那些人不一样。",
      3: "你组建了一支迷人的队伍。$我们的战斗应该会是场精彩的比赛。",
    },
    "victory": {
      1: "不！我赢不了。你是怎么做到变得这么强的？",
      2: "我不会偏离我所选择的道路。",
      3: "冠军正期待与你见面。",
    },
    "defeat": {
      1: "意料之中。",
      2: "嗯，还算有点意思。",
      3: "随时欢迎你来找我。",
    }
  },
  "milo": {
    "encounter": {
      1: "看起来你显然很了解宝可梦。$这会是一场激烈的战斗！$如果我想赢，我得让我的宝可梦极巨化！",
    },
    "victory": {
      1: "草的力量凋谢了…多么不可思议的挑战者！",
    },
    "defeat": {
      1: "这必将让你大吃一惊。",
    }
  },
  "lucian": {
    "encounter": {
      1: "请稍等，我正在读的书\n正要进入最精彩的部分…$英雄获得了一把神秘之剑，\n即将面临最后的考验…啊，算了。$既然你能走到这一步，\n我就不说这些了，和你战斗吧。$让我看看你是否\n能像我书中的主角一样荣耀！",
    },
    "victory": {
      1: "我明白了…看来你把我逼入了绝境。",
    },
    "defeat": {
      1: "我得维护我的名誉。",
    }
  },
  "drasna": {
    "encounter": {
      1: "你很厉害吧，\n而且相当相当地厉害呢。$我很高兴，能和这样的对手交手，\n就能更好地培养宝可梦们了。",
    },
    "victory": {
      1: "哎呀，就这么结束了，\n不好意思，可以的话欢迎再来。",
    },
    "defeat": {
      1: "怎么会这样？",
    }
  },
  "kahili": {
    "encounter": {
      1: "那么，既然来了……\n要不来看看今天的风更青睐谁？$是你……还是我？",
    },
    "victory": {
      1: "让我这个四天王都感到沮丧，$看来你的力量货真价实。",
    },
    "defeat": {
      1: "那真是一记好球！",
    }
  },
  "hassel": {
    "encounter": {
      1: "让你亲身感受一下什么叫做猛烈的对战气息吧！",
    },
    "victory": {
      1: "这次幸运之神对你微笑了，但是……$谁知道你下次还会不会这么幸运。",
    },
    "defeat": {
      1: "那挺厉害的吧！",
    }
  },
  "blue": {
    "encounter": {
      1: "能走到这里，你一定非常优秀。",
    },
    "victory": {
      1: "我只输给过他，现在又是你……？$你问他是谁？哈哈哈……",
    },
    "defeat": {
      1: "看吧？我的实力就是我来到这里的原因。",
    }
  },
  "piers": {
    "encounter": {
      1: "准备好和我的队伍来个大狂欢吧！$尖钉镇，是时候嗨起来了！",
    },
    "victory": {
      1: "我和我的队伍已经尽力了。$找个时间再来对战吧……",
    },
    "defeat": {
      1: "我的喉咙因为呼喊而变得沙哑……$但这是一场激动人心的战斗！",
    },
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
    },
  },
  "jasmine": {
    "encounter": {
      1: "哦……你的宝可梦给人印象深刻。$我想我会享受这场战斗的。",
    },
    "victory": {
      1: "你真的很强。我也得加把劲了。",
    },
    "defeat": {
      1: "我从没想到会赢。",
    },
  },
  "lance_champion": {
    "encounter": {
      1: "我依旧是冠军，所以我不会留情的。",
    },
    "victory": {
      1: "这就是新冠军的崛起。",
    },
    "defeat": {
      1: "我成功捍卫了冠军的头衔。",
    }
  },
  "steven": {
    "encounter": {
      1: "告诉我…你在和宝可梦的旅途过程中看到了什么？$邂逅了那么多的训练师，\n你都会有什么样的感受呢？$在这丰饶的大地上旅行…\n有没有唤醒你内在的某种东西？$你不如就用一场对战来告诉我你心中的答案吧。$我也会和我的宝可梦用这种方式\n将我们所知道的告诉你的！",
    },
    "victory": {
      1: "没想到连我这个联盟冠军\n都败在你的手上了呢…",
    },
    "defeat": {
      1: "正如我所期待的。谢谢！",
    }
  },
  "cynthia": {
    "encounter": {
      1: "我，竹兰，接受你的挑战！\n我是不会手软的！",
    },
    "victory": {
      1: "无论对战多么有趣，\n它总会有结束的时候……",
    },
    "defeat": {
      1: "即使你输了，\n也永远不要失去你对宝可梦的热爱。",
    }
  },
  "iris": {
    "encounter": {
      1: "你知道吗？\n我真的很期待和强大的训练师进行认真的战斗！$我的意思是，来吧！\n到达这里的是那些渴望胜利的训练师，$他们与经历过无数艰难\n战斗的宝可梦一起战斗！$如果我和那样的人战斗，\n不仅我会变得更强，我的宝可梦也会！$我们也会更好地了解彼此！\n好！做好准备吧！$我是艾莉丝，宝可梦联盟冠军，\n我，将打败你！",
    },
    "victory": {
      1: "啊……我尽力了，但我们输了……",
    },
    "defeat": {
      1: "耶！我们赢了！",
    }
  },
  "hau": {
    "encounter": {
      1: "我想知道，训练师是否会根据他们是\n来自温暖地区还是寒冷地区而以不同的方式战斗。$让我们来测试一下！",
    },
    "victory": {
      1: "那太棒了！我觉得我现在有点了解你的感觉了！",
    },
    "defeat": {
      1: "老铁，这才叫战斗！",
    },
  },
  "geeta": {
    "encounter": {
      1: "我决定再试一次。$来吧…让我看看你的训练成果。",
    },
    "victory": {
      1: "我期待着你的成就！",
    },
    "defeat": {
      1: "怎么，这就结束了？",
    }
  },
  "nemona": {
    "encounter": {
      1: "耶！我太兴奋了！让我们稍微放轻松！",
    },
    "victory": {
      1: "好吧，太糟了，但我还是玩得很开心！$下次我一定会赢你！",
    },
    "defeat": {
      1: "好吧，那是一场很棒的战斗！$肯定是会有收获的啦。",
    }
  },
  "leon": {
    "encounter": {
      1: "来享受一段冠军时刻吧！",
    },
    "victory": {
      1: "我的冠军生涯结束了……$但这是多么美好的冠军时刻啊！$谢谢你给了我最精彩的一战！",
    },
    "defeat": {
      1: "名副其实的冠军时刻！",
    }
  },
  "whitney": {
    "encounter": {
      1: "嘿！你不认为宝可梦超级可爱吗？",
    },
    "victory": {
      1: "哇啊！哇啊！你太坏了！",
    },
    "defeat": {
      1: "就是这样！",
    }
  },
  "chuck": {
    "encounter": {
      1: "哈！你想挑战我？你是勇敢还是无知？",
    },
    "victory": {
      1: "你很强！能不能收我为徒？",
    },
    "defeat": {
      1: "搞定。你明白我比你强得多了吗？",
    },
  },
  "katy": {
    "encounter": {
      1: "不要放松警惕，除非你想被虫丝绊倒哦！",
    },
    "victory": {
      1: "我可爱的宝可梦们都像苍蝇一样坠落了！",
    },
    "defeat": {
      1: "开饭啦，我可爱的彩粉蝶！",
    },
  },
  "pryce": {
    "encounter": {
      1: "年轻不代表能获得胜利！经验才是关键。",
    },
    "victory": {
      1: "无与伦比！赢得完美，试着不要忘记你现在的感受。",
    },
    "defeat": {
      1: "正如我所料。",
    },
  },
  "clair": {
    "encounter": {
      1: "你知道我是谁吗？知道还敢挑战我？",
    },
    "victory": {
      1: "我想知道以你现在的水平能走多远，有趣。",
    },
    "defeat": {
      1: "就是这样。",
    }
  },
  "maylene": {
    "encounter": {
      1: "我现在要挑战你，我不会保留任何实力。$请准备好战斗！",
    },
    "victory": {
      1: "是我输了…",
    },
    "defeat": {
      1: "太棒了。",
    },
  },
  "fantina": {
    "encounter": {
      1: "你来挑战吧。我会胜利。$这就是家缘市的道馆馆主。",
    },
    "victory": {
      1: "你是最强的，我认输了。",
    },
    "defeat": {
      1: "我非常，非常高兴！",
    },
  },
  "byron": {
    "encounter": {
      1: "和我儿子瓢太一样的年轻人啊！$我相信培养年轻人\n关系到宝可梦光明的未来！$为此就让我来成为\n年轻人必须跨越的堡垒吧！",
    },
    "victory": {
      1: "唔！我千锤百炼的宝可梦！",
    },
    "defeat": {
      1: "哈哈哈哈！怎么样！我千锤百炼的宝可梦！",
    }
  },
  "olympia": {
    "encounter": {
      1: "战斗是决定命运的古老传统。让我们开始吧！",
    },
    "victory": {
      1: "创造你自己的道路。$不要让任何东西阻挡你的路、你的命运、你的未来。",
    },
    "defeat": {
      1: "我们的道路现在已经清晰了。",
    }
  },
  "volkner": {
    "encounter": {
      1: "能留到最后的训练家想必肯定是很强的…$希望你会是能让我回忆起\n宝可梦对战乐趣的训练家！",
    },
    "victory": {
      1: "我输了…$你的心意，宝可梦的不顾一切。$战斗的时候就让我热血沸腾。",
    },
    "defeat": {
      1: "完全没感觉…$和我希望的完全不一样！",
    },
  },
  "burgh": {
    "encounter": {
      1: "唔…我有预感，\n只要赢了这场战斗就能画出更好的画来…$嗯！战斗充满了幻象！那么，马上开始吧。",
      2: "当然，我对我所有的宝可梦都相当骄傲！ $现在…让我们马上开始吧！",
    },
    "victory": {
      1: "结束了吗？我的女神抛弃我了吗？",
      2: "啊唔，输了……你还真是很强啊。",
    },
    "defeat": {
      1: "唔啊……好……好美啊！",
      2: "偶尔也有一些不是很好看的胜利，$但只要努力了，\n不管怎么样的战斗，都是很美丽的。",
    },
  },
  "elesa": {
    "encounter": {
      1: "最后一击！\n在确信这一点的时候全身会流淌过电流！$为追求这个快感，\n我要用可爱的宝可梦们让你头晕眼花。",
    },
    "victory": {
      1: "本想让你头晕的，\n结果我倒反被你电到了。",
    },
    "defeat": {
      1: "感觉还不够啊……下次能使出全力来吗？",
    },
  },
  "skyla": {
    "encounter": {
      1: "终于到决战了！\n这是决定顶点的宝可梦对战吧？$我最喜欢顶点了！\n在高的地方能看到很远很远！$好了！就让我和你好好地玩一场吧！",
    },
    "victory": {
      1: "和你的战斗让我更强了……谢谢。",
    },
    "defeat": {
      1: "不管是赢了还是输了，战斗都能得到一些东西。",
    },
  },
  "brycen": {
    "encounter": {
      1: "有其他的人和宝可梦在一起，$这份支持会让自己更强…\n让我来给你展示一下这样的强大吧！",
    },
    "victory": {
      1: "你和你的宝可梦！配合得天衣无缝！\n华丽的友情！",
    },
    "defeat": {
      1: "尝试极限！锻炼！",
    },
  },
  "drayden": {
    "encounter": {
      1: "现在我寻求的是\n能让我看到光明未来的年轻训练家。$你有多少实力，就让我用我的经验，\n我对宝可梦倾注的爱来验证吧！",
    },
    "victory": {
      1: "失败后涌现的这灼热的意志…\n该怎么说呢…",
    },
    "defeat": {
      1: "啊啊啊！你的实力就这种程度吗！",
    },
  },
  "grant": {
    "encounter": {
      1: "我只期待一件事。. $通过超越彼此，\n我们找到通往更高境界的道路。",
    },
    "victory": {
      1: "你是一堵我无法逾越的墙！",
    },
    "defeat": {
      1: "不要放弃。\n这就是人生的真谛。$大道至简。",
    }
  },
  "korrina": {
    "encounter": {
      1: "小女子科尔尼来大显身手啦！",
    },
    "victory": {
      1: "正因为有你，\n才能让你的宝可梦进化！",
    },
    "defeat": {
      1: "好劲爆的战斗呀！",
    },
  },
  "clemont": {
    "encounter": {
      1: "哦！我很高兴我们能见面！",
    },
    "victory": {
      1: "你对战斗的热情激励了我！",
    },
    "defeat": {
      1: "看来我的训练师成长强化机-马克2号，\n真的起作用了！",
    }
  },
  "valerie": {
    "encounter": {
      1: "哦，这不是一个年轻的训练师吗……\n能这样遇见你真是太好了。 $我想你已经获得了这场战斗的资格，\n作为对你努力的奖励。 $难以捉摸的妖精可能看起来像微风一样脆弱，\n像花朵一样精致，但很坚强。",
    },
    "victory": {
      1: "我希望明天你也能找到一些值得会心微笑的事物……",
    },
    "defeat": {
      1: "哦，天哪，这太遗憾了……",
    },
  },
  "wulfric": {
    "encounter": {
      1: "你知道吗？\n我们都说战斗能学到东西，羁绊之类的，$但实际上，我这么做只是因为有趣。 $谁在乎那些华而不实的东西？\n我们来战斗吧！",
    },
    "victory": {
      1: "杰出！我像冰山一样坚硬，但你彻底击溃了我！",
    },
    "defeat": {
      1: "和我干的结果就是这样！",
    },
  },
  "kabu": {
    "encounter": {
      1: "每个训练师和宝可梦都在努力追求胜利。$但这意味着你的对手也在努力赢得胜利。$最终，比赛是由哪一方\n能够发挥出他们真正的潜力来决定的。",
    },
    "victory": {
      1: "我很高兴今天能和你战斗！",
    },
    "defeat": {
      1: "这是我感觉自己的成长的好方式！",
    },
  },
  "bea": {
    "encounter": {
      1: "你有没有一种不可动摇的精神，\n受到什么攻击都安如磐石？ $就让我来试试吧？",
    },
    "victory": {
      1: "我感受到了你的宝可梦\n在战斗中被你指挥时的战斗之魂。",
    },
    "defeat": {
      1: "每个人都希望能有一场这样的好比赛。",
    }
  },
  "opal": {
    "encounter": {
      1: "让我看看你和你的宝可梦的表现如何！",
    },
    "victory": {
      1: "你不够粉嫩呀，\n但你是一个优秀的训练师，$还拥有着优秀的宝可梦。",
    },
    "defeat": {
      1: "对你来说太惨了，我觉得。",
    },
  },
  "bede": {
    "encounter": {
      1: "就让我来证明你有多可怜，我有多强大。",
    },
    "victory": {
      1: "我懂了……好吧。其实我还没拿出全力呢。",
    },
    "defeat": {
      1: "我觉得我打的不错。",
    },
  },
  "gordie": {
    "encounter": {
      1: "好了，我们来做个了结吧！",
    },
    "victory": {
      1: "我只想要挖一个洞爬进去……$好吧，现在更像是掉了进去。",
    },
    "defeat": {
      1: "像往常一样战斗，胜利就会随之而来！",
    }
  },
  "marnie": {
    "encounter": {
      1: "事实上，言而总之… \n人家自己也想当冠军呀! $所以别认为我在针对你！",
    },
    "victory": {
      1: "好吧，我还是输了……\n但是我看到了很多你和你宝可梦的优点哦",
    },
    "defeat": {
      1: "希望你喜欢我们的战斗策略。",
    },
  },
  "raihan": {
    "encounter": {
      1: "我打算击败冠军，赢得锦标赛，\n并向世界证明奇巴纳大人有多强！",
    },
    "victory": {
      1: "就算输了我也好帅。$真是罪孽深重啊。$看来得再来张自拍了！",
    },
    "defeat": {
      1: "为了纪念此刻，来张自拍吧！",
    }
  },
  "brassius": {
    "encounter": {
      1: "你应该准备好了吧，\一起完成这美丽的艺术作品吧！",
    },
    "victory": {
      1: "啊……前卫！",
    },
    "defeat": {
      1: "我将立即开始新的创作！",
    }
  },
  "iono": {
    "encounter": {
      1: "谁在奇述！是我奇树！\n做好准备了吗！$...$直播开始！\n今天的小挑战者有多强？$奇树不知道哦~\n让我们一起来看看吧！",
    },
    "victory": {
      1: "你的闪耀如1000万伏特！朋友！",
    },
    "defeat": {
      1: "奇树奇树捕获你的眼球！",
    }
  },
  "larry": {
    "encounter": {
      1: "归根结底，普普通通就是最强。",
    },
    "victory": {
      1: "哼，给我上了一道“战败”。",
    },
    "defeat": {
      1: "下班打卡，走了",
    },
  },
  "ryme": {
    "encounter": {
      1: "宝贝, 一起! \n摇滚摇到骨子里!",
    },
    "victory": {
      1: "你好酷！我佩服！\n我的灵魂为你哭！",
    },
    "defeat": {
      1: "再会, 宝贝!",
    },
  },
  "grusha": {
    "encounter": {
      1: "我保证我宝可梦的力量\n会让你感到寒冷彻骨！",
    },
    "victory": {
      1: "你燃烧的热情……老实说，我有点喜欢。",
    },
    "defeat": {
      1: "你没有升温。",
    },
  },
  "marnie_elite": {
    "encounter": {
      1: "你已经走到这一步了？$哼~ 看看你能不能对付我的宝可梦！",
      2: "我将全力以赴, 别觉得我会手下留情哦~",
    },
    "victory": {
      1: "不敢相信…我输掉了… $但是你确实赢得好，干得漂亮捏~",
      2: "看来我还要多多学习呀，\n不过你打的很不错哦~",
    },
    "defeat": {
      1: "你打得不错，但是我更胜一筹！$祝你下次好运啦~",
      2: "看来我的练习有所回报了。\n感谢一战！",
    },
  },
  "nessa_elite": {
    "encounter": {
      1: "海流正在朝着对我有利的方向转变。$准备好被卷走了吗？",
      2: "让我们在这场战斗中掀起波澜！$我希望你做好准备！",
    },
    "victory": {
      1: "你完美地渡过了这片水域......干得好！",
      2: "看来我现在无法与你匹敌。干得好！",
    },
    "defeat": {
      1: "水总能找到出路。\n真是爽快的一战！",
      2: "你打得很好，\n但海洋的力量是不可阻挡的！",
    },
  },
  "bea_elite": {
    "encounter": {
      1: "做好准备！我的斗志熊熊燃烧！",
      2: "让我们看看你是否能跟上我永不停歇的节奏！",
    },
    "victory": {
      1: "你的实力......令人印象深刻。\n你真的值得这场胜利。",
      2: "我以前从未感受过这种强度。\n太棒了！",
    },
    "defeat": {
      1: "我的高强度训练又带来胜利了！\n干得好！",
      2: "你有实力，但我的训练更努力。\n精彩的战斗！",
    },
  },
  "allister_elite": {
    "encounter": {
      1: "黑暗降临...你准备好面对你的恐惧了吗？",
      2: "让我们看看你能否应对我所操控的黑暗。",
    },
    "victory": {
      1: "你已经驱散了阴影......\n暂时。干得很好。",
      2: "你的光芒刺穿了我的黑暗。干得好。",
    },
    "defeat": {
      1: "黑影在轻语...\n你的力量还不够。",
      2: "黑暗获胜了......\n也许下次你会看到光明。",
    },
  },
  "raihan_elite": {
    "encounter": {
      1: "虽然没法打败丹帝夺冠，\n让我觉得很遗憾……$但是有你这家伙当对手，\b倒是也还不赖啊！",
      2: "准备好面对龙之风暴！",
    },
    "victory": {
      1: "你的气势就像暴风一样，\n连我都甘拜下风了！",
      2: "你完美地驾驭了我的风暴……打得好！",
    },
    "defeat": {
      1: "又一场龙之风暴袭来，又一场胜利！打得好！",
      2: "你被我的龙之风暴卷入了！祝你下次好运！",
    }
  },
  "alder": {
    "encounter": {
      1: "准备好和合众最强的训练家交手吧！"
    },
    "victory": {
      1: "精彩！简直就是天下无双！"
    },
    "defeat": {
      1: `战斗结束后，我的心像是吹过了温和的风……
          $真是厉害！`
    }
  },
  "kieran": {
    "encounter": {
      1: `我的努力让我越来越强！
          $所以我不会输。`
    },
    "victory": {
      1: `不可能……
          $真是一场有趣又激动人心的战斗啊！`
    },
    "defeat": {
      1: `哇塞，好一场战斗！
          $你得多练练了。`
    }
  },
  "rival": {
    "encounter": {
      1: "@c{smile}嘿，我在找你呢！我知道你急着上路，\n但至少说个再见吧…$@c{smile_eclosed}所以你终于要开始追逐梦想了？\n我几乎不敢相信。$@c{serious_smile_fists}来都来了，来一场对战怎么样？\n毕竟，我想看看你是不是准备周全了。$@c{serious_mopen_fists}不要手下留情，我想让你全力以赴！",
    },
    "victory": {
      1: "@c{shock}哇…你彻底击败了我。\n你是真初学者吗？$@c{smile}也许是靠点运气，但是…\n谁知道，你可能真的能一路走下去。$顺便说一下，博士让我给你这些东西。它们看起来可牛了。$@c{serious_smile_fists}祝你好运！",
    },
  },
  "rival_female": {
    "encounter": {
      1: "@c{smile_wave}你在这儿啊！我到处找你呢！$@c{angry_mopen}你忘了和你最好的朋友说再见了吗？$@c{smile_ehalf}你要去追逐梦想了，对吧？\n从今天开始，是不是…$@c{smile}不管怎样，忘了我的事就原谅你吧，\n但有个条件。@c{smile_wave_wink}你必须和我对战！$@c{angry_mopen}全力以赴！\n你也不想让你的冒险在开始之前就结束了，对吧？",
    },
    "victory": {
      1: "@c{shock}你刚开始就已经这么强了？！@d{96}$@c{angry}你是不是开了？$@c{smile_wave_wink}只是开个玩笑啦！@d{64} @c{smile_eclosed}我输地心服口服了…\n我感觉你出去挺有天赋的。$@c{smile}顺便说一下，博士想让我给你一些东西。\n希望它们能帮上忙！$@c{smile_wave}像往常一样尽力而为！\n我相信你！",
    },
  },
  "rival_2": {
    "encounter": {
      1: "@c{smile}嘿，你也在这里吗？$@c{smile_eclosed}一路过关斩将，是吧？$@c{serious_mopen_fists}我知道看起来好像我尾随着你来到这里，\n怎么可能啦。$@c{serious_smile_fists}说真的，自从你在老家打败我后，\n我就一直很渴望再比一场。$我自己也进行了很多训练，\n所以这次我肯定会好好打一场。$@c{serious_mopen_fists}不要手下留情，就像以前一样！$让我们开始吧！",
    },
    "victory": {
      1: "@c{neutral_eclosed}哦。我过于自信了。$@c{smile}不过没关系。我猜到可能会这样。$@c{serious_mopen_fists}这只意味着我下次需要更努力！$$@c{smile}呃，不是特意帮你，我正好有多余的这个，\n我觉得你可能想要。$$@c{serious_smile_fists}不过这次之后别指望再有了！$我不能一直给我的对手优势。$@c{smile}反正，保重！",
    },
  },
  "rival_2_female": {
    "encounter": {
      1: "@c{smile_wave}哦，真巧，在这里遇见你。\n看来你还没输过嘛。@c{angry_mopen}哈……好家伙！$@c{angry_mopen}我知道你在想什么，\n不，我才不会跟踪你什么呢。 @c{smile_eclosed}我只是碰巧在附近。$@c{smile_ehalf}我为你感到高兴，但我只想让你知道\n有时输了是可以接受的。$@c{smile}我们从错误中学到的东西\n往往比我们一直成功时学到的还要多。$@c{angry_mopen}无论如何，我为了我们的复赛已经努力训练了\n所以你最好全力以赴！",
    },
    "victory": {
      1: "@c{neutral}我……没打算会输来着……$@c{smile}嗷……好吧。看来我要再更加努力训练了！$@c{smile_wave}我还给你带了个这个$@c{smile_wave_wink}不用谢我哦~.$@c{angry_mopen}不过，这是最后一个啦！\n你可别想再从我这赚小便宜了~$@c{smile_wave}要保重哦！",
    },
    "defeat": {
      1: "输了有时候也不要紧的…",
    }
  },
  "rival_3": {
    "encounter": {
      1: "@c{smile}嘿，看看这是谁！好久不见啊。$@c{neutral}你……还是没输过？哈…$@c{neutral_eclosed}这有点……不太对劲。$没有你一起，回家的感觉有很不一样。$@c{serious}虽然我知道这挺别扭的，但我就直说了。$@c{neutral_eclosed}我觉得你有点儿难以理喻。$@c{serious}没有人能够战无不胜。$失败乃成功之母。$@c{neutral_eclosed}你已经赢得了够好的成绩，\n但前面道阻且长，只会愈发艰难。 @c{neutral}你做好准备了没？$@c{serious_mopen_fists}如果做好了，证明给我看吧。",
    },
    "victory": {
      1: "@c{angry_mhalf}这太离谱了……我几乎从没停下训练……$我们之间的差距怎么还是这么大？",
    },
  },
  "rival_3_female": {
    "encounter": {
      1: "@c{smile_wave}好久不见！还没输过，对吧。$@c{angry}我觉得你点烦了。@c{smile_wave_wink}开玩笑啦！$@c{smile_ehalf}但说真的，你现在不想家吗？\n不想…我吗?$我……我的意思是，我们真的很想你。$@c{smile_eclosed}我支持你的一切，包括你的梦想。\n但现实就是你早晚会经历失败。$@c{smile}当你失败的时候，我想像往常一样陪在你身边。$@c{angry_mopen}现在，给你看看我变得多强了吧！",
    },
    "victory": {
      1: "@c{shock}都这样了……还是不够吗？$这样下去，你就永远不会回来了……",
    },
    "defeat": {
      1: "你尽力了，现在让我们回家吧。",
    },
  },
  "rival_4": {
    "encounter": {
      1: "@c{neutral}嘿。$我不会对你说什么拐弯抹角的客套话。$@c{neutral_eclosed}我来，就是为了赢，简单明了。$@c{serious_mhalf_fists}我将所有时间都投入到训练中，\n掌握了如何发挥我的潜力。$@c{smile}当你削减掉不必要的睡眠和社交后，\n你会得到很多额外的时间。$@c{serious_mopen_fists}但在我获胜之前，这些都不重要了。$@c{neutral_eclosed}我甚至已经到达了战无不败的境地。$@c{smile_eclosed}我觉得你的思路倒是也没毛病。$@c{angry_mhalf}失败是属于弱者的，\n我已经不再软弱了。$@c{serious_mopen_fists}准备好吧。",
    },
    "victory": {
      1: "@c{neutral}你…@d{64} 你是人吗？",
    },
  },
  "rival_4_female": {
    "encounter": {
      1: "@c{neutral}是我哦！没又把我忘了吧……是吗？$@c{smile}你应该为自己走了这么远感到骄傲。恭喜你！$但看来你的旅程到此为止了。$@c{smile_eclosed}你唤醒了我体内一些我从未有过的东西。\n就像我现在满脑子除了训练还是训练。$@c{smile_ehalf}我几乎已经没空吃饭睡觉了，\n我没日没夜训练我的宝可梦，每次都能变得更强。$@c{neutral}事实上，我……几乎不认识自己了。$现在，我终于达到了巅峰。\n我感觉我已经战无不胜了。$而且你知道吗？这一切都是因为你。$@c{smile_ehalf}我不知道到底是该感谢你还是恨你。$@c{angry_mopen}做好准备…",
    },
    "victory": {
      1: "@c{neutral}你…@d{64} 你是人吗？",
    },
    "defeat": {
      1: "@c{smile}你应该为自己走了这么远感到骄傲。",
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
      1: "@c{smile_eclosed}又见面了。$@c{neutral}我花了点时间思考反思\n有理由说明为什么这一切都显得如此奇妙。$@c{neutral_eclosed}你所追逐的梦想，我想击败你的决心…$这都是某种庞大使命的一部分。$@c{serious}这不仅仅是关于我和你… 而是关于这个世界， @c{serious_mhalf_fists}我的使命就是将你推向极限。$@c{neutral_eclosed}我是否达成了那个使命，我说不上来，但我已尽我所能。$@c{neutral}我们最终到达的这个地方看起来很可怕\n 然而不知何故，我心中毫无畏惧，好像我早就来过这里。$@c{serious_mhalf_fists}你也有同样的感觉，对吧？$@c{serious}……这里好像有什么东西在呼唤我。\n这是世界早已记录的一切。$那些我们经历过的时光，那些记忆犹新的过去，\n其实只是遥远的回忆。$@c{neutral_eclosed}谁能保证它们是否真的发生过。$@c{serious_mopen_fists}你必须继续前进，不然的话，这一切将永无止境。\n这件事而只有你能办成。$@c{serious_smile_fists}我不清楚这一切意味着什么，但我知道……$@c{serious_mopen_fists}如果现在你不能就此击败我，\n你将毫无机会可言。",
    },
    "victory": {
      1: "@c{smile_eclosed}看来我的使命在这里已经完成了。\n我想让你答应我一件事。$@c{smile}在你拯救世界之后，要回家。",
    },
  },
  "rival_6_female": {
    "encounter": {
      1: "@c{smile_ehalf}又只有我们两个人了。$@c{smile_eclosed}你知道吗，我在心里想啊想，\n想了好久……$@c{smile_ehalf}这一切背后是有什么原因吗，\n为什么一切现在看起来都这么奇怪……$@c{smile}你有你的梦想，而我内心有这个抱负……$我不禁感觉这一切背后有一个更庞大的力量，$掌控者我们所做的一切，你和我之间。$@c{smile_eclosed}我想我注定要推动你……到你的极限。$@c{smile_ehalf}我不清楚我是否一直做得很好，\n但到现在为止，我已经尽力了。$这个奇怪而可怕的地方……\n一切看起来都那么清晰……$这是世界早已记录的一切。$@c{smile_eclosed}我好像记不清我们一起度过的日子了。$@c{smile_ehalf}那些回忆到底是真的吗？\n怎么感觉这么久远……$@c{angry_mopen}你得继续前进，不然的话，这一切将永无止境。\n你是唯一能做到这件事的。$@c{smile_ehalf}我……不知道这一切意味着什么……\n但我明白$@c{neutral}如果你现在不能就此击败我，\n你将毫无机会可言。",
    },
    "victory": {
      1: "@c{smile_ehalf}我……\n我想我完成了我的使命……$@c{smile_eclosed}答应我……在你拯救世界之后\n……要……平安到家。$@c{smile_ehalf}……谢谢你。",

    },
  },
};


// Dialogue of the NPCs in the game when the player character is female. For languages that do not have gendered pronouns, this can be set to PGMdialogue.
export const PGFdialogue: DialogueTranslationEntries = PGMdialogue;

// Dialogue of the endboss of the game when the player character is male (Or unset)
export const PGMbattleSpecDialogue: SimpleTranslationEntries = {
  "encounter": `看来终于又到了那个时候。\n你知道自己为何会来到这里，不是吗？
    $你被吸引到这里，因为你以前就来过这里。\n无数次。
    $尽管，或许可以数一数。\n准确地说，这实际上是你的第5,643,853次循环。
    $每一次循环，你的思想都会恢复到之前的状态。\n即便如此，不知何故，你之前自我的残留仍然存在。
    $直到现在，你仍未成功，\n但我感觉这次你身上有一种异样的气息。
    $你是这里唯一的人，尽管感觉上还有……另一个人。
    $你最终会成为对我来的一个硬茬吗？\n我渴望了数千年的挑战？
    $我们，开始。`,
  "firstStageWin": `我明白了。我所感觉到的气息确实是真实的。\n看来我不再需要保留实力了。
        $别让我失望。`,
  "secondStageWin": "…漂亮。"
};

// Dialogue of the endboss of the game when the player character is female. For languages that do not have gendered pronouns, this can be set to PGMbattleSpecDialogue.
export const PGFbattleSpecDialogue: SimpleTranslationEntries = PGMbattleSpecDialogue;

// Dialogue that does not fit into any other category (e.g. tutorial messages, or the end of the game). For when the player character is male
export const PGMmiscDialogue: SimpleTranslationEntries = {
  "ending":
      `@c{smile}哦?你赢了？@d{96} @c{smile_eclosed}我应该早猜到了\n你回来了。
        $@c{smile}结束了。@d{64} 你终结了这个循环。
        $@c{serious_smile_fists}你也完成了自己的梦想，不是吗？\n你甚至一次都没失败。
        $@c{neutral}我是唯一能够记得你所作所为的人@d{96}\n我觉得这应该也还行吧？
        $@c{serious_smile_fists}你的传奇将永远留存于我们心中。
        $@c{smile_eclosed}不管了，我真是受够这个地方了，你也一样吗？我们回家吧。
        $@c{serious_smile_fists}可能等我们回家以后，再打一场？\n要是你想的话`,
  "ending_female":
      `@c{shock}你回来了？@d{32} 也就是说…@d{96} 你赢了呀！？\n@c{smile_ehalf}我应该早料到了。
        $@c{smile_eclosed}当然…我一直有这种感觉\n@c{smile}一切都结束了，对么？ 你打破了循环。
        $@c{smile_ehalf}你也完成了自己的梦想，不是吗？\n你甚至一次都没失败。
        $我是唯一能够记得你所作所为的人\n@c{angry_mopen}我会努力不忘掉哒！
        $@c{smile_wave_wink}开玩笑啦，@d{64} @c{smile}我才不会忘呢。@d{32}\n你的传奇将永远留存于我们心中。
        $@c{smile_wave}不管了，@d{64} 时候不早了@d{96} ，应该吧？\n在这地方还真搞不清楚。
        $一起回家吧。 @c{smile_wave_wink}可能明天，我们再来打一场，为了重温回忆嘛~`,
};
// Dialogue that does not fit into any other category (e.g. tutorial messages, or the end of the game). For when the player character is female. For languages that do not have gendered pronouns, this can be set to PGMmiscDialogue.
export const PGFmiscDialogue: SimpleTranslationEntries = PGMmiscDialogue;


// Dialogue of the named double battles in the game. For when the player is male (or unset).
export const PGMdoubleBattleDialogue: DialogueTranslationEntries = {
  "blue_red_double": {
    "encounter": {
      1: "青绿：嘿，赤红，\n让这家伙看看我们是什么来头！$赤红: ...$青绿: 见识下真新镇的实力！",
    },
    "victory": {
      1: "青绿：打得真不错$赤红: ...",
    },
  },
  "red_blue_double": {
    "encounter": {
      1: "赤红: ...!$青绿： 他人狠话不多。$青绿： 但别被他耍了，\n毕竟他可是个冠军！",
    },
    "victory": {
      1: "赤红: ...!$青绿: 下次我们一定会赢你！",
    },
  },
  "tate_liza_double": {
    "encounter": {
      1: "小枫:嘿嘿嘿……你惊讶吗？$小南: 这里有两个道馆馆主？$小枫: 我们是双胞胎！$小南: 我们无需交谈，因为……$我们可以通晓彼此的想法$小枫: 我们的组合……$小南: 你能打败吗？",
    },
    "victory": {
      1: "小枫：什么？我们的组合……$小南：被瓦解了！",
    },
  },
  "liza_tate_double": {
    "encounter": {
      1: "小南：呵呵呵……你惊讶吧？$小枫：这里有两个道馆馆主？$小南：我们可以通晓……$小枫：彼此的想法……$小南：全在我们脑中！$小枫：我们的组合……$小南：你能打败吗？",
    },
    "victory": {
      1: "小枫：你和你的宝可梦……$小南：简直像亲兄弟姐妹！",
    },
  },
  "wallace_steven_double": {
    "encounter": {
      1: "大吾：米可利, 展现冠军的实力吧！$米可利：我们将展示丰缘的实力！$大吾：要上了！",
    },
    "victory": {
      1: "大吾：打得真不错！$米可利：我们下次会赢的！",
    },
  },
  "steven_wallace_double": {
    "encounter": {
      1: "大吾：你有什么稀有的宝可梦吗？$米可利：大吾……我们是来对战的，\n不是来炫耀宝可梦的。$大吾：哦……知道了… 那么要上了！",
    },
    "victory": {
      1: "大吾：战斗结束了，\n来看看我的稀有宝可梦！$米可利：大吾……",
    },
  },
  "alder_iris_double": {
    "encounter": {
      1: "阿戴克：我们俩是合众最强的训练家！$艾莉丝：与最强来一场最激烈的战斗吧！",
    },
    "victory": {
      1: "阿戴克：哇哦！你真是超级厉害！$艾莉丝：我们下次会赢的啦！",
    },
  },
  "iris_alder_double": {
    "encounter": {
      1: "艾莉丝：欢迎！挑战者，\n合众地区最强的冠军大驾光临！$阿戴克：艾莉丝，你是不是有点太兴奋了…",
    },
    "victory": {
      1: "艾莉丝：这样的失败可不好受啊…$阿戴克：但是只有失败才能让我们变强！",
    },
  },
  "piers_marnie_double": {
    "encounter": {
      1: "玛俐：哥哥，给他们展现尖钉镇的实力！$聂梓：我们带来黑暗！",
    },
    "victory": {
      1: "玛俐：你的强光亮瞎我们的黑暗了啦……$聂梓：实在太亮了…",
    },
  },
  "marnie_piers_double": {
    "encounter": {
      1: "聂梓: 台下准备好了吗！$玛俐: 哥哥，我们是来对战的，\n不是来唱歌的……",
    },
    "victory": {
      1: "聂梓：这首歌献给大家！$玛俐：哥哥……",
    },
  },
};

// Dialogue of the named double battles in the game. For when the player is female. For languages that do not have gendered pronouns, this can be set to PGMdoubleBattleDialogue.
export const PGFdoubleBattleDialogue: DialogueTranslationEntries = PGMdoubleBattleDialogue;
