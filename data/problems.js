const problems = [
    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers that add up to target. Print the two indices separated by a space.",
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "0 1",
                explanation: "nums[0] + nums[1] = 2 + 7 = 9"
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "1 2",
                explanation: "nums[1] + nums[2] = 2 + 4 = 6"
            }
        ],
        constraints: [
            "2 <= nums.length <= 10^4",
            "Only one valid answer exists"
        ],
        starterCode: `# Read nums from the first line, target from the second line
# Print the two indices separated by a space

nums = list(map(int, input().split()))
target = int(input())

# Write your solution below
`,
        testCases: [
            { stdin: "2 7 11 15\n9", expected_output: "0 1" },
            { stdin: "3 2 4\n6", expected_output: "1 2" },
            { stdin: "3 3\n6", expected_output: "0 1" }
        ]
    },
    {
        id: 2,
        title: "Valid Parentheses",
        difficulty: "Easy",
        description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Print 'true' or 'false'.",
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
        ],
        starterCode: `# Read the string from input
# Print 'true' or 'false'

s = input()

# Write your solution below
`,
        testCases: [
            { stdin: "()", expected_output: "true" },
            { stdin: "()[]{}", expected_output: "true" },
            { stdin: "(]", expected_output: "false" },
            { stdin: "([)]", expected_output: "false" }
        ]
    },
    {
        id: 3,
        title: "Reverse Linked List",
        difficulty: "Medium",
        description: "Given a list of integers representing a linked list, reverse it and print the reversed values space-separated.",
        examples: [
            {
                input: "head = [1,2,3,4,5]",
                output: "5 4 3 2 1",
                explanation: "List reversed"
            }
        ],
        constraints: [
            "The number of nodes is in range [0, 5000]",
            "-5000 <= Node.val <= 5000"
        ],
        starterCode: `# Read space-separated integers representing the list
# Print the reversed list space-separated

nodes = list(map(int, input().split()))

# Write your solution below
`,
        testCases: [
            { stdin: "1 2 3 4 5", expected_output: "5 4 3 2 1" },
            { stdin: "1 2", expected_output: "2 1" },
            { stdin: "1", expected_output: "1" }
        ]
    },
    {
        id: 4,
        title: "Maximum Subarray",
        difficulty: "Medium",
        description: "Given an integer array nums, find the subarray with the largest sum, and print its sum.",
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
        ],
        starterCode: `# Read space-separated integers
# Print the maximum subarray sum

nums = list(map(int, input().split()))

# Write your solution below
`,
        testCases: [
            { stdin: "-2 1 -3 4 -1 2 1 -5 4", expected_output: "6" },
            { stdin: "1", expected_output: "1" },
            { stdin: "5 4 -1 7 8", expected_output: "23" }
        ]
    },
    {
        id: 5,
        title: "Merge K Sorted Lists",
        difficulty: "Hard",
        description: "Given K sorted lists of integers (one per line), merge them into one sorted list and print the values space-separated.",
        examples: [
            {
                input: "lists = [[1,4,5],[1,3,4],[2,6]]",
                output: "1 1 2 3 4 4 5 6",
                explanation: "All lists merged and sorted"
            }
        ],
        constraints: [
            "k == number of lines of input",
            "0 <= k <= 10^4"
        ],
        starterCode: `# Read K lines, each with space-separated integers
# Print the merged sorted list space-separated
import sys

lines = sys.stdin.read().strip().split('\\n')
lists = [list(map(int, line.split())) for line in lines if line]

# Write your solution below
`,
        testCases: [
            { stdin: "1 4 5\n1 3 4\n2 6", expected_output: "1 1 2 3 4 4 5 6" },
            { stdin: "1\n0", expected_output: "0 1" }
        ]
    }
]

export default problems
