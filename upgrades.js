let Effects = [null,function(){
    const base = (Boosts.Upg1Base.add(Boosts.Upg1Base2)).times(Boosts.RepUpg1BaseMult)
    Boosts.Upg1Mult = base.pow(Upgrades.Upg1.Amt)
},function(){
    Boosts.Upg1Base = Upgrades.Upg2.Amt.times(0.05).add(1.5)
    const base = (Boosts.Upg1Base.add(Boosts.Upg1Base2)).times(Boosts.RepUpg1BaseMult)
    Boosts.Upg1Mult = base.pow(Upgrades.Upg1.Amt)
    document.getElementById("Upg1Title").innerHTML = '<font size = "6">×' + Format(base,true) + " Points</font>";
},function(){
    Boosts.Upg3Mult = Decimal.pow(3,Upgrades.Upg3.Amt)
},function(){
    Boosts.Upg1Base2 = Upgrades.Upg4.Amt.times(0.05)
    const base = (Boosts.Upg1Base.add(Boosts.Upg1Base2)).times(Boosts.RepUpg1BaseMult)
    Boosts.Upg1Mult = base.pow(Upgrades.Upg1.Amt)
    document.getElementById("Upg1Title").innerHTML = '<font size = "6">×' + Format(base,true) + " Points</font>";
},function(){},function(){
    Boosts.Upg6Mult = Decimal.pow(1.3,Upgrades.Upg6.Amt)
},function(){
    Boosts.DarkCharge = Decimal.pow(Boosts.DCU_DCBase,Upgrades.Upg7.Amt)
    Boosts.DCU_PtsMult = Decimal.pow(Boosts.DCU_PtsBase.times(Boosts.DCU_PtsBase2),Upgrades.Upg7.Amt)
    document.getElementById("DCULabel").innerHTML = 'DCU Upgrade applies these effects:<br><font size = "7" color="gray">×'+Format(Boosts.DarkCharge,true)+'<font color = "white"> dark charge<br><font color="#6153CC">×'+Format(Boosts.DCU_PtsMult)+'<font color = "white"> Points'
},function(){},function(){
    Boosts.DCU_PtsBase = Upgrades.Upg9.Amt.div(2).add(5)
    Boosts.DCU_PtsMult = Decimal.pow(Boosts.DCU_PtsBase.times(Boosts.DCU_PtsBase2),Upgrades.Upg7.Amt)
    document.getElementById("DCULabel").innerHTML = 'DCU Upgrade applies these effects:<br><font size = "7" color="gray">×'+Format(Boosts.DarkCharge,true)+'<font color = "white"> dark charge<br><font color="#6153CC">×'+Format(Boosts.DCU_PtsMult)+'<font color = "white"> Points'
},function(){
    Boosts.DCU_DCBase = Upgrades.Upg10.Amt.div(20).add(1.4)
    Boosts.DarkCharge = Decimal.pow(Boosts.DCU_DCBase,Upgrades.Upg7.Amt)
    document.getElementById("DCULabel").innerHTML = 'DCU Upgrade applies these effects:<br><font size = "7" color="gray">×'+Format(Boosts.DarkCharge,true)+'<font color = "white"> dark charge<br><font color="#6153CC">×'+Format(Boosts.DCU_PtsMult)+'<font color = "white"> Points'
},function(){
    Boosts.BreakPointsMult = Decimal.pow(7000,Upgrades.Upg11.Amt)
},function(){
    Boosts.BreakPPtsMult = Decimal.pow(50,Upgrades.Upg12.Amt)
},function(){
    Boosts.BreakIPMult = Decimal.pow(2,Upgrades.Upg13.Amt)
},function(){
    Boosts.BreakDCMult = Decimal.pow(5,Upgrades.Upg14.Amt)
},function(){
    Boosts.ENIPMult = Decimal.pow(2,Upgrades.Upg15.Amt)
},function(){
    Boosts.ENPtsMult = Decimal.pow(1e15,Upgrades.Upg16.Amt)
},function(){
    Boosts.ENchargeMult = Decimal.pow(400,Upgrades.Upg17.Amt)
},function(){
    Boosts.ENPPtsMult = Decimal.pow(1e7,Upgrades.Upg18.Amt)
},function(){},function(){
    Boosts.GalCdMult = Decimal.pow(Boosts.GalUpg2Base,Upgrades.Upg20.Amt)
},function(){
    EEBase = Decimal.pow(1.04,Upgrades.Upg21.Amt).times(1.5)
},function(){},function(){},function(){},function(){
    if (Upgrades.Upg25.Amt == true){
        SetBoolUpg("Upg5",true)
        SetBoolUpg("Upg8",true)
    }
},function(){
    Random.IPCTBase = Decimal.pow(1.05,Upgrades.Upg26.Amt).times(1.25)
    Boosts.CDIPMult = Decimal.pow(Random.IPCTBase,player.CosmicTier)
},function(){
    Random.PtsCTBase = Decimal.pow(10,Upgrades.Upg27.Amt).times(50)
    Boosts.CDPtsMult = Decimal.pow(Random.PtsCTBase,player.CosmicTier)
},function(){
    Boosts.RepGalMult = Decimal.pow(5,Upgrades.Upg28.Amt)
},function(){
    Boosts.GalRepMult = Decimal.pow(1.5,Upgrades.Upg29.Amt)
},function(){
    Random.CDCTBase = Decimal.pow(1.05,Upgrades.Upg30.Amt).times(1.15)
    Boosts.CDCDMult = Decimal.pow(Random.CDCTBase,player.CosmicTier).div(10)
}
,function(){
    Random.ChargeCTBase = Decimal.pow(5,Upgrades.Upg31.Amt).times(3)
    Boosts.CDChargeMult = Decimal.pow(Random.ChargeCTBase,player.CosmicTier)
},function(){
    Boosts.RepUpg1BaseMult = Decimal.pow(3e6,Upgrades.Upg32.Amt)
    const base = (Boosts.Upg1Base.add(Boosts.Upg1Base2)).times(Boosts.RepUpg1BaseMult)
    Boosts.Upg1Mult = base.pow(Upgrades.Upg1.Amt)
    document.getElementById("Upg1Title").innerHTML = '<font size = "6">×' + Format(base,true) + " Points</font>";
},function(){
    Boosts.DCU_PtsBase2 = Decimal.pow(1e35,Upgrades.Upg33.Amt)
    Boosts.DCU_PtsMult = Decimal.pow(Boosts.DCU_PtsBase.times(Boosts.DCU_PtsBase2),Upgrades.Upg7.Amt)
    document.getElementById("DCULabel").innerHTML = 'DCU Upgrade applies these effects:<br><font size = "7" color="gray">×'+Format(Boosts.DarkCharge,true)+'<font color = "white"> dark charge<br><font color="#6153CC">×'+Format(Boosts.DCU_PtsMult)+'<font color = "white"> Points'
},function(){
    Boosts.PresPow = Upgrades.Upg34.Amt ? new Decimal(0.09) : new Decimal(0.06)
    document.getElementById("Upg35").style.display = Upgrades.Upg34.Amt ? "block" : "none"
    document.getElementById("Upg36").style.display = document.getElementById("Upg35").style.display
},function(){
    Boosts.Upg35PtsMult = Decimal.pow(3,Upgrades.Upg35.Amt)
},function(){
    Boosts.GalUpg2Base = Decimal.pow(2,Upgrades.Upg36.Amt).times(5)
    Boosts.GalCdMult = Decimal.pow(Boosts.GalUpg2Base,Upgrades.Upg20.Amt)
    document.getElementById("Upg37").style.display = Upgrades.Upg36.Amt == zero ? "none" : "block"
    document.getElementById("Upg38").style.display = document.getElementById("Upg35").style.display
    document.getElementById("Upg20Title").innerHTML = '<font size = "6">×' + Format(Boosts.GalUpg2Base) + " Comic Dust</font>";
},function(){
    Boosts.EnGalaxyMult = Decimal.pow(5,Upgrades.Upg37.Amt)
},function(){
    Boosts.SGemTempMult = Decimal.pow(1.05,Upgrades.Upg38.Amt);
    document.getElementById("Upg39").style.display = Upgrades.Upg38.Amt == zero ? "none" : "block"
    document.getElementById("Upg40").style.display = document.getElementById("Upg39").style.display
    document.getElementById("Upg41").style.display = Upgrades.Upg38.Amt == zero ? "none" : "block"
    UpdateTemp();
},function(){
    Boosts.EnIPMult = Decimal.pow(5,Upgrades.Upg39.Amt)
},function(){
    Random.GalLimit = Decimal.pow(infinity,Decimal.pow(1.15,Upgrades.Upg40.Amt))
},function(){
    if (Upgrades.Upg41.Amt == true){
        SetBoolUpg("Upg5",true)
        SetBoolUpg("Upg8",true)
        SetBoolUpg("Upg23",true)
    }
    document.getElementById("Upg42").style.display = Upgrades.Upg41.Amt == zero ? "none" : "block"
},function(){
    Boosts.EnRepMult = Decimal.pow(1.8,Upgrades.Upg39.Amt)
}]
function UpdateTemp(){
    player.Temperature = Boosts.SGemTempMult.times(100)
}
function BuySingle(upgrade,spend){
    const upg = player.Upgrades[upgrade];
    if (upg.Amt == false && player[upg.Currency].gte(upg.Cost)){
        upg.Amt = true
        if (!spend){
            player[upg.Currency] = player[upg.Currency].sub(upg.Cost) 
        }
        document.getElementById(upgrade+"Lvl").innerHTML = '<font size = "3">Bought</font>'
    }
    Effects[upgrade.replace("Upg","")]();
}
function Buy(upgrade,buymax,spend,misc){
    const upg = player.Upgrades[upgrade];
    if (player[upg.Currency].gte(upg.Cost)){
        if (upg.PowScale){
            if (buymax){
                upg.Amt = getBaseLog(upg.Scale,((player[upg.Currency].times(upg.PowScale).log10()).div(upg.Base.times(upg.PowScale).log10()))).add(1).floor();
            } else {
                upg.Amt = upg.Amt.add(1);
            }
            if (!spend){
                player[upg.Currency] = player[upg.Currency].sub((upg.PowScale.times(upg.Base)).log10().times(upg.Scale.pow(upg.Amt.sub(1))).pow10().div(upg.PowScale));
            }
            upg.Cost = (upg.PowScale.times(upg.Base)).log10().times(upg.Scale.pow(upg.Amt)).pow10().div(upg.PowScale);
        } else {
            if (buymax){
                upg.Amt = getBaseLog(upg.Scale,player[upg.Currency].div(upg.Base)).add(1).floor();
            } else {
                upg.Amt = upg.Amt.add(1);
            }
            if (!spend){
                player[upg.Currency] = player[upg.Currency].sub(upg.Scale.pow(upg.Amt.sub(1)).times(upg.Base));
            }
            upg.Cost = upg.Scale.pow(upg.Amt).times(upg.Base);
        }
        const doInf = upgrade.replace("Upg","")<=10
        document.getElementById(upgrade+"Lvl").innerHTML = "<font size = '3'>Level " + Format(upg.Amt,doInf);
        const shortCurr = ShortCurrencies[upg.Currency]
        if (misc == 1){
            document.getElementById(upgrade+"Cost").innerHTML = "<font size = '4'>Cost: " + Format(GetReplicanti(upg.Cost)) + shortCurr;
        } else {
            document.getElementById(upgrade+"Cost").innerHTML = "<font size = '4'>Cost: " + Format(upg.Cost,doInf,null,shortCurr==" Gal"&&Random.GalLimit,Random.GalLimit) + shortCurr;   
        }
        Effects[upgrade.replace("Upg","")]();
    }
}
/*player.Galaxies = infinity
Buy("Upg20",true)
player.Galaxies = infinity
Buy("Upg21",true)
player.Galaxies = new Decimal('1e309')
player.Replicanti = new Decimal(4e22)
Buy("Upg26",true)
Buy("Upg27",true)
Buy("Upg29",true)
Buy("Upg28",true,true,1)
Buy("Upg30",true,true,1)
Buy("Upg31",true,true,1)
Buy("Upg32",true,true,1)
Buy("Upg33",true,true,1)
BuySingle("Upg19")
BuySingle("Upg20")
BuySingle("Upg21")
BuySingle("Upg22")
BuySingle("Upg23")
BuySingle("Upg24")
BuySingle("Upg25")*/
let saveInterval = 5000;
const savingStuff = [
   "Points",
    "PPts",
    "Charge",
    "Power",
    "DarkCharge",
    "IP",
    "TotalIP",
    "ExoticEnergy",
    "Galaxies",
    "CosmicDust",
    "CosmicTier",
    "Replicanti",
    "SolarGems",
    "Temperature",
    "Energy",
    "UnlockedButtons"
]
function serializePlayer(player) {
    const serialized = {Upgrades: {}};
    if (player){
        for (const key of savingStuff) {
            serialized[key] = player[key];
        }
        for (const upgKey in player.Upgrades) {
            const amt = player.Upgrades[upgKey].Amt;
            if (amt instanceof Decimal) {
                serialized.Upgrades[upgKey] = { Amt: amt.toString() };
            } else {
                serialized.Upgrades[upgKey] = { Amt: amt };
            }
        }
    }

    return serialized;
}
function savePlayerData() {
    if (loadData) {
        const serializedPlayer = serializePlayer(player);
        localStorage.setItem('BasicInc_hg2f8r', JSON.stringify(serializedPlayer));
    }
}
function loadUpgrade(upgrade){
    const upg = player.Upgrades[upgrade];
    if (upg.Scale){
        if (upg.PowScale){
            upg.Cost = (upg.PowScale.times(upg.Base)).log10().times(upg.Scale.pow(upg.Amt)).pow10().div(upg.PowScale);
        } else {
            upg.Cost = upg.Scale.pow(upg.Amt).times(upg.Base);
        }
        const doInf = upgrade.replace("Upg","")<=10
        document.getElementById(upgrade+"Lvl").innerHTML = "<font size = '3'>Level " + Format(upg.Amt,doInf);
        const shortCurr = ShortCurrencies[upg.Currency]
        if (upg.misc == 1){
            document.getElementById(upgrade+"Cost").innerHTML = "<font size = '4'>Cost: " + Format(GetReplicanti(upg.Cost)) + shortCurr;
        } else {
            document.getElementById(upgrade+"Cost").innerHTML = "<font size = '4'>Cost: " + Format(upg.Cost,doInf,null,shortCurr==" Gal"&&Random.GalLimit,Random.GalLimit) + shortCurr;   
        }
    } else {
        document.getElementById(upgrade+"Lvl").innerHTML = '<font size = "3">'+upg.Amt ? "Bought" : "Not Bought"+'</font>'
    }
}
function loadPlayerData() {
    let savedData = localStorage.getItem('BasicInc_hg2f8r');
    if (savedData) {
        savedData = JSON.parse(savedData);
        for (const key in savedData) {
            if (key !== 'Upgrades' && typeof savedData[key] !== 'object') {
                if (typeof(savedData[key]) == "number"){
                    player[key] = Number(savedData[key])
                } else {
                    player[key] = new Decimal(savedData[key]);
                }
            }
        }
        if (savedData.Upgrades) {
            for (const upgKey in savedData.Upgrades) {
                if (player.Upgrades[upgKey] && savedData.Upgrades[upgKey].Amt !== undefined) {
                    const amt = savedData.Upgrades[upgKey].Amt;
                    if (typeof amt === 'string' && !isNaN(amt)) {
                        player.Upgrades[upgKey].Amt = new Decimal(amt);
                    } else if (typeof amt === 'boolean') {
                        player.Upgrades[upgKey].Amt = amt;
                    }
                    loadUpgrade(upgKey)
                }
            }
        }
        initializeDisplayAndEffects();
    }
}

function initializeDisplayAndEffects() {
    setTimeout(function() {
        let i = 0;
        Effects.forEach(effect => {
            const upg = Upgrades["Upg" + i] || null;
            if (effect) {
                effect();
            }
            if (upg) {
                const shortCurr = ShortCurrencies[upg.Currency];
                if (shortCurr != " Rep") {
                    document.getElementById("Upg" + i + "Cost").innerHTML = "<font size='4'>Cost: " + Format(upg.Cost, i <= 10, null, shortCurr == " Gal" && Random.GalLimit) + shortCurr + "</font>";
                } else {
                    document.getElementById("Upg" + i + "Cost").innerHTML = "<font size='4'>Cost: " + Format(GetReplicanti(upg.Cost)) + shortCurr + "</font>";
                }
                if (typeof(upg.Amt) != "boolean") {
                    document.getElementById("Upg" + i + "Lvl").innerHTML = "<font size='3'>Level " + Format(upg.Amt) + "</font>";
                } else {
                    document.getElementById("Upg" + i + "Lvl").innerHTML = upg.Amt ? "<font size='3'>Bought</font>" : "<font size='3'>Not Bought</font>";
                }
            }
            i += 1;
        });
        UpdateButtons();
    }, 200);
}

// Converts `Amt` back to a Decimal in deserialized data
function deserializePlayer(data) {
    if (data.Upgrades) {
        for (const upgKey in data.Upgrades) {
            if (data.Upgrades[upgKey] && data.Upgrades[upgKey].Amt) {
                data.Upgrades[upgKey].Amt = new Decimal(data.Upgrades[upgKey].Amt); // Convert back to Decimal
            }
        }
    }
    return data;
}

// Set interval for periodic saving
setInterval(savePlayerData, saveInterval);

window.addEventListener('beforeunload', savePlayerData);
loadPlayerData();
function SetBoolUpg(upg,value){
    player.Upgrades[upg].Amt = value
    document.getElementById(upg+"Lvl").innerHTML = '<font size = "3">Bought</font>'
    Effects[upg.replace("Upg","")]();
}