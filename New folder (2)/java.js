const box=[
{
Name:`Bracelet`,
description:`The fine line Jewerlly`,
Price:`2000`,
},
{
    Name:`Bracelet`,
    description:`The fine line Jewerlly`,
    Price:`2000`,
    },
    {
        Name:`Bracelet`,
        description:`The fine line Jewerlly`,
        Price:`2000`,
        }

]
let boxs=document.getElementById(`box`);

for(let i=0; i<box.length; i++){boxs.innerHTML+=
`<div class="card" style="width: 18rem;">
<img src="k.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>`
}

console.log('box')
