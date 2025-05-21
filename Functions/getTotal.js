export default function getTotal(arr){
    const total = arr?.reduce((a, c, i) => a + c.price*c.qty, 0)
    return total
}