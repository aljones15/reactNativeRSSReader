export function growShrinkFlex(grow, shrink){
   return {
     flexGrow: grow,
     flexShrink: shrink
   }
}
 
export function growFlex(grow){
      return growShrinkFlex(grow, grow);
}

