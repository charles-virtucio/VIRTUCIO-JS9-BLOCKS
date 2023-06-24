//Virtucio, Charles Adrian C.
//Kodego WD47P-JS9-BLOCKS
function solution(blocks) {
    const n = blocks.length;
    let longestDistance = 0;
  
    for (let i = 0; i < n; i++) {
      let left = i;
      let right = i;
  
      while (left > 0 && blocks[left - 1] >= blocks[left]) {
        left--;
      }
  
      while (right < n - 1 && blocks[right + 1] >= blocks[right]) {
        right++;
      }
  
      const distance = right - left + 1;
      longestDistance = Math.max(longestDistance, distance);
    }
  
    return longestDistance;
  }
  const blocks = [1, 5, 5, 2, 6];
  const maxDistance = solution(blocks);
  console.log("Longest distance of frogs optimal starting block initially:", maxDistance);
  