function staircase(n) {
      for (let r = 1; r <= n; r++) {
          let blanks = [ ...Array(n - r) ].map(i => ' ');
          let hashes = [ ...Array(n - (n - r))].map(i => '#');
          console.log([
                ...blanks,
                ...hashes
          ].join(''));
      }     
  }
  
  console.log(staircase(6))