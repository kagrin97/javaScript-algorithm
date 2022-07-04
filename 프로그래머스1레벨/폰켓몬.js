function solution(nums) {
    var n = nums.length / 2;
    var set1 = [...new Set(nums)]   // 집합으로 중복수 제거한 다음 리스트로 만들어줌
    
    return set1.length > n ? n : set1.length; // 참일경우 왼쪽 거짓일경우 오른쪽
}

const nums = [3,1,2,3];

console.log(solution(nums))