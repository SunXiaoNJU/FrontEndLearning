/* 已知一颗二叉树的前序遍历和中序遍历，返回这个二叉树 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/* 实现要点：利用前序得到的根结点创建子树，在中序中找到对应的位置，然后迭代即可 */
function getBinaryTree(preOrder, midOrder) {
  if (preOrder.length < 1) {
    return null;
  }

  let rootVal = preOrder[0];
  let rootId = midOrder.indexOf(rootVal);

  const root = new TreeNode(rootVal);
  root.left = getBinaryTree(
    preOrder.slice(1, 1 + rootId),
    midOrder.slice(0, rootId)
  );
  root.right = getBinaryTree(
    preOrder.slice(1 + rootId),
    midOrder.slice(rootId + 1)
  );

  return root;
}

console.log(getBinaryTree([1, 2, 5, 7, 4, 9], [5, 2, 7, 1, 9, 4]));
