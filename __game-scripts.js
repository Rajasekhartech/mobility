var GameManager=pc.createScript("gameManager");GameManager.attributes.add("UiManagerEntity",{type:"entity"}),GameManager.attributes.add("StarCount",{type:"number",default:0}),GameManager.attributes.add("LevelUISet1",{type:"entity"}),GameManager.attributes.add("LevelUISet2",{type:"entity"}),GameManager.attributes.add("LevelUISet3",{type:"entity"}),GameManager.attributes.add("LevelGameSet1",{type:"entity"}),GameManager.attributes.add("LevelGameSet2",{type:"entity"}),GameManager.attributes.add("LevelGameSet3",{type:"entity"}),GameManager.prototype.initialize=function(){this.ShowLevel1()},GameManager.prototype.AddStarCount=function(e,t){this.StarCount+=t,this.UiManagerEntity.script.uiManager.UpdateStarCount(e,this.StarCount)},GameManager.prototype.ReduceStarCount=function(e,t){this.StarCount-=t,this.StarCount<0&&(this.StarCount=0),this.UiManagerEntity.script.uiManager.UpdateStarCount(e,this.StarCount)},GameManager.prototype.ShowLevel1=function(){this.Reset(),this.LevelUISet1.enabled=!0,this.LevelGameSet1.enabled=!0},GameManager.prototype.ShowLevel2=function(){this.Reset(),this.LevelUISet2.enabled=!0,this.LevelGameSet2.enabled=!0},GameManager.prototype.ShowLevel3=function(){this.Reset(),this.LevelUISet3.enabled=!0,this.LevelGameSet3.enabled=!0},GameManager.prototype.GameEnd=function(){this.UiManagerEntity.script.uiManager.ShowGameEnd(this.StarCount)},GameManager.prototype.Reset=function(){this.LevelUISet1.enabled=!1,this.LevelUISet2.enabled=!1,this.LevelUISet3.enabled=!1,this.LevelGameSet1.enabled=!1,this.LevelGameSet2.enabled=!1,this.LevelGameSet3.enabled=!1};var UiManager=pc.createScript("uiManager");UiManager.attributes.add("L1StarCountTxt",{type:"entity"}),UiManager.attributes.add("L2StarCountTxt",{type:"entity"}),UiManager.attributes.add("L3StarCountTxt",{type:"entity"}),UiManager.attributes.add("PauseBtnEntity",{type:"entity"}),UiManager.attributes.add("PauseMenuEntity",{type:"entity"}),UiManager.attributes.add("ResumeBtnEntity",{type:"entity"}),UiManager.attributes.add("RestartBtnEntity",{type:"entity"}),UiManager.attributes.add("AudioBtnEntity",{type:"entity"}),UiManager.attributes.add("LevelTransitionEntity",{type:"entity"}),UiManager.attributes.add("GameEndEntity",{type:"entity"}),UiManager.attributes.add("GameEndStarCountTxt",{type:"entity"}),UiManager.attributes.add("GameEndRestartEntity",{type:"entity"}),UiManager.attributes.add("Level1ContinueBtnEntity",{type:"entity"}),UiManager.attributes.add("Level2ContinueBtnEntity",{type:"entity"}),UiManager.attributes.add("Level3ContinueBtnEntity",{type:"entity"}),UiManager.prototype.initialize=function(){this.PauseBtnEntity.button.on("mousedown",this.OnClickPlause,this),this.ResumeBtnEntity.button.on("mousedown",this.OnClickResume,this),this.RestartBtnEntity.button.on("mousedown",this.OnClickRestart,this),this.AudioBtnEntity.button.on("mousedown",this.OnClickAudio,this),this.GameEndRestartEntity.button.on("mousedown",this.OnClickRestart,this),this.Level1ContinueBtnEntity.button.on("mousedown",this.OnClickLevelContinue1,this),this.Level2ContinueBtnEntity.button.on("mousedown",this.OnClickLevelContinue2,this),this.Level3ContinueBtnEntity.button.on("mousedown",this.OnClickLevelContinue3,this),this.PauseBtnEntity.button.on(pc.EVENT_TOUCHSTART,this.OnClickPlause,this),this.ResumeBtnEntity.button.on(pc.EVENT_TOUCHSTART,this.OnClickResume,this),this.RestartBtnEntity.button.on(pc.EVENT_TOUCHSTART,this.OnClickRestart,this),this.GameEndRestartEntity.button.on(pc.EVENT_TOUCHSTART,this.OnClickRestart,this),this.AudioBtnEntity.button.on(pc.EVENT_TOUCHSTART,this.OnClickAudio,this),this.Level1ContinueBtnEntity.button.on(pc.EVENT_TOUCHSTART,this.OnClickLevelContinue1,this),this.Level2ContinueBtnEntity.button.on(pc.EVENT_TOUCHSTART,this.OnClickLevelContinue2,this),this.Level3ContinueBtnEntity.button.on(pc.EVENT_TOUCHSTART,this.OnClickLevelContinue3,this)},UiManager.prototype.UpdateStarCount=function(t,e){1===t?this.L1StarCountTxt.element.text=e:2===t?this.L2StarCountTxt.element.text=e:3===t&&(this.L3StarCountTxt.element.text=e)},UiManager.prototype.OnClickLevelContinue1=function(){globalVariables.GameManagerEntity.script.gameManager.ShowLevel2()},UiManager.prototype.OnClickLevelContinue2=function(){globalVariables.GameManagerEntity.script.gameManager.ShowLevel3()},UiManager.prototype.OnClickLevelContinue3=function(){},UiManager.prototype.OnClickPlause=function(){this.app.timeScale=0,globalVariables.IsGamePause||(globalVariables.IsGamePause=!0,this.PauseMenuEntity.enabled=!0)},UiManager.prototype.OnClickResume=function(){this.app.timeScale=1,globalVariables.IsGamePause=!1,this.PauseMenuEntity.enabled=!1},UiManager.prototype.OnClickRestart=function(){this.app.timeScale=1,globalVariables.GameManagerEntity.script.gameManager.Reset(),this.Reset(),globalVariables.IsGamePause=!1},UiManager.prototype.OnClickAudio=function(){},UiManager.prototype.ShowSceneTransition=function(){this.LevelTransitionEntity.enabled=!0,setTimeout((()=>{this.LevelTransitionEntity.enabled=!1}),2e3)},UiManager.prototype.ShowGameEnd=function(t){this.GameEndStarCountTxt.element.text=t,this.GameEndEntity.enabled=!0},UiManager.prototype.Reset=function(){this.PauseMenuEntity.enabled=!1,this.GameEndEntity.enabled=!1,this.L1StarCountTxt.element.text=0,this.L2StarCountTxt.element.text=0,this.L3StarCountTxt.element.text=0,this.GameEndStarCountTxt.element.text=0};var GlobalVariables=pc.createScript("globalVariables");GlobalVariables.attributes.add("IsGamePause",{type:"boolean",default:!1}),GlobalVariables.attributes.add("GameManagerEntity",{type:"entity"}),GlobalVariables.attributes.add("UIManagerEntity",{type:"entity"}),GlobalVariables.attributes.add("Level1HandlerEntity",{type:"entity"}),GlobalVariables.attributes.add("Level2HandlerEntity",{type:"entity"}),GlobalVariables.attributes.add("Level3HandlerEntity",{type:"entity"}),GlobalVariables.prototype.initialize=function(){window.globalVariables=this};var Level1Handler=pc.createScript("level1Handler");Level1Handler.attributes.add("MainCamera",{type:"entity"}),Level1Handler.attributes.add("MenuEntity",{type:"entity"}),Level1Handler.attributes.add("MenuPlayBtnEntity",{type:"entity"}),Level1Handler.attributes.add("InGameUIEntity",{type:"entity"}),Level1Handler.attributes.add("ElephantBtnEntity",{type:"entity"}),Level1Handler.attributes.add("CamelBtnEntity",{type:"entity"}),Level1Handler.attributes.add("HorseBtnEntity",{type:"entity"}),Level1Handler.attributes.add("CatBtnEntity",{type:"entity"}),Level1Handler.attributes.add("FoxBtnEntity",{type:"entity"}),Level1Handler.attributes.add("YakBtnEntity",{type:"entity"}),Level1Handler.attributes.add("RabitBtnEntity",{type:"entity"}),Level1Handler.attributes.add("MonkeyBtnEntity",{type:"entity"}),Level1Handler.attributes.add("ElephantModelEntity",{type:"entity"}),Level1Handler.attributes.add("CamelModelEntity",{type:"entity"}),Level1Handler.attributes.add("HorseModelEntity",{type:"entity"}),Level1Handler.attributes.add("CatModelEntity",{type:"entity"}),Level1Handler.attributes.add("FoxModelEntity",{type:"entity"}),Level1Handler.attributes.add("YakModelEntity",{type:"entity"}),Level1Handler.attributes.add("RabitModelEntity",{type:"entity"}),Level1Handler.attributes.add("MonkeyModelEntity",{type:"entity"}),Level1Handler.attributes.add("CorrectAnsCount",{type:"number",default:0}),Level1Handler.attributes.add("DisableInputControl",{type:"boolean",default:!1}),Level1Handler.attributes.add("QuestionSet",{type:"entity"}),Level1Handler.attributes.add("SelectedResultSet",{type:"entity"}),Level1Handler.attributes.add("ResultTxtEntity",{type:"entity"}),Level1Handler.attributes.add("SelectedResultsMsg",{type:"string",array:!0}),Level1Handler.attributes.add("LevelResultsMenuEntity",{type:"entity"}),Level1Handler.attributes.add("LevelResultsStarTxt",{type:"entity"}),Level1Handler.prototype.initialize=function(){console.log(this.MainCamera.getPosition()),console.log(this.MainCamera.getLocalPosition()),this.DisableInputControl=!0,this.MenuPlayBtnEntity.button.on("mousedown",this.OnClickPlay,this),this.MenuPlayBtnEntity.button.on(pc.EVENT_TOUCHSTART,this.OnClickPlay,this)},Level1Handler.prototype.OnClickUIButton=function(t){this.DisableInputControl||(0===t?(this.CorrectAnsCount+=1,this.ElephantBtnEntity.button.active=!1,this.OnClickElephant(),globalVariables.GameManagerEntity.script.gameManager.AddStarCount(1,2)):1===t?(this.CorrectAnsCount+=1,this.CamelBtnEntity.button.active=!1,this.OnClickCamel(),globalVariables.GameManagerEntity.script.gameManager.AddStarCount(1,2)):2===t?(this.CorrectAnsCount+=1,this.HorseBtnEntity.button.active=!1,this.OnClickHorse(),globalVariables.GameManagerEntity.script.gameManager.AddStarCount(1,2)):3===t?(this.CatBtnEntity.button.active=!1,this.OnClickCat(),globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(1,1)):4===t||(5===t?(this.FoxBtnEntity.button.active=!1,this.OnClickFox(),globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(1,1)):6===t?(this.CorrectAnsCount+=1,this.YakBtnEntity.button.active=!1,this.OnClickYak(),globalVariables.GameManagerEntity.script.gameManager.AddStarCount(1,2)):7===t?(this.RabitBtnEntity.button.active=!1,this.OnClickRabit(),globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(1,1)):8===t&&(this.MonkeyBtnEntity.button.active=!1,this.OnClickMonkey(),globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(1,1))),this.ShowSelectedResults(t),this.DisableInputControl=!0,this.CorrectAnsCount>=4?(setTimeout((()=>{this.ShowSelectedResults(9)}),2e3),setTimeout((()=>{this.ShowLevelResults()}),8e3)):setTimeout((()=>{this.DisableInputControl=!1}),1500))},Level1Handler.prototype.OnClickPlay=function(){this.MenuEntity.enabled=!1,this.InGameUIEntity.enabled=!0,setTimeout((()=>{this.ShowQuestion(),this.DisableInputControl=!1}),1500)},Level1Handler.prototype.ShowQuestion=function(){this.SelectedResultSet.enabled=!1,this.QuestionSet.enabled=!0},Level1Handler.prototype.ShowSelectedResults=function(t){this.QuestionSet.enabled=!1,this.SelectedResultSet.enabled=!0,this.ResultTxtEntity.element.text=this.SelectedResultsMsg[t]},Level1Handler.prototype.OnClickElephant=function(){this.ResetModel(),this.ElephantModelEntity.enabled=!0},Level1Handler.prototype.OnClickCamel=function(){this.ResetModel(),this.CamelModelEntity.enabled=!0},Level1Handler.prototype.OnClickHorse=function(){this.ResetModel(),this.HorseModelEntity.enabled=!0},Level1Handler.prototype.OnClickCat=function(){this.ResetModel(),this.CatModelEntity.enabled=!0},Level1Handler.prototype.OnClickDog=function(){},Level1Handler.prototype.OnClickFox=function(){this.ResetModel(),this.FoxModelEntity.enabled=!0},Level1Handler.prototype.OnClickYak=function(){this.ResetModel(),this.YakModelEntity.enabled=!0},Level1Handler.prototype.OnClickRabit=function(){this.ResetModel(),this.RabitModelEntity.enabled=!0},Level1Handler.prototype.OnClickMonkey=function(){this.ResetModel(),this.MonkeyModelEntity.enabled=!0},Level1Handler.prototype.ShowLevelResults=function(){this.LevelResultsMenuEntity.enabled=!0,this.LevelResultsStarTxt.element.text=globalVariables.GameManagerEntity.script.gameManager.StarCount},Level1Handler.prototype.ResetModel=function(){this.ElephantModelEntity.enabled=!1,this.CamelModelEntity.enabled=!1,this.HorseModelEntity.enabled=!1,this.CatModelEntity.enabled=!1,this.FoxModelEntity.enabled=!1,this.YakModelEntity.enabled=!1,this.RabitModelEntity.enabled=!1,this.MonkeyModelEntity.enabled=!1};var Level2Handler=pc.createScript("level2Handler");Level2Handler.attributes.add("QuestionSet1",{type:"entity"}),Level2Handler.attributes.add("QuestionSet2",{type:"entity"}),Level2Handler.attributes.add("QuestionSet3",{type:"entity"}),Level2Handler.attributes.add("QuestionSet4",{type:"entity"}),Level2Handler.attributes.add("AccessoryQus1",{type:"entity"}),Level2Handler.attributes.add("AccessoryQus2",{type:"entity"}),Level2Handler.attributes.add("AccessoryQus3",{type:"entity"}),Level2Handler.attributes.add("AccessoryQus4",{type:"entity"}),Level2Handler.attributes.add("AccessoryAns1",{type:"entity"}),Level2Handler.attributes.add("AccessoryAns2",{type:"entity"}),Level2Handler.attributes.add("AccessoryAns3",{type:"entity"}),Level2Handler.attributes.add("AccessoryAns4",{type:"entity"}),Level2Handler.attributes.add("ElephantWrongAns",{type:"entity"}),Level2Handler.attributes.add("CamelWrongAns",{type:"entity"}),Level2Handler.attributes.add("HorseWrongAns",{type:"entity"}),Level2Handler.attributes.add("CatWrongAns",{type:"entity"}),Level2Handler.attributes.add("HuskyWrongAns",{type:"entity"}),Level2Handler.attributes.add("FoxWrongAns",{type:"entity"}),Level2Handler.attributes.add("YakWrongAns",{type:"entity"}),Level2Handler.attributes.add("RabbitWrongAns",{type:"entity"}),Level2Handler.attributes.add("MonkeyWrongAns",{type:"entity"}),Level2Handler.attributes.add("CorrectectParticles",{type:"entity"}),Level2Handler.attributes.add("StarUITxt",{type:"entity"}),Level2Handler.attributes.add("AlifQuestionSet",{type:"entity"}),Level2Handler.attributes.add("SelectedResultSet",{type:"entity"}),Level2Handler.attributes.add("ResultTxtEntity",{type:"entity"}),Level2Handler.attributes.add("SelectedResultsMsg",{type:"string",array:!0}),Level2Handler.attributes.add("LevelResultsMenuEntity",{type:"entity"}),Level2Handler.attributes.add("LevelResultsStarTxt",{type:"entity"}),Level2Handler.prototype.initialize=function(){this.ShowAlifQuestion(),this.ShowQuestionSet1(),this.StarUITxt.element.text=globalVariables.GameManagerEntity.script.gameManager.StarCount},Level2Handler.prototype.OnClickUIButton=function(e,t){this.DisableInputControl||(0===t?this.OnClickElephant(e,t):1===t?this.OnClickCamel(e,t):2===t?this.OnClickHorse(e,t):3===t?this.OnClickCat(e,t):4===t?this.OnClickHusky(e,t):5===t?this.OnClickFox(e,t):6===t?this.OnClickYak(e,t):7===t?this.OnClickRabit(e,t):8===t&&this.OnClickMonkey(e,t))},Level2Handler.prototype.ShowAlifQuestion=function(){this.AlifQuestionSet.enabled=!0,this.SelectedResultSet.enabled=!1},Level2Handler.prototype.ShowSelectedResults=function(e){this.AlifQuestionSet.enabled=!1,this.SelectedResultSet.enabled=!0,this.ResultTxtEntity.element.text=this.SelectedResultsMsg[e]},Level2Handler.prototype.ShowQuestionSet1=function(){this.ResetQuestions(),this.AccessoryQus1.enabled=!0,this.QuestionSet1.enabled=!0},Level2Handler.prototype.ShowQuestionSet2=function(){this.ResetQuestions(),this.AccessoryQus2.enabled=!0,this.QuestionSet2.enabled=!0},Level2Handler.prototype.ShowQuestionSet3=function(){this.ResetQuestions(),this.AccessoryQus3.enabled=!0,this.QuestionSet3.enabled=!0},Level2Handler.prototype.ShowQuestionSet4=function(){this.ResetQuestions(),this.AccessoryQus4.enabled=!0,this.QuestionSet4.enabled=!0},Level2Handler.prototype.OnClickElephant=function(e,t){if(1==e){this.ShowSelectedResults(0),globalVariables.GameManagerEntity.script.gameManager.AddStarCount(2,2),this.AccessoryQus1.enabled=!1,this.AccessoryAns1.enabled=!0;var s=this.CorrectectParticles.clone();s.enabled=!0,setTimeout((()=>{s.destroy()}),2e3),setTimeout((()=>{this.ShowAlifQuestion(),this.ShowQuestionSet2()}),4e3)}else 2==e?(this.ShowSelectedResults(4),this.QuestionSet2.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus2.enabled=!1,this.ElephantWrongAns.enabled=!0,setTimeout((()=>{this.ElephantWrongAns.enabled=!1,this.AccessoryQus2.enabled=!0,this.QuestionSet2.enabled=!0,this.ShowAlifQuestion()}),2e3)):3==e&&(this.ShowSelectedResults(4),this.QuestionSet3.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus3.enabled=!1,this.ElephantWrongAns.enabled=!0,setTimeout((()=>{this.ElephantWrongAns.enabled=!1,this.AccessoryQus3.enabled=!0,this.QuestionSet3.enabled=!0,this.ShowAlifQuestion()}),2e3))},Level2Handler.prototype.OnClickCamel=function(e,t){if(3==e)this.ShowSelectedResults(4),this.QuestionSet3.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus3.enabled=!1,this.CamelWrongAns.enabled=!0,setTimeout((()=>{this.CamelWrongAns.enabled=!1,this.AccessoryQus3.enabled=!0,this.QuestionSet3.enabled=!0,this.ShowAlifQuestion()}),2e3);else if(4==e){this.ShowSelectedResults(0),globalVariables.GameManagerEntity.script.gameManager.AddStarCount(2,2),this.AccessoryQus4.enabled=!1,this.AccessoryAns4.enabled=!0;var s=this.CorrectectParticles.clone();s.enabled=!0,setTimeout((()=>{s.destroy()}),2e3),setTimeout((()=>{this.ShowLevelResults()}),4e3)}},Level2Handler.prototype.OnClickHorse=function(e,t){if(1==e)this.ShowSelectedResults(4),this.QuestionSet1.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus1.enabled=!1,this.HorseWrongAns.enabled=!0,setTimeout((()=>{this.HorseWrongAns.enabled=!1,this.AccessoryQus1.enabled=!0,this.QuestionSet1.enabled=!0,this.ShowAlifQuestion()}),2e3);else if(2==e){this.ShowSelectedResults(0),globalVariables.GameManagerEntity.script.gameManager.AddStarCount(2,2),this.AccessoryQus2.enabled=!1,this.AccessoryAns2.enabled=!0;var s=this.CorrectectParticles.clone();s.enabled=!0,setTimeout((()=>{s.destroy()}),2e3),setTimeout((()=>{this.ShowAlifQuestion(),this.ShowQuestionSet3()}),4e3)}else 4==e&&(this.ShowSelectedResults(4),this.QuestionSet4.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus4.enabled=!1,this.HorseWrongAns.enabled=!0,setTimeout((()=>{this.HorseWrongAns.enabled=!1,this.AccessoryQus4.enabled=!0,this.QuestionSet4.enabled=!0,this.ShowAlifQuestion()}),2e3))},Level2Handler.prototype.OnClickCat=function(e,t){2==e&&(this.ShowSelectedResults(4),this.QuestionSet2.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus2.enabled=!1,this.CatWrongAns.enabled=!0,setTimeout((()=>{this.CatWrongAns.enabled=!1,this.AccessoryQus2.enabled=!0,this.QuestionSet2.enabled=!0,this.ShowAlifQuestion()}),2e3))},Level2Handler.prototype.OnClickHusky=function(e,t){if(1==e)this.ShowSelectedResults(4),this.QuestionSet1.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus1.enabled=!1,this.HuskyWrongAns.enabled=!0,setTimeout((()=>{this.HuskyWrongAns.enabled=!1,this.AccessoryQus1.enabled=!0,this.QuestionSet1.enabled=!0,this.ShowAlifQuestion()}),2e3);else if(3==e){this.ShowSelectedResults(0),globalVariables.GameManagerEntity.script.gameManager.AddStarCount(2,2),this.AccessoryQus3.enabled=!1,this.AccessoryAns3.enabled=!0;var s=this.CorrectectParticles.clone();s.enabled=!0,setTimeout((()=>{s.destroy()}),2e3),setTimeout((()=>{this.ShowAlifQuestion(),this.ShowQuestionSet4()}),4e3)}},Level2Handler.prototype.OnClickFox=function(e,t){4==e&&(this.ShowSelectedResults(4),this.QuestionSet4.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus4.enabled=!1,this.FoxWrongAns.enabled=!0,setTimeout((()=>{this.FoxWrongAns.enabled=!1,this.AccessoryQus4.enabled=!0,this.QuestionSet4.enabled=!0,this.ShowAlifQuestion()}),2e3))},Level2Handler.prototype.OnClickYak=function(e,t){3==e&&(this.ShowSelectedResults(4),this.QuestionSet3.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus3.enabled=!1,this.YakWrongAns.enabled=!0,setTimeout((()=>{this.YakWrongAns.enabled=!1,this.AccessoryQus3.enabled=!0,this.QuestionSet3.enabled=!0,this.ShowAlifQuestion()}),2e3))},Level2Handler.prototype.OnClickRabit=function(e,t){4==e&&(this.ShowSelectedResults(4),this.QuestionSet4.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus4.enabled=!1,this.RabbitWrongAns.enabled=!0,setTimeout((()=>{this.RabbitWrongAns.enabled=!1,this.AccessoryQus4.enabled=!0,this.QuestionSet4.enabled=!0,this.ShowAlifQuestion()}),2e3))},Level2Handler.prototype.OnClickMonkey=function(e,t){1==e?(this.ShowSelectedResults(4),this.QuestionSet1.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus1.enabled=!1,this.MonkeyWrongAns.enabled=!0,setTimeout((()=>{this.MonkeyWrongAns.enabled=!1,this.AccessoryQus1.enabled=!0,this.QuestionSet1.enabled=!0,this.ShowAlifQuestion()}),2e3)):2==e&&(this.ShowSelectedResults(4),this.QuestionSet2.enabled=!1,globalVariables.GameManagerEntity.script.gameManager.ReduceStarCount(2,1),this.AccessoryQus2.enabled=!1,this.MonkeyWrongAns.enabled=!0,setTimeout((()=>{this.MonkeyWrongAns.enabled=!1,this.AccessoryQus2.enabled=!0,this.QuestionSet2.enabled=!0,this.ShowAlifQuestion()}),2e3))},Level2Handler.prototype.ShowLevelResults=function(){this.LevelResultsMenuEntity.enabled=!0,this.LevelResultsStarTxt.element.text=globalVariables.GameManagerEntity.script.gameManager.StarCount},Level2Handler.prototype.ResetQuestions=function(){this.QuestionSet1.enabled=!1,this.QuestionSet2.enabled=!1,this.QuestionSet3.enabled=!1,this.QuestionSet4.enabled=!1,this.AccessoryQus1.enabled=!1,this.AccessoryQus2.enabled=!1,this.AccessoryQus3.enabled=!1,this.AccessoryQus4.enabled=!1,this.ElephantWrongAns.enabled=!1,this.CamelWrongAns.enabled=!1,this.HorseWrongAns.enabled=!1,this.CatWrongAns.enabled=!1,this.HuskyWrongAns.enabled=!1,this.YakWrongAns.enabled=!1,this.RabbitWrongAns.enabled=!1,this.MonkeyWrongAns.enabled=!1,this.FoxWrongAns.enabled=!1,this.AccessoryAns1.enabled=!1,this.AccessoryAns2.enabled=!1,this.AccessoryAns3.enabled=!1,this.AccessoryAns4.enabled=!1};var Level3Handler=pc.createScript("level3Handler");Level3Handler.attributes.add("MainCamera",{type:"entity"}),Level3Handler.attributes.add("YakCorrectAns",{type:"entity"}),Level3Handler.attributes.add("CamelCorrectAns",{type:"entity"}),Level3Handler.attributes.add("HorseCorrectAns",{type:"entity"}),Level3Handler.attributes.add("ElephantCorrectAns",{type:"entity"}),Level3Handler.attributes.add("YakWrongAns",{type:"entity",array:!0}),Level3Handler.attributes.add("CamelWrongAns",{type:"entity",array:!0}),Level3Handler.attributes.add("HorseWrongAns",{type:"entity",array:!0}),Level3Handler.attributes.add("ElephantWrongAns",{type:"entity",array:!0}),Level3Handler.attributes.add("YakCameraPosition",{type:"vec3"}),Level3Handler.attributes.add("YakCameraRotation",{type:"vec3"}),Level3Handler.attributes.add("CamelCameraPosition",{type:"vec3"}),Level3Handler.attributes.add("CamelCameraRotation",{type:"vec3"}),Level3Handler.attributes.add("HorseCameraPosition",{type:"vec3"}),Level3Handler.attributes.add("HorseCameraRotation",{type:"vec3"}),Level3Handler.attributes.add("ElephantCameraPosition",{type:"vec3"}),Level3Handler.attributes.add("ElephantCameraRotation",{type:"vec3"}),Level3Handler.attributes.add("YakBGEntity",{type:"entity"}),Level3Handler.attributes.add("CamelBGEntity",{type:"entity"}),Level3Handler.attributes.add("HorseBGEntity",{type:"entity"}),Level3Handler.attributes.add("ElephantBGEntity",{type:"entity"}),Level3Handler.attributes.add("StarUITxt",{type:"entity"}),Level3Handler.attributes.add("QuestionOptionsSet",{type:"entity"}),Level3Handler.attributes.add("QuestionInex",{type:"number",default:0}),Level3Handler.attributes.add("AlifQuestionSet",{type:"entity"}),Level3Handler.attributes.add("SelectedResultSet",{type:"entity"}),Level3Handler.attributes.add("ResultTxtEntity",{type:"entity"}),Level3Handler.attributes.add("SelectedResultsMsg",{type:"string",array:!0}),Level3Handler.attributes.add("LevelResultsMenuEntity",{type:"entity"}),Level3Handler.attributes.add("LevelResultsStarTxt",{type:"entity"}),Level3Handler.prototype.initialize=function(){console.log(this.MainCamera.getLocalPosition()),this.ShowAlifQuestion(),this.ShowQuestion1(),this.StarUITxt.element.text=globalVariables.GameManagerEntity.script.gameManager.StarCount},Level3Handler.prototype.OnClickUIButton=function(e){0===e?this.OnClickYak():1===e?this.OnClickCamel():2===e?this.OnClickHorse():3===e&&this.OnClickElephant()},Level3Handler.prototype.ShowAlifQuestion=function(){this.AlifQuestionSet.enabled=!0,this.SelectedResultSet.enabled=!1},Level3Handler.prototype.ShowSelectedResults=function(e){this.AlifQuestionSet.enabled=!1,this.SelectedResultSet.enabled=!0,this.ResultTxtEntity.element.text=this.SelectedResultsMsg[e]},Level3Handler.prototype.SetYakCamera=function(){this.MainCamera.setLocalPosition(this.YakCameraPosition),this.MainCamera.rotateLocal(this.YakCameraRotation)},Level3Handler.prototype.SetCamelCamera=function(){this.MainCamera.setLocalPosition(this.CamelCameraPosition),this.MainCamera.rotateLocal(this.CamelCameraRotation)},Level3Handler.prototype.SetHorseCamera=function(){this.MainCamera.setLocalPosition(this.HorseCameraPosition),this.MainCamera.rotateLocal(this.HorseCameraRotation)},Level3Handler.prototype.SetElephantCamera=function(){this.MainCamera.setLocalPosition(this.ElephantCameraPosition),this.MainCamera.rotateLocal(this.ElephantCameraRotation)},Level3Handler.prototype.ShowQuestion1=function(){this.ResetModels(),this.YakBGEntity.enabled=!0,this.QuestionOptionsSet.enabled=!0},Level3Handler.prototype.ShowQuestion2=function(){this.ResetModels(),this.CamelBGEntity.enabled=!0,this.QuestionOptionsSet.enabled=!0,console.log(this.MainCamera.getLocalPosition())},Level3Handler.prototype.ShowQuestion3=function(){this.ResetModels(),this.HorseBGEntity.enabled=!0,this.QuestionOptionsSet.enabled=!0},Level3Handler.prototype.ShowQuestion4=function(){this.ResetModels(),this.ElephantBGEntity.enabled=!0,this.QuestionOptionsSet.enabled=!0},Level3Handler.prototype.OnClickYak=function(){0===this.QuestionInex?(this.YakCorrectAns.enabled=!0,this.QuestionOptionsSet.enabled=!1,setTimeout((()=>{this.QuestionInex+=1,this.ShowQuestion2()}),4e3)):(1===this.QuestionInex||2===this.QuestionInex||3===this.QuestionInex)&&(this.YakWrongAns[this.QuestionInex].enabled=!0,this.QuestionOptionsSet.enabled=!1,setTimeout((()=>{this.YakWrongAns[this.QuestionInex].enabled=!1,this.QuestionOptionsSet.enabled=!0}),2e3))},Level3Handler.prototype.OnClickCamel=function(){0===this.QuestionInex?(this.CamelWrongAns[this.QuestionInex].enabled=!0,this.QuestionOptionsSet.enabled=!1,setTimeout((()=>{this.CamelWrongAns[this.QuestionInex].enabled=!1,this.QuestionOptionsSet.enabled=!0}),2e3)):1===this.QuestionInex?(this.CamelCorrectAns.enabled=!0,this.QuestionOptionsSet.enabled=!1,setTimeout((()=>{this.QuestionInex+=1,this.ShowQuestion3()}),4e3)):(2===this.QuestionInex||3===this.QuestionInex)&&(this.CamelWrongAns[this.QuestionInex].enabled=!0,this.QuestionOptionsSet.enabled=!1,setTimeout((()=>{this.CamelWrongAns[this.QuestionInex].enabled=!1,this.QuestionOptionsSet.enabled=!0}),2e3))},Level3Handler.prototype.OnClickHorse=function(){0===this.QuestionInex||1===this.QuestionInex?(this.HorseWrongAns[this.QuestionInex].enabled=!0,this.QuestionOptionsSet.enabled=!1,setTimeout((()=>{this.HorseWrongAns[this.QuestionInex].enabled=!1,this.QuestionOptionsSet.enabled=!0}),2e3)):2===this.QuestionInex?(this.HorseCorrectAns.enabled=!0,this.QuestionOptionsSet.enabled=!1,setTimeout((()=>{this.QuestionInex+=1,this.ShowQuestion4()}),4e3)):3===this.QuestionInex&&(this.HorseWrongAns[this.QuestionInex].enabled=!0,this.QuestionOptionsSet.enabled=!1,setTimeout((()=>{this.HorseWrongAns[this.QuestionInex].enabled=!1,this.QuestionOptionsSet.enabled=!0}),2e3))},Level3Handler.prototype.OnClickElephant=function(){0===this.QuestionInex||1===this.QuestionInex||2===this.QuestionInex?(this.ElephantWrongAns[this.QuestionInex].enabled=!0,this.QuestionOptionsSet.enabled=!1,setTimeout((()=>{this.ElephantWrongAns[this.QuestionInex].enabled=!1,this.QuestionOptionsSet.enabled=!0}),2e3)):3===this.QuestionInex&&(this.ElephantCorrectAns.enabled=!0,this.QuestionOptionsSet.enabled=!1,setTimeout((()=>{this.QuestionInex+=1,this.ShowLevelResults()}),4e3))},Level3Handler.prototype.ShowLevelResults=function(){this.LevelResultsMenuEntity.enabled=!0,this.LevelResultsStarTxt.element.text=globalVariables.GameManagerEntity.script.gameManager.StarCount},Level3Handler.prototype.ResetModels=function(){this.YakCorrectAns.enabled=!1,this.CamelCorrectAns.enabled=!1,this.HorseCorrectAns.enabled=!1,this.ElephantCorrectAns.enabled=!1,this.YakWrongAns[0].enabled=!1,this.CamelWrongAns[0].enabled=!1,this.HorseWrongAns[0].enabled=!1,this.ElephantWrongAns[0].enabled=!1,this.YakWrongAns[1].enabled=!1,this.CamelWrongAns[1].enabled=!1,this.HorseWrongAns[1].enabled=!1,this.ElephantWrongAns[1].enabled=!1,this.YakWrongAns[2].enabled=!1,this.CamelWrongAns[2].enabled=!1,this.HorseWrongAns[2].enabled=!1,this.ElephantWrongAns[2].enabled=!1,this.YakWrongAns[3].enabled=!1,this.CamelWrongAns[3].enabled=!1,this.HorseWrongAns[3].enabled=!1,this.ElephantWrongAns[3].enabled=!1,this.YakBGEntity.enabled=!1,this.CamelBGEntity.enabled=!1,this.HorseBGEntity.enabled=!1,this.ElephantBGEntity.enabled=!1};var Level1BtnHandler=pc.createScript("level1BtnHandler");Level1BtnHandler.attributes.add("ID",{type:"number"}),Level1BtnHandler.prototype.initialize=function(){this.entity.button.on("mousedown",this.OnClickButton,this),this.entity.button.on(pc.EVENT_TOUCHSTART,this.OnClickButton,this)},Level1BtnHandler.prototype.OnClickButton=function(){globalVariables.Level1HandlerEntity.script.level1Handler.OnClickUIButton(this.ID)};var MeshVis=pc.createScript("meshVis");MeshVis.attributes.add("MeshIndex",{type:"number",array:!0}),MeshVis.attributes.add("OnUpdate",{type:"boolean",default:!1}),MeshVis.prototype.initialize=function(){for(var e=0;e<this.MeshIndex.length;e++){var s=this.entity.model.meshInstances[this.MeshIndex[e]];console.log(s.visible),s.visible=!1}},MeshVis.prototype.update=function(e){if(this.OnUpdate)for(var s=0;s<this.MeshIndex.length;s++){var t=this.entity.model.meshInstances[this.MeshIndex[s]];console.log(t.visible),t.visible=!1}};var Level2BtnHandler=pc.createScript("level2BtnHandler");Level2BtnHandler.attributes.add("QuestionIndex",{type:"number"}),Level2BtnHandler.attributes.add("ID",{type:"number"}),Level2BtnHandler.prototype.initialize=function(){this.entity.button.on("mousedown",this.OnClickButton,this),this.entity.button.on(pc.EVENT_TOUCHSTART,this.OnClickButton,this)},Level2BtnHandler.prototype.OnClickButton=function(){globalVariables.Level2HandlerEntity.script.level2Handler.OnClickUIButton(this.QuestionIndex,this.ID)};var Level3BtnHandler=pc.createScript("level3BtnHandler");Level3BtnHandler.attributes.add("ID",{type:"number"}),Level3BtnHandler.prototype.initialize=function(){this.entity.button.on("mousedown",this.OnClickButton,this),this.entity.button.on(pc.EVENT_TOUCHSTART,this.OnClickButton,this)},Level3BtnHandler.prototype.OnClickButton=function(){globalVariables.Level3HandlerEntity.script.level3Handler.OnClickUIButton(this.ID)};var VideoTexture=pc.createScript("videoTexture");VideoTexture.attributes.add("video",{title:"Video",description:"MP4 video asset to play back on this video texture.",type:"asset"}),VideoTexture.attributes.add("playEvent",{title:"Play Event",description:"Event that is fired as soon as the video texture is ready to play.",type:"string",default:""}),VideoTexture.prototype.initialize=function(){var e=this.app,t=document.createElement("video");t.loop=!0,t.muted=!0,t.playsInline=!0,t.crossOrigin="anonymous";var i=t.style;i.width="1px",i.height="1px",i.position="absolute",i.opacity="0",i.zIndex="-1000",i.pointerEvents="none",document.body.appendChild(t),this.videoTexture=new pc.Texture(e.graphicsDevice,{format:pc.PIXELFORMAT_R8_G8_B8,minFilter:pc.FILTER_LINEAR_MIPMAP_LINEAR,magFilter:pc.FILTER_LINEAR,addressU:pc.ADDRESS_CLAMP_TO_EDGE,addressV:pc.ADDRESS_CLAMP_TO_EDGE,mipmaps:!0}),this.videoTexture.setSource(t),t.addEventListener("canplaythrough",function(i){e.fire(this.playEvent,this.videoTexture),t.play()}.bind(this)),t.src=this.video?this.video.getFileUrl():this.videoUrl,document.body.appendChild(t),t.load()},VideoTexture.prototype.update=function(e){this.videoTexture.upload()};var TvScreen=pc.createScript("tvScreen");TvScreen.attributes.add("screenMaterial",{title:"Screen Material",description:"The screen material of the TV that displays the video texture.",type:"asset",assetType:"material"}),TvScreen.attributes.add("playEvent",{title:"Play Event",description:"Set the TV screen material emissive map on this event.",type:"string",default:""}),TvScreen.prototype.initialize=function(){this.app.on(this.playEvent,(function(e){var t=this.screenMaterial.resource;t.emissiveMap=e,t.update()}),this)};var Example=pc.createScript("example");Example.attributes.add("durationSecs",{type:"number"}),Example.prototype.initialize=function(){this._paused=!1,this._timerHandle=pc.timer.add(this.durationSecs,this.moveToRandomPosition,this)},Example.prototype.update=function(t){this.app.keyboard.wasPressed(pc.KEY_P)&&(this._paused=!this._paused,this.app.timeScale=this._paused?0:1),this.app.keyboard.wasPressed(pc.KEY_R)&&pc.timer.remove(this._timerHandle)},Example.prototype.moveToRandomPosition=function(){this.entity.setPosition(pc.math.random(-3,3),0,pc.math.random(-3,3)),this._timerHandle=pc.timer.add(this.durationSecs,this.moveToRandomPosition,this)};!function(){var e={},c=0;pc.timer={},pc.timer.add=function(t,i,n){if(t>0){var a={};return a.id=c,e[c]={secsLeft:t,callback:i,scope:n},c+=1,a}return null},pc.timer.remove=function(c){c&&delete e[c.id]},pc.timer.update=function(c){for(var t in e){var i=e[t];i.secsLeft-=c,i.secsLeft<=0&&(i.callback.call(i.scope),delete e[t])}};var t=pc.Application.getApplication();t&&t.on("update",(function(e){pc.timer.update(e)}))}();var FxTrigger=pc.createScript("fxTrigger");FxTrigger.prototype.initialize=function(){},FxTrigger.prototype.update=function(r){};