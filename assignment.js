// まず最初に10分ほど下記のコードをリーディングした後、コードに記載されている①〜⑩の質問に、ペア同士で答えあいましょう。
// 全ての解答に答え終わったペアは、このメソッド全体の流れをお互いに解説しあいましょう。
// どうしてもわからないものは飛ばして構いません。完璧な答えを出さなくても良いので、自分の言葉・理解を丁寧にまとめて相手に伝えることを心がけましょう。
// 見慣れない記法も含まれていますが、それらは検索したり試しに動かしてみたりコードの関係から予測したりしていきましょう。

$(document).ready(function(){
  // ①このset_points()とはどのようなメソッドか、これがあるとどのように便利なのかを答えなさい
  function set_points(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    return subject_points;
  };


  // ②このscore_indicate()とはどのようなメソッドかを答えなさい
  function score_indicate(){
    let sum, subjects;
    [sum, subjects] = sum_score();
    avarage_score(sum, subjects);
  };

  // ③このsum_score()とはどのようなメソッドかを答えなさい
  function sum_score(){
    let sum;
    const subjects = set_points().length;
    // ④set_points().reduce(function(arr, content) { return arr + content; });が、どのような処理をしているか、答えなさい
    // （reduceメソッドについて調べてみましょう）
    sum = set_points().reduce(function(arr, content) { return arr + content; });
    $('#sum_indicate').text(sum);
    return [sum, subjects];
  };

  // ⑤このavarage_score(sum, subjects)とはどのようなメソッドかを答えなさい
  function avarage_score(sum, subjects){
    let ava = Math.round(sum / subjects)
    $('#avarage_indicate').text(ava);
  };

  // ランクを出力するメソッドです。演習とほぼ同じですが、returnをどこにつけるかに気をつけてください。
  function get_achievement(){
    let sum, subjects, evaluation;
    [sum, subjects] = sum_score()
    if (sum >= subjects * 100 * 0.8){
      evaluation = "A";
    }else if (sum >= subjects * 100 * 0.6){
      evaluation = "B";
    }else if (sum >= subjects * 100 * 0.4){
      evaluation = "C";
    }else {
      evaluation = "D";
    }
    $('#evaluation').text(evaluation);
    return evaluation
  }

  // 合否判定を出力するメソッドです。演習とほぼ同じですが、returnをどこにつけるかに気をつけてください。
  function get_pass_or_failure(){
    let points = set_points();
    let judge = "合格";
    for(let i = 0, l = points.length; i < l; i++){
      if(points[i] < 60){
        judge = "不合格";
        break;
      }
    };
    $('#judge').text(judge);
    return judge;
  }

  // 最終判定の文章を出力するメソッドです。演習をご参考ください。
  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure =  get_pass_or_failure();
    // ⑥if (document.getElementById("alert-indicate") != null){ $('#alert-indicate').remove(); }がどのようなことをしているかを答えなさい
    if (document.getElementById("alert-indicate") != null){ $('#alert-indicate').remove(); }
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です</label>`);
  };

  // ⑦今回のコードでは、点数入力欄のどれかが変更されたら画面にその合計点と平均点が出力されます。
  // 点数入力欄のどれかが変更され、score_indicate()メソッドが起動してから、画面に合計点と平均点が出力されるまでの
  // 処理の流れを、自分の言葉で構わないので説明してください。
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  // ⑧今回のコードでは、btn-evaluationが押されたら、画面に点数に応じたランクが出力されます。
  // btn-evaluationが押され、get_achievement()メソッドが起動してから、画面に点数に応じたランクが出力されるまでの
  // 処理の流れを、自分の言葉で構わないので説明してください。
  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  // ⑨今回のコードでは、btn-judgeが押されたら、画面に点数に応じた合格不合格判定が出力されます。
  // btn-judgeが押され、get_pass_or_failure()メソッドが起動してから、画面に合格不合格判定が出力されるまでの
  // 処理の流れを、自分の言葉で構わないので説明してください。
  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  // ⑩今回のコードでは、btn-declarationが押されたら、画面に点数に応じた最終判定の文字列が出力されます。
  // btn-declarationが押され、judgement()メソッドが起動してから、画面に最終判定の文字列が出力されるまでの
  // 処理の流れを、自分の言葉で構わないので説明してください。
  $('#btn-declaration').click(function() {
    judgement();
  });
});
