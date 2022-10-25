const str = `
010-1223-1231
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7530c60c&s=frozen
The quick brown fox jumps over the lazy dog
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g) //@를 기준으로 뒤쪽 일치함으로 .{1,}패턴도 뒤쪽으로 배치
)