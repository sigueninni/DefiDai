const Dai = artifacts.require("Dai");
const DefiProject = artifacts.require("DefiProject");


module.exports=  async (deployer, _network, accounts )  => {

 /*    await deployer.deploy(Dai);
    const dai = await Dai.deployed(); */

   await deployer.deploy(DefiProject,'0x6B175474E89094C44Da98b954EedeAC495271d0F');
   const defiProject = await DefiProject.deployed();

   //await dai.faucet(defiProject.address,100);
   const balance00 = await dai.balanceOf(defiProject.address);
   console.log(balance00.toString());

   await defiProject.foo( accounts[1],50);

    const balance0 = await dai.balanceOf(defiProject.address);
   console.log(balance0.toString());

   const balance1 = await dai.balanceOf( accounts[1]);
   console.log(balance1.toString()); 

    
}

/*      await deployer.deploy(Dai);
     const dai = await Dai.deployed();

    await deployer.deploy(DefiProject,dai.address);
    const defiProject = await DefiProject.deployed();

    await dai.faucet(defiProject.address,100);
    const balance00 = await dai.balanceOf(defiProject.address);
    console.log(balance00.toString());

    await defiProject.foo( accounts[1],50);

     const balance0 = await dai.balanceOf(defiProject.address);
    console.log(balance0.toString());

    const balance1 = await dai.balanceOf( accounts[1]);
    console.log(balance1.toString()); */