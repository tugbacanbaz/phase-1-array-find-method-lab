const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"},
    {year: "2015", result: "W"}
    //...
  ]

  function superbowlWin(record){
    const result=record.find(result=> result.result==='W');

    if(result){
        return result;
    } else{
        return undefined;
    }
  }

  console.log(superbowlWin(record));
