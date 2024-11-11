const zero = new Decimal('0')
const one = new Decimal('1')
const loadData = true;
const infinity = Decimal.pow(2,1024);
const ShortCurrencies = {
    Points: " Pts",
    PPts: " PPts",
    DarkCharge: " DC",
    IP: " IP",
    ExoticEnergy: " EN",
    Galaxies: " Gal",
    Replicanti: " Rep",
    SolarGems: " S Gems",
    Energy: " En"
}
let player = {
    Upgrades: {
        Upg1: {
            Cost: new Decimal('100'),
            Amt: zero,
            Scale: new Decimal('1.015'),
            PowScale: new Decimal('1e9'),
            Currency: "Points"
        },
        Upg2: {
            Cost: new Decimal('1e6'),
            Amt: zero,
            Scale: new Decimal('1.04'),
            PowScale: new Decimal('1e50'),
            Currency: "Points"
        },
        Upg3: {
            Cost: one, 
            Amt: zero,
            Scale: new Decimal('1.5'),
            PowScale: null,
            Currency: "PPts"
        },
        Upg4: {
            Cost: new Decimal('25'),
            Amt: zero,
            Scale: new Decimal('1.05'),
            PowScale: new Decimal('1e10'),
            Currency: "PPts"
        },
        Upg5: {
            Cost: new Decimal('1e93'),
            Amt: false,
            Currency: "Points"
        },
        Upg6: {
            Cost: new Decimal('1e138'),
            Amt: zero,
            Scale: new Decimal('1.09'),
            PowScale: new Decimal('1e-117'),
            Currency: "Points"
        },
        Upg7: {
            Cost: new Decimal('10'),
            Amt: zero,
            Scale: new Decimal('1.025'),
            PowScale: new Decimal('1e5'),
            Currency: "DarkCharge"
        },
        Upg8: {
            Cost: new Decimal('4000'),
            Amt: false,
            Currency: "DarkCharge"
        },
        Upg9: {
            Cost: new Decimal('400'),
            Amt: zero,
            Scale: new Decimal('1.03'),
            PowScale: new Decimal('1e20'),
            Currency: "DarkCharge"
        },
        Upg10: {
            Cost: new Decimal('1e19'),
            Amt: zero,
            Scale: new Decimal('1.028'),
            PowScale: new Decimal('1e50'),
            Currency: "PPts"
        },
        Upg11: {
            Cost: new Decimal('40'),
            Amt: zero,
            Scale: new Decimal('1.018'),
            PowScale: new Decimal('1e15'),
            Currency: "IP"
        },
        Upg12: {
            Cost: new Decimal('100'),
            Amt: zero,
            Scale: new Decimal('1.022'),
            PowScale: new Decimal('1e15'),
            Currency: "IP"
        },
        Upg13: {
            Cost: new Decimal('100'),
            Amt: zero,
            Scale: new Decimal('1.021'),
            PowScale: new Decimal('1e20'),
            Currency: "IP"
        },
        Upg14: {
            Cost: new Decimal('500'),
            Amt: zero,
            Scale: new Decimal('1.019'),
            PowScale: new Decimal('1e15'),
            Currency: "IP"
        },
        Upg15: {
            Cost: new Decimal('100'),
            Amt: zero,
            Scale: new Decimal('1.018'),
            PowScale: new Decimal('1e15'),
            Currency: "ExoticEnergy"
        },
        Upg16: {
            Cost: new Decimal('1000'),
            Amt: zero,
            Scale: new Decimal('1.015'),
            PowScale: new Decimal('1e22'),
            Currency: "ExoticEnergy"
        },
        Upg17: {
            Cost: new Decimal('50000'),
            Amt: zero,
            Scale: new Decimal('1.023'),
            PowScale: new Decimal('1e10'),
            Currency: "ExoticEnergy"
        },
        Upg18: {
            Cost: new Decimal('1e12'),
            Amt: zero,
            Scale: new Decimal('1.01'),
            PowScale: new Decimal('1'),
            Currency: "ExoticEnergy"
        },
        Upg19: {
            Cost: new Decimal('1'),
            Amt: false,
            Currency: "Galaxies"
        },
        Upg20: {
            Cost: new Decimal('1.5'),
            Amt: zero,
            Scale: new Decimal('1.007'),
            PowScale: new Decimal('1e40'),
            Currency: "Galaxies"
        },
        Upg21: {
            Cost: new Decimal('3.5'),
            Amt: zero,
            Scale: new Decimal('1.008'),
            PowScale: new Decimal('1e60'),
            Currency: "Galaxies"
        },
        Upg22: {
            Cost: new Decimal('150'),
            Amt: false,
            Currency: "Galaxies"
        },
        Upg23: {
            Cost: new Decimal('5000'),
            Amt: false,
            Currency: "Galaxies"
        },
        Upg24: {
            Cost: new Decimal('25000'),
            Amt: false,
            Currency: "Galaxies"
        },
        Upg25: {
            Cost: new Decimal('2e6'),
            Amt: false,
            Currency: "Galaxies"
        },
        Upg26: {
            Cost: new Decimal('2e7'),
            Amt: zero,
            Scale: new Decimal('1.021'),
            PowScale: new Decimal('1e13'),
            Currency: "Galaxies"
        },
        Upg27: {
            Cost: new Decimal('1e17'),
            Amt: zero,
            Scale: new Decimal('1.04'),
            PowScale: new Decimal('1e25'),
            Currency: "Galaxies"
        },
        Upg28: {
            Cost: new Decimal('100'),
            Amt: zero,
            Scale: new Decimal('2'),
            PowScale: null,
            Currency: "Replicanti",
            Misc: 1
        },
        Upg29: {
            Cost: new Decimal('1e38'),
            Amt: zero,
            Scale: new Decimal('1.01'),
            PowScale: new Decimal('1e100'),
            Currency: "Galaxies"
        },
        Upg30: {
            Cost: new Decimal('1.906e7'),
            Amt: zero,
            Scale: new Decimal('3'),
            PowScale: null,
            Currency: "Replicanti",
            Misc: 1
        },
        Upg31: {
            Cost: new Decimal('4.402e9'),
            Amt: zero,
            Scale: new Decimal('2.5'),
            PowScale: null,
            Currency: "Replicanti",
            Misc: 1
        },
        Upg32: {
            Cost: new Decimal('1.6239e13'),
            Amt: zero,
            Scale: new Decimal('2.1'),
            PowScale: null,
            Currency: "Replicanti",
            Misc: 1
        },
        Upg33: {
            Cost: new Decimal('92.68e15'),
            Amt: zero,
            Scale: new Decimal('2.7'),
            PowScale: null,
            Currency: "Replicanti",
            Misc: 1
        },
        Upg34: {
            Cost: new Decimal('1'),
            Amt: false,
            Currency: "SolarGems"
        },
        Upg35: {
            Cost: new Decimal('25'),
            Amt: zero,
            Scale: new Decimal('2.1'),
            PowScale: null,
            Currency: "Energy"
        },
        Upg36: {
            Cost: new Decimal('1'),
            Amt: zero,
            Scale: new Decimal('1.009'),
            PowScale: new Decimal('1e10'),
            Currency: "SolarGems"
        },
        Upg37: {
            Cost: new Decimal('250'),
            Amt: zero,
            Scale: new Decimal('3.8'),
            PowScale: null,
            Currency: "Energy"
        },
        Upg38: {
            Cost: new Decimal('1'),
            Amt: zero,
            Scale: new Decimal('1.015'),
            PowScale: new Decimal('1e20'),
            Currency: "SolarGems"
        },
        Upg39: {
            Cost: new Decimal('1e3'),
            Amt: zero,
            Scale: new Decimal('2.3'),
            PowScale: null,
            Currency: "Energy"
        },
        Upg40: {
            Cost: new Decimal('4e3'),
            Amt: zero,
            Scale: new Decimal('1.02'),
            PowScale: new Decimal('1e50'),
            Currency: "Energy"
        },
        Upg41: {
            Cost: new Decimal('80'),
            Amt: false,
            Currency: "SolarGems"
        },
        Upg42: {
            Cost: new Decimal('1e15'),
            Amt: zero,
            Scale: new Decimal('9'),
            PowScale: null,
            Currency: "Energy"
        },
    },
    Boosts: {
        Upg1Mult: one,
        Upg1Base: new Decimal(1.5),
        Upg3Mult: one,
        Upg1Base2: new Decimal(0),
        PowerMult: one,
        PowerPPtsMult: one,
        Upg6Mult: one,
        DarkCharge: one,
        Upg7Mult: one,
        DCU_DCBase: new Decimal(1.4),
        DCU_PtsBase: new Decimal(5),
        DCU_PtsMult: one,
        IPChargeMult: one,
        IPDarkChargeMult: one,
        IPPPtsMult: one,
        IPSelfMult: one,
        BreakPointsMult: one,
        BreakPPtsMult: one,
        BreakDCMult: one,
        BreakIPMult: one,
        IpExoMult: one,
        ENchargeMult: one,
        ENIPMult: one,
        ENPtsMult: one,
        ENPPtsMult: one,
        IPENMult: one,
        CDPtsMult: one,
        CDChargeMult: one,
        CDIPMult: one,
        CDCDMult: new Decimal(0.1),
        GalCdMult: one,
        RepGalMult: one,
        GalRepMult: one,
        RepUpg1BaseMult: one,
        DCU_PtsBase2: one,
        PresPow: new Decimal(0.06),
        Upg35PtsMult: one,
        GalUpg2Base: new Decimal(5),
        EnGalaxyMult: one,
        SGemTempMult: one,
        EnIPMult: one,
        EnRepMult: one,
    },
    Random: {
        PPtsOnReset: zero,
        ChargeOnReset: zero,
        IPOnReset: one,
        GalOnReset: zero,
        SGemsOnReset: zero,
        IPCTBase: new Decimal(1.25),
        PtsCTBase: new Decimal(50),
        CDCTBase: new Decimal(1.15),
        ChargeCTBase: new Decimal(3),
        GalLimit: infinity,
        PtsPerSec: new Decimal(30)
    },
    Points: zero,
    PPts: zero,
    Charge: zero,
    Power: zero,
    DarkCharge: zero,
    IP: zero,
    TotalIP: zero,
    ExoticEnergy: zero,
    Galaxies: zero,
    CosmicDust: zero,
    CosmicTier: zero,
    Replicanti: one,
    SolarGems: zero,
    Temperature: new Decimal(100),
    Energy: zero,
    UnlockedButtons: 1,
}
const Upgrades = player.Upgrades
for (let upgradeKey in player.Upgrades) {
    if (player.Upgrades.hasOwnProperty(upgradeKey)) {
        player.Upgrades[upgradeKey]['Base'] = player.Upgrades[upgradeKey]['Cost'];
    }
}
let UIB = 0
const NavTexts_Unlocked = ["Points","Charge","Dark Charge","Infinity","Break","Exotic","Galaxy","Replicanti","Star"] 
const NavTexts_Locked = ["","1Vt Points Required","25 Power Required","179.76UCe Pts Required","150 TIP Required","1Qd TIP Required","10OcVt TIP Required","100 Oc Galaxies Required","179.76UCe Galaxies Required"] 
const BG_Colors = ['#1a1a1a','#1a1a1a','rgb(36,36,16)','rgb(15,15,15)','rgb(60,0,0)','rgb(60,0,0)','rgb(55,55,55)','rgb(16,0,40)','rgb(0,50,0)','rgb(50,20,0)']
const navBtns = 9 // CHANGE
let breakInfinity = false;
let isInfinite = false;
function UpdateButtons() {
    const buttons = player.UnlockedButtons;
    for (let i = 1; i <= navBtns; i++) {
        const navButton = document.getElementById("nav" + i);
        if (buttons >= i) {
            navButton.textContent = NavTexts_Unlocked[i - 1];
            navButton.style.display = "inline-block";
        } else if (buttons + 1 < i) {
            navButton.style.display = "none";
        } else {
            navButton.textContent = NavTexts_Locked[i - 1];
            navButton.style.display = "inline-block";
        }
    }
}
let DC = zero
let EN = zero
let EEupgrades = zero
let EEBase = new Decimal(1.5)
let nextCT = new Decimal(10)
function GetReplicanti(rep){
    return rep.log10().pow(rep.log10().pow(0.3));
}
setInterval(function UpdateUI(){
    document.getElementById("PointsLabel").innerHTML = "You have <font size = '7' color='#6153CC'>"+Format(player.Points,true,2)+'</font> ('+Format(Random.PtsPerSec)+'/s) Points'
    document.getElementById("PrestigeLabel").innerHTML = "You have <font size = '7' color='aqua'>"+Format(player.PPts,true)+'</font> PPts'
    document.getElementById("ChargeLabel").innerHTML = "You have <font size = '7' color='yellow'>"+Format(player.Charge,true)+'</font> Charge'
    document.getElementById("PowerLabel").innerHTML = 'Power: <font color="yellow">'+Format(player.Power,true)+'</font> <br> Next at '+Format(new Decimal(1.5).pow(player.Power.add(1)).sub(1),true)+' charge<br>Your power applies these effects:<br><font size = "50">×<font color="#6153CC">'+Format(Boosts.PowerMult,true)+'<font color = "white"> Points <br>×<font color="aqua">'+Format(Boosts.PowerPPtsMult,true)+'</font> PPts'
    if (player.Power.gte(25)){
        document.getElementById("DarkChargeLabel").innerHTML = "You have <font size = '7' color='gray'>"+Format(player.DarkCharge,true,2)+'</font> Dark Charge<br>+'+Format(DC,true)+'/s'
    } else {
        document.getElementById("DarkChargeLabel").innerHTML = "You need <font size = '7' color='yellow'>25</font> Power to generate dark charge"
    }
    document.getElementById("ReplicantiLabel").innerHTML = "You have <font size = '7' color='#00ff00'>"+Format(GetReplicanti(player.Replicanti),false,2)+'</font> Replicanti<br> Replicanti speed slows down drastically based on how much replicanti you have'
    if (player.Points.gte(250e12)){
        document.getElementById("PresBtn").innerHTML = "+ "+Format(Random.PPtsOnReset,true)+' PPts'
    } else {
        document.getElementById("PresBtn").innerHTML = "250T Pts required"
    }
    document.getElementById("Upg29").style.display = player.UnlockedButtons >= 8 ? 'block' : 'none' 
    if (player.Points.gte(1e66)){
        document.getElementById("ChargeBtn").innerHTML = "+ "+Format(Random.ChargeOnReset,true)+" Charge"
    } else {
        document.getElementById("ChargeBtn").innerHTML = "1UVt Pts required"
    }
    if (player.Points.gte(infinity)){
        document.getElementById("IPBtn").innerHTML = "+ "+Format(Random.IPOnReset)+" IP"
    } else {
        document.getElementById("IPBtn").innerHTML = "179.76UCe Pts required"
    }
    if (player.TotalIP.gte(1e88)){
        document.getElementById("GalBtn").innerHTML = "+ "+Format(Random.GalOnReset,null,null,Random.GalLimit,Random.GalLimit)+" Galaxies"
    } else {
        document.getElementById("GalBtn").innerHTML = "10OcVt TIP required"
    }
    if (player.Galaxies.gte(infinity)){
        document.getElementById("SolarBtn").innerHTML = "+ "+Format(Random.SGemsOnReset)+" Solar Gems"
    } else {
        document.getElementById("SolarBtn").innerHTML = "179.76UCe Galaxies required"
    }
    if (player.UnlockedButtons <= 1){
        if (player.Points.gte(1e63)){
            player.UnlockedButtons = 2
            UpdateButtons()
        }
    } else if (player.UnlockedButtons <= 2){
        if (player.Power.gte(25)){
            player.UnlockedButtons = 3 
            UpdateButtons()
        }
    } else if (player.UnlockedButtons <= 4){
        if (player.TotalIP.gte(150)){
            player.UnlockedButtons = 5 
            UpdateButtons()
        }
    } else if (player.UnlockedButtons <= 5){
        if (player.TotalIP.gte(1e15)){
            player.UnlockedButtons = 6 
            UpdateButtons()
        }
    } else if (player.UnlockedButtons <= 6){
        if (player.TotalIP.gte(1e88)){
            player.UnlockedButtons = 7 
            UpdateButtons()
        }
    } else if (player.UnlockedButtons <= 7){
        if (player.Galaxies.gte(1e29)){
            player.UnlockedButtons = 8
            UpdateButtons()
        }
    } else if (player.UnlockedButtons <= 8){
        if (player.Galaxies.gte(infinity)){
            player.UnlockedButtons = 9
            UpdateButtons()
        }
    }
    if (player.Power.gte(25)){
        document.getElementById("Upg10").style.display = "block";
    } else {
        document.getElementById("Upg10").style.display = "none";
    }
    document.getElementById("TIPLabel").innerHTML = 'You have <font size = "7" color="red">'+Format(player.TotalIP)+'</font> Total IP'
    document.getElementById("IPLabel").innerHTML = 'You have <font size = "7" color="red">'+Format(player.IP)+'</font> Infinity Points'
    document.getElementById("GalLabel").innerHTML = 'You have <font size = "7" color="blueviolet">'+Format(player.Galaxies,null,null,Random.GalLimit,Random.GalLimit)+'</font> Galaxies'
    document.getElementById("CosmicLabel").innerHTML = 'You have <font size = "7" color="darkorchid">'+Format(player.CosmicDust)+'</font> Cosmic Dust<br>Cosmic Tier <font color ="darkorchid">'+Format(player.CosmicTier)+'</font><br>Next tier at <font color ="darkorchid">'+Format(nextCT)+'</font> CD<br> which applies these effects:<br><font color="#6153CC">×'+Format(Boosts.CDPtsMult)+'</font> Points<br><font color = "yellow">×'+Format(Boosts.CDChargeMult)+'</font> Charge<br><font color = "red">×'+Format(Boosts.CDIPMult)+'</font> IP<br><font color = "darkorchid">×'+Format(Boosts.CDCDMult)+'</font> Cosmic Dust'
    document.getElementById("ExoEnLabel").innerHTML = 'You have <font size = "7">'+Format(player.ExoticEnergy,null,2)+'</font> Exotic Energy<br>×'+Format(EEBase)+' EE at '+Format(Decimal.pow(3,EEupgrades).times(3e15))+' TIP<br>'+Format(EEupgrades)+' upgrades gotten'
    document.getElementById("SolarLabel").innerHTML = 'You have <font size = "7" color="ff6600">'+Format(player.SolarGems)+'</font> Solar Gems'
     document.getElementById("StarLabel").innerHTML = 'Your star temperature is <font size = "7" color="ffff00">'+Format(player.Temperature)+'</font>°C<br>which generates <font color ="#ffff00">'+Format(Random.StarEnGen)+'</font> energy/s<br> You have <font color ="#ffff00">'+Format(player.Energy,null,2)+'</font> energy'
},33)
function GetIPBoosts(){
    if (UIB == 21 || player.TotalIP.gte(1e75)){if (player.TotalIP.gte(1e75)){UIB = 22}
    } else if (UIB == 20){if (player.TotalIP.gte(150e9)){UIB = 21}
    } else if (UIB == 19){if (player.TotalIP.gte(1e9)){UIB = 20}
    } else if (UIB == 18){if (player.TotalIP.gte(1000)){UIB = 19}
    } else if (UIB == 17){if (player.TotalIP.gte(105)){UIB = 18}
    } else if (UIB == 16){if (player.TotalIP.gte(75)){UIB = 17}
    } else if (UIB == 15){if (player.TotalIP.gte(49.99)){UIB = 16}
    } else if (UIB == 14){if (player.TotalIP.gte(34.99)){UIB = 15}
    } else if (UIB == 13){if (player.TotalIP.gte(29.99)){UIB = 14}
    } else if (UIB == 12){if (player.TotalIP.gte(24.99)){UIB = 13}
    } else if (UIB == 11){if (player.TotalIP.gte(19.99)){UIB = 12}
    } else if (UIB == 10){if (player.TotalIP.gte(15.99)){UIB = 11}
    } else if (UIB == 9){if (player.TotalIP.gte(12.99)){UIB = 10}
    } else if (UIB == 8){if (player.TotalIP.gte(9.99)){UIB = 9}
    } else if (UIB == 7){if (player.TotalIP.gte(7.99)){UIB = 8}
    } else if (UIB == 6){if (player.TotalIP.gte(6.99)){UIB = 7}
    } else if (UIB == 5){if (player.TotalIP.gte(5.99)){UIB = 6}
    } else if (UIB == 4){if (player.TotalIP.gte(4.99)){UIB = 5}
    } else if (UIB == 3){if (player.TotalIP.gte(3.99)){UIB = 4}
    } else if (UIB == 2){if (player.TotalIP.gte(2.99)){UIB = 3}
    } else if (UIB == 1){if (player.TotalIP.gte(1.99)){UIB = 2}
    } else if (UIB == 0){if (player.TotalIP.gte(0.99)){UIB = 1}}

    if (UIB >= 18){Boosts.IPDarkChargeMult = new Decimal(144)
    } else if (UIB >= 9){Boosts.IPDarkChargeMult = new Decimal(36)
    } else if (UIB >= 7){Boosts.IPDarkChargeMult = new Decimal(12)
    } else if (UIB >= 2){Boosts.IPDarkChargeMult = new Decimal(4)
    } else {Boosts.IPDarkChargeMult = one}

    if (UIB >= 10){Boosts.IPChargeMult = new Decimal(36)
    } else if (UIB >= 5){Boosts.IPChargeMult = new Decimal(9)
    } else if (UIB >= 3){Boosts.IPChargeMult = new Decimal(3)
    } else {Boosts.IPChargeMult = one}

    if (UIB >= 17){Boosts.IPPPtsMult = new Decimal(450)
    } else if (UIB >= 11){Boosts.IPPPtsMult = new Decimal(30)
    } else if (UIB >= 4){Boosts.IPPPtsMult = new Decimal(6)
    } else {Boosts.IPPPtsMult = one}

    if (UIB>=21){Boosts.IPSelfMult = new Decimal(60)
    } else if (UIB >= 20){Boosts.IPSelfMult = new Decimal(5)}
    else {Boosts.IPSelfMult = one}

    if (UIB>=22){Boosts.IPENMult = new Decimal(100)}
    else {Boosts.IPENMult = one}
    
    if (UIB>=8){
        SetBoolUpg("Upg8",true)
        SetBoolUpg("Upg5",true)
    } else if(UIB>=6){
        SetBoolUpg("Upg5",true)
    }
    Upgrades.Upg7.Autobuying = UIB>=12
    Upgrades.Upg6.Autobuying = UIB>=13
    Upgrades.Upg9.Autobuying = UIB>=14
    Upgrades.Upg10.Autobuying = UIB>=15
    breakInfinity = UIB>=16
}
let canTick = true;
let prevTickTime = performance.now();
const Boosts = player.Boosts
const Random = player.Random
setInterval(function Tick(){
    const tickDuration = (performance.now() - prevTickTime)/1000;
    prevTickTime = performance.now();
    if (!canTick){return}
    Random.PtsPerSec = Boosts.Upg1Mult.times(Boosts.Upg3Mult).times(Boosts.PowerMult).times(Boosts.DCU_PtsMult).times(Boosts.BreakPointsMult).times(Boosts.ENPtsMult).times(Boosts.CDPtsMult).times(Boosts.Upg35PtsMult).times(30)
    player.Points = player.Points.add(Random.PtsPerSec.times(tickDuration));
    if (breakInfinity == false && player.Points.gte(infinity)){
        player.Points = infinity;
        isInfinite = true;
        if (player.UnlockedButtons <= 3){
            player.UnlockedButtons = 4
            UpdateButtons()
        }
    }
    Random.PPtsOnReset = player.Points.div(250e12).pow(Boosts.PresPow).times(Boosts.PowerPPtsMult).times(Boosts.IPPPtsMult).times(Boosts.BreakPPtsMult).times(Boosts.ENPPtsMult);
    Random.ChargeOnReset = player.Points.div(1e66).pow(0.02).times(Boosts.Upg6Mult).times(Boosts.IPChargeMult).times(Boosts.ENchargeMult).times(Boosts.CDChargeMult);
    Random.IPOnReset = player.Points.div(infinity).pow(0.006).times(Boosts.BreakIPMult).times(Boosts.IPSelfMult).times(Boosts.ENIPMult).times(Boosts.CDIPMult).times(Boosts.EnIPMult);
    if (player.TotalIP.lt('1e1503')){
        Random.GalOnReset = player.TotalIP.div(1e88).pow(0.07).times(Boosts.RepGalMult).times(Boosts.EnGalaxyMult)
    } else {
        Random.GalOnReset = player.TotalIP.div('1e1503').pow(0.04).times(1.122e99).times(Boosts.RepGalMult).times(Boosts.EnGalaxyMult)
    }
    if (player.Galaxies.gte('4e641')){
        Random.SGemsOnReset = player.Galaxies.times('3e358').pow(0.002);
    } else {
        Random.SGemsOnReset = player.Galaxies.div(infinity).pow(0.006);
    }
    player.Power = getBaseLog(1.5,player.Charge.add(1)).floor();
    Boosts.PowerMult = Decimal.pow(10,player.Power)
    Boosts.PowerPPtsMult = Decimal.pow(1.4,player.Power)
    if (player.Power.gte(25)){
        DC = Boosts.DarkCharge.times(Boosts.IPDarkChargeMult).times(Boosts.BreakDCMult)
        player.DarkCharge = player.DarkCharge.add(DC.times(tickDuration))
    }
    if (player.Galaxies.gte(1e29)){
        player.Replicanti = player.Replicanti.add(Boosts.GalRepMult.times(Boosts.EnRepMult))
    }
    if (UIB>=1){
        player.PPts = player.PPts.add(Random.PPtsOnReset)
    }
    if (UIB>=19){
        player.Charge = player.Charge.add(Random.ChargeOnReset)
        if (player.TotalIP.gte(1e15)){
            EEupgrades = getBaseLog(3,player.TotalIP.div(3e15)).add(1).floor()
            Boosts.IpExoMult = Decimal.pow(EEBase,EEupgrades)
            EN = Boosts.IpExoMult.times(Boosts.IPENMult)
            player.ExoticEnergy = player.ExoticEnergy.add(EN)
        }
    }
    if (Upgrades.Upg22.Amt){
        player.IP = player.IP.add(Random.IPOnReset.div(1000))
        player.TotalIP = player.TotalIP.add(Random.IPOnReset.div(1000))
    }
    if (Upgrades.Upg34.Amt){
        Random.StarEnGen = player.Temperature.div(100).pow(100)
        player.Energy = player.Energy.add(Random.StarEnGen.times(tickDuration))
    }
    if (Upgrades.Upg19.Amt){
        player.CosmicDust = player.CosmicDust.add(Boosts.CDCDMult.times(Boosts.GalCdMult))
        if (player.CosmicDust.gte(nextCT)){
            player.CosmicTier = Decimal.floor(getBaseLog(1.005,player.CosmicDust.log10().add(33)).sub(706))
            nextCT = Decimal.pow(10, Decimal.pow(1.005, player.CosmicTier.add(707)).sub(33));
            Boosts.CDPtsMult = Decimal.pow(Random.PtsCTBase,player.CosmicTier)
            Boosts.CDChargeMult = Decimal.pow(Random.ChargeCTBase,player.CosmicTier)
            Boosts.CDIPMult = Decimal.pow(Random.IPCTBase,player.CosmicTier)
            Boosts.CDCDMult = Decimal.pow(Random.CDCTBase,player.CosmicTier).div(10)
        }
    }
    GetIPBoosts();
},33)
setInterval(function Autobuyers(){ 
    if (Upgrades.Upg37.Amt.gte(9.5)){Buy("Upg29",true,true);Buy("Upg27",true,true);Buy("Upg26",true,true);BuySingle("Upg25",true,true);BuySingle("Upg24",true,true);BuySingle("Upg23",true,true);BuySingle("Upg22",true,true);Buy("Upg21",true,true);Buy("Upg20",true,true);BuySingle("Upg19",true,true)} else {
        if (Upgrades.Upg37.Amt.gte(8.5)){Buy("Upg27",true,true)}
        if (Upgrades.Upg37.Amt.gte(7.5)){Buy("Upg26",true,true)}
        if (Upgrades.Upg37.Amt.gte(6.5)){BuySingle("Upg25",true)}
        if (Upgrades.Upg37.Amt.gte(5.5)){BuySingle("Upg24",true)}
        if (Upgrades.Upg37.Amt.gte(4.5)){BuySingle("Upg23",true)}
        if (Upgrades.Upg37.Amt.gte(3.5)){BuySingle("Upg22",true)}
        if (Upgrades.Upg37.Amt.gte(2.5)){Buy("Upg21",true,true)}
        if (Upgrades.Upg37.Amt.gte(1.5)){Buy("Upg20",true,true)}
        if (Upgrades.Upg37.Amt.gte(0.5)){BuySingle("Upg19",true)}
    }
    if (Upgrades.Upg42.Amt.gte(4.5)){Buy("Upg33",true,true,1);Buy("Upg32",true,true,1);Buy("Upg31",true,true,1);BuySingle("Upg30",true,true,1);Buy("Upg28",true,true,1)} else {
        if (Upgrades.Upg42.Amt.gte(3.5)){Buy("Upg32",true,true,1)}
        if (Upgrades.Upg42.Amt.gte(2.5)){Buy("Upg31",true,true,1)}
        if (Upgrades.Upg42.Amt.gte(1.5)){Buy("Upg30",true,true,1);}
        if (Upgrades.Upg42.Amt.gte(0.5)){Buy("Upg28",true,true,1);}
    }
    if (Upgrades.Upg5.Amt){
        Buy("Upg1",true,true)
        Buy("Upg2",true,true)
    }
    if (Upgrades.Upg8.Amt){
        Buy("Upg3",true,true)
        Buy("Upg4",true,true)
    }
    if (Upgrades.Upg23.Amt){
        Buy("Upg11",true,true)
        Buy("Upg12",true,true)
        Buy("Upg13",true,true)
        Buy("Upg14",true,true)
    }
    if (Upgrades.Upg24.Amt){
        Buy("Upg15",true,true)
        Buy("Upg16",true,true)
        Buy("Upg17",true,true)
        Buy("Upg18",true,true)
    }
    if (UIB>=12){
        Buy("Upg7",true,true)
        if (UIB>=13){
            Buy("Upg6",true,true)
            if (UIB>=14){
                Buy("Upg9",true,true)
                if (UIB>=15){
                    Buy("Upg10",true,true)
                }
            }
        }
    }
},100)
function ResetUpgrades(min,max){
    for (let i = min; i<=max; i++) {
        const upg = Upgrades["Upg"+i];
        if (typeof(upg.Amt) == "boolean"){
            upg.Amt = false;
            Effects[i]();
            document.getElementById("Upg"+i+"Lvl").innerHTML = '<font size = "3">Not Bought</font>';
        } else {
            upg.Amt = zero;
            upg.Cost = upg.Base;
            Effects[i]();
            document.getElementById("Upg"+i+"Lvl").innerHTML = "<font size = '3'>Level 0";
            document.getElementById("Upg"+i+"Cost").innerHTML = "<font size = '4'>Cost: " + Format(upg.Cost) + ShortCurrencies[upg.Currency];
        }
    }
}
function ResetSetUpgrades(upgs){
    upgs.forEach(i => {
        const upg = Upgrades["Upg"+i];
        if (typeof(upg.Amt) == "boolean"){
            upg.Amt = false;
            Effects[i]();
            document.getElementById("Upg"+i+"Lvl").innerHTML = '<font size = "3">Not Bought</font>';
        } else {
            upg.Amt = zero;
            upg.Cost = upg.Base;
            Effects[i]();
            document.getElementById("Upg"+i+"Lvl").innerHTML = "<font size = '3'>Level 0";
            document.getElementById("Upg"+i+"Cost").innerHTML = "<font size = '4'>Cost: " + Format(upg.Cost) + ShortCurrencies[upg.Currency];
        }
    })
}
function Prestige(){
    if (player.Points.gte(250e12)){
        player.PPts = player.PPts.add(Random.PPtsOnReset)
        player.Points = zero
        ResetUpgrades(1,2)
    }
}
function Charge(){
    if (player.Points.gte(1e66)){
        player.Charge = player.Charge.add(Random.ChargeOnReset)
        player.Points = zero
        player.PPts = zero
        ResetUpgrades(1,4)
    }
}
function InfinityReset(){
    if (player.Points.gte(infinity)){
        player.IP = player.IP.add(Random.IPOnReset)
        player.TotalIP = player.TotalIP.add(Random.IPOnReset)
        GetIPBoosts()
        player.Points = zero
        player.PPts = zero
        player.Charge = zero
        player.DarkCharge = zero
        Boosts.PowerMult = one
        Boosts.PowerPPtsMult = one
        DC = zero;
        ResetSetUpgrades([1,2,3,4,6,7,9,10])
        if (UIB<6){
            ResetSetUpgrades([5])
        }
        if (UIB<8){
            ResetSetUpgrades([8])
        }
    }
}
function GalaxyReset(){
    if (player.TotalIP.gte(1e88)){
        player.Galaxies = player.Galaxies.add(Random.GalOnReset)
        if (player.Galaxies.gte(Random.GalLimit)){
            player.Galaxies = Random.GalLimit
        }
        player.Points = zero
        player.PPts = zero
        player.Charge = zero
        player.DarkCharge = zero
        player.TotalIP = zero
        player.IP = zero
        Boosts.PowerMult = one
        Boosts.PowerPPtsMult = one
        player.ExoticEnergy = zero
        player.CosmicDust = zero
        player.CosmicTier = zero
        nextCT = new Decimal(10)
        EEupgrades = zero
        breakInfinity = false
        DC = zero;
        UIB = 0
        ResetSetUpgrades([1,2,3,4,6,7,9,10,11,12,13,14,15,16,17,18])
        if (Upgrades.Upg25.Amt == false){
            ResetSetUpgrades([5,8])
        }
    }
}
function SolarReset(){
    if (player.Galaxies.gte(infinity)){
        canTick = false;
        player.SolarGems = player.SolarGems.add(Random.SGemsOnReset)
        UIB = 0
        player.Points = zero;
        player.PPts = zero;
        player.Charge = zero;
        player.DarkCharge = zero;
        player.TotalIP = zero;
        player.IP = zero;
        Boosts.PowerMult = one
        Boosts.PowerPPtsMult = one
        player.ExoticEnergy = zero;
        player.CosmicDust = zero;
        player.CosmicTier = zero;
        player.Galaxies = zero;
        player.Replicanti = one;
        nextCT = new Decimal(10);
        EEupgrades = zero;
        DC = zero;
        ResetSetUpgrades([1,2,3,4,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33])
        if (Upgrades.Upg41.Amt == false){
            ResetSetUpgrades([5,8,23])
        }
        canTick = true;
    }
}
function showPage(pageId,req) {
    if (player.UnlockedButtons >= req){
        var pages = document.querySelectorAll('.page');
        pages.forEach(function(page) {
            page.style.display = 'none';
        });
        document.getElementById('body').style.backgroundColor = BG_Colors[req]
        document.getElementById('nav').style.backgroundColor = BG_Colors[req]
        var selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.style.display = 'block';
        }
    }
}
document.getElementById("Upg10BuyOnce").onclick=function(){
    if (player.DarkCharge != zero){
        Buy("Upg10",false)
    }
}
document.getElementById("Upg10BuyMax").onclick=function(){
    if (player.DarkCharge != zero){
        Buy("Upg10",true)
    }
}
document.addEventListener('DOMContentLoaded', function() {
    showPage('StarterPage',0);
});
function pow10(vall,tier = null) {
    let val = new Decimal('0');
    if (tier == null) {
        return new Decimal('10').pow(vall);
    } else if (tier < 0) {
        val = vall
        val.sign = 1;
        val.layer += tier;
        if (val.layer < 0) {
            val.layer = 0;
            val.mag = getBaseLog(10,vall.mag);
            val.sign = vall.sign;
        }
        return new Decimal(val.toString());
    } else {
        val.sign = 1;
        val.mag = Math.log10(vall).toString();
        val.layer = tier+1;
        return new Decimal(val.toString());
    }
}
function getBaseLog(base, value) {
    const baseDecimal = new Decimal(base);
    const valueDecimal = new Decimal(value);
    const result = valueDecimal.log(baseDecimal);
    return result;
}
function RoundNum(Val) {
    const valDecimal = new Decimal(Val);
    return valDecimal.times(100.001).floor()/100;
}
const Abbreviations = ["K","M","B","T","Qd","Qn","Sx","Sp","Oc","No"];
const Abbreviations2 = ["","U","D","T","Qt","Qn","Sx","Sp","Oc","Nv"];
const Abbreviations3 = ["","De","Vt","Tg","qg","Qg","sg","Sg","Og","Ng"];
const Abbreviations4 = ["","Ce","Dn","Tr","Qu","Qe","Se","Si","Ot","Ni"];
const hyperE_Req = pow10(1e6,4)
function Format(Val,inf,fixed,inf2,infreq) {
    if(((inf&&breakInfinity==false)||inf2)&&Val.gte(infreq||infinity)){return "Infinite"};
    const valDecimal = new Decimal(Val);
    if (valDecimal.gte(hyperE_Req)) {
        if (valDecimal.mag < 1000000) {
            return Format(new Decimal('10').pow(valDecimal.mag)) + "#" + Format(valDecimal.layer)
        } else {
          return Format(valDecimal.mag) + "#" + Format(valDecimal.layer+1)
        }
    } else if (valDecimal.gte('1e1000000')) {
        return "e" + Format(getBaseLog(10,valDecimal))
    } else if (valDecimal.gte('1e3003')) {
        const parts = valDecimal.toExponential(0).split('e');
        return (parts[0] === "10" ? "1" : parts[0]) + 'e' + AddComma(getBaseLog(10,valDecimal).add(0.01).floor().toString());
    } else if (valDecimal.gte('1e33') && valDecimal.lt('1e3003')) {
        /*const formatted = valDecimal.toExponential(2);
        const parts = formatted.split('e');
        parts[0] = parts[0].includes('.') ? parts[0].padEnd(4, '0') : parts[0] + '.00';
        parts[1] = parts[1].replace(/\+/, '');
        return parts.join('e');*/
        const vDecimal = valDecimal.times(1.000001)
        let logarithm = getBaseLog(1000, vDecimal.div(1e3)).floor().toString() % 10;
        let logarithm3 = getBaseLog(1e30, vDecimal.div(1e3)).floor().toString() % 10;
        let logarithm4 = getBaseLog('1e300', vDecimal.div(999)).floor().toString() % 10;
        let newVal = vDecimal.div(Decimal.pow(1000,getBaseLog(1000, vDecimal).floor()));
        let logarithm2 = getBaseLog(10, newVal);
        let formattedVal = newVal.toFixed(2 - logarithm2);
        if (logarithm.toString() < 4) {
            formattedVal = newVal.toFixed(3 - logarithm2);
        }
        let suffix = Abbreviations2[logarithm.toString()] + Abbreviations3[logarithm3.toString()] + (Abbreviations4[logarithm4.toString()] || "");
        let result = formattedVal + suffix;
        if (vDecimal.lt(1e303)) {
            while (result.length < 8) {
                formattedVal = parseFloat(newVal).toFixed((formattedVal.split('.')[1] || "").length + 1);
                result = formattedVal + suffix;
            }
        } else {
            while (result.length < 10) {
                formattedVal = parseFloat(newVal).toFixed((formattedVal.split('.')[1] || "").length + 1);
                result = formattedVal + suffix;
            }
        }
        if (result.length == 9 || result.length == 11){
            formattedVal = parseFloat(newVal).toFixed(0) + " ";
            result = formattedVal + suffix
        }
        return result;
    } else if (valDecimal.gte('1e3') && valDecimal.lt('1e33')) {
        const vDecimal = valDecimal.times(1.000001)
        let logarithm = getBaseLog(1000,vDecimal).floor();
        let newVal = vDecimal.div(new Decimal('1000').pow(logarithm))
        let logarithm2 = getBaseLog(10,newVal)
        const formattedValue = newVal.toFixed(4-logarithm2);
    
        return formattedValue+Abbreviations[logarithm.toString()-1];
    } else if (valDecimal.lt('1e3')) {
        if (fixed){
            return Number(RoundNum(valDecimal).toString()).toFixed(fixed);
        } else {
            return RoundNum(valDecimal).toString();
        }
    } else {
        return AddComma(valDecimal.floor().toString()); 
    }
}
function AddComma(str) {
    const commaIndex = str.length - 3;
    return str.slice(0, commaIndex) + ',' + str.slice(commaIndex);
}
document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.getElementById('nav');
    if (navbar) {
        navbar.addEventListener('wheel', (event) => {
            if (event.deltaY !== 0) {
                event.preventDefault();
                navbar.scrollLeft += event.deltaY + event.deltaX;
            }
        });
    }
    UpdateButtons();
});