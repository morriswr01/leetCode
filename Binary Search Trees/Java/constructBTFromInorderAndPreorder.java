import java.util.*;

class constructBTFromInorderAndPreorder {
    public static TreeNode buildTree(int[] inorder, int[] postorder) {
        Stack<int[]> stack = new Stack<int[]>();

        // Push last item of postorder to stack. This is the root of the tree.
        stack.push(Arrays.copyOfRange(postorder, postorder.length - 1, postorder.length - 1));

        while (!stack.empty()) {
            System.out.println(stack.peek());
            stack.pop();  
        }
        return new TreeNode(1);
    }

    public static void main(String[] args) {
        int[] inorder = {9, 3, 15, 20, 7};
        int[] postorder = {9, 15, 7, 20, 3};
        System.out.println(buildTree(inorder, postorder).val);
    }
    
}

