const FourOhFour = () => <p>404: Page not found</p>;
export default FourOhFour;


// use App\Http\Controllers\API\Articles;
// use App\Http\Controllers\API\Comments;

// Route::group(["prefix" => "articles"], function () {
//     Route::get("", [Articles::class, "index"]);
//     Route::post("", [Articles::class, "store"]);

//     Route::group(["prefix" => "{article}"], function () {
//         Route::get("", [Articles::class, "show"]);
//         Route::put("", [Articles::class, "update"]);
//         Route::delete("", [Articles::class, "destroy"]);

//         Route::group(["prefix" => "comments"], function () {
//             Route::get("", [Comments::class, "index"]);
//             Route::post("", [Comments::class, "store"]);

//             Route::group([
//                 "prefix" => "{comment}",
//                 "middleware" => "check.article",
//             ], function () {
//                 Route::get("", [Comments::class, "show"]);
//                 Route::put("", [Comments::class, "update"]);
//                 Route::delete("", [Comments::class, "destroy"]);
//             });
//         });
//     });
// });