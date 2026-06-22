const problems = [
    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.",
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "nums[0] + nums[1] = 2 + 7 = 9"
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]",
                explanation: "nums[1] + nums[2] = 2 + 4 = 6"
            }
        ],
        constraints: [
            "2 <= nums.length <= 10^4",
            "Only one valid answer exists"
        ]
    },
    {
        id: 2,
        title: "Valid Parentheses",
        difficulty: "Easy",
        description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        examples: [
            {
                input: 's = "()"',
                output: "true",
                explanation: "Opening and closing brackets match"
            },
            {
                input: 's = "()[]{}"',
                output: "true",
                explanation: "All brackets match"
            }
        ],
        constraints: [
            "1 <= s.length <= 10^4",
            "s consists of parentheses only"
        ]
    },
    {
        id: 3,
        title: "Reverse Linked List",
        difficulty: "Medium",
        description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
        examples: [
            {
                input: "head = [1,2,3,4,5]",
                output: "[5,4,3,2,1]",
                explanation: "List reversed"
            }
        ],
        constraints: [
            "The number of nodes is in range [0, 5000]",
            "-5000 <= Node.val <= 5000"
        ]
    },
    {
        id: 4,
        title: "Maximum Subarray",
        difficulty: "Medium",
        description: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "Subarray [4,-1,2,1] has the largest sum = 6"
            }
        ],
        constraints: [
            "1 <= nums.length <= 10^5",
            "-10^4 <= nums[i] <= 10^4"
        ]
    },
    {
        id: 5,
        title: "Merge K Sorted Lists",
        difficulty: "Hard",
        description: "You are given an array of k linked-lists, each linked-list is sorted in ascending order. Merge all linked-lists into one sorted linked-list.",
        examples: [
            {
                input: "lists = [[1,4,5],[1,3,4],[2,6]]",
                output: "[1,1,2,3,4,4,5,6]",
                explanation: "All lists merged and sorted"
            }
        ],
        constraints: [
            "k == lists.length",
            "0 <= k <= 10^4"
        ]
    }
]

export default problems