//https://leetcode.com/problems/3sum/description/
 // Função auxiliar para evitar duplicatas
function skipDuplicates(nums, index, direction) {
    if (direction === 'left') {
        while (index < nums.length - 1 && nums[index] === nums[index + 1]) {
            index++;
        }
    } else {
        while (index > 0 && nums[index] === nums[index - 1]) {
            index--;
        }
    }
    return index;
}

function threeSum(nums) {
    const result = [];
    
    // Ordena o array para facilitar a busca de duplas
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Evita duplicatas para o primeiro número
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Evita duplicatas para o segundo número
                left = skipDuplicates(nums, left, 'left');
                
                // Evita duplicatas para o terceiro número
                right = skipDuplicates(nums, right, 'right');
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}

// Testes
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

