  export default function Comment (comment) {

    const hasNestedComments = comment.comments.lenght> 0;

    return `
    <div class="nested-comments-0">
    <p class= "comment-header">
    ${comment.user} | ${comment.time_ago}
    </p>
    ${comment.content}
    ${hasNestedComments ? comment.comments.map(comment => comment (comment)).join(""): ""}
    </div>
    `
 }