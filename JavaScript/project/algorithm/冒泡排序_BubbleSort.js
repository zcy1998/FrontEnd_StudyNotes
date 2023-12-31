
/*冒泡排序(Bubble Sort)
它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来
直到没有再需要交换，说明该数列已经排序完成

1.算法步骤
比较相邻的元素。如果第一个比第二个大，就交换他们两个。

对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

针对所有的元素重复以上的步骤，除了最后一个。

持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
*/
function BubbleSort(arr){
    for (let j = 0; j < arr.length - 1; j++) {
        // 因为排到倒数第二个数字的时候，数组已经排好了，最后一个数字不需要再排，所以是arr.length-1
        for (let i = 0; i < arr.length - 1; i++) {
            //当这里的i<arr.length时，下面的arr[i+1]是undefined，这时候的比较就没有意义了
            if (arr[i] < arr[i + 1]) {// arr[i]是前边的元素 arr[i+1]是后边元素
                // 大数在前，小数在后，需要交换两个元素的位置
                let temp = arr[i] // 临时变量用来存储arr[i]的值
                arr[i] = arr[i + 1] // 将arr[i+1]的值赋给arr[i]
                arr[i + 1] = temp // 修改arr[i+1]的值
            }
        }
    }
    return arr
}
