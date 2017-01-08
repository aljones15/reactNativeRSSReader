export function rotate(loading){
  let rotate = 0;
  while(loading){
    if(rotate >= 360){ rotate = 0;}
    return rotate = rotate + 1;
  }
}
