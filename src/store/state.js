let defultCity = '上海'
try {
  if (localStorage.city) {
    defultCity = localStorage.city
  }
} catch (e) {
}
const state = {
  count: 0,
  city: defultCity
}
export default state
