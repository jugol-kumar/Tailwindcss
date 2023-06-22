<script setup>
var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];
</script>

<template>

    <div class="container mt-10 h-screen">
        <div class="bg-gray-100 shadow-md dark:bg-slate-700 mx-auto p-5 rounded-md border-t-4 border-purple-600 md:w-10/12 w-full">
            <div>
                <h3 class="dark:text-white text-gray-600 font-semibold">Title</h3>
                <input type="text" placeholder="e.g post title" class="py-2 px-4 border mt-2 rounded-md border w-full border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
            </div>
            <div class="mt-3">
                <h3 class="dark:text-white text-gray-600 font-semibold">Category</h3>
                <input type="text" placeholder="e.g post category" class="py-2 px-4 border mt-2 rounded-md border w-full border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
            </div>
            
            <div class="mt-3">
                <h3 class="dark:text-white text-gray-600 font-semibold">Category</h3>
                <QuillEditor class="bg-white" toolbar="full">
                </QuillEditor>
            </div>
        </div>
    </div>

</template>


<style>
.ql-editor{
    min-height: 250px;
}

</style>