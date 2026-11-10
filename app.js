/* 自動生成: build.js（app.jsx -> app.js）。手で編集せず app.jsx を直して再ビルド。 */
const { useState, useEffect, useMemo, useRef, useCallback } = React;
const QUESTIONS = [{
  "id": "201-001",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "iostat コマンドで、デバイスごとの待ち時間（await）や使用率（%util）などの拡張統計情報を表示するオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-k"
  }, {
    "label": "B",
    "text": "-x"
  }, {
    "label": "C",
    "text": "-c"
  }, {
    "label": "D",
    "text": "-t"
  }, {
    "label": "E",
    "text": "-N"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iostat -x はデバイスごとの拡張統計（r/s、w/s、await、%util など）を表示します。-c は CPU 使用率のみの表示、-k は KB 単位での表示、-N は LVM などのデバイスマッパー名での表示、-t はタイムスタンプの付加であり、拡張統計は表示しません。",
  "answerKeys": ["iostat コマンド"],
  "answerTexts": ["-x"],
  "answerHints": ["-x"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-002",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "サーバの応答が遅いとの報告を受け、vmstat を実行したところ以下の出力が継続して得られました。最も疑われるボトルネックを選択してください。\n\n r  b   swpd   free   buff  cache   si   so    bi    bo    in   cs us sy id wa\n 0  4      0 812340  10236 2210340    0    0  9520 18320  1820 2950   3  2 30 65\n 0  5      0 811980  10236 2210892    0    0  9876 17904  1795 2911   2  2 29 67",
  "choices": [{
    "label": "A",
    "text": "物理メモリ不足によるスワップ"
  }, {
    "label": "B",
    "text": "プロセス数の上限"
  }, {
    "label": "C",
    "text": "CPU 処理能力"
  }, {
    "label": "D",
    "text": "ネットワーク帯域"
  }, {
    "label": "E",
    "text": "ディスク I/O"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "wa（I/O 待ちの CPU 時間の割合）が 65% 前後と非常に高く、b（I/O 待ちなどで割り込み不可能な状態のプロセス数）も複数あり、bi/bo も大きいためディスク I/O がボトルネックと判断できます。us と sy は低く r も 0 なので CPU 不足ではなく、si/so が 0 のためスワップも発生していません。",
  "answerKeys": ["サーバの"],
  "answerTexts": ["ディスク I/O"],
  "answerHints": ["ディスク"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-003",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "あるサーバで vmstat を実行したところ以下の出力が継続して得られました。この状況への対処として最も適切なものを選択してください。\n\n r  b    swpd    free   buff  cache   si   so    bi    bo    in   cs us sy id wa\n 1  2 1843200   10240   1020  20480 1450 2210  1600  2300   900 1400 10  8 52 30\n 2  3 1845760    9984    980  19876 1388 2302  1544  2410   912 1450 11  9 49 31",
  "choices": [{
    "label": "A",
    "text": "ネットワークカードを高速なものに交換する"
  }, {
    "label": "B",
    "text": "スワップ領域を削除してディスク I/O を減らす"
  }, {
    "label": "C",
    "text": "プロセスの nice 値を下げて優先度を上げる"
  }, {
    "label": "D",
    "text": "物理メモリを増設する"
  }, {
    "label": "E",
    "text": "CPU コア数を増やす"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "si（スワップイン）と so（スワップアウト）が継続的に大きな値を示し、free・buff・cache も極端に少ないため、物理メモリ不足によるスワッピングが発生しています。対処としては物理メモリの増設やメモリ消費の大きいプロセスの見直しが適切です。CPU は id が約50%あり不足しておらず、スワップを削除すると OOM Killer によるプロセス強制終了の危険が高まります。",
  "answerKeys": ["あるサーバで"],
  "answerTexts": ["物理メモリを増設する"],
  "answerHints": ["物理"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-004",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "PID が 1234 のプロセスがオープンしているファイルの一覧を表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "lsof -i 1234"
  }, {
    "label": "B",
    "text": "lsof -d 1234"
  }, {
    "label": "C",
    "text": "lsof -p 1234"
  }, {
    "label": "D",
    "text": "lsof -g 1234"
  }, {
    "label": "E",
    "text": "lsof -u 1234"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lsof -p は指定した PID のプロセスがオープンしているファイルを表示します。-u はユーザー名または UID、-i はネットワーク接続（アドレスやポート）、-d はファイルディスクリプタ番号、-g はプロセスグループ ID による絞り込みであり、PID 指定ではありません。",
  "answerKeys": ["PID"],
  "answerTexts": ["lsof -p 1234"],
  "answerHints": ["lsof -p"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-005",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Web サーバを起動しようとしたところ、TCP 80番ポートがすでに使用中というエラーになりました。80番ポートで待ち受けているプロセスを特定するために使用できるコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "lsof -i :80"
  }, {
    "label": "B",
    "text": "ss -tlnp"
  }, {
    "label": "C",
    "text": "iostat -p"
  }, {
    "label": "D",
    "text": "netstat -r"
  }, {
    "label": "E",
    "text": "vmstat 80"
  }],
  "answer": ["A", "B"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lsof -i :80 は 80番ポートを使用しているプロセスを表示し、ss -tlnp は TCP の待ち受けソケットをポート番号とプロセス情報付きで一覧表示します。netstat -r はルーティングテーブルの表示、iostat -p はパーティション単位のディスク統計、vmstat 80 は80秒間隔での統計表示であり、ポートを使用するプロセスは特定できません。",
  "answerKeys": ["Web サーバを"],
  "answerTexts": ["lsof -i :80", "ss -tlnp"],
  "answerHints": ["lsof", "ss"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-006",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "uptime コマンドの出力が以下のとおりでした。この出力の解釈として正しいものを選択してください。\n\n10:15:32 up 12 days,  3:04,  2 users,  load average: 3.52, 1.20, 0.45",
  "choices": [{
    "label": "A",
    "text": "直近の数分間でシステムの負荷が急に高まっている"
  }, {
    "label": "B",
    "text": "現在3.52個のプロセスがスワップアウトされている"
  }, {
    "label": "C",
    "text": "システムは起動から3時間4分しか経過していない"
  }, {
    "label": "D",
    "text": "CPU 使用率が 352% に達している"
  }, {
    "label": "E",
    "text": "過去15分間の平均負荷が最も高く、負荷は減少傾向にある"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "load average は左から過去1分、5分、15分間の平均負荷であり、1分平均が最も高いことから直近で負荷が上昇していると判断できます。load average は実行待ちおよび割り込み不可能な状態のプロセス数の平均であり、CPU 使用率やスワップ数ではありません。また稼働時間は 12日と3時間4分です。",
  "answerKeys": ["uptime"],
  "answerTexts": ["直近の数分間でシステムの負荷が急に高まっている"],
  "answerHints": ["直近の"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-007",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "sar コマンドで、ネットワークインターフェースごとの受信・送信パケット数やバイト数を表示するものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "sar -u"
  }, {
    "label": "B",
    "text": "sar -n DEV"
  }, {
    "label": "C",
    "text": "sar -q"
  }, {
    "label": "D",
    "text": "sar -r"
  }, {
    "label": "E",
    "text": "sar -b"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sar -n DEV はネットワークインターフェースごとの rxpck/s、txpck/s、rxkB/s、txkB/s などを表示します。sar -u は CPU 使用率、sar -r はメモリ使用状況、sar -b は I/O と転送レート、sar -q は実行キュー長とロードアベレージを表示します。",
  "answerKeys": ["sar コマンド"],
  "answerTexts": ["sar -n DEV"],
  "answerHints": ["sar -n"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-008",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "sysstat によって過去に記録されたデータファイルを指定して、その日の統計を sar で表示したい場合に使用するオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-s"
  }, {
    "label": "B",
    "text": "-i"
  }, {
    "label": "C",
    "text": "-o"
  }, {
    "label": "D",
    "text": "-f"
  }, {
    "label": "E",
    "text": "-A"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sar -f はデータを読み込むファイルを指定するオプションで、/var/log/sa/sa15 のような過去のデータファイルを表示できます。-o は収集したデータをバイナリファイルに書き出すオプション、-i はデータの選択間隔、-s は表示開始時刻の指定、-A はすべての統計を表示するオプションです。",
  "answerKeys": ["sysstat によって"],
  "answerTexts": ["-f"],
  "answerHints": ["-f"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-009",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "sysstat パッケージに含まれ、システムの活動状況を収集してバイナリ形式のデータファイルに書き込むバックエンドのコマンド名を記述してください。sar はこのコマンドが記録したデータを読み込んで表示します。",
  "choices": [],
  "answer": ["sadc"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sadc（System Activity Data Collector）はシステムの活動データを収集してバイナリファイルに記録するコマンドです。通常は cron や systemd タイマーから sa1 スクリプト経由で定期実行され、日次レポートは sa2 で作成されます。sar はこのデータファイルを読み込んで人間が読める形式で表示します。",
  "answerKeys": ["sysstat パッケージ"],
  "answerTexts": ["sadc"],
  "answerHints": ["sadc"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-010",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "現在ログインしているユーザーの一覧と、各ユーザーが実行中のコマンド、さらにシステムのロードアベレージを1つのコマンドで表示したい場合に使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "last"
  }, {
    "label": "B",
    "text": "pstree"
  }, {
    "label": "C",
    "text": "w"
  }, {
    "label": "D",
    "text": "who"
  }, {
    "label": "E",
    "text": "uptime"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "w は1行目に uptime と同様の稼働時間・ユーザー数・ロードアベレージを表示し、続いてログイン中の各ユーザーの端末、アイドル時間、実行中のコマンド（WHAT 列）を表示します。who はログインユーザーを表示しますが実行中のコマンドやロードアベレージは表示しません。uptime はロードアベレージのみ、last は過去のログイン履歴を表示します。",
  "answerKeys": ["現在ログイン"],
  "answerTexts": ["w"],
  "answerHints": ["w"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-011",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "pstree コマンドで、プロセスツリーに各プロセスの PID を併せて表示するオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-h"
  }, {
    "label": "B",
    "text": "-u"
  }, {
    "label": "C",
    "text": "-n"
  }, {
    "label": "D",
    "text": "-a"
  }, {
    "label": "E",
    "text": "-p"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "pstree -p は各プロセス名の後ろに括弧付きで PID を表示します。-a はコマンドライン引数の表示、-u は UID が変化した箇所でのユーザー名表示、-n は PID 順での並べ替え、-h はカレントプロセスとその祖先の強調表示を行うオプションです。",
  "answerKeys": ["pstree"],
  "answerTexts": ["-p"],
  "answerHints": ["-p"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-012",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "メモリ使用率の高いプロセスから順に一覧表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ps aux --sort=-%mem"
  }, {
    "label": "B",
    "text": "ps aux -m"
  }, {
    "label": "C",
    "text": "ps aux --order=mem"
  }, {
    "label": "D",
    "text": "ps aux --sort=+%mem"
  }, {
    "label": "E",
    "text": "ps -ef --mem"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ps の --sort オプションでは、キーの前に - を付けると降順、+ を付けると昇順で並べ替えるため、ps aux --sort=-%mem でメモリ使用率の高い順に表示されます。--sort=+%mem は低い順の表示になり、-m はスレッドを表示するオプションです。--mem や --order というオプションは存在しません。",
  "answerKeys": ["メモリ使用率の"],
  "answerTexts": ["ps aux --sort=-%mem"],
  "answerHints": ["ps aux --sort=-"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-013",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "top コマンドの実行中に、プロセス一覧をメモリ使用率（%MEM）の高い順に並べ替えるために押すキーを選択してください。",
  "choices": [{
    "label": "A",
    "text": "N"
  }, {
    "label": "B",
    "text": "M"
  }, {
    "label": "C",
    "text": "T"
  }, {
    "label": "D",
    "text": "k"
  }, {
    "label": "E",
    "text": "P"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "top の対話操作では M（Shift+m）で %MEM 順に並べ替えます。P は %CPU 順、T は累積 CPU 時間（TIME+）順、N は PID 順の並べ替えで、k は指定したプロセスにシグナルを送って終了させる操作です。",
  "answerKeys": ["top"],
  "answerTexts": ["M"],
  "answerHints": ["M"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-014",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "スワップ領域ごと（デバイスまたはファイル単位）のサイズと使用量を確認できるコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "swapon -s"
  }, {
    "label": "B",
    "text": "swapoff -a"
  }, {
    "label": "C",
    "text": "cat /proc/swaps"
  }, {
    "label": "D",
    "text": "mkswap -c"
  }, {
    "label": "E",
    "text": "iostat -c"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "swapon -s（新しい版では swapon --show も可）と /proc/swaps の参照で、有効なスワップ領域ごとの種類・サイズ・使用量・優先度を確認できます。swapoff -a はすべてのスワップを無効化するコマンド、mkswap -c はスワップ領域作成時に不良ブロックを検査するオプション、iostat -c は CPU 使用率の表示です。",
  "answerKeys": ["スワップ領域ごと"],
  "answerTexts": ["swapon -s", "cat /proc/swaps"],
  "answerHints": ["swapon", "cat"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-015",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "データベースサーバで書き込みが遅いとの報告があり、iostat -x を実行したところ以下の結果が継続して得られました。この結果から判断できることとして最も適切なものを選択してください。\n\nDevice   r/s    w/s   rkB/s    wkB/s  r_await  w_await  aqu-sz  %util\nsda      5.0  410.0    80.0  52480.0      2.1    180.5    74.0   99.8\nsdb      1.0    2.0    16.0     24.0      0.5      0.8     0.0    0.3",
  "choices": [{
    "label": "A",
    "text": "CPU 使用率が 99.8% に達している"
  }, {
    "label": "B",
    "text": "メモリ不足により sdb へのスワップアウトが多発している"
  }, {
    "label": "C",
    "text": "sda が書き込み処理で飽和しており、ディスク I/O がボトルネックになっている"
  }, {
    "label": "D",
    "text": "sdb の処理能力が不足しており、sda からの読み込みが遅延している"
  }, {
    "label": "E",
    "text": "sda の読み込み待ち時間が長いことが主な原因である"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sda は %util がほぼ 100% で、w/s と wkB/s が大きく、w_await（書き込み要求の平均待ち時間）も約 180ms と長いため、書き込みでデバイスが飽和しています。%util はデバイスの使用率であり CPU 使用率ではありません。sdb はほとんど使用されておらず、r_await は小さいため読み込みは問題になっていません。",
  "answerKeys": ["データベースサーバ"],
  "answerTexts": ["sda が書き込み処理で飽和しており、ディスク I/O がボトルネックになっている"],
  "answerHints": ["sda が"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-016",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "ネットワークインターフェースごとの送受信パケット数やエラー数を確認できるコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "lsof -i"
  }, {
    "label": "B",
    "text": "uptime -p"
  }, {
    "label": "C",
    "text": "vmstat -d"
  }, {
    "label": "D",
    "text": "netstat -i"
  }, {
    "label": "E",
    "text": "ip -s link"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "netstat -i はインターフェースごとの RX-OK、RX-ERR、TX-OK、TX-ERR などを表示し、ip -s link はインターフェースごとの送受信バイト数・パケット数・エラー数・ドロップ数を表示します。vmstat -d はディスクの統計、lsof -i はネットワーク接続をオープンしているプロセスの一覧、uptime -p は稼働時間を読みやすい形式で表示するものです。",
  "answerKeys": ["ネットワークインターフェースごとの"],
  "answerTexts": ["netstat -i", "ip -s link"],
  "answerHints": ["netstat", "ip"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-017",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "4コアの CPU を搭載したサーバで vmstat を実行したところ以下の出力が継続して得られました。最も疑われるボトルネックを選択してください。\n\n r  b    swpd    free   buff   cache   si   so   bi   bo   in   cs us sy id wa\n12  0       0 3204100 102400 4096000    0    0    3   20 4210 8800 85 13  2  0\n11  0       0 3203880 102400 4096020    0    0    0   16 4188 8710 86 12  2  0",
  "choices": [{
    "label": "A",
    "text": "CPU 処理能力"
  }, {
    "label": "B",
    "text": "ディスク I/O"
  }, {
    "label": "C",
    "text": "物理メモリ不足"
  }, {
    "label": "D",
    "text": "ディスクの空き容量"
  }, {
    "label": "E",
    "text": "スワップ領域の不足"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "r（実行待ちプロセス数）が CPU コア数の4を大きく超える 11〜12 で推移し、us と sy の合計が約 98%、id が 2% であることから CPU がボトルネックです。wa が 0 で bi/bo も小さいためディスク I/O の問題ではなく、si/so が 0 で free も十分あるためメモリ不足でもありません。",
  "answerKeys": ["4"],
  "answerTexts": ["CPU 処理能力"],
  "answerHints": ["CPU"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-018",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ロードアベレージが高いにもかかわらず CPU の us と sy は低い状態のサーバで ps を実行したところ、STAT 列が「D」のプロセスが多数存在していました。STAT が「D」のプロセスの状態を選択してください。",
  "choices": [{
    "label": "A",
    "text": "シグナルにより停止された状態"
  }, {
    "label": "B",
    "text": "割り込み可能なスリープ状態"
  }, {
    "label": "C",
    "text": "CPU 上で実行中または実行可能な状態"
  }, {
    "label": "D",
    "text": "割り込み不可能なスリープ状態（通常は I/O 待ち）"
  }, {
    "label": "E",
    "text": "終了したが親プロセスに回収されていないゾンビ状態"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ps の STAT 列の D は割り込み不可能なスリープ状態を表し、多くはディスクや NFS などの I/O 完了を待っています。Linux のロードアベレージには D 状態のプロセスも含まれるため、CPU 使用率が低くてもロードアベレージが高くなります。ゾンビは Z、停止は T、実行中・実行可能は R、割り込み可能なスリープは S で表されます。",
  "answerKeys": ["ロードアベレージ"],
  "answerTexts": ["割り込み不可能なスリープ状態（通常は I/O 待ち）"],
  "answerHints": ["割り込み不可能な"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-019",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "iostat で CPU のレポートを表示せずデバイスの使用状況レポートのみを、2秒間隔で5回表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "iostat -m 5 2"
  }, {
    "label": "B",
    "text": "iostat -c 2 5"
  }, {
    "label": "C",
    "text": "iostat -y 5 2"
  }, {
    "label": "D",
    "text": "iostat -d 5 2"
  }, {
    "label": "E",
    "text": "iostat -d 2 5"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iostat は「iostat [オプション] 間隔 回数」の書式で、-d を指定するとデバイスのレポートのみを表示します。iostat -c は CPU のレポートのみの表示であり、iostat -d 5 2 は5秒間隔で2回の表示になります。-m は MB 単位での表示、-y は起動時からの統計である最初のレポートを省略するオプションで、いずれも CPU レポートを抑止しません。",
  "answerKeys": ["iostat で"],
  "answerTexts": ["iostat -d 2 5"],
  "answerHints": ["iostat -d 2"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-020",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "df ではルートファイルシステムの使用率が 100% と表示されますが、du / で合計したサイズはそれよりはるかに小さい値でした。直前に大きなログファイルを rm で削除しています。原因となっているプロセスを特定するために最も適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "w -s"
  }, {
    "label": "B",
    "text": "iostat -x"
  }, {
    "label": "C",
    "text": "lsof +L1"
  }, {
    "label": "D",
    "text": "pstree -a"
  }, {
    "label": "E",
    "text": "vmstat -s"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "削除済みでもプロセスがオープンし続けているファイルはディスク領域が解放されず、df と du の結果に差が生じます。lsof +L1 はリンク数が1未満、つまり削除済みでオープンされたままのファイルとそれを保持するプロセスを一覧表示します。iostat や vmstat は I/O やメモリの統計、pstree -a はプロセスツリーの表示であり、該当ファイルを保持するプロセスは特定できません。",
  "answerKeys": ["df"],
  "answerTexts": ["lsof +L1"],
  "answerHints": ["lsof"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-021",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "collectd の設定ファイルで、CPU やメモリなどの統計情報を収集するプラグインを読み込むために使用するディレクティブを選択してください。",
  "choices": [{
    "label": "A",
    "text": "Plugin"
  }, {
    "label": "B",
    "text": "LoadPlugin"
  }, {
    "label": "C",
    "text": "Include"
  }, {
    "label": "D",
    "text": "Module"
  }, {
    "label": "E",
    "text": "AddPlugin"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "collectd では「LoadPlugin cpu」のように LoadPlugin ディレクティブでプラグインを読み込みます。<Plugin 名前> ブロックは読み込んだプラグインの個別設定を記述するためのもので、Include は別の設定ファイルを取り込むディレクティブです。Module や AddPlugin というディレクティブは collectd にはありません。",
  "answerKeys": ["collectd の設定"],
  "answerTexts": ["LoadPlugin"],
  "answerHints": ["LoadPlugin"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-022",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "collectd の説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "SNMP トラップを受信して通知することに特化したサーバである"
  }, {
    "label": "B",
    "text": "Nagios のプラグインとしてのみ動作し、単独では起動できない"
  }, {
    "label": "C",
    "text": "障害時のアラート通知が主な機能であり、統計値を保存する機能はない"
  }, {
    "label": "D",
    "text": "システムの性能統計を定期的に収集・保存するデーモンで、プラグインにより収集対象や出力先を拡張できる"
  }, {
    "label": "E",
    "text": "Web ブラウザから監視対象を設定する管理画面を標準で備えている"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "collectd はシステムの性能統計を一定間隔で収集するデーモンで、cpu、memory、interface などの入力プラグインと、rrdtool、csv、network などの出力プラグインで機能を拡張します。単独で動作するデーモンであり、標準では Web の管理画面を持たず、収集したデータは RRD ファイルなどに保存されます。",
  "answerKeys": ["collectd の説明として"],
  "answerTexts": ["システムの性能統計を定期的に収集・保存するデーモンで、プラグインにより収集対象や出力先を拡張できる"],
  "answerHints": ["システム"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-023",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Nagios のオブジェクト定義において、define service ブロック内で実行するチェックコマンドを指定するディレクティブを選択してください。",
  "choices": [{
    "label": "A",
    "text": "check_command"
  }, {
    "label": "B",
    "text": "check_interval"
  }, {
    "label": "C",
    "text": "service_description"
  }, {
    "label": "D",
    "text": "command_line"
  }, {
    "label": "E",
    "text": "host_name"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "define service ブロックでは check_command ディレクティブで、そのサービスの監視に使用するコマンドを指定します。command_line は define command ブロックで実際に実行するコマンドラインを定義するディレクティブです。service_description はサービス名、host_name は対象ホスト、check_interval はチェック間隔を指定します。",
  "answerKeys": ["Nagios のオブジェクト"],
  "answerTexts": ["check_command"],
  "answerHints": ["check_command"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-024",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "MRTG で、SNMP を使用して監視対象機器のインターフェース情報を取得し、MRTG の設定ファイルを自動生成するコマンド名を記述してください。",
  "choices": [],
  "answer": ["cfgmaker"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "cfgmaker は SNMP で監視対象機器に問い合わせ、インターフェースごとのトラフィック監視設定を含む MRTG の設定ファイルを生成します。生成した設定ファイルを mrtg コマンドに与えて定期実行することでトラフィックのグラフが作成されます。複数のグラフをまとめた一覧ページを作るには indexmaker を使用します。",
  "answerKeys": ["MRTG"],
  "answerTexts": ["cfgmaker"],
  "answerHints": ["cfgmaker"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-025",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Cacti の説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "RRDtool を利用してグラフを作成する"
  }, {
    "label": "B",
    "text": "デバイスやグラフなどの設定情報を MySQL（MariaDB）データベースに保存する"
  }, {
    "label": "C",
    "text": "SNMP によるデータ取得には対応していない"
  }, {
    "label": "D",
    "text": "Java で実装されたデスクトップアプリケーションである"
  }, {
    "label": "E",
    "text": "監視対象ホストに NRPE エージェントの導入が必須である"
  }],
  "answer": ["A", "B"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Cacti は PHP で実装された Web ベースのツールで、RRDtool を使用してデータの保存とグラフ作成を行い、設定情報は MySQL（MariaDB）に格納します。データ収集はポーラーが定期的に実行し、SNMP やスクリプトによる取得に対応しています。NRPE は Nagios でリモートチェックを行うためのエージェントであり Cacti の必須要件ではありません。",
  "answerKeys": ["Cacti"],
  "answerTexts": ["RRDtool を利用してグラフを作成する", "デバイスやグラフなどの設定情報を MySQL（MariaDB）データベースに保存する"],
  "answerHints": ["RRDtool", "デバイス"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-026",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "自作した Nagios プラグインが終了ステータス 2 を返しました。Nagios はこのサービスの状態をどのように扱うかを選択してください。",
  "choices": [{
    "label": "A",
    "text": "OK"
  }, {
    "label": "B",
    "text": "WARNING"
  }, {
    "label": "C",
    "text": "UNKNOWN"
  }, {
    "label": "D",
    "text": "PENDING"
  }, {
    "label": "E",
    "text": "CRITICAL"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Nagios プラグインの終了ステータスは 0 が OK、1 が WARNING、2 が CRITICAL、3 が UNKNOWN と決められています。PENDING はまだ一度もチェックが実行されていない状態を表すもので、プラグインの終了ステータスで返すものではありません。",
  "answerKeys": ["自作した Nagios"],
  "answerTexts": ["CRITICAL"],
  "answerHints": ["CRITICAL"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-027",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Nagios の NRPE の役割として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "SNMP エージェントとして MIB 情報を提供する"
  }, {
    "label": "B",
    "text": "複数の Nagios サーバ間で設定ファイルを同期する"
  }, {
    "label": "C",
    "text": "監視対象のリモートホスト上で Nagios プラグインを実行し、その結果を Nagios サーバに返す"
  }, {
    "label": "D",
    "text": "Nagios の監視結果を RRD ファイルに保存してグラフ化する"
  }, {
    "label": "E",
    "text": "Nagios サーバの設定ファイルの文法をチェックする"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "NRPE（Nagios Remote Plugin Executor）は監視対象ホストでデーモンとして動作し、Nagios サーバの check_nrpe からの要求に応じてローカルのプラグインを実行して結果を返します。これによりディスク使用量やロードアベレージなど、外部からは取得できないローカルの情報を監視できます。設定ファイルの文法チェックは nagios -v で行います。",
  "answerKeys": ["Nagios の NRPE"],
  "answerTexts": ["監視対象のリモートホスト上で Nagios プラグインを実行し、その結果を Nagios サーバに返す"],
  "answerHints": ["監視対象の"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-028",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Icinga2 の設定ファイルを編集した後、サービスを再起動する前に設定内容の検証を行うコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "icinga2 check-config"
  }, {
    "label": "B",
    "text": "icinga2 daemon -C"
  }, {
    "label": "C",
    "text": "icinga2 feature enable"
  }, {
    "label": "D",
    "text": "icinga2 feature list"
  }, {
    "label": "E",
    "text": "icinga2 node wizard"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "icinga2 daemon -C は設定ファイルを読み込んで検証のみを行い、エラーがあれば内容を表示します。icinga2 feature enable は機能の有効化、icinga2 feature list は機能の一覧表示、icinga2 node wizard は分散監視のノード設定を対話的に行うコマンドです。check-config というサブコマンドは存在しません。",
  "answerKeys": ["Icinga2"],
  "answerTexts": ["icinga2 daemon -C"],
  "answerHints": ["icinga2 daemon"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-029",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Nagios Core の設定ファイルを変更した後、再起動前に設定の整合性を検証するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "nagios -d /etc/nagios/nagios.cfg"
  }, {
    "label": "B",
    "text": "nagios -s /etc/nagios/nagios.cfg"
  }, {
    "label": "C",
    "text": "systemctl status nagios"
  }, {
    "label": "D",
    "text": "nrpe -c /etc/nagios/nagios.cfg"
  }, {
    "label": "E",
    "text": "nagios -v /etc/nagios/nagios.cfg"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nagios -v はメイン設定ファイルと参照されるオブジェクト定義を読み込み、エラーや警告を検証して表示します。nagios -d はデーモンとして起動するオプション、nagios -s はチェックのスケジューリング情報を表示するオプションです。nrpe -c は NRPE 自身の設定ファイルを指定するもので、systemctl status はサービスの稼働状態を表示するだけで設定は検証しません。",
  "answerKeys": ["Nagios Core"],
  "answerTexts": ["nagios -v /etc/nagios/nagios.cfg"],
  "answerHints": ["nagios -v"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-030",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "容量 1TB のデータ用ファイルシステムの月末時点の使用量を記録したところ、以下のとおりでした。このペースで使用量が増え続けた場合、4月末から数えて満杯になるのはおよそいつ頃かを選択してください。\n\n月末   使用量\n1月    400GB\n2月    450GB\n3月    500GB\n4月    550GB",
  "choices": [{
    "label": "A",
    "text": "約6か月後"
  }, {
    "label": "B",
    "text": "約18か月後"
  }, {
    "label": "C",
    "text": "約12か月後"
  }, {
    "label": "D",
    "text": "約9か月後"
  }, {
    "label": "E",
    "text": "約3か月後"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "使用量は毎月 50GB ずつ直線的に増加しており、4月末時点の空き容量は 1000GB - 550GB = 450GB です。450GB ÷ 50GB/月 = 9 か月となり、約9か月後に満杯になると予測できます。このように収集した傾向データから将来の需要を予測し、満杯になる前に増設などの対策を計画することがキャパシティプランニングです。",
  "answerKeys": ["容量"],
  "answerTexts": ["約9か月後"],
  "answerHints": ["約9"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-031",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Linux カーネルイメージの bzImage に関する説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "big zImage の意味であり、bzip2 で圧縮されていることを示すものではない"
  }, {
    "label": "B",
    "text": "512KB 以下のサイズのカーネルにしか使用できない形式である"
  }, {
    "label": "C",
    "text": "すべてのカーネルモジュールを内包したカーネルイメージである"
  }, {
    "label": "D",
    "text": "圧縮されていないカーネルイメージである"
  }, {
    "label": "E",
    "text": "bzip2 で圧縮されたカーネルイメージであることを示す"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "bzImage は big zImage の略で、圧縮方式に bzip2 を使うことを意味するものではありません。zImage は圧縮後のサイズが約 512KB 以下に制限されますが、bzImage は高位メモリにロードされるためこの制限がありません。圧縮方式は gzip や xz などから選択でき、モジュールはカーネルイメージとは別のファイルとして扱われます。",
  "answerKeys": ["Linux カーネルイメージの"],
  "answerTexts": ["big zImage の意味であり、bzip2 で圧縮されていることを示すものではない"],
  "answerHints": ["big"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-032",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "x86_64 環境でカーネルソースのトップディレクトリから make を実行した場合、生成される bzImage の場所を選択してください。",
  "choices": [{
    "label": "A",
    "text": "arch/x86/bzImage"
  }, {
    "label": "B",
    "text": "/boot/vmlinuz"
  }, {
    "label": "C",
    "text": "arch/x86/boot/bzImage"
  }, {
    "label": "D",
    "text": "boot/x86/bzImage"
  }, {
    "label": "E",
    "text": "bzImage（トップディレクトリ直下）"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "x86 系アーキテクチャでは、ビルドされた圧縮カーネルイメージはソースツリーの arch/x86/boot/bzImage に作成されます。トップディレクトリ直下には非圧縮の vmlinux が作成されますが、bzImage は作成されません。/boot/vmlinuz-バージョン へのコピーは make install などのインストール処理で行われます。",
  "answerKeys": ["x86_64"],
  "answerTexts": ["arch/x86/boot/bzImage"],
  "answerHints": ["arch/x86/boot"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-033",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Linux カーネルのバージョン番号に関する説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "2番目の数字が変わるのはセキュリティ修正のみを含むリリースの場合に限られる"
  }, {
    "label": "B",
    "text": "2.6 系より前は、2番目の数字が奇数の系列が開発版、偶数の系列が安定版を表していた"
  }, {
    "label": "C",
    "text": "4番目の数字は常にディストリビューション独自のビルド番号を表す"
  }, {
    "label": "D",
    "text": "メジャー番号が上がるのは、互換性のない大規模な変更が加わった場合に限られる"
  }, {
    "label": "E",
    "text": "3.0 以降も、2番目の数字が奇数のカーネルは開発版である"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "2.4 系や 2.5 系の時代までは、2番目の数字が偶数なら安定版、奇数なら開発版という規則がありました。2.6 以降、特に 3.0 以降ではこの規則は使われておらず、メジャー番号の変更も大規模な非互換変更を意味するものではありません。修正のみのリリースは 3番目の数字（サブレベル）で表されます。",
  "answerKeys": ["Linux カーネルのバージョン"],
  "answerTexts": ["2.6 系より前は、2番目の数字が奇数の系列が開発版、偶数の系列が安定版を表していた"],
  "answerHints": ["2.6"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-034",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Linux カーネルのソースコードを展開する場所として慣例的に使用され、多くの場合バージョン番号付きのディレクトリへのシンボリックリンクとして作成されるディレクトリを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/usr/local/linux"
  }, {
    "label": "B",
    "text": "/usr/lib/linux"
  }, {
    "label": "C",
    "text": "/boot/linux"
  }, {
    "label": "D",
    "text": "/usr/src/linux"
  }, {
    "label": "E",
    "text": "/lib/modules/linux"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "カーネルソースは慣例的に /usr/src/linux-バージョン に展開され、/usr/src/linux をそこへのシンボリックリンクとして作成します。こうしておくと、外部モジュールのビルドなどで常に /usr/src/linux を参照するだけで済みます。/lib/modules はビルド済みカーネルモジュールの格納先、/boot はカーネルイメージや initramfs の格納先です。",
  "answerKeys": ["Linux カーネルのソースコードを展開する"],
  "answerTexts": ["/usr/src/linux"],
  "answerHints": ["/usr/src"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-035",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "カーネルソースツリーにおいて、カーネルの各機能やカーネルパラメータについての説明文書が格納されているディレクトリを選択してください。",
  "choices": [{
    "label": "A",
    "text": "scripts"
  }, {
    "label": "B",
    "text": "doc"
  }, {
    "label": "C",
    "text": "include"
  }, {
    "label": "D",
    "text": "usr"
  }, {
    "label": "E",
    "text": "Documentation"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "カーネルソースツリーのトップにある Documentation ディレクトリには、カーネルパラメータ、ドライバ、ファイルシステムなどに関する説明文書が格納されています。include はヘッダファイル、scripts はビルドや設定に使用するスクリプト、usr は初期 RAM ディスクの生成に関するファイルを格納するディレクトリで、doc というディレクトリはありません。",
  "answerKeys": ["カーネルソースツリーにおいて"],
  "answerTexts": ["Documentation"],
  "answerHints": ["Documentation"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-036",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Linux カーネルイメージ（bzImage）の圧縮方式として、カーネルの設定で選択できるものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "xz"
  }, {
    "label": "B",
    "text": "zip"
  }, {
    "label": "C",
    "text": "rar"
  }, {
    "label": "D",
    "text": "gzip"
  }, {
    "label": "E",
    "text": "cab"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "カーネルイメージの圧縮方式は CONFIG_KERNEL_GZIP や CONFIG_KERNEL_XZ などで選択でき、ほかに bzip2、lzma、lzo、lz4、zstd もサポートされています。xz は gzip より圧縮率が高くイメージを小さくできますが、展開に時間がかかります。zip、rar、cab はカーネルイメージの圧縮方式としてはサポートされていません。",
  "answerKeys": ["Linux カーネルイメージ（"],
  "answerTexts": ["xz", "gzip"],
  "answerHints": ["xz", "gzip"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-037",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "多くの機能を組み込んだカーネルを make zImage でビルドしたところ、以下のメッセージが表示されて失敗しました。最も適切な対処を選択してください。\n\nSystem is too big. Try using bzImage or modules.",
  "choices": [{
    "label": "A",
    "text": "make bzImage でビルドする"
  }, {
    "label": "B",
    "text": "make zImage を root 権限で再実行する"
  }, {
    "label": "C",
    "text": "make mrproper を実行してから make zImage を再実行する"
  }, {
    "label": "D",
    "text": "make modules_install を先に実行する"
  }, {
    "label": "E",
    "text": "make clean を実行してから make zImage を再実行する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "zImage は低位メモリにロードされるためサイズに制限があり、カーネルが大きすぎるとこのエラーになります。bzImage は高位メモリにロードされるためこの制限がなく、現在の x86 環境では bzImage を使うのが一般的です。権限の問題やモジュールのインストール順序は原因ではなく、make clean や make mrproper で生成ファイルを削除しても同じ設定ではサイズは変わりません。",
  "answerKeys": ["多くの"],
  "answerTexts": ["make bzImage でビルドする"],
  "answerHints": ["make bzImage"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-038",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "カーネルソースのトップディレクトリにある Makefile で、カーネルのバージョン文字列の末尾に独自の文字列（例: -custom）を付加するために編集する変数を選択してください。",
  "choices": [{
    "label": "A",
    "text": "PATCHLEVEL"
  }, {
    "label": "B",
    "text": "NAME"
  }, {
    "label": "C",
    "text": "VERSION"
  }, {
    "label": "D",
    "text": "EXTRAVERSION"
  }, {
    "label": "E",
    "text": "SUBLEVEL"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Makefile の EXTRAVERSION に値を設定すると、uname -r で表示されるバージョン文字列やモジュールのインストール先ディレクトリ名の末尾に付加されます。VERSION、PATCHLEVEL、SUBLEVEL はそれぞれバージョン番号の1番目、2番目、3番目の数字を表し、NAME はリリースのコードネームです。",
  "answerKeys": ["カーネルソースの"],
  "answerTexts": ["EXTRAVERSION"],
  "answerHints": ["EXTRAVERSION"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-039",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "make menuconfig を実行したところエラーになりました。make menuconfig の実行に必要なライブラリを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ncurses"
  }, {
    "label": "B",
    "text": "Qt"
  }, {
    "label": "C",
    "text": "Tcl/Tk"
  }, {
    "label": "D",
    "text": "SDL"
  }, {
    "label": "E",
    "text": "GTK+"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "make menuconfig は端末上でメニュー形式の設定画面を表示するため ncurses ライブラリ（開発用ヘッダを含む）が必要です。Qt は make xconfig、GTK+ は make gconfig で使用されます。Tcl/Tk は古いカーネルの xconfig で使われていたもので、現在の menuconfig には関係しません。",
  "answerKeys": ["make menuconfig"],
  "answerTexts": ["ncurses"],
  "answerHints": ["ncurses"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-040",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "X Window System 上で Qt ベースの GUI を使ってカーネルを設定する make のターゲットを選択してください。",
  "choices": [{
    "label": "A",
    "text": "config"
  }, {
    "label": "B",
    "text": "xconfig"
  }, {
    "label": "C",
    "text": "gconfig"
  }, {
    "label": "D",
    "text": "menuconfig"
  }, {
    "label": "E",
    "text": "nconfig"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "make xconfig は Qt ライブラリを使用したグラフィカルな設定ツールを起動します。gconfig は GTK+ ベースの GUI、menuconfig と nconfig は ncurses ベースのテキストメニュー、config は1項目ずつ質問に答えるテキスト形式の設定方法です。",
  "answerKeys": ["X Window"],
  "answerTexts": ["xconfig"],
  "answerHints": ["xconfig"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-041",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "新しいバージョンのカーネルソースに、旧カーネルで使用していた .config をコピーしました。既存の設定を引き継ぎ、新しいカーネルで追加された設定項目についてのみ質問させたい場合に実行するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "make defconfig"
  }, {
    "label": "B",
    "text": "make mrproper"
  }, {
    "label": "C",
    "text": "make config"
  }, {
    "label": "D",
    "text": "make allyesconfig"
  }, {
    "label": "E",
    "text": "make oldconfig"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "make oldconfig は既存の .config を読み込み、その設定を引き継いだうえで、新しく追加された項目についてのみ対話的に質問します。make config はすべての項目を1つずつ質問し、defconfig はアーキテクチャのデフォルト設定で .config を作成します。mrproper は .config も含めて削除し、allyesconfig は可能な項目をすべて有効にします。",
  "answerKeys": ["新しいバージョン"],
  "answerTexts": ["make oldconfig"],
  "answerHints": ["make oldconfig"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-042",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "現在稼働中のカーネルの設定を基に新しいカーネルをビルドするため、/boot/config-$(uname -r) をコピーします。カーネルソースが /usr/src/linux にある場合のコピー先を選択してください。",
  "choices": [{
    "label": "A",
    "text": "/usr/src/linux/config"
  }, {
    "label": "B",
    "text": "/etc/kernel/.config"
  }, {
    "label": "C",
    "text": "/usr/src/linux/.config"
  }, {
    "label": "D",
    "text": "/usr/src/linux/arch/x86/.config"
  }, {
    "label": "E",
    "text": "/lib/modules/$(uname -r)/.config"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "カーネルのビルド設定はソースツリーのトップディレクトリにある .config ファイルに保存されるため、/usr/src/linux/.config としてコピーします。その後 make oldconfig などを実行して新しいバージョンに合わせて設定を更新します。ドットなしの config やアーキテクチャのディレクトリ内に置いても、ビルド時の設定としては読み込まれません。",
  "answerKeys": ["現在稼働中のカーネル"],
  "answerTexts": ["/usr/src/linux/.config"],
  "answerHints": ["/usr/src/linux/.config"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-043",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "make modules_install を実行した際に、カーネルモジュールがインストールされるディレクトリを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/usr/lib/kernel/カーネルバージョン/"
  }, {
    "label": "B",
    "text": "/boot/modules/"
  }, {
    "label": "C",
    "text": "/etc/modules/カーネルバージョン/"
  }, {
    "label": "D",
    "text": "/lib/modules/カーネルバージョン/"
  }, {
    "label": "E",
    "text": "/usr/src/linux/modules/"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "make modules_install はビルドしたモジュールを /lib/modules/カーネルバージョン/ 以下にインストールし、depmod を実行してモジュールの依存関係ファイルを更新します。ディレクトリ名のバージョン文字列には Makefile の EXTRAVERSION なども含まれます。/boot にはカーネルイメージや initramfs が置かれ、モジュールは置かれません。",
  "answerKeys": ["make modules_install"],
  "answerTexts": ["/lib/modules/カーネルバージョン/"],
  "answerHints": ["/lib"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-044",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": ".config の作成が完了したカーネルソースから、カーネルのビルドとインストールを行う手順として正しい順序を選択してください。",
  "choices": [{
    "label": "A",
    "text": "make → make install → make mrproper"
  }, {
    "label": "B",
    "text": "make → make modules_install → make install"
  }, {
    "label": "C",
    "text": "make install → make → make modules_install"
  }, {
    "label": "D",
    "text": "make mrproper → make modules_install → make"
  }, {
    "label": "E",
    "text": "make modules_install → make → make install"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "まず make でカーネルイメージとモジュールをビルドし、make modules_install でモジュールを /lib/modules 以下にインストールしてから、make install でカーネルイメージを /boot にインストールします。make install の過程で initramfs が作成される環境では、先にモジュールがインストールされている必要があります。ビルド前にインストールを行うことはできず、make mrproper は .config まで削除してしまいます。",
  "answerKeys": ["."],
  "answerTexts": ["make → make modules_install → make install"],
  "answerHints": ["make → make modules_install"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-045",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "カーネルソースツリーから、ビルドで生成されたファイルに加えて .config ファイルも含めて削除し、展開直後に近い状態に戻す make のターゲットを選択してください。",
  "choices": [{
    "label": "A",
    "text": "install"
  }, {
    "label": "B",
    "text": "modules_prepare"
  }, {
    "label": "C",
    "text": "clean"
  }, {
    "label": "D",
    "text": "oldconfig"
  }, {
    "label": "E",
    "text": "mrproper"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "make mrproper は生成されたファイルのほか、.config やバックアップファイルも削除してソースツリーを初期状態に戻します。make clean は多くの生成ファイルを削除しますが .config は残るため、設定を保持したまま再ビルドする場合に使います。必要な .config は mrproper の実行前に別の場所へ退避しておく必要があります。",
  "answerKeys": ["カーネルソースツリーから"],
  "answerTexts": ["mrproper"],
  "answerHints": ["mrproper"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-046",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "初期 RAM ディスク（initrd / initramfs）のイメージを作成するために使用されるコマンドを選択してください。（3つ選択）",
  "choices": [{
    "label": "A",
    "text": "mkinitramfs"
  }, {
    "label": "B",
    "text": "depmod"
  }, {
    "label": "C",
    "text": "dracut"
  }, {
    "label": "D",
    "text": "mkinitrd"
  }, {
    "label": "E",
    "text": "mkswap"
  }],
  "answer": ["A", "C", "D"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mkinitrd は主に古い Red Hat 系や SUSE 系、dracut は現在の Red Hat 系などで使われ、mkinitramfs は Debian 系で使われる initramfs 作成コマンドです。depmod はカーネルモジュールの依存関係ファイル（modules.dep）を作成するコマンド、mkswap はスワップ領域を初期化するコマンドです。",
  "answerKeys": ["初期"],
  "answerTexts": ["mkinitramfs", "dracut", "mkinitrd"],
  "answerHints": ["mkinitramfs", "dracut", "mkinitrd"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-047",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "initramfs を再作成するため dracut を実行したところ、以下のメッセージが表示されて処理が行われませんでした。既存のファイルを上書きして作成するために追加すべきオプションを選択してください。\n\n# dracut /boot/initramfs-5.14.0-362.el9.x86_64.img 5.14.0-362.el9.x86_64\ndracut: Will not override existing initramfs\n(/boot/initramfs-5.14.0-362.el9.x86_64.img) without --force",
  "choices": [{
    "label": "A",
    "text": "--force"
  }, {
    "label": "B",
    "text": "--kver"
  }, {
    "label": "C",
    "text": "--overwrite"
  }, {
    "label": "D",
    "text": "--replace"
  }, {
    "label": "E",
    "text": "-o"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dracut は既存の initramfs ファイルがある場合、--force（-f）を指定しない限り上書きしません。-o は --omit の短縮形で、指定した dracut モジュールを除外するオプションです。--kver は対象のカーネルバージョンを指定するオプションで上書きとは関係がなく、--overwrite や --replace というオプションはありません。",
  "answerKeys": ["initramfs を"],
  "answerTexts": ["--force"],
  "answerHints": ["--force"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-048",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Debian 系のディストリビューションで mkinitramfs を使用して initramfs を作成する際に、出力先のファイル名を指定するオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-O"
  }, {
    "label": "B",
    "text": "-k"
  }, {
    "label": "C",
    "text": "-o"
  }, {
    "label": "D",
    "text": "-f"
  }, {
    "label": "E",
    "text": "-d"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mkinitramfs は「mkinitramfs -o /boot/initrd.img-バージョン バージョン」のように -o で出力ファイルを指定します。-k は作業用の一時ディレクトリを削除せずに残すオプション、-d は設定ディレクトリを指定するオプションです。既存の initramfs を更新する場合は、通常 update-initramfs -u を使用します。",
  "answerKeys": ["Debian 系のディストリビューション"],
  "answerTexts": ["-o"],
  "answerHints": ["-o"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-049",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "DKMS（Dynamic Kernel Module Support）の説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "initramfs の作成専用のツールである"
  }, {
    "label": "B",
    "text": "カーネル本体のイメージ（bzImage）を自動的に再ビルドする仕組みである"
  }, {
    "label": "C",
    "text": "モジュールはバイナリ形式でのみ配布され、ソースコードは不要である"
  }, {
    "label": "D",
    "text": "新しいカーネルをインストールした際に、登録済みのサードパーティ製モジュールを自動的に再ビルドできる"
  }, {
    "label": "E",
    "text": "管理対象のモジュールのソースコードは通常 /usr/src/モジュール名-バージョン に配置される"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "DKMS はカーネル本体のソースツリー外で提供されるモジュールを管理し、カーネルの更新時に自動的に再ビルドしてインストールします。モジュールのソースは /usr/src/モジュール名-バージョン に置かれ、dkms.conf にビルド方法が記述されます。再ビルドするのはモジュールのみでカーネル本体ではなく、ビルドにはソースコードとカーネルヘッダが必要です。",
  "answerKeys": ["DKMS"],
  "answerTexts": ["新しいカーネルをインストールした際に、登録済みのサードパーティ製モジュールを自動的に再ビルドできる", "管理対象のモジュールのソースコードは通常 /usr/src/モジュール名-バージョン に配置される"],
  "answerHints": ["新しい", "管理対象の"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-050",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "カーネルのビルド後に make install を実行した際に行われる処理として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "カーネルソースを /usr/src/linux にコピーする"
  }, {
    "label": "B",
    "text": "カーネルモジュールを /lib/modules 以下にインストールする"
  }, {
    "label": "C",
    "text": "System.map を /boot にコピーする"
  }, {
    "label": "D",
    "text": ".config をデフォルト設定で初期化する"
  }, {
    "label": "E",
    "text": "カーネルイメージを /boot にコピーする"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "make install はビルド済みのカーネルイメージを /boot/vmlinuz-バージョン として、System.map を /boot/System.map-バージョン としてコピーします。ディストリビューションによっては installkernel を通じて initramfs の作成やブートローダの設定更新も行われます。モジュールのインストールは make modules_install で別途行う必要があります。",
  "answerKeys": ["カーネルの"],
  "answerTexts": ["System.map を /boot にコピーする", "カーネルイメージを /boot にコピーする"],
  "answerHints": ["System", "カーネルイメージ"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-051",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "サードパーティ製のカーネルモジュールを格納するため、/lib/modules/ 配下にある現在稼働中のカーネル用ディレクトリ名を確認したい。ディレクトリ名と一致する文字列を表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "uname -m"
  }, {
    "label": "B",
    "text": "uname -v"
  }, {
    "label": "C",
    "text": "uname -o"
  }, {
    "label": "D",
    "text": "uname -n"
  }, {
    "label": "E",
    "text": "uname -r"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "uname -r はカーネルリリース（例: 5.14.0-427.el9.x86_64）を表示し、/lib/modules/$(uname -r) の形でモジュールディレクトリの指定にも使われます。uname -v はカーネルのビルド番号や日時、uname -m はハードウェアアーキテクチャ、uname -n はホスト名、uname -o はOS名を表示します。",
  "answerKeys": ["サードパーティ"],
  "answerTexts": ["uname -r"],
  "answerHints": ["uname -r"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-052",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "lsmod コマンドが表示する情報の取得元として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/proc/devices"
  }, {
    "label": "B",
    "text": "/proc/modules"
  }, {
    "label": "C",
    "text": "/sys/kernel/modules.list"
  }, {
    "label": "D",
    "text": "/lib/modules/$(uname -r)/modules.dep"
  }, {
    "label": "E",
    "text": "/etc/modules-load.d/"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lsmod は /proc/modules の内容を整形して、ロード済みモジュール名・サイズ・使用数・依存元モジュールを表示します。modules.dep は modprobe が依存関係の解決に使うファイルで、ロード状態は記録されていません。/proc/devices はキャラクタ/ブロックデバイスのメジャー番号一覧です。",
  "answerKeys": ["lsmod"],
  "answerTexts": ["/proc/modules"],
  "answerHints": ["/proc/modules"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-053",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "モジュール snd_hda_intel を、使用されなくなった依存モジュールとともにアンロードしたい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "modprobe -r snd_hda_intel"
  }, {
    "label": "B",
    "text": "insmod -r snd_hda_intel"
  }, {
    "label": "C",
    "text": "depmod -r snd_hda_intel"
  }, {
    "label": "D",
    "text": "modprobe -u snd_hda_intel"
  }, {
    "label": "E",
    "text": "rmmod -a snd_hda_intel"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "modprobe -r は指定したモジュールを削除し、そのモジュールのために読み込まれて使われなくなった依存モジュールも合わせて削除します。rmmod は指定したモジュール1つだけを削除し、依存関係は処理しません。insmod や depmod にはモジュールを削除する機能はありません。",
  "answerKeys": ["モジュール snd_hda_intel"],
  "answerTexts": ["modprobe -r snd_hda_intel"],
  "answerHints": ["modprobe -r"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-054",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "管理者が次のコマンドでモジュールをロードしようとしたところ、エラーとなった。同じモジュールを正常にロードするための対処として最も適切なものを選択してください。\n\n# insmod /lib/modules/$(uname -r)/kernel/fs/xfs/xfs.ko\ninsmod: ERROR: could not insert module xfs.ko: Unknown symbol in module",
  "choices": [{
    "label": "A",
    "text": "insmod に -f オプションを付けて強制的にロードする"
  }, {
    "label": "B",
    "text": "rmmod xfs を実行してから再度 insmod を実行する"
  }, {
    "label": "C",
    "text": "modinfo xfs を実行してシンボル情報を登録する"
  }, {
    "label": "D",
    "text": "modprobe xfs を実行し、依存モジュールも自動的にロードさせる"
  }, {
    "label": "E",
    "text": "lsmod の出力に xfs を追加してから insmod を実行する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "insmod は指定したファイルをそのままロードするだけで依存関係を解決しないため、依存モジュールが未ロードだと Unknown symbol エラーになります。modprobe は modules.dep を参照して必要な依存モジュールを先にロードします。modinfo はモジュール情報を表示するだけで、ロード状態には影響しません。",
  "answerKeys": ["管理者が次の"],
  "answerTexts": ["modprobe xfs を実行し、依存モジュールも自動的にロードさせる"],
  "answerHints": ["modprobe"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-055",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "モジュール e1000e の .ko ファイルがファイルシステム上のどこにあるかだけを表示したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "modinfo -d e1000e"
  }, {
    "label": "B",
    "text": "depmod -n e1000e"
  }, {
    "label": "C",
    "text": "modinfo -n e1000e"
  }, {
    "label": "D",
    "text": "modinfo -p e1000e"
  }, {
    "label": "E",
    "text": "lsmod -n e1000e"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "modinfo -n（--filename）はモジュールファイルのパスのみを表示します。modinfo -p はモジュールパラメータ、-d は説明文を表示します。lsmod には特定モジュールのパスを表示する機能はなく、depmod -n は依存関係ファイルの内容をファイルに書き込まずに標準出力へ出力するオプションです。",
  "answerKeys": ["モジュール e1000e"],
  "answerTexts": ["modinfo -n e1000e"],
  "answerHints": ["modinfo -n"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-056",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "自作したカーネルモジュール mydrv.ko を /lib/modules/$(uname -r)/extra/ にコピーしたが、modprobe mydrv を実行すると「Module mydrv not found」と表示される。最初に実行すべきコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "sysctl -p"
  }, {
    "label": "B",
    "text": "modinfo -a mydrv"
  }, {
    "label": "C",
    "text": "lsmod -u"
  }, {
    "label": "D",
    "text": "ldconfig"
  }, {
    "label": "E",
    "text": "depmod -a"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "modprobe は /lib/modules/$(uname -r)/modules.dep などの索引ファイルを参照してモジュールを探すため、新しいモジュールを追加した後は depmod で索引を再生成する必要があります。ldconfig は共有ライブラリのキャッシュを更新するコマンドで、カーネルモジュールとは無関係です。sysctl -p はカーネルパラメータを読み込むコマンドです。",
  "answerKeys": ["自作したカーネルモジュール"],
  "answerTexts": ["depmod -a"],
  "answerHints": ["depmod"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-057",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "プロプライエタリなGPUドライバを使用するため、オープンソースのドライバ nouveau が起動時に自動ロードされないようにしたい。/etc/modprobe.d/ 配下の設定ファイルに記述する内容として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "exclude nouveau"
  }, {
    "label": "B",
    "text": "disable nouveau"
  }, {
    "label": "C",
    "text": "deny nouveau"
  }, {
    "label": "D",
    "text": "blacklist nouveau"
  }, {
    "label": "E",
    "text": "noload nouveau"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "blacklist ディレクティブは、エイリアス経由でのモジュールの自動ロードを抑止します。disable、exclude、noload、deny といったディレクティブは modprobe.d の設定には存在しません。なお blacklist は modprobe nouveau のような明示的なロードまでは防がない点に注意が必要です。",
  "answerKeys": ["プロプライエタリ"],
  "answerTexts": ["blacklist nouveau"],
  "answerHints": ["blacklist"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-058",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "bonding モジュールがロードされるとき、常にパラメータ mode=1 と miimon=100 が渡されるようにしたい。/etc/modprobe.d/bonding.conf に記述する行として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "option bonding mode=1 miimon=100"
  }, {
    "label": "B",
    "text": "options bonding mode=1 miimon=100"
  }, {
    "label": "C",
    "text": "alias bonding mode=1 miimon=100"
  }, {
    "label": "D",
    "text": "bonding.options = mode=1 miimon=100"
  }, {
    "label": "E",
    "text": "options bonding mode=1,miimon=100"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "モジュールパラメータは「options モジュール名 パラメータ=値 ...」の形式で、複数のパラメータは空白で区切って記述します。ディレクティブ名は options（複数形）であり option ではありません。alias はモジュールの別名を定義するディレクティブです。",
  "answerKeys": ["bonding"],
  "answerTexts": ["options bonding mode=1 miimon=100"],
  "answerHints": ["options bonding mode=1 miimon"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-059",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "再起動せずに、稼働中のシステムで IPv4 のパケット転送を即座に有効にする方法として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "sysctl -w net.ipv4.ip_forward=1"
  }, {
    "label": "B",
    "text": "echo 1 > /sys/net/ipv4/ip_forward"
  }, {
    "label": "C",
    "text": "echo 1 > /proc/sys/net/ipv4/ip_forward"
  }, {
    "label": "D",
    "text": "/etc/sysctl.conf に net.ipv4.ip_forward = 1 を追記する"
  }, {
    "label": "E",
    "text": "modprobe ip_forward"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sysctl -w による設定と /proc/sys/net/ipv4/ip_forward への書き込みは、どちらも稼働中のカーネルに即時に反映されます。/etc/sysctl.conf に追記しただけでは、sysctl -p を実行するか再起動するまで反映されません。/sys/net/ipv4/ip_forward というパスは存在せず、ip_forward というモジュールもありません。",
  "answerKeys": ["再起動せずに"],
  "answerTexts": ["sysctl -w net.ipv4.ip_forward=1", "echo 1 > /proc/sys/net/ipv4/ip_forward"],
  "answerHints": ["sysctl", "echo 1 > /proc"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-060",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "管理者が /etc/sysctl.conf に vm.swappiness = 10 を追記した。再起動せずにこのファイルの設定内容を稼働中のカーネルに反映させるコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "sysctl -n"
  }, {
    "label": "B",
    "text": "sysctl -a"
  }, {
    "label": "C",
    "text": "sysctl -p"
  }, {
    "label": "D",
    "text": "sysctl -r"
  }, {
    "label": "E",
    "text": "sysctl --save"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sysctl -p はファイル名を省略すると /etc/sysctl.conf を読み込み、記述されたパラメータを設定します。sysctl -a は現在のすべてのパラメータを表示するだけです。sysctl -n は値のみを表示する（キー名を省略する）オプションで、設定ファイルの読み込みは行いません。",
  "answerKeys": ["管理者が /"],
  "answerTexts": ["sysctl -p"],
  "answerHints": ["sysctl -p"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-061",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "カーネルパラメータ vm.swappiness の現在値を cat コマンドで直接確認したい。参照すべきファイルを絶対パスで記述してください。",
  "choices": [],
  "answer": ["/proc/sys/vm/swappiness"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sysctl のキー名はドットをスラッシュに置き換えることで /proc/sys 配下のファイルパスに対応します。したがって vm.swappiness は /proc/sys/vm/swappiness です。このファイルに値を書き込むと、sysctl -w と同様に即時に反映されます。",
  "answerKeys": ["カーネルパラメータ vm"],
  "answerTexts": ["/proc/sys/vm/swappiness"],
  "answerHints": ["/proc/sys/vm/swappiness"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-062",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "トラブルシューティングの前にカーネルリングバッファの内容を表示し、表示後にバッファを消去したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "dmesg -c"
  }, {
    "label": "B",
    "text": "dmesg -w"
  }, {
    "label": "C",
    "text": "dmesg -C"
  }, {
    "label": "D",
    "text": "dmesg -n 1"
  }, {
    "label": "E",
    "text": "dmesg -T"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dmesg -c はリングバッファの内容を表示した後に消去します。dmesg -C は表示せずに消去だけを行います。-T はタイムスタンプを人が読める日時形式で表示し、-w は新しいメッセージを待ち受けて表示し続け、-n はコンソールに出力するログレベルを設定します。",
  "answerKeys": ["トラブルシューティング"],
  "answerTexts": ["dmesg -c"],
  "answerHints": ["dmesg -c"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-063",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "USBメモリを抜き差ししたときに、カーネルが送出する uevent と udev が処理したイベントをリアルタイムに確認したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "udevadm trigger"
  }, {
    "label": "B",
    "text": "udevadm test"
  }, {
    "label": "C",
    "text": "udevadm settle"
  }, {
    "label": "D",
    "text": "udevadm control --reload"
  }, {
    "label": "E",
    "text": "udevadm monitor"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "udevadm monitor はカーネルの uevent（KERNEL）と udev のルール処理後のイベント（UDEV）を監視して表示します。udevadm trigger はイベントを人為的に再送出し、udevadm settle はイベントキューが空になるまで待機します。udevadm control --reload はルールファイルを再読み込みするためのコマンドです。",
  "answerKeys": ["USB"],
  "answerTexts": ["udevadm monitor"],
  "answerHints": ["udevadm monitor"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-064",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "特定の外付けディスク /dev/sdb 用に udev ルールを作成するため、そのデバイスと親デバイスが持つ属性（ATTRS{serial} など）を階層的にすべて確認したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "udevadm trigger -n /dev/sdb"
  }, {
    "label": "B",
    "text": "lsusb -a /dev/sdb"
  }, {
    "label": "C",
    "text": "udevadm info -a -n /dev/sdb"
  }, {
    "label": "D",
    "text": "udevadm monitor -a /dev/sdb"
  }, {
    "label": "E",
    "text": "udevadm settle /dev/sdb"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "udevadm info -a（--attribute-walk）は、指定デバイスからデバイスツリーをさかのぼって親デバイスまでの属性を表示し、udev ルールの一致条件を作成する際に役立ちます。-n でデバイスノード名を指定します。udevadm monitor はイベント監視用、udevadm trigger はイベント再送出用のコマンドです。",
  "answerKeys": ["特定の"],
  "answerTexts": ["udevadm info -a -n /dev/sdb"],
  "answerHints": ["udevadm info"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-065",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "udev ルールに関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "/etc/udev/rules.d/ にあるファイルは、/lib/udev/rules.d/ にある同名のファイルよりも優先される"
  }, {
    "label": "B",
    "text": "ルールファイルは数値の大きいファイル名から順に処理される"
  }, {
    "label": "C",
    "text": "ルールファイルを編集すると、次回起動時まで変更は反映されない"
  }, {
    "label": "D",
    "text": "ルールの記述では == が一致条件の比較、= が値の代入を表す"
  }, {
    "label": "E",
    "text": "ルールファイルの拡張子は .conf でなければならない"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/udev/rules.d/ に同名のファイルを置くと、ディストリビューション提供の /lib/udev/rules.d/（または /usr/lib/udev/rules.d/）のファイルを上書きできます。== や != は一致条件、= や += は代入・追加に使います。ルールファイルの拡張子は .rules で、ファイル名の辞書順に処理され、udevadm control --reload などで再起動なしに反映できます。",
  "answerKeys": ["udev ルール"],
  "answerTexts": ["/etc/udev/rules.d/ にあるファイルは、/lib/udev/rules.d/ にある同名のファイルよりも優先される", "ルールの記述では == が一致条件の比較、= が値の代入を表す"],
  "answerHints": ["/etc", "ルールの"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-066",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/udev/rules.d/99-backup.rules に次のルールを記述した。対象のディスクを接続したときの動作として正しいものを選択してください。\n\nSUBSYSTEM==\"block\", ATTRS{serial}==\"4C530001230715117432\", SYMLINK+=\"backupdisk\"",
  "choices": [{
    "label": "A",
    "text": "/dev/disk/by-label/backupdisk というリンクのみが作成される"
  }, {
    "label": "B",
    "text": "/dev/backupdisk というシンボリックリンクが追加作成される"
  }, {
    "label": "C",
    "text": "/backupdisk ディレクトリに自動的にマウントされる"
  }, {
    "label": "D",
    "text": "デバイスノード名が /dev/sdX から /dev/backupdisk に変更される"
  }, {
    "label": "E",
    "text": "シリアル番号が backupdisk に書き換えられる"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SYMLINK+= はデバイスノードを指すシンボリックリンクを /dev 配下に追加します。元の /dev/sdX というノード名は変わらず、名前を変えるには NAME を使います（ブロックデバイスでは通常変更できません）。udev ルールのこの記述だけではマウント処理は行われません。",
  "answerKeys": ["/etc/udev"],
  "answerTexts": ["/dev/backupdisk というシンボリックリンクが追加作成される"],
  "answerHints": ["/dev/backupdisk"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-067",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ネットワークカードが正しく動作しないため、PCIデバイスごとに現在使用中のカーネルドライバと利用可能なカーネルモジュールを確認したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "lspci -k"
  }, {
    "label": "B",
    "text": "lspci -t"
  }, {
    "label": "C",
    "text": "lspci -n"
  }, {
    "label": "D",
    "text": "lsusb -v"
  }, {
    "label": "E",
    "text": "lsmod -k"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lspci -k は各PCIデバイスについて「Kernel driver in use」と「Kernel modules」を表示します。lspci -t はバス構造をツリー表示し、lspci -n はベンダIDとデバイスIDを数値で表示します。lsusb はUSBデバイス用のコマンドです。",
  "answerKeys": ["ネットワークカード"],
  "answerTexts": ["lspci -k"],
  "answerHints": ["lspci -k"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-068",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "lsdev コマンドがハードウェア情報を収集するために読み取るファイルを選択してください。（3つ選択）",
  "choices": [{
    "label": "A",
    "text": "/proc/modules"
  }, {
    "label": "B",
    "text": "/proc/cmdline"
  }, {
    "label": "C",
    "text": "/proc/interrupts"
  }, {
    "label": "D",
    "text": "/proc/dma"
  }, {
    "label": "E",
    "text": "/proc/ioports"
  }],
  "answer": ["C", "D", "E"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lsdev は /proc/interrupts、/proc/ioports、/proc/dma からIRQ、I/Oポート、DMAチャネルの情報を集め、デバイスごとに一覧表示します。/proc/modules は lsmod が参照するファイルで、/proc/cmdline は起動時のカーネルパラメータを保持するファイルです。",
  "answerKeys": ["lsdev"],
  "answerTexts": ["/proc/interrupts", "/proc/dma", "/proc/ioports"],
  "answerHints": ["/proc/interrupts", "/proc/dma", "/proc/ioports"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-069",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "systemd を採用したサーバーで、次回以降の起動時にGUIを起動せずテキストモードのマルチユーザー環境で起動するよう設定したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "systemctl get-default multi-user.target"
  }, {
    "label": "B",
    "text": "systemctl isolate multi-user.target"
  }, {
    "label": "C",
    "text": "systemctl default multi-user.target"
  }, {
    "label": "D",
    "text": "systemctl set-default multi-user.target"
  }, {
    "label": "E",
    "text": "systemctl enable multi-user.target"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemctl set-default は default.target のシンボリックリンクを変更し、次回起動時のデフォルトターゲットを設定します。systemctl isolate は現在の状態を即座に切り替えるだけで、デフォルト設定は変わりません。systemctl get-default は現在のデフォルトターゲットを表示するコマンドです。",
  "answerKeys": ["systemd を採用したサーバー"],
  "answerTexts": ["systemctl set-default multi-user.target"],
  "answerHints": ["systemctl set"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-070",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "稼働中のシステムを再起動せずに、今すぐレスキューモード（シングルユーザーモード相当）に切り替えたい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "systemctl set-default rescue.target"
  }, {
    "label": "B",
    "text": "systemctl reload rescue.target"
  }, {
    "label": "C",
    "text": "systemctl show rescue.target"
  }, {
    "label": "D",
    "text": "systemctl enable rescue.target"
  }, {
    "label": "E",
    "text": "systemctl isolate rescue.target"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemctl isolate は指定したターゲットとその依存ユニットを起動し、それ以外のユニットを停止して即座に状態を切り替えます。set-default は次回起動時のデフォルトを変えるだけです。enable はユニットの自動起動を設定し、show はユニットのプロパティを表示するもので、いずれも状態の切り替えは行いません。",
  "answerKeys": ["稼働中のシステムを"],
  "answerTexts": ["systemctl isolate rescue.target"],
  "answerHints": ["systemctl isolate"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-071",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "SysV init のランレベルと systemd のターゲットの対応として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "ランレベル1 ― emergency.target"
  }, {
    "label": "B",
    "text": "ランレベル0 ― poweroff.target"
  }, {
    "label": "C",
    "text": "ランレベル3 ― multi-user.target"
  }, {
    "label": "D",
    "text": "ランレベル5 ― multi-user.target"
  }, {
    "label": "E",
    "text": "ランレベル6 ― halt.target"
  }],
  "answer": ["B", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemd では runlevel3.target が multi-user.target、runlevel0.target が poweroff.target へのエイリアスとして用意されています。ランレベル1に対応するのは rescue.target、ランレベル6は reboot.target、ランレベル5は graphical.target です。",
  "answerKeys": ["SysV init のランレベルと systemd"],
  "answerTexts": ["ランレベル0 ― poweroff.target", "ランレベル3 ― multi-user.target"],
  "answerHints": ["ランレベル0", "ランレベル3"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-072",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "次のユニットファイルを作成し、systemctl enable myapp.service を実行したい。空欄（X）に入るディレクティブとして正しいものを選択してください。\n\n[Unit]\nDescription=My Application\nAfter=network.target\n\n[Service]\nExecStart=/usr/local/bin/myapp\nRestart=on-failure\n\n[Install]\n(X)=multi-user.target",
  "choices": [{
    "label": "A",
    "text": "PartOf"
  }, {
    "label": "B",
    "text": "WantedBy"
  }, {
    "label": "C",
    "text": "Wants"
  }, {
    "label": "D",
    "text": "RequiredBy"
  }, {
    "label": "E",
    "text": "Requires"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "[Install] セクションの WantedBy=multi-user.target により、systemctl enable 実行時に multi-user.target.wants/ にシンボリックリンクが作成されます。Wants= や Requires= は [Unit] セクションに記述する依存関係のディレクティブです。RequiredBy= も [Install] で使えますが、強い依存関係となるため通常のサービスの自動起動には WantedBy= を使います。",
  "answerKeys": ["次のユニットファイル"],
  "answerTexts": ["WantedBy"],
  "answerHints": ["WantedBy"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-073",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "/etc/systemd/system/ に置いたユニットファイルを編集した。変更を systemd に認識させるために実行するコマンドを、引数を含めて記述してください。",
  "choices": [],
  "answer": ["systemctl daemon-reload"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemctl daemon-reload はすべてのユニットファイルを再読み込みし、依存関係ツリーを再構築します。これを実行しないと、変更前の定義のまま動作し続けます。systemctl reload はサービス自身の設定を再読み込みさせるもので、ユニットファイルの再読み込みではありません。",
  "answerKeys": ["/etc/systemd"],
  "answerTexts": ["systemctl daemon-reload"],
  "answerHints": ["systemctl daemon-reload"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-074",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "WantedBy=multi-user.target を持つ sshd.service に対して systemctl enable sshd.service を実行した。このとき作成されるものとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/rc3.d/S55sshd へのシンボリックリンク"
  }, {
    "label": "B",
    "text": "/usr/lib/systemd/system/multi-user.target 内への sshd.service の追記"
  }, {
    "label": "C",
    "text": "/etc/systemd/system/multi-user.target.wants/sshd.service へのシンボリックリンク"
  }, {
    "label": "D",
    "text": "/run/systemd/system/sshd.service のコピー"
  }, {
    "label": "E",
    "text": "/etc/systemd/system/sshd.service.d/enable.conf ファイル"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemctl enable は [Install] セクションの WantedBy= に従い、/etc/systemd/system/multi-user.target.wants/ にユニットファイルへのシンボリックリンクを作成します。ターゲットのユニットファイル自体は書き換えられません。/run/systemd/system/ は実行時に生成される一時的なユニット用のディレクトリです。",
  "answerKeys": ["WantedBy"],
  "answerTexts": ["/etc/systemd/system/multi-user.target.wants/sshd.service へのシンボリックリンク"],
  "answerHints": ["/etc/systemd/system/multi"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-075",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "サービス cups.service を、手動での systemctl start や他ユニットからの依存によっても起動できないようにしたい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "systemctl disable cups.service"
  }, {
    "label": "B",
    "text": "systemctl kill cups.service"
  }, {
    "label": "C",
    "text": "systemctl stop cups.service"
  }, {
    "label": "D",
    "text": "systemctl mask cups.service"
  }, {
    "label": "E",
    "text": "systemctl isolate cups.service"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemctl mask はユニットファイルを /dev/null へのシンボリックリンクに置き換え、手動起動や依存による起動も含めて一切起動できなくします。disable は自動起動の設定を外すだけで、手動や依存による起動は可能です。stop や kill は現在動作中のプロセスを停止するだけです。",
  "answerKeys": ["サービス"],
  "answerTexts": ["systemctl mask cups.service"],
  "answerHints": ["systemctl mask"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-076",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "同じ名前のユニットファイル httpd.service が次の3か所に存在する場合、systemd が実際に使用するものを選択してください。\n\n/usr/lib/systemd/system/httpd.service\n/run/systemd/system/httpd.service\n/etc/systemd/system/httpd.service",
  "choices": [{
    "label": "A",
    "text": "/etc/systemd/system/httpd.service"
  }, {
    "label": "B",
    "text": "最も更新日時が新しいファイル"
  }, {
    "label": "C",
    "text": "3つのファイルの内容がすべて結合されたもの"
  }, {
    "label": "D",
    "text": "/usr/lib/systemd/system/httpd.service"
  }, {
    "label": "E",
    "text": "/run/systemd/system/httpd.service"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ユニットファイルの優先順位は /etc/systemd/system が最も高く、次に /run/systemd/system、最後にパッケージが提供する /usr/lib/systemd/system です。管理者による変更は /etc/systemd/system に置くことでパッケージ側の定義を上書きできます。ファイルの内容が結合されるのは、.d ディレクトリのドロップインファイルを使った場合です。",
  "answerKeys": ["同じ"],
  "answerTexts": ["/etc/systemd/system/httpd.service"],
  "answerHints": ["/etc"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-077",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "systemd ユニットファイルの [Unit] セクションで使用する依存関係・順序のディレクティブに関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "WantedBy= は [Unit] セクションに記述して弱い依存関係を定義する"
  }, {
    "label": "B",
    "text": "Wants= で指定したユニットの起動に失敗しても、このユニットの起動は継続される"
  }, {
    "label": "C",
    "text": "Before=foo.service と記述すると、foo.service がこのユニットより先に起動する"
  }, {
    "label": "D",
    "text": "Requires= を指定すると、自動的に指定したユニットの後に起動するよう順序付けされる"
  }, {
    "label": "E",
    "text": "After= は起動順序のみを指定し、指定したユニットを起動させる効果はない"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "After= と Before= は順序だけを決めるディレクティブで、依存ユニットの起動は Wants= や Requires= で指定します。Wants= は弱い依存関係なので、相手の起動に失敗しても自身の起動は継続します。Requires= は順序を含まないため、通常は After= と組み合わせて使います。Before=foo.service はこのユニットが foo.service より先に起動する意味で、WantedBy= は [Install] セクションのディレクティブです。",
  "answerKeys": ["systemd ユニットファイル"],
  "answerTexts": ["Wants= で指定したユニットの起動に失敗しても、このユニットの起動は継続される", "After= は起動順序のみを指定し、指定したユニットを起動させる効果はない"],
  "answerHints": ["Wants", "After"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-078",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "すべてのユニットファイルについて、enabled、disabled、static、masked などの自動起動の設定状態を一覧表示したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "systemctl list-units"
  }, {
    "label": "B",
    "text": "systemctl show --all"
  }, {
    "label": "C",
    "text": "systemctl list-jobs"
  }, {
    "label": "D",
    "text": "systemctl list-unit-files"
  }, {
    "label": "E",
    "text": "systemctl list-dependencies"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemctl list-unit-files はインストールされているユニットファイルと、その有効化状態（enabled、disabled、static、masked など）を表示します。systemctl list-units はメモリに読み込まれているユニットの実行状態（active、failed など）を表示するもので、有効化状態の一覧ではありません。list-dependencies は依存関係のツリーを表示します。",
  "answerKeys": ["すべてのユニットファイル"],
  "answerTexts": ["systemctl list-unit-files"],
  "answerHints": ["systemctl list-unit-files"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-079",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SysV init を採用したシステムの /etc/inittab が次のようになっている。このシステムが起動時に移行するデフォルトのランレベルを選択してください。\n\nid:3:initdefault:\nsi::sysinit:/etc/rc.d/rc.sysinit\nl3:3:wait:/etc/rc.d/rc 3\nl5:5:wait:/etc/rc.d/rc 5\nca::ctrlaltdel:/sbin/shutdown -t3 -r now\n1:2345:respawn:/sbin/mingetty tty1",
  "choices": [{
    "label": "A",
    "text": "5"
  }, {
    "label": "B",
    "text": "2345"
  }, {
    "label": "C",
    "text": "3"
  }, {
    "label": "D",
    "text": "1"
  }, {
    "label": "E",
    "text": "0"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "inittab の各行は「id:ランレベル:アクション:プロセス」の形式で、アクションが initdefault の行の第2フィールドがデフォルトランレベルを示します。この例では id:3:initdefault: なのでランレベル3です。2345 は mingetty を起動するランレベルの指定です。",
  "answerKeys": ["SysV init を"],
  "answerTexts": ["3"],
  "answerHints": ["3"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-080",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SysV init の /etc/inittab で、仮想コンソールのログインプロンプト（getty）のプロセスが終了した場合に自動的に再起動させたい。アクションフィールドに指定する値を選択してください。",
  "choices": [{
    "label": "A",
    "text": "wait"
  }, {
    "label": "B",
    "text": "respawn"
  }, {
    "label": "C",
    "text": "sysinit"
  }, {
    "label": "D",
    "text": "boot"
  }, {
    "label": "E",
    "text": "once"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "respawn を指定したプロセスは、終了するたびに init によって再起動されるため、getty の起動に使われます。once はランレベルに入ったときに一度だけ起動し、wait は一度起動して終了を待ちます。sysinit や boot はシステム起動時の処理に使うアクションです。",
  "answerKeys": ["SysV init の /"],
  "answerTexts": ["respawn"],
  "answerHints": ["respawn"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-081",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SysV init のシステムで /etc/inittab を編集した。再起動せずに init にこのファイルを再読み込みさせるコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "kill -HUP 0"
  }, {
    "label": "B",
    "text": "init 6"
  }, {
    "label": "C",
    "text": "telinit -r"
  }, {
    "label": "D",
    "text": "telinit s"
  }, {
    "label": "E",
    "text": "telinit q"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "telinit q（または init q）を実行すると、init は /etc/inittab を再読み込みします。telinit s はシングルユーザーモードへの移行、init 6 はシステムの再起動です。kill -HUP 0 は現在のプロセスグループ全体に HUP シグナルを送るもので、init への再読み込み指示にはなりません。",
  "answerKeys": ["SysV init のシステムで /"],
  "answerTexts": ["telinit q"],
  "answerHints": ["telinit q"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-082",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Debian 系のSysV init環境で、/etc/init.d/apache2 スクリプトのLSBヘッダに従い、各ランレベル用のディレクトリにデフォルトの起動・停止リンクを作成したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "update-rc.d apache2 defaults"
  }, {
    "label": "B",
    "text": "update-rc.d --add apache2"
  }, {
    "label": "C",
    "text": "update-rc.d apache2 create"
  }, {
    "label": "D",
    "text": "update-rc.d apache2 on"
  }, {
    "label": "E",
    "text": "update-rc.d apache2 install"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "update-rc.d サービス名 defaults は、スクリプトのLSBヘッダの Default-Start と Default-Stop に従って /etc/rcN.d/ に S と K のリンクを作成します。サービスを無効化する場合は disable、リンクを削除する場合は remove を使います。on、--add、install、create は update-rc.d の正しい指定ではありません。",
  "answerKeys": ["Debian 系のSysV"],
  "answerTexts": ["update-rc.d apache2 defaults"],
  "answerHints": ["update-rc.d apache2 defaults"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-083",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Red Hat系のSysV init環境で、httpd サービスをランレベル3と5でのみ自動起動するように設定したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "chkconfig --runlevel 35 httpd on"
  }, {
    "label": "B",
    "text": "chkconfig --level 35 httpd on"
  }, {
    "label": "C",
    "text": "chkconfig httpd 35 on"
  }, {
    "label": "D",
    "text": "chkconfig --level 3,5 httpd enable"
  }, {
    "label": "E",
    "text": "chkconfig --add httpd 35"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "chkconfig では --level オプションでランレベルを区切りなしの数字列（35）で指定し、続けてサービス名と on または off を指定します。--runlevel というオプションはなく、状態の指定は enable ではなく on です。chkconfig --add は新しいサービスを chkconfig の管理対象に追加するためのオプションです。",
  "answerKeys": ["Red Hat系のSysV"],
  "answerTexts": ["chkconfig --level 35 httpd on"],
  "answerHints": ["chkconfig --level 35"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-084",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "/etc/init.d/ に置く LSB 準拠の init スクリプトのヘッダに関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "Required-Start: には、このサービスの起動前に利用可能である必要がある機能（$network など）を記述する"
  }, {
    "label": "B",
    "text": "Provides: には、このサービスが依存する他のサービス名を記述する"
  }, {
    "label": "C",
    "text": "ヘッダは ### BEGIN INIT INFO で始まり ### END INIT INFO で終わる"
  }, {
    "label": "D",
    "text": "Default-Start: には S20 のような起動順序番号を記述する"
  }, {
    "label": "E",
    "text": "ヘッダはスクリプトの末尾に記述しなければならない"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LSBヘッダは ### BEGIN INIT INFO と ### END INIT INFO で囲んだコメントブロックとして記述します。Required-Start: には起動前に必要な機能（$local_fs、$network など）を、Default-Start: には起動するランレベル（例: 2 3 4 5）を記述します。Provides: はこのスクリプトが提供する機能名を示すもので、依存先の記述ではありません。",
  "answerKeys": ["/etc/init"],
  "answerTexts": ["Required-Start: には、このサービスの起動前に利用可能である必要がある機能（$network など）を記述する", "ヘッダは ### BEGIN INIT INFO で始まり ### END INIT INFO で終わる"],
  "answerHints": ["Required", "ヘッダは "],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-085",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SysV init のシステムで、/etc/rc.d/rc3.d/ が次のようになっている。ランレベル3に移行する際の rc スクリプトの動作として正しいものを選択してください。\n\n$ ls /etc/rc.d/rc3.d/\nK15httpd  K50netconsole  S10network  S25netfs  S55sshd",
  "choices": [{
    "label": "A",
    "text": "すべてのスクリプトがファイル名のアルファベット順に start 引数で実行される"
  }, {
    "label": "B",
    "text": "番号の大きいスクリプトから順に実行される"
  }, {
    "label": "C",
    "text": "K で始まるスクリプトは無視され、S で始まるスクリプトのみが実行される"
  }, {
    "label": "D",
    "text": "K で始まるスクリプトが stop 引数で実行された後、S で始まるスクリプトが番号順に start 引数で実行される"
  }, {
    "label": "E",
    "text": "S で始まるスクリプトが start 引数で実行された後、K で始まるスクリプトが stop 引数で実行される"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "rc スクリプトはまず K で始まるリンクを stop 引数で実行して不要なサービスを停止し、その後 S で始まるリンクを番号の小さい順に start 引数で実行します。この例では httpd と netconsole が停止され、network、netfs、sshd の順に起動されます。リンクの番号は同じ種類（K または S）の中での実行順序を表します。",
  "answerKeys": ["SysV init のシステムで、"],
  "answerTexts": ["K で始まるスクリプトが stop 引数で実行された後、S で始まるスクリプトが番号順に start 引数で実行される"],
  "answerHints": ["K で始まるスクリプトが"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-086",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Debian系のシステムで /etc/default/grub の GRUB_TIMEOUT を変更した。この変更を起動時に有効にするためのコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "grub-mkrescue -o /boot/grub/grub.cfg"
  }, {
    "label": "B",
    "text": "grub-mkconfig /etc/default/grub"
  }, {
    "label": "C",
    "text": "grub-mkconfig -o /boot/grub/grub.cfg"
  }, {
    "label": "D",
    "text": "grub-install --update /dev/sda"
  }, {
    "label": "E",
    "text": "grub-set-default /etc/default/grub"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "GRUB 2 は起動時に grub.cfg を読むため、/etc/default/grub を変更した後は grub-mkconfig で grub.cfg を再生成する必要があります。-o を省略すると生成結果は標準出力に出力されるだけです。grub-set-default はデフォルトのエントリを設定し、grub-mkrescue はレスキュー用のイメージを作成するコマンドです。",
  "answerKeys": ["Debian系のシステム"],
  "answerTexts": ["grub-mkconfig -o /boot/grub/grub.cfg"],
  "answerHints": ["grub-mkconfig -o"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-087",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "通常のエントリとリカバリモードのエントリを含む、GRUB 2 のすべてのLinuxメニューエントリにカーネルパラメータ audit=1 を追加したい。/etc/default/grub で編集する変数を選択してください。",
  "choices": [{
    "label": "A",
    "text": "GRUB_CMDLINE_LINUX"
  }, {
    "label": "B",
    "text": "GRUB_CMDLINE_RECOVERY"
  }, {
    "label": "C",
    "text": "GRUB_CMDLINE_LINUX_DEFAULT"
  }, {
    "label": "D",
    "text": "GRUB_KERNEL_PARAMS"
  }, {
    "label": "E",
    "text": "GRUB_DEFAULT"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "GRUB_CMDLINE_LINUX に指定したパラメータは、リカバリモードを含むすべてのLinuxエントリに追加されます。GRUB_CMDLINE_LINUX_DEFAULT は通常（非リカバリ）エントリにのみ追加されます。GRUB_DEFAULT はデフォルトで起動するエントリの指定で、GRUB_KERNEL_PARAMS や GRUB_CMDLINE_RECOVERY という変数はありません。",
  "answerKeys": ["通常の"],
  "answerTexts": ["GRUB_CMDLINE_LINUX"],
  "answerHints": ["GRUB_CMDLINE_LINUX"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-088",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "GRUB 2 で、grub-mkconfig 実行時に独自のメニューエントリ（例: 別OSのチェーンロード）を grub.cfg に含めたい。エントリを追記するために用意されている標準のファイルを絶対パスで記述してください。",
  "choices": [],
  "answer": ["/etc/grub.d/40_custom"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/grub.d/ 配下のスクリプトは grub-mkconfig により番号順に実行され、その出力が grub.cfg になります。/etc/grub.d/40_custom は独自のエントリを記述するためのファイルで、冒頭の exec tail 行の後にエントリを追記します。grub.cfg を直接編集しても、次回 grub-mkconfig を実行すると上書きされます。",
  "answerKeys": ["GRUB 2 で"],
  "answerTexts": ["/etc/grub.d/40_custom"],
  "answerHints": ["/etc/grub.d/40_custom"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-089",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "BIOS起動のサーバーにWindowsを追加インストールしたところ、MBRが上書きされてLinuxが起動しなくなった。レスキューメディアから起動し、Linuxのルートファイルシステムに chroot した後に実行するコマンドとして最も適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "fsck /dev/sda"
  }, {
    "label": "B",
    "text": "grub-mkconfig -o /dev/sda"
  }, {
    "label": "C",
    "text": "grub-install /dev/sda1"
  }, {
    "label": "D",
    "text": "efibootmgr -c -d /dev/sda"
  }, {
    "label": "E",
    "text": "grub-install /dev/sda"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "grub-install にディスク全体（/dev/sda）を指定すると、GRUBのブートコードがMBRに書き込まれます。パーティション（/dev/sda1）を指定するとMBRには書き込まれません。grub-mkconfig は設定ファイルを生成するコマンドで、デバイスへ出力するものではありません。efibootmgr はUEFIのブートエントリを操作するコマンドで、BIOS起動には関係しません。",
  "answerKeys": ["BIOS起動の"],
  "answerTexts": ["grub-install /dev/sda"],
  "answerHints": ["grub-install /dev/sda"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-090",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "GRUB Legacy を使用するシステムの /boot/grub/menu.lst が次のようになっている。キー入力をせずにタイムアウトした場合に起動されるエントリを選択してください。\n\ndefault 1\ntimeout 5\n\ntitle CentOS (2.6.32-754.el6)\n    root (hd0,0)\n    kernel /vmlinuz-2.6.32-754.el6 ro root=/dev/sda2\n    initrd /initramfs-2.6.32-754.el6.img\n\ntitle CentOS (2.6.32-696.el6)\n    root (hd0,0)\n    kernel /vmlinuz-2.6.32-696.el6 ro root=/dev/sda2\n    initrd /initramfs-2.6.32-696.el6.img",
  "choices": [{
    "label": "A",
    "text": "(hd0,1) 上の最初のエントリ"
  }, {
    "label": "B",
    "text": "CentOS (2.6.32-696.el6)"
  }, {
    "label": "C",
    "text": "GRUBのコマンドラインが表示される"
  }, {
    "label": "D",
    "text": "CentOS (2.6.32-754.el6)"
  }, {
    "label": "E",
    "text": "どちらも起動せず、メニューが表示されたまま待機する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "GRUB Legacy の default はエントリの番号を0から数えて指定するため、default 1 は2番目の title である CentOS (2.6.32-696.el6) を指します。timeout 5 により5秒後にこのエントリが起動されます。root (hd0,0) は /boot を含むパーティションの指定で、default の値には関係しません。",
  "answerKeys": ["GRUB Legacy"],
  "answerTexts": ["CentOS (2.6.32-696.el6)"],
  "answerHints": ["CentOS (2.6.32-696"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-091",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "GRUB のデバイス表記に関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "GRUB Legacy では (hd0,0) は1台目のディスクの1番目のパーティションを表す"
  }, {
    "label": "B",
    "text": "GRUB 2 ではパーティションを (sda1) のようにLinuxのデバイス名で表記する"
  }, {
    "label": "C",
    "text": "GRUB 2 では (hd0,1) は1台目のディスクの1番目のパーティションを表す"
  }, {
    "label": "D",
    "text": "GRUB Legacy では (hd1,1) は1台目のディスクの2番目のパーティションを表す"
  }, {
    "label": "E",
    "text": "GRUB 2 ではディスク番号もパーティション番号も1から数える"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "GRUB Legacy ではディスク番号とパーティション番号をどちらも0から数えるため、(hd0,0) が1台目のディスクの1番目のパーティションです。GRUB 2 ではディスク番号は0から、パーティション番号は1から数えるため、(hd0,1)（または (hd0,msdos1) や (hd0,gpt1)）が1番目のパーティションです。GRUB はLinuxのデバイス名ではなく独自の表記を使います。",
  "answerKeys": ["GRUB の"],
  "answerTexts": ["GRUB Legacy では (hd0,0) は1台目のディスクの1番目のパーティションを表す", "GRUB 2 では (hd0,1) は1台目のディスクの1番目のパーティションを表す"],
  "answerHints": ["GRUB Legacy では (hd0", "GRUB 2 では "],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-092",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "GRUB 2 の起動メニューでエントリを選択して e キーを押し、linux 行にカーネルパラメータを追記した。編集した内容でそのまま起動するために押すキーを選択してください。",
  "choices": [{
    "label": "A",
    "text": "Ctrl+x"
  }, {
    "label": "B",
    "text": "Ctrl+d"
  }, {
    "label": "C",
    "text": "Ctrl+b"
  }, {
    "label": "D",
    "text": "Enter"
  }, {
    "label": "E",
    "text": "Esc"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "GRUB 2 のエントリ編集画面では、Ctrl+x または F10 で編集内容を使って起動します。Esc を押すと編集内容を破棄してメニューに戻ります。編集画面での Enter は改行の入力となり、起動は行われません。",
  "answerKeys": ["GRUB 2 の起動"],
  "answerTexts": ["Ctrl+x"],
  "answerHints": ["Ctrl+x"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-093",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "rootパスワードを忘れたため、GRUB 2 の起動メニューで linux 行の末尾に init=/bin/bash を追加して起動し、シェルを取得した。しかし passwd root を実行すると「Authentication token manipulation error」と表示され、変更できなかった。次に実行すべきコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "systemctl isolate rescue.target"
  }, {
    "label": "B",
    "text": "sulogin"
  }, {
    "label": "C",
    "text": "mount -o remount,rw /"
  }, {
    "label": "D",
    "text": "fsck -y /"
  }, {
    "label": "E",
    "text": "telinit 1"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "カーネルパラメータに ro が指定されている場合、init=/bin/bash で起動したシェルではルートファイルシステムが読み取り専用のままなので、/etc/shadow に書き込めません。mount -o remount,rw / で読み書き可能に再マウントしてから passwd を実行します。この状態では systemd や init が動作していないため、systemctl や telinit は使えません。",
  "answerKeys": ["rootパスワード"],
  "answerTexts": ["mount -o remount,rw /"],
  "answerHints": ["mount"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-094",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "GRUB 2 のカーネルパラメータに systemd.unit=rescue.target または systemd.unit=emergency.target を指定して起動する場合の説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "emergency.target では、ルートファイルシステムが読み取り専用でマウントされ、他のファイルシステムはマウントされない"
  }, {
    "label": "B",
    "text": "emergency.target は rescue.target よりも多くのサービスを起動する"
  }, {
    "label": "C",
    "text": "rescue.target では、ローカルファイルシステムはマウントされるが、ネットワークサービスは起動されない"
  }, {
    "label": "D",
    "text": "rescue.target は SysV init のランレベル5に相当する"
  }, {
    "label": "E",
    "text": "systemd.unit= パラメータは /etc/default/grub に記述した場合のみ有効である"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "emergency.target は最小限の環境で、ルートファイルシステムを読み取り専用でマウントするだけでシェルを起動するため、rescue.target でも起動できない場合に使います。rescue.target はローカルファイルシステムをマウントした基本的なシステムを起動し、ランレベル1に相当します。systemd.unit= は起動メニューでの一時的な編集でも指定できます。",
  "answerKeys": ["GRUB 2 のカーネルパラメータ"],
  "answerTexts": ["emergency.target では、ルートファイルシステムが読み取り専用でマウントされ、他のファイルシステムはマウントされない", "rescue.target では、ローカルファイルシステムはマウントされるが、ネットワークサービスは起動されない"],
  "answerHints": ["emergency.target では", "rescue.target では"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-095",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "カーネルを更新したサーバーを再起動したところ、次のメッセージを表示して停止した。最初に確認すべき項目として最も適切なものを選択してください。\n\nVFS: Cannot open root device \"sdb2\" or unknown-block(0,0): error -6\nPlease append a correct \"root=\" boot option; here are the available partitions:\nKernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)",
  "choices": [{
    "label": "A",
    "text": "default.target のシンボリックリンクが正しいか"
  }, {
    "label": "B",
    "text": "/etc/fstab のスワップ領域の記述が正しいか"
  }, {
    "label": "C",
    "text": "/etc/inittab の initdefault の値が正しいか"
  }, {
    "label": "D",
    "text": "ブートローダで指定しているカーネルパラメータ root= が正しいルートデバイスを指しているか"
  }, {
    "label": "E",
    "text": "/etc/sysctl.conf の記述に誤りがないか"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "このメッセージは、カーネルがルートファイルシステムをマウントできずにパニックを起こしたことを示し、root= の指定誤りや、initramfs にストレージドライバが含まれていないことが主な原因です。/etc/fstab、/etc/inittab、/etc/sysctl.conf、default.target はルートファイルシステムのマウント後に参照されるため、この段階の原因にはなりません。",
  "answerKeys": ["カーネルを"],
  "answerTexts": ["ブートローダで指定しているカーネルパラメータ root= が正しいルートデバイスを指しているか"],
  "answerHints": ["ブートローダ"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-096",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "UEFIシステムで efibootmgr を実行したところ次の出力が得られた。Boot0002 を最優先とし、以降の起動でも常にその順序とするためのコマンドを選択してください。\n\nBootCurrent: 0001\nBootOrder: 0001,0002,0000\nBoot0000* UEFI: PXE IPv4\nBoot0001* ubuntu\nBoot0002* rhel",
  "choices": [{
    "label": "A",
    "text": "efibootmgr -B -b 0002"
  }, {
    "label": "B",
    "text": "efibootmgr -c -b 0002"
  }, {
    "label": "C",
    "text": "efibootmgr -n 0002"
  }, {
    "label": "D",
    "text": "efibootmgr -a 0002,0001,0000"
  }, {
    "label": "E",
    "text": "efibootmgr -o 0002,0001,0000"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "efibootmgr -o（--bootorder）は BootOrder 変数を設定し、恒久的な起動順序を変更します。-n（--bootnext）は次回の起動1回だけ使うエントリを指定するもので、恒久的な変更ではありません。-B は -b で指定したエントリの削除、-c は新しいエントリの作成、-a はエントリの有効化に使います。",
  "answerKeys": ["UEFIシステム"],
  "answerTexts": ["efibootmgr -o 0002,0001,0000"],
  "answerHints": ["efibootmgr -o"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-097",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "UEFI起動のシステムで、ブートローダの .efi ファイルを格納するEFIシステムパーティション（ESP）に使用されるファイルシステムを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ext4"
  }, {
    "label": "B",
    "text": "ISO 9660"
  }, {
    "label": "C",
    "text": "FAT（FAT32 など）"
  }, {
    "label": "D",
    "text": "XFS"
  }, {
    "label": "E",
    "text": "Btrfs"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "UEFI仕様ではESPのファイルシステムとしてFAT（通常はFAT32）を規定しており、ファームウェアはこれを読み取って .efi ファイルを実行します。Linuxでは一般に /boot/efi にマウントされます。ext4、XFS、Btrfs は通常UEFIファームウェアから直接読み取れません。",
  "answerKeys": ["UEFI起動の"],
  "answerTexts": ["FAT（FAT32 など）"],
  "answerHints": ["FAT"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-098",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NVMe SSD を搭載したサーバーで、1つ目のNVMeコントローラの1つ目のネームスペースにある2番目のパーティションを表すデバイスファイルを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/dev/nvme0n1p2"
  }, {
    "label": "B",
    "text": "/dev/nvme0p1n2"
  }, {
    "label": "C",
    "text": "/dev/nvme0n2"
  }, {
    "label": "D",
    "text": "/dev/nvme1n1p2"
  }, {
    "label": "E",
    "text": "/dev/nvme1p2"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "NVMeデバイスは /dev/nvme<コントローラ番号>n<ネームスペース番号>p<パーティション番号> の形式で命名され、コントローラ番号は0から、ネームスペース番号とパーティション番号は1から数えます。したがって1つ目のコントローラの1つ目のネームスペースの2番目のパーティションは /dev/nvme0n1p2 です。/dev/nvme0n2 は2つ目のネームスペース全体を表します。",
  "answerKeys": ["NVMe SSD を"],
  "answerTexts": ["/dev/nvme0n1p2"],
  "answerHints": ["/dev/nvme0n1p2"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-099",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/fstab が次のようになっている。起動時に fsck によるチェックが行われないファイルシステムを選択してください。\n\n/dev/sda2  /         ext4  defaults  1 1\n/dev/sda1  /boot     ext4  defaults  1 2\n/dev/sdb1  /data     ext4  defaults  0 0\n/dev/sdc1  /backup   ext4  defaults  0 2",
  "choices": [{
    "label": "A",
    "text": "/"
  }, {
    "label": "B",
    "text": "/data"
  }, {
    "label": "C",
    "text": "/boot"
  }, {
    "label": "D",
    "text": "すべてのファイルシステムがチェックされる"
  }, {
    "label": "E",
    "text": "/backup"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/fstab の第6フィールドは起動時の fsck のチェック順序を表し、0 はチェックしない、1 は最初に（通常ルートファイルシステム）、2 はその後にチェックすることを意味します。第5フィールドは dump によるバックアップ対象かどうかの指定で、fsck には関係しません。したがって第6フィールドが0の /data がチェック対象外です。",
  "answerKeys": ["/etc/fstab が"],
  "answerTexts": ["/data"],
  "answerHints": ["/data"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-100",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ext4 ファイルシステム /dev/sdb1 をアンマウントして e2fsck を実行したところ、プライマリスーパーブロックが破損しているというエラーで処理が中断した。このファイルシステムのブロックサイズは 4096 バイトである。修復を試みるコマンドとして最も適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "e2fsck -n /dev/sdb1"
  }, {
    "label": "B",
    "text": "tune2fs -c 0 /dev/sdb1"
  }, {
    "label": "C",
    "text": "e2fsck -b 0 /dev/sdb1"
  }, {
    "label": "D",
    "text": "e2fsck -b 32768 /dev/sdb1"
  }, {
    "label": "E",
    "text": "mke2fs -t ext4 /dev/sdb1"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "e2fsck -b でバックアップスーパーブロックの位置を指定すると、それを使ってファイルシステムを修復できます。ブロックサイズが4096バイトの場合、最初のバックアップは通常ブロック 32768 にあり、位置は dumpe2fs や mke2fs -n で確認できます。e2fsck -n はすべての質問に no と答えて読み取り専用でチェックするだけで、mke2fs はファイルシステムを作り直してしまうためデータが失われます。",
  "answerKeys": ["ext4 ファイルシステム /dev/sdb1 を"],
  "answerTexts": ["e2fsck -b 32768 /dev/sdb1"],
  "answerHints": ["e2fsck -b 32768"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-101",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "PXELINUX でネットワークブートするクライアントの MAC アドレスは 88:99:AA:BB:CC:DD である。このクライアント専用の設定を TFTP サーバー上の pxelinux.cfg ディレクトリに置く場合、PXELINUX が検索するファイル名として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "pxelinux.cfg-88-99-aa-bb-cc-dd"
  }, {
    "label": "B",
    "text": "88-99-aa-bb-cc-dd.cfg"
  }, {
    "label": "C",
    "text": "88:99:AA:BB:CC:DD"
  }, {
    "label": "D",
    "text": "default-88-99-aa-bb-cc-dd"
  }, {
    "label": "E",
    "text": "01-88-99-aa-bb-cc-dd"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "PXELINUX は pxelinux.cfg 内を、UUID、ARP ハードウェアタイプ（イーサネットは 01）を先頭に付けて小文字・ハイフン区切りにした MAC アドレス、16進大文字の IP アドレス（末尾を1桁ずつ削りながら）、最後に default の順で検索します。コロン区切りや拡張子 .cfg を付けた名前は検索対象になりません。",
  "answerKeys": ["PXELINUX"],
  "answerTexts": ["01-88-99-aa-bb-cc-dd"],
  "answerHints": ["01"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-102",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ISC DHCP サーバーを使って PXE クライアントに TFTP サーバー 192.168.10.5 上の PXELINUX を読み込ませたい。dhcpd.conf のサブネット宣言に記述する内容として適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "next-server 192.168.10.5; filename \"pxelinux.cfg/default\";"
  }, {
    "label": "B",
    "text": "tftp-server 192.168.10.5; bootfile \"pxelinux.cfg\";"
  }, {
    "label": "C",
    "text": "next-server 192.168.10.5; filename \"pxelinux.0\";"
  }, {
    "label": "D",
    "text": "option tftp 192.168.10.5; kernel \"pxelinux.0\";"
  }, {
    "label": "E",
    "text": "boot-server 192.168.10.5; loader \"isolinux.bin\";"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dhcpd.conf では next-server で TFTP サーバーのアドレスを、filename でクライアントがダウンロードするブートローダー pxelinux.0 を指定します。pxelinux.cfg/default は pxelinux.0 が起動後に読み込む設定ファイルであり、filename に指定するものではありません。tftp-server や boot-server といったディレクティブは存在しません。",
  "answerKeys": ["ISC DHCP サーバーを"],
  "answerTexts": ["next-server 192.168.10.5; filename \"pxelinux.0\";"],
  "answerHints": ["next-server 192.168.10.5; filename \"pxelinux.0"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-103",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Syslinux パッケージに含まれる isohdpfx.bin の用途として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "UEFI ファームウェアが読み込む FAT 形式のブートイメージとして使う"
  }, {
    "label": "B",
    "text": "Secure Boot 環境で GRUB の署名を検証するために使う"
  }, {
    "label": "C",
    "text": "PXE クライアントが TFTP で最初にダウンロードするネットワークブートローダーとして使う"
  }, {
    "label": "D",
    "text": "ISOLINUX の設定ファイルをバイナリ形式にコンパイルしたものとして使う"
  }, {
    "label": "E",
    "text": "ISO イメージを USB メモリなどに書き込んでも起動できるハイブリッド ISO にするための MBR イメージとして使う"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "isohdpfx.bin は xorriso の -isohybrid-mbr オプションなどで ISO イメージ先頭に埋め込む MBR コードで、ISO を USB ストレージから BIOS 起動できるハイブリッドイメージにします。UEFI 用の FAT イメージは efiboot.img、PXE 用のローダーは pxelinux.0、Secure Boot での検証は shim の役割です。",
  "answerKeys": ["Syslinux パッケージ"],
  "answerTexts": ["ISO イメージを USB メモリなどに書き込んでも起動できるハイブリッド ISO にするための MBR イメージとして使う"],
  "answerHints": ["ISO "],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-104",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "BIOS と UEFI の両方から起動可能なインストール用 ISO イメージを作成している。ISO 内に配置する efiboot.img の説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "EFI/BOOT/BOOTX64.EFI などを格納した FAT ファイルシステムのイメージで、El Torito の UEFI 用ブートイメージとして登録される"
  }, {
    "label": "B",
    "text": "ハードディスクの ESP に書き込むための GPT パーティションテーブルのイメージである"
  }, {
    "label": "C",
    "text": "ISOLINUX が読み込む BIOS 用の第2段階ブートローダーである"
  }, {
    "label": "D",
    "text": "カーネルとともに読み込まれる initramfs を圧縮したものである"
  }, {
    "label": "E",
    "text": "PXELINUX が TFTP 経由で取得するメニュー定義ファイルである"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "UEFI ファームウェアは ISO9660 を直接読めない場合があるため、FAT 形式の efiboot.img を El Torito の代替ブートイメージとして登録し、その中の EFI/BOOT/BOOTX64.EFI から起動させます。BIOS 用のローダーは isolinux.bin であり、efiboot.img は initramfs やパーティションテーブルではありません。",
  "answerKeys": ["BIOS と"],
  "answerTexts": ["EFI/BOOT/BOOTX64.EFI などを格納した FAT ファイルシステムのイメージで、El Torito の UEFI 用ブートイメージとして登録される"],
  "answerHints": ["EFI"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-105",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "UEFI Secure Boot が有効な PC で多くの Linux ディストリビューションが採用している起動の流れとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ファームウェアが pxelinux.0 を読み込み、署名を確認したうえで grubx64.efi に制御を渡す"
  }, {
    "label": "B",
    "text": "Microsoft の鍵で署名された shim.efi をファームウェアが読み込み、shim がディストリビューションの鍵で署名された grubx64.efi を検証して起動する"
  }, {
    "label": "C",
    "text": "ファームウェアが efiboot.img 内の isolinux.bin を読み込み、署名を検証してから shim.efi を起動する"
  }, {
    "label": "D",
    "text": "shim.efi は BIOS 互換モード（CSM）専用であり、Secure Boot 有効時は grubx64.efi が直接読み込まれる"
  }, {
    "label": "E",
    "text": "ファームウェアが grubx64.efi を読み込み、GRUB が shim.efi を検証してからカーネルを起動する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "多くの UEFI ファームウェアには Microsoft の鍵しか登録されていないため、Microsoft 署名済みの shim.efi を最初に起動し、shim が組み込みのディストリビューション鍵や MOK を使って grubx64.efi を検証します。読み込み順は shim から GRUB であり逆ではありません。shim は CSM 用ではなく Secure Boot のために使われます。",
  "answerKeys": ["UEFI Secure"],
  "answerTexts": ["Microsoft の鍵で署名された shim.efi をファームウェアが読み込み、shim がディストリビューションの鍵で署名された grubx64.efi を検証して起動する"],
  "answerHints": ["Microsoft"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-106",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "systemd-boot を使用しているシステムで、新しいブートエントリーを追加したい。エントリー定義ファイルを配置する場所として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/default/grub に GRUB_ENTRY として追記する"
  }, {
    "label": "B",
    "text": "/boot/grub/grub.cfg に menuentry ブロックとして追記する"
  }, {
    "label": "C",
    "text": "EFI システムパーティション内の pxelinux.cfg/default に LABEL として追記する"
  }, {
    "label": "D",
    "text": "EFI システムパーティション内の loader/entries/ ディレクトリに .conf ファイルとして置く"
  }, {
    "label": "E",
    "text": "/etc/systemd/boot.conf に [Entry] セクションとして追記する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemd-boot は bootctl install で ESP に導入され、ESP 内の loader/loader.conf で全体設定を、loader/entries/*.conf で個々のエントリー（title、linux、initrd、options など）を定義します。/etc/default/grub や grub.cfg は GRUB 2 の設定であり、/etc/systemd/boot.conf というファイルは存在しません。",
  "answerKeys": ["systemd-boot"],
  "answerTexts": ["EFI システムパーティション内の loader/entries/ ディレクトリに .conf ファイルとして置く"],
  "answerHints": ["EFI システムパーティション内の loader"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-107",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "SYSLINUX プロジェクトに含まれるブートローダーとその起動元の組み合わせとして正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "SYSLINUX は NFS で共有されたルートファイルシステムから起動する"
  }, {
    "label": "B",
    "text": "PXELINUX は FAT ファイルシステムの USB メモリから起動する"
  }, {
    "label": "C",
    "text": "EXTLINUX は UEFI 専用で、BIOS 環境では使用できない"
  }, {
    "label": "D",
    "text": "ISOLINUX は ISO9660 形式の CD/DVD から起動する"
  }, {
    "label": "E",
    "text": "EXTLINUX は ext2/ext3/ext4 や Btrfs などのファイルシステムから起動する"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "EXTLINUX は ext2/ext3/ext4 や Btrfs などのファイルシステム用、ISOLINUX は ISO9660 の光学メディア用です。SYSLINUX は FAT ファイルシステムから起動するもので、PXELINUX は PXE によるネットワークブート用です。EXTLINUX は主に BIOS 環境で使われるローダーです。",
  "answerKeys": ["SYSLINUX プロジェクト"],
  "answerTexts": ["ISOLINUX は ISO9660 形式の CD/DVD から起動する", "EXTLINUX は ext2/ext3/ext4 や Btrfs などのファイルシステムから起動する"],
  "answerHints": ["ISOLINUX", "EXTLINUX は ext2"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-108",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ARM ベースのシングルボードコンピューターや組み込み機器で広く使われ、boot.scr などのスクリプトでカーネルやデバイスツリーの読み込みを制御できるブートローダーを選択してください。",
  "choices": [{
    "label": "A",
    "text": "U-Boot"
  }, {
    "label": "B",
    "text": "LILO"
  }, {
    "label": "C",
    "text": "PXELINUX"
  }, {
    "label": "D",
    "text": "ISOLINUX"
  }, {
    "label": "E",
    "text": "systemd-boot"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "U-Boot（Das U-Boot）は組み込み機器や ARM ボードで標準的に使われるブートローダーで、mkimage で作成した boot.scr スクリプトによりカーネル、initramfs、デバイスツリーの読み込みを制御できます。ISOLINUX や PXELINUX は x86 の BIOS 起動向け、systemd-boot は UEFI 専用、LILO は旧来の x86 向けローダーです。",
  "answerKeys": ["ARM"],
  "answerTexts": ["U-Boot"],
  "answerHints": ["U"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-109",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/fstab に次の行がある。行末の「2」の意味として正しいものを選択してください。\n\nUUID=3e6be9de-8139-11d1-9106-a43f08d823a6  /home ext4  defaults  0 2",
  "choices": [{
    "label": "A",
    "text": "マウントの優先順位で、値の大きいものから先にマウントされる"
  }, {
    "label": "B",
    "text": "起動時の fsck によるチェック順序で、ルートファイルシステムの後にチェックされる"
  }, {
    "label": "C",
    "text": "dump コマンドによるバックアップの頻度（2日ごと）"
  }, {
    "label": "D",
    "text": "ファイルシステムの予約ブロックの割合（2%）"
  }, {
    "label": "E",
    "text": "マウント時に試行するリトライ回数"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fstab の第6フィールドは fsck のパス番号で、ルートファイルシステムには 1、その他には 2 を指定し、0 はチェックしないことを意味します。第5フィールドが dump の要否を示すフラグです。リトライ回数や予約ブロックの割合は fstab では指定しません。",
  "answerKeys": ["/etc/fstab に次の"],
  "answerTexts": ["起動時の fsck によるチェック順序で、ルートファイルシステムの後にチェックされる"],
  "answerHints": ["起動時の"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-110",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/fstab に登録した外付けディスク用のエントリーが、システム起動時には自動マウントされず、管理者が mount /mnt/ext を実行したときだけマウントされるようにしたい。オプション欄に指定すべきものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "nofail"
  }, {
    "label": "B",
    "text": "noexec"
  }, {
    "label": "C",
    "text": "ro"
  }, {
    "label": "D",
    "text": "nouser"
  }, {
    "label": "E",
    "text": "noauto"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "noauto を指定すると mount -a や起動時の自動マウントの対象外になりますが、fstab の情報を使って mount /mnt/ext のように手動でマウントできます。nofail はデバイスが存在しない場合にエラーとしない指定で、自動マウント自体は行われます。noexec はバイナリ実行の禁止、nouser は一般ユーザーのマウント禁止です。",
  "answerKeys": ["/etc/fstab に登録した"],
  "answerTexts": ["noauto"],
  "answerHints": ["noauto"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-111",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/fstab のマウントオプションのうち、一般ユーザーがマウントでき、かつマウントしたユーザー以外の一般ユーザーもアンマウントできるようにするものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "user"
  }, {
    "label": "B",
    "text": "defaults"
  }, {
    "label": "C",
    "text": "users"
  }, {
    "label": "D",
    "text": "group"
  }, {
    "label": "E",
    "text": "owner"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "users を指定すると任意の一般ユーザーがマウントでき、マウントしたユーザー以外もアンマウントできます。user では一般ユーザーのマウントは許可されますが、アンマウントできるのはマウントしたユーザー本人（と root）だけです。owner はデバイスファイルの所有者に許可する指定で、defaults には一般ユーザーへの許可は含まれません。",
  "answerKeys": ["/etc/fstab の"],
  "answerTexts": ["users"],
  "answerHints": ["users"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-112",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "blkid の出力が次のとおりである。デバイス名の変化に影響されずに /data へマウントする /etc/fstab の記述として正しいものを選択してください。\n\n# blkid /dev/sdc1\n/dev/sdc1: LABEL=\"backup\" UUID=\"7b1c2f44-5d0e-4c1a-9a57-2b9e3c6d8f10\"\n  TYPE=\"xfs\" PARTUUID=\"0e5f3a21-01\"",
  "choices": [{
    "label": "A",
    "text": "UUID=\"/dev/sdc1\" /data xfs defaults 0 0"
  }, {
    "label": "B",
    "text": "/dev/disk/7b1c2f44-5d0e-4c1a-9a57-2b9e3c6d8f10 /data xfs defaults 0 0"
  }, {
    "label": "C",
    "text": "UUID=7b1c2f44-5d0e-4c1a-9a57-2b9e3c6d8f10 xfs /data defaults 0 0"
  }, {
    "label": "D",
    "text": "UUID=7b1c2f44-5d0e-4c1a-9a57-2b9e3c6d8f10 /data xfs defaults 0 0"
  }, {
    "label": "E",
    "text": "LABEL=/dev/sdc1 /data xfs defaults 0 0"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fstab の第1フィールドには UUID=値 の形式でファイルシステムの UUID を指定でき、第2フィールドがマウントポイント、第3フィールドがファイルシステムタイプです。UUID= や LABEL= にデバイスファイル名を書くことはできず、UUID によるデバイスパスは /dev/disk/by-uuid/ 配下になります。マウントポイントとタイプの順序を入れ替えた記述も誤りです。",
  "answerKeys": ["blkid"],
  "answerTexts": ["UUID=7b1c2f44-5d0e-4c1a-9a57-2b9e3c6d8f10 /data xfs defaults 0 0"],
  "answerHints": ["UUID=7b1c2f44-5d0e-4c1a-9a57-2b9e3c6d8f10 /data"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-113",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "umount /srv/share を実行したところ「target is busy」と表示されてアンマウントできなかった。このファイルシステムを使用しているプロセスを特定するために使えるコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "blkid -p /srv/share"
  }, {
    "label": "B",
    "text": "sync /srv/share"
  }, {
    "label": "C",
    "text": "fuser -vm /srv/share"
  }, {
    "label": "D",
    "text": "lsof /srv/share"
  }, {
    "label": "E",
    "text": "swapoff /srv/share"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fuser -m はマウントポイントを含むファイルシステムを使用中のプロセスを表示し、-v で詳細を出力します。lsof にマウントポイントを指定すると、そのファイルシステム上で開かれているファイルとプロセスを一覧できます。sync はバッファの書き出し、blkid はブロックデバイスの属性表示であり、使用中のプロセスは分かりません。",
  "answerKeys": ["umount"],
  "answerTexts": ["fuser -vm /srv/share", "lsof /srv/share"],
  "answerHints": ["fuser", "lsof"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-114",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "使用中のプロセスが残っていてすぐにはアンマウントできないファイルシステムを、ディレクトリツリーからただちに切り離し、使用されなくなった時点で実際のアンマウント処理を行わせたい。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "umount -l /mnt/data"
  }, {
    "label": "B",
    "text": "umount -t /mnt/data"
  }, {
    "label": "C",
    "text": "umount -n /mnt/data"
  }, {
    "label": "D",
    "text": "umount -a /mnt/data"
  }, {
    "label": "E",
    "text": "umount -r /mnt/data"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "umount -l（lazy アンマウント）はファイルシステムを即座に階層から切り離し、参照がなくなった時点でクリーンアップを行います。-r はアンマウント失敗時に読み取り専用で再マウントを試みる指定、-n は /etc/mtab に書き込まない指定、-a は全ファイルシステムのアンマウント、-t はタイプの指定です。",
  "answerKeys": ["使用中の"],
  "answerTexts": ["umount -l /mnt/data"],
  "answerHints": ["umount -l"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-115",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "sync コマンドの説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "スワップ領域上のページをすべて物理メモリに戻す"
  }, {
    "label": "B",
    "text": "2つのディレクトリの内容を比較して差分をコピーする"
  }, {
    "label": "C",
    "text": "マウントされているすべてのファイルシステムを読み取り専用に再マウントする"
  }, {
    "label": "D",
    "text": "/etc/fstab と /etc/mtab の内容を一致させる"
  }, {
    "label": "E",
    "text": "メモリ上のバッファにある未書き込みのデータをディスクに書き出す"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sync はカーネルがキャッシュしている未書き込みデータ（ダーティページやメタデータ）をストレージに強制的に書き出します。リムーバブルメディアの取り外し前や電源断の前に実行されます。ディレクトリ間の差分コピーは rsync などの役割で、fstab と mtab を同期する機能はありません。",
  "answerKeys": ["sync"],
  "answerTexts": ["メモリ上のバッファにある未書き込みのデータをディスクに書き出す"],
  "answerHints": ["メモリ"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-116",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "現在有効になっているスワップ領域をデバイスやファイルごとに、サイズ・使用量・優先度とともに確認できる方法を選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "swapon --show"
  }, {
    "label": "B",
    "text": "swapon -a"
  }, {
    "label": "C",
    "text": "mkswap -l"
  }, {
    "label": "D",
    "text": "cat /proc/swapinfo"
  }, {
    "label": "E",
    "text": "cat /proc/swaps"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "swapon --show（旧来の swapon -s）や /proc/swaps で、有効なスワップ領域ごとの種類、サイズ、使用量、優先度を確認できます。swapon -a は fstab に記載されたスワップを有効化するコマンドで、一覧表示ではありません。mkswap に一覧表示機能はなく、/proc/swapinfo というファイルは存在しません。",
  "answerKeys": ["現在有効になっ"],
  "answerTexts": ["swapon --show", "cat /proc/swaps"],
  "answerHints": ["swapon --show", "cat /proc/swaps"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-117",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "スワップファイルを追加するため、dd で /swapfile を作成し chmod 600 でパーミッションを設定した。swapon /swapfile で有効化する前に、このファイルをスワップ領域として初期化するために実行するコマンド名を記述してください。",
  "choices": [],
  "answer": ["mkswap"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mkswap はデバイスやファイルにスワップ領域のシグネチャを書き込み、スワップとして使用できるように初期化します。初期化していないファイルに swapon を実行すると、有効なスワップシグネチャがないためエラーになります。永続化するには fstab に swap タイプのエントリーを追加します。",
  "answerKeys": ["スワップファイル"],
  "answerTexts": ["mkswap"],
  "answerHints": ["mkswap"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-118",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "高速な SSD 上のスワップパーティションを、HDD 上のスワップパーティションより優先して使用させたい。/etc/fstab の SSD 側のエントリーで指定するオプションとして適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "order=1"
  }, {
    "label": "B",
    "text": "pri=10（HDD 側より大きい値）"
  }, {
    "label": "C",
    "text": "pri=-10（HDD 側より小さい値）"
  }, {
    "label": "D",
    "text": "nice=-20"
  }, {
    "label": "E",
    "text": "prio=first"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "スワップのオプション pri= は優先度を表し、値が大きいほど先に使用されます。そのため SSD 側に HDD 側より大きな値を指定します。prio=、order=、nice= といったスワップ用オプションは存在しません。コマンドラインでは swapon -p で同様に優先度を指定できます。",
  "answerKeys": ["高速な"],
  "answerTexts": ["pri=10（HDD 側より大きい値）"],
  "answerHints": ["pri=10"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-119",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "systemd のマウントユニットで /var/lib/backup をマウントしたい。ユニットファイル名として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "var.lib.backup.mount"
  }, {
    "label": "B",
    "text": "var_lib_backup.mount"
  }, {
    "label": "C",
    "text": "backup.mount"
  }, {
    "label": "D",
    "text": "var-lib-backup.mount"
  }, {
    "label": "E",
    "text": "/var/lib/backup.mount"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "マウントユニットの名前はマウントポイントのパスから決まり、先頭のスラッシュを除いて残りのスラッシュをハイフンに置き換えたものになります（パス中のハイフンは \\x2d にエスケープされます）。名前とマウントポイントが一致しないユニットは無視されるため、backup.mount のような任意の名前は使えません。",
  "answerKeys": ["systemd のマウントユニットで"],
  "answerTexts": ["var-lib-backup.mount"],
  "answerHints": ["var-lib"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-120",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "systemd のマウントユニットの [Mount] セクションで、マウントするデバイスとマウント先のディレクトリを指定するディレクティブを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "What="
  }, {
    "label": "B",
    "text": "Device="
  }, {
    "label": "C",
    "text": "Target="
  }, {
    "label": "D",
    "text": "MountPoint="
  }, {
    "label": "E",
    "text": "Where="
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "[Mount] セクションでは What= にマウントするデバイスや UUID=、ネットワーク共有などを、Where= にマウントポイントの絶対パスを指定し、必要に応じて Type= や Options= を加えます。Device=、Target=、MountPoint= はマウントユニットのディレクティブとして存在しません。",
  "answerKeys": ["systemd のマウントユニットの"],
  "answerTexts": ["What=", "Where="],
  "answerHints": ["What", "Where"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-121",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NFS 共有を起動時にはマウントせず、マウントポイントに初めてアクセスがあった時点で systemd にマウントさせたい。マウントユニットと組み合わせて作成するユニットの種類を選択してください。",
  "choices": [{
    "label": "A",
    "text": ".swap"
  }, {
    "label": "B",
    "text": ".target"
  }, {
    "label": "C",
    "text": ".automount"
  }, {
    "label": "D",
    "text": ".socket"
  }, {
    "label": "E",
    "text": ".path"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": ".automount ユニットは同名の .mount ユニットと組み合わせて使用し、マウントポイントへのアクセスを契機にマウントを実行します。fstab では x-systemd.automount オプションで同じ動作を指定できます。.path はファイルの変化を監視してユニットを起動するもの、.socket はソケット起動用、.swap はスワップ領域用です。",
  "answerKeys": ["NFS 共有を"],
  "answerTexts": [".automount"],
  "answerHints": [".automount"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-122",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "最近の多くの Linux ディストリビューションにおける /etc/mtab の説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mount コマンドが実行のたびに書き換える通常のテキストファイルで、カーネルの情報とは独立している"
  }, {
    "label": "B",
    "text": "起動時に自動マウントするファイルシステムを管理者が記述する設定ファイルである"
  }, {
    "label": "C",
    "text": "swapon が参照するスワップ領域の設定ファイルである"
  }, {
    "label": "D",
    "text": "/proc/self/mounts へのシンボリックリンクであり、カーネルが把握しているマウント情報を反映する"
  }, {
    "label": "E",
    "text": "autofs が管理するマウントマップの一覧である"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "現在の多くのディストリビューションでは /etc/mtab は /proc/self/mounts へのシンボリックリンクになっており、カーネルのマウントテーブルと常に一致します。起動時のマウントを記述するのは /etc/fstab です。かつては mount コマンドが mtab を書き換えていたため、実際の状態とずれることがありました。",
  "answerKeys": ["最近の"],
  "answerTexts": ["/proc/self/mounts へのシンボリックリンクであり、カーネルが把握しているマウント情報を反映する"],
  "answerHints": ["/proc"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-123",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "メンテナンス中に、システムを再起動せずにルートファイルシステムを読み取り専用に切り替えたい。実行するコマンドとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mount -o remount,ro /"
  }, {
    "label": "B",
    "text": "umount -r /"
  }, {
    "label": "C",
    "text": "mount -t ro /"
  }, {
    "label": "D",
    "text": "mount -o ro,noauto /"
  }, {
    "label": "E",
    "text": "sync -r /"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mount -o remount,ro / は、アンマウントせずにマウントオプションだけを変更して読み取り専用に切り替えます。書き込みのために開かれているファイルがあると失敗します。umount -r はアンマウントに失敗した場合に読み取り専用での再マウントを試みるオプションで、目的の操作ではありません。mount の -t はファイルシステムタイプの指定、noauto は起動時の自動マウントに関するオプションです。",
  "answerKeys": ["メンテナンス中に"],
  "answerTexts": ["mount -o remount,ro /"],
  "answerHints": ["mount -o remount"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-124",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "既存のデータを保持したまま、ext4 ファイルシステム /dev/sdb1 のボリュームラベルを data に変更したい。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mount -L data /dev/sdb1"
  }, {
    "label": "B",
    "text": "blkid -L data /dev/sdb1"
  }, {
    "label": "C",
    "text": "mkswap -L data /dev/sdb1"
  }, {
    "label": "D",
    "text": "findfs LABEL=data /dev/sdb1"
  }, {
    "label": "E",
    "text": "e2label /dev/sdb1 data"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "e2label は ext2/ext3/ext4 のラベルを表示・変更するコマンドで、tune2fs -L でも同様に変更できます。blkid -L と findfs LABEL= はラベルからデバイスを検索するもの、mount -L はラベルを指定してマウントするものです。mkswap はスワップ領域として初期化するため、既存の ext4 のデータが失われます。",
  "answerKeys": ["既存のデータ"],
  "answerTexts": ["e2label /dev/sdb1 data"],
  "answerHints": ["e2label"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-125",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/var/www/html の内容を、chroot 環境内の /srv/chroot/var/www/html からも同じ内容として参照できるようにしたい。ディレクトリツリーの一部を別の場所に重ねてマウントするコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mount --move /srv/chroot/var/www/html /var/www/html"
  }, {
    "label": "B",
    "text": "mount -o loop /var/www/html /srv/chroot/var/www/html"
  }, {
    "label": "C",
    "text": "mount --bind /var/www/html /srv/chroot/var/www/html"
  }, {
    "label": "D",
    "text": "ln -s /srv/chroot/var/www/html /var/www/html"
  }, {
    "label": "E",
    "text": "mount -t tmpfs /var/www/html /srv/chroot/var/www/html"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mount --bind は既存のディレクトリツリーを別のマウントポイントにも見えるようにするバインドマウントで、chroot 環境から外部のディレクトリを参照させる場合に使います。--move はマウント済みのツリーを移動する操作で、元の場所からは見えなくなります。-o loop はイメージファイルをループデバイス経由でマウントするもので、ディレクトリには使えません。",
  "answerKeys": ["/var/www/html の"],
  "answerTexts": ["mount --bind /var/www/html /srv/chroot/var/www/html"],
  "answerHints": ["mount --bind"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-126",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "fsck を実際には実行せず、どのファイルシステムに対してどのチェッカーが実行されるかだけを表示させたい。指定するオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-R"
  }, {
    "label": "B",
    "text": "-N"
  }, {
    "label": "C",
    "text": "-n"
  }, {
    "label": "D",
    "text": "-T"
  }, {
    "label": "E",
    "text": "-A"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fsck -N は実行せずに何が行われるかだけを表示します。-A は /etc/fstab に記載されたファイルシステムをすべてチェックし、-R は -A と併用してルートファイルシステムを除外します。-n は fsck 自体ではなく e2fsck などに渡され「すべての質問に no と答える」意味になり、-T は起動時のタイトル表示を抑制します。",
  "answerKeys": ["fsck"],
  "answerTexts": ["-N"],
  "answerHints": ["-N"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-127",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "アンマウント済みの ext4 ファイルシステム /dev/sdd1 を e2fsck で修復する際、表示される修復の確認すべてに自動的に yes と答えさせたい。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "e2fsck -j /dev/sdd1"
  }, {
    "label": "B",
    "text": "e2fsck -n /dev/sdd1"
  }, {
    "label": "C",
    "text": "e2fsck -c /dev/sdd1"
  }, {
    "label": "D",
    "text": "e2fsck -b /dev/sdd1"
  }, {
    "label": "E",
    "text": "e2fsck -y /dev/sdd1"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "e2fsck -y はすべての質問に yes と答え、対話なしで修復を進めます。-n はすべての質問に no と答えて読み取り専用でチェックし、-c は badblocks による不良ブロックの検査、-b は代替スーパーブロックの指定、-j は外部ジャーナルの指定です。安全に自動修復できる問題だけを直す場合は -p を使います。",
  "answerKeys": ["アンマウント"],
  "answerTexts": ["e2fsck -y /dev/sdd1"],
  "answerHints": ["e2fsck -y"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-128",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ext4 ファイルシステム /dev/sdb1 のプライマリスーパーブロックが破損し、e2fsck が失敗する。dumpe2fs と mke2fs -n で次の情報を確認した。最初に試すべき修復コマンドとして適切なものを選択してください。\n\n# dumpe2fs /dev/sdb1 | grep -i superblock\ndumpe2fs: Bad magic number in super-block while trying to open /dev/sdb1\n# mke2fs -n /dev/sdb1\n...\nSuperblock backups stored on blocks:\n        32768, 98304, 163840, 229376, 294912",
  "choices": [{
    "label": "A",
    "text": "fsck -N 32768 /dev/sdb1"
  }, {
    "label": "B",
    "text": "mke2fs -S 32768 /dev/sdb1"
  }, {
    "label": "C",
    "text": "debugfs -w 32768 /dev/sdb1"
  }, {
    "label": "D",
    "text": "e2fsck -b 32768 /dev/sdb1"
  }, {
    "label": "E",
    "text": "tune2fs -b 32768 /dev/sdb1"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "e2fsck -b でバックアップスーパーブロックの位置を指定すると、その情報を使ってチェックと修復を行い、プライマリスーパーブロックも書き戻されます。mke2fs -n は実際には作成せずにバックアップ位置を表示するために使えますが、mke2fs -S はスーパーブロックとグループ記述子だけを書き直す最終手段で、最初に試す方法ではありません。tune2fs や fsck -N に代替スーパーブロックで修復する機能はありません。",
  "answerKeys": ["ext4 ファイルシステム /dev/sdb1 の"],
  "answerTexts": ["e2fsck -b 32768 /dev/sdb1"],
  "answerHints": ["e2fsck"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-129",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "ext4 ファイルシステム /dev/sdc1 について、マウント30回ごと、または前回のチェックから1か月経過したときに起動時の強制チェックが行われるよう設定したい。実行するコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "tune2fs -m 1 /dev/sdc1"
  }, {
    "label": "B",
    "text": "tune2fs -i 1m /dev/sdc1"
  }, {
    "label": "C",
    "text": "tune2fs -C 30 /dev/sdc1"
  }, {
    "label": "D",
    "text": "e2fsck -c 30 /dev/sdc1"
  }, {
    "label": "E",
    "text": "tune2fs -c 30 /dev/sdc1"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "tune2fs -c は強制チェックまでの最大マウント回数を、tune2fs -i はチェック間隔を（d、w、m の単位付きで）設定します。-C は現在のマウント回数そのものを書き換えるオプションです。e2fsck -c は badblocks による検査、tune2fs -m は予約ブロックの割合の設定です。",
  "answerKeys": ["ext4 ファイルシステム /dev/sdc1"],
  "answerTexts": ["tune2fs -i 1m /dev/sdc1", "tune2fs -c 30 /dev/sdc1"],
  "answerHints": ["tune2fs -i", "tune2fs -c"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-130",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "データ用の大容量 ext4 ファイルシステムで、root 用に予約されたブロックが多く一般ユーザーが使える容量を圧迫している。データを保持したまま予約ブロックを全体の1%に減らすコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "resize2fs -m 1 /dev/sdb1"
  }, {
    "label": "B",
    "text": "e2fsck -m 1 /dev/sdb1"
  }, {
    "label": "C",
    "text": "tune2fs -m 1 /dev/sdb1"
  }, {
    "label": "D",
    "text": "tune2fs -r 1 /dev/sdb1"
  }, {
    "label": "E",
    "text": "mke2fs -m 1 /dev/sdb1"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "tune2fs -m は予約ブロックの割合をパーセントで変更し、既定値は5%です。-r は割合ではなくブロック数で指定するため、1 を指定すると1ブロックになります。mke2fs -m も同じ指定ができますが、ファイルシステムを作り直すためデータが失われます。e2fsck や resize2fs に予約割合を変更する機能はありません。",
  "answerKeys": ["データ用の"],
  "answerTexts": ["tune2fs -m 1 /dev/sdb1"],
  "answerHints": ["tune2fs -m"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-131",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "mke2fs -j /dev/sdb1 を実行したときに作成されるファイルシステムとして正しいものを選択してください（/etc/mke2fs.conf で特別な設定はしていないものとする）。",
  "choices": [{
    "label": "A",
    "text": "ジャーナルを持たない ext2 ファイルシステム"
  }, {
    "label": "B",
    "text": "ジャーナルを持つ ext3 ファイルシステム"
  }, {
    "label": "C",
    "text": "XFS ファイルシステム"
  }, {
    "label": "D",
    "text": "ジャーナル専用の外部ジャーナルデバイス"
  }, {
    "label": "E",
    "text": "エクステントを有効にした ext4 ファイルシステム"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mke2fs の -j オプションはジャーナルを作成するため、ext3 ファイルシステムになります。オプションなしの mke2fs は ext2 を作成し、ext4 にするには -t ext4 を指定するか mkfs.ext4 を使います。外部ジャーナルデバイスは -O journal_dev で作成します。",
  "answerKeys": ["mke2fs"],
  "answerTexts": ["ジャーナルを持つ ext3 ファイルシステム"],
  "answerHints": ["ジャーナルを持つ"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-132",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "マウント済みの Btrfs ファイルシステム /mnt/pool で、すべてのデータとメタデータを読み出してチェックサムを検証し、RAID1 などの冗長コピーがあれば破損ブロックを修復する処理をオンラインで開始したい。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "btrfs scrub start /mnt/pool"
  }, {
    "label": "B",
    "text": "btrfs filesystem defragment --verify /mnt/pool"
  }, {
    "label": "C",
    "text": "btrfs check --repair /mnt/pool"
  }, {
    "label": "D",
    "text": "btrfs device stats --repair /mnt/pool"
  }, {
    "label": "E",
    "text": "btrfs balance verify /mnt/pool"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "btrfs scrub start はマウントしたまま全ブロックを読み出してチェックサムを検証し、正常なコピーがあれば修復します。進捗は btrfs scrub status で確認できます。btrfs check はアンマウント状態で使うオフラインのチェッカーで、--repair は最終手段とされます。balance や defragment は検証用のコマンドではありません。",
  "answerKeys": ["マウント済みの Btrfs"],
  "answerTexts": ["btrfs scrub start /mnt/pool"],
  "answerHints": ["btrfs scrub"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-133",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "debugfs は ext2/ext3/ext4 の内部構造を対話的に調査・変更するツールである。debugfs で inode の書き換えなどの変更を行うため、ファイルシステムを読み書き可能モードで開くオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-r"
  }, {
    "label": "B",
    "text": "-y"
  }, {
    "label": "C",
    "text": "-w"
  }, {
    "label": "D",
    "text": "-f"
  }, {
    "label": "E",
    "text": "-b"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "debugfs は既定で読み取り専用でファイルシステムを開き、-w を指定すると読み書き可能モードになります。-f はコマンドを記述したファイルからの読み込み、-b はブロックサイズの指定です。-r や -y といった読み書きモードを指定するオプションはありません。",
  "answerKeys": ["debugfs"],
  "answerTexts": ["-w"],
  "answerHints": ["-w"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-134",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ext4 ファイルシステム /dev/sde1 のディスクに不良セクタが疑われる。アンマウントした状態で読み取りテストによって不良ブロックを検出し、見つかったブロックを不良ブロックリストに登録してファイルシステムが使用しないようにしたい。実行するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "e2fsck -c /dev/sde1"
  }, {
    "label": "B",
    "text": "dumpe2fs -b /dev/sde1"
  }, {
    "label": "C",
    "text": "badblocks -w /dev/sde1"
  }, {
    "label": "D",
    "text": "tune2fs -c /dev/sde1"
  }, {
    "label": "E",
    "text": "e2fsck -p /dev/sde1"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "e2fsck -c は内部で badblocks による読み取り専用テストを実行し、検出したブロックをファイルシステムの不良ブロック inode に追加します。badblocks -w は破壊的な書き込みテストでデータが消え、単独では結果がファイルシステムに登録されません。dumpe2fs -b は登録済みの不良ブロックを表示するだけです。",
  "answerKeys": ["ext4 ファイルシステム /dev/sde1"],
  "answerTexts": ["e2fsck -c /dev/sde1"],
  "answerHints": ["e2fsck -c"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-135",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "電源障害の後、アンマウント済みの XFS ファイルシステムに xfs_repair を実行したところ、次のメッセージが表示された。データの損失を最小限にするために次に行うべき操作として適切なものを選択してください。\n\n# xfs_repair /dev/sdf1\nPhase 1 - find and verify superblock...\nPhase 2 - using internal log\n        - zero log...\nERROR: The filesystem has valuable metadata changes in a log which needs to\nbe replayed.  Mount the filesystem to replay the log, and unmount it before\nre-running xfs_repair.",
  "choices": [{
    "label": "A",
    "text": "ただちに xfs_repair -L を実行してログを消去する"
  }, {
    "label": "B",
    "text": "一度マウントしてログを再生させ、アンマウントしてから xfs_repair を再実行する"
  }, {
    "label": "C",
    "text": "xfs_check でログを再生する"
  }, {
    "label": "D",
    "text": "xfs_info /dev/sdf1 を実行してログを再生する"
  }, {
    "label": "E",
    "text": "e2fsck -b 32768 /dev/sdf1 でバックアップスーパーブロックから修復する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "メッセージのとおり、まずマウントしてジャーナルログを再生させ、アンマウントしてから xfs_repair を再実行するのが正しい手順です。xfs_repair -L はログを強制的にゼロにするためメタデータの変更が失われる可能性があり、マウントできない場合の最終手段です。xfs_check は読み取り専用の旧来のチェッカー（現在は xfs_repair -n で代替）で、ログは再生しません。e2fsck は ext 系用、xfs_info はジオメトリの表示用です。",
  "answerKeys": ["電源障害の"],
  "answerTexts": ["一度マウントしてログを再生させ、アンマウントしてから xfs_repair を再実行する"],
  "answerHints": ["一度"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-136",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "マウント済みの XFS ファイルシステムについて、ブロックサイズ、アロケーショングループ数、ログのサイズなどのジオメトリ情報を表示するコマンド名を記述してください。",
  "choices": [],
  "answer": ["xfs_info"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "xfs_info はマウントポイントなどを指定して、XFS のブロックサイズ、agcount、ログのサイズといったジオメトリを表示します。より低レベルにメタデータを調査する場合は xfs_db を使います。ext 系の同様の情報は dumpe2fs で確認します。",
  "answerKeys": ["マウント済みの XFS"],
  "answerTexts": ["xfs_info"],
  "answerHints": ["xfs_info"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-137",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "smartctl を使って /dev/sda について次の2つの操作を行いたい。「SMART による総合的な健康状態の判定を表示する」「短時間のセルフテストを開始する」。それぞれに該当するコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "smartctl -t short /dev/sda"
  }, {
    "label": "B",
    "text": "smartctl -s on /dev/sda"
  }, {
    "label": "C",
    "text": "smartctl -H /dev/sda"
  }, {
    "label": "D",
    "text": "smartctl -l error /dev/sda"
  }, {
    "label": "E",
    "text": "smartd -t short /dev/sda"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "smartctl -H は SMART の総合判定（PASSED/FAILED）を表示し、smartctl -t short は短時間のセルフテストをバックグラウンドで開始します。結果は smartctl -l selftest で確認します。-s on は SMART 機能の有効化、-l error はエラーログの表示です。smartd は /etc/smartd.conf に従って常時監視するデーモンで、このような使い方はしません。",
  "answerKeys": ["smartctl"],
  "answerTexts": ["smartctl -t short /dev/sda", "smartctl -H /dev/sda"],
  "answerHints": ["smartctl -t", "smartctl -H"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-138",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SSD 上にマウントされたファイルシステム / について、使用されていないブロックをデバイスに通知（TRIM/discard）し、処理した容量を表示させたい。実行するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "tune2fs -o discard /"
  }, {
    "label": "B",
    "text": "smartctl -t trim /"
  }, {
    "label": "C",
    "text": "blkdiscard -v /"
  }, {
    "label": "D",
    "text": "fstrim -v /"
  }, {
    "label": "E",
    "text": "e2fsck -E discard /"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fstrim はマウント済みファイルシステムの未使用領域をデバイスに discard し、-v で解放した容量を表示します。多くのディストリビューションでは fstrim.timer で定期実行されます。blkdiscard はデバイス全体（または範囲）を対象とし、内容をすべて破棄するため、使用中のファイルシステムに対して使うものではありません。e2fsck や tune2fs はマウントポイントを対象とせず、smartctl に trim テストはありません。",
  "answerKeys": ["SSD 上に"],
  "answerTexts": ["fstrim -v /"],
  "answerHints": ["fstrim"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-139",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/auto.master に次の行がある。この行の説明として正しいものを選択してください。\n\n/misc   /etc/auto.misc   --timeout=60",
  "choices": [{
    "label": "A",
    "text": "/misc へのマウントに60秒以上かかった場合はタイムアウトとして失敗させる"
  }, {
    "label": "B",
    "text": "/etc/auto.misc を /misc に60秒ごとに再読み込みする"
  }, {
    "label": "C",
    "text": "/etc/auto.misc に記載されたサーバーへの接続を60秒でタイムアウトさせ、/misc にマウントする"
  }, {
    "label": "D",
    "text": "/misc を起動60秒後に /etc/auto.misc の内容でマウントする"
  }, {
    "label": "E",
    "text": "/misc 配下のマウントを /etc/auto.misc のマップで管理し、60秒間アクセスがなければアンマウントする"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "auto.master の各行はマウントポイント（ベースディレクトリ）、マップファイル、オプションの順に記述します。--timeout は未使用状態が続いたときに自動アンマウントするまでの秒数です。マップの再読み込み間隔や接続タイムアウト、起動後の遅延マウントを指定するものではありません。",
  "answerKeys": ["/etc/auto.master に"],
  "answerTexts": ["/misc 配下のマウントを /etc/auto.misc のマップで管理し、60秒間アクセスがなければアンマウントする"],
  "answerHints": ["/misc 配下の"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-140",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/auto.master で /misc に /etc/auto.misc が関連付けられ、/etc/auto.misc には次の行がある。ユーザーが CD-ROM の内容を参照するためにアクセスするパスを選択してください。\n\ncd   -fstype=iso9660,ro,nosuid,nodev   :/dev/cdrom",
  "choices": [{
    "label": "A",
    "text": "/misc/cd"
  }, {
    "label": "B",
    "text": "/misc"
  }, {
    "label": "C",
    "text": "/cd"
  }, {
    "label": "D",
    "text": "/media/cdrom"
  }, {
    "label": "E",
    "text": "/dev/cdrom/cd"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "間接マップでは、マップのキー（ここでは cd）が auto.master で指定したベースディレクトリ /misc の下に作られ、/misc/cd にアクセスしたときに /dev/cdrom がマウントされます。場所の先頭の : はローカルデバイスであることを示します。/misc 自体は autofs が管理するディレクトリで、メディアの内容は表示されません。",
  "answerKeys": ["/etc/auto.master で"],
  "answerTexts": ["/misc/cd"],
  "answerHints": ["/misc/cd"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-141",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "autofs の間接マップで、NFS サーバー nfs01 がエクスポートしている /export/projects を、キー projects として読み書き可能でマウントさせたい。マップファイルの記述として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "projects -fstype=nfs :/export/projects@nfs01"
  }, {
    "label": "B",
    "text": "nfs01:/export/projects projects -rw,soft"
  }, {
    "label": "C",
    "text": "projects nfs01:/export/projects -rw,soft"
  }, {
    "label": "D",
    "text": "-rw,soft projects nfs01:/export/projects"
  }, {
    "label": "E",
    "text": "projects -rw,soft nfs01:/export/projects"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "マップファイルの各行はキー、マウントオプション（先頭にハイフン）、場所の順に記述し、NFS の場合は場所を サーバー:パス の形式で指定します。オプションを末尾に置いたり、キーと場所の順序を入れ替えたりした記述は誤りです。:パス の形式はローカルデバイスを示すため NFS 共有には使いません。",
  "answerKeys": ["autofs の間接"],
  "answerTexts": ["projects -rw,soft nfs01:/export/projects"],
  "answerHints": ["projects -rw"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-142",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "autofs で、ベースディレクトリの下ではなく /opt/apps や /srv/data のように任意の絶対パスを直接マウントポイントにしたい。/etc/auto.master に記述する内容として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "* /etc/auto.direct"
  }, {
    "label": "B",
    "text": "/- /etc/auto.direct"
  }, {
    "label": "C",
    "text": "+auto.direct"
  }, {
    "label": "D",
    "text": "/direct /etc/auto.direct --direct"
  }, {
    "label": "E",
    "text": "/ /etc/auto.direct"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "auto.master のマウントポイント欄に /- を指定すると直接マップになり、マップファイル側のキーにマウントポイントの絶対パスを記述します。/ を指定するとルート全体を autofs の管理下に置くことになり不適切です。* はマップファイル内のワイルドカードキーとして使うもので、--direct というオプションはありません。",
  "answerKeys": ["autofs で"],
  "answerTexts": ["/- /etc/auto.direct"],
  "answerHints": ["/-"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-143",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NFS サーバー fs01 の /home 配下にある各ユーザーのホームディレクトリを、クライアントの /home/ユーザー名 として、ユーザーごとに行を書かずに autofs で自動マウントしたい。auto.master で /home に関連付けたマップファイルの記述として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "& -rw,soft fs01:/home/*"
  }, {
    "label": "B",
    "text": "$USER -rw,soft fs01:/home/$USER"
  }, {
    "label": "C",
    "text": "* -rw,soft fs01:/home/*"
  }, {
    "label": "D",
    "text": "* -rw,soft fs01:/home/&"
  }, {
    "label": "E",
    "text": "% -rw,soft fs01:/home/%"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "マップのキーに * を使うと任意のキーに一致し、場所の中の & はアクセスされたキー（ここではユーザー名）に置き換えられます。場所の側に * を書いても置換されず、% はこの用途の置換記号ではありません。$USER はマウントを要求したプロセスの環境に依存し、キーに使って任意のディレクトリ名に一致させることはできません。",
  "answerKeys": ["NFS サーバー fs01"],
  "answerTexts": ["* -rw,soft fs01:/home/&"],
  "answerHints": ["* -rw,soft fs01:/home/&"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-144",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "mkisofs（genisoimage）で ISO9660 イメージを作成する。Linux 上で UNIX のパーミッションや長いファイル名を保持し、さらに Windows でも長いファイル名を表示できるようにするために指定する拡張のオプションを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "-b"
  }, {
    "label": "B",
    "text": "-o"
  }, {
    "label": "C",
    "text": "-J"
  }, {
    "label": "D",
    "text": "-R"
  }, {
    "label": "E",
    "text": "-V"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-R は Rock Ridge 拡張を付加して UNIX のパーミッション、シンボリックリンク、長いファイル名を記録し、-J は Joliet 拡張を付加して Windows で長いファイル名（Unicode）を扱えるようにします。-o は出力ファイル名、-V はボリューム ID、-b は El Torito のブートイメージを指定するオプションです。",
  "answerKeys": ["mkisofs"],
  "answerTexts": ["-J", "-R"],
  "answerHints": ["-J", "-R"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-145",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "DVD や Blu-ray Disc で標準的に使われ、パケットライトによる追記にも対応し、ISO9660 の単一ファイルサイズの制約を受けずに大きなファイルを扱えるファイルシステムを選択してください。",
  "choices": [{
    "label": "A",
    "text": "HFS"
  }, {
    "label": "B",
    "text": "SquashFS"
  }, {
    "label": "C",
    "text": "UDF"
  }, {
    "label": "D",
    "text": "VFAT"
  }, {
    "label": "E",
    "text": "ext2"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "UDF（Universal Disk Format）は DVD や Blu-ray の標準ファイルシステムで、パケットライトや大きなファイルに対応しています。VFAT は単一ファイルが4GiB未満に制限され、SquashFS は読み取り専用の圧縮ファイルシステムです。HFS は旧来の Mac OS 用、ext2 は Linux のディスク用ファイルシステムで、光学メディアの標準ではありません。",
  "answerKeys": ["DVD"],
  "answerTexts": ["UDF"],
  "answerHints": ["UDF"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-146",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "新しいディスク /dev/sdg1 を暗号化して使うため、次のコマンドを実行した。続けてファイルシステムを作成する対象として正しいものを選択してください。\n\n# cryptsetup luksFormat /dev/sdg1\n# cryptsetup open /dev/sdg1 secure",
  "choices": [{
    "label": "A",
    "text": "/etc/crypttab/secure"
  }, {
    "label": "B",
    "text": "/dev/dm-crypt/sdg1"
  }, {
    "label": "C",
    "text": "/dev/sdg1"
  }, {
    "label": "D",
    "text": "/dev/secure"
  }, {
    "label": "E",
    "text": "/dev/mapper/secure"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "cryptsetup open（luksOpen）は LUKS ヘッダーで鍵を復号し、デバイスマッパー上に /dev/mapper/secure という復号済みのデバイスを作成します。ファイルシステムはこのデバイスに作成します。/dev/sdg1 に直接 mkfs を実行すると LUKS ヘッダーが上書きされ、暗号化ボリュームが失われます。",
  "answerKeys": ["新しいディスク /"],
  "answerTexts": ["/dev/mapper/secure"],
  "answerHints": ["/dev/mapper"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-147",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "LUKS で暗号化した /dev/sdh1 に、既存のパスフレーズを残したまま別の管理者用パスフレーズを追加したい。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "cryptsetup luksFormat /dev/sdh1"
  }, {
    "label": "B",
    "text": "cryptsetup luksChangeKey /dev/sdh1"
  }, {
    "label": "C",
    "text": "cryptsetup luksAddKey /dev/sdh1"
  }, {
    "label": "D",
    "text": "cryptsetup luksKillSlot /dev/sdh1"
  }, {
    "label": "E",
    "text": "cryptsetup luksDump /dev/sdh1"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "cryptsetup luksAddKey は既存のパスフレーズで認証したうえで、空いているキースロットに新しいパスフレーズを追加します。luksChangeKey は既存のパスフレーズを置き換えるため、元のパスフレーズは使えなくなります。luksFormat は再初期化でデータが失われ、luksDump はヘッダー情報の表示、luksKillSlot はキースロットの削除です。",
  "answerKeys": ["LUKS で"],
  "answerTexts": ["cryptsetup luksAddKey /dev/sdh1"],
  "answerHints": ["cryptsetup luksAddKey"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-148",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "LUKS などで暗号化されたブロックデバイスについて、システム起動時に解除して /dev/mapper 配下にデバイスを作成するための対応関係（名前、デバイス、鍵ファイル、オプション）を記述する設定ファイルのパスを絶対パスで記述してください。",
  "choices": [],
  "answer": ["/etc/crypttab"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/crypttab には各行に、作成するデバイスマッパー名、暗号化されたデバイス（UUID= も可）、鍵ファイル（none ならパスフレーズを入力）、オプションを記述します。systemd 環境では systemd-cryptsetup-generator がこのファイルからユニットを生成します。解除後のデバイスのマウントは /etc/fstab に記述します。",
  "answerKeys": ["LUKS などで"],
  "answerTexts": ["/etc/crypttab"],
  "answerHints": ["/etc/crypttab"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-149",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Btrfs のサブボリューム /mnt/pool/data について、バックアップ用に読み取り専用のスナップショット /mnt/pool/snap/data-20261101 を作成したい。実行するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "btrfs snapshot create --ro /mnt/pool/data /mnt/pool/snap/data-20261101"
  }, {
    "label": "B",
    "text": "btrfs subvolume snapshot -r /mnt/pool/data /mnt/pool/snap/data-20261101"
  }, {
    "label": "C",
    "text": "btrfs subvolume create -r /mnt/pool/data /mnt/pool/snap/data-20261101"
  }, {
    "label": "D",
    "text": "btrfs filesystem snapshot -r /mnt/pool/data /mnt/pool/snap/data-20261101"
  }, {
    "label": "E",
    "text": "cp -r --reflink /mnt/pool/data /mnt/pool/snap/data-20261101"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "btrfs subvolume snapshot はサブボリュームのスナップショットを作成し、-r を付けると読み取り専用になります。読み取り専用スナップショットは btrfs send による転送の元としても使われます。btrfs subvolume create は空のサブボリュームを作成するもので、btrfs snapshot や btrfs filesystem snapshot というサブコマンドはありません。cp --reflink はファイル単位のコピーで、読み取り専用のスナップショットにはなりません。",
  "answerKeys": ["Btrfs のサブボリューム /"],
  "answerTexts": ["btrfs subvolume snapshot -r /mnt/pool/data /mnt/pool/snap/data-20261101"],
  "answerHints": ["btrfs subvolume snapshot"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-150",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Btrfs のサブボリュームとスナップショットに関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "スナップショット作成時には、元のサブボリュームの全データが新しいブロックへ即座に複製される"
  }, {
    "label": "B",
    "text": "サブボリュームは mount の subvol= または subvolid= オプションを指定して個別にマウントできる"
  }, {
    "label": "C",
    "text": "スナップショットはそれ自体がサブボリュームであり、作成直後は元のサブボリュームとデータブロックを共有する"
  }, {
    "label": "D",
    "text": "サブボリュームを作成するには、事前に専用のパーティションを用意する必要がある"
  }, {
    "label": "E",
    "text": "サブボリュームを btrfs subvolume delete で削除するには、ファイルシステム全体をアンマウントする必要がある"
  }],
  "answer": ["B", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "サブボリュームは1つの Btrfs ファイルシステム内の独立したツリーで、subvol= や subvolid= で個別にマウントできます。スナップショットもサブボリュームの一種で、コピーオンライトにより作成直後は元とデータを共有し、変更された部分だけが新たに書き込まれます。サブボリュームに専用パーティションは不要で、削除もマウントしたまま行えます。",
  "answerKeys": ["Btrfs のサブボリュームと"],
  "answerTexts": ["サブボリュームは mount の subvol= または subvolid= オプションを指定して個別にマウントできる", "スナップショットはそれ自体がサブボリュームであり、作成直後は元のサブボリュームとデータブロックを共有する"],
  "answerHints": ["サブボリュームは", "スナップショットはそれ"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-151",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/dev/sdb1、/dev/sdc1、/dev/sdd1 の3つのパーティションを使用して、RAID5 のソフトウェアRAIDアレイ /dev/md0 を新規作成したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1"
  }, {
    "label": "B",
    "text": "mdadm --assemble /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1"
  }, {
    "label": "C",
    "text": "mdadm /dev/md0 --add --level=5 /dev/sdb1 /dev/sdc1 /dev/sdd1"
  }, {
    "label": "D",
    "text": "mdadm --create /dev/md0 --level=5 --spare-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1"
  }, {
    "label": "E",
    "text": "mdadm --create /dev/md0 --chunk=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "新しいアレイの作成には mdadm --create を使い、--level で RAID レベル、--raid-devices でアクティブなデバイス数を指定します。--assemble は既存のアレイを組み立てるためのモードで、新規作成には使えません。--spare-devices はスペアディスク数、--chunk はチャンクサイズの指定です。",
  "answerKeys": ["/dev/sdb1、"],
  "answerTexts": ["mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1"],
  "answerHints": ["mdadm --create /dev/md0 --level=5 --raid"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-152",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "MBR パーティションテーブルを使用するディスクで、カーネルの RAID 自動検出（Linux raid autodetect）の対象とするために設定するパーティションタイプを選択してください。",
  "choices": [{
    "label": "A",
    "text": "0x07"
  }, {
    "label": "B",
    "text": "0x8E"
  }, {
    "label": "C",
    "text": "0x82"
  }, {
    "label": "D",
    "text": "0xFD"
  }, {
    "label": "E",
    "text": "0x83"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Linux raid autodetect のパーティションタイプは 0xFD です。0x83 は Linux（通常のファイルシステム）、0x82 は Linux swap、0x8E は Linux LVM、0x07 は NTFS/exFAT 等で使われるタイプです。",
  "answerKeys": ["MBR"],
  "answerTexts": ["0xFD"],
  "answerHints": ["0xFD"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-153",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/proc/mdstat を確認したところ、次の出力が得られた。この出力から読み取れるアレイの状態として正しいものを選択してください。\n\nPersonalities : [raid6] [raid5] [raid4]\nmd0 : active raid5 sdd1[2] sdc1[1] sdb1[0](F)\n      2093056 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/2] [_UU]\n\nunused devices: <none>",
  "choices": [{
    "label": "A",
    "text": "3台すべてが正常で、/dev/sdb1 はスペアディスクとして待機している"
  }, {
    "label": "B",
    "text": "アレイは再構築が完了し、3台すべてが同期済みである"
  }, {
    "label": "C",
    "text": "/dev/sdb1 がスペアから昇格して再同期（resync）を実行中である"
  }, {
    "label": "D",
    "text": "/dev/sdd1 が故障としてマークされ、アレイは停止している"
  }, {
    "label": "E",
    "text": "/dev/sdb1 が故障としてマークされ、アレイは2台で縮退（degraded）状態で稼働している"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "デバイス名の後の (F) は故障（Faulty）を示し、[3/2] は3台構成中2台が稼働中であること、[_UU] の _ は欠落したデバイスを表します。したがって sdb1 が故障し、アレイは縮退状態で動作を継続しています。スペアであれば (S) と表示され、再同期中であれば recovery や resync の進捗行が表示されます。",
  "answerKeys": ["/proc"],
  "answerTexts": ["/dev/sdb1 が故障としてマークされ、アレイは2台で縮退（degraded）状態で稼働している"],
  "answerHints": ["/dev/sdb1 が故障として"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-154",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "RAID1 アレイ /dev/md0 を構成する /dev/sdb1 の SMART エラーが増えているため、まだ動作しているうちに新しいディスクのパーティション /dev/sde1 と交換したい。適切な手順を選択してください。",
  "choices": [{
    "label": "A",
    "text": "mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdc1 /dev/sde1"
  }, {
    "label": "B",
    "text": "mdadm /dev/md0 --add /dev/sde1 → mdadm --stop /dev/md0 → mdadm --assemble /dev/md0 /dev/sde1"
  }, {
    "label": "C",
    "text": "mdadm /dev/md0 --fail /dev/sdb1 → mdadm /dev/md0 --remove /dev/sdb1 → mdadm /dev/md0 --add /dev/sde1"
  }, {
    "label": "D",
    "text": "mdadm --zero-superblock /dev/md0 → mdadm /dev/md0 --add /dev/sde1"
  }, {
    "label": "E",
    "text": "mdadm /dev/md0 --remove /dev/sdb1 → mdadm /dev/md0 --fail /dev/sdb1 → mdadm /dev/md0 --add /dev/sde1"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "稼働中のメンバーはそのままでは取り外せないため、まず --fail で故障としてマークし、次に --remove でアレイから外し、最後に --add で新しいデバイスを追加して再同期させます。アクティブなデバイスに対していきなり --remove を実行するとデバイスがビジー状態のためエラーになります。--create でアレイを作り直すと既存データを失う危険があります。",
  "answerKeys": ["RAID1 アレイ"],
  "answerTexts": ["mdadm /dev/md0 --fail /dev/sdb1 → mdadm /dev/md0 --remove /dev/sdb1 → mdadm /dev/md0 --add /dev/sde1"],
  "answerHints": ["mdadm /dev/md0 --fail"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-155",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "2TB のディスク6台で RAID6 アレイを構成した場合、利用可能な容量として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "12TB"
  }, {
    "label": "B",
    "text": "8TB"
  }, {
    "label": "C",
    "text": "10TB"
  }, {
    "label": "D",
    "text": "6TB"
  }, {
    "label": "E",
    "text": "4TB"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "RAID6 は2台分の容量を二重パリティに使用するため、利用可能容量は（台数-2）×ディスク容量で 4×2TB=8TB となります。10TB は1台分のみをパリティに使う RAID5 の場合、6TB はデフォルト構成の RAID10 のように半分をミラーに使う場合の値です。",
  "answerKeys": ["2TB"],
  "answerTexts": ["8TB"],
  "answerHints": ["8TB"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-156",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "ソフトウェアRAIDのRAIDレベルに関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "RAID5 はパリティを全ディスクに分散して格納し、最低3台のディスクが必要である"
  }, {
    "label": "B",
    "text": "RAID0 はストライピングにより性能が向上するが冗長性はなく、1台の故障でアレイ全体のデータが失われる"
  }, {
    "label": "C",
    "text": "RAID1 はディスクを最低3台必要とし、容量は全ディスク合計の3分の2になる"
  }, {
    "label": "D",
    "text": "RAID6 は最低3台のディスクで構成でき、任意の3台が同時に故障してもデータを保持できる"
  }, {
    "label": "E",
    "text": "RAID5 はパリティを専用の1台のディスクにまとめて格納する"
  }],
  "answer": ["A", "B"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "RAID0 はストライピングのみで冗長性がなく、RAID5 は分散パリティ方式で最低3台が必要です。RAID1 は最低2台のミラーリングで、RAID6 は最低4台必要かつ同時に2台までの故障に耐えます。パリティを専用ディスクに置くのは RAID4 の特徴です。",
  "answerKeys": ["ソフトウェアRAIDの"],
  "answerTexts": ["RAID5 はパリティを全ディスクに分散して格納し、最低3台のディスクが必要である", "RAID0 はストライピングにより性能が向上するが冗長性はなく、1台の故障でアレイ全体のデータが失われる"],
  "answerHints": ["RAID5 はパリティを全", "RAID0"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-157",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "RAID10（mdadm の --level=10）に関する説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ミラーリングとストライピングを組み合わせたもので、デフォルト構成では容量は全体の半分になる"
  }, {
    "label": "B",
    "text": "ストライピングのみを行い、冗長性はない"
  }, {
    "label": "C",
    "text": "パリティ計算を2重に行うため、RAID6 より書き込み性能が低い"
  }, {
    "label": "D",
    "text": "パリティを分散して格納し、容量は（台数-1）台分となる"
  }, {
    "label": "E",
    "text": "最低10台のディスクが必要である"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "RAID10 はミラーリング（RAID1）とストライピング（RAID0）を組み合わせたレベルで、デフォルトの2コピー構成では利用可能容量は全体の半分になります。パリティは使用しないため、パリティ計算による書き込み性能の低下はありません。名前の「10」はディスク台数ではなく RAID1+0 を意味します。",
  "answerKeys": ["RAID10"],
  "answerTexts": ["ミラーリングとストライピングを組み合わせたもので、デフォルト構成では容量は全体の半分になる"],
  "answerHints": ["ミラーリング"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-158",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "現在稼働中のすべての md アレイの情報を、/etc/mdadm.conf にそのまま記述できる ARRAY 行の形式で出力するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mdadm --assemble --scan"
  }, {
    "label": "B",
    "text": "mdadm --monitor --scan"
  }, {
    "label": "C",
    "text": "mdadm --query /dev/md0"
  }, {
    "label": "D",
    "text": "mdadm --detail --scan"
  }, {
    "label": "E",
    "text": "cat /proc/mdstat"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mdadm --detail --scan は稼働中のアレイを ARRAY 行の形式で出力するため、mdadm --detail --scan >> /etc/mdadm.conf のように設定ファイル作成に使われます（Debian 系では /etc/mdadm/mdadm.conf）。/proc/mdstat はカーネルが示す状態表示で設定ファイル形式ではありません。--assemble --scan は設定ファイルなどを元にアレイを組み立てるコマンドです。",
  "answerKeys": ["現在稼働中のすべての"],
  "answerTexts": ["mdadm --detail --scan"],
  "answerHints": ["mdadm --detail"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-159",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "mdadm の設定ファイル /etc/mdadm.conf で使用できるキーワードを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "chunk-size"
  }, {
    "label": "B",
    "text": "nr-raid-disks"
  }, {
    "label": "C",
    "text": "raiddev"
  }, {
    "label": "D",
    "text": "MAILADDR"
  }, {
    "label": "E",
    "text": "ARRAY"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ARRAY はアレイの識別情報（UUID など）を定義し、MAILADDR は mdadm --monitor が障害通知メールを送る宛先を指定します。raiddev、nr-raid-disks、chunk-size は旧来の raidtools が使用した /etc/raidtab の記述であり、mdadm.conf のキーワードではありません。",
  "answerKeys": ["mdadm"],
  "answerTexts": ["MAILADDR", "ARRAY"],
  "answerHints": ["MAILADDR", "ARRAY"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-160",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ソフトウェアRAIDを構成していたディスク群を別のサーバーに移設した。新サーバーにはまだ /etc/mdadm.conf がない。各ディスクのスーパーブロック情報を元にアレイを検出して起動するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mdadm --assemble --scan"
  }, {
    "label": "B",
    "text": "mdadm --grow --scan"
  }, {
    "label": "C",
    "text": "mdadm --zero-superblock --scan"
  }, {
    "label": "D",
    "text": "mdadm --stop --scan"
  }, {
    "label": "E",
    "text": "mdadm --create --scan"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mdadm --assemble --scan は設定ファイルに定義がない場合でも、デバイスのスーパーブロックを走査してアレイを組み立てます。--create は新規作成のため既存データを上書きする危険があり、--zero-superblock は RAID のメタデータを消去してしまいます。--stop --scan はアレイを停止する操作です。",
  "answerKeys": ["ソフトウェアRAIDを"],
  "answerTexts": ["mdadm --assemble --scan"],
  "answerHints": ["mdadm --assemble"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-161",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "RAIDアレイ /dev/md0 のRAIDレベル、アレイサイズ、各メンバーデバイスの状態などの詳細情報を表示したい。次のコマンドの空欄に入るオプションを、長いオプション形式（--で始まる形式）で記述してください。\n\nmdadm ______ /dev/md0",
  "choices": [],
  "answer": ["--detail"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mdadm --detail（短縮形 -D）は md デバイスの詳細情報を表示します。RAIDレベル、状態（clean、degraded など）、各メンバーデバイスの役割や故障状態を確認できます。メンバーデバイス側のスーパーブロックを調べる場合は --examine を使います。",
  "answerKeys": ["RAIDアレイ"],
  "answerTexts": ["--detail"],
  "answerHints": ["--detail"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-162",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/dev/sdb1 と /dev/sdc1 でミラーを構成し、/dev/sdd1 をホットスペアとして待機させる RAID1 アレイ /dev/md0 を作成したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mdadm --assemble /dev/md0 --level=1 --spare-devices=1 /dev/sdb1 /dev/sdc1 /dev/sdd1"
  }, {
    "label": "B",
    "text": "mdadm --create /dev/md0 --level=1 --raid-devices=2 --chunk=1 /dev/sdb1 /dev/sdc1 /dev/sdd1"
  }, {
    "label": "C",
    "text": "mdadm --create /dev/md0 --level=1 --raid-devices=2 --spare-devices=1 /dev/sdb1 /dev/sdc1 /dev/sdd1"
  }, {
    "label": "D",
    "text": "mdadm --create /dev/md0 --level=1 --raid-devices=1 --spare-devices=2 /dev/sdb1 /dev/sdc1 /dev/sdd1"
  }, {
    "label": "E",
    "text": "mdadm --create /dev/md0 --level=1 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "--raid-devices でアクティブなデバイス数を2、--spare-devices でスペア数を1と指定すると、列挙した最後のデバイスがスペアになります。--raid-devices=3 にすると3台すべてがアクティブな3重ミラーとなりスペアにはなりません。--assemble は既存アレイの組み立て用で新規作成には使えません。",
  "answerKeys": ["/dev/sdb1 と"],
  "answerTexts": ["mdadm --create /dev/md0 --level=1 --raid-devices=2 --spare-devices=1 /dev/sdb1 /dev/sdc1 /dev/sdd1"],
  "answerHints": ["mdadm --create /dev/md0 --level=1 --raid-devices=2 --spare"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-163",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以前別の md アレイのメンバーだった /dev/sdc1 を新しいアレイに再利用しようとしたところ、古いアレイの情報が検出されて警告が出た。このデバイスから md のメタデータを消去するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mdadm --remove /dev/sdc1"
  }, {
    "label": "B",
    "text": "mdadm --examine /dev/sdc1"
  }, {
    "label": "C",
    "text": "mdadm --fail /dev/sdc1"
  }, {
    "label": "D",
    "text": "mdadm --stop /dev/sdc1"
  }, {
    "label": "E",
    "text": "mdadm --zero-superblock /dev/sdc1"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mdadm --zero-superblock は指定したデバイスの md スーパーブロックをゼロで上書きし、RAIDメンバーとしての情報を消去します。--examine はスーパーブロックの内容を表示するだけで消去はしません。--remove や --fail はアレイに対してメンバーを操作するもので、メタデータの消去は行いません。",
  "answerKeys": ["以前別の"],
  "answerTexts": ["mdadm --zero-superblock /dev/sdc1"],
  "answerHints": ["mdadm --zero"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-164",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "アレイを組み立てる前に、個々のメンバーデバイス /dev/sdb1 に書き込まれている md スーパーブロックの内容（アレイのUUID、RAIDレベル、デバイスの役割など）を確認したい。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mdadm --detail /dev/sdb1"
  }, {
    "label": "B",
    "text": "mdadm --examine /dev/sdb1"
  }, {
    "label": "C",
    "text": "mdadm --monitor /dev/sdb1"
  }, {
    "label": "D",
    "text": "mdadm --query --scan /dev/sdb1"
  }, {
    "label": "E",
    "text": "cat /proc/mdstat"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mdadm --examine（短縮形 -E）はメンバーデバイスに記録されたスーパーブロックの情報を表示します。--detail は組み立て済みの md デバイス（/dev/md0 など）に対して使うものです。/proc/mdstat は稼働中のアレイの状態しか表示しません。",
  "answerKeys": ["アレイ"],
  "answerTexts": ["mdadm --examine /dev/sdb1"],
  "answerHints": ["mdadm --examine"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-165",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "メンテナンスのため、マウントを解除したソフトウェアRAIDアレイ /dev/md0 を停止し、メンバーデバイスを解放したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mdadm --zero-superblock /dev/md0"
  }, {
    "label": "B",
    "text": "mdadm --remove /dev/md0"
  }, {
    "label": "C",
    "text": "mdadm --grow /dev/md0 --raid-devices=0"
  }, {
    "label": "D",
    "text": "mdadm --stop /dev/md0"
  }, {
    "label": "E",
    "text": "mdadm --fail /dev/md0"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mdadm --stop（短縮形 -S）はアレイを停止し、メンバーデバイスを解放します。--remove や --fail はアレイ内の個々のメンバーデバイスに対する操作です。--zero-superblock はメタデータを消去する操作であり、アレイの停止には使いません。",
  "answerKeys": ["メンテナンスのため"],
  "answerTexts": ["mdadm --stop /dev/md0"],
  "answerHints": ["mdadm --stop"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-166",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ディスク /dev/sda のバッファキャッシュを介さない実際の読み込み性能を測定したい。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "tune2fs -l /dev/sda"
  }, {
    "label": "B",
    "text": "hdparm -T /dev/sda"
  }, {
    "label": "C",
    "text": "hdparm -I /dev/sda"
  }, {
    "label": "D",
    "text": "sdparm --all /dev/sda"
  }, {
    "label": "E",
    "text": "hdparm -t /dev/sda"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "hdparm -t は事前にキャッシュされていないデータをディスクから読み込む速度（buffered disk reads）を測定します。-T はキャッシュからの読み込み速度を測定するもので、主にメモリやCPU、バスの性能を反映します。-I はドライブの識別情報の表示です。",
  "answerKeys": ["ディスク /dev/sda のバッファキャッシュ"],
  "answerTexts": ["hdparm -t /dev/sda"],
  "answerHints": ["hdparm -t"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-167",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ATA ディスク /dev/sda について、対応する機能やモデル名、シリアル番号などの識別情報を、ドライブから直接取得して詳細に表示したい。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "hdparm -t /dev/sda"
  }, {
    "label": "B",
    "text": "hdparm -W /dev/sda"
  }, {
    "label": "C",
    "text": "hdparm -i /dev/sda"
  }, {
    "label": "D",
    "text": "hdparm -I /dev/sda"
  }, {
    "label": "E",
    "text": "fstrim -v /dev/sda"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "hdparm -I はドライブに直接問い合わせて詳細な識別情報を表示します。小文字の -i はブート時にカーネルが取得した識別情報を表示するもので、情報が古い、または簡易である場合があります。-W は書き込みキャッシュの取得と設定、-t は読み込み速度測定です。",
  "answerKeys": ["ATA"],
  "answerTexts": ["hdparm -I /dev/sda"],
  "answerHints": ["hdparm -I"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-168",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SCSI デバイス（SAS ディスクなど）のモードページを参照・変更し、書き込みキャッシュ（WCE）などのパラメータを調整するためのコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "iscsiadm"
  }, {
    "label": "B",
    "text": "sdparm"
  }, {
    "label": "C",
    "text": "dmsetup"
  }, {
    "label": "D",
    "text": "hdparm"
  }, {
    "label": "E",
    "text": "fstrim"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sdparm は SCSI デバイスのモードページなどのパラメータを参照・変更するコマンドで、例えば sdparm --get=WCE /dev/sdb のように使います。hdparm は主に ATA デバイス向けのツールです。iscsiadm は iSCSI イニシエータの管理、dmsetup はデバイスマッパーの操作に使います。",
  "answerKeys": ["SCSI デバイス"],
  "answerTexts": ["sdparm"],
  "answerHints": ["sdparm"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-169",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NVMe SSD /dev/nvme0 の温度、使用率（Percentage Used）、メディアエラー数などの健康状態を確認したい。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "nvme list"
  }, {
    "label": "B",
    "text": "nvme format /dev/nvme0"
  }, {
    "label": "C",
    "text": "nvme smart-log /dev/nvme0"
  }, {
    "label": "D",
    "text": "hdparm -I /dev/nvme0"
  }, {
    "label": "E",
    "text": "sdparm --all /dev/nvme0"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nvme smart-log は NVMe デバイスの SMART/健康情報ログを表示し、温度、使用率、メディアエラー数などを確認できます。nvme list はシステム上の NVMe デバイスを一覧表示するだけです。nvme format はデバイスをフォーマットする操作でデータが失われます。hdparm や sdparm は NVMe デバイス向けのツールではありません。",
  "answerKeys": ["NVMe SSD /"],
  "answerTexts": ["nvme smart-log /dev/nvme0"],
  "answerHints": ["nvme smart"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-170",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "SSD 上の ext4 ファイルシステムで、使用されていないブロックをデバイスに通知する TRIM（discard）を有効活用する方法として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "hdparm -t でデバイスに TRIM コマンドを発行する"
  }, {
    "label": "B",
    "text": "tune2fs -c 0 を実行して TRIM を有効にする"
  }, {
    "label": "C",
    "text": "マウントオプション discard を指定して、ブロック解放時に継続的に TRIM を発行させる"
  }, {
    "label": "D",
    "text": "マウント済みのファイルシステムに対して fstrim を定期的に実行する"
  }, {
    "label": "E",
    "text": "マウントオプション noatime を指定すると TRIM が有効になる"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fstrim はマウントポイントを指定して未使用ブロックをまとめて破棄する方法で、systemd の fstrim.timer などで定期実行されます。discard マウントオプションはブロック解放のたびに TRIM を発行する方法です。hdparm -t は読み込み性能の測定、noatime はアクセス時刻の更新抑止、tune2fs -c は最大マウント回数の設定であり、いずれも TRIM とは関係ありません。",
  "answerKeys": ["SSD 上の"],
  "answerTexts": ["マウントオプション discard を指定して、ブロック解放時に継続的に TRIM を発行させる", "マウント済みのファイルシステムに対して fstrim を定期的に実行する"],
  "answerHints": ["マウントオプション discard", "マウント済みの"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-171",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ディスクへの書き戻し（writeback）の挙動を調整するため、カーネルパラメータ vm.dirty_ratio を 10 に設定し、再起動後もこの設定を維持したい。適切な方法を選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/sysctl.d/ 配下の .conf ファイルに vm.dirty_ratio = 10 と記述し、sysctl --system で反映する"
  }, {
    "label": "B",
    "text": "/etc/sysctl.conf に sysctl -w vm.dirty_ratio=10 という行を記述する"
  }, {
    "label": "C",
    "text": "echo 10 > /proc/sys/vm/dirty_ratio を一度だけ実行する"
  }, {
    "label": "D",
    "text": "hdparm -W 10 /dev/sda を実行する"
  }, {
    "label": "E",
    "text": "tune2fs -o dirty_ratio=10 /dev/sda1 を実行する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/sysctl.conf や /etc/sysctl.d/*.conf に「パラメータ名 = 値」の形式で記述すると起動時に適用され、sysctl --system（または sysctl -p ファイル名）で即座に反映できます。/proc/sys への書き込みや sysctl -w は実行中のカーネルにのみ反映され、再起動すると元に戻ります。設定ファイルにはコマンドではなくパラメータ名と値を記述します。hdparm -W はドライブの書き込みキャッシュの有効・無効の設定、tune2fs -o はデフォルトのマウントオプションの設定です。",
  "answerKeys": ["ディスクへの"],
  "answerTexts": ["/etc/sysctl.d/ 配下の .conf ファイルに vm.dirty_ratio = 10 と記述し、sysctl --system で反映する"],
  "answerHints": ["/etc/sysctl.d"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-172",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "デバイス名（/dev/sdb など）は起動時の検出順で変わる可能性があるため、ディスクのモデル名とシリアル番号、または WWN に基づく永続的な名前でデバイスを参照したい。udev がそのようなシンボリックリンクを作成するディレクトリを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/dev/mapper"
  }, {
    "label": "B",
    "text": "/dev/disk/by-label"
  }, {
    "label": "C",
    "text": "/dev/disk/by-path"
  }, {
    "label": "D",
    "text": "/proc/partitions"
  }, {
    "label": "E",
    "text": "/dev/disk/by-id"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/dev/disk/by-id にはバス種別、モデル名、シリアル番号や WWN（wwn-0x...）に基づくシンボリックリンクが作成されます。by-path は接続されたコントローラやポートなど物理的な経路に基づく名前で、接続先を変えると変化します。by-label はファイルシステムのラベル、/dev/mapper はデバイスマッパーのデバイスです。",
  "answerKeys": ["デバイス名"],
  "answerTexts": ["/dev/disk/by-id"],
  "answerHints": ["/dev/disk/by-id"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-173",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SAN 環境で使用される WWID（World Wide Identifier）に関する説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "iSCSI ターゲットに接続するためのパスワードである"
  }, {
    "label": "B",
    "text": "Ethernet インタフェースの MAC アドレスを SAN 用に変換した値である"
  }, {
    "label": "C",
    "text": "LVM の物理ボリュームに付与される識別子で、pvcreate 時に生成される"
  }, {
    "label": "D",
    "text": "ストレージデバイスを一意に識別する識別子で、マルチパス構成で同一 LUN への複数の経路をまとめる際に利用される"
  }, {
    "label": "E",
    "text": "ファイルシステム作成時に mkfs が生成するファイルシステムの UUID である"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "WWID はストレージデバイス（LUN）を世界的に一意に識別する ID で、複数の経路から同じ LUN が見えても同一デバイスと判断できるため、device-mapper-multipath などで利用されます。ファイルシステムの UUID や LVM の PV UUID とは別物です。iSCSI の認証には CHAP が使われます。",
  "answerKeys": ["SAN"],
  "answerTexts": ["ストレージデバイスを一意に識別する識別子で、マルチパス構成で同一 LUN への複数の経路をまとめる際に利用される"],
  "answerHints": ["ストレージデバイス"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-174",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "open-iscsi を使用するクライアントから、IPアドレス 192.168.10.50 のストレージサーバーが公開している iSCSI ターゲットの一覧を検出したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "iscsiadm -m discovery -t node -p 192.168.10.50 --logout"
  }, {
    "label": "B",
    "text": "iscsiadm -m node -p 192.168.10.50 --login"
  }, {
    "label": "C",
    "text": "iscsiadm -m discovery -t sendtargets -p 192.168.10.50"
  }, {
    "label": "D",
    "text": "iscsiadm -m session -t sendtargets -p 192.168.10.50"
  }, {
    "label": "E",
    "text": "iscsiadm --scan 192.168.10.50"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ターゲットの検出は discovery モードで行い、-t sendtargets（st）で SendTargets 方式を指定し、-p でポータルのアドレスを指定します。-m node --login は検出済みのターゲットへのログインで、-m session は確立済みセッションの表示や操作に使います。",
  "answerKeys": ["open-"],
  "answerTexts": ["iscsiadm -m discovery -t sendtargets -p 192.168.10.50"],
  "answerHints": ["iscsiadm -m discovery -t sendtargets"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-175",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ターゲットの検出（discovery）を実行したところ、次の結果が得られた。このターゲットにログインしてディスクを利用できるようにするコマンドを選択してください。\n\n# iscsiadm -m discovery -t sendtargets -p 192.168.10.50\n192.168.10.50:3260,1 iqn.2026-01.com.example:storage.lun1",
  "choices": [{
    "label": "A",
    "text": "iscsiadm -m session -T iqn.2026-01.com.example:storage.lun1 --logout"
  }, {
    "label": "B",
    "text": "iscsiadm -m node -T iqn.2026-01.com.example:storage.lun1 -p 192.168.10.50 --login"
  }, {
    "label": "C",
    "text": "iscsiadm -m discovery -T iqn.2026-01.com.example:storage.lun1 --login"
  }, {
    "label": "D",
    "text": "iscsiadm -m node -T iqn.2026-01.com.example:storage.lun1 -p 192.168.10.50 --op=delete"
  }, {
    "label": "E",
    "text": "mount -t iscsi 192.168.10.50:iqn.2026-01.com.example:storage.lun1 /mnt"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "検出されたターゲットへのログインは node モードで -T にターゲット名（IQN）、-p にポータルを指定し、--login（-l）を付けて実行します。ログインに成功すると、ターゲットの LUN がローカルの SCSI ディスク（/dev/sdX）として認識されます。iSCSI はブロックデバイスを提供する仕組みのため、mount -t iscsi のように直接マウントすることはできません。",
  "answerKeys": ["ターゲット"],
  "answerTexts": ["iscsiadm -m node -T iqn.2026-01.com.example:storage.lun1 -p 192.168.10.50 --login"],
  "answerHints": ["iscsiadm -m node -T iqn.2026-01.com.example:storage.lun1 -p 192.168.10.50 --login"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-176",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "iSCSI に関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "LUN とは、SAN 上の各ホストに割り当てられる IP アドレスのことである"
  }, {
    "label": "B",
    "text": "iSCSI は標準で TCP ポート 3260 を使用する"
  }, {
    "label": "C",
    "text": "ターゲットとは、ストレージにアクセスするクライアント側のことである"
  }, {
    "label": "D",
    "text": "open-iscsi では、イニシエータ自身の名前（IQN）は /etc/iscsi/initiatorname.iscsi に記述される"
  }, {
    "label": "E",
    "text": "iSCSI を利用するには Fibre Channel の専用ケーブルとスイッチが必須である"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "open-iscsi ではイニシエータ名を /etc/iscsi/initiatorname.iscsi の InitiatorName で定義し、iSCSI の通信には標準で TCP ポート 3260 を使用します。ストレージを提供する側がターゲット、利用するクライアント側がイニシエータです。LUN はターゲット内の論理ユニットを識別する番号であり、iSCSI は通常の IP ネットワーク上で動作します。",
  "answerKeys": ["iSCSI に"],
  "answerTexts": ["iSCSI は標準で TCP ポート 3260 を使用する", "open-iscsi では、イニシエータ自身の名前（IQN）は /etc/iscsi/initiatorname.iscsi に記述される"],
  "answerHints": ["iSCSI は", "open"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-177",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "AoE（ATA over Ethernet）に関する説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "IP を使用せず Ethernet フレームで直接 ATA コマンドを運ぶため、ルーターを越えて通信できない"
  }, {
    "label": "B",
    "text": "iscsiadm コマンドでターゲットの検出とログインを行う"
  }, {
    "label": "C",
    "text": "TCP ポート 3260 を使用し、インターネット越しにストレージへアクセスできる"
  }, {
    "label": "D",
    "text": "利用には Fibre Channel HBA が必要である"
  }, {
    "label": "E",
    "text": "ファイル単位の共有を行うプロトコルで、NFS の代替として使われる"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "AoE はレイヤー2の Ethernet フレーム上で ATA コマンドをやり取りする軽量なプロトコルで、IP を使わないためルーティングできず、同一の Ethernet セグメント内でのみ利用できます。TCP ポート 3260 を使用し iscsiadm で管理するのは iSCSI です。AoE はファイル共有ではなくブロックデバイスを提供します。",
  "answerKeys": ["AoE"],
  "answerTexts": ["IP を使用せず Ethernet フレームで直接 ATA コマンドを運ぶため、ルーターを越えて通信できない"],
  "answerHints": ["IP"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-178",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "新しいディスクのパーティション /dev/sdb1 を使って LVM の論理ボリュームを作成し、ファイルシステムを作成するまでの手順として正しい順序を選択してください。",
  "choices": [{
    "label": "A",
    "text": "vgcreate → pvcreate → lvcreate → mkfs"
  }, {
    "label": "B",
    "text": "pvcreate → lvcreate → vgcreate → mkfs"
  }, {
    "label": "C",
    "text": "mkfs → pvcreate → vgcreate → lvcreate"
  }, {
    "label": "D",
    "text": "lvcreate → vgcreate → pvcreate → mkfs"
  }, {
    "label": "E",
    "text": "pvcreate → vgcreate → lvcreate → mkfs"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "まず pvcreate でパーティションを物理ボリューム（PV）として初期化し、vgcreate で PV をまとめたボリュームグループ（VG）を作成します。その後 lvcreate で VG から論理ボリューム（LV）を切り出し、LV 上に mkfs でファイルシステムを作成します。",
  "answerKeys": ["新しいディスクの"],
  "answerTexts": ["pvcreate → vgcreate → lvcreate → mkfs"],
  "answerHints": ["pvcreate → vgcreate"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-179",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ボリュームグループ vg01 に、サイズ 10GiB、名前 lv_data の論理ボリュームを作成したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "lvcreate -n 10G -L lv_data vg01"
  }, {
    "label": "B",
    "text": "lvcreate -L 10G -s lv_data vg01"
  }, {
    "label": "C",
    "text": "lvcreate -L 10G -n lv_data vg01"
  }, {
    "label": "D",
    "text": "vgcreate -L 10G -n lv_data vg01"
  }, {
    "label": "E",
    "text": "lvcreate -l 10G -n lv_data vg01"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lvcreate の -L（大文字）は単位付きのサイズ、-n は論理ボリューム名を指定し、最後にボリュームグループ名を指定します。小文字の -l はエクステント数（または %FREE などの割合）で指定するオプションのため、10G という指定はできません。-s はスナップショット作成のオプションです。",
  "answerKeys": ["ボリュームグループ vg01 に"],
  "answerTexts": ["lvcreate -L 10G -n lv_data vg01"],
  "answerHints": ["lvcreate -L 10G -n"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-180",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ボリュームグループ vg01 の残りの空き領域をすべて使用して、論理ボリューム lv_archive を作成したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "lvcreate -l 100%FREE -n lv_archive vg01"
  }, {
    "label": "B",
    "text": "lvcreate -L max -n lv_archive vg01"
  }, {
    "label": "C",
    "text": "lvcreate -l all -n lv_archive vg01"
  }, {
    "label": "D",
    "text": "lvcreate -L 100%FREE -n lv_archive vg01"
  }, {
    "label": "E",
    "text": "lvcreate --size=free -n lv_archive vg01"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "割合による指定は小文字の -l（--extents）で行い、100%FREE と指定すると VG の空きエクステントをすべて割り当てます。大文字の -L は単位付きの絶対サイズを指定するオプションのため、%FREE の指定には使えません。max や all といったキーワードは -l、-L のいずれでも使用できません。",
  "answerKeys": ["ボリュームグループ vg01 の"],
  "answerTexts": ["lvcreate -l 100%FREE -n lv_archive vg01"],
  "answerHints": ["lvcreate -l 100"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-181",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "マウント中の ext4 ファイルシステムを含む論理ボリューム /dev/vg01/lv_data の容量が不足した。ボリュームグループに十分な空きがあるので、LV を5GiB拡張し、同時にファイルシステムもリサイズしたい。最も適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "lvextend -L +5G -s /dev/vg01/lv_data"
  }, {
    "label": "B",
    "text": "resize2fs -L +5G /dev/vg01/lv_data"
  }, {
    "label": "C",
    "text": "lvextend -L 5G -r /dev/vg01/lv_data"
  }, {
    "label": "D",
    "text": "lvextend -L +5G -r /dev/vg01/lv_data"
  }, {
    "label": "E",
    "text": "vgextend -L +5G /dev/vg01/lv_data"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lvextend の -L +5G は現在のサイズに5GiBを加えることを意味し、-r（--resizefs）を付けると LV の拡張後にファイルシステムも合わせてリサイズされます。ext4 はマウントしたままオンライン拡張が可能です。+ を付けない -L 5G は合計サイズを5GiBにする指定になり、vgextend は VG に PV を追加するコマンドです。",
  "answerKeys": ["マウント中の"],
  "answerTexts": ["lvextend -L +5G -r /dev/vg01/lv_data"],
  "answerHints": ["lvextend -L +5G -r"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-182",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "論理ボリューム /dev/vg01/lv_data 上の ext4 ファイルシステムを縮小し、LV のサイズを小さくしたい。lvreduce の -r オプションを使わずに手作業で行う場合の正しい手順を選択してください。",
  "choices": [{
    "label": "A",
    "text": "アンマウント → lvreduce で LV を縮小 → e2fsck -f → resize2fs で縮小 → マウント"
  }, {
    "label": "B",
    "text": "アンマウント → e2fsck -f → resize2fs で縮小 → lvreduce で LV を縮小 → マウント"
  }, {
    "label": "C",
    "text": "マウントしたまま resize2fs で縮小 → pvmove で LV を縮小"
  }, {
    "label": "D",
    "text": "アンマウント → vgreduce で縮小 → resize2fs で縮小 → マウント"
  }, {
    "label": "E",
    "text": "マウントしたまま lvreduce で LV を縮小 → resize2fs で縮小"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ext4 はオンラインでの縮小ができないため、アンマウントして e2fsck -f で整合性を確認し、resize2fs でファイルシステムを先に縮小してから lvreduce で LV を縮小します。LV を先に縮小するとファイルシステムの末尾が切り捨てられ、データが破損します。vgreduce は VG から PV を取り除くコマンドです。",
  "answerKeys": ["論理ボリューム /"],
  "answerTexts": ["アンマウント → e2fsck -f → resize2fs で縮小 → lvreduce で LV を縮小 → マウント"],
  "answerHints": ["アンマウント → e2fsck"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-183",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "既存のボリュームグループ vg01 の容量を増やすため、pvcreate で初期化済みの物理ボリューム /dev/sdd1 を vg01 に追加したい。次のコマンドの空欄に入るコマンド名を記述してください。\n\n______ vg01 /dev/sdd1",
  "choices": [],
  "answer": ["vgextend"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "vgextend は既存のボリュームグループに物理ボリュームを追加し、VG の空き容量を増やします。逆に VG から物理ボリュームを取り除く場合は vgreduce を使います。追加後は vgs や vgdisplay で VFree（空き容量）が増えたことを確認できます。",
  "answerKeys": ["既存のボリュームグループ"],
  "answerTexts": ["vgextend"],
  "answerHints": ["vgextend"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-184",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ボリュームグループ vg01 を構成する物理ボリュームのうち、/dev/sdb1 のディスクを撤去したい。/dev/sdb1 上には使用中のエクステントがあり、VG 内の他の PV には十分な空きがある。正しい手順を選択してください。",
  "choices": [{
    "label": "A",
    "text": "pvmove /dev/sdb1 → vgreduce vg01 /dev/sdb1"
  }, {
    "label": "B",
    "text": "pvremove /dev/sdb1 → vgreduce vg01 /dev/sdb1"
  }, {
    "label": "C",
    "text": "lvreduce vg01 /dev/sdb1 → pvremove /dev/sdb1"
  }, {
    "label": "D",
    "text": "vgreduce vg01 /dev/sdb1 → pvmove /dev/sdb1"
  }, {
    "label": "E",
    "text": "vgremove vg01 → pvmove /dev/sdb1"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "まず pvmove で /dev/sdb1 上のエクステントを VG 内の他の PV に移動し、その後 vgreduce で /dev/sdb1 を VG から取り除きます。使用中のエクステントが残ったままでは vgreduce は失敗します。vgremove は VG 全体を削除するコマンドで、目的に反します。",
  "answerKeys": ["ボリュームグループ vg01 を"],
  "answerTexts": ["pvmove /dev/sdb1 → vgreduce vg01 /dev/sdb1"],
  "answerHints": ["pvmove"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-185",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "バックアップ取得のため、論理ボリューム /dev/vg01/lv_data のスナップショットを、変更差分用の領域 2GiB、名前 snap_data で作成したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "vgcreate -s 2G snap_data /dev/vg01/lv_data"
  }, {
    "label": "B",
    "text": "lvcreate -m 1 -L 2G -n snap_data /dev/vg01/lv_data"
  }, {
    "label": "C",
    "text": "lvcreate -L 2G -n snap_data vg01"
  }, {
    "label": "D",
    "text": "lvcreate -s -L 2G -n snap_data /dev/vg01/lv_data"
  }, {
    "label": "E",
    "text": "lvextend -s -L 2G -n snap_data /dev/vg01/lv_data"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "スナップショットは lvcreate に -s（--snapshot）を付け、元の LV をパスで指定して作成します。-L はスナップショットが変更差分を保持するための領域のサイズです。-m はミラーの指定であり、vgcreate の -s は物理エクステントサイズを意味するため、スナップショットとは無関係です。",
  "answerKeys": ["バックアップ"],
  "answerTexts": ["lvcreate -s -L 2G -n snap_data /dev/vg01/lv_data"],
  "answerHints": ["lvcreate -s"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-186",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "LVM の従来型（非シンプロビジョニング）スナップショットに関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "スナップショットの作成時に元の LV の全データがコピーされるため、元の LV と同じサイズの領域が必須である"
  }, {
    "label": "B",
    "text": "スナップショットは元の LV とは別のボリュームグループにしか作成できない"
  }, {
    "label": "C",
    "text": "スナップショット領域が変更差分で満杯になると、そのスナップショットは無効（使用不可）になる"
  }, {
    "label": "D",
    "text": "コピーオンライト方式で、元の LV のブロックが変更される前に旧データをスナップショット領域へ退避する"
  }, {
    "label": "E",
    "text": "スナップショットは読み取り専用であり、マウントして書き込むことはできない"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "従来型スナップショットはコピーオンライト方式で、作成時には全データをコピーせず、変更されるブロックの旧データのみを退避します。そのため変更量に応じた領域で足りますが、領域が満杯になるとスナップショットは無効になります。スナップショットは元の LV と同じ VG 内に作成され、デフォルトで書き込み可能です。",
  "answerKeys": ["LVM"],
  "answerTexts": ["スナップショット領域が変更差分で満杯になると、そのスナップショットは無効（使用不可）になる", "コピーオンライト方式で、元の LV のブロックが変更される前に旧データをスナップショット領域へ退避する"],
  "answerHints": ["スナップショット領域が", "コピーオンライト"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-187",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "vgs コマンドを実行したところ、次の出力が得られた。ボリュームグループ vg01 に 15GiB の新しい論理ボリュームを作成したい場合の説明として正しいものを選択してください。\n\n  VG    #PV #LV #SN Attr   VSize   VFree\n  vg01    2   3   0 wz--n- <59.99g 12.00g",
  "choices": [{
    "label": "A",
    "text": "VSize が約60GiBあるため、そのまま 15GiB の LV を作成できる"
  }, {
    "label": "B",
    "text": "スナップショットが存在するため、新しい LV は作成できない"
  }, {
    "label": "C",
    "text": "空き容量が 12GiB しかないため、vgextend で PV を追加するなどして空きを増やす必要がある"
  }, {
    "label": "D",
    "text": "Attr の n はボリュームグループが無効であることを示しているため、先に vgchange で有効化する必要がある"
  }, {
    "label": "E",
    "text": "PV が2つしかないため、LV は最大2つまでしか作成できない"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "VFree は VG 内でまだ LV に割り当てられていない空き容量で、12GiB しかないため 15GiB の LV は作成できません。VSize は VG 全体のサイズであり、既存の LV に割り当て済みの領域を含みます。#SN は 0 でありスナップショットは存在せず、Attr の n は割り当てポリシー（normal）を表します。",
  "answerKeys": ["vgs"],
  "answerTexts": ["空き容量が 12GiB しかないため、vgextend で PV を追加するなどして空きを増やす必要がある"],
  "answerHints": ["空き"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-188",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ボリュームグループ data-vg に論理ボリューム lv01 を作成した。/dev/mapper 配下に作成されるデバイスファイル名として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/dev/mapper/data_vg-lv01"
  }, {
    "label": "B",
    "text": "/dev/mapper/data-vg/lv01"
  }, {
    "label": "C",
    "text": "/dev/mapper/lv01"
  }, {
    "label": "D",
    "text": "/dev/mapper/data-vg-lv01"
  }, {
    "label": "E",
    "text": "/dev/mapper/data--vg-lv01"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/dev/mapper 配下のデバイス名は「VG名-LV名」の形式で、名前自体に含まれるハイフンは区切りと区別するために2つのハイフンに置き換えられます。そのため data-vg の lv01 は /dev/mapper/data--vg-lv01 となります。/dev/data-vg/lv01 という形式のシンボリックリンクも作成されますが、それは /dev/mapper 配下ではありません。",
  "answerKeys": ["ボリュームグループ data"],
  "answerTexts": ["/dev/mapper/data--vg-lv01"],
  "answerHints": ["/dev/mapper/data--vg"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-189",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "デバイスマッパー（device-mapper）に関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "dmsetup コマンドで、デバイスマッパーのデバイスを一覧表示したり操作したりできる"
  }, {
    "label": "B",
    "text": "/dev/mapper 配下のファイルは、ディスクイメージを格納した通常ファイルである"
  }, {
    "label": "C",
    "text": "デバイスマッパーを利用するには、事前に iscsiadm でターゲットにログインする必要がある"
  }, {
    "label": "D",
    "text": "デバイスマッパーは mdadm によるソフトウェアRAID専用の仕組みであり、LVM とは関係がない"
  }, {
    "label": "E",
    "text": "LVM2 の論理ボリュームは、カーネルのデバイスマッパーを利用して実装されている"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "デバイスマッパーはブロックデバイスを別の仮想ブロックデバイスへマッピングするカーネルの仕組みで、LVM2、dm-crypt、マルチパスなどが利用しています。dmsetup ls や dmsetup info で状態を確認できます。/dev/mapper 配下の各エントリはブロックデバイス（またはそのシンボリックリンク）であり、通常ファイルではありません。",
  "answerKeys": ["デバイスマッパー"],
  "answerTexts": ["dmsetup コマンドで、デバイスマッパーのデバイスを一覧表示したり操作したりできる", "LVM2 の論理ボリュームは、カーネルのデバイスマッパーを利用して実装されている"],
  "answerHints": ["dmsetup", "LVM2"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-190",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "次のコマンドを実行してボリュームグループを作成した。-s 32M オプションの意味として正しいものを選択してください。\n\n# vgcreate -s 32M vg02 /dev/sdc1 /dev/sdd1",
  "choices": [{
    "label": "A",
    "text": "ストライプサイズを 32MiB に設定する"
  }, {
    "label": "B",
    "text": "物理エクステント（PE）のサイズを 32MiB に設定する"
  }, {
    "label": "C",
    "text": "メタデータ領域のサイズを 32MiB に設定する"
  }, {
    "label": "D",
    "text": "32MiB のスナップショット領域を確保する"
  }, {
    "label": "E",
    "text": "ボリュームグループ全体のサイズを 32MiB に制限する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "vgcreate の -s（--physicalextentsize）は物理エクステントのサイズを指定し、指定しない場合のデフォルトは 4MiB です。LV はこのエクステント単位で割り当てられます。ストライプサイズは lvcreate の -I で指定し、スナップショットは lvcreate -s で作成します。",
  "answerKeys": ["次のコマンドを実行して"],
  "answerTexts": ["物理エクステント（PE）のサイズを 32MiB に設定する"],
  "answerHints": ["物理"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-191",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ip コマンドを使用して、インタフェース eth0 に IPv4 アドレス 192.168.1.10、ネットマスク 255.255.255.0 を設定したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ip route add 192.168.1.10/24 dev eth0"
  }, {
    "label": "B",
    "text": "ip eth0 address 192.168.1.10/24"
  }, {
    "label": "C",
    "text": "ip addr set eth0 192.168.1.10 netmask 255.255.255.0"
  }, {
    "label": "D",
    "text": "ip addr add 192.168.1.10/24 dev eth0"
  }, {
    "label": "E",
    "text": "ip link add 192.168.1.10/24 dev eth0"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "IP アドレスの追加は ip addr add（ip address add）で行い、アドレスを CIDR 形式で、インタフェースを dev で指定します。ip link はリンク層（インタフェースの状態や MTU など）の操作に使い、ip route はルーティングテーブルの操作に使います。netmask キーワードは ifconfig の書式です。",
  "answerKeys": ["ip コマンド"],
  "answerTexts": ["ip addr add 192.168.1.10/24 dev eth0"],
  "answerHints": ["ip addr add"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-192",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "ダウン状態になっているインタフェース eth0 を ip コマンドで有効化（アップ）したい。次のコマンドの空欄に入るキーワードを記述してください。\n\nip link set dev eth0 ______",
  "choices": [],
  "answer": ["up"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ip link set dev eth0 up でインタフェースを有効化し、down で無効化します。ifconfig を使う場合は ifconfig eth0 up が同等の操作です。状態は ip link show eth0 の出力の UP フラグや state 表示で確認できます。",
  "answerKeys": ["ダウン"],
  "answerTexts": ["up"],
  "answerHints": ["up"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-193",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "route コマンドを使用して、デフォルトゲートウェイを 192.168.1.1 に設定したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "route set default 192.168.1.1"
  }, {
    "label": "B",
    "text": "route add default via 192.168.1.1"
  }, {
    "label": "C",
    "text": "route add default gw 192.168.1.1"
  }, {
    "label": "D",
    "text": "route add gw default 192.168.1.1"
  }, {
    "label": "E",
    "text": "route add -host default 192.168.1.1"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "route コマンドではデフォルトルートを route add default gw ゲートウェイアドレス の書式で追加します。via キーワードは ip route add default via 192.168.1.1 のように ip コマンドで使用する書式です。-host は単一ホストへの経路を追加するときに使用します。",
  "answerKeys": ["route"],
  "answerTexts": ["route add default gw 192.168.1.1"],
  "answerHints": ["route add default gw"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-194",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "あるホストで ip route show を実行したところ、次の出力が得られた。このホストから宛先 10.20.30.40 へ送信されるパケットの転送先として正しいものを選択してください。\n\ndefault via 192.168.1.1 dev eth0 proto static metric 100\n10.0.0.0/8 via 192.168.1.254 dev eth0\n192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.10",
  "choices": [{
    "label": "A",
    "text": "ゲートウェイ 192.168.1.254 へ転送される"
  }, {
    "label": "B",
    "text": "送信元アドレス 192.168.1.10 宛てに折り返される"
  }, {
    "label": "C",
    "text": "デフォルトゲートウェイ 192.168.1.1 へ転送される"
  }, {
    "label": "D",
    "text": "該当する経路がないため、Network is unreachable となる"
  }, {
    "label": "E",
    "text": "ゲートウェイを経由せず、eth0 から宛先へ直接送信される"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ルーティングでは宛先に一致する経路のうち最もプレフィックス長が長いものが優先されます。10.20.30.40 は 10.0.0.0/8 に一致するため、デフォルトルート（0.0.0.0/0）より優先されてゲートウェイ 192.168.1.254 へ転送されます。scope link の経路は 192.168.1.0/24 宛てのみに適用されます。",
  "answerKeys": ["あるホスト"],
  "answerTexts": ["ゲートウェイ 192.168.1.254 へ転送される"],
  "answerHints": ["ゲートウェイ 192"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-195",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "同一セグメント上のホストの IP アドレスと MAC アドレスの対応表（ARP キャッシュ）を表示するコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "iwlist wlan0 scan"
  }, {
    "label": "B",
    "text": "ip neigh show"
  }, {
    "label": "C",
    "text": "ip link show"
  }, {
    "label": "D",
    "text": "arp -n"
  }, {
    "label": "E",
    "text": "route -n"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "arp -n は名前解決を行わずに ARP キャッシュを表示し、ip neigh show（ip neighbour）は近隣テーブルとして同等の情報を表示します。ip link show はインタフェース自身のリンク情報、route -n はルーティングテーブルを表示します。iwlist wlan0 scan は周辺の無線アクセスポイントを走査するコマンドです。",
  "answerKeys": ["同一"],
  "answerTexts": ["ip neigh show", "arp -n"],
  "answerHints": ["ip neigh", "arp"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-196",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "nl80211 ベースの iw コマンドを使用して、無線インタフェース wlan0 が現在接続しているアクセスポイントの SSID、周波数、信号強度などの接続状態を確認したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "iw dev wlan0 addr"
  }, {
    "label": "B",
    "text": "iw dev wlan0 link"
  }, {
    "label": "C",
    "text": "iw route show dev wlan0"
  }, {
    "label": "D",
    "text": "iw list wlan0"
  }, {
    "label": "E",
    "text": "iw wlan0 status --link"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iw dev wlan0 link は無線インタフェースの接続状態を表示し、接続先の BSSID、SSID、周波数、信号強度などを確認できます。iw list は無線デバイス（phy）が対応する機能の一覧を表示するもので、接続状態の確認には使いません。IP アドレスやルーティングの操作は iw ではなく ip コマンドで行います。",
  "answerKeys": ["nl80211"],
  "answerTexts": ["iw dev wlan0 link"],
  "answerHints": ["iw dev wlan0 link"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-197",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "wireless-tools の iwconfig コマンドを使用して、無線インタフェース wlan0 の接続先 ESSID を OfficeNet に設定したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "iwlist wlan0 essid OfficeNet"
  }, {
    "label": "B",
    "text": "ifconfig wlan0 essid OfficeNet"
  }, {
    "label": "C",
    "text": "iwconfig wlan0 ssid=OfficeNet"
  }, {
    "label": "D",
    "text": "iwconfig --set-essid OfficeNet wlan0"
  }, {
    "label": "E",
    "text": "iwconfig wlan0 essid OfficeNet"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iwconfig ではインタフェース名の後に essid パラメータと値を指定して ESSID を設定します。iwlist は無線情報の取得（スキャン結果などの表示）に使うコマンドで、設定は行いません。ifconfig には無線固有のパラメータを設定する機能はありません。",
  "answerKeys": ["wireless"],
  "answerTexts": ["iwconfig wlan0 essid OfficeNet"],
  "answerHints": ["iwconfig wlan0 essid"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-198",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "インタフェース eth0 に既に 192.168.1.10/24 が設定されている。既存のアドレスを維持したまま、追加の IP アドレス 192.168.1.20/24 を設定するコマンドとして正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "route add 192.168.1.20 eth0"
  }, {
    "label": "B",
    "text": "ip link add 192.168.1.20/24 dev eth0"
  }, {
    "label": "C",
    "text": "ifconfig eth0:0 192.168.1.20 netmask 255.255.255.0 up"
  }, {
    "label": "D",
    "text": "ip addr replace eth0 192.168.1.20"
  }, {
    "label": "E",
    "text": "ip addr add 192.168.1.20/24 dev eth0"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ip addr add は既存のアドレスを残したまま新たなアドレスを追加でき、ifconfig ではエイリアスインタフェース eth0:0 を使って追加のアドレスを設定できます。ip link add は VLAN やブリッジなどの仮想インタフェースを作成するコマンドで、アドレスの追加には使いません。route add はルーティングテーブルに経路を追加するだけです。",
  "answerKeys": ["インタフェース eth0 に"],
  "answerTexts": ["ifconfig eth0:0 192.168.1.20 netmask 255.255.255.0 up", "ip addr add 192.168.1.20/24 dev eth0"],
  "answerHints": ["ifconfig", "ip addr add"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-199",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ジャンボフレームを利用するため、インタフェース eth0 の MTU を 9000 に変更したい。ip コマンドによる正しい設定方法を選択してください。",
  "choices": [{
    "label": "A",
    "text": "ip link mtu eth0 9000"
  }, {
    "label": "B",
    "text": "ip neigh set dev eth0 mtu 9000"
  }, {
    "label": "C",
    "text": "ip route add mtu 9000 dev eth0 default"
  }, {
    "label": "D",
    "text": "ip link set dev eth0 mtu 9000"
  }, {
    "label": "E",
    "text": "ip addr set dev eth0 mtu 9000"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "MTU はリンク層の属性のため、ip link set dev eth0 mtu 9000 で変更します。ip addr はアドレスの操作、ip neigh は ARP などの近隣テーブルの操作に使うサブコマンドです。ifconfig を使う場合は ifconfig eth0 mtu 9000 で同様に設定できます。",
  "answerKeys": ["ジャンボフレーム"],
  "answerTexts": ["ip link set dev eth0 mtu 9000"],
  "answerHints": ["ip link set"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-200",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Linux の無線LAN関連コマンドに関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "iw dev wlan0 link を実行すると、wlan0 に IP アドレスが自動設定される"
  }, {
    "label": "B",
    "text": "iwconfig だけで WPA2 のパスフレーズ認証を完了できるため、wpa_supplicant は不要である"
  }, {
    "label": "C",
    "text": "iwlist wlan0 scan を実行すると、周辺のアクセスポイントの一覧を表示できる"
  }, {
    "label": "D",
    "text": "iwlist は有線インタフェースのリンク速度とデュプレックスを表示する"
  }, {
    "label": "E",
    "text": "iw は nl80211 インタフェースを使用するコマンドで、wireless-tools（iwconfig や iwlist）を置き換えるものである"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iwlist wlan0 scan（scanning）は周辺のアクセスポイントの ESSID や信号強度などを一覧表示します。iw は nl80211 を利用する新しいツールで、旧来の Wireless Extensions を使う iwconfig や iwlist を置き換えます。WPA/WPA2 の認証には wpa_supplicant が必要であり、有線インタフェースのリンク速度の確認には ethtool を使います。",
  "answerKeys": ["Linux の"],
  "answerTexts": ["iwlist wlan0 scan を実行すると、周辺のアクセスポイントの一覧を表示できる", "iw は nl80211 インタフェースを使用するコマンドで、wireless-tools（iwconfig や iwlist）を置き換えるものである"],
  "answerHints": ["iwlist wlan0", "iw は"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-201",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ARP キャッシュ（IPv4）および IPv6 の近隣キャッシュの内容を表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ip link show"
  }, {
    "label": "B",
    "text": "ip neigh show"
  }, {
    "label": "C",
    "text": "ip maddr show"
  }, {
    "label": "D",
    "text": "ip route show cache"
  }, {
    "label": "E",
    "text": "ip addr show neigh"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ip neigh show（ip neighbour show）は ARP キャッシュや IPv6 の NDP による近隣キャッシュを表示します。ip link show はリンク層のインタフェース情報、ip maddr show はマルチキャストアドレスを表示するもので、近隣キャッシュは表示しません。ip addr show に neigh という引数はありません。",
  "answerKeys": ["ARP"],
  "answerTexts": ["ip neigh show"],
  "answerHints": ["ip neigh"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-202",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "物理インタフェース eth0 上に VLAN ID 100 のタグ付き VLAN インタフェース eth0.100 を作成するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ip link add link eth0 name eth0.100 type bridge id 100"
  }, {
    "label": "B",
    "text": "ip link set eth0 vlan 100"
  }, {
    "label": "C",
    "text": "ip link add link eth0 name eth0.100 type vlan id 100"
  }, {
    "label": "D",
    "text": "ip vlan add eth0 id 100"
  }, {
    "label": "E",
    "text": "ip addr add vlan 100 dev eth0"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "VLAN インタフェースは ip link add link 親インタフェース name 新インタフェース名 type vlan id VLAN番号 の形式で作成します。type bridge はブリッジを作成するためのもので VLAN ID は指定できません。ip vlan というオブジェクトや ip link set の vlan 指定は VLAN インタフェースの作成には使えません。",
  "answerKeys": ["物理"],
  "answerTexts": ["ip link add link eth0 name eth0.100 type vlan id 100"],
  "answerHints": ["ip link add link eth0 name eth0.100 type vlan"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-203",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "作成済みのブリッジ br0 に物理インタフェース eth0 をポートとして追加する ip コマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ip link set dev eth0 master br0"
  }, {
    "label": "B",
    "text": "ip link add eth0 to br0"
  }, {
    "label": "C",
    "text": "ip addr add eth0 dev br0"
  }, {
    "label": "D",
    "text": "ip bridge add br0 eth0"
  }, {
    "label": "E",
    "text": "ip link set dev br0 master eth0"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "インタフェースをブリッジに所属させるには ip link set dev eth0 master br0 のように、追加するポート側に master としてブリッジを指定します。br0 側に master eth0 を指定するのは関係が逆です。ip addr add はアドレスを設定するコマンドであり、ポートの追加には使えません。",
  "answerKeys": ["作成済みのブリッジ"],
  "answerTexts": ["ip link set dev eth0 master br0"],
  "answerHints": ["ip link set dev eth0"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-204",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "2本の NIC をボンディングし、スイッチ側と LACP によるリンクアグリゲーションを構成したい。指定すべきボンディングモードを選択してください。",
  "choices": [{
    "label": "A",
    "text": "balance-xor（mode 2）"
  }, {
    "label": "B",
    "text": "balance-rr（mode 0）"
  }, {
    "label": "C",
    "text": "broadcast（mode 3）"
  }, {
    "label": "D",
    "text": "active-backup（mode 1）"
  }, {
    "label": "E",
    "text": "802.3ad（mode 4）"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "IEEE 802.3ad の動的リンクアグリゲーション（LACP）を使用するのは 802.3ad（mode 4）で、スイッチ側にも LACP の設定が必要です。active-backup は1本のみを使用する冗長化モードで、balance-rr や balance-xor は LACP を使用しない静的な負荷分散です。broadcast はすべてのスレーブに同じパケットを送信するモードです。",
  "answerKeys": ["2本の"],
  "answerTexts": ["802.3ad（mode 4）"],
  "answerHints": ["802"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-205",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "サーバ上で TCP ポート 8080 を待ち受けているプロセスを特定したい。待ち受け中の TCP ソケットをポート番号を数値のまま表示し、プロセス情報も含めて表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ss -s"
  }, {
    "label": "B",
    "text": "ss -uan"
  }, {
    "label": "C",
    "text": "ss -tlnp"
  }, {
    "label": "D",
    "text": "ss -x"
  }, {
    "label": "E",
    "text": "ss -tn state established"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ss の -t は TCP、-l は待ち受け（LISTEN）状態、-n は名前解決をしない数値表示、-p はソケットを使用しているプロセスの表示です。-u は UDP、-s は統計の要約、-x は UNIX ドメインソケットの表示です。state established は確立済み接続のみを表示するため、待ち受けソケットは表示されません。",
  "answerKeys": ["サーバ上で"],
  "answerTexts": ["ss -tlnp"],
  "answerHints": ["ss -tlnp"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-206",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "IPv6 アドレスのプレフィックスと種別の組み合わせとして正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "2000::/3 はリンクローカルユニキャストアドレス"
  }, {
    "label": "B",
    "text": "fe80::/10 はリンクローカルユニキャストアドレス"
  }, {
    "label": "C",
    "text": "fc00::/7 はグローバルユニキャストアドレス"
  }, {
    "label": "D",
    "text": "::1/128 はユニークローカルアドレス"
  }, {
    "label": "E",
    "text": "ff00::/8 はマルチキャストアドレス"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fe80::/10 はリンクローカルユニキャスト、ff00::/8 はマルチキャストです。::1/128 はループバックアドレス、fc00::/7 はユニークローカルアドレスであり、2000::/3 はグローバルユニキャストアドレスに割り当てられた範囲です。IPv6 にはブロードキャストがなく、その役割はマルチキャストが担います。",
  "answerKeys": ["IPv6 アドレス"],
  "answerTexts": ["fe80::/10 はリンクローカルユニキャストアドレス", "ff00::/8 はマルチキャストアドレス"],
  "answerHints": ["fe80", "ff00"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-207",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "インタフェース eth0 を通過する DNS（ポート 53）のパケットのみを、IP アドレスやポート番号を名前解決せずに画面に表示したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "tcpdump -n -i eth0 --port 53"
  }, {
    "label": "B",
    "text": "tcpdump -n -i eth0 port 53"
  }, {
    "label": "C",
    "text": "tcpdump -w eth0 port 53"
  }, {
    "label": "D",
    "text": "tcpdump -n -i eth0 dport=53"
  }, {
    "label": "E",
    "text": "tcpdump -r eth0 port 53"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "tcpdump は -i でキャプチャするインタフェース、-n で名前解決の抑止を指定し、末尾に port 53 のようなフィルタ式を記述します。-r はキャプチャファイルを読み込むオプション、-w はキャプチャ結果をファイルに書き出すオプションで、画面表示にはなりません。フィルタ式に dport=53 や --port という書式はありません。",
  "answerKeys": ["インタフェース eth0 を"],
  "answerTexts": ["tcpdump -n -i eth0 port 53"],
  "answerHints": ["tcpdump -n -i eth0 port"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-208",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "nmap で、SYN パケットを送信して応答を確認し、TCP の3ウェイハンドシェイクを完了させずにポートの状態を調べるスキャン（ハーフオープンスキャン）を行うオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-sS"
  }, {
    "label": "B",
    "text": "-O"
  }, {
    "label": "C",
    "text": "-sU"
  }, {
    "label": "D",
    "text": "-sn"
  }, {
    "label": "E",
    "text": "-sT"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-sS は TCP SYN スキャンで、接続を確立しないためハーフオープンスキャンとも呼ばれ、実行には root 権限が必要です。-sT は connect() システムコールで接続を完了させる TCP コネクトスキャン、-sU は UDP スキャンです。-sn はポートスキャンを行わないホスト探索、-O は OS 検出のオプションです。",
  "answerKeys": ["nmap で"],
  "answerTexts": ["-sS"],
  "answerHints": ["-sS"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-209",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ファイアウォールの疎通確認のため、サーバ側で ncat を使って TCP ポート 5000 で接続を待ち受けたい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ncat -s 5000"
  }, {
    "label": "B",
    "text": "ncat -u 5000"
  }, {
    "label": "C",
    "text": "ncat -e 5000"
  }, {
    "label": "D",
    "text": "ncat -l 5000"
  }, {
    "label": "E",
    "text": "ncat -x 5000"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ncat -l 5000 で TCP ポート 5000 の待ち受け（リッスン）モードになり、クライアント側から ncat サーバ名 5000 で接続して疎通を確認できます。-s は送信元アドレスの指定、-u は UDP の使用、-e は接続後に実行するコマンドの指定です。-x は通信内容を16進ダンプ形式でファイルに記録するオプションです。",
  "answerKeys": ["ファイアウォール"],
  "answerTexts": ["ncat -l 5000"],
  "answerHints": ["ncat -l"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-210",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "宛先までの経路上の各ホップについて、パケットロス率や応答時間を継続的に計測し、リアルタイムで表示するツールを選択してください。",
  "choices": [{
    "label": "A",
    "text": "tracepath"
  }, {
    "label": "B",
    "text": "arping"
  }, {
    "label": "C",
    "text": "traceroute"
  }, {
    "label": "D",
    "text": "ping6"
  }, {
    "label": "E",
    "text": "mtr"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mtr は traceroute と ping の機能を組み合わせたツールで、各ホップへのパケットロス率や遅延を繰り返し計測して表示します。traceroute や tracepath は経路を1回調べて終了し、tracepath は経路 MTU の確認にも使われます。ping6 は宛先ホストとの疎通確認のみ、arping は同一セグメント内で ARP による確認を行うツールです。",
  "answerKeys": ["宛先までの"],
  "answerTexts": ["mtr"],
  "answerHints": ["mtr"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-211",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "ping6 fe80::1 を実行したところ、送信インタフェースを特定できずに失敗した。リンクローカルアドレス fe80::1 に eth0 経由で ping を送信できるコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "ping6 fe80::1/64 eth0"
  }, {
    "label": "B",
    "text": "ping6 fe80::1%eth0"
  }, {
    "label": "C",
    "text": "ping6 -i eth0 fe80::1"
  }, {
    "label": "D",
    "text": "ping6 -I eth0 fe80::1"
  }, {
    "label": "E",
    "text": "ping6 -s eth0 fe80::1"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "リンクローカルアドレスはすべてのインタフェースで同じプレフィックスを持つため、-I eth0 で送信インタフェースを指定するか、fe80::1%eth0 のようにゾーンID（スコープID）を付けて指定します。-i は送信間隔、-s は送信するデータサイズを指定するオプションです。宛先にプレフィックス長を付ける書式はありません。",
  "answerKeys": ["ping6"],
  "answerTexts": ["ping6 fe80::1%eth0", "ping6 -I eth0 fe80::1"],
  "answerHints": ["ping6 fe80::1%eth0", "ping6 -I"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-212",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "次の ip addr show eth0 の出力から読み取れる内容として正しいものを選択してください。（2つ選択）\n\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP\n    link/ether 52:54:00:12:34:56 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.10.20/24 brd 192.168.10.255 scope global eth0\n       valid_lft forever preferred_lft forever\n    inet6 2001:db8:10::20/64 scope global\n       valid_lft forever preferred_lft forever\n    inet6 fe80::5054:ff:fe12:3456/64 scope link\n       valid_lft forever preferred_lft forever",
  "choices": [{
    "label": "A",
    "text": "eth0 には IPv6 アドレスが設定されていない"
  }, {
    "label": "B",
    "text": "eth0 の MTU は 1500 バイトである"
  }, {
    "label": "C",
    "text": "LOWER_UP が表示されているため物理リンクはダウンしている"
  }, {
    "label": "D",
    "text": "eth0 の MAC アドレスは 52:54:00:12:34:56 である"
  }, {
    "label": "E",
    "text": "IPv4 のブロードキャストアドレスは 192.168.10.0 である"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mtu 1500 から MTU が 1500 バイト、link/ether の値から MAC アドレスが 52:54:00:12:34:56 であることが分かります。ブロードキャストアドレスは brd に示された 192.168.10.255 です。LOWER_UP は物理層のリンクがアップしていることを示し、inet6 行からグローバルアドレスとリンクローカルアドレスが設定されていることが分かります。",
  "answerKeys": ["次の ip"],
  "answerTexts": ["eth0 の MTU は 1500 バイトである", "eth0 の MAC アドレスは 52:54:00:12:34:56 である"],
  "answerHints": ["eth0 の", "eth0 の"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-213",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/hosts に登録したホスト名が参照されず、常に DNS サーバの応答が使われてしまう。/etc/nsswitch.conf の該当行は次のとおりである。/etc/hosts を優先させるための対処として適切なものを選択してください。\n\nhosts:      dns files",
  "choices": [{
    "label": "A",
    "text": "/etc/hosts の先頭に nameserver 127.0.0.1 を追加する"
  }, {
    "label": "B",
    "text": "/etc/nsswitch.conf の hosts 行を hosts: files dns に変更する"
  }, {
    "label": "C",
    "text": "/etc/resolv.conf に order hosts,bind を記述する"
  }, {
    "label": "D",
    "text": "/etc/hosts.allow に ALL: LOCAL を追加する"
  }, {
    "label": "E",
    "text": "/etc/hostname に files と記述する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/nsswitch.conf の hosts 行は名前解決に使う情報源を左から順に参照するため、files を dns より前に記述すると /etc/hosts が優先されます。order hosts,bind は古い /etc/host.conf の書式であり、/etc/resolv.conf のディレクティブではありません。/etc/hosts.allow は TCP Wrappers のアクセス制御ファイルで、名前解決の順序とは無関係です。",
  "answerKeys": ["/etc/hosts に"],
  "answerTexts": ["/etc/nsswitch.conf の hosts 行を hosts: files dns に変更する"],
  "answerHints": ["/etc/nsswitch"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-214",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "glibc のリゾルバにおいて、/etc/resolv.conf に記述した nameserver 行のうち、同時に有効となる最大数を選択してください。",
  "choices": [{
    "label": "A",
    "text": "3"
  }, {
    "label": "B",
    "text": "5"
  }, {
    "label": "C",
    "text": "無制限"
  }, {
    "label": "D",
    "text": "2"
  }, {
    "label": "E",
    "text": "1"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "glibc のリゾルバでは nameserver は最大3つ（MAXNS）まで有効で、4つ目以降の記述は無視されます。複数指定した場合は記述順に問い合わせ、応答がないと次のサーバに切り替えます。options rotate を指定すると問い合わせ先が順番に分散されます。",
  "answerKeys": ["glibc"],
  "answerTexts": ["3"],
  "answerHints": ["3"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-215",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "systemd を採用したシステムで、静的ホスト名を server01 に変更し、再起動後も保持されるようにしたい。次のコマンドの空欄に入るコマンド名を記述してください。\n\n[      ] set-hostname server01",
  "choices": [],
  "answer": ["hostnamectl"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "hostnamectl set-hostname で静的ホスト名を変更すると /etc/hostname に書き込まれ、再起動後も保持されます。hostname コマンドによる変更は実行中のカーネルのホスト名を変えるだけで、永続化されません。現在の設定は引数なしの hostnamectl または hostnamectl status で確認できます。",
  "answerKeys": ["systemd を採用したシステム"],
  "answerTexts": ["hostnamectl"],
  "answerHints": ["hostnamectl"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-216",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Red Hat 系ディストリビューションの /etc/sysconfig/network-scripts/ifcfg-eth0 において、システム起動時にこのインタフェースを有効化するための設定を選択してください。",
  "choices": [{
    "label": "A",
    "text": "ENABLE=yes"
  }, {
    "label": "B",
    "text": "BOOTPROTO=boot"
  }, {
    "label": "C",
    "text": "ONBOOT=yes"
  }, {
    "label": "D",
    "text": "AUTO=yes"
  }, {
    "label": "E",
    "text": "STARTUP=yes"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ifcfg ファイルでは ONBOOT=yes を指定すると起動時にインタフェースが有効化されます。BOOTPROTO は IP アドレスの取得方法を指定するもので、none、static、dhcp などを設定し、boot という値はありません。ENABLE、AUTO、STARTUP は ifcfg ファイルの標準的なパラメータではありません。",
  "answerKeys": ["Red Hat 系ディストリビューションの"],
  "answerTexts": ["ONBOOT=yes"],
  "answerHints": ["ONBOOT"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-217",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Debian 系システムで /etc/network/interfaces を次のように設定したが、再起動後に eth0 が自動的に有効にならない。追加すべき行を選択してください。\n\niface eth0 inet static\n    address 192.168.1.50\n    netmask 255.255.255.0\n    gateway 192.168.1.1",
  "choices": [{
    "label": "A",
    "text": "onboot eth0"
  }, {
    "label": "B",
    "text": "iface eth0 up"
  }, {
    "label": "C",
    "text": "enable eth0"
  }, {
    "label": "D",
    "text": "auto eth0"
  }, {
    "label": "E",
    "text": "start eth0"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/network/interfaces では auto eth0 の行があるインタフェースが、起動時に ifup -a によって有効化されます。iface 行はアドレスなどの設定内容を定義するだけで、それだけでは自動起動されません。onboot、start、enable といったキーワードはこのファイルには存在しません。",
  "answerKeys": ["Debian 系システム"],
  "answerTexts": ["auto eth0"],
  "answerHints": ["auto"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-218",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NetworkManager 環境で nmcli connection modify eth0 ipv4.addresses 192.168.1.60/24 を実行して設定を変更したが、インタフェースの IP アドレスが変わらない。変更内容を反映させるコマンドとして適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "nmcli connection reload"
  }, {
    "label": "B",
    "text": "nmcli radio all on"
  }, {
    "label": "C",
    "text": "nmcli networking on"
  }, {
    "label": "D",
    "text": "nmcli connection show eth0"
  }, {
    "label": "E",
    "text": "nmcli connection up eth0"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nmcli connection modify は接続プロファイルを変更するだけなので、nmcli connection up eth0 で接続を再度有効化すると変更内容がインタフェースに反映されます。nmcli connection reload はディスク上の設定ファイルを NetworkManager に読み込み直すだけで、有効な接続には適用されません。nmcli connection show は設定内容の表示、networking や radio はネットワーク全体や無線機能の有効化に使うサブコマンドです。",
  "answerKeys": ["NetworkManager"],
  "answerTexts": ["nmcli connection up eth0"],
  "answerHints": ["nmcli connection up"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-219",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "systemd-networkd を使用して、インタフェースの IP アドレスやゲートウェイを設定するファイルの配置場所と拡張子として適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/NetworkManager/system-connections/ に .nmconnection ファイルを配置する"
  }, {
    "label": "B",
    "text": "/etc/systemd/system/ に .network ファイルを配置する"
  }, {
    "label": "C",
    "text": "/etc/systemd/network/ に .network ファイルを配置する"
  }, {
    "label": "D",
    "text": "/etc/sysconfig/network/ に .link ファイルを配置する"
  }, {
    "label": "E",
    "text": "/etc/systemd/networkd/ に .conf ファイルを配置する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemd-networkd は /etc/systemd/network/ に置かれた .network ファイルで IP アドレス、ゲートウェイ、DNS などを設定します。同じディレクトリの .netdev は仮想デバイスの作成、.link はリンク層の設定に使われます。/etc/systemd/system/ はユニットファイルの配置場所で、system-connections は NetworkManager の接続プロファイルの保存先です。",
  "answerKeys": ["systemd-networkd"],
  "answerTexts": ["/etc/systemd/network/ に .network ファイルを配置する"],
  "answerHints": ["/etc/systemd/network/"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-220",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/resolv.conf を確認したところ nameserver 127.0.0.53 とだけ記述されていた。systemd-resolved が実際に問い合わせている上流の DNS サーバを確認するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "resolvectl status"
  }, {
    "label": "B",
    "text": "nmcli resolve show"
  }, {
    "label": "C",
    "text": "hostnamectl dns"
  }, {
    "label": "D",
    "text": "dig @127.0.0.53 status"
  }, {
    "label": "E",
    "text": "systemctl status resolv.conf"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "127.0.0.53 は systemd-resolved のスタブリゾルバのアドレスで、実際の上流 DNS サーバはリンクごとに resolvectl status で確認できます。dig @127.0.0.53 status は status という名前をスタブリゾルバに問い合わせるだけです。hostnamectl にも nmcli にも、上流 DNS サーバを表示するそのようなサブコマンドはありません。",
  "answerKeys": ["/etc/resolv"],
  "answerTexts": ["resolvectl status"],
  "answerHints": ["resolvectl"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-221",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ネットワークの通信速度が遅いため調査したところ、eth0 がスイッチと半二重でリンクしていた。eth0 を 100Mbps、全二重、オートネゴシエーション無効に設定するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ethtool -i eth0 speed 100 duplex full autoneg off"
  }, {
    "label": "B",
    "text": "ethtool -k eth0 speed 100 duplex full autoneg off"
  }, {
    "label": "C",
    "text": "ethtool -p eth0 speed 100 duplex full autoneg off"
  }, {
    "label": "D",
    "text": "ethtool -s eth0 speed 100 duplex full autoneg off"
  }, {
    "label": "E",
    "text": "ethtool -S eth0 speed 100 duplex full autoneg off"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ethtool -s で速度（speed）、デュプレックス（duplex）、オートネゴシエーション（autoneg）などのリンク設定を変更します。-i はドライバ情報、-S は NIC の統計情報、-k はオフロード機能の状態を表示するオプションです。-p はポートの LED を点滅させて物理的な位置を確認する機能です。",
  "answerKeys": ["ネットワークの"],
  "answerTexts": ["ethtool -s eth0 speed 100 duplex full autoneg off"],
  "answerHints": ["ethtool -s"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-222",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "社内 DNS とパブリック DNS の応答の違いを調べるため、DNS サーバ 8.8.8.8 に直接 example.com の MX レコードを問い合わせたい。適切なコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "dig example.com MX +server=8.8.8.8"
  }, {
    "label": "B",
    "text": "dig -x 8.8.8.8 example.com MX"
  }, {
    "label": "C",
    "text": "host -t MX example.com 8.8.8.8"
  }, {
    "label": "D",
    "text": "host -l example.com 8.8.8.8"
  }, {
    "label": "E",
    "text": "dig @8.8.8.8 example.com MX"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dig では @サーバ で問い合わせ先を指定し、host では最後の引数に問い合わせ先サーバを指定し、-t でレコードタイプを指定します。dig -x は逆引きの問い合わせに使うオプションです。host -l はゾーン転送によるゾーン内の一覧取得で、dig に +server というクエリオプションはありません。",
  "answerKeys": ["社内 DNS"],
  "answerTexts": ["host -t MX example.com 8.8.8.8", "dig @8.8.8.8 example.com MX"],
  "answerHints": ["host -t", "dig @8"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-223",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "dig で名前を問い合わせたところ、次のヘッダが表示された。この結果が示す内容として適切なものを選択してください。\n\n;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 41522\n;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1",
  "choices": [{
    "label": "A",
    "text": "問い合わせは正常に処理され、該当するレコードが返された"
  }, {
    "label": "B",
    "text": "問い合わせた名前が DNS 上に存在しない"
  }, {
    "label": "C",
    "text": "DNS サーバが内部エラーにより応答を返せなかった"
  }, {
    "label": "D",
    "text": "DNS サーバから応答がなくタイムアウトした"
  }, {
    "label": "E",
    "text": "DNS サーバがポリシーにより問い合わせを拒否した"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "status: NXDOMAIN は問い合わせた名前（ドメイン）が存在しないことを示します。サーバ側の障害で解決できない場合は SERVFAIL、ポリシーで拒否された場合は REFUSED、正常応答は NOERROR となります。タイムアウトの場合はヘッダ自体が表示されず、connection timed out などのメッセージが出力されます。",
  "answerKeys": ["dig で名前を"],
  "answerTexts": ["問い合わせた名前が DNS 上に存在しない"],
  "answerHints": ["問い合わせた"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-224",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "TCP Wrappers（libwrap）に対応した sshd が稼働するサーバで、次のように設定されている。この設定による sshd へのアクセス制御の結果として正しいものを選択してください。\n\n# /etc/hosts.allow\nsshd: 192.168.1.\n\n# /etc/hosts.deny\nALL: ALL",
  "choices": [{
    "label": "A",
    "text": "/etc/hosts.deny に ALL: ALL があるため /etc/hosts.allow は無視される"
  }, {
    "label": "B",
    "text": "/etc/hosts.deny が先に評価されるため、すべてのホストからの接続が拒否される"
  }, {
    "label": "C",
    "text": "192.168.1. の末尾にホスト部がないため記述は無効となり、すべて許可される"
  }, {
    "label": "D",
    "text": "/etc/hosts.allow は sshd 以外のサービスにのみ適用される"
  }, {
    "label": "E",
    "text": "192.168.1.0/24 のホストからのみ接続が許可され、それ以外のホストからは拒否される"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TCP Wrappers はまず /etc/hosts.allow を評価し、一致すれば許可、一致しなければ /etc/hosts.deny を評価して一致すれば拒否します。192.168.1. のようにドットで終わる記述はそのネットワークに属するホストに一致します。どちらにも一致しない場合は許可されますが、この例では hosts.deny の ALL: ALL によりそれ以外は拒否されます。",
  "answerKeys": ["TCP Wrappers（"],
  "answerTexts": ["192.168.1.0/24 のホストからのみ接続が許可され、それ以外のホストからは拒否される"],
  "answerHints": ["192.168.1.0"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-225",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "あるサーバから同一セグメントのホストには通信できるが、インターネット上のホストには通信できない。調査結果は次のとおりである。この問題を解決するコマンドとして適切なものを選択してください。\n\n$ ip route show\n192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.50\n$ ping -c1 192.168.1.1\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=0.412 ms\n$ ping -c1 203.0.113.10\nping: connect: Network is unreachable",
  "choices": [{
    "label": "A",
    "text": "ip link set eth0 up"
  }, {
    "label": "B",
    "text": "ip neigh add 203.0.113.10 dev eth0"
  }, {
    "label": "C",
    "text": "echo 1 > /proc/sys/net/ipv4/ip_forward"
  }, {
    "label": "D",
    "text": "ip route add default via 192.168.1.1"
  }, {
    "label": "E",
    "text": "ip route add 192.168.1.0/24 via 192.168.1.1"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ルーティングテーブルにデフォルトルートが存在しないため、他のネットワーク宛ての通信で Network is unreachable となっています。ip route add default via 192.168.1.1 でデフォルトゲートウェイを設定すれば解決します。ip_forward はこのホスト自身がルータとして転送するための設定であり、自ホストからの送信には関係しません。eth0 は同一セグメントと通信できているためすでにアップしています。",
  "answerKeys": ["あるサーバから"],
  "answerTexts": ["ip route add default via 192.168.1.1"],
  "answerHints": ["ip route add default"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-226",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "2つのネットワークを接続するルータとして Linux を設定したが、両ネットワーク間のパケットが転送されない。原因を調べると net.ipv4.ip_forward が 0 であった。直ちに転送を有効にするコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "ip link set eth0 forwarding on"
  }, {
    "label": "B",
    "text": "echo 1 > /proc/sys/net/ipv4/ip_forward"
  }, {
    "label": "C",
    "text": "sysctl -w net.ipv4.conf.all.rp_filter=1"
  }, {
    "label": "D",
    "text": "sysctl -w net.ipv4.ip_forward=1"
  }, {
    "label": "E",
    "text": "sysctl -w net.ipv4.icmp_echo_ignore_all=0"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "IPv4 のパケット転送は sysctl -w net.ipv4.ip_forward=1 または /proc/sys/net/ipv4/ip_forward に 1 を書き込むことで有効になります。再起動後も維持するには /etc/sysctl.conf や /etc/sysctl.d/ 配下に設定します。rp_filter は送信元アドレスの逆経路検証、icmp_echo_ignore_all は ping への応答可否の設定で、ip link set に forwarding というパラメータはありません。",
  "answerKeys": ["2つのネットワークを"],
  "answerTexts": ["echo 1 > /proc/sys/net/ipv4/ip_forward", "sysctl -w net.ipv4.ip_forward=1"],
  "answerHints": ["echo", "sysctl -w net.ipv4.ip_forward"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-227",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/hosts の記述として正しい書式のものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "web01.example.com 192.168.1.10 web01"
  }, {
    "label": "B",
    "text": "192.168.1.10 web01.example.com web01"
  }, {
    "label": "C",
    "text": "web01 = 192.168.1.10"
  }, {
    "label": "D",
    "text": "192.168.1.10: web01.example.com, web01"
  }, {
    "label": "E",
    "text": "host web01 192.168.1.10"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/hosts は1行に「IPアドレス 正式ホスト名 別名...」の順で、空白またはタブで区切って記述します。ホスト名を先頭に書く形式やコロン、カンマ、等号を使う形式は誤りです。別名は正式ホスト名の後ろに複数並べることができます。",
  "answerKeys": ["/etc/hosts の"],
  "answerTexts": ["192.168.1.10 web01.example.com web01"],
  "answerHints": ["192.168.1.10 web01"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-228",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ping web01.example.com は名前解決に成功して応答があるが、dig web01.example.com では ANSWER SECTION が返されない。最も考えられる原因を選択してください。",
  "choices": [{
    "label": "A",
    "text": "web01.example.com が /etc/hosts に登録されており、dig は /etc/nsswitch.conf や /etc/hosts を参照せず DNS サーバに直接問い合わせるため"
  }, {
    "label": "B",
    "text": "dig は UDP 53 番ではなく TCP 853 番のみで問い合わせるため"
  }, {
    "label": "C",
    "text": "nscd が停止しているため dig だけが名前解決に失敗するため"
  }, {
    "label": "D",
    "text": "ping は ICMP を使用するため名前解決を必要としないため"
  }, {
    "label": "E",
    "text": "dig の問い合わせが /etc/hosts.deny によって拒否されているため"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ping などの一般的なアプリケーションは glibc のリゾルバを通じて /etc/nsswitch.conf に従い /etc/hosts も参照しますが、dig は DNS サーバに直接問い合わせます。そのため /etc/hosts にのみ登録された名前は dig では解決できません。NSS を経由した名前解決の結果は getent hosts で確認できます。ping も名前を指定した場合は名前解決が必要です。",
  "answerKeys": ["ping web01"],
  "answerTexts": ["web01.example.com が /etc/hosts に登録されており、dig は /etc/nsswitch.conf や /etc/hosts を参照せず DNS サーバに直接問い合わせるため"],
  "answerHints": ["web01"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-229",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "GNU tar を使用して、xz で圧縮されたソースアーカイブ app-2.4.tar.xz をカレントディレクトリに展開するコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "tar -uf app-2.4.tar.xz"
  }, {
    "label": "B",
    "text": "tar -tJf app-2.4.tar.xz"
  }, {
    "label": "C",
    "text": "tar -xJf app-2.4.tar.xz"
  }, {
    "label": "D",
    "text": "tar -cJf app-2.4.tar.xz"
  }, {
    "label": "E",
    "text": "tar -xf app-2.4.tar.xz"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-J は xz 圧縮を扱うオプションで、tar -xJf で展開できます。GNU tar はアーカイブファイルからの展開時に圧縮形式を自動判別するため、tar -xf でも展開できます。-t はアーカイブ内容の一覧表示、-c はアーカイブの新規作成、-u はアーカイブへの追加・更新を行うオプションです。",
  "answerKeys": ["GNU tar を"],
  "answerTexts": ["tar -xJf app-2.4.tar.xz", "tar -xf app-2.4.tar.xz"],
  "answerHints": ["tar -xJf", "tar -xf"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-230",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "autoconf で生成された configure スクリプトを使用し、ソフトウェア一式を /opt/app 配下にインストールするよう設定したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "./configure --install=/opt/app"
  }, {
    "label": "B",
    "text": "./configure --root=/opt/app"
  }, {
    "label": "C",
    "text": "./configure --prefix=/opt/app"
  }, {
    "label": "D",
    "text": "./configure --with-dir=/opt/app"
  }, {
    "label": "E",
    "text": "./configure --target=/opt/app"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "--prefix はインストール先の基準ディレクトリを指定するオプションで、省略時は通常 /usr/local になります。--target はクロスコンパイル時に対象となるプラットフォームを指定するオプションです。--install、--with-dir、--root は configure の標準オプションではありません。",
  "answerKeys": ["autoconf"],
  "answerTexts": ["./configure --prefix=/opt/app"],
  "answerHints": ["./configure --prefix"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-231",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "パッケージ作成のため、configure で指定したインストール先（prefix）を変えずに、ファイルを一時ディレクトリ /tmp/stage 配下にインストールしたい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "make install --destdir=/tmp/stage"
  }, {
    "label": "B",
    "text": "./configure --prefix=/tmp/stage && make install"
  }, {
    "label": "C",
    "text": "make -C /tmp/stage install"
  }, {
    "label": "D",
    "text": "make -o /tmp/stage install"
  }, {
    "label": "E",
    "text": "make DESTDIR=/tmp/stage install"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "DESTDIR 変数を指定すると、prefix で決まるパスの前に /tmp/stage が付加された場所にインストールされ、プログラムに埋め込まれるパスは変わりません。make -C は指定したディレクトリに移動してから make を実行し、-o は指定ファイルを再構築しないよう扱うオプションです。--prefix を変更するとインストール先そのものが変わってしまいます。",
  "answerKeys": ["パッケージ"],
  "answerTexts": ["make DESTDIR=/tmp/stage install"],
  "answerHints": ["make DESTDIR"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-232",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ソースツリーの最上位ディレクトリで、次のヘッダを持つパッチファイル fix.patch を適用したい。適切なコマンドを選択してください。\n\n--- a/src/main.c      2026-09-01 10:00:00\n+++ b/src/main.c      2026-09-02 12:00:00\n@@ -10,7 +10,7 @@",
  "choices": [{
    "label": "A",
    "text": "patch -p1 < fix.patch"
  }, {
    "label": "B",
    "text": "diff -p1 < fix.patch"
  }, {
    "label": "C",
    "text": "patch -R < fix.patch"
  }, {
    "label": "D",
    "text": "patch -p0 < fix.patch"
  }, {
    "label": "E",
    "text": "patch -p1 > fix.patch"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-p1 はパッチ内のパスから先頭のディレクトリ1階層（a/ や b/）を取り除くため、最上位ディレクトリから src/main.c に適用されます。-p0 ではパスをそのまま使うため a/src/main.c を探してしまいます。-R はパッチを逆方向に適用して取り消すオプションです。パッチは標準入力から与えるため、出力リダイレクトでは適用できません。",
  "answerKeys": ["ソースツリー"],
  "answerTexts": ["patch -p1 < fix.patch"],
  "answerHints": ["patch -p1 <"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-233",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "patch コマンドで適用済みのパッチを取り消す（逆方向に適用する）ために使用するオプションを、1文字の短い形式で記述してください。",
  "choices": [],
  "answer": ["-R"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "patch -R（--reverse）は、パッチの変更内容を逆方向に適用して元の状態に戻します。適用時と同じ -p の値と組み合わせ、patch -R -p1 < fix.patch のように使用します。--dry-run を併用すると、実際に変更せずに適用できるかを確認できます。",
  "answerKeys": ["patch"],
  "answerTexts": ["-R"],
  "answerHints": ["-R"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-234",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "元のソースディレクトリ orig/ と修正後のディレクトリ new/ を再帰的に比較し、新規追加されたファイルも含めて unified 形式のパッチを作成したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "diff -e orig/ new/ > fix.patch"
  }, {
    "label": "B",
    "text": "diff -y orig/ new/ > fix.patch"
  }, {
    "label": "C",
    "text": "diff -c orig/ new/ > fix.patch"
  }, {
    "label": "D",
    "text": "diff -Naur orig/ new/ > fix.patch"
  }, {
    "label": "E",
    "text": "diff -q orig/ new/ > fix.patch"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "diff -Naur は、-N で存在しないファイルを空ファイルとして扱い新規ファイルも差分に含め、-a で全ファイルをテキストとして扱い、-u で unified 形式、-r で再帰的に比較します。-c は context 形式、-q は相違の有無のみ表示、-y は左右並列表示です。-e は ed スクリプト形式を出力するオプションです。",
  "answerKeys": ["元のソースディレクトリ"],
  "answerTexts": ["diff -Naur orig/ new/ > fix.patch"],
  "answerHints": ["diff -Naur"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-235",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ソースから OpenSSL を利用するソフトウェアをビルドしようとしたところ、./configure の実行中に次のエラーで停止した。対処として最も適切なものを選択してください。\n\nchecking for openssl/ssl.h... no\nconfigure: error: OpenSSL headers not found",
  "choices": [{
    "label": "A",
    "text": "configure を飛ばして make install を実行する"
  }, {
    "label": "B",
    "text": "ldconfig を実行して共有ライブラリのキャッシュを更新する"
  }, {
    "label": "C",
    "text": "OpenSSL の開発用パッケージ（openssl-devel や libssl-dev など）をインストールしてから configure を再実行する"
  }, {
    "label": "D",
    "text": "make clean を実行してから configure を再実行する"
  }, {
    "label": "E",
    "text": "make -k を実行してエラーを無視しながらビルドする"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ビルドにはライブラリ本体に加えてヘッダファイルが必要で、それらは通常 -devel や -dev という名前の開発用パッケージに含まれます。ldconfig は実行時の共有ライブラリのキャッシュを更新するもので、ヘッダファイルの不足は解決しません。configure が完了していない状態では Makefile が生成されないため、make を実行できません。",
  "answerKeys": ["ソースから OpenSSL"],
  "answerTexts": ["OpenSSL の開発用パッケージ（openssl-devel や libssl-dev など）をインストールしてから configure を再実行する"],
  "answerHints": ["OpenSSL"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-236",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Git リポジトリ https://example.org/app.git から、タグ v2.1 の時点のソースコードを取得したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "git pull --tag v2.1 https://example.org/app.git"
  }, {
    "label": "B",
    "text": "git init --branch v2.1 https://example.org/app.git"
  }, {
    "label": "C",
    "text": "git clone --tag v2.1 https://example.org/app.git"
  }, {
    "label": "D",
    "text": "git checkout https://example.org/app.git v2.1"
  }, {
    "label": "E",
    "text": "git clone --branch v2.1 https://example.org/app.git"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "git clone の --branch（-b）にはブランチ名だけでなくタグ名も指定でき、クローン後にそのタグの時点がチェックアウトされます。git clone でリポジトリを複製してから git checkout v2.1 を実行しても同じ結果になります。git clone に --tag オプションはなく、git checkout にリポジトリの URL を指定することもできません。",
  "answerKeys": ["Git"],
  "answerTexts": ["git clone --branch v2.1 https://example.org/app.git"],
  "answerHints": ["git clone --branch"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-237",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "ソースからビルドしたライブラリを /usr/local/lib にインストールしたが、プログラムを実行すると次のエラーが表示された。プログラムが共有ライブラリを読み込めるようにする方法として適切なものを選択してください。（2つ選択）\n\n./myapp: error while loading shared libraries: libfoo.so.1:\ncannot open shared object file: No such file or directory",
  "choices": [{
    "label": "A",
    "text": "環境変数 PATH に /usr/local/lib を追加する"
  }, {
    "label": "B",
    "text": "/etc/ld.so.conf.d/ 配下に /usr/local/lib を記述したファイルを作成し、ldconfig を実行する"
  }, {
    "label": "C",
    "text": "ldd ./myapp を実行してライブラリを再リンクする"
  }, {
    "label": "D",
    "text": "環境変数 LD_LIBRARY_PATH に /usr/local/lib を設定してプログラムを実行する"
  }, {
    "label": "E",
    "text": "make clean を実行してからプログラムを再実行する"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ダイナミックリンカは /etc/ld.so.conf（および /etc/ld.so.conf.d/ 配下）に記述されたディレクトリを ldconfig で作成したキャッシュから検索するため、設定追加後に ldconfig を実行します。一時的には LD_LIBRARY_PATH でも検索パスを追加できます。PATH は実行ファイルの検索パスであり、ldd は依存する共有ライブラリを表示するだけで再リンクは行いません。",
  "answerKeys": ["ソースからビルド"],
  "answerTexts": ["/etc/ld.so.conf.d/ 配下に /usr/local/lib を記述したファイルを作成し、ldconfig を実行する", "環境変数 LD_LIBRARY_PATH に /usr/local/lib を設定してプログラムを実行する"],
  "answerHints": ["/etc", "環境変数 LD_LIBRARY_PATH"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-238",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ディスク /dev/sda の MBR（ブートローダとパーティションテーブルを含む先頭512バイト）をファイル mbr.img にバックアップするコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "dd if=/dev/sda of=mbr.img bs=512 skip=1"
  }, {
    "label": "B",
    "text": "dd if=/dev/sda of=mbr.img bs=512 count=1"
  }, {
    "label": "C",
    "text": "dd if=mbr.img of=/dev/sda bs=512 count=1"
  }, {
    "label": "D",
    "text": "dd if=/dev/sda of=mbr.img bs=446 count=1"
  }, {
    "label": "E",
    "text": "dd if=/dev/sda1 of=mbr.img bs=512 count=1"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dd では if に入力、of に出力を指定し、bs=512 count=1 で先頭の512バイトだけを読み出します。if と of を逆にすると、ファイルの内容でディスクの MBR を上書きしてしまいます。bs=446 ではパーティションテーブルが含まれず、/dev/sda1 はパーティションの先頭を指すため MBR ではありません。skip=1 は先頭ブロックを読み飛ばすオプションです。",
  "answerKeys": ["ディスク /dev/sda の MBR"],
  "answerTexts": ["dd if=/dev/sda of=mbr.img bs=512 count=1"],
  "answerHints": ["dd if=/dev/sda of=mbr.img bs=512 count"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-239",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "rsync で /data/ をバックアップサーバにミラーリングしている。送信元で削除されたファイルをバックアップ先からも削除するために追加するオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "--remove-source-files"
  }, {
    "label": "B",
    "text": "--update"
  }, {
    "label": "C",
    "text": "--delete"
  }, {
    "label": "D",
    "text": "--ignore-existing"
  }, {
    "label": "E",
    "text": "--existing"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "--delete は送信元に存在しないファイルを転送先から削除し、完全なミラーを維持します。--remove-source-files は転送が完了したファイルを送信元から削除するため、意図とは逆の動作になります。--existing は転送先に既存のファイルのみを更新し、--ignore-existing は転送先に既存のファイルを更新しません。--update は転送先の方が新しいファイルをスキップします。",
  "answerKeys": ["rsync"],
  "answerTexts": ["--delete"],
  "answerHints": ["--delete"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-240",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "find /etc | cpio -ov > etc.cpio で作成したアーカイブを、ディレクトリ構造を再作成しながら展開するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "cpio -idv < etc.cpio"
  }, {
    "label": "B",
    "text": "cpio -tv < etc.cpio"
  }, {
    "label": "C",
    "text": "cpio -idv etc.cpio"
  }, {
    "label": "D",
    "text": "cpio -pdv < etc.cpio"
  }, {
    "label": "E",
    "text": "cpio -ov < etc.cpio"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "cpio -i（コピーインモード）は標準入力からアーカイブを読み込んで展開し、-d で必要なディレクトリを作成します。-o はアーカイブを作成するコピーアウトモード、-t は内容の一覧表示、-p はファイルを別のディレクトリにコピーするパススルーモードです。cpio はアーカイブを標準入力から読むため、ファイル名を引数に指定してもアーカイブとしては扱われません。",
  "answerKeys": ["find"],
  "answerTexts": ["cpio -idv < etc.cpio"],
  "answerHints": ["cpio -idv <"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-241",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "SCSI テープドライブで、複数のアーカイブを続けて書き込むために、操作終了後に自動で巻き戻しを行わない（ノンリワインド）1台目のテープデバイスファイルのパスを記述してください。",
  "choices": [],
  "answer": ["/dev/nst0"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/dev/st0 はクローズ時に自動的にテープを巻き戻すデバイス、/dev/nst0 は巻き戻さないデバイスです。/dev/nst0 を使用すると、mt -f /dev/nst0 fsf 1 などでテープ位置を操作しながら複数のアーカイブを順に読み書きできます。テープの巻き戻しは mt -f /dev/nst0 rewind で行います。",
  "answerKeys": ["SCSI テープドライブ"],
  "answerTexts": ["/dev/nst0"],
  "answerHints": ["/dev/nst0"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-242",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "増分バックアップと差分バックアップに関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "フルバックアップは、前回のバックアップ以降に変更されたファイルのみを対象とする"
  }, {
    "label": "B",
    "text": "差分バックアップは、直近のフルバックアップ以降に変更されたファイルを対象とする"
  }, {
    "label": "C",
    "text": "増分バックアップは、毎回フルバックアップ以降のすべての変更を含むため差分バックアップより容量が大きくなる"
  }, {
    "label": "D",
    "text": "差分バックアップからの復元には、フルバックアップとそれ以降のすべての差分バックアップが必要である"
  }, {
    "label": "E",
    "text": "増分バックアップからの復元には、フルバックアップとそれ以降のすべての増分バックアップが必要である"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "差分バックアップは直近のフルバックアップ以降の変更をすべて含むため、復元にはフルバックアップと最新の差分バックアップだけが必要です。増分バックアップは前回のバックアップ（フルまたは増分）以降の変更だけを含むため、復元にはフルバックアップとそれ以降の増分バックアップをすべて順に適用する必要があります。その代わり、増分バックアップは1回ごとの容量が小さく済みます。",
  "answerKeys": ["増分"],
  "answerTexts": ["差分バックアップは、直近のフルバックアップ以降に変更されたファイルを対象とする", "増分バックアップからの復元には、フルバックアップとそれ以降のすべての増分バックアップが必要である"],
  "answerHints": ["差分バックアップは", "増分バックアップからの"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-243",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "GNU tar で、スナップショットファイルにファイルの状態を記録し、前回の実行以降に変更されたファイルだけをアーカイブする増分バックアップを行いたい。使用するオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "--snapshot=/var/backup/home.snar"
  }, {
    "label": "B",
    "text": "--listed-incremental=/var/backup/home.snar"
  }, {
    "label": "C",
    "text": "--append=/var/backup/home.snar"
  }, {
    "label": "D",
    "text": "--diff=/var/backup/home.snar"
  }, {
    "label": "E",
    "text": "--backup=/var/backup/home.snar"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "--listed-incremental（短縮形 -g）は指定したスナップショットファイルに状態を記録し、2回目以降は変更されたファイルだけをアーカイブします。--diff はアーカイブとファイルシステムの内容を比較するオプション、--append はアーカイブにファイルを追加するオプションです。--backup は既存ファイルを上書きする前にバックアップを作成するオプションで、--snapshot というオプションはありません。",
  "answerKeys": ["GNU tar で"],
  "answerTexts": ["--listed-incremental=/var/backup/home.snar"],
  "answerHints": ["--listed"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-244",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Bacula において、バックアップ対象となる各クライアントマシン上で動作し、Director の指示に従ってファイルを読み出すコンポーネントを選択してください。",
  "choices": [{
    "label": "A",
    "text": "Catalog"
  }, {
    "label": "B",
    "text": "Director（bacula-dir）"
  }, {
    "label": "C",
    "text": "Console（bconsole）"
  }, {
    "label": "D",
    "text": "File Daemon（bacula-fd）"
  }, {
    "label": "E",
    "text": "Storage Daemon（bacula-sd）"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "File Daemon（bacula-fd）はバックアップ対象のクライアント上で動作し、ファイルの読み出しや復元時の書き込みを行います。Director はジョブ全体を管理し、Storage Daemon はテープやディスクなどの記録媒体への読み書きを担当します。bconsole は管理者が Director を操作するためのコンソールで、Catalog はバックアップしたファイルの情報を格納するデータベースです。",
  "answerKeys": ["Bacula"],
  "answerTexts": ["File Daemon（bacula-fd）"],
  "answerHints": ["File"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-245",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "クライアントに専用のエージェントを導入せず rsync、SMB、tar などでデータを取得し、同一内容のファイルをプール化して重複排除しながらディスクに保存し、Web インタフェースで管理するバックアップソフトウェアを選択してください。",
  "choices": [{
    "label": "A",
    "text": "cpio"
  }, {
    "label": "B",
    "text": "Bareos"
  }, {
    "label": "C",
    "text": "Bacula"
  }, {
    "label": "D",
    "text": "Amanda"
  }, {
    "label": "E",
    "text": "BackupPC"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "BackupPC はクライアント側に専用ソフトウェアを必要とせず、rsync、SMB、tar などでバックアップを取得し、同一ファイルをプールで共有して重複排除を行います。管理は Web インタフェースから行えます。Bacula とその派生である Bareos は、クライアントに File Daemon を導入する構成です。Amanda もクライアント側にエージェントを導入する構成が一般的で、cpio はアーカイブ用のコマンドです。",
  "answerKeys": ["クライアントに"],
  "answerTexts": ["BackupPC"],
  "answerHints": ["BackupPC"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-246",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "システムのバックアップ計画を立てている。定期的なバックアップの対象として含めるべきディレクトリを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "/home"
  }, {
    "label": "B",
    "text": "/proc"
  }, {
    "label": "C",
    "text": "/etc"
  }, {
    "label": "D",
    "text": "/sys"
  }, {
    "label": "E",
    "text": "/run"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc にはシステムの設定ファイルが、/home にはユーザのデータが格納されているため、重要なバックアップ対象です。/proc と /sys はカーネルが提供する仮想ファイルシステムで、ディスク上の実データではありません。/run は起動ごとに作り直される tmpfs 上の実行時データ領域のため、バックアップの対象外とします。",
  "answerKeys": ["システムのバックアップ"],
  "answerTexts": ["/home", "/etc"],
  "answerHints": ["/home", "/etc"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-247",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "10分後にシステムを停止し、ログイン中のユーザにメンテナンスのための停止であることを通知したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "shutdown -k +10 \"メンテナンスのため停止します\""
  }, {
    "label": "B",
    "text": "shutdown -c +10 \"メンテナンスのため停止します\""
  }, {
    "label": "C",
    "text": "shutdown -h +10 \"メンテナンスのため停止します\""
  }, {
    "label": "D",
    "text": "wall -h +10 \"メンテナンスのため停止します\""
  }, {
    "label": "E",
    "text": "shutdown -r +10 \"メンテナンスのため停止します\""
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "shutdown -h +10 に続けてメッセージを指定すると、10分後にシステムを停止し、ログイン中のユーザに警告メッセージが送信されます。-k は警告メッセージを送るだけで実際には停止しません。-c は予約済みのシャットダウンを取り消すオプション、-r は再起動です。wall はメッセージを送信するコマンドで、停止の予約は行えません。",
  "answerKeys": ["10"],
  "answerTexts": ["shutdown -h +10 \"メンテナンスのため停止します\""],
  "answerHints": ["shutdown -h"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.3"
}, {
  "id": "201-248",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ユーザがログインに成功した後に表示されるメッセージを記述するファイルを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/motd"
  }, {
    "label": "B",
    "text": "/etc/profile"
  }, {
    "label": "C",
    "text": "/etc/issue"
  }, {
    "label": "D",
    "text": "/etc/issue.net"
  }, {
    "label": "E",
    "text": "/etc/login.defs"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/motd（Message Of The Day）の内容はログイン成功後に表示され、メンテナンス予定などの告知に使われます。/etc/issue はローカル端末、/etc/issue.net は telnet などのリモート接続で、ログインプロンプトの前に表示されます。/etc/login.defs はパスワードの有効期限などログイン関連の設定ファイル、/etc/profile はログインシェルの初期化スクリプトです。",
  "answerKeys": ["ユーザが"],
  "answerTexts": ["/etc/motd"],
  "answerHints": ["/etc/motd"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.3"
}, {
  "id": "201-249",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ローカルコンソールのログインプロンプトの前に、実行中のカーネルのリリース番号を表示したい。agetty が処理する /etc/issue に記述するエスケープシーケンスを選択してください。",
  "choices": [{
    "label": "A",
    "text": "\\t"
  }, {
    "label": "B",
    "text": "\\m"
  }, {
    "label": "C",
    "text": "\\l"
  }, {
    "label": "D",
    "text": "\\r"
  }, {
    "label": "E",
    "text": "\\n"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/issue では \\r がカーネルのリリース番号に展開されます。\\n はホスト名、\\l は端末（tty）名、\\m はマシンのアーキテクチャ、\\t は現在の時刻に展開されます。これらのエスケープは getty が処理するため、/etc/motd に記述しても展開されません。",
  "answerKeys": ["ローカルコンソール"],
  "answerTexts": ["\\r"],
  "answerHints": ["\\r"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.3"
}, {
  "id": "201-250",
  "track": "201",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ログイン中のすべてのユーザの端末に「15:00 からファイルサーバを停止します」というメッセージを一斉に送信したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "write \"15:00 からファイルサーバを停止します\""
  }, {
    "label": "B",
    "text": "wall \"15:00 からファイルサーバを停止します\""
  }, {
    "label": "C",
    "text": "mesg y \"15:00 からファイルサーバを停止します\""
  }, {
    "label": "D",
    "text": "talk \"15:00 からファイルサーバを停止します\""
  }, {
    "label": "E",
    "text": "logger \"15:00 からファイルサーバを停止します\""
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "wall はログイン中のすべてのユーザの端末にメッセージを送信するコマンドで、引数を省略すると標準入力から読み込んだ内容を送信します。write や talk は特定のユーザとの間でメッセージをやり取りするコマンドです。mesg は自分の端末へのメッセージ受信の可否を切り替えるコマンドで、logger はシステムログにメッセージを記録するコマンドです。",
  "answerKeys": ["ログイン"],
  "answerTexts": ["wall \"15:00 からファイルサーバを停止します\""],
  "answerHints": ["wall"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.3"
}, {
  "id": "201-251",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "/dev/sdb3 パーティションの内容を消去するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "rm /dev/sdb3"
  }, {
    "label": "B",
    "text": "dd if=/dev/zero of=/dev/sdb3"
  }, {
    "label": "C",
    "text": "dd of=/dev/zero if=/dev/sdb3"
  }, {
    "label": "D",
    "text": "umount /dev/sdb3"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "パーティションの内容を消すには、デバイスファイル名を削除するのではなく、対応する記憶領域へデータを書き込みます。dd は if が読み取り元、of が書き込み先なので、dd if=/dev/zero of=/dev/sdb3 が /dev/sdb3 をゼロで上書きします。rm はデバイスファイル名を消すだけ、C は読み書きの方向が逆、umount はマウント解除で内容は消えません。",
  "answerKeys": ["/dev/sdb3"],
  "answerTexts": ["dd if=/dev/zero of=/dev/sdb3"],
  "answerHints": ["dd if"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-252",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "ソースコードからソフトウェアをコンパイルするとき、コマンドラインで別のファイルを指定しておらず、次のファイルのいずれかが存在する場合に GNU make が検索して使用するファイルはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "configure"
  }, {
    "label": "B",
    "text": "config.h.in"
  }, {
    "label": "C",
    "text": "makefile"
  }, {
    "label": "D",
    "text": "Makefile"
  }, {
    "label": "E",
    "text": "Makefile.in"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "GNU make は -f で別名を指定しない場合、GNUmakefile、makefile、Makefile の順に探します。選択肢では makefile と Makefile が該当します。configure はビルド設定を調べて Makefile を生成するスクリプト、config.h.in と Makefile.in はそれぞれ config.h と Makefile を生成するためのひな型で、make が既定で読むファイル名ではありません。",
  "answerKeys": ["ソースコードからソフトウェアをコンパイル"],
  "answerTexts": ["makefile", "Makefile"],
  "answerHints": ["makefile", "Makefile"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-253",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － 現在ログイン中のすべてのユーザーにメッセージを送信するコマンドは何ですか。パスや引数を付けず、コマンド名だけを入力してください。",
  "choices": [],
  "answer": ["wall"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "wall は write all に由来し、現在ログインしているすべてのユーザーの端末（tty）へメッセージを一斉送信するコマンドです。保守開始や停止予定の通知など、全ユーザーへの一斉連絡に使います。特定の相手への連絡は write や talk、端末の受信可否の変更は mesg と区別します。",
  "answerKeys": ["空欄を埋めてください － 現在"],
  "answerTexts": ["wall"],
  "answerHints": ["wall"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.3"
}, {
  "id": "201-254",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "アーカイブ lpifiles.tar.gz から、ファイル名に lpi を含むファイルだけを復元するコマンドは次のうちどれですか。",
  "choices": [{
    "label": "A",
    "text": "tar xvzf lpifiles.tar.gz --wildcards \"*lpi*\""
  }, {
    "label": "B",
    "text": "tar xvzwf lpifiles.tar.gz \"*lpi*\""
  }, {
    "label": "C",
    "text": "tar -xvfz lpifiles.tar.gz --deep \"*lpi*\""
  }, {
    "label": "D",
    "text": "tar -xvzf lpifiles.tar.gz --subdirs \"*lpi*\""
  }, {
    "label": "E",
    "text": "tar xvzf lpifiles.tar.gz --globbing \"*lpi*\""
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "x は取り出し、v は処理名の表示、z は gzip 展開、f は対象アーカイブの指定です。名前のパターンで選択復元するには --wildcards が必要で、\"*lpi*\" を引用符で囲むのはシェルによる展開を防いで tar にパターンを渡すためです。w は処理前の確認、--deep・--subdirs・--globbing は GNU tar のオプション名ではありません。",
  "answerKeys": ["アーカイブ"],
  "answerTexts": ["tar xvzf lpifiles.tar.gz --wildcards \"*lpi*\""],
  "answerHints": ["tar xvzf lpifiles.tar.gz --wildcards"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-255",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "一般ユーザーがプログラムをビルドしてインストールするために ./configure && make && make install を実行しましたが、インストールに失敗しました。インストールを完了するために実行できる対応はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "suinstall を使用してバイナリを手動でインストールする"
  }, {
    "label": "B",
    "text": "root 権限で make install を実行する"
  }, {
    "label": "C",
    "text": "正しくインストールできる既定設定を維持するため、./configure を実行しない"
  }, {
    "label": "D",
    "text": "ユーザーが書き込める場所を --prefix に指定して ./configure を再実行する"
  }, {
    "label": "E",
    "text": "make install_local を実行して /usr/local/ にインストールする"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "make まで成功していてインストール先への書き込み権限が原因で失敗した場合、root 権限で make install を再実行するか、./configure --prefix=\"$HOME/local\" のように自分が書き込める配置先を指定して作り直します。suinstall や install_local は標準のコマンド／ターゲットではなく、configure の省略では権限問題は解決しません。",
  "answerKeys": ["一般ユーザーがプログラム"],
  "answerTexts": ["root 権限で make install を実行する", "ユーザーが書き込める場所を --prefix に指定して ./configure を再実行する"],
  "answerHints": ["root", "ユーザー"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-256",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "次のコマンドは正常に実行されました。\ncd /opt; tar xvf /dev/nst0;\nこのコマンド列をもう一度実行すると、何が起こりますか。",
  "choices": [{
    "label": "A",
    "text": "使用後にテープが排出されるため、テープが存在しないというエラーが発生する"
  }, {
    "label": "B",
    "text": "/opt の内容がもう一度同じ内容で復元される"
  }, {
    "label": "C",
    "text": "/opt の内容全体が、テープ上の次のファイルの内容に置き換えられる"
  }, {
    "label": "D",
    "text": "/opt に、テープ上の次のファイルから追加の内容が加えられる"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/dev/nst0 は使用後に自動で巻き戻さない（no-rewind）テープデバイスです。1回目の読み取り後もテープ位置が保持されるため、2回目の tar xvf は次のアーカイブを /opt 以下へ展開します。cd /opt は作業ディレクトリを変えるだけでテープ位置は戻りません。同じ内容を再び読むには先頭へ巻き戻す必要があります。",
  "answerKeys": ["次のコマンドは正常に"],
  "answerTexts": ["/opt に、テープ上の次のファイルから追加の内容が加えられる"],
  "answerHints": ["/opt に"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-257",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － SSDをサポートするため、マウント済みファイルシステムの未使用ブロックを破棄するコマンドは何ですか。パスや引数を付けず、コマンド名だけを入力してください。",
  "choices": [],
  "answer": ["fstrim"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fstrim は、マウント済みファイルシステムが把握している未使用ブロックを下位の SSD などへ discard（TRIM）として通知するコマンドです。fstrim /mnt のように対象を指定し、使用中のファイルを削除せずに処理できます。デバイスの範囲を直接破棄する blkdiscard とは区別します。",
  "answerKeys": ["空欄を埋めてください － SSD"],
  "answerTexts": ["fstrim"],
  "answerHints": ["fstrim"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-258",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "RAID 5アレイ内の単一デバイスを故障状態として模擬する1つのコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "mdadm --remove /dev/md0 /dev/sdd1"
  }, {
    "label": "B",
    "text": "mdadm --zero-superblock /dev/sdf3"
  }, {
    "label": "C",
    "text": "mdadm --force-fault /dev/md2 /dev/sde2"
  }, {
    "label": "D",
    "text": "mdadm --fail /dev/md0 /dev/sdc1"
  }, {
    "label": "E",
    "text": "mdadm /dev/md0 --offline /dev/sdc1"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mdadm --fail はアレイと対象メンバーを明示して、そのメンバーを faulty（故障扱い）にします。--remove は故障扱いにした後の取り外し、--zero-superblock はデバイス上の RAID 管理情報の消去で、いずれも状態変更とは別の操作です。--force-fault と --offline はこの用途のオプション名ではありません。",
  "answerKeys": ["RAID 5"],
  "answerTexts": ["mdadm --fail /dev/md0 /dev/sdc1"],
  "answerHints": ["mdadm --fail"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-259",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "完全な冗長性を持つRAID 5アレイに必要なディスクの最小台数はいくつですか。",
  "choices": [{
    "label": "A",
    "text": "1台"
  }, {
    "label": "B",
    "text": "2台"
  }, {
    "label": "C",
    "text": "3台"
  }, {
    "label": "D",
    "text": "4台"
  }, {
    "label": "E",
    "text": "5台"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "RAID 5 はデータを複数ディスクへ分散して記録し、パリティも分散配置する方式で、欠損のない構成には最低3台が必要です。3台なら2台分のデータと1台分のパリティを分散配置でき、1台が欠けても復元できます。2台は RAID 1 の台数、4台以上でも構成はできますが最小台数ではありません。",
  "answerKeys": ["完全な"],
  "answerTexts": ["3台"],
  "answerHints": ["3"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-260",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "1台のハードディスクと1台のCDライターがあり、どちらもSATAコントローラーに接続されています。CDライターを表すデバイスはどれですか。",
  "choices": [{
    "label": "A",
    "text": "/dev/hdb"
  }, {
    "label": "B",
    "text": "/dev/sdd"
  }, {
    "label": "C",
    "text": "/dev/scd1"
  }, {
    "label": "D",
    "text": "/dev/sr0"
  }, {
    "label": "E",
    "text": "/dev/sr1"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SATA 接続の機器は SCSI 層を通して扱われ、ハードディスクは /dev/sd 系、CD や DVD などの光学ドライブは /dev/sr 系になります。光学ドライブの番号はハードディスクの台数とは別に数えるため、1台目の光学ドライブは /dev/sr0 です。/dev/hdb は旧 IDE 系、/dev/scd1 と /dev/sr1 は2台目を表します。",
  "answerKeys": ["1台の"],
  "answerTexts": ["/dev/sr0"],
  "answerHints": ["/dev/sr0"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-261",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "論理ボリュームのサイズを拡張した後に実行すべき操作はどれですか。",
  "choices": [{
    "label": "A",
    "text": "vgresize を実行する"
  }, {
    "label": "B",
    "text": "論理ボリューム上で使用しているファイルシステムのサイズを拡張する"
  }, {
    "label": "C",
    "text": "lvresize を実行する"
  }, {
    "label": "D",
    "text": "論理ボリュームを再マウントする"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LV は記憶領域を提供し、その上のファイルシステムが実際の容量を管理します。LV を広げただけではファイルシステムが認識する容量は増えないため、ext4 なら resize2fs、XFS なら xfs_growfs でファイルシステム側も拡張します。vgresize は標準コマンドではなく、lvresize の再実行や再マウントでは容量管理情報は書き換わりません。",
  "answerKeys": ["論理ボリュームの"],
  "answerTexts": ["論理ボリューム上で使用しているファイルシステムのサイズを拡張する"],
  "answerHints": ["論理ボリューム上で"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-262",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "次の /proc/mdstat の出力を確認してください。\nPersonalities : [raid6] [raid5] [raid4]\nmd0 : active raid5 sdb1[3] (S) sdc1[7] sda1[4] (S) sdd1[6] sde1[5]\n      1046528 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/2] [UU_]\n      [===>.................]  recovery = 15.9% (83808/523264) finish=0.1min speed=71880K/sec\nunused devices: <none>\nこの出力から読み取れる情報を2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "/dev/md0 のディスクの1台に障害が発生し、スペアディスクを使って完全な冗長性を再構築している"
  }, {
    "label": "B",
    "text": "現在のリカバリ完了後、スペアディスク /dev/sda1 が完全な冗長性の復元に使用される"
  }, {
    "label": "C",
    "text": "[UU_] はRAIDでディスクが1台欠けており、完全な冗長性がまだ回復していないことを示す"
  }, {
    "label": "D",
    "text": "メタデータversion 1.2は、LILOとGRUB Legacyが /dev/md0 をブートパーティションとして使用できるようにするもので、GRUB2では不要である"
  }, {
    "label": "E",
    "text": "[3/2] は3台のRAIDディスクと2台のスペアディスクがあり、その合計が利用可能なディスク数であることを示す"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "[3/2] は構成上必要なメンバー数が3、同期済みが2であることを示し、[UU_] の _ はまだ使えない位置を表します。recovery = 15.9% と合わせると、障害で冗長性を失った RAID 5 がスペアを組み込んで再構築中だと読み取れます。回復が完了するまでは縮退状態で、完全な冗長性は回復していません。",
  "answerKeys": ["次の /"],
  "answerTexts": ["/dev/md0 のディスクの1台に障害が発生し、スペアディスクを使って完全な冗長性を再構築している", "[UU_] はRAIDでディスクが1台欠けており、完全な冗長性がまだ回復していないことを示す"],
  "answerHints": ["/dev", "[UU_"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-263",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － ボリュームグループから物理ボリュームを取り除くコマンドは何ですか。パスや引数を付けず、コマンド名だけを入力してください。",
  "choices": [],
  "answer": ["vgreduce"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "vgreduce は、未使用の PV を指定した VG から取り除き、VG が利用できる物理領域を減らします。対象 PV にデータが残っている場合は、先に pvmove で他の PV へ移してから実行します。PV の識別情報も不要になった場合は pvremove を使います。",
  "answerKeys": ["空欄を埋めてください － ボリュームグループ"],
  "answerTexts": ["vgreduce"],
  "answerHints": ["vgreduce"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-264",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "元の論理ボリュームを更新可能なまま、ある時点における完全なコピーを作成するために使用するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "lvcclone"
  }, {
    "label": "B",
    "text": "lvcreate"
  }, {
    "label": "C",
    "text": "lvm2"
  }, {
    "label": "D",
    "text": "lvsnap"
  }, {
    "label": "E",
    "text": "lvsnapshot"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LVM のスナップショットは lvcreate の -s（--snapshot）で作成します。元のブロックが更新される前にその内容を保存し、未変更部分は元の LV を参照することで作成時点の見え方を維持するため、元の LV を更新しながら時点コピーを利用できます。lvcclone・lvsnap・lvsnapshot というコマンドは存在せず、lvm2 は実装やパッケージの名称です。",
  "answerKeys": ["元の論理"],
  "answerTexts": ["lvcreate"],
  "answerHints": ["lvcreate"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-265",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "/mnt に volume という名前のBtrfsサブボリュームを作成するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "btrfs subvolume add -n volume /mnt"
  }, {
    "label": "B",
    "text": "btrfs create subvolume /mnt volume"
  }, {
    "label": "C",
    "text": "btrfs-subvolume create /mnt/volume"
  }, {
    "label": "D",
    "text": "btrfs subvolume new volume /mnt"
  }, {
    "label": "E",
    "text": "btrfs subvolume create /mnt/volume"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Btrfs のサブボリュームは同一 Btrfs ファイルシステム内で独立した管理単位となるファイルツリーで、スナップショットや個別マウントの対象にできます。作成は btrfs subvolume create に作成先の完全なパスを渡す形式で、/mnt の下に volume を作るなら btrfs subvolume create /mnt/volume です。",
  "answerKeys": ["/mnt"],
  "answerTexts": ["btrfs subvolume create /mnt/volume"],
  "answerHints": ["btrfs subvolume create"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-266",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － 次の /etc/fstab の行には、ユーザー fred に /dev/sdb1 上のvfatファイルシステム内のファイルへの書き込みを許可するための空欄があります。\n/dev/sdb1 /mnt/usbflash vfat defaults,______=fred,umask=022 0 0\n空欄に入るオプション名だけを入力してください。",
  "choices": [],
  "answer": ["uid"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "vfat は ext4 のような Unix 形式の所有者やアクセス権をファイルごとに保存しないため、マウント時の uid・gid・umask で Linux から見える権限を与えます。uid=fred とすると vfat 上のファイルが fred の所有物として扱われ、umask=022 で残る所有者の書き込み権限を使えます。user や owner は「誰がマウントを実行できるか」を制御する別のオプションです。",
  "answerKeys": ["空欄を埋めてください － 次の"],
  "answerTexts": ["uid"],
  "answerHints": ["uid"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-267",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "システムの使用量が非常に多く、Linuxシステムに追加のスワップ領域が必要です。5 GBの追加スワップ領域を初期化するコマンドの組み合わせはどれですか。",
  "choices": [{
    "label": "A",
    "text": "dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; mount /tmp/swapfile"
  }, {
    "label": "B",
    "text": "dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; swapon /tmp/swapfile"
  }, {
    "label": "C",
    "text": "dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; swapon /tmp/swapfile"
  }, {
    "label": "D",
    "text": "touch -5G /tmp/swapfile; swapon /tmp/swapfile"
  }, {
    "label": "E",
    "text": "mkswap /tmp/swapfile 512000; swapon /tmp/swapfile"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "スワップファイルの追加は、dd で領域を確保し、mkswap でスワップ用に初期化し、swapon で有効化する三段階です。bs=1024 と count=5120000 の積は約5.2GBになります。mount はファイルシステムの接続であってスワップの有効化ではなく、mkswap を省くとスワップとして識別できません。touch に -5G という容量指定のオプションはありません。",
  "answerKeys": ["システムの使用量が"],
  "answerTexts": ["dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; swapon /tmp/swapfile"],
  "answerHints": ["dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; swapon"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-268",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "systemdのmountユニットの目的は何ですか。",
  "choices": [{
    "label": "A",
    "text": "systemd-mount コマンドによって /etc/fstab に永続的なマウント定義を書き込む"
  }, {
    "label": "B",
    "text": "ネットワークファイルシステムをローカルのマウントポイントへマウントする場合にだけ使用され、ローカルメディアには使用できない"
  }, {
    "label": "C",
    "text": "systemd-fstab-generator によって作成され、/etc/fstab のエントリをシステムのブート処理へ統合する"
  }, {
    "label": "D",
    "text": "systemdを使用してファイルシステムをマウントおよびアンマウントするときに mount コマンドが使用する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mount ユニットはファイルシステムをどこへマウントするか、その状態や依存関係を管理する単位です。/etc/fstab に書かれた定義は systemd-fstab-generator によって mount ユニットへ変換され、必要なデバイスや他の起動処理との前後関係を systemd の管理へ組み込めます。対象はローカルメディアでもネットワークでも構いません。",
  "answerKeys": ["systemdのmount"],
  "answerTexts": ["systemd-fstab-generator によって作成され、/etc/fstab のエントリをシステムのブート処理へ統合する"],
  "answerHints": ["systemd-fstab"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-269",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － 多数の書き込み操作の後、ファイルシステムの保留中データをディスクへ書き出すコマンドは何ですか。パスや引数を付けず、コマンド名だけを入力してください。",
  "choices": [],
  "answer": ["sync"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Linux は書き込まれたデータをいったんメモリ上のキャッシュに保持し、後からディスクへ反映します。sync は、こうした未反映のファイルデータやファイルシステムの管理情報を書き出して同期するコマンドです。個別ファイル向けの fsync や、処理方式を表す flush・writeback とは区別します。",
  "answerKeys": ["空欄を埋めてください － 多数の"],
  "answerTexts": ["sync"],
  "answerHints": ["sync"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-270",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "smartd はシステムのどのコンポーネントを監視しますか。",
  "choices": [{
    "label": "A",
    "text": "CPU"
  }, {
    "label": "B",
    "text": "RAM"
  }, {
    "label": "C",
    "text": "ハードディスク"
  }, {
    "label": "D",
    "text": "Ethernetトラフィック"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "smartd は、ストレージ装置が持つ自己監視・自己診断機能である SMART の情報を定期的に確認する常駐プログラムです。温度、読み書きのエラー、代替処理されたセクターなどを調べ、障害の兆候を捉える用途に使います。その場で情報を表示・検査する smartctl に対し、smartd は継続監視を担います。",
  "answerKeys": ["smartd"],
  "answerTexts": ["ハードディスク"],
  "answerHints": ["ハードディスク"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-271",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "/dev/sda1 上のext4ファイルシステムに root というラベルを設定する方法はどれですか。",
  "choices": [{
    "label": "A",
    "text": "relabel /dev/sda1 root"
  }, {
    "label": "B",
    "text": "tune2fs -L root /dev/sda1"
  }, {
    "label": "C",
    "text": "echo 'root' > /proc/fs/sda1/label"
  }, {
    "label": "D",
    "text": "labelfs --device /dev/sda1 root"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ファイルシステムのラベルは、デバイス名とは別にファイルシステムへ付ける識別用の名前です。ext2・ext3・ext4 では tune2fs の大文字 -L でラベルを設定します。小文字の -l は管理情報の表示なので区別が必要です。ラベルを root にしても自動的に / へマウントされるわけではありません。",
  "answerKeys": ["/dev/sda1"],
  "answerTexts": ["tune2fs -L root /dev/sda1"],
  "answerHints": ["tune2fs"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-272",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "暗号化されたLUKSパーティションの情報を表示する cryptsetup のサブコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "luksDump"
  }, {
    "label": "B",
    "text": "luksInfo"
  }, {
    "label": "C",
    "text": "luksDebug"
  }, {
    "label": "D",
    "text": "luksLS"
  }, {
    "label": "E",
    "text": "luksShow"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LUKS は暗号化領域の方式や鍵の管理情報をヘッダーに保持します。cryptsetup luksDump に対象デバイスを指定すると、LUKS のバージョン、暗号化に関する設定、UUID、鍵スロットの状態などを確認できます。復号して利用可能にする open や、内部のファイル一覧表示とは別の操作です。luksInfo・luksDebug・luksLS・luksShow は標準のサブコマンド名ではありません。",
  "answerKeys": ["暗号化された"],
  "answerTexts": ["luksDump"],
  "answerHints": ["luksDump"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-273",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "CD-ROM用ファイルシステムの標準はどれですか。",
  "choices": [{
    "label": "A",
    "text": "OSI 9660"
  }, {
    "label": "B",
    "text": "ISO 9660"
  }, {
    "label": "C",
    "text": "SROFS"
  }, {
    "label": "D",
    "text": "ISO 8859"
  }, {
    "label": "E",
    "text": "ROM-EO"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ISO 9660 は、異なるシステム間で CD-ROM の内容を読み取れるように、媒体上のボリュームとファイルの構造を定める規格です。Linux では iso9660 というファイルシステム種別で指定します。Rock Ridge や Joliet は拡張であり、ISO 8859 は文字集合の規格群なので対象が異なります。",
  "answerKeys": ["CD"],
  "answerTexts": ["ISO 9660"],
  "answerHints": ["ISO 9660"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-274",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "独自のUEFIブートローダーを備えているinitシステムはどれですか。",
  "choices": [{
    "label": "A",
    "text": "systemd"
  }, {
    "label": "B",
    "text": "SysVinit"
  }, {
    "label": "C",
    "text": "Upstart"
  }, {
    "label": "D",
    "text": "OpenRC"
  }, {
    "label": "E",
    "text": "launchd"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemd プロジェクトには、UEFI 用のブートマネージャーである systemd-boot が含まれます。EFI System Partition などに置かれた起動情報を使い、Linux カーネルや対応する EFI 実行ファイルを起動します。SysVinit・Upstart・OpenRC はカーネル起動後のサービス管理を担う系列で、UEFI 用ブートローダーは提供しません。",
  "answerKeys": ["独自の"],
  "answerTexts": ["systemd"],
  "answerHints": ["systemd"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-275",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "update-rc.d コマンドの -f オプションは、/etc/rcX.d/ と /etc/init.d/ にあるファイルへどのような影響を与えますか。",
  "choices": [{
    "label": "A",
    "text": "/etc/rcX.d/ のリンクが読み取り専用でも、シンボリックリンクを強制的に削除する"
  }, {
    "label": "B",
    "text": "/etc/rcX.d/ のシンボリックリンクと /etc/init.d/ のinitスクリプトの両方を削除する"
  }, {
    "label": "C",
    "text": "/etc/init.d/ のinitスクリプトと /etc/rcX.d/ のシンボリックリンクを削除し、インストール済みファイルのパッケージ情報を更新する"
  }, {
    "label": "D",
    "text": "対応するinitスクリプトが /etc/init.d/ に残っていても、/etc/rcX.d/ のシンボリックリンクを強制的に削除する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "通常の update-rc.d remove は、対応する /etc/init.d/ のスクリプトがまだ存在すると削除を中止します。-f を付けるとこの存在確認による制限を外し、スクリプト本体を残したまま /etc/rcX.d/ の関連リンクを取り除けます。削除対象はあくまでリンクで、本体の削除やパッケージ管理情報の更新は行いません。",
  "answerKeys": ["update"],
  "answerTexts": ["対応するinitスクリプトが /etc/init.d/ に残っていても、/etc/rcX.d/ のシンボリックリンクを強制的に削除する"],
  "answerHints": ["対応する"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-276",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "GRUBブートローダーをマスターブートレコードへインストールするコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "grub-install"
  }, {
    "label": "B",
    "text": "grub-mkconfig"
  }, {
    "label": "C",
    "text": "grub-install-mbr"
  }, {
    "label": "D",
    "text": "grub-glue-mbr"
  }, {
    "label": "E",
    "text": "grub-mbr-setup"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "grub-install は対象プラットフォームに合った GRUB をインストールします。BIOS 用の GRUB を MBR へ導入する場合は、ディスク全体を対象として grub-install /dev/sda のように実行します。grub-mkconfig は grub.cfg の内容を生成するコマンドで、MBR へ起動コードを配置する処理は行いません。",
  "answerKeys": ["GRUBブートローダー"],
  "answerTexts": ["grub-install"],
  "answerHints": ["grub-install"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-277",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "Linuxカーネルを格納したファイルが削除された場合、システムの起動時に何が起こりますか。",
  "choices": [{
    "label": "A",
    "text": "ブートローダーがカーネルをハードディスクのマスターブートレコードへコピーしているため、システムは通常どおり起動する"
  }, {
    "label": "B",
    "text": "カーネルの代わりにinitramfsがロードされ、ルートファイルシステムをマウントして元のパッケージまたはソースからカーネルを再インストールする"
  }, {
    "label": "C",
    "text": "ブートローダーがルートファイルシステムを読み取り専用でマウントし、管理者がカーネルを再インストールできるよう /bin/sh を直接起動する"
  }, {
    "label": "D",
    "text": "カーネルがないためシステムは起動できず、ブートローダーに応じたエラーが表示される"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ブートローダーが指定されたカーネルイメージを見つけられなければ、カーネルへ制御を渡せず起動は失敗します。エラー表示はブートローダーによって異なりますが、init やサービスが動き始める前の段階で止まる点は共通です。MBR に置かれるのは小さなブートコードでカーネル全体のコピーではなく、initramfs もカーネルの代用品にはなりません。",
  "answerKeys": ["Linuxカーネルを"],
  "answerTexts": ["カーネルがないためシステムは起動できず、ブートローダーに応じたエラーが表示される"],
  "answerHints": ["カーネルがないため"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-278",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － ローカル管理者が作成または上書きする、システム固有のsystemdユニットファイルが格納されるディレクトリは何ですか。ディレクトリの完全なパスを入力してください。",
  "choices": [],
  "answer": ["/etc/systemd/system"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemd のシステム用ユニットは、パッケージが提供する標準設定、管理者による永続的な設定、実行時だけの設定を別のディレクトリで管理します。/etc/systemd/system はローカル管理者がシステム全体のユニットを作成したり標準設定を上書きしたりする場所で、通常は同名のパッケージ提供ユニットより優先されます。",
  "answerKeys": ["空欄を埋めてください － ローカル管理者が"],
  "answerTexts": ["/etc/systemd/system"],
  "answerHints": ["/etc/systemd/system"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-279",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "systemdを使用するLinuxサーバーが保守のため rescue.target で起動しました。通常のターゲットへ戻すために使用できるコマンドはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "telinit 0"
  }, {
    "label": "B",
    "text": "systemctl default"
  }, {
    "label": "C",
    "text": "sync"
  }, {
    "label": "D",
    "text": "systemctl emergency"
  }, {
    "label": "E",
    "text": "systemctl reboot"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemctl default は default.target への切り替えを行い、再起動せずに通常運用の環境へ移行できます。systemctl reboot はシステムを再起動して通常のブート処理をやり直すため、今回だけ rescue 環境へ入っていた場合は通常のターゲットへ戻れます。telinit 0 は停止、systemctl emergency はさらに最小限の環境への移行で方向が逆です。",
  "answerKeys": ["systemdを使用する"],
  "answerTexts": ["systemctl default", "systemctl reboot"],
  "answerHints": ["systemctl default", "systemctl reboot"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-280",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － System V initプロセスの主要な設定ファイルは何ですか。パスを含む完全なファイル名を入力してください。",
  "choices": [],
  "answer": ["/etc/inittab"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "System V init は、ランレベルというシステムの動作状態に応じて初期化処理や常駐プロセスの起動を管理します。その中心となる設定ファイルが /etc/inittab で、既定ランレベルを指定する initdefault や、終了したプロセスを再起動する respawn などを記述します。個別サービスのスクリプトを置く /etc/init.d/ とは役割が異なります。",
  "answerKeys": ["空欄を埋めてください － System"],
  "answerTexts": ["/etc/inittab"],
  "answerHints": ["/etc/inittab"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-281",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "Linuxシステムの起動時におけるinitramfsの目的は何ですか。",
  "choices": [{
    "label": "A",
    "text": "必要なモジュールをロードし、LVMなどのサブシステムを開始して、カーネルからルートファイルシステムへアクセスできるようにする"
  }, {
    "label": "B",
    "text": "カーネルへのアクセスを高速化するため、カーネルを通常のシステムメモリからinitramメモリへ移動する"
  }, {
    "label": "C",
    "text": "システムを高速化してディスクへの書き込みを減らすため、ルートファイルシステムの内容をRAMへコピーする"
  }, {
    "label": "D",
    "text": "ディスクへの書き込みを減らすため、/tmpなどのディレクトリの揮発性データを格納するRAMディスクを作成する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "initramfs は、実際のルートファイルシステムを利用できるようにするため起動初期に RAM 上へ展開する一時的なファイルシステムです。ディスクへアクセスするモジュールや LVM の起動用ツールを用意し、準備が整った実ルートへ切り替えて初期化処理を引き継ぎます。RAM で高速化する仕組みではありません。",
  "answerKeys": ["Linuxシステムの起動時におけ"],
  "answerTexts": ["必要なモジュールをロードし、LVMなどのサブシステムを開始して、カーネルからルートファイルシステムへアクセスできるようにする"],
  "answerHints": ["必要な"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-282",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "Linuxシステム上のEFIエントリを変更するために使用するユーザー空間アプリケーションはどれですか。",
  "choices": [{
    "label": "A",
    "text": "efieditor"
  }, {
    "label": "B",
    "text": "configefi"
  }, {
    "label": "C",
    "text": "efimanager"
  }, {
    "label": "D",
    "text": "efibootmgr"
  }, {
    "label": "E",
    "text": "efibootedit"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "EFI の起動エントリは、ファームウェアが起動時に参照するブートローダーの場所や起動順序などの情報です。efibootmgr は Linux のユーザー空間からこれらの EFI 起動変数を操作するツールで、起動エントリの作成・削除、BootOrder による起動順序の変更、BootNext による次回だけの指定などを行えます。",
  "answerKeys": ["Linuxシステム上の"],
  "answerTexts": ["efibootmgr"],
  "answerHints": ["efibootmgr"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-283",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "sysctl コマンドでカーネルパラメーターを変更すると、どのディレクトリツリー内のファイルが変更されますか。",
  "choices": [{
    "label": "A",
    "text": "/sys/kernel/"
  }, {
    "label": "B",
    "text": "/proc/kernel/"
  }, {
    "label": "C",
    "text": "/proc/sys/"
  }, {
    "label": "D",
    "text": "/lib/sys/"
  }, {
    "label": "E",
    "text": "/sys/proc/"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sysctl は稼働中のカーネルパラメーターを参照・変更するコマンドで、操作対象は /proc/sys/ 以下に公開されています。sysctl のキーは /proc/sys/ からの相対的な階層に対応し、例えば net.ipv4.ip_forward は /proc/sys/net/ipv4/ip_forward に対応します。再起動後にも適用する /etc/sysctl.conf とは区別します。",
  "answerKeys": ["sysctl"],
  "answerTexts": ["/proc/sys/"],
  "answerHints": ["/proc/sys"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-284",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "udevadm monitor コマンドの目的は何ですか。",
  "choices": [{
    "label": "A",
    "text": "udevルールによって処理されるカーネルイベントを待ち受け、その情報をコンソールへ表示する"
  }, {
    "label": "B",
    "text": "新しいデバイスがないか /dev/ ディレクトリを監視する"
  }, {
    "label": "C",
    "text": "udevプロセスを監視し、パフォーマンス統計をコンソールへ表示する"
  }, {
    "label": "D",
    "text": "D-Busと通信して新しいデバイスをセットアップする"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "udevadm monitor は、デバイスの追加・削除などに伴うカーネルイベントと、udev のルール処理後に通知されるイベントを観測するコマンドです。発生した操作やデバイスのパスをコンソールへ表示し、両者を見比べることでデバイス変更が検出されたか、ルール処理後の通知まで到達したかを追えます。",
  "answerKeys": ["udevadm"],
  "answerTexts": ["udevルールによって処理されるカーネルイベントを待ち受け、その情報をコンソールへ表示する"],
  "answerHints": ["udevルール"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-285",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "主要なLinuxカーネルモジュールのソースコードはどのように配布されますか。",
  "choices": [{
    "label": "A",
    "text": "Linuxカーネルのソースコードに含まれる"
  }, {
    "label": "B",
    "text": "コンパイル中に使用される都度、カーネルモジュールがオンデマンドでダウンロードされる"
  }, {
    "label": "C",
    "text": "カーネルモジュールには独自のリリースサイクルがあり、Linuxカーネルソースとは別に保守できる"
  }, {
    "label": "D",
    "text": "同じバージョンのLinuxカーネルソースコードと並ぶ個別のダウンロードとして提供される"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "標準的なデバイスドライバーやファイルシステムの実装は、カーネルソース内の drivers/ や fs/ などに収められています。モジュール化できる機能では、カーネル設定に応じて本体へ組み込むか読み込み可能なモジュールとして構築するかを選択できるため、主要モジュールのソースはカーネルソースを取得すれば得られます。",
  "answerKeys": ["主要な"],
  "answerTexts": ["Linuxカーネルのソースコードに含まれる"],
  "answerHints": ["Linux"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-286",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "http://kernel.org から patch-4.6.4.xz をダウンロードした後、Linuxカーネルversion 4.6.4をビルドする準備として実行する手順はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "ファイルを展開し、生成されたディレクトリを /usr/src/linux へ移動する"
  }, {
    "label": "B",
    "text": "kernel version 4.6.0を含むカーネルソースディレクトリへパッチファイルを適用する"
  }, {
    "label": "C",
    "text": "kernel version 4.6.3を含むカーネルソースディレクトリへパッチファイルを適用する"
  }, {
    "label": "D",
    "text": "xzを使用してファイルを伸長し、非圧縮のパッチファイルを得る"
  }, {
    "label": "E",
    "text": "patchを使用し、任意の以前のカーネルversionのソースディレクトリへ非圧縮のパッチファイルを適用する"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "patch-4.6.4.xz はカーネルソース一式ではなく、4.6 系の基底ソースを 4.6.4 へ更新する差分を xz で圧縮したファイルです。この形式の stable パッチは直前の 4.6.3 からではなく基底の 4.6.0 からの累積差分なので、まず xz で伸長して非圧縮のパッチを得て、4.6.0 相当のソースへ適用します。",
  "answerKeys": ["http:"],
  "answerTexts": ["kernel version 4.6.0を含むカーネルソースディレクトリへパッチファイルを適用する", "xzを使用してファイルを伸長し、非圧縮のパッチファイルを得る"],
  "answerHints": ["kernel version 4.6.0", "xz"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-287",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "新しいカーネルを手動でコンパイルしてインストールした後、initramfsについて何をする必要がありますか。",
  "choices": [{
    "label": "A",
    "text": "initramfsはカーネルから独立しているため、マシンのハードウェア構成が変わらない限り変更しない"
  }, {
    "label": "B",
    "text": "initramfsにはカーネルモジュールが含まれるため、新しいカーネル用に新しいinitramfsを構築する"
  }, {
    "label": "C",
    "text": "Linuxカーネルのコンパイル中に新しいinitramfsが自動的に構築されるため、そのinitramfsをインストールするだけでよい"
  }, {
    "label": "D",
    "text": "システム起動時にinitramfsが新しいカーネル用に自身を再構成するため、システムを再起動する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "initramfs には実ルートへ到達するための起動用ツールやカーネルモジュールが含まれます。モジュールは対象カーネルのバージョンや構成に依存するため、新しいカーネルを手動で用意した場合は mkinitramfs や dracut などで対応する initramfs を生成し、ブートローダーがその組を読み込むようにします。",
  "answerKeys": ["新しいカーネルを手動で"],
  "answerTexts": ["initramfsにはカーネルモジュールが含まれるため、新しいカーネル用に新しいinitramfsを構築する"],
  "answerHints": ["initramfsには"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-288",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "dummy という名前のカーネルモジュールの物理パスを表示するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "modprobe -i dummy"
  }, {
    "label": "B",
    "text": "modinfo -n dummy"
  }, {
    "label": "C",
    "text": "modpath -v dummy"
  }, {
    "label": "D",
    "text": "depmod -n dummy"
  }, {
    "label": "E",
    "text": "modshow -p dummy"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "modinfo はカーネルモジュールのファイルから説明やパラメーターなどの情報を取得するコマンドです。modinfo -n dummy はモジュール情報のうち filename をパス付きで表示するため、/lib/modules/ 以下を手作業で探さずに配置先を確認できます。modprobe は読み込み、depmod は依存情報の生成で用途が異なります。",
  "answerKeys": ["dummy"],
  "answerTexts": ["modinfo -n dummy"],
  "answerHints": ["modinfo"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-289",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "起動時に利用可能なプロセッサのうち1個だけを使用するようカーネルへ指示するパラメーターはどれですか。",
  "choices": [{
    "label": "A",
    "text": "maxcpus=1"
  }, {
    "label": "B",
    "text": "usecpus=1"
  }, {
    "label": "C",
    "text": "smpcpus=1"
  }, {
    "label": "D",
    "text": "vcpumx=1"
  }, {
    "label": "E",
    "text": "vmxcpus=1"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "maxcpus は、複数プロセッサを利用できるカーネルが起動時に何個の CPU を動作させるかの上限を指定する起動パラメーターです。maxcpus=1 とすれば、ほかの CPU が搭載されていても起動時には1個だけが有効になります。CPU 番号の選択やプロセス単位の CPU 割当とは別の指定です。",
  "answerKeys": ["起動時に"],
  "answerTexts": ["maxcpus=1"],
  "answerHints": ["maxcpus"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-290",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － 自分でコンパイルしたカーネルをインストールした後、ロードすべきモジュールが見つかりません。カーネルのインストール時に実行し忘れた可能性が高いmakeターゲットは何ですか。コマンド名や引数を付けず、makeターゲット名だけを入力してください。",
  "choices": [],
  "answer": ["modules_install"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "カーネルモジュールは、ソースから構築する処理と、システムが参照する場所へインストールする処理が別になっています。modules_install は構築済みのモジュールを通常 /lib/modules/ 以下の対応するカーネルバージョンのディレクトリへ配置する make ターゲットです。これを忘れると新しいカーネルからモジュールが見つかりません。",
  "answerKeys": ["空欄を埋めてください － 自分で"],
  "answerTexts": ["modules_install"],
  "answerHints": ["modules_install"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-291",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "Linux カーネル 3.4.50-11 を実行しているサーバーで、カーネルの構成パラメーターを格納する /boot ディレクトリ内のファイルはどれですか。",
  "choices": [{
    "label": "A",
    "text": "config-linux-3.4.50-11"
  }, {
    "label": "B",
    "text": "config-3.4.50-11"
  }, {
    "label": "C",
    "text": "system-3.4.50-11"
  }, {
    "label": "D",
    "text": "vmlinuz-3.4.50-11"
  }, {
    "label": "E",
    "text": "rc.config-3.4.50-11"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/boot 内の config- で始まるファイルは、そのカーネルをビルドした際の構成パラメーターを記録したものです。config- という接頭辞の直後に対象カーネルの完全なバージョン文字列が続くため、3.4.50-11 なら config-3.4.50-11 です。vmlinuz はカーネル本体、System.map はシンボルとアドレスの対応で役割が異なります。",
  "answerKeys": ["Linux カーネル 3"],
  "answerTexts": ["config-3.4.50-11"],
  "answerHints": ["config-3"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-292",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "Linux システム上で、CPU サイクルを最も多く使用している順にプロセスを並べ、その PID をデフォルトで表示するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "top"
  }, {
    "label": "B",
    "text": "uptime"
  }, {
    "label": "C",
    "text": "ps aux"
  }, {
    "label": "D",
    "text": "vmstat"
  }, {
    "label": "E",
    "text": "freemem"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "top はプロセスごとの CPU 使用率などを画面上で繰り返し更新する監視コマンドです。標準の初期設定では CPU 使用率の高い順にプロセスを並べ、PID も表示します。ps aux にも PID や %CPU は含まれますが、その指定だけでは CPU 使用率順の並べ替えにはなりません。uptime や vmstat はシステム全体の統計です。",
  "answerKeys": ["Linux システム上で"],
  "answerTexts": ["top"],
  "answerHints": ["top"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-293",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "sar -b の出力に含まれる tps は何を表しますか。",
  "choices": [{
    "label": "A",
    "text": "1秒あたりのテラバイト数"
  }, {
    "label": "B",
    "text": "1秒あたりのトラフィック数"
  }, {
    "label": "C",
    "text": "1秒あたりの転送回数"
  }, {
    "label": "D",
    "text": "1秒あたりの総データ量"
  }, {
    "label": "E",
    "text": "1秒あたりのテラビット数"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sar -b はブロックデバイスの I/O と転送に関する統計を表示します。tps は transfers per second の略で、物理デバイスへ発行された転送要求の1秒あたりの回数を表します。1回あたりの転送サイズは一定ではないため、tps の値だけから毎秒何MB転送したかは決まりません。",
  "answerKeys": ["sar -"],
  "answerTexts": ["1秒あたりの転送回数"],
  "answerHints": ["1秒あたりの転送回数"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-294",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "次は uptime コマンドの出力です。\n12:10:05 up 18 days, 19:00, 2 users, load average: 0.47, 24.71, 35.31\nこのロードアベレージは、どの時間範囲のシステム負荷平均を表しますか。",
  "choices": [{
    "label": "A",
    "text": "1分、5分、15分"
  }, {
    "label": "B",
    "text": "1分、15分、30分"
  }, {
    "label": "C",
    "text": "5秒、20秒、25秒"
  }, {
    "label": "D",
    "text": "15分、30分、60分"
  }, {
    "label": "E",
    "text": "15秒、45秒、90秒"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "uptime の load average は、1分・5分・15分という異なる時間幅に対応する平均負荷を左から順に表示します。表示例では 0.47 が1分、24.71 が5分、35.31 が15分に対応し、短い時間幅ほど直近の変化を反映するため、最近の負荷が以前より低下した状況がうかがえます。",
  "answerKeys": ["次は uptime コマンドの出力です。\n12:10:05 up 18 days, 19:00, 2 users, load average: 0.47, 24.71, 35.31\nこのロードアベレージ"],
  "answerTexts": ["1分、5分、15分"],
  "answerHints": ["1分、5"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-295",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "ネットワークリンクの品質を監視するために記録すべき特性はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "双方向の帯域幅"
  }, {
    "label": "B",
    "text": "リンクを使用しているノード数"
  }, {
    "label": "C",
    "text": "実効レイテンシ"
  }, {
    "label": "D",
    "text": "IPv4 パケットと IPv6 パケットの数"
  }, {
    "label": "E",
    "text": "使用中の TCP ポート数"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ネットワークリンクの品質は、単位時間にどれだけのデータを運べるかという帯域幅と、通信にどれだけ時間がかかるかという実効レイテンシを分けて評価します。送信方向と受信方向で条件が同じとは限らず、帯域が広くても遅延が大きい場合があるため、転送能力と応答の遅さの両方を記録します。ノード数やポート数は利用規模の情報にすぎません。",
  "answerKeys": ["ネットワークリンク"],
  "answerTexts": ["双方向の帯域幅", "実効レイテンシ"],
  "answerHints": ["双方向の", "実効"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-296",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "メモリ使用量、ページング、およびブロック入出力に関する情報を報告するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "free"
  }, {
    "label": "B",
    "text": "memshow"
  }, {
    "label": "C",
    "text": "lsof"
  }, {
    "label": "D",
    "text": "pidof"
  }, {
    "label": "E",
    "text": "vmstat"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "vmstat はメモリ使用量に加え、ページングに関係するスワップ入出力（si/so）やブロック入出力（bi/bo）をまとめて報告します。free は容量の一覧表示にとどまり、入出力の推移は分かりません。lsof は開いているファイルの一覧、pidof はプロセスIDの検索で、いずれも対象が異なります。",
  "answerKeys": ["メモリ使用量、"],
  "answerTexts": ["vmstat"],
  "answerHints": ["vmstat"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-297",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "sar で長期間にわたるパフォーマンスデータを収集するために、cron から定期的に実行すべきコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "sa1"
  }, {
    "label": "B",
    "text": "sarmon"
  }, {
    "label": "C",
    "text": "sarec"
  }, {
    "label": "D",
    "text": "sadf"
  }, {
    "label": "E",
    "text": "sarcron"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sa1 は、システム活動データの収集プログラムである sadc を呼び出し、統計を日別のバイナリデータファイルへ保存するためのスクリプトです。cron から定期的に実行する用途が想定されており、その記録を後から sar で読めます。sadf は保存済みデータを CSV や XML へ出力するコマンドで役割が異なります。",
  "answerKeys": ["sar で"],
  "answerTexts": ["sa1"],
  "answerHints": ["sa1"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-298",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "リモートファイルシステム接続に関するデータの収集に役立つコマンドはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "pidstat"
  }, {
    "label": "B",
    "text": "nfsiostat"
  }, {
    "label": "C",
    "text": "sadf"
  }, {
    "label": "D",
    "text": "cifsiostat"
  }, {
    "label": "E",
    "text": "fsiostat"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nfsiostat は NFS で利用しているファイルシステムの読み書きに関する統計、cifsiostat は CIFS でマウントしたファイルシステムの統計を表示します。いずれもマウントされた共有ファイルシステムの利用状況を調べる点が共通です。pidstat はプロセス単位の統計、sadf は保存済みデータの出力で集計対象が異なります。",
  "answerKeys": ["リモートファイルシステム"],
  "answerTexts": ["nfsiostat", "cifsiostat"],
  "answerHints": ["nfsiostat", "cifsiostat"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-299",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "Web アプリケーションサーバーには 64 GB の RAM と、それぞれ 64 GB の通常のハードディスク上にある2つのスワップパーティションがあります。過去1か月で平均ユーザーセッション数は20%増加しました。同時に平均 RAM 使用率は65%から75%に増加しましたが、スワップ領域はほとんど使用されていません。ユーザーセッション数は今後も毎月約15〜20%増加すると予想されています。この観察結果への対応として適切なものはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "利用可能なハードウェアを効率的に使うため、スワップ領域が大幅に消費されるまでハードウェアのアップグレードを延期する"
  }, {
    "label": "B",
    "text": "将来スワップ領域を使用する場合のデータ損失を避けるため、2つのスワップパーティションで RAID 1 デバイスを作成する"
  }, {
    "label": "C",
    "text": "予想される増加が数か月続く場合に負荷を分散できるよう、追加のアプリケーションサーバーの導入を検討する"
  }, {
    "label": "D",
    "text": "高速アクセスを確保し、スワップ領域を不要にするため、Web アプリケーションのスクリプトとコンテンツを RAM ディスクへ移動する"
  }, {
    "label": "E",
    "text": "スワップ領域の使用を避けるため、利用可能な RAM 容量を増やすハードウェア更新を行う"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ハードディスク上のスワップは RAM と同じ速度では使えないため、増加傾向が続く前提では事前の容量計画が必要です。追加のアプリケーションサーバーで処理を分散すれば1台に集中するメモリ需要を軽減でき、RAM の増設はスワップ入出力に依存する状態を避ける方向の対策です。スワップが大量消費されるまで待つ対応や、RAMディスクへの移動は根拠になりません。",
  "answerKeys": ["Web アプリケーションサーバー"],
  "answerTexts": ["予想される増加が数か月続く場合に負荷を分散できるよう、追加のアプリケーションサーバーの導入を検討する", "スワップ領域の使用を避けるため、利用可能な RAM 容量を増やすハードウェア更新を行う"],
  "answerHints": ["予想される", "スワップ"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-300",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "TCP Wrapper が使用する設定ファイルの組み合わせはどれですか。",
  "choices": [{
    "label": "A",
    "text": "/etc/tcpd.allow と /etc/tcpd.deny"
  }, {
    "label": "B",
    "text": "/etc/tcpwrapper.allow と /etc/tcpwrapper.deny"
  }, {
    "label": "C",
    "text": "/etc/hosts.allow と /etc/hosts.deny"
  }, {
    "label": "D",
    "text": "/etc/access.allow と /etc/access.deny"
  }, {
    "label": "E",
    "text": "/etc/service.allow と /etc/service.deny"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TCP Wrapper は、対応するネットワークサービスへの接続をサービス名と接続元の組み合わせに基づいて制御する仕組みで、標準の規則ファイルは /etc/hosts.allow と /etc/hosts.deny です。許可側の hosts.allow を先に照合し、該当しなければ hosts.deny を調べ、どちらにも一致しない場合は許可されます。",
  "answerKeys": ["TCP Wrapper が"],
  "answerTexts": ["/etc/hosts.allow と /etc/hosts.deny"],
  "answerHints": ["/etc/hosts"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-301",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － プロセスが開いているファイルおよびネットワーク接続に関する情報を一覧表示するプログラムは何ですか。パスや引数を付けず、コマンド名だけを入力してください。",
  "choices": [],
  "answer": ["lsof"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lsof はプロセスが開いているファイルを調べるプログラムで、ネットワーク接続の端点であるソケットも表示対象に含みます。Linux では通常のデータファイルだけでなく通信に使うソケットもプロセスが利用するファイルとして扱われるためです。lsof -p 1234 でプロセスID を指定したり、lsof -i でネットワークソケットに絞ったりできます。",
  "answerKeys": ["空欄を埋めてください － プロセス"],
  "answerTexts": ["lsof"],
  "answerHints": ["lsof"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-302",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "ネットワーククライアントの Ethernet インターフェース eth0 には、サブネット 192.168.0.0/24 内の IP アドレスが設定されています。このサブネットには IP アドレス 192.168.0.1 のルーターがあり、インターネットへ接続しています。クライアントでこのルーターをデフォルトゲートウェイとして使用可能にするコマンドはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "route add default gw 192.168.0.1 eth0"
  }, {
    "label": "B",
    "text": "ifconfig eth0 defaultroute 192.168.0.1"
  }, {
    "label": "C",
    "text": "ip route add default via 192.168.0.1"
  }, {
    "label": "D",
    "text": "echo defaultroute 192.168.0.1 >>/etc/resolv.conf"
  }, {
    "label": "E",
    "text": "route add defaultgw=192.168.0.1 if=eth0"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "route add default gw 192.168.0.1 eth0 は route コマンドでデフォルトルートを追加する構文で、gw の後がゲートウェイ、eth0 が使用するインターフェースです。ip route add default via 192.168.0.1 は ip コマンドで同じ経路を追加し、via が次に渡すルーターを指定します。/etc/resolv.conf は名前解決の設定であって経路設定ではありません。",
  "answerKeys": ["ネットワーククライアント"],
  "answerTexts": ["route add default gw 192.168.0.1 eth0", "ip route add default via 192.168.0.1"],
  "answerHints": ["route add default gw", "ip"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-303",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － ローカルネットワークの利用者から名前解決が遅いと報告されています。DNS クエリの解決に要した時間を表示するコマンドは何ですか。パスを付けず、コマンド名を入力してください。",
  "choices": [],
  "answer": ["dig"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dig は DNS クエリの応答内容と統計を表示するコマンドで、出力に含まれる Query time が問い合わせの所要時間をミリ秒単位で示します。応答したサーバーの情報も併せて確認できるため、どの問い合わせ先について測った結果なのかを対応付けられます。名前が解決できたことと、十分に短い時間で取得できたことは別の判断です。",
  "answerKeys": ["空欄を埋めてください － ローカルネットワーク"],
  "answerTexts": ["dig"],
  "answerHints": ["dig"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-304",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "次の tcpdump コマンドには空欄があります。\ntcpdump -i eth0 ________ 203.0.113.8\n空欄に使用できるフィルターキーワードを3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "host"
  }, {
    "label": "B",
    "text": "ip"
  }, {
    "label": "C",
    "text": "src"
  }, {
    "label": "D",
    "text": "dst"
  }, {
    "label": "E",
    "text": "ipv6"
  }],
  "answer": ["A", "C", "D"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "tcpdump のフィルターでは host が対象ホスト、src が送信元、dst が宛先を指定します。host 203.0.113.8 は方向を限定せず両方向を対象にし、src は送信元、dst は宛先がそのアドレスである通信に限定します。ip は IPv4 プロトコルを指定するキーワードで、直後にアドレスだけを置く構文にはできません。",
  "answerKeys": ["次の tcpdump コマンド"],
  "answerTexts": ["host", "src", "dst"],
  "answerHints": ["host", "src", "dst"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-305",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "ネットワークインターフェース eth0 に静的 IPv6 アドレスを追加するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "ip add addr 2001:db8::1337/64 dev eth0"
  }, {
    "label": "B",
    "text": "ip -6 add addr 2001:db8::1337/64 dev eth0"
  }, {
    "label": "C",
    "text": "ip addr add 2001:db8::1337/64 dev eth0"
  }, {
    "label": "D",
    "text": "ip -6 addr add new 2001:db8::1337/64 dev eth0"
  }, {
    "label": "E",
    "text": "ip addr add -6 2001:db8::1337/64 dev eth0"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ip addr add は、アドレスを扱う addr という操作対象に対して add という追加操作を実行する構文です。ip addr add 2001:db8::1337/64 dev eth0 は操作対象・操作・アドレス・インターフェースの順に引数を配置しています。アドレスの形式から IPv6 と判断できるため -6 は必須ではなく、付ける場合も ip -6 addr add のように先頭へ置きます。",
  "answerKeys": ["ネットワークインターフェース eth0 に"],
  "answerTexts": ["ip addr add 2001:db8::1337/64 dev eth0"],
  "answerHints": ["ip addr add 2001"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-306",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "複数のネットワークインターフェースが有効で、それぞれにインターネットへのデフォルトルートがある Linux ノードでは、どのデフォルトルートが優先されますか。",
  "choices": [{
    "label": "A",
    "text": "メトリック値が最も大きいデフォルトルート"
  }, {
    "label": "B",
    "text": "MTU 値が最も大きいデフォルトルート"
  }, {
    "label": "C",
    "text": "TTL 値が最も小さいデフォルトルート"
  }, {
    "label": "D",
    "text": "TTL 値が最も大きいデフォルトルート"
  }, {
    "label": "E",
    "text": "メトリック値が最も小さいデフォルトルート"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "同じルーティングテーブルで比較対象となる複数のデフォルトルートでは、経路の優先度を示すメトリックが小さいものを優先します。例えばメトリック100と200が設定されていれば100の経路が優先されます。MTU は転送できるパケットの最大サイズ、TTL はパケットの通過制限を表す値で、経路の優先順位とは別です。",
  "answerKeys": ["複数の"],
  "answerTexts": ["メトリック値が最も小さいデフォルトルート"],
  "answerHints": ["メトリック値が最も小さい"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-307",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "次の tcpdump -nli eth1 の出力を確認してください。\n13:03:17.277327 IP 192.168.123.5.1065 > 192.168.5.112.21: Flags [.], ack 1 (truncated)\n13:03:17.598624 IP 192.168.5.112.21 > 192.168.123.5.1065: Flags [P.], seq (truncated)\n使用されたネットワークサービスまたはプロトコルはどれですか。",
  "choices": [{
    "label": "A",
    "text": "FTP"
  }, {
    "label": "B",
    "text": "HTTP"
  }, {
    "label": "C",
    "text": "SSH"
  }, {
    "label": "D",
    "text": "DNS"
  }, {
    "label": "E",
    "text": "DHCP"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "tcpdump の出力では IPv4 アドレスに続く末尾の数値がポート番号を表し、192.168.5.112.21 はポート21を意味します。1行目はクライアント側のポート1065から21番へ、2行目はその逆方向なので、サーバー側ポートが21番の通信だと分かります。TCP の21番は FTP の制御接続の標準ポートです。HTTP は80、SSH は22、DNS は53です。",
  "answerKeys": ["次の tcpdump -nli eth1 の"],
  "answerTexts": ["FTP"],
  "answerHints": ["FTP"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-308",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "クライアントマシンが IP アドレス 192.168.0.1 で稼働する再帰ネームサーバーを使用するようにするには、何を行うべきですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "nameserver 192.168.0.1 を /etc/resolv.conf に追加する"
  }, {
    "label": "B",
    "text": "route add nameserver 192.168.0.1 を実行する"
  }, {
    "label": "C",
    "text": "ifconfig eth0 nameserver 192.168.0.1 を実行する"
  }, {
    "label": "D",
    "text": "/etc/nsswitch.conf の hosts エントリに dns サービスが含まれていることを確認する"
  }, {
    "label": "E",
    "text": "bind add nameserver 192.168.0.1 を実行する"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "通常の Linux の名前解決では、/etc/nsswitch.conf の hosts エントリで検索元を選び、DNS を利用する場合は /etc/resolv.conf の nameserver 行で問い合わせ先を指定します。「DNS を使うか」と「どの DNS サーバーを使うか」は別々の設定なので、両方を満たす必要があります。route や ifconfig は名前解決の設定を行いません。",
  "answerKeys": ["クライアントマシン"],
  "answerTexts": ["nameserver 192.168.0.1 を /etc/resolv.conf に追加する", "/etc/nsswitch.conf の hosts エントリに dns サービスが含まれていることを確認する"],
  "answerHints": ["nameserver", "/etc"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-309",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "無線PHY phy0 の機能と使用可能な周波数を表示するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "iw phy phy0 info"
  }, {
    "label": "B",
    "text": "iw dev wlan0 info"
  }, {
    "label": "C",
    "text": "iw dev wlan0 show"
  }, {
    "label": "D",
    "text": "iw phy wlan0 show"
  }, {
    "label": "E",
    "text": "iw phy0 show"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iw で扱う phy0 は無線ハードウェアの PHY を識別する名前で、wlan0 はその上で通信に使うネットワークインターフェースの名前です。対応する機能や周波数の一覧を知りたい場合は PHY の能力を調べるため、iw phy phy0 info のように対象の種類・名前・操作を指定します。dev を対象にすると現在のインターフェース情報になります。",
  "answerKeys": ["無線"],
  "answerTexts": ["iw phy phy0 info"],
  "answerHints": ["iw phy phy0"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-310",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "ローカルシステムが直接接続された IP ネットワーク上で認識したノードについて、IPv4 アドレスと MAC アドレスを一覧表示するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "arp"
  }, {
    "label": "B",
    "text": "ifconfig"
  }, {
    "label": "C",
    "text": "ipadm"
  }, {
    "label": "D",
    "text": "iwlist"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ARP は同じリンク上で通信する相手の IPv4 アドレスに対応する MAC アドレスを調べる仕組みで、取得した対応情報は ARP キャッシュに保持されます。arp コマンドはその対応表を表示するため、直接接続されたネットワーク上で認識したノードを調べる目的に合います。ifconfig は自分のインターフェース情報、iwlist は無線の周辺情報です。",
  "answerKeys": ["ローカルシステムが"],
  "answerTexts": ["arp"],
  "answerHints": ["arp"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-311",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "ルートパーティションに使用される一般的な Linux ファイルシステムの種類はどれですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "ext4"
  }, {
    "label": "B",
    "text": "VFAT"
  }, {
    "label": "C",
    "text": "NTFS"
  }, {
    "label": "D",
    "text": "XFS"
  }, {
    "label": "E",
    "text": "Btrfs"
  }],
  "answer": ["A", "D", "E"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ルートファイルシステムは / に配置され、システムの動作に必要なファイルを保持します。ext4・XFS・Btrfs はファイルごとの所有者やアクセス権、シンボリックリンクなどを扱えるため、ルート領域に一般的に使われます。VFAT は所有者やアクセス権を本来の形で記録できず、NTFS は主に Windows 向けの形式です。",
  "answerKeys": ["ルートパーティション"],
  "answerTexts": ["ext4", "XFS", "Btrfs"],
  "answerHints": ["ext4", "XFS", "Btrfs"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-312",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "Linux システムのすべてのパーティションおよびボリュームについて、UUID、ラベル、タイプを表示するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "lsdevs"
  }, {
    "label": "B",
    "text": "blkid"
  }, {
    "label": "C",
    "text": "lsmount"
  }, {
    "label": "D",
    "text": "blkls"
  }, {
    "label": "E",
    "text": "blkinfo"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "blkid はブロックデバイスに記録された識別情報を調べ、UUID・LABEL・TYPE などを表示するコマンドです。デバイス指定なしで実行すると検出したデバイスの一覧を表示でき、未マウントのファイルシステムも調査対象にできます。マウント状況を確認する mount や findmnt とは対象が異なります。",
  "answerKeys": ["Linux システムのすべての"],
  "answerTexts": ["blkid"],
  "answerHints": ["blkid"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-313",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "LUKS1 パーティションで同時に使用できる異なるパスワードはいくつですか。",
  "choices": [{
    "label": "A",
    "text": "4個"
  }, {
    "label": "B",
    "text": "8個"
  }, {
    "label": "C",
    "text": "16個"
  }, {
    "label": "D",
    "text": "32個"
  }, {
    "label": "E",
    "text": "64個"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LUKS1 はディスク暗号化の管理形式で、パスワードに相当するパスフレーズを鍵スロットに登録します。鍵スロットは暗号化されたボリューム鍵を保持する領域で、LUKS1 には0〜7の8個があります。登録済みのいずれかを使ってボリューム鍵を得る仕組みなので、解除のたびに8個すべてを入力する必要はありません。LUKS2 では最大32個です。",
  "answerKeys": ["LUKS1"],
  "answerTexts": ["8個"],
  "answerHints": ["8"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-314",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "/etc/fstab ファイルのフィールドの正しい順序はどれですか。",
  "choices": [{
    "label": "A",
    "text": "デバイス名；ファイルシステムタイプ；マウントポイント；マウントオプション；dump；fsck 順序"
  }, {
    "label": "B",
    "text": "デバイス名；マウントポイント；ファイルシステムタイプ；マウントオプション；dump；fsck 順序"
  }, {
    "label": "C",
    "text": "デバイス名；マウントポイント；マウントオプション；ファイルシステムタイプ；dump；fsck 順序"
  }, {
    "label": "D",
    "text": "マウントポイント；ファイルシステムタイプ；デバイス名；マウントオプション；dump；fsck 順序"
  }, {
    "label": "E",
    "text": "マウントポイント；デバイス名；ファイルシステムタイプ；マウントオプション；dump；fsck 順序"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/fstab の各行は6フィールドからなり、マウント元、マウントポイント、ファイルシステムタイプ、マウントオプション、dump 用の値、fsck 順序の順に並びます。各列は位置によって解釈されるため、項目が全部含まれているだけでなく、この順に配置されていることが必要です。",
  "answerKeys": ["/etc/fstab ファイル"],
  "answerTexts": ["デバイス名；マウントポイント；ファイルシステムタイプ；マウントオプション；dump；fsck 順序"],
  "answerHints": ["デバイス名；マウントポイント；ファイルシステムタイプ"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-315",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "ext4 ファイルシステムで、参照されていないファイルまたはファイル断片を fsck はどこに配置しますか。",
  "choices": [{
    "label": "A",
    "text": "recover"
  }, {
    "label": "B",
    "text": "lost+found"
  }, {
    "label": "C",
    "text": "back"
  }, {
    "label": "D",
    "text": "lost"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lost+found は、その ext4 ファイルシステムの最上位に置かれる回収用ディレクトリです。fsck による整合性修復で、データや管理情報は残っているのにディレクトリからたどれないものが見つかると lost+found へ再接続されます。/data にマウントしたファイルシステムなら回収先は /data/lost+found となり、常にシステム全体の /lost+found へ集められるわけではありません。",
  "answerKeys": ["ext4 ファイルシステムで"],
  "answerTexts": ["lost+found"],
  "answerHints": ["lost+found"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-316",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "システム起動時にファイルシステムを自動検査する場合、/etc/fstab の最終フィールドである fsck 順序には、ルートファイルシステムに対して通常どの値を使用しますか。",
  "choices": [{
    "label": "A",
    "text": "空欄のままにする"
  }, {
    "label": "B",
    "text": "0（ゼロ）を使用する"
  }, {
    "label": "C",
    "text": "1を使用する"
  }, {
    "label": "D",
    "text": "2を使用する"
  }, {
    "label": "E",
    "text": "存在するルートファイルシステムの数によって値が決まる"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/fstab の最終フィールド fs_passno は、起動時に fsck で検査する対象と検査順序を指定します。通常は0が自動検査の対象外、1がルートファイルシステム、2が検査対象となるその他のファイルシステムです。ルートはシステム全体の基点なので、他の領域に先立って検査する値1を指定します。",
  "answerKeys": ["システム起動時に"],
  "answerTexts": ["1を使用する"],
  "answerHints": ["1"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-317",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "autofs のメイン設定ファイルに次のエントリがあります。\n/home /etc/auto.home\n/etc/auto.home ファイルは何を意味しますか。",
  "choices": [{
    "label": "A",
    "text": "ファイルシステムをマウントするための間接マップが格納されている"
  }, {
    "label": "B",
    "text": "リモートファイルサーバー用のパスワードや鍵などの設定情報が格納されている"
  }, {
    "label": "C",
    "text": "/home マウントポイントの設定情報が格納されている"
  }, {
    "label": "D",
    "text": "リモートファイルサーバーへの認証を可能にする SSL 鍵を保持するファイルである"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "autofs はディレクトリへのアクセスを契機に必要なファイルシステムをマウントする仕組みです。マスターマップの「/home /etc/auto.home」は /home を基点とし、その配下で使う対応関係を /etc/auto.home から取得する指定です。基点の下の名前をキーとしてマウント先を決めるこのファイルを間接マップと呼びます。",
  "answerKeys": ["autofs のメイン"],
  "answerTexts": ["ファイルシステムをマウントするための間接マップが格納されている"],
  "answerHints": ["ファイルシステム"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-318",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "ハードディスクから SMART 値を取得するために使用するコマンドは何ですか。パスや引数を付けず、コマンド名だけを入力してください。",
  "choices": [],
  "answer": ["smartctl"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SMART はドライブが内部で記録する自己監視情報で、温度やエラーの記録、代替処理されたセクターに関する属性などを取得できます。smartctl はこれらをコマンドラインで照会・制御するツールで、smartctl -a /dev/sda のように指定します。設定に従って繰り返し監視する常駐プログラムの smartd とは役割が異なります。",
  "answerKeys": ["ハードディスク"],
  "answerTexts": ["smartctl"],
  "answerHints": ["smartctl"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-319",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "デバイスのマウントおよびアンマウントに伴って更新され、現在マウントされているデバイスと使用中のオプションに関する情報を提供するファイルはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "/proc/dtab"
  }, {
    "label": "B",
    "text": "/etc/mtab"
  }, {
    "label": "C",
    "text": "/etc/fstab"
  }, {
    "label": "D",
    "text": "/proc/mounts"
  }, {
    "label": "E",
    "text": "/proc/devices"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/mtab は従来 mount や umount によって更新されるマウント一覧で、現在の多くの環境では /proc/mounts へのシンボリックリンクになっています。/proc/mounts はカーネルが管理するマウント情報をファイルとして参照できるようにしたものです。/etc/fstab はマウント構成を指定する設定ファイルで、状態情報ではありません。",
  "answerKeys": ["デバイスの"],
  "answerTexts": ["/etc/mtab", "/proc/mounts"],
  "answerHints": ["/etc/mtab", "/proc/mounts"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-320",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "次の tcpdump -nli eth1 'tcp' の出力を確認してください。\n10:14:07.185495 IP 192.168.0.102.48762 > 169.90.69.235.22: Flags [P.], seq 1482:1498, ack 1689, win 1207, options [nop,nop,TS val 40635835 ecr 591249725], length 16\n10:14:07.227382 IP 192.168.0.102.48762 > 169.90.69.235.22: Flags [P.], seq 1498:1546, ack 1689, win 1207, options [nop,nop,TS val 40635845 ecr 591249737], length 48\n使用された可能性が最も高いネットワークサービスまたはプロトコルはどれですか。",
  "choices": [{
    "label": "A",
    "text": "FTP"
  }, {
    "label": "B",
    "text": "HTTP"
  }, {
    "label": "C",
    "text": "SSH"
  }, {
    "label": "D",
    "text": "DNS"
  }, {
    "label": "E",
    "text": "DHCP"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "宛先が 169.90.69.235 の TCP ポート22なので、最も可能性が高いサービスは SSH です。送信元の48762はクライアント側の一時的なポートと考えられ、サービス識別には宛先の22が強い根拠になります。FTP は21、HTTP は80、DNS は53、DHCP は UDP の67/68なので該当しません。",
  "answerKeys": ["次の tcpdump -nli eth1 '"],
  "answerTexts": ["SSH"],
  "answerHints": ["SSH"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-321",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "TCP Wrapper（libwrap）対応が有効なsshd環境で、/etc/hosts.allow のうち、192.168.1.0/24 サブネットの利用者による sshd へのアクセスを許可するエントリはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "sshd : 192.168.1."
  }, {
    "label": "B",
    "text": "sshd : 192.168.1"
  }, {
    "label": "C",
    "text": "sshd : 192.168.1.0 netmask 255.255.255.0"
  }, {
    "label": "D",
    "text": "sshd: 192.168.1.0/255.255.255.0"
  }, {
    "label": "E",
    "text": "sshd: 192.168.1.0"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/hosts.allow は対象のデーモン名とアクセス元のパターンをコロンで区切って記述します。IPv4 のサブネットは、末尾にドットを付けた前方一致パターン（192.168.1.）か、ネットワークアドレスとサブネットマスクをスラッシュでつなぐ形式（192.168.1.0/255.255.255.0）で表せます。末尾のドットがない 192.168.1 は前方一致になりません。",
  "answerKeys": ["TCP Wrapper（"],
  "answerTexts": ["sshd : 192.168.1.", "sshd: 192.168.1.0/255.255.255.0"],
  "answerHints": ["sshd : 192.168.1.", "sshd: 192.168.1.0/255"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-322",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "ローカルシステムの IPv4 近隣について、IP アドレスと MAC アドレスを一覧表示するコマンドはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "arp"
  }, {
    "label": "B",
    "text": "ifconfig -lv eth0"
  }, {
    "label": "C",
    "text": "netstat -al"
  }, {
    "label": "D",
    "text": "ip neigh show"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "IPv4 の近隣情報は、同じリンク上で通信する相手の IP アドレスと MAC アドレスの対応を ARP などによって学習したキャッシュです。arp と ip neigh show はこの対応表を表示します。ifconfig は自分のインターフェースの設定、netstat -al はソケットや待受状態の表示で調査対象が異なります。",
  "answerKeys": ["ローカルシステムの"],
  "answerTexts": ["arp", "ip neigh show"],
  "answerHints": ["arp", "ip"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-323",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "ping コマンドが文字列 (DUP!) を出力するのは、次のどの状況ですか。",
  "choices": [{
    "label": "A",
    "text": "受信側ホストが異なるネットワーク上にある場合"
  }, {
    "label": "B",
    "text": "ICMP パケットをブロードキャストアドレスへ送信し、複数のホストが応答した場合"
  }, {
    "label": "C",
    "text": "受信側ホストで複数の pingd サーバープロセスが実行されている場合"
  }, {
    "label": "D",
    "text": "ICMP パケットを送信するホストと受信するホストが同じ場合"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "(DUP!) は duplicate、つまり同じ要求に対応する応答を重複して受信したことを示す表示です。ブロードキャストアドレスへの要求はネットワーク内の複数ホストに届く可能性があり、それらが応答すると同じシーケンス番号に対応する応答が複数届いて重複と表示されます。経路が長いことや自己通信は理由になりません。",
  "answerKeys": ["ping コマンド"],
  "answerTexts": ["ICMP パケットをブロードキャストアドレスへ送信し、複数のホストが応答した場合"],
  "answerHints": ["ICMP パケットをブロードキャストアドレス"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-324",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "マルチホームサーバーで ip route show を実行すると、次の出力が得られました。\ndefault via 192.168.0.1 dev wwan0 proto static metric 50\ndefault via 192.168.1.1 dev wwan1 metric 500\n192.168.0.0/24 dev wwan0 proto kernel scope link src 192.168.0.2 linkdown\n192.168.1.0/24 dev wwan1 proto kernel scope link src 192.168.1.2 metric 500\nignore_routes_with_linkdown=0（既定値）とします。192.168.3.1 宛てのパケットをルーティングするために使用されるインターフェースは何ですか。インターフェース名だけを入力してください。",
  "choices": [],
  "answer": ["wwan0"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "経路選択ではまず宛先に最も長く一致するネットワーク範囲を探し、同じ範囲に複数の候補があれば小さい metric を優先します。192.168.3.1 は表示されたどちらの直結ネットワークにも属さないため、2本の default 経路を比較します。wwan0 の metric は50で wwan1 の500より小さく、ignore_routes_with_linkdown=0 なので linkdown を理由に除外もされません。",
  "answerKeys": ["マルチホームサーバー"],
  "answerTexts": ["wwan0"],
  "answerHints": ["wwan0"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-325",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "インターフェース wlan0 から見えるすべての無線ネットワークを一覧表示するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "iwlist scan wlan0"
  }, {
    "label": "B",
    "text": "iw scan wlan0"
  }, {
    "label": "C",
    "text": "iw list wlan0"
  }, {
    "label": "D",
    "text": "iwlist wlan0 scan"
  }, {
    "label": "E",
    "text": "iw dev wlan0 list"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iwlist では「コマンド、インターフェース、操作」の順に指定するため、iwlist wlan0 scan が正しい引数順です。iw を使うなら iw dev wlan0 scan の形が代表的で、iwlist と iw の並びを混ぜないことが重要です。iw list は無線機器が対応する能力の表示で、周囲のアクセスポイント探索とは対象が異なります。",
  "answerKeys": ["インターフェース"],
  "answerTexts": ["iwlist wlan0 scan"],
  "answerHints": ["iwlist wlan0"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.2"
}, {
  "id": "201-326",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "指定したネットワークを走査し、使用中と見られる IP アドレスを検出するために使用できるコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "nmap"
  }, {
    "label": "B",
    "text": "tcpdump"
  }, {
    "label": "C",
    "text": "ip"
  }, {
    "label": "D",
    "text": "netscan"
  }, {
    "label": "E",
    "text": "hostdiscover"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ネットワーク内で使用中と見られる IP アドレスを調べる操作はホスト発見と呼ばれます。nmap は指定したアドレス範囲へ確認用の通信を送り、応答などから稼働していると見られるホストを検出できます（例: nmap -sn 192.168.1.0/24）。tcpdump は通信の観測、ip はローカル設定の表示で、能動的な走査とは異なります。",
  "answerKeys": ["指定した"],
  "answerTexts": ["nmap"],
  "answerHints": ["nmap"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-327",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "さまざまな TCP または UDP サービスとの対話をスクリプト化するために使用できるコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "ftp"
  }, {
    "label": "B",
    "text": "nc"
  }, {
    "label": "C",
    "text": "tcpdump"
  }, {
    "label": "D",
    "text": "strings"
  }, {
    "label": "E",
    "text": "wget"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nc は netcat とも呼ばれ、TCP や UDP でデータを送受信する汎用コマンドです。標準入力から送信データを受け取り、受信データを標準出力へ出せるため、シェルのパイプやリダイレクトと組み合わせて対話をスクリプト化できます。ftp や wget は特定プロトコル専用、tcpdump は観測用です。",
  "answerKeys": ["さまざまな"],
  "answerTexts": ["nc"],
  "answerHints": ["nc"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-328",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "hostname コマンドで実行できる操作はどれですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "ドメインを含むローカルノードのホスト名を表示する"
  }, {
    "label": "B",
    "text": "ローカルノードに新しいホスト名を設定する"
  }, {
    "label": "C",
    "text": "ローカルノードに関連付けられたすべての IP アドレスを表示する"
  }, {
    "label": "D",
    "text": "ローカルノードのすべての MAC アドレスを表示する"
  }, {
    "label": "E",
    "text": "現在のホスト名を含め、過去に設定されたすべてのホスト名を表示する"
  }],
  "answer": ["A", "B", "C"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "hostname -f は名前解決によって得られる FQDN を表示し、引数に新しい名前を与えると実行時のホスト名を変更できます。hostname -I はネットワークインターフェースに設定された IP アドレスを列挙します。MAC アドレスはリンク層の情報で ip link show などを使い、過去のホスト名の履歴機能はありません。",
  "answerKeys": ["hostname"],
  "answerTexts": ["ドメインを含むローカルノードのホスト名を表示する", "ローカルノードに新しいホスト名を設定する", "ローカルノードに関連付けられたすべての IP アドレスを表示する"],
  "answerHints": ["ドメイン", "ローカルノードに", "ローカルノードに"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-329",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "syslogd の設定ファイルを更新した後、その変更を有効にする操作はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "操作は不要であり、syslogd が数分後に更新済み設定ファイルを認識する"
  }, {
    "label": "B",
    "text": "syslogd プロセスへ HUP シグナルを送信する"
  }, {
    "label": "C",
    "text": "syslogd サービスを再起動する"
  }, {
    "label": "D",
    "text": "syslogd -u コマンドを実行する"
  }],
  "answer": ["B", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "syslogd は設定ファイルを書き換えてもその時点で自動的に設定を置き換えるとは限りません。HUP（SIGHUP）を受け取ると設定の再読み込みを行うため、稼働中プロセスへの HUP 送信が有効です。サービスを再起動すればプロセスが起動し直し、その起動処理で更新後の設定を読み込みます。",
  "answerKeys": ["syslogd"],
  "answerTexts": ["syslogd プロセスへ HUP シグナルを送信する", "syslogd サービスを再起動する"],
  "answerHints": ["syslogd プロセス", "syslogd サービス"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.3"
}, {
  "id": "201-330",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "コマンドラインで add や del などのサブコマンドを指定せずに ip addr を実行した場合、デフォルトで使用されるサブコマンドは何ですか。引数を付けず、サブコマンド名だけを入力してください。",
  "choices": [],
  "answer": ["show"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ip コマンドの各オブジェクトでは、操作を省略した場合に一覧表示に相当する show が既定の動作になります。したがって ip addr は ip addr show と同じく、インターフェースに設定されたアドレスの一覧を表示します。add や del のように状態を変更する操作は明示的に指定する必要があります。",
  "answerKeys": ["コマンドラインで"],
  "answerTexts": ["show"],
  "answerHints": ["show"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-331",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "Linux システムのハードウェアに関する情報を表示するために使用できるコマンドはどれですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "lsdev"
  }, {
    "label": "B",
    "text": "lsusb"
  }, {
    "label": "C",
    "text": "lspci"
  }, {
    "label": "D",
    "text": "lslogins"
  }, {
    "label": "E",
    "text": "lskvm"
  }],
  "answer": ["A", "B", "C"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lsdev は /proc 配下の情報をもとに、IRQ・I/O ポート・DMA といったデバイスが使用する資源の割り当てを一覧表示します。lsusb は USB バスに接続された機器、lspci は PCI/PCIe バスに接続された機器を表示します。lslogins はユーザーのログイン情報、lskvm は標準的なハードウェア表示コマンドではありません。",
  "answerKeys": ["Linux システムのハードウェア"],
  "answerTexts": ["lsdev", "lsusb", "lspci"],
  "answerHints": ["lsdev", "lsusb", "lspci"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-332",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "3.x および 4.x のカーネルリリースを表すために使用される用語はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "beta"
  }, {
    "label": "B",
    "text": "longterm"
  }, {
    "label": "C",
    "text": "prerelease"
  }, {
    "label": "D",
    "text": "releasecandidate"
  }, {
    "label": "E",
    "text": "stable"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "kernel.org で公開されるリリースの区分のうち、stable は正式リリース後に修正が反映される安定版、longterm は長期にわたり修正が提供される保守系列を指します。3.x や 4.x の系列ではこれらの区分が使われます。beta や prerelease は Linux カーネルの公式な区分名ではなく、リリース候補は rc という表記です。",
  "answerKeys": ["3"],
  "answerTexts": ["longterm", "stable"],
  "answerHints": ["longterm", "stable"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-333",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "実行中のカーネルのモジュールが格納されているディレクトリへ移動するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "cd /lib/modules/$(uname -r)"
  }, {
    "label": "B",
    "text": "cd /lib/modules/$(kernel -v)"
  }, {
    "label": "C",
    "text": "cd /lib/modules/current"
  }, {
    "label": "D",
    "text": "cd /lib/modules/running"
  }, {
    "label": "E",
    "text": "cd /lib/modules/$(uptime -k)"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "モジュールはカーネルのリリースごとに /lib/modules/<リリース名>/ へ配置されるため、稼働中のカーネルに対応するディレクトリを得るにはリリース文字列が必要です。uname -r は実行中カーネルの完全なリリース文字列を返すので、$(uname -r) を組み込めば複数の版が共存していても稼働中の版に一致します。/lib/modules/current や running のような固定名の標準規則はありません。",
  "answerKeys": ["実行中の"],
  "answerTexts": ["cd /lib/modules/$(uname -r)"],
  "answerHints": ["cd /lib/modules/$(uname"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-334",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "カーネルに現在ロードされている単一のモジュールを、そのモジュールが依存しているモジュールをアンロードせずに削除するために使用するコマンドは何ですか。パスや引数を付けず、コマンド名だけを入力してください。",
  "choices": [],
  "answer": ["rmmod"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "モジュールのアンロードは、カーネルにロードされているモジュールを取り外す操作で、ディスク上のファイルを削除することではありません。rmmod は指定されたモジュールだけを対象に取り外し、そのモジュールが依存する別のモジュールまで自動的に取り外すことはしません。依存先も含めて扱う modprobe -r とはこの点で区別します。",
  "answerKeys": ["カーネルに現在"],
  "answerTexts": ["rmmod"],
  "answerHints": ["rmmod"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-335",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "diff コマンドで生成されたファイルから、カーネルのソースコードへ更新内容や修正コードを適用するために使用できるコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "kernel-update"
  }, {
    "label": "B",
    "text": "patch"
  }, {
    "label": "C",
    "text": "patch-kerne1"
  }, {
    "label": "D",
    "text": "upgrade"
  }, {
    "label": "E",
    "text": "upgrade-kernel"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "diff は変更前後のテキストを比較して差分を出力するコマンドで、patch はその差分ファイルを読み、対象のソースコードへ変更を適用します。カーネルのソースであっても差分適用にはこの一般的な仕組みを使い、適用しただけで稼働中のカーネルが置き換わるわけではありません。差分を作るのが diff、適用するのが patch、その後の構築・導入は別工程です。",
  "answerKeys": ["diff"],
  "answerTexts": ["patch"],
  "answerHints": ["patch"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-336",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "稼働中のシステムで、共有メモリセグメントの最大サイズを表すカーネルパラメータ shmmax を 2 GiB（2,147,483,648 Bytes）に変更する方法はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/shmmax を編集し、パラメータを 2147483648 に設定する"
  }, {
    "label": "B",
    "text": "sysctl shmmax=2147483648"
  }, {
    "label": "C",
    "text": "sysctl -w kernel.shmmax=2147483648"
  }, {
    "label": "D",
    "text": "echo 2147483648 > /proc/sys/kernel/shmmax"
  }, {
    "label": "E",
    "text": "export kernel.shmmax=2147483648"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "shmmax は System V 共有メモリで作成できる一つのセグメントの最大サイズをバイト単位で定める値です。sysctl では kernel.shmmax、/proc/sys では /proc/sys/kernel/shmmax という形で同じパラメータにアクセスします。sysctl -w による書き込みと /proc への echo はいずれも稼働中の値を変更します。shmmax だけではキーの階層が不足し、export は環境変数の設定で用途が異なります。",
  "answerKeys": ["稼働中のシステムで"],
  "answerTexts": ["sysctl -w kernel.shmmax=2147483648", "echo 2147483648 > /proc/sys/kernel/shmmax"],
  "answerHints": ["sysctl -w", "echo"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-337",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "新しいカーネルを設定した後、その設定内容を保持する /usr/src/linux/ 配下のファイルは何ですか。パスを付けず、ファイル名だけを入力してください。",
  "choices": [],
  "answer": [".config"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "カーネルの .config は、どの機能を本体へ組み込み、どの機能をモジュールとして作るかなど、構成の選択結果を保存するファイルです。make menuconfig などで選択した内容は通常カーネルソースツリー直下の .config に保存されます。先頭のドットを含めてファイル名なので .config と答えます。設定項目を定義する Kconfig や構築手順の Makefile とは役割が異なります。",
  "answerKeys": ["新しいカーネルを設定した"],
  "answerTexts": [".config"],
  "answerHints": [".config"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-338",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "initramfs イメージの作成に使用できる圧縮形式はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "gzip"
  }, {
    "label": "B",
    "text": "arc"
  }, {
    "label": "C",
    "text": "rar"
  }, {
    "label": "D",
    "text": "cpio"
  }, {
    "label": "E",
    "text": "bzip2"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "initramfs はルートファイルシステムへ移る前の起動処理に必要なファイルをまとめたもので、cpio 形式のアーカイブを基本とし、そのアーカイブを gzip や bzip2 などで圧縮します。読み込むカーネル側に対応する展開機能が必要な点が判断の中心です。cpio はファイルをまとめるアーカイブ形式であって圧縮形式ではなく、arc や rar はカーネルが対応する標準の圧縮形式に含まれません。",
  "answerKeys": ["initramfs イメージの"],
  "answerTexts": ["gzip", "bzip2"],
  "answerHints": ["gzip", "bzip2"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-339",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "従来の x86 用 Linux カーネルイメージにおける zImage と bzImage の主な違いは何ですか。",
  "choices": [{
    "label": "A",
    "text": "zImage は gzip で圧縮され、bzImage は bzip2 で圧縮される。"
  }, {
    "label": "B",
    "text": "zImage は 64k に制限されるが、bzImage にはその制限がない。"
  }, {
    "label": "C",
    "text": "zImage は 512k に制限されるが、bzImage にはその制限がない。"
  }, {
    "label": "D",
    "text": "zImage は 2.6 系カーネル用で、bzImage は 3.x 系以降のカーネル用である。"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "zImage と bzImage は、圧縮されたカーネル本体の読み込み位置と、そこで扱える大きさが異なります。zImage は低位メモリ（0x10000〜0x90000 未満）に本体を配置するため 512 KiB の制約があり、bzImage は通常 1 MiB 以上の高位メモリへ読み込むことでこの制約を解消します。bzImage の b は big を意味し、bzip2 という圧縮方式を表す名前ではありません。",
  "answerKeys": ["従来の"],
  "answerTexts": ["zImage は 512k に制限されるが、bzImage にはその制限がない。"],
  "answerHints": ["zImage は 512k"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-340",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "システムコンソールのログインプロンプトの上に表示されるメッセージを格納するファイルは何ですか。パスを含む完全なファイル名を入力してください。",
  "choices": [],
  "answer": ["/etc/issue"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/issue は、システムコンソールでログイン名を入力する前に表示する案内文を格納するファイルです。ログインプロンプトを用意する getty などが、このファイルを認証前の案内として利用します。ログイン後に表示する /etc/motd や、ネットワーク接続向けの /etc/issue.net とは表示時点と対象が異なります。",
  "answerKeys": ["システムコンソール"],
  "answerTexts": ["/etc/issue"],
  "answerHints": ["/etc/issue"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.3"
}, {
  "id": "201-341",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "標準的な ZIP アーカイブだけで Linux ファイルシステムの完全なバックアップを作成すべきでない理由はどれですか。",
  "choices": [{
    "label": "A",
    "text": "Linux オペレーティングシステムには zip コマンドが存在しないため。"
  }, {
    "label": "B",
    "text": "Linux ファイルシステム固有の所有者・グループ、ACL、拡張属性などのメタデータを完全には保持できないため。"
  }, {
    "label": "C",
    "text": "単一ファイルの圧縮にしか使用できず、ディレクトリ構造を扱えないため。"
  }, {
    "label": "D",
    "text": "1 GiB までのファイルしか格納できず、大きな Linux ファイルに適さないため。"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "完全なバックアップでは、ファイルの内容だけでなく所有者・グループやアクセス制御情報などのメタデータも復元できる必要があります。標準的な ZIP ではこれら Linux 固有の属性を網羅して保存することを保証できません。ZIP はディレクトリ構造を格納でき、サイズも一律 1 GiB に制限されるわけではないため、問題になるのは属性の保存能力です。",
  "answerKeys": ["標準的な ZIP"],
  "answerTexts": ["Linux ファイルシステム固有の所有者・グループ、ACL、拡張属性などのメタデータを完全には保持できないため。"],
  "answerHints": ["Linux ファイルシステム"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-342",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "ソースコードパッケージに含まれる Makefile に通常用意されているターゲットはどれですか。",
  "choices": [{
    "label": "A",
    "text": "CFLAGS, CPPFLAGS, LIBS, LDFLAGS"
  }, {
    "label": "B",
    "text": "clean, install, uninstall"
  }, {
    "label": "C",
    "text": "PATHS, DESTDIR, LIBS, LDFLAGS"
  }, {
    "label": "D",
    "text": "prefix, exec_prefix, bindir, mandir"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Makefile のターゲットは make に実行を依頼する処理や作成物の名前です。clean はビルドで作られたオブジェクトファイルなどを削除し、install はプログラムを利用先へ配置し、uninstall は配置済みのファイルを取り除きます。CFLAGS や prefix、DESTDIR などは処理条件や配置先を与える変数名であり、ターゲットとは区別します。",
  "answerKeys": ["ソースコードパッケージ"],
  "answerTexts": ["clean, install, uninstall"],
  "answerHints": ["clean"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-343",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "1回の実行で、ファイルをファイルシステムツリー内の指定位置に配置し、所有者、グループ、アクセス権を設定できるコマンドは何ですか。パスや引数を付けず、コマンド名だけを入力してください。",
  "choices": [],
  "answer": ["install"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "install はファイルを所定の場所へコピーし、配備先で使う所有者・グループ・アクセス権を指定できるコマンドです。-o で所有者、-g でグループ、-m でアクセス権を指定でき、コピーと属性設定を1回の呼び出しで行えます。所有者の変更などには適切な権限が必要で、install を使えば権限制限を回避できるわけではありません。",
  "answerKeys": ["1回の"],
  "answerTexts": ["install"],
  "answerHints": ["install"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-344",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "mt コマンドは何のために使用しますか。",
  "choices": [{
    "label": "A",
    "text": "SCSI テープドライブをマウントするために使用する。"
  }, {
    "label": "B",
    "text": "tar で使用できるように SCSI テープをフォーマットする。"
  }, {
    "label": "C",
    "text": "SCSI テープドライブへデータを書き込むための dd の代替として使用する。"
  }, {
    "label": "D",
    "text": "SCSI テープを指定位置へ移動する。"
  }, {
    "label": "E",
    "text": "SCSI テープに一意の識別子（UUID）を付ける。"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "テープはディスクのように目的の場所へ直接アクセスせず、媒体を順に進めたり巻き戻したりして読み書きします。mt は rewind で先頭へ戻す、fsf で指定数のファイルマークを越えて進むなど、テープの走行や位置決めを制御するコマンドです。内容の読み書きを行う tar や dd とは役割を分担します。",
  "answerKeys": ["mt"],
  "answerTexts": ["SCSI テープを指定位置へ移動する。"],
  "answerHints": ["SCSI テープを"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-345",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "リモートユーザーアカウント alice を使用し、ディレクトリ ./fyf/ をリモートホスト deltaur の /var/tmp/ へ安全にコピーするコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "rsync -a -e ssh alice@deltaur:/var/tmp/ fyf/"
  }, {
    "label": "B",
    "text": "rsync -a -u alice -e ssh fyf/ deltaur:/var/tmp/"
  }, {
    "label": "C",
    "text": "rsync -a -u alice -e ssh deltaur:/var/tmp/ fyf/"
  }, {
    "label": "D",
    "text": "rsync -a -e ssh fyf/ alice@deltaur:/var/tmp/"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "rsync は「転送元、転送先」の順に指定し、リモート側はユーザー名@ホスト名:パスで表します。fyf/ がローカルの転送元、alice@deltaur:/var/tmp/ がリモートの転送先で、-e ssh により SSH 経由の安全な通信になります。-a は再帰的にコピーし属性を可能な範囲で保持するアーカイブモードです。-u は転送先が新しい場合に更新しない指定で、ユーザー名を受け取るオプションではありません。",
  "answerKeys": ["リモートユーザーアカウント"],
  "answerTexts": ["rsync -a -e ssh fyf/ alice@deltaur:/var/tmp/"],
  "answerHints": ["rsync -a -e ssh fyf"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-346",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "次は top の出力です。\nTasks: 193 total, 1 running, 190 sleeping, 2 stopped, 0 zombie\nCpu(s): 0.5%us, 0.3%sy, 0.0%ni, 98.2%id, 1.0%wa, 0.0%hi, 0.0%si, 0.0%st\nCPU が wa 状態で費やした時間の割合に寄与するのは、どのようなプロセスですか。",
  "choices": [{
    "label": "A",
    "text": "ユーザーの操作を待っているプロセス。"
  }, {
    "label": "B",
    "text": "すでに終了し、再起動されるのを待っているプロセス。"
  }, {
    "label": "C",
    "text": "RAM へ完全にロードされていないか、swap にあるため、まだスケジュールされていないプロセス。"
  }, {
    "label": "D",
    "text": "I/O 操作が完了するのを待っているプロセス。"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "top の CPU 欄にある wa は、I/O の完了待ちに関連して計上された CPU 時間の割合です。ディスクなどの入出力が完了せず、実行できる仕事がなく CPU がアイドルになっている時間を捉える指標であり、プロセスが単に何かを待っていること全般を示すものではありません。ユーザーの入力待ちやゾンビプロセスは wa には寄与しません。",
  "answerKeys": ["次は top"],
  "answerTexts": ["I/O 操作が完了するのを待っているプロセス。"],
  "answerHints": ["I"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-347",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "swap 領域を大量に使用することによる副作用はどれですか。",
  "choices": [{
    "label": "A",
    "text": "swap 領域は常にシステムのルートパーティション上にあるため、ルートファイルシステムがいっぱいになる可能性がある。"
  }, {
    "label": "B",
    "text": "ハードディスクの大量使用とメモリ再編成により、システム全体の性能が低下する可能性がある。"
  }, {
    "label": "C",
    "text": "プロセスは常に RAM または swap のどちらか一方に完全な形で存在するため、カーネルがプロセスを swap 領域からメモリへ戻さないと通常の RAM が未使用になる可能性がある。"
  }, {
    "label": "D",
    "text": "メモリが断片化してメモリページへのアクセスが遅くなる可能性がある。ただし、memfrag -d を定期的に使用すれば最小限に抑えられる。"
  }, {
    "label": "E",
    "text": "swap アドレス領域へのメモリ再配置を反映して仮想メモリアドレスが変わるため、アプリケーションを再起動する必要がある。"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "swap はメモリをページ単位で RAM からストレージへ退避させる領域です。メモリ不足などでページの退避と読み戻しを繰り返すと、ディスクへの入出力とカーネルのページ管理処理が増え、システム全体の応答が遅くなります。深刻な状態はスラッシングと呼ばれます。判断には swap 使用量だけでなく vmstat の si・so など実際の入出力も確認します。",
  "answerKeys": ["swap"],
  "answerTexts": ["ハードディスクの大量使用とメモリ再編成により、システム全体の性能が低下する可能性がある。"],
  "answerHints": ["ハードディスク"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-348",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "次は uptime コマンドの出力です。\n12:10:05 up 18 days, 19:00, 2 users, load average: 0.47, 24.71, 35.31\nこの出力における、システムの5分間のロードアベレージはいくつですか。",
  "choices": [{
    "label": "A",
    "text": "0.47"
  }, {
    "label": "B",
    "text": "24.71"
  }, {
    "label": "C",
    "text": "35.31"
  }, {
    "label": "D",
    "text": "5分間隔の値は存在せず、0.47 と 24.71 の間のいずれかの値である。"
  }, {
    "label": "E",
    "text": "5分間隔の値は存在せず、24.71 と 35.31 の間のいずれかの値である。"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "uptime の load average は左から1分・5分・15分に対応する3つの値です。したがって中央の 24.71 が5分のロードアベレージで、ほかの値から補間する必要はありません。ロードアベレージは実行中または CPU の実行待ちに加え割り込み不能な待機状態のタスクも反映するため、CPU 使用率の百分率とは異なります。",
  "answerKeys": ["次は uptime コマンドの出力です。\n12:10:05 up 18 days, 19:00, 2 users, load average: 0.47, 24.71, 35.31\nこの出力におけ"],
  "answerTexts": ["24.71"],
  "answerHints": ["24"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-349",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "Web アプリケーションクラスターの稼働を監視するため、各アプリケーションサーバーには、そのサーバーの現在の正常性に応じて OK または FAILURE を出力する専用 Web ページが作成されています。これらの Web ページを定期的に照会し、1台以上のアプリケーションサーバーが障害状態になった場合にアラートを生成できるツールはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "MRTG"
  }, {
    "label": "B",
    "text": "Cacti"
  }, {
    "label": "C",
    "text": "Nagios"
  }, {
    "label": "D",
    "text": "Icinga 2"
  }, {
    "label": "E",
    "text": "collectd"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "専用 Web ページの OK と FAILURE は接続の成否ではなく各サーバーの正常性を表します。Nagios や Icinga 2 は監視プラグインを定期実行し、本文が期待する正常条件かをチェックした結果をサービス状態として管理し、障害時の通知へ結び付けられます。MRTG や Cacti は数値の推移をグラフ化する用途が中心、collectd は指標の収集・転送が中心で目的が異なります。",
  "answerKeys": ["Web アプリケーションクラスター"],
  "answerTexts": ["Nagios", "Icinga 2"],
  "answerHints": ["Nagios", "Icinga"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-350",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "次は vmstat 1 100 の出力です。\nprocs -----------memory---------- ---swap-- -----io---- --system-- ----cpu----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa\n 0  0      0 282120 134108 5797012    0    0     0     2    0    0  0  0 100  0\n 0  0      0 282120 134108 5797012    0    0     0     0 1007  359  0  0 100  0\n 0  0      0 282120 134108 5797012    0    0     0     0 1117  577  0  0 100  0\n 0  0      0 282120 134108 5797012    0    0     0     0 1007  366  0  0 100  0\nCPU が未完了の I/O を待っていた時間の割合は何パーセントですか。",
  "choices": [{
    "label": "A",
    "text": "0（ゼロ）"
  }, {
    "label": "B",
    "text": "100"
  }, {
    "label": "C",
    "text": "35.9"
  }, {
    "label": "D",
    "text": "57.7"
  }, {
    "label": "E",
    "text": "36.6"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "vmstat の cpu 欄では us・sy・id・wa が CPU 時間の割合を示し、未完了の I/O に関する待ち時間は wa 列で確認します。転記された4レコードでは wa がいずれも0なので割合は0%です。100 は id 列のアイドル時間、359 や 577 は system 欄の cs（毎秒のコンテキストスイッチ回数）であり、CPU 時間の百分率とは単位が異なります。",
  "answerKeys": ["次は vmstat"],
  "answerTexts": ["0（ゼロ）"],
  "answerHints": ["0"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-351",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "対象となる Linux プロセスを一覧表示して特定することで、キャパシティプランニングを支援するツールはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "acpid"
  }, {
    "label": "B",
    "text": "lsof"
  }, {
    "label": "C",
    "text": "pstree"
  }, {
    "label": "D",
    "text": "telinit"
  }, {
    "label": "E",
    "text": "lsproc"
  }],
  "answer": ["B", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "キャパシティプランニングでは使用率を測るだけでなく、どのプロセスが資源を使っているかを特定することも重要です。lsof は開いているファイルやソケットとプロセスの対応を表示し、pstree はプロセスの親子関係を木構造で示すため、調査対象のサービスや関連プロセスを絞り込めます。acpid は ACPI イベント処理のデーモン、telinit はランレベル変更の要求、lsproc は標準のコマンド名ではありません。",
  "answerKeys": ["対象となる"],
  "answerTexts": ["lsof", "pstree"],
  "answerHints": ["lsof", "pstree"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-352",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "キャパシティプランニング用のデータを収集するために使用できるツールはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "sar"
  }, {
    "label": "B",
    "text": "psstat"
  }, {
    "label": "C",
    "text": "iostat"
  }, {
    "label": "D",
    "text": "hwtop"
  }, {
    "label": "E",
    "text": "sysio"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "キャパシティプランニングでは CPU やディスク I/O などの使用状況を継続して測り、平常時とピーク時の差や増加傾向を確認します。sar は CPU・メモリ・スワップ・入出力・ネットワークなどの統計を表示し、定期収集の設定があれば過去の統計も読み出せます。iostat はデバイスごとの転送量や処理回数を報告します。psstat・hwtop・sysio は標準的なコマンド名ではありません。",
  "answerKeys": ["キャパシティプランニング"],
  "answerTexts": ["sar", "iostat"],
  "answerHints": ["sar", "iostat"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-353",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "リソース使用量の履歴データが重要になるのはどのような場合ですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "リソースをいつ増強する必要があるかを予測する場合。"
  }, {
    "label": "B",
    "text": "コンピューターベンダーを選定する場合。"
  }, {
    "label": "C",
    "text": "メモリ不足の発生時に強制終了されたプロセスを特定する場合。"
  }, {
    "label": "D",
    "text": "キャパシティの問題を診断する場合。"
  }, {
    "label": "E",
    "text": "ソフトウェアの問題をトラブルシューティングする場合。"
  }],
  "answer": ["A", "D", "E"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "履歴データは CPU・メモリ・I/O などの値を時刻とともに残したもので、平常時の基準と増加傾向を把握できます。将来の不足時期の予測、処理が遅くなった時刻と資源変化の照合による診断、更新後の負荷変化とソフトウェアの症状の照合に役立ちます。ベンダー選定は価格や保守条件など別の比較が必要で、OOM で終了したプロセスの特定にはカーネルログを確認します。",
  "answerKeys": ["リソース"],
  "answerTexts": ["リソースをいつ増強する必要があるかを予測する場合。", "キャパシティの問題を診断する場合。", "ソフトウェアの問題をトラブルシューティングする場合。"],
  "answerHints": ["リソース", "キャパシティ", "ソフトウェア"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-354",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "上書きされた systemd 設定ファイルを検出して表示する systemd コマンドは何ですか。パスや引数を付けず、コマンド名だけを入力してください。",
  "choices": [],
  "answer": ["systemd-delta"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "systemd では、提供元の設定に対して /etc/systemd などの管理者側の設定を優先させ、動作を上書き・追加できます。systemd-delta は優先順位の異なる設定ディレクトリを調べ、上書きされたファイルやドロップインによる追加設定を検出して表示します。稼働状態の操作は systemctl、ログは journalctl、起動分析は systemd-analyze と目的で使い分けます。",
  "answerKeys": ["上書きされ"],
  "answerTexts": ["systemd-delta"],
  "answerHints": ["systemd-delta"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-355",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "PXE が提供する機能はどれですか。",
  "choices": [{
    "label": "A",
    "text": "ネットワークインターフェースを使用してコンピューターを起動する機能。"
  }, {
    "label": "B",
    "text": "コンピューター上でリモート X11 デスクトップを起動する機能。"
  }, {
    "label": "C",
    "text": "起動処理の完了後にシステム構成を検証する機能。"
  }, {
    "label": "D",
    "text": "起動処理の完了前にシステム構成を検証する機能。"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "PXE は、OS が起動する前の段階でネットワークインターフェースを使い、起動に必要なプログラムをネットワークから取得する仕組みです。典型的には DHCP でネットワーク設定や起動先の情報を得て、TFTP などで起動プログラムを取得します。ローカルに OS が導入されていないコンピューターでもネットワーク経由でインストーラーや起動環境を読み込めます。構成の検証やリモート画面転送とは目的が異なります。",
  "answerKeys": ["PXE が"],
  "answerTexts": ["ネットワークインターフェースを使用してコンピューターを起動する機能。"],
  "answerHints": ["ネットワークインターフェース"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-356",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "Debian 系 Linux で、GRUB 2 の設定ファイル grub.cfg が格納されるディレクトリは何ですか。ディレクトリの完全なパスを入力してください。",
  "choices": [],
  "answer": ["/boot/grub"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Debian 系の GRUB 2 では、起動メニューなどの生成済み設定を /boot/grub/grub.cfg に保存します。設問はファイルの完全なパスではなく格納ディレクトリを求めているため /boot/grub が答えです。grub.cfg は /etc/default/grub の設定や /etc/grub.d のスクリプトを基に生成されるので、設定を変更する元の場所と起動時に参照する生成結果の場所を区別することが重要です。",
  "answerKeys": ["Debian 系 Linux"],
  "answerTexts": ["/boot/grub"],
  "answerHints": ["/boot/grub"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-357",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "代替 Linux ブートローダーに該当するものはどれですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "SYSLINUX"
  }, {
    "label": "B",
    "text": "NTLINUX"
  }, {
    "label": "C",
    "text": "PXELINUX"
  }, {
    "label": "D",
    "text": "ISOLINUX"
  }, {
    "label": "E",
    "text": "UEFILINUX"
  }],
  "answer": ["A", "C", "D"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ブートローダーは OS の本格的な初期化が始まる前にカーネルなどを読み込むプログラムです。SYSLINUX 系には、FAT ファイルシステム上のローカル媒体向けの SYSLINUX、ネットワーク向けの PXELINUX、ISO9660 の光学メディア向けの ISOLINUX があり、起動元の違いが名称の区別につながります。NTLINUX や UEFILINUX はこの試験で扱う代替ブートローダーの名称ではありません。",
  "answerKeys": ["代替"],
  "answerTexts": ["SYSLINUX", "PXELINUX", "ISOLINUX"],
  "answerHints": ["SYSLINUX", "PXELINUX", "ISOLINUX"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.3"
}, {
  "id": "201-358",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "起動中に Linux カーネルが initramfs ファイルをロードしたとき、存在する場合に initramfs 内で最初に実行されるコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "/init"
  }, {
    "label": "B",
    "text": "/initrd"
  }, {
    "label": "C",
    "text": "/linuxrc"
  }, {
    "label": "D",
    "text": "/rc.local"
  }, {
    "label": "E",
    "text": "/sbin/init"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "initramfs は本来のルートファイルシステムを利用できるようにするための起動初期のユーザー空間です。カーネルはその内容を展開し、initramfs 内に /init があれば初期化処理の入口として実行します。必要なドライバーの準備やルートの発見・マウントを進めたあと、本来のルート側の /sbin/init へ処理を引き継ぎます。/linuxrc は従来型の initrd で使われたパスです。",
  "answerKeys": ["起動中に"],
  "answerTexts": ["/init"],
  "answerHints": ["/init"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-359",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "サーバーに、常にランレベル1で起動する GRUB2 の起動エントリが必要です。この新しいエントリを利用可能にするための設定ブロックを、GRUB2 設定ファイル内で開始するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "initrd"
  }, {
    "label": "B",
    "text": "linux"
  }, {
    "label": "C",
    "text": "menuentry"
  }, {
    "label": "D",
    "text": "runlevel"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "GRUB 2 では起動メニューの各項目を menuentry で始まる設定ブロックとして定義します。ランレベル1用の新しい起動項目も、まず menuentry のブロックを作り、その中で linux によるカーネル指定や起動引数を設定します。initrd は初期 RAM ディスクを読み込む命令、runlevel は稼働中システムのランレベル表示コマンドで役割が異なります。",
  "answerKeys": ["サーバーに、"],
  "answerTexts": ["menuentry"],
  "answerHints": ["menuentry"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-360",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "SysV init のランレベルと同様の機能を提供する systemd ユニットの種類はどれですか。",
  "choices": [{
    "label": "A",
    "text": "level"
  }, {
    "label": "B",
    "text": "destination"
  }, {
    "label": "C",
    "text": "target"
  }, {
    "label": "D",
    "text": "mode"
  }, {
    "label": "E",
    "text": "service"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SysV init のランレベルは、起動するサービスの組み合わせによってシステムの稼働状態を表します。systemd では target ユニットが依存関係を通じて複数のサービスなどをまとめ、システムが到達する状態を表します。multi-user.target や graphical.target が代表例です。service ユニットは個々のデーモンを管理するもので対象の広さが異なります。",
  "answerKeys": ["SysV init のランレベルと同様の"],
  "answerTexts": ["target"],
  "answerHints": ["target"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-361",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "EFI System Partition（ESP）を準備する際に使用できるファイルシステムはどれですか。",
  "choices": [{
    "label": "A",
    "text": "ext4"
  }, {
    "label": "B",
    "text": "Btrfs"
  }, {
    "label": "C",
    "text": "XFS"
  }, {
    "label": "D",
    "text": "CramFS"
  }, {
    "label": "E",
    "text": "FAT32"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ESP は UEFI ファームウェアが OS の起動に必要な EFI 実行ファイルなどを読み込むための領域で、Linux のカーネルが動く前に読めることが重要です。FAT32 は UEFI が起動ファイルを扱うための標準的な形式で、ESP の作成に利用できます。ext4・Btrfs・XFS は Linux 側で使うファイルシステムであり、起動前のファームウェアが読む標準形式ではありません。",
  "answerKeys": ["EFI"],
  "answerTexts": ["FAT32"],
  "answerHints": ["FAT32"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-362",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "SysV-init を使用するシステムに apache2 というサービスがインストールされています。このサービスの起動と停止を制御し、各ランレベルディレクトリから参照されるファイルはどれですか。",
  "choices": [{
    "label": "A",
    "text": "/etc/init.d/apache2"
  }, {
    "label": "B",
    "text": "/etc/rc2.d/70apache2"
  }, {
    "label": "C",
    "text": "/etc/rc2.d/apache2"
  }, {
    "label": "D",
    "text": "/etc/rc2.d/apache2.start"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SysV-init では、サービスの起動・停止処理を /etc/init.d 配下のスクリプトに記述し、/etc/rc2.d などのランレベル別ディレクトリからそのスクリプトを指すシンボリックリンクで参照します。したがって処理の実体は /etc/init.d/apache2 で、start や stop などの引数を受け取り対応する処理を実行します。各ランレベルで同じ処理を複製する必要はありません。",
  "answerKeys": ["SysV-"],
  "answerTexts": ["/etc/init.d/apache2"],
  "answerHints": ["/etc/init"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-363",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "Linux ソフトウェア RAID で、デバイスをミラーリングしたアレイを作成するために指定する RAID レベルはどれですか。",
  "choices": [{
    "label": "A",
    "text": "RAID 1"
  }, {
    "label": "B",
    "text": "RAID 5"
  }, {
    "label": "C",
    "text": "RAID 6"
  }, {
    "label": "D",
    "text": "container"
  }, {
    "label": "E",
    "text": "mirrorstripe"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "RAID のミラーリングは同じデータを複数のデバイスに保持する方式で、Linux ソフトウェア RAID では RAID 1 に当たります。RAID 5 や RAID 6 のパリティは失われたデータを計算で復元するための情報であり、各デバイスに同じ内容を複製するミラーとはデータの配置が異なります。container は外部メタデータ形式のアレイを管理する入れ物、mirrorstripe は標準の RAID レベル名ではありません。",
  "answerKeys": ["Linux ソフトウェア RAID で"],
  "answerTexts": ["RAID 1"],
  "answerHints": ["RAID 1"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-364",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "Linux システムで、ボリュームグループ vg01 内にある最初の論理ボリューム vol01 の名前として可能なものはどれですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "/dev/dm-0"
  }, {
    "label": "B",
    "text": "/dev/md-0"
  }, {
    "label": "C",
    "text": "/dev/mapper-vg01-vol1"
  }, {
    "label": "D",
    "text": "/dev/mapper/vg01-vol01"
  }, {
    "label": "E",
    "text": "/dev/vg01/vol01"
  }],
  "answer": ["A", "D", "E"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LVM の論理ボリュームは device-mapper が作るブロックデバイスとして利用され、番号による /dev/dm-N と、VG 名・LV 名を含む別名で参照できます。/dev/mapper/vg01-vol01 は VG 名と LV 名をハイフンでつないだ名前、/dev/vg01/vol01 は VG 名をディレクトリとした分かりやすいパスです。md は LVM ではなくソフトウェア RAID のデバイス系列、/dev/mapper-vg01-vol1 は区切りと名前の両方が一致しません。",
  "answerKeys": ["Linux システムで"],
  "answerTexts": ["/dev/dm-0", "/dev/mapper/vg01-vol01", "/dev/vg01/vol01"],
  "answerHints": ["/dev/dm", "/dev/mapper/vg01", "/dev/vg01"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-365",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "ローカルのソフトウェア RAID デバイスの状態情報を格納する /proc 配下のファイルはどれですか。",
  "choices": [{
    "label": "A",
    "text": "/proc/raidstat"
  }, {
    "label": "B",
    "text": "/proc/mdstat"
  }, {
    "label": "C",
    "text": "/proc/raidstatus"
  }, {
    "label": "D",
    "text": "/proc/mdstatus"
  }, {
    "label": "E",
    "text": "/proc/raid/status"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Linux のソフトウェア RAID は MD（Multiple Device）として管理され、稼働中のアレイの概要を /proc/mdstat で確認できます。ここには現在の MD アレイ、構成デバイス、稼働状態や同期処理の進行状況などが表示されます。/proc はカーネルが現在の情報を公開する仮想ファイルシステムであり、永続的な RAID 設定を書き込む場所ではありません。",
  "answerKeys": ["ローカルのソフトウェア"],
  "answerTexts": ["/proc/mdstat"],
  "answerHints": ["/proc/mdstat"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-366",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "論理ボリュームを作成、フォーマット、マウントして使用する手順は次のとおりです。\npvcreate, ［空欄1］, ［空欄2］, mkfs, mount\n空欄1と空欄2に入る2つの LVM コマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "lvcreate, mdadm"
  }, {
    "label": "B",
    "text": "lvcreate, vgcreate"
  }, {
    "label": "C",
    "text": "lvmcreate, vgcreate"
  }, {
    "label": "D",
    "text": "vgcreate, lvcreate"
  }, {
    "label": "E",
    "text": "vgcreate, mdadm"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LVM ではディスクなどを物理ボリューム（PV）として準備し、それをボリュームグループ（VG）に集め、そこから論理ボリューム（LV）を切り出します。したがって pvcreate の次は vgcreate、続いて lvcreate となり、mkfs でその LV にファイルシステムを作成してから mount で利用します。VG が LV に容量を提供するという前提関係があるため順序を入れ替えることはできません。",
  "answerKeys": ["論理ボリュームを"],
  "answerTexts": ["vgcreate, lvcreate"],
  "answerHints": ["vgcreate, lvcreate"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-367",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "multi",
  "question": "iscsid.conf ファイルの node.startup に設定できる値はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "login"
  }, {
    "label": "B",
    "text": "initiate"
  }, {
    "label": "C",
    "text": "manual"
  }, {
    "label": "D",
    "text": "discover"
  }, {
    "label": "E",
    "text": "automatic"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Open-iSCSI の iscsid.conf にある node.startup は、接続先ターゲットへの iSCSI セッションを手動で開始するか、起動処理で自動的に開始するかという方針を指定します。設定値は manual と automatic です。login はセッションを実際に開始する操作名、discover はターゲットを探す操作であり、方針を保存する設定値とは区別します。",
  "answerKeys": ["iscsid"],
  "answerTexts": ["manual", "automatic"],
  "answerHints": ["manual", "automatic"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-368",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "ハードドライブ /dev/sda では書き込みキャッシュが有効になっていません。/dev/sda の書き込みキャッシュを有効にするコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "hdparm -C 1 /dev/sda"
  }, {
    "label": "B",
    "text": "hdparm --enable-write-cache /dev/sda"
  }, {
    "label": "C",
    "text": "hdparm --wee 1 /dev/sda"
  }, {
    "label": "D",
    "text": "hdparm -D 1 /dev/sda"
  }, {
    "label": "E",
    "text": "hdparm -W 1 /dev/sda"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ハードドライブの書き込みキャッシュは、受け取ったデータをドライブ内へ一時的に保持して書き込みを効率化する機能です。hdparm では大文字の -W がこの機能を扱い、有効化には値1、無効化には値0を指定します。-C は電源状態の確認、-D は欠陥管理に関するオプションで対象機能が異なります。キャッシュ内の未書き込みデータは電源断で失われる可能性があります。",
  "answerKeys": ["ハードドライブ"],
  "answerTexts": ["hdparm -W 1 /dev/sda"],
  "answerHints": ["hdparm -W"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-369",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "single",
  "question": "Linux ソフトウェア RAID アレイへのパスの例はどれですか。",
  "choices": [{
    "label": "A",
    "text": "/dev/raid0"
  }, {
    "label": "B",
    "text": "/dev/rd1"
  }, {
    "label": "C",
    "text": "/dev/pr0"
  }, {
    "label": "D",
    "text": "/dev/md1"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Linux のソフトウェア RAID は MD として管理され、複数の構成デバイスをまとめたアレイを /dev/md0 や /dev/md1 などのパスで参照できます。md に続く数字はアレイを識別する番号であり、RAID 0 や RAID 1 といったデータ配置方式の番号とは別です。実際の RAID レベルや構成は mdadm などで確認します。",
  "answerKeys": ["Linux ソフトウェア RAID アレイ"],
  "answerTexts": ["/dev/md1"],
  "answerHints": ["/dev/md1"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-370",
  "track": "201",
  "source": "LPIC Level2 (201-450) 試験対策問題集",
  "type": "fill",
  "question": "ボリュームグループに追加の物理ボリュームを加えるために使用するコマンドは何ですか。パスや引数を付けず、コマンド名だけを入力してください。",
  "choices": [],
  "answer": ["vgextend"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LVM のボリュームグループ（VG）は複数の物理ボリューム（PV）をまとめた容量のプールです。vgextend は指定した PV を既存の VG に追加し、VG が利用できる容量を増やすコマンドです。増えた容量は LV へ割り当てるための空きとして利用できますが、既存の LV やその上のファイルシステムまで自動的に拡張されるわけではありません。新しい VG を作る vgcreate や LV を拡張する lvextend とは区別します。",
  "answerKeys": ["ボリュームグループに"],
  "answerTexts": ["vgextend"],
  "answerHints": ["vgextend"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.3"
}, {
  "id": "201-371",
  "track": "201",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Linux ルーターで IPv4 のパケット転送を有効にしています。再起動すると、このマシンは他のホストからの IP パケットを転送しなくなります。コマンド echo 1 > /proc/sys/net/ipv4/ip_forward を実行すると一時的に問題が解消します。IPv4 パケット転送設定をシステムの再起動後も維持するための最適な方法はどれですか。",
  "choices": [{
    "label": "A",
    "text": "echo 1 > /proc/sys/net/ipv4/ip_forward を root ユーザーのログインスクリプトに追加する"
  }, {
    "label": "B",
    "text": "echo 1 > /proc/sys/net/ipv4/ip_forward を任意のユーザーのログインスクリプトに追加する"
  }, {
    "label": "C",
    "text": "/etc/sysctl.conf で net.ipv4.ip_forward を 1 に変更する"
  }, {
    "label": "D",
    "text": "/etc/rc.local に net.ipv4.ip_forward = 1 を追加する"
  }, {
    "label": "E",
    "text": "/etc/sysconfig/iptables-config に ipv4.ip_forward = 1 を追加する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "IPv4 パケット転送は net.ipv4.ip_forward が制御します。/proc への書き込みは稼働中のカーネルの値を変えるだけで再起動後には残りません。/etc/sysctl.conf はカーネルパラメータを設定名と値の組で保存するファイルで、起動処理がこれを読み込むため、管理者のログインを待たずに転送が有効になります。/etc/rc.local はシェルで実行するコマンドを書く場所であり、sysctl の記法をそのまま置いても有効になりません。",
  "answerKeys": ["Linux ルーターで IPv4"],
  "answerTexts": ["/etc/sysctl.conf で net.ipv4.ip_forward を 1 に変更する"],
  "answerHints": ["/etc/sysctl"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-372",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "ext3 ファイルシステムを作成するために使用できるコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "mkext3fs"
  }, {
    "label": "B",
    "text": "mkjfs"
  }, {
    "label": "C",
    "text": "mke3fs"
  }, {
    "label": "D",
    "text": "mke2fs"
  }, {
    "label": "E",
    "text": "mkext2fs"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mke2fs は ext2・ext3・ext4 を作成する汎用コマンドで、-j オプションを付けて実行するとジャーナリング機能が有効になり ext3 ファイルシステムが作成されます。mkfs.ext3 も存在しますが、これは内部的に mke2fs -j を呼び出すシンボリックリンクです。",
  "answerKeys": ["ext3"],
  "answerTexts": ["mke2fs"],
  "answerHints": ["mke2fs"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-373",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "IDE ディスクの 32 ビット I/O 転送モードを有効にするために使用するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "Linux カーネルを再コンパイルする必要がある"
  }, {
    "label": "B",
    "text": "sysctl ユーティリティを使用する必要がある"
  }, {
    "label": "C",
    "text": "hdparm ユーティリティを使用する必要がある"
  }, {
    "label": "D",
    "text": "この機能はサポートされていない"
  }, {
    "label": "E",
    "text": "この機能はデフォルトで有効になっている"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "hdparm は SATA/IDE ハードディスクドライブのパラメータを取得・設定するツールです。-c オプション（例: hdparm -c1 /dev/sda）を使用することで、I/O 転送モード（16 ビットまたは 32 ビット）の有効化や確認を行うことができます。",
  "answerKeys": ["IDE"],
  "answerTexts": ["hdparm ユーティリティを使用する必要がある"],
  "answerHints": ["hdparm"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-374",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "/usr/local/lib ディレクトリに追加された新しい共有ライブラリを、システムに認識させるためのコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "export LD_PRELOAD=/usr/local/lib"
  }, {
    "label": "B",
    "text": "export LD_LIBRARY_PATH=/usr/local/lib"
  }, {
    "label": "C",
    "text": "ldconfig /usr/local/lib"
  }, {
    "label": "D",
    "text": "ldd /usr/local/lib"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ldconfig は共有ライブラリのキャッシュファイル（/etc/ld.so.cache）を更新する役割を持ちます。新しいライブラリを標準以外のディレクトリ（例: /usr/local/lib）にインストールした後、このコマンドを実行することで、システムがその新しいライブラリを認識し、プログラムが実行時にリンクできるようになります。",
  "answerKeys": ["/usr"],
  "answerTexts": ["ldconfig /usr/local/lib"],
  "answerHints": ["ldconfig"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-375",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "multi",
  "question": "initramfs イメージは、どのアーカイブ形式と圧縮形式の組み合わせで作成されますか。（2つ選択してください）",
  "choices": [{
    "label": "A",
    "text": "gzip"
  }, {
    "label": "B",
    "text": "tar"
  }, {
    "label": "C",
    "text": "rar"
  }, {
    "label": "D",
    "text": "cpio"
  }, {
    "label": "E",
    "text": "bzip2"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "initramfs イメージは、cpio（copy in, copy out）というアーカイブ形式でファイルをまとめ、そのアーカイブを gzip などの圧縮アルゴリズムで圧縮したものです。システム起動時にカーネルがこのファイルをメモリ上に展開して使用します。",
  "answerKeys": ["initramfs イメージは"],
  "answerTexts": ["gzip", "cpio"],
  "answerHints": ["gzip", "cpio"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-376",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "Linux カーネルのソースコードを展開した後、既存のコンフィグレーションや生成されたファイルをすべて削除するために最初に実行すべき make ターゲットは何ですか。",
  "choices": [{
    "label": "A",
    "text": "make dep"
  }, {
    "label": "B",
    "text": "make distclean"
  }, {
    "label": "C",
    "text": "make configure"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "make distclean は、カーネルのソースコードディレクトリを配布された直後の状態に戻すためのコマンドです。make clean で削除されるファイルに加え、設定ファイル（.config）やエディタのバックアップファイルなど、ビルドプロセスで生成されたほぼすべてのファイルを削除します。",
  "answerKeys": ["Linux カーネルのソースコードを展開した"],
  "answerTexts": ["make distclean"],
  "answerHints": ["make distclean"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-377",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "Linux カーネルのソースコードに対し、パッチやアップデートを適用するために linux/scripts ディレクトリ内にあるどのスクリプトを使用しますか。",
  "choices": [{
    "label": "A",
    "text": "patch"
  }, {
    "label": "B",
    "text": "patch-kernel"
  }, {
    "label": "C",
    "text": "kernel-update"
  }, {
    "label": "D",
    "text": "kernel-upgrade"
  }, {
    "label": "E",
    "text": "upgrade"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "patch-kernel スクリプトは、Linux カーネルのソースコードツリーにパッチを適用するプロセスを簡素化するためのヘルパースクリプトです。パッチを適用する正しいディレクトリを見つけ出し、適用前のバックアップを作成するなど、手動での patch コマンド実行よりも安全かつ簡単に行えるように設計されています。",
  "answerKeys": ["Linux カーネルのソースコードに"],
  "answerTexts": ["patch-kernel"],
  "answerHints": ["patch-kernel"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-378",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "ある実行ファイルが必要とする共有ライブラリの依存関係を表示するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "ldconfig"
  }, {
    "label": "B",
    "text": "ldd"
  }, {
    "label": "C",
    "text": "libdep"
  }, {
    "label": "D",
    "text": "libpath"
  }, {
    "label": "E",
    "text": "ldev"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ldd（List Dynamic Dependencies）コマンドは、指定された実行可能ファイルや共有ライブラリが、実行時に必要とする共有ライブラリの一覧とそのパスを表示します。ライブラリが見つからない場合のエラー解決などに使用されます。",
  "answerKeys": ["ある実行"],
  "answerTexts": ["ldd"],
  "answerHints": ["ldd"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-379",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "ディスクパーティション /dev/sda3 の内容を /dev/sdb3 へ完全にコピーするコマンドは次のうちどれですか。",
  "choices": [{
    "label": "A",
    "text": "dd if=/dev/sdb3 of=/dev/sda3 bs=4096 conv=notrunc"
  }, {
    "label": "B",
    "text": "dd if=/dev/sda3 of=/dev/sdb3 bs=4096 conv=notrunc"
  }, {
    "label": "C",
    "text": "dd --input /dev/sda3 --output /dev/sdb3 bs=4096 conv=notrunc"
  }, {
    "label": "D",
    "text": "dd --input /dev/sdb3 --output /dev/sda3 bs=4096 conv=notrunc"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dd コマンドは、入力元（if）から出力先（of）へデータをブロック単位でコピーします。/dev/sda3 の内容を /dev/sdb3 へコピーする場合、入力元が /dev/sda3、出力先が /dev/sdb3 となります。なお dd には --input / --output という長いオプション名はありません。",
  "answerKeys": ["ディスクパーティション"],
  "answerTexts": ["dd if=/dev/sda3 of=/dev/sdb3 bs=4096 conv=notrunc"],
  "answerHints": ["dd if=/dev/sda3"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.2"
}, {
  "id": "201-380",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "ソースコードからソフトウェアをビルドする際、configure スクリプトが最終的な makefile を生成するために使用するテンプレートファイルはどれですか。",
  "choices": [{
    "label": "A",
    "text": "configure.in"
  }, {
    "label": "B",
    "text": "configure.ac"
  }, {
    "label": "C",
    "text": "makefile.in"
  }, {
    "label": "D",
    "text": "makefile.tmpl"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Autotools を使用するプロジェクトでは、configure スクリプトが実行されると、システム環境に応じた設定値が決定されます。その後、テンプレートファイルである Makefile.in 内のプレースホルダーをこれらの設定値で置き換え、最終的な Makefile を生成します。",
  "answerKeys": ["ソースコードからソフトウェアをビルド"],
  "answerTexts": ["makefile.in"],
  "answerHints": ["makefile.in"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-381",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "一般ユーザーがソースコードからプログラムをコンパイルした後、インストールに失敗しました。最も可能性の高い原因は何ですか。",
  "choices": [{
    "label": "A",
    "text": "ソースコードが異なる CPU アーキテクチャ向けだった"
  }, {
    "label": "B",
    "text": "/usr/bin ディレクトリのパーミッションが正しくない"
  }, {
    "label": "C",
    "text": "プログラムのインストールには root 権限が必要だった"
  }, {
    "label": "D",
    "text": "configure 実行時に誤ったプレフィックスを指定した"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "make install は、コンパイルしたプログラムを /usr/local/bin や /usr/bin などのシステム共通のディレクトリにコピーしようとします。これらのディレクトリはシステム保護のため一般ユーザーには書き込み権限がありません。そのため、インストール作業には sudo などを用いて root 権限で実行する必要があります。",
  "answerKeys": ["一般ユーザーがソースコード"],
  "answerTexts": ["プログラムのインストールには root 権限が必要だった"],
  "answerHints": ["プログラム"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-382",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "ソースコードを更新し、依存関係を解決した後、バイナリ形式に再コンパイルする前に実行すべきコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "make clean"
  }, {
    "label": "B",
    "text": "make all"
  }, {
    "label": "C",
    "text": "make dep"
  }, {
    "label": "D",
    "text": "make install"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "make clean コマンドは、前回のコンパイルで生成されたオブジェクトファイル（.o）や実行可能ファイルなどの中間ファイル・最終生成物を削除します。ソースコードを変更した後に再コンパイルを行う際は、古いファイルが悪影響を及ぼすことを防ぐために、まず make clean を実行してクリーンな状態からビルドを始めるのが一般的です。",
  "answerKeys": ["ソースコードを"],
  "answerTexts": ["make clean"],
  "answerHints": ["make clean"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-383",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "システムの ARP キャッシュに手動でエントリを追加するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "/etc/arp-cache ファイルを直接編集する"
  }, {
    "label": "B",
    "text": "add-arp hostname FF:FF:FF:FF:FF:FF を実行する"
  }, {
    "label": "C",
    "text": "ping -a hostname を実行する"
  }, {
    "label": "D",
    "text": "arp -s hostname FF:FF:FF:FF:FF:FF を実行する"
  }, {
    "label": "E",
    "text": "arp.conf を編集し、arpd を再起動する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "arp コマンドは ARP キャッシュを管理するためのツールです。-s（static）オプションを使用すると、指定したホスト名（または IP アドレス）と MAC アドレスの対応関係を ARP キャッシュに静的に（手動で）追加することができます。",
  "answerKeys": ["システムの ARP"],
  "answerTexts": ["arp -s hostname FF:FF:FF:FF:FF:FF を実行する"],
  "answerHints": ["arp "],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-384",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "ホスト 192.168.1.4 がポート 31337 をリッスンするバックドアに侵害されている疑いがあります。このポートに接続してくる送信元 IP アドレスのリストを収集するための tcpdump コマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "tcpdump host 192.168.1.4 and port 31337 -w out"
  }, {
    "label": "B",
    "text": "nmap host 192.168.1.4:31337"
  }, {
    "label": "C",
    "text": "arpwatch -n 192.168.1.4/32 -p 31337 > capture"
  }, {
    "label": "D",
    "text": "pcap -d 192.168.1.4:31337"
  }, {
    "label": "E",
    "text": "ipwatch --syn 192.168.1.4 -p 31337 --log=out"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "tcpdump はネットワーク上のパケットをキャプチャするコマンドです。host 192.168.1.4 and port 31337 というフィルタ式は「宛先または送信元が IP アドレス 192.168.1.4 で、かつポート番号が 31337 である」パケットをキャプチャします。-w out オプションは、キャプチャ結果を生データのまま out というファイルに保存します。",
  "answerKeys": ["ホスト"],
  "answerTexts": ["tcpdump host 192.168.1.4 and port 31337 -w out"],
  "answerHints": ["tcpdump"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "201-385",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "udev の実行時の動作を制御するために使用するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "udev"
  }, {
    "label": "B",
    "text": "udevctl"
  }, {
    "label": "C",
    "text": "udevadm"
  }, {
    "label": "D",
    "text": "udevconfig"
  }, {
    "label": "E",
    "text": "udevclient"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "udevadm は、udev デーモンの管理・制御を行うためのコマンドラインツールです。デバイスイベントの監視（monitor）、udev データベースへの問い合わせ（info）、ルールの再読み込み（control --reload-rules）など、udev に関する様々な操作を行うことができます。",
  "answerKeys": ["udev の"],
  "answerTexts": ["udevadm"],
  "answerHints": ["udevadm"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.3"
}, {
  "id": "201-386",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "古い形式の RAID 設定ファイル /etc/raidtab において、無効なエントリは次のうちどれですか。",
  "choices": [{
    "label": "A",
    "text": "persistent-superblock"
  }, {
    "label": "B",
    "text": "chunk-size"
  }, {
    "label": "C",
    "text": "nr-spare-disks"
  }, {
    "label": "D",
    "text": "nr-raid-disks"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/raidtab は、古い raidtools パッケージが使用していた設定ファイル形式です。persistent-superblock は現在の mdadm が使用するスーパーブロックの形式を指定する概念であり、古い /etc/raidtab の構文には存在しない無効なエントリです。",
  "answerKeys": ["古い"],
  "answerTexts": ["persistent-superblock"],
  "answerHints": ["persistent"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.1"
}, {
  "id": "201-387",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "カーネルモジュールを /lib/modules/ ディレクトリに配置しましたが、modprobe コマンドでロードできません。このモジュールを有効にするために必要なコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "make modules_install を実行する"
  }, {
    "label": "B",
    "text": "depmod を実行する"
  }, {
    "label": "C",
    "text": "カーネルを再コンパイルする"
  }, {
    "label": "D",
    "text": "modules.conf または modprobe.conf を編集する"
  }, {
    "label": "E",
    "text": "システムを再起動する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "depmod（dependency modules）コマンドは、/lib/modules/<カーネルバージョン>/ ディレクトリをスキャンし、モジュール間の依存関係を記述したファイル（modules.dep など）を生成・更新します。modprobe コマンドはこの依存関係ファイルを参照してモジュールをロードするため、手動でモジュールを追加した後は depmod を実行して依存関係を更新する必要があります。",
  "answerKeys": ["カーネルモジュール"],
  "answerTexts": ["depmod を実行する"],
  "answerHints": ["depmod"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-388",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "bash スクリプト内で、インターフェース eth0 の IP アドレスを取得するために、次の ifconfig の出力から IP アドレスを抽出し、変数 IP に代入するコマンドはどれですか。\neth0 Link encap:Ethernet HWaddr 00:0C:29:CB:FA:30\ninet addr:192.168.246.11 Bcast:192.168.246.255 Mask:255.255.255.0",
  "choices": [{
    "label": "A",
    "text": "IP=LANG=C ifconfig eth0 | awk '{ print $2 }' | cut -f2"
  }, {
    "label": "B",
    "text": "IP=LANG=C ifconfig eth0 | grep inet | cut -d: -f2 | awk '{ print $1 }'"
  }, {
    "label": "C",
    "text": "IP=LANG=C ifconfig eth0 | awk '{ print $3 }'"
  }, {
    "label": "D",
    "text": "IP=$(LANG=C ifconfig eth0 | grep inet | awk '{ print $2 }' | cut -d: -f2)"
  }, {
    "label": "E",
    "text": "IP=$(LANG=C ifconfig eth0 | grep inet | cut -d: -f2)"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "このコマンドは、コマンドの実行結果を変数に代入するコマンド置換 $(...) を使用しています。ifconfig eth0 で eth0 の情報を表示し、grep inet で IP アドレスが含まれる行を抽出、awk '{ print $2 }' で 2 番目のフィールド（addr:192.168.246.11）を取り出し、cut -d: -f2 で区切り文字 : を使い 2 番目のフィールド（192.168.246.11）を抽出します。",
  "answerKeys": ["bash"],
  "answerTexts": ["IP=$(LANG=C ifconfig eth0 | grep inet | awk '{ print $2 }' | cut -d: -f2)"],
  "answerHints": ["IP=$(LANG=C ifconfig eth0 | grep inet | awk"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.1"
}, {
  "id": "201-389",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "autofs サービスを利用しており、/etc/auto.master と /etc/auto.project ファイルがあります。/etc/auto.project の内容を変更した後、その変更をシステムに反映させるためのコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "NFS クライアントデーモンを再起動する"
  }, {
    "label": "B",
    "text": "影響を受けるマウントポイントで fsck を実行する"
  }, {
    "label": "C",
    "text": "/etc/init.d/autofs reload コマンドを発行する"
  }, {
    "label": "D",
    "text": "新しくマップしたパスを /etc/fstab に追加する"
  }, {
    "label": "E",
    "text": "何もする必要はなく、アクセスするだけでよい"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "autofs サービスの設定ファイルを変更した場合、その変更をサービスに反映させるためには、サービスを再起動または設定を再読み込みさせる必要があります。reload アクションは、サービスを停止させることなく設定ファイルを再読み込みするため、稼働中のシステムに影響を与えずに変更を適用できます。",
  "answerKeys": ["autofs サービス"],
  "answerTexts": ["/etc/init.d/autofs reload コマンドを発行する"],
  "answerHints": ["/etc"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-390",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "実行ファイル /usr/bin/foo が依存するすべてのライブラリを調べる方法はどれですか。",
  "choices": [{
    "label": "A",
    "text": "ldconfig を実行すると表示される"
  }, {
    "label": "B",
    "text": "ldd を実行すると表示される"
  }, {
    "label": "C",
    "text": "プログラムを再コンパイルする必要がある"
  }, {
    "label": "D",
    "text": "ls -la を実行すると表示される"
  }, {
    "label": "E",
    "text": "/usr/lib ディレクトリに表示される"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ldd（List Dynamic Dependencies）コマンドは、指定された実行可能ファイルや共有ライブラリが、実行時に必要とする共有ライブラリの一覧とそのパスを表示します。",
  "answerKeys": ["実行ファイル"],
  "answerTexts": ["ldd を実行すると表示される"],
  "answerHints": ["ldd"],
  "chap": "主題206 システムの保守",
  "subtopic": "206.1"
}, {
  "id": "201-391",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "デバイス /dev/hda に対して DMA 転送を有効にするコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "echo \"1\" >/proc/ide/hda/dma"
  }, {
    "label": "B",
    "text": "sysctl -w dev.ide.dma=1"
  }, {
    "label": "C",
    "text": "dma add /dev/hda"
  }, {
    "label": "D",
    "text": "hdparm -d 1 /dev/hda"
  }, {
    "label": "E",
    "text": "insmod dma dev=/dev/hda"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "hdparm コマンドは、ハードディスクドライブのパラメータを取得・設定するためのツールです。-d オプションは DMA（Direct Memory Access）モードの有効/無効を切り替えるために使用され、hdparm -d 1 /dev/hda とすることで /dev/hda の DMA を有効にします。",
  "answerKeys": ["デバイス /"],
  "answerTexts": ["hdparm -d 1 /dev/hda"],
  "answerHints": ["hdparm"],
  "chap": "主題204 高度なストレージデバイスの管理",
  "subtopic": "204.2"
}, {
  "id": "201-392",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "適用済みのパッチを元に戻し、カーネルソースをパッチ適用前の状態に復元するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "patch --restore"
  }, {
    "label": "B",
    "text": "patch --remove"
  }, {
    "label": "C",
    "text": "patch -U"
  }, {
    "label": "D",
    "text": "patch --undo"
  }, {
    "label": "E",
    "text": "patch -R"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "patch コマンドの -R（--reverse）オプションは、パッチファイルを逆方向に適用します。これにより、すでに適用済みのパッチを取り消し、ファイルをパッチ適用前の状態に戻すことができます。",
  "answerKeys": ["適用済みの"],
  "answerTexts": ["patch -R"],
  "answerHints": ["patch -R"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-393",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "カーネルソースが /usr/src/linux にあり、パッチファイルが /tmp/foopatch にある場合、このパッチを適用するための正しいコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "cat /tmp/foopatch | patch -p0"
  }, {
    "label": "B",
    "text": "cd /usr/src/linux; cat /tmp/foopatch | patch -p0"
  }, {
    "label": "C",
    "text": "cd /usr/src/linux; cat /tmp/foopatch | patch"
  }, {
    "label": "D",
    "text": "cd /usr/src/linux; patch -p1 < /tmp/foopatch"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "カーネルのパッチを適用する場合、まず対象のソースコードディレクトリ（/usr/src/linux）に移動します。次に、patch -p1 コマンドを使用し、リダイレクト < を使ってパッチファイルを標準入力として渡します。-p1 オプションは、パッチファイル内のパスから先頭のディレクトリ階層（例: a/）を取り除いて適用するための標準的なオプションです。",
  "answerKeys": ["カーネルソースが"],
  "answerTexts": ["cd /usr/src/linux; patch -p1 < /tmp/foopatch"],
  "answerHints": ["cd /usr/src/linux; patch"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.2"
}, {
  "id": "201-394",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "カーネルバージョン 2.6.9-ac1 は何を意味しますか。",
  "choices": [{
    "label": "A",
    "text": "アルファ版のカーネル"
  }, {
    "label": "B",
    "text": "安定版カーネルに対する Alan Cox 氏によるパッチ"
  }, {
    "label": "C",
    "text": "安定版のカーネル"
  }, {
    "label": "D",
    "text": "不安定版のカーネル"
  }, {
    "label": "E",
    "text": "不安定版カーネルに対する誰かのパッチ"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Linux カーネルのバージョン番号において、末尾に付く -ac のような文字列は、そのパッチセットを管理している開発者のイニシャルを示す慣例があります。ac は著名なカーネル開発者である Alan Cox 氏を指します。したがって 2.6.9-ac1 は、安定版カーネル 2.6.9 に対して Alan Cox 氏が作成したパッチの最初のバージョンが適用されていることを意味します。",
  "answerKeys": ["カーネルバージョン"],
  "answerTexts": ["安定版カーネルに対する Alan Cox 氏によるパッチ"],
  "answerHints": ["安定版カーネル"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-395",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "カーネルに問い合わせることなく、システムに接続されている PCI デバイスを物理バスの視点から確認するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "lspci -v"
  }, {
    "label": "B",
    "text": "lspci -s"
  }, {
    "label": "C",
    "text": "lspci -x"
  }, {
    "label": "D",
    "text": "lspci -b"
  }, {
    "label": "E",
    "text": "lspci -p"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "lspci コマンドの -b オプションは、バス中心（bus-centric）の表示モードを有効にします。これにより、IRQ やアドレスが CPU からではなく、PCI バス自体から見た形で表示されるため、物理的なバスの視点での確認が可能になります。",
  "answerKeys": ["カーネルに問い"],
  "answerTexts": ["lspci -b"],
  "answerHints": ["lspci -b"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-396",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "2.4 系の Linux カーネルにおいて、IDE 接続の CD ライターで書き込みを有効にするために必要だったカーネルモジュールはどれですか。",
  "choices": [{
    "label": "A",
    "text": "ide-cd"
  }, {
    "label": "B",
    "text": "ide-cdrw"
  }, {
    "label": "C",
    "text": "ide-cdb"
  }, {
    "label": "D",
    "text": "ide-scsi"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "古い 2.4 系のカーネルでは、IDE 接続の CD/DVD 書き込みドライブを直接制御する仕組みが未熟でした。そのため、ide-scsi というカーネルモジュールをロードして IDE デバイスを SCSI デバイスとしてエミュレートすることで、既存の SCSI 用書き込みツールを利用して CD への書き込みを実現していました。",
  "answerKeys": ["2."],
  "answerTexts": ["ide-scsi"],
  "answerHints": ["ide-scsi"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-397",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "ext3 ファイルシステムを作成するために使用できるコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "mke2fs"
  }, {
    "label": "B",
    "text": "mkext2fs"
  }, {
    "label": "C",
    "text": "mke3fs"
  }, {
    "label": "D",
    "text": "mkext3fs"
  }, {
    "label": "E",
    "text": "mkjfs"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mke2fs コマンドは、ext2、ext3、ext4 ファイルシステムを作成するための汎用的なツールです。-j オプションを付けて実行すると、ジャーナリング機能が有効になり ext3 ファイルシステムが作成されます。",
  "answerKeys": ["ext3"],
  "answerTexts": ["mke2fs"],
  "answerHints": ["mke2fs"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-398",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "カーネルは正常にロードされましたが、init プロセスに関するエラーで起動が停止しました。この問題を解決するために最も適切な対応はどれですか。",
  "choices": [{
    "label": "A",
    "text": "リカバリディスクで起動し、fsck でルートファイルシステムをチェックする"
  }, {
    "label": "B",
    "text": "リカバリディスクで起動し、バックアップから復元する"
  }, {
    "label": "C",
    "text": "ブートローダのプロンプトで、カーネルオプションに init=/bin/bash を指定して起動する"
  }, {
    "label": "D",
    "text": "リカバリディスクで起動し、新しいカーネルをインストールする"
  }, {
    "label": "E",
    "text": "ブートローダのプロンプトで、別のランレベルを指定して起動する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "init=/bin/bash は、カーネルが起動プロセスの最後に実行する init プログラムの代わりに、直接 /bin/bash シェルを起動するよう指示するカーネルパラメータです。これにより、init プロセスやその設定ファイルに問題があってもシステムを起動し、管理者権限で調査や修復作業を行うことができます。",
  "answerKeys": ["カーネルは"],
  "answerTexts": ["ブートローダのプロンプトで、カーネルオプションに init=/bin/bash を指定して起動する"],
  "answerHints": ["ブートローダのプロンプトで、カーネルオプション"],
  "chap": "主題202 システムの起動",
  "subtopic": "202.2"
}, {
  "id": "201-399",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "シングルユーザーモードで起動した後、/etc/fstab に記載されている他のすべてのファイルシステムをマウントするコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "mount --all"
  }, {
    "label": "B",
    "text": "mountfs --all"
  }, {
    "label": "C",
    "text": "mountfs -a"
  }, {
    "label": "D",
    "text": "mount -a"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mount コマンドの -a オプションは、/etc/fstab ファイルに記述されているすべてのファイルシステム（noauto オプションが付いているものを除く）をマウントします。シングルユーザーモードでは通常ルートファイルシステムのみが読み取り専用でマウントされているため、このコマンドで他のファイルシステムを利用可能な状態にします。",
  "answerKeys": ["シングルユーザーモード"],
  "answerTexts": ["mount -a"],
  "answerHints": ["mount -a"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-400",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "次回の再起動時にファイルシステムチェックを強制的に実行させるコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "reboot -f"
  }, {
    "label": "B",
    "text": "shutdown -f now"
  }, {
    "label": "C",
    "text": "shutdown -c -r now"
  }, {
    "label": "D",
    "text": "fsck -r"
  }, {
    "label": "E",
    "text": "shutdown -F -r now"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "shutdown コマンドの -F（Force）オプションは、次回の起動時にファイルシステムチェック（fsck）を強制的に実行するようにスケジュールします。-r now は「今すぐ再起動」を意味するため、このコマンドで再起動した後に fsck が実行されます。",
  "answerKeys": ["次回の"],
  "answerTexts": ["shutdown -F -r now"],
  "answerHints": ["shutdown -F"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-401",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "既存の ext 系ファイルシステムに対して、マウント回数や時間に基づくディスクチェックの間隔を設定するために使用するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "mke2fs"
  }, {
    "label": "B",
    "text": "e2fsck"
  }, {
    "label": "C",
    "text": "e2fsckconfig"
  }, {
    "label": "D",
    "text": "config2fs"
  }, {
    "label": "E",
    "text": "tune2fs"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "tune2fs コマンドは、ext2、ext3、ext4 ファイルシステムのパラメータを調整するためのツールです。-c オプションで最大マウント回数を、-i オプションでチェック間隔（日数など）を設定することで、システム起動時の自動的なファイルシステムチェックのタイミングを制御できます。",
  "answerKeys": ["既存の ext 系"],
  "answerTexts": ["tune2fs"],
  "answerHints": ["tune2fs"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-402",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "システムの起動時に「VFS: Mounted root (ext2 filesystem) readonly」と表示され、ext3 のジャーナリング機能が有効になっていません。最も可能性の高い原因は何ですか。",
  "choices": [{
    "label": "A",
    "text": "古いバージョンの e2fsprogs がインストールされている"
  }, {
    "label": "B",
    "text": "カーネルに ext3 のサポートが含まれていない"
  }, {
    "label": "C",
    "text": "/etc/fstab でファイルシステムが ext2 として指定されている"
  }, {
    "label": "D",
    "text": "システムが正常にシャットダウンされなかった"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ext3 ファイルシステムは、ext2 にジャーナリング機能を追加したものです。システムが ext3 を ext2 として認識してしまうのは、カーネルが ext3 ファイルシステムのジャーナリング機能を解釈できない、つまりカーネルに ext3 を扱うためのドライバ（モジュール）が含まれていないことが原因です。",
  "answerKeys": ["システムの起動時に"],
  "answerTexts": ["カーネルに ext3 のサポートが含まれていない"],
  "answerHints": ["カーネル"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-403",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "ネットワークインターフェース eth0 が常に 3c59x モジュールを使用するように設定したい場合、モジュール設定ファイルにどの行を追加する必要がありますか。",
  "choices": [{
    "label": "A",
    "text": "eth0=3c59x"
  }, {
    "label": "B",
    "text": "alias eth0=3c59x"
  }, {
    "label": "C",
    "text": "alias eth0 3c59x"
  }, {
    "label": "D",
    "text": "set eth0 3c59x"
  }, {
    "label": "E",
    "text": "set eth0=3c59x"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "モジュール設定ファイル（/etc/modprobe.conf や /etc/modprobe.d/ 配下のファイル）では、alias ディレクティブを使用して、特定のデバイス名（eth0 など）と、そのデバイスが使用すべきカーネルモジュール名（3c59x）を関連付けることができます。正しい構文は alias <エイリアス名> <モジュール名> です。",
  "answerKeys": ["ネットワークインターフェース eth0 が"],
  "answerTexts": ["alias eth0 3c59x"],
  "answerHints": ["alias eth0 3c59x"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-404",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "カーネルが起動時に使用する initrd ファイル（/boot/initrd）の内容を確認するための一連のコマンドとして、正しいものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "cp /boot/initrd /tmp/initrd.gz; gunzip initrd.gz; mount /tmp/initrd /mnt/"
  }, {
    "label": "B",
    "text": "cp /boot/initrd /tmp/initrd.gz; gunzip initrd.gz; mount /tmp/initrd /mnt/ -o loop"
  }, {
    "label": "C",
    "text": "mkinitird -d /boot/initrd; mount /boot/initrd /mnt/ -o loop"
  }, {
    "label": "D",
    "text": "cp /boot/initrd /tmp/initrd.gz; mount /tmp/initrd /mnt/ -o loop"
  }, {
    "label": "E",
    "text": "mount /boot/initrd /mnt/ -O loop; cat /mnt"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "initrd（initial ramdisk）は、gzip で圧縮されたファイルシステムイメージです。その内容を確認する手順は、作業用ディレクトリにコピーして .gz 拡張子を付け、gunzip で解凍し、解凍されたファイルシステムイメージを mount コマンドの -o loop オプションを使ってループバックデバイスとしてマウントします。",
  "answerKeys": ["カーネルが"],
  "answerTexts": ["cp /boot/initrd /tmp/initrd.gz; gunzip initrd.gz; mount /tmp/initrd /mnt/ -o loop"],
  "answerHints": ["cp /boot/initrd /tmp/initrd.gz; gunzip initrd.gz; mount /tmp/initrd /mnt/ "],
  "chap": "主題202 システムの起動",
  "subtopic": "202.1"
}, {
  "id": "201-405",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "パラレルプリンタポート（/dev/lp0）において、デフォルトのポーリング方式から割り込み駆動方式へ変更するために使用するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "stty"
  }, {
    "label": "B",
    "text": "tunelp"
  }, {
    "label": "C",
    "text": "setserial"
  }, {
    "label": "D",
    "text": "parpirq"
  }, {
    "label": "E",
    "text": "setpar"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "tunelp コマンドは、パラレルプリンタポート（lp デバイス）のパラメータを設定・調整するためのツールです。このコマンドを使って、割り込み（IRQ）の使用を設定し、CPU リソースを消費するポーリング方式から、より効率的な割り込み駆動方式へ変更することができます。",
  "answerKeys": ["パラレルプリンタポート"],
  "answerTexts": ["tunelp"],
  "answerHints": ["tunelp"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-406",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "fill",
  "question": "接続されているハードディスクの UUID を確認するために参照できる、/dev/disk/ 以下のディレクトリは何ですか。（フルパスで回答してください）",
  "choices": [],
  "answer": ["/dev/disk/by-uuid"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/dev/disk/by-uuid ディレクトリには、システムに接続されている各ディスクパーティションの UUID（Universally Unique Identifier）を名前とするシンボリックリンクが作成されます。この UUID はパーティション固有の ID であり、デバイス名（/dev/sda1 など）が変わっても変化しないため、/etc/fstab での指定などに利用されます。",
  "answerKeys": ["接続されて"],
  "answerTexts": ["/dev/disk/by-uuid"],
  "answerHints": ["/dev/disk/by-uuid"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.1"
}, {
  "id": "201-407",
  "track": "201",
  "source": "A3_LPIC2_201-450",
  "type": "fill",
  "question": "カーネルパラメータ shmmax（共有メモリセグメントの最大サイズ）の値を永続的に設定するには、どの設定ファイルを編集する必要がありますか。（フルパスで記載してください）",
  "choices": [],
  "answer": ["/etc/sysctl.conf"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/sysctl.conf ファイルは、Linux カーネルのパラメータを永続的に設定するためのファイルです。このファイルに kernel.shmmax = <値> のように記述し、システムを再起動するか sysctl -p コマンドを実行することで、設定が反映されます。",
  "answerKeys": ["カーネルパラメータ shmmax"],
  "answerTexts": ["/etc/sysctl.conf"],
  "answerHints": ["/etc/sysctl.conf"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-408",
  "track": "201",
  "source": "A4_201_低品質",
  "type": "multi",
  "question": "Web サーバーを構築するとき、次の選択肢のどれがシステムのサイズ設定に影響しますか。（3つの正解を選んでください）",
  "choices": [{
    "label": "A",
    "text": "予想される同時接続ユーザー数"
  }, {
    "label": "B",
    "text": "どのハードウェアベンダーがより優れた Linux サポートをしてくれるか。"
  }, {
    "label": "C",
    "text": "どのタイプのコンテンツが提供されるか。"
  }, {
    "label": "D",
    "text": "Web サーバーがサポートするスクリプト言語。"
  }, {
    "label": "E",
    "text": "OS のインストールを CD、DVD、またはネットワークベースで実施するか"
  }],
  "answer": ["A", "C", "D"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Web サーバーのサイズ設計には、同時接続数（CPU・メモリ・帯域幅の需要）、提供するコンテンツの種類（静的 HTML か動画・動的コンテンツかで I/O や CPU 負荷が大きく異なる）、サポートするスクリプト言語（PHP や Python などは言語ごとにメモリ消費が異なる）が直接影響します。ハードウェアベンダーの対応品質や OS のインストール方法は、システムのサイズ設定とは無関係です。",
  "answerKeys": ["Web サーバーを"],
  "answerTexts": ["予想される同時接続ユーザー数", "どのタイプのコンテンツが提供されるか。", "Web サーバーがサポートするスクリプト言語。"],
  "answerHints": ["予想される", "どのタイプ", "Web"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.2"
}, {
  "id": "201-409",
  "track": "201",
  "source": "A4_201_低品質",
  "type": "multi",
  "question": "以下の出力例から、CPU がカーネル以外のコードの実行に費やした時間の割合と CPU がカーネルコードの実行に費やした時間の割合を詳しく説明している列はどれですか。（2つの正解を選んでください）\n\n# vmstat 1 100\nprocs -----------memory---------- ---swap-- -----io---- --system-- ----cpu----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa\n 0  0      0 282120 134108 5797012    0    0     0     2    0    0  0  0 100  0\n 0  0      0 282120 134108 5797012    0    0     0     0 1007  359  0  0 100  0\n 0  0      0 282120 134108 5797012    0    0     0     0 1117  577  0  0 100  0\n 0  0      0 282120 134108 5797012    0    0     0     0 1007  366  0  0 100  0",
  "choices": [{
    "label": "A",
    "text": "id"
  }, {
    "label": "B",
    "text": "us"
  }, {
    "label": "C",
    "text": "wa"
  }, {
    "label": "D",
    "text": "sy"
  }, {
    "label": "E",
    "text": "si"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "vmstat の cpu 列において、us は user time を意味し、CPU がユーザー空間（カーネル以外）のコード実行に費やした時間の割合を示します。sy は system time を意味し、CPU がカーネルコードの実行に費やした時間の割合を示します。id はアイドル時間、wa は I/O 完了待ち時間、si はソフトウェア割り込みに費やした時間です。",
  "answerKeys": ["以下の出力例から"],
  "answerTexts": ["us", "sy"],
  "answerHints": ["us", "sy"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-410",
  "track": "201",
  "source": "A4_201_低品質",
  "type": "multi",
  "question": "メモリ使用量を測定するために使用されるコマンドは次のうちどれですか。（3つの正解を選んでください）",
  "choices": [{
    "label": "A",
    "text": "msstat"
  }, {
    "label": "B",
    "text": "pstree"
  }, {
    "label": "C",
    "text": "sar"
  }, {
    "label": "D",
    "text": "top"
  }, {
    "label": "E",
    "text": "vmstat"
  }],
  "answer": ["C", "D", "E"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sar（System Activity Reporter）は -r オプションでメモリ使用量をレポートします。top はリアルタイムでプロセスごとのメモリ消費を表示します。vmstat は仮想メモリ統計を表示し、メモリの使用状況を確認できます。msstat は実在しないコマンドで、pstree はプロセスのツリー構造表示専用のため、メモリ使用量の測定には使えません。",
  "answerKeys": ["メモリ使用量を"],
  "answerTexts": ["sar", "top", "vmstat"],
  "answerHints": ["sar", "top", "vmstat"],
  "chap": "主題200 キャパシティプランニング",
  "subtopic": "200.1"
}, {
  "id": "201-411",
  "track": "201",
  "source": "A4_201_低品質",
  "type": "single",
  "question": "あるデータベース・アプリケーションは、2 ギガバイト（2147483648 バイト）の最大共有メモリセグメント（SHMMAX）を必要とします。このカーネルパラメータを永続的に設定するには、どの構成ファイルを変更する必要がありますか。",
  "choices": [{
    "label": "A",
    "text": "/etc/sysctl.conf"
  }, {
    "label": "B",
    "text": "/etc/dataconf"
  }, {
    "label": "C",
    "text": "/etc/data.confd"
  }, {
    "label": "D",
    "text": "/etc/sysctld.conf"
  }, {
    "label": "E",
    "text": "/etc/database.conf"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Linux でカーネルパラメータを永続的に設定するには /etc/sysctl.conf を編集し、kernel.shmmax = 2147483648 を追記します。sysctl -p コマンドで即時反映でき、再起動後も設定が保持されます。他の選択肢はいずれも実在しないファイルです。",
  "answerKeys": ["あるデータベース・アプリケーション"],
  "answerTexts": ["/etc/sysctl.conf"],
  "answerHints": ["/etc/sysctl.conf"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.3"
}, {
  "id": "201-412",
  "track": "201",
  "source": "A4_201_低品質",
  "type": "fill",
  "question": "ファイルシステム階層標準（FHS）によると、どのパスが Linux カーネルソースであり、実際の Linux ソースコードへのシンボリックリンクである可能性がありますか。（バージョン情報なしでフルパスを記載してください）",
  "choices": [],
  "answer": ["/usr/src/linux"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "FHS では /usr/src にソースコードを配置することが定められており、Linux カーネルソースの標準パスは /usr/src/linux となります。このパスは実際にはバージョン付きディレクトリ（例: /usr/src/linux-5.x.x）へのシンボリックリンクであることが多くあります。",
  "answerKeys": ["ファイルシステム"],
  "answerTexts": ["/usr/src/linux"],
  "answerHints": ["/usr/src/linux"],
  "chap": "主題201 Linuxカーネル",
  "subtopic": "201.1"
}, {
  "id": "201-413",
  "track": "201",
  "source": "A4_201_低品質",
  "type": "fill",
  "question": "既存の ext2 ファイルシステムを非破壊的に ext3 ファイルシステムに変えるコマンドはどれですか。（パスやパラメーターを指定せずにコマンドのみを指定してください。）",
  "choices": [],
  "answer": ["tune2fs"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "tune2fs は ext2/ext3/ext4 ファイルシステムのパラメーターを変更するコマンドで、-j オプションを付けることでジャーナルを追加し、既存データを保持したまま ext2 を ext3 に変換できます。mke2fs はファイルシステムを新規作成するコマンドであり、既存データは破壊されます。",
  "answerKeys": ["既存の ext2"],
  "answerTexts": ["tune2fs"],
  "answerHints": ["tune2fs"],
  "chap": "主題203 ファイルシステムとデバイス",
  "subtopic": "203.2"
}, {
  "id": "201-414",
  "track": "201",
  "source": "A4_201_低品質",
  "type": "fill",
  "question": "以下の tcpdump の出力によると、クライアントホストの IP アドレスは何ですか。\n\n02:12:40.511381 IP 192.168.246.11.1045 > 192.168.246.1.22: S 3838532429:3838532429(0) win 5840 <mss 1460,sackOK,timestamp 3132574 0,nop,wscale 2>\n02:12:40.511540 IP 192.168.246.1.22 > 192.168.246.11.1045: S 1209330085:1209330085(0) ack 3838532430 win 5792 <mss 1460,sackOK,timestamp 11553457 3132574,nop,wscale 0>\n02:12:40.511755 IP 192.168.246.11.1045 > 192.168.246.1.22: . ack 1 win 5840 <nop,nop,timestamp 3132574 11553457>\n02:12:40.515122 IP 192.168.246.1.22 > 192.168.246.11.1045: P 1:26(25) ack 1 win 5792 <nop,nop,timestamp 11553460 3132574>\n02:12:40.515511 IP 192.168.246.11.1045 > 192.168.246.1.22: . ack 26 win 5840 <nop,nop,timestamp 3132578 11553460>\n02:12:40.515952 IP 192.168.246.11.1045 > 192.168.246.1.22: P 1:23(22) ack 26 win 5840 <nop,nop,timestamp 3132578 11553460>",
  "choices": [],
  "answer": ["192.168.246.11"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TCP の3ウェイハンドシェイクでは、最初の SYN パケットを送信する側がクライアントです。出力の最初の行で 192.168.246.11 のポート 1045 から 192.168.246.1 のポート 22（SSH）へ SYN を送信しているため、クライアントホストの IP アドレスは 192.168.246.11 となります。",
  "answerKeys": ["以下の tcpdump"],
  "answerTexts": ["192.168.246.11"],
  "answerHints": ["192.168.246.11"],
  "chap": "主題205 ネットワークの構成",
  "subtopic": "205.3"
}, {
  "id": "202-001",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "BIND9 で、自身で解決できない問い合わせをすべて ISP の DNS サーバー 203.0.113.53 と 203.0.113.54 に転送したい。named.conf の options セクションに記述する設定として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "forward { 203.0.113.53; 203.0.113.54; };"
  }, {
    "label": "B",
    "text": "nameserver 203.0.113.53 203.0.113.54;"
  }, {
    "label": "C",
    "text": "allow-forward { 203.0.113.53; 203.0.113.54; };"
  }, {
    "label": "D",
    "text": "masters { 203.0.113.53; 203.0.113.54; };"
  }, {
    "label": "E",
    "text": "forwarders { 203.0.113.53; 203.0.113.54; };"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "転送先の DNS サーバーは forwarders ディレクティブで、波括弧の中にセミコロン区切りで列挙します。forward ディレクティブは only または first を指定して転送の動作を決めるもので、アドレスは記述しません。masters はスレーブゾーンのマスター指定、nameserver は /etc/resolv.conf の書式です。",
  "answerKeys": ["BIND9"],
  "answerTexts": ["forwarders { 203.0.113.53; 203.0.113.54; };"],
  "answerHints": ["forwarders"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-002",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下の設定で動作している BIND9 サーバーにおいて、フォワーダー 192.0.2.53 が停止した場合の動作として正しいものを選択してください。\n\noptions {\n    directory \"/var/named\";\n    forwarders { 192.0.2.53; };\n    forward only;\n};",
  "choices": [{
    "label": "A",
    "text": "/etc/resolv.conf に記述されたネームサーバーへ問い合わせる"
  }, {
    "label": "B",
    "text": "ルートサーバーからの名前解決は行わず、キャッシュにない問い合わせは失敗する"
  }, {
    "label": "C",
    "text": "自動的にルートサーバーからの反復問い合わせに切り替えて名前解決する"
  }, {
    "label": "D",
    "text": "キャッシュにない問い合わせにはすべて NXDOMAIN を返す"
  }, {
    "label": "E",
    "text": "named プロセスが終了する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "forward only を指定すると、named はフォワーダーにのみ問い合わせ、フォワーダーが応答しない場合でも自分で再帰解決を行わないため、名前解決は失敗（SERVFAIL）します。既定値の forward first であれば、フォワーダーへの転送に失敗した際にルートサーバーからの解決へ切り替わります。名前が存在しないことを示す NXDOMAIN が返されるわけではありません。",
  "answerKeys": ["以下の設定で"],
  "answerTexts": ["ルートサーバーからの名前解決は行わず、キャッシュにない問い合わせは失敗する"],
  "answerHints": ["ルートサーバー"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-003",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "Red Hat 系ディストリビューション（RHEL、CentOS など）で、BIND の named が既定で読み込むメイン設定ファイルを絶対パスで記述してください。",
  "choices": [],
  "answer": ["/etc/named.conf"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Red Hat 系では named のメイン設定ファイルは /etc/named.conf で、ゾーンファイルは通常 /var/named 以下に置かれます。Debian 系では /etc/bind/named.conf が使われ、named.conf.options や named.conf.local などに分割して include されるのが一般的です。",
  "answerKeys": ["Red Hat 系ディストリビューション（"],
  "answerTexts": ["/etc/named.conf"],
  "answerHints": ["/etc/named.conf"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-004",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "named.conf を編集した。named を再起動する前に、設定ファイルに構文エラーがないかを確認したい。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "rndc checkconf"
  }, {
    "label": "B",
    "text": "dnssec-verify"
  }, {
    "label": "C",
    "text": "named-checkconf"
  }, {
    "label": "D",
    "text": "named -g --check"
  }, {
    "label": "E",
    "text": "named-checkzone"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "named-checkconf は named.conf の構文をチェックし、エラーがなければ何も出力せずに終了します。named-checkzone はゾーンファイルを検査するコマンドで、named.conf の検査には使いません。dnssec-verify は署名済みゾーンの検証ツールであり、rndc に checkconf というサブコマンドはありません。",
  "answerKeys": ["named.conf を"],
  "answerTexts": ["named-checkconf"],
  "answerHints": ["named-checkconf"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-005",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "マスターゾーン example.com のゾーンファイルを更新した。named 全体を再起動せずに、このゾーンだけを再読み込みさせるコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "rndc reconfig example.com"
  }, {
    "label": "B",
    "text": "rndc flush example.com"
  }, {
    "label": "C",
    "text": "named-checkzone -r example.com"
  }, {
    "label": "D",
    "text": "rndc refresh example.com"
  }, {
    "label": "E",
    "text": "rndc reload example.com"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "rndc reload にゾーン名を指定すると、そのゾーンのみを再読み込みします。rndc reconfig は設定ファイルと新規追加ゾーンだけを読み込み、既存ゾーンの再読み込みは行いません。rndc refresh はスレーブゾーンでマスターへの SOA 確認を行うもの、rndc flush はキャッシュを消去するものです。",
  "answerKeys": ["マスターゾーン"],
  "answerTexts": ["rndc reload example.com"],
  "answerHints": ["rndc reload"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-006",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "外部サイトの IP アドレスが変更されたが、社内のキャッシュ DNS サーバー（BIND9）が古いアドレスを返し続けている。named を再起動せずにキャッシュをすべて消去するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "rndc status"
  }, {
    "label": "B",
    "text": "rndc stats"
  }, {
    "label": "C",
    "text": "rndc dumpdb"
  }, {
    "label": "D",
    "text": "rndc flush"
  }, {
    "label": "E",
    "text": "rndc querylog"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "rndc flush は named のキャッシュをすべて消去します。特定の名前だけを消去したい場合は rndc flushname を使います。rndc dumpdb はキャッシュの内容をファイル（named_dump.db）に書き出すだけで消去はせず、rndc stats は統計情報の出力、rndc querylog はクエリログの切り替えを行います。",
  "answerKeys": ["外部"],
  "answerTexts": ["rndc flush"],
  "answerHints": ["rndc flush"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-007",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ルートサーバーの一覧を named に与えるため、named.conf に以下のゾーンを定義する。空欄に入るものを選択してください。\n\nzone \".\" IN {\n    type ______;\n    file \"named.ca\";\n};",
  "choices": [{
    "label": "A",
    "text": "hint"
  }, {
    "label": "B",
    "text": "forward"
  }, {
    "label": "C",
    "text": "master"
  }, {
    "label": "D",
    "text": "slave"
  }, {
    "label": "E",
    "text": "root"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ルートゾーンのヒント情報は type hint として定義し、ルートサーバーの NS レコードと A/AAAA レコードを記述したファイル（named.ca、root.hints、db.root など）を指定します。named は起動時にこの情報を使ってルートサーバーに問い合わせ、最新のルートサーバー一覧を取得します。type master や slave は権威ゾーン、type forward はゾーン単位の転送に使います。",
  "answerKeys": ["ルートサーバー"],
  "answerTexts": ["hint"],
  "answerHints": ["hint"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-008",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下の設定の DNS サーバーに、クライアント 192.168.2.10 から問い合わせたところ status: REFUSED が返された。原因として最も適切なものを選択してください。\n\noptions {\n    directory \"/var/named\";\n    allow-query { localhost; 192.168.1.0/24; };\n};",
  "choices": [{
    "label": "A",
    "text": "recursion が指定されていないため、再帰問い合わせが無効になっている"
  }, {
    "label": "B",
    "text": "allow-query で 192.168.2.0/24 からの問い合わせが許可されていない"
  }, {
    "label": "C",
    "text": "directory の指定が誤っているため、ゾーンファイルを読み込めない"
  }, {
    "label": "D",
    "text": "forwarders が指定されていないため、外部の名前を解決できない"
  }, {
    "label": "E",
    "text": "listen-on が指定されていないため、named がどのインターフェースでも待ち受けていない"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "allow-query は問い合わせを受け付けるクライアントを制限し、許可されていない送信元には REFUSED を返します。この設定では localhost と 192.168.1.0/24 しか許可されていません。listen-on を省略した場合は全 IPv4 インターフェースで待ち受け、recursion も既定で yes なので、それらは原因になりません。",
  "answerKeys": ["以下の設定の DNS サーバーに"],
  "answerTexts": ["allow-query で 192.168.2.0/24 からの問い合わせが許可されていない"],
  "answerHints": ["allow"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-009",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下の設定の DNS サーバー（アドレス 192.168.1.10）で、サーバー上から dig @127.0.0.1 を実行すると応答があるが、LAN 上の他のホストから 192.168.1.10 に問い合わせるとタイムアウトする。最も適切な修正を選択してください。\n\noptions {\n    listen-on port 53 { 127.0.0.1; };\n    allow-query { any; };\n};",
  "choices": [{
    "label": "A",
    "text": "allow-transfer { any; }; を追加する"
  }, {
    "label": "B",
    "text": "allow-query に 192.168.1.0/24 を追加する"
  }, {
    "label": "C",
    "text": "listen-on-v6 { any; }; を追加する"
  }, {
    "label": "D",
    "text": "listen-on に 192.168.1.10 を追加する"
  }, {
    "label": "E",
    "text": "recursion yes; を追加する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "listen-on で 127.0.0.1 しか指定していないため、named は LAN 側のアドレスで待ち受けておらず、他ホストからの問い合わせはタイムアウトします。allow-query はすでに any なので変更は不要で、アクセス制御で拒否された場合はタイムアウトではなく REFUSED が返ります。allow-transfer はゾーン転送の制御です。",
  "answerKeys": ["以下の設定の DNS サーバー（"],
  "answerTexts": ["listen-on に 192.168.1.10 を追加する"],
  "answerHints": ["listen-on "],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-010",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "インターネットに公開する権威 DNS サーバーを、外部からの再帰問い合わせを処理しない（オープンリゾルバーにしない）構成にしたい。options に記述する設定として適切なものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "allow-query { none; };"
  }, {
    "label": "B",
    "text": "recursion no;"
  }, {
    "label": "C",
    "text": "notify no;"
  }, {
    "label": "D",
    "text": "allow-recursion { none; };"
  }, {
    "label": "E",
    "text": "forward only;"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "recursion no; は再帰問い合わせ機能そのものを無効にし、allow-recursion { none; }; は再帰問い合わせを許可するクライアントをなくします。allow-query { none; }; にすると自ゾーンへの権威応答まで拒否されてしまいます。forward only は転送の動作、notify no はスレーブへの変更通知に関する設定です。",
  "answerKeys": ["インターネット"],
  "answerTexts": ["recursion no;", "allow-recursion { none; };"],
  "answerHints": ["recursion", "allow-recursion"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-011",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "キャッシュ専用（caching-only）DNS サーバーの説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "インターネット上のゾーンの権威を持たず、再帰問い合わせの結果をキャッシュして応答する"
  }, {
    "label": "B",
    "text": "フォワーダーを使わない場合、ルートサーバーの情報を得るためにヒントゾーンを利用する"
  }, {
    "label": "C",
    "text": "recursion no; を設定する必要がある"
  }, {
    "label": "D",
    "text": "必ずスレーブゾーンを1つ以上定義する必要がある"
  }, {
    "label": "E",
    "text": "応答には常に aa フラグが付き、権威ある応答として扱われる"
  }],
  "answer": ["A", "B"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "キャッシュ専用サーバーは自身では権威ゾーン（localhost 関連を除く）を持たず、クライアントの代わりに再帰問い合わせを行って結果をキャッシュします。フォワーダーを使わない場合は、ヒントゾーンのルートサーバー情報を起点に名前解決します。キャッシュからの応答は権威応答ではないため aa フラグは付かず、再帰問い合わせを行うので recursion を無効にしてはいけません。",
  "answerKeys": ["キャッシュ"],
  "answerTexts": ["インターネット上のゾーンの権威を持たず、再帰問い合わせの結果をキャッシュして応答する", "フォワーダーを使わない場合、ルートサーバーの情報を得るためにヒントゾーンを利用する"],
  "answerHints": ["インターネット", "フォワーダー"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-012",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "rndc と named の間の通信を認証する共有鍵を生成し、rndc.key ファイルとして書き出すコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "rndc-confgen -a"
  }, {
    "label": "B",
    "text": "dnssec-keygen -a rndc"
  }, {
    "label": "C",
    "text": "rndc -k create"
  }, {
    "label": "D",
    "text": "named-checkconf -k"
  }, {
    "label": "E",
    "text": "rndc keygen"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "rndc-confgen -a は rndc 用の共有鍵を生成し、rndc.key（Red Hat 系では /etc/rndc.key、Debian 系では /etc/bind/rndc.key）に書き出します。rndc と named はこの鍵を使って、既定では TCP ポート 953 で通信します。rndc に keygen というサブコマンドはなく、dnssec-keygen は DNSSEC 用の鍵を生成するコマンドです。",
  "answerKeys": ["rndc と"],
  "answerTexts": ["rndc-confgen -a"],
  "answerHints": ["rndc-confgen"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-013",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "BIND 以外の DNS サーバーソフトウェアを選択してください。（3つ選択）",
  "choices": [{
    "label": "A",
    "text": "dnsmasq"
  }, {
    "label": "B",
    "text": "PowerDNS"
  }, {
    "label": "C",
    "text": "Squid"
  }, {
    "label": "D",
    "text": "Dovecot"
  }, {
    "label": "E",
    "text": "djbdns"
  }],
  "answer": ["A", "B", "E"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dnsmasq は DNS フォワーダーと DHCP サーバーを兼ねる軽量ソフトウェアで、小規模ネットワークでよく使われます。djbdns は tinydns（権威）と dnscache（キャッシュ）などから構成され、PowerDNS はデータベースなど多様なバックエンドを利用できる DNS サーバーです。Dovecot は IMAP/POP3 サーバー、Squid は HTTP プロキシサーバーです。",
  "answerKeys": ["BIND 以外の"],
  "answerTexts": ["dnsmasq", "PowerDNS", "djbdns"],
  "answerHints": ["dnsmasq", "PowerDNS", "djbdns"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-014",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "unbound の説明として最も適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "権威 DNS サーバー専用で、再帰問い合わせの機能を持たない"
  }, {
    "label": "B",
    "text": "rndc の代わりに BIND を管理する GUI ツールである"
  }, {
    "label": "C",
    "text": "BIND のゾーンファイルを SQL データベースに変換するツールである"
  }, {
    "label": "D",
    "text": "DHCP サーバーと DNS フォワーダーを兼ねる軽量ソフトウェアである"
  }, {
    "label": "E",
    "text": "DNSSEC 検証に対応した再帰・キャッシュ型のリゾルバーで、主な設定ファイルは unbound.conf である"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "unbound は DNSSEC 検証機能を持つ再帰・キャッシュ専用のリゾルバーで、unbound.conf で設定し、unbound-control で管理します。DHCP と DNS フォワーダーを兼ねるのは dnsmasq、権威サーバー専用の実装としては同じ NLnet Labs の NSD があります。",
  "answerKeys": ["unbound"],
  "answerTexts": ["DNSSEC 検証に対応した再帰・キャッシュ型のリゾルバーで、主な設定ファイルは unbound.conf である"],
  "answerHints": ["DNSSEC"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-015",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "rndc が設定されていない環境で、named を停止させずに設定ファイルとゾーンを再読み込みさせたい。実行するコマンドとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "kill -TERM $(pidof named)"
  }, {
    "label": "B",
    "text": "kill -STOP $(pidof named)"
  }, {
    "label": "C",
    "text": "kill -HUP $(pidof named)"
  }, {
    "label": "D",
    "text": "kill -INT $(pidof named)"
  }, {
    "label": "E",
    "text": "kill -KILL $(pidof named)"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "named は SIGHUP を受け取ると、named.conf とゾーンファイルを再読み込みします。これは rndc reload とほぼ同じ動作です。SIGTERM と SIGINT は named を正常終了させ、SIGKILL は強制終了、SIGSTOP はプロセスを一時停止させます。",
  "answerKeys": ["rndc が"],
  "answerTexts": ["kill -HUP $(pidof named)"],
  "answerHints": ["kill -HUP"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-016",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下の example.com のゾーンファイルにおいて、ftp.example.com の A レコードの TTL を選択してください。\n\n$TTL 86400\n@   IN SOA ns1.example.com. hostmaster.example.com. (\n        2026110201 ; serial\n        3600       ; refresh\n        900        ; retry\n        604800     ; expire\n        300 )      ; negative cache TTL\n    IN NS  ns1.example.com.\nns1      IN A 192.0.2.1\nwww 3600 IN A 192.0.2.10\nftp      IN A 192.0.2.20",
  "choices": [{
    "label": "A",
    "text": "86400 秒"
  }, {
    "label": "B",
    "text": "300 秒"
  }, {
    "label": "C",
    "text": "3600 秒"
  }, {
    "label": "D",
    "text": "900 秒"
  }, {
    "label": "E",
    "text": "0 秒（キャッシュされない）"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TTL が個別に指定されていないレコードには、$TTL ディレクティブで指定した既定の TTL（ここでは 86400 秒）が適用されます。www の行の 3600 はそのレコードだけに有効です。SOA の最後のフィールド（300）は否定応答をキャッシュする時間であり、既定 TTL ではありません。",
  "answerKeys": ["以下の example.com のゾーンファイルにおいて"],
  "answerTexts": ["86400 秒"],
  "answerHints": ["86400"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-017",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下の example.com のゾーンファイルで、MX レコードの記述に誤りがある。この MX レコードのメールサーバー名として実際に解釈される名前を選択してください。\n\n$TTL 3600\n$ORIGIN example.com.\n@    IN SOA ns1 hostmaster ( 2026110201 3600 900 604800 300 )\n@    IN NS  ns1\nns1  IN A   192.0.2.1\nmail IN A   192.0.2.25\n@    IN MX  10 mail.example.com",
  "choices": [{
    "label": "A",
    "text": "example.com."
  }, {
    "label": "B",
    "text": "mail."
  }, {
    "label": "C",
    "text": "mail.example.com.example.com."
  }, {
    "label": "D",
    "text": "mail.example.com.com."
  }, {
    "label": "E",
    "text": "mail.example.com."
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ゾーンファイル内で末尾にドットのない名前は相対名として扱われ、$ORIGIN（ここでは example.com.）が付加されます。そのため mail.example.com は mail.example.com.example.com. と解釈されます。完全修飾名で書く場合は mail.example.com. のように末尾にドットを付けるか、相対名で mail とだけ書く必要があります。",
  "answerKeys": ["以下の example.com のゾーンファイルで"],
  "answerTexts": ["mail.example.com.example.com."],
  "answerHints": ["mail.example.com.example"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-018",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下の SOA レコードで、スレーブサーバーがマスターサーバーにシリアル番号を確認しに行く間隔を示すものを選択してください。\n\n@ IN SOA ns1.example.com. hostmaster.example.com. (\n      2026110201 ; (1)\n      10800      ; (2)\n      3600       ; (3)\n      1209600    ; (4)\n      3600 )     ; (5)",
  "choices": [{
    "label": "A",
    "text": "(4) の 1209600 秒"
  }, {
    "label": "B",
    "text": "(2) の 10800 秒"
  }, {
    "label": "C",
    "text": "(5) の 3600 秒"
  }, {
    "label": "D",
    "text": "(1) の 2026110201"
  }, {
    "label": "E",
    "text": "(3) の 3600 秒"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SOA のフィールドは順にシリアル、refresh、retry、expire、minimum（否定応答キャッシュ時間）です。スレーブがマスターの SOA を確認する間隔は 2 番目の refresh（10800 秒）です。3 番目の retry は確認に失敗した場合の再試行間隔、4 番目の expire はマスターと通信できないままゾーンを保持し続ける期限です。",
  "answerKeys": ["以下の SOA"],
  "answerTexts": ["(2) の 10800 秒"],
  "answerHints": ["(2"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-019",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "マスター DNS サーバーが故障し、スレーブサーバーはゾーン転送もシリアル確認もできない状態が続いている。スレーブがそのゾーンについての応答を停止するまでの時間を決める SOA のフィールドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "minimum"
  }, {
    "label": "B",
    "text": "retry"
  }, {
    "label": "C",
    "text": "refresh"
  }, {
    "label": "D",
    "text": "expire"
  }, {
    "label": "E",
    "text": "serial"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "スレーブは expire で指定された時間マスターと通信できないと、保持しているゾーンデータを無効とみなし、そのゾーンについて応答しなくなります。refresh はシリアル確認の間隔、retry は確認失敗時の再試行間隔です。minimum は否定応答をキャッシュする時間で、serial はゾーンのバージョン番号です。",
  "answerKeys": ["マスター DNS"],
  "answerTexts": ["expire"],
  "answerHints": ["expire"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-020",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "RFC 2308 以降、SOA レコードの最後のフィールド（minimum）が意味するものとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "スレーブがゾーン転送を行う最小の間隔"
  }, {
    "label": "B",
    "text": "TTL が指定されていないレコードに適用される既定の TTL"
  }, {
    "label": "C",
    "text": "ゾーン内のすべてのレコードに適用される最小の TTL"
  }, {
    "label": "D",
    "text": "スレーブがゾーン転送を再試行する間隔"
  }, {
    "label": "E",
    "text": "存在しない名前（NXDOMAIN）などの否定応答をキャッシュしてよい時間"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "RFC 2308 により、SOA の minimum フィールドは否定応答（NXDOMAIN や NODATA）をキャッシュする時間として使われるようになりました。TTL 未指定のレコードの既定 TTL は $TTL ディレクティブで指定します。再試行間隔は retry フィールドが担います。",
  "answerKeys": ["RFC 2308"],
  "answerTexts": ["存在しない名前（NXDOMAIN）などの否定応答をキャッシュしてよい時間"],
  "answerHints": ["存在しない"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-021",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ゾーンの管理者メールアドレスが hostmaster@example.com である場合、SOA レコードの管理者フィールドの記述として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mailto:hostmaster@example.com"
  }, {
    "label": "B",
    "text": "hostmaster@example.com."
  }, {
    "label": "C",
    "text": "hostmaster@example.com"
  }, {
    "label": "D",
    "text": "hostmaster.example.com."
  }, {
    "label": "E",
    "text": "example.com.hostmaster."
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SOA の管理者フィールドでは、メールアドレスの @ をドットに置き換えて hostmaster.example.com. のように記述します。ゾーンファイルでは @ が $ORIGIN を表す特別な記号であるため、メールアドレスをそのまま書くことはできません。また、末尾のドットがないと $ORIGIN が付加されてしまいます。",
  "answerKeys": ["ゾーンの"],
  "answerTexts": ["hostmaster.example.com."],
  "answerHints": ["hostmaster.example"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-022",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "マスターサーバーでゾーンファイルに A レコードを追加し、rndc reload を実行した。マスターに問い合わせると新しいレコードが返るが、スレーブでは数時間経っても反映されない。最も可能性の高い原因を選択してください。",
  "choices": [{
    "label": "A",
    "text": "スレーブで rndc flush を実行していない"
  }, {
    "label": "B",
    "text": "$TTL の値を変更していない"
  }, {
    "label": "C",
    "text": "SOA のシリアル番号を増やしていない"
  }, {
    "label": "D",
    "text": "スレーブで named-checkzone を実行していない"
  }, {
    "label": "E",
    "text": "マスターで allow-query を設定していない"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "スレーブはマスターの SOA のシリアル番号が自身の保持する値より大きい場合にのみゾーン転送を行います。ゾーンを変更してもシリアル番号を増やさなければ、NOTIFY を受けても refresh を迎えてもスレーブは転送しません。rndc flush はキャッシュの消去であり、スレーブが保持する権威ゾーンのデータには影響しません。",
  "answerKeys": ["マスターサーバーでゾーンファイル"],
  "answerTexts": ["SOA のシリアル番号を増やしていない"],
  "answerHints": ["SOA"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-023",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下の MX レコードが定義されている。example.com 宛てのメールを送信する MTA が最初に配送を試みるサーバーを選択してください。\n\nexample.com.  IN MX 20 mx2.example.com.\nexample.com.  IN MX 10 mx1.example.com.\nexample.com.  IN MX 30 mx3.example.com.",
  "choices": [{
    "label": "A",
    "text": "mx1.example.com"
  }, {
    "label": "B",
    "text": "mx2.example.com（ゾーンファイルで最初に記述されているため）"
  }, {
    "label": "C",
    "text": "3台からランダムに選ばれる"
  }, {
    "label": "D",
    "text": "mx3.example.com"
  }, {
    "label": "E",
    "text": "example.com の A レコードが示すホスト"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "MX レコードのプリファレンス値は小さいほど優先度が高く、送信側 MTA はまず値 10 の mx1.example.com に配送を試みます。配送できない場合は 20、30 の順に試行します。ゾーンファイル内の記述順は優先度に影響しません。",
  "answerKeys": ["以下の MX"],
  "answerTexts": ["mx1.example.com"],
  "answerHints": ["mx1"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-024",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "CNAME レコードに関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "CNAME の参照先は同じゾーン内の名前でなければならない"
  }, {
    "label": "B",
    "text": "ゾーンの頂点（@）には SOA と NS が必要なため、CNAME を定義できない"
  }, {
    "label": "C",
    "text": "CNAME レコードを持つ名前には、A や MX などほかの種類のレコードを同時に定義できない"
  }, {
    "label": "D",
    "text": "CNAME レコードは逆引きゾーンでのみ使用できる"
  }, {
    "label": "E",
    "text": "CNAME レコードの右辺には IP アドレスを直接記述する"
  }],
  "answer": ["B", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "CNAME は別名を正規名に対応付けるレコードで、CNAME を持つ名前にはほかの種類のレコードを共存させられません。そのため、SOA と NS が必須のゾーン頂点には CNAME を置けません。右辺には IP アドレスではなくホスト名を記述し、参照先は他のゾーンの名前でも構いません。",
  "answerKeys": ["CNAME"],
  "answerTexts": ["ゾーンの頂点（@）には SOA と NS が必要なため、CNAME を定義できない", "CNAME レコードを持つ名前には、A や MX などほかの種類のレコードを同時に定義できない"],
  "answerHints": ["ゾーン", "CNAME レコードを"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-025",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "ネットワーク 192.168.10.0/24 の逆引きゾーンを named.conf に定義する。zone 文に指定するゾーン名を記述してください（引用符と末尾のドットは不要）。",
  "choices": [],
  "answer": ["10.168.192.in-addr.arpa"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "IPv4 の逆引きゾーンは、ネットワーク部のオクテットを逆順に並べて in-addr.arpa を付けた名前になります。192.168.10.0/24 であれば 10.168.192.in-addr.arpa です。このゾーン内では、ホスト部（例: 25）をラベルとして PTR レコードを記述します。",
  "answerKeys": ["ネットワーク 192"],
  "answerTexts": ["10.168.192.in-addr.arpa"],
  "answerHints": ["10.168.192.in-addr.arpa"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-026",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "逆引きゾーン 10.168.192.in-addr.arpa のゾーンファイルで、192.168.10.25 を mail.example.com に対応付けるレコードとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mail.example.com. IN PTR 25"
  }, {
    "label": "B",
    "text": "25 IN PTR mail.example.com."
  }, {
    "label": "C",
    "text": "25 IN PTR mail.example.com"
  }, {
    "label": "D",
    "text": "192.168.10.25 IN PTR mail.example.com."
  }, {
    "label": "E",
    "text": "25 IN A mail.example.com."
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "逆引きゾーンでは、ホスト部の 25 を相対名とし、PTR レコードの右辺に末尾ドット付きの完全修飾名を記述します。右辺の末尾にドットがないと mail.example.com.10.168.192.in-addr.arpa. と解釈されます。左辺に 192.168.10.25 と書くと相対名としてゾーン名が付加されてしまい、正しい逆引き名になりません。",
  "answerKeys": ["逆引きゾーン"],
  "answerTexts": ["25 IN PTR mail.example.com."],
  "answerHints": ["25 IN PTR mail.example.com."],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-027",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "IPv6 と DNS に関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "IPv6 の逆引きゾーンには PTR ではなく AAAA レコードを記述する"
  }, {
    "label": "B",
    "text": "IPv6 の逆引きには、現在も ip6.int ドメインが標準として使われる"
  }, {
    "label": "C",
    "text": "IPv6 の逆引きでは、ip6.arpa ドメインの下にアドレスを 4 ビット（ニブル）単位で逆順に並べた名前で PTR レコードを定義する"
  }, {
    "label": "D",
    "text": "IPv6 アドレスの正引きには AAAA レコードを使用する"
  }, {
    "label": "E",
    "text": "IPv6 アドレスの正引きには、A レコードに IPv6 アドレスをそのまま記述する"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "IPv6 アドレスの正引きには AAAA レコードを使い、A レコードは IPv4 専用です。逆引きは ip6.arpa ドメインの下で、16 進数 1 桁ずつを逆順にドット区切りで並べた名前に PTR レコードを定義します。ip6.int は廃止されたドメインです。",
  "answerKeys": ["IPv6 と"],
  "answerTexts": ["IPv6 の逆引きでは、ip6.arpa ドメインの下にアドレスを 4 ビット（ニブル）単位で逆順に並べた名前で PTR レコードを定義する", "IPv6 アドレスの正引きには AAAA レコードを使用する"],
  "answerHints": ["IPv6 の逆引きでは", "IPv6 アドレスの正引きには AAAA"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-028",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下の SRV レコードにおいて、389 が示すものを選択してください。\n\n_ldap._tcp.example.com. 3600 IN SRV 10 60 389 ldap1.example.com.",
  "choices": [{
    "label": "A",
    "text": "重み（weight）"
  }, {
    "label": "B",
    "text": "プロトコル番号"
  }, {
    "label": "C",
    "text": "優先度（priority）"
  }, {
    "label": "D",
    "text": "TTL"
  }, {
    "label": "E",
    "text": "サービスが待ち受けるポート番号"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SRV レコードの RDATA は、優先度、重み、ポート番号、ターゲットホストの順に記述します。この例では優先度 10、重み 60、ポート 389 で ldap1.example.com が LDAP サービスを提供していることを示します。TTL はクラス IN の前にある 3600 です。",
  "answerKeys": ["以下の SRV"],
  "answerTexts": ["サービスが待ち受けるポート番号"],
  "answerHints": ["サービス"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-029",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "権威 DNS サーバーで提供するゾーンについて、ゾーンの頂点（@）に必ず定義しなければならないレコードタイプを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "MX"
  }, {
    "label": "B",
    "text": "NS"
  }, {
    "label": "C",
    "text": "TXT"
  }, {
    "label": "D",
    "text": "A"
  }, {
    "label": "E",
    "text": "SOA"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ゾーンの頂点には、ゾーンの管理情報を示す SOA レコードと、ゾーンの権威サーバーを示す NS レコードが必須です。MX、A、TXT は必要に応じて定義するもので、なくてもゾーンは読み込まれます。",
  "answerKeys": ["権威"],
  "answerTexts": ["NS", "SOA"],
  "answerHints": ["NS", "SOA"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-030",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ゾーンファイル /var/named/example.com.zone を example.com ゾーンとして構文チェックするコマンドとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "named-checkconf example.com /var/named/example.com.zone"
  }, {
    "label": "B",
    "text": "dig -f /var/named/example.com.zone example.com"
  }, {
    "label": "C",
    "text": "rndc checkzone example.com"
  }, {
    "label": "D",
    "text": "named-checkzone example.com /var/named/example.com.zone"
  }, {
    "label": "E",
    "text": "named-checkzone /var/named/example.com.zone example.com"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "named-checkzone はゾーン名、ゾーンファイルの順に引数を指定します。ゾーン名は相対名の補完や SOA の検査に使われるため、ファイルと順序を逆にすると正しく検査できません。named-checkconf は named.conf の検査コマンドであり、rndc に checkzone というサブコマンドはありません。",
  "answerKeys": ["ゾーンファイル /"],
  "answerTexts": ["named-checkzone example.com /var/named/example.com.zone"],
  "answerHints": ["named-checkzone example"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-031",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "スレーブサーバーを構築する前に、マスターサーバー ns1.example.com から example.com のゾーン転送ができるかを手動で確認したい。実行するコマンドとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "dig @ns1.example.com example.com NOTIFY"
  }, {
    "label": "B",
    "text": "dig @ns1.example.com example.com AXFR"
  }, {
    "label": "C",
    "text": "host -t SOA example.com ns1.example.com"
  }, {
    "label": "D",
    "text": "dig @example.com ns1.example.com SOA"
  }, {
    "label": "E",
    "text": "dig ns1.example.com example.com -x"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dig で @ の後に問い合わせ先サーバーを、タイプに AXFR を指定すると、ゾーン全体の転送を要求できます。転送が許可されていなければ「Transfer failed.」と表示されます。host -t SOA は SOA レコードを問い合わせるだけで、ゾーン転送の可否は確認できません。-x は逆引きのオプションです。",
  "answerKeys": ["スレーブサーバーを"],
  "answerTexts": ["dig @ns1.example.com example.com AXFR"],
  "answerHints": ["dig @ns1.example.com example.com AXFR"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-032",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "host コマンドで example.com の MX レコードを問い合わせるコマンドとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "host -t mx example.com"
  }, {
    "label": "B",
    "text": "host -q mx example.com"
  }, {
    "label": "C",
    "text": "host --type=mx example.com"
  }, {
    "label": "D",
    "text": "host example.com/mx"
  }, {
    "label": "E",
    "text": "host -x mx example.com"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "host コマンドでレコードタイプを指定するには -t オプションを使い、host -t mx example.com のように実行します。host は IP アドレスを引数に与えると自動的に逆引きを行うため、dig のような -x オプションはありません。--type のようなロングオプションも用意されていません。",
  "answerKeys": ["host コマンド"],
  "answerTexts": ["host -t mx example.com"],
  "answerHints": ["host -t"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-033",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "スレーブサーバーの named.conf に以下のゾーンを定義する。マスターサーバーのアドレスを指定するため、空欄に入るものを選択してください。\n\nzone \"example.com\" {\n    type slave;\n    ______ { 192.0.2.1; };\n    file \"slaves/example.com.zone\";\n};",
  "choices": [{
    "label": "A",
    "text": "forwarders"
  }, {
    "label": "B",
    "text": "primary-server"
  }, {
    "label": "C",
    "text": "masters"
  }, {
    "label": "D",
    "text": "allow-transfer"
  }, {
    "label": "E",
    "text": "also-notify"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "スレーブゾーンでは masters でゾーン転送元のマスターサーバーを指定し、転送したデータは file で指定したファイルに保存されます（新しいバージョンの BIND では同義の primaries も使えます）。forwarders は問い合わせの転送先、allow-transfer はゾーン転送を許可する相手、also-notify は NOTIFY の追加送信先を指定するものです。",
  "answerKeys": ["スレーブサーバーの"],
  "answerTexts": ["masters"],
  "answerHints": ["masters"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-034",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "マスターサーバーで、NS レコードに記載されていないスレーブサーバー 192.0.2.53 にも、ゾーン変更時の NOTIFY を送信したい。マスター側の zone 文に追加する設定として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "forwarders { 192.0.2.53; };"
  }, {
    "label": "B",
    "text": "notify-source 192.0.2.53;"
  }, {
    "label": "C",
    "text": "masters { 192.0.2.53; };"
  }, {
    "label": "D",
    "text": "allow-notify { 192.0.2.53; };"
  }, {
    "label": "E",
    "text": "also-notify { 192.0.2.53; };"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "マスターは既定でゾーンの NS レコードに記載されたサーバーに NOTIFY を送信し、それ以外のサーバーにも送る場合は also-notify で指定します。notify-source は NOTIFY を送信する際の送信元アドレスの指定です。allow-notify はスレーブ側で NOTIFY を受け付ける相手を指定するものです。",
  "answerKeys": ["マスターサーバーで、NS"],
  "answerTexts": ["also-notify { 192.0.2.53; };"],
  "answerHints": ["also"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-035",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下の dig の出力において、flags に含まれる aa が示すことを選択してください。\n\n; <<>> DiG 9.18.28 <<>> @ns1.example.com www.example.com A\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 41237\n;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1\n\n;; ANSWER SECTION:\nwww.example.com.      3600   IN    A    192.0.2.10",
  "choices": [{
    "label": "A",
    "text": "応答が UDP の長さ制限により切り詰められた"
  }, {
    "label": "B",
    "text": "DNSSEC の検証に成功した応答である"
  }, {
    "label": "C",
    "text": "応答したサーバーで再帰問い合わせが利用可能である"
  }, {
    "label": "D",
    "text": "応答したサーバーが、このゾーンの権威サーバーである"
  }, {
    "label": "E",
    "text": "キャッシュから返された応答である"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "aa（Authoritative Answer）フラグは、応答したサーバーがそのゾーンの権威を持つことを示します。DNSSEC 検証の成功は ad、再帰問い合わせが利用可能であることは ra、応答の切り詰めは tc フラグで示されます。キャッシュからの応答には aa は付きません。",
  "answerKeys": ["以下の dig"],
  "answerTexts": ["応答したサーバーが、このゾーンの権威サーバーである"],
  "answerHints": ["応答したサーバーが"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-036",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "セキュリティ強化のため、named を /var/named/chroot に chroot して起動したい。named コマンドで chroot ディレクトリを指定するオプションとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-u /var/named/chroot"
  }, {
    "label": "B",
    "text": "-c /var/named/chroot"
  }, {
    "label": "C",
    "text": "-t /var/named/chroot"
  }, {
    "label": "D",
    "text": "-f /var/named/chroot"
  }, {
    "label": "E",
    "text": "-d /var/named/chroot"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "named の -t オプションで chroot するディレクトリを指定します。-u は権限を落として動作するユーザー、-c は設定ファイルのパス、-d はデバッグレベルの指定です。-f はフォアグラウンドで実行するオプションで、引数は取りません。",
  "answerKeys": ["セキュリティ強化のため"],
  "answerTexts": ["-t /var/named/chroot"],
  "answerHints": ["-t"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-037",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "named を以下のコマンドで起動した。named が実際に読み込む設定ファイルのパスを選択してください。\n\n# named -u named -t /var/named/chroot -c /etc/named.conf",
  "choices": [{
    "label": "A",
    "text": "/etc/named.conf"
  }, {
    "label": "B",
    "text": "/var/named/chroot/etc/named.conf"
  }, {
    "label": "C",
    "text": "/etc/named/chroot/named.conf"
  }, {
    "label": "D",
    "text": "/var/named/chroot/named.conf"
  }, {
    "label": "E",
    "text": "/var/named/etc/named.conf"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-t を指定すると、named はコマンドライン引数を処理した後、設定ファイルを読み込む前に chroot します。そのため -c /etc/named.conf は chroot ディレクトリからの相対パスとなり、実際には /var/named/chroot/etc/named.conf が読み込まれます。ゾーンファイルなど設定内で指定するパスも同様に chroot 内のパスとして扱われます。",
  "answerKeys": ["named を以下の"],
  "answerTexts": ["/var/named/chroot/etc/named.conf"],
  "answerHints": ["/var/named/chroot/etc"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-038",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "named を -u named オプション付きで起動した場合の説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "特権ポート 53 でのソケット作成など特権が必要な処理の後、named ユーザーの権限に切り替えて動作する"
  }, {
    "label": "B",
    "text": "named ユーザーのホームディレクトリに chroot して動作する"
  }, {
    "label": "C",
    "text": "rndc による接続を named ユーザーからのみ許可する"
  }, {
    "label": "D",
    "text": "named ユーザーが所有するゾーンファイルだけを読み込む"
  }, {
    "label": "E",
    "text": "named ユーザーとしてログインしているクライアントからの問い合わせだけを受け付ける"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-u オプションを指定すると、named は 1024 未満のポートでのソケット作成など root 権限が必要な処理を終えた後、指定ユーザーの権限に切り替えます。これにより、脆弱性を突かれた場合の被害を限定できます。chroot は -t オプションで別途指定するもので、-u は問い合わせ元やファイルの選択には関係しません。",
  "answerKeys": ["named を -"],
  "answerTexts": ["特権ポート 53 でのソケット作成など特権が必要な処理の後、named ユーザーの権限に切り替えて動作する"],
  "answerHints": ["特権"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-039",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "マスターサーバー ns1.example.com に対して dig @ns1.example.com example.com AXFR を実行すると、インターネット上の任意のホストからゾーン全体を取得できてしまう。スレーブサーバー 192.0.2.2 にだけゾーン転送を許可する設定として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "allow-query { 192.0.2.2; };"
  }, {
    "label": "B",
    "text": "allow-notify { 192.0.2.2; };"
  }, {
    "label": "C",
    "text": "masters { 192.0.2.2; };"
  }, {
    "label": "D",
    "text": "also-notify { 192.0.2.2; };"
  }, {
    "label": "E",
    "text": "allow-transfer { 192.0.2.2; };"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "allow-transfer はゾーン転送（AXFR/IXFR）を許可するホストを制限するディレクティブで、options または zone 文に記述します。allow-query に変更すると通常の問い合わせまでスレーブ以外から拒否されてしまいます。also-notify と allow-notify は NOTIFY の送受信に関する設定で、転送の制限にはなりません。",
  "answerKeys": ["マスターサーバー ns1"],
  "answerTexts": ["allow-transfer { 192.0.2.2; };"],
  "answerHints": ["allow-transfer"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-040",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "マスターサーバーで、TSIG 鍵 xfer-key で署名されたゾーン転送要求だけを許可したい。空欄に入る設定として正しいものを選択してください。\n\nkey \"xfer-key\" {\n    algorithm hmac-sha256;\n    secret \"c2VjcmVOLWtleS1mb3ItZXhhbXBsZQ==\";\n};\nzone \"example.com\" {\n    type master;\n    file \"example.com.zone\";\n    ______\n};",
  "choices": [{
    "label": "A",
    "text": "allow-transfer { tsig \"xfer-key\"; };"
  }, {
    "label": "B",
    "text": "allow-transfer { key xfer-key; };"
  }, {
    "label": "C",
    "text": "allow-transfer { xfer-key; };"
  }, {
    "label": "D",
    "text": "keys { xfer-key; };"
  }, {
    "label": "E",
    "text": "transfer-key \"xfer-key\";"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "アドレス一致リストで TSIG 鍵を指定するには key キーワードを付け、allow-transfer { key xfer-key; }; のように記述します。key を付けずに名前だけ書くと ACL 名として解釈され、未定義エラーになります。keys { ... }; はスレーブ側の server 文で、マスターとの通信に使う鍵を指定する際に使います。",
  "answerKeys": ["マスターサーバーで、TSIG"],
  "answerTexts": ["allow-transfer { key xfer-key; };"],
  "answerHints": ["allow-transfer { key"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-041",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "マスターとスレーブ間のゾーン転送に TSIG を設定したところ、スレーブのログに「tsig verify failure (BADTIME)」が記録され、ゾーン転送が失敗した。鍵名、アルゴリズム、共有鍵は両サーバーで一致している。最も可能性の高い原因を選択してください。",
  "choices": [{
    "label": "A",
    "text": "スレーブで recursion が有効になっている"
  }, {
    "label": "B",
    "text": "マスターで allow-query が設定されていない"
  }, {
    "label": "C",
    "text": "マスターとスレーブのシステム時刻が大きくずれている"
  }, {
    "label": "D",
    "text": "SOA の refresh 値が短すぎる"
  }, {
    "label": "E",
    "text": "ゾーンが DNSSEC で署名されていない"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TSIG の署名にはタイムスタンプが含まれ、許容誤差（既定で 300 秒）を超えて時刻がずれていると BADTIME エラーになります。TSIG を使うサーバー間では NTP などで時刻を同期しておく必要があります。鍵名が一致しない場合は BADKEY、共有鍵が異なる場合は BADSIG となります。",
  "answerKeys": ["マスターと"],
  "answerTexts": ["マスターとスレーブのシステム時刻が大きくずれている"],
  "answerHints": ["マスターと"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-042",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "dnssec-keygen コマンドで、鍵署名鍵（KSK）を生成するために指定するオプションとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-K KSK"
  }, {
    "label": "B",
    "text": "-n KSK"
  }, {
    "label": "C",
    "text": "-k KSK"
  }, {
    "label": "D",
    "text": "-t KSK"
  }, {
    "label": "E",
    "text": "-f KSK"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dnssec-keygen では -f KSK を指定すると、DNSKEY の SEP フラグが立った KSK が生成されます（例: dnssec-keygen -a RSASHA256 -b 2048 -f KSK example.com）。-f を指定しない場合はゾーン署名鍵（ZSK）が生成されます。-K は鍵ファイルを出力するディレクトリ、-n は名前の種類（ZONE、HOST など）の指定です。",
  "answerKeys": ["dnssec-"],
  "answerTexts": ["-f KSK"],
  "answerHints": ["-f"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-043",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下のコマンドを実行した結果、2つのファイルが生成された。これらのファイルの説明として正しいものを選択してください。\n\n$ dnssec-keygen -a RSASHA256 -b 2048 -n ZONE example.com\nKexample.com.+008+24680",
  "choices": [{
    "label": "A",
    "text": "ファイル名の 008 は鍵の有効日数、24680 は鍵のビット長を表す"
  }, {
    "label": "B",
    "text": "Kexample.com.+008+24680.key には DS レコード、Kexample.com.+008+24680.private には RRSIG レコードが格納される"
  }, {
    "label": "C",
    "text": "Kexample.com.+008+24680.key は rndc 用、Kexample.com.+008+24680.private は TSIG 用の鍵である"
  }, {
    "label": "D",
    "text": "Kexample.com.+008+24680.key には公開鍵（DNSKEY レコード）、Kexample.com.+008+24680.private には秘密鍵が格納される"
  }, {
    "label": "E",
    "text": "Kexample.com.+008+24680.key には秘密鍵、Kexample.com.+008+24680.private には公開鍵が格納される"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dnssec-keygen は、公開鍵を DNSKEY レコードの形式で格納した .key ファイルと、秘密鍵を格納した .private ファイルを生成します。.key の内容はゾーンファイルに $INCLUDE などで取り込み、.private は署名に使うため厳重に管理します。ファイル名の 008 はアルゴリズム番号（RSASHA256）、24680 は鍵タグです。",
  "answerKeys": ["以下のコマンドを"],
  "answerTexts": ["Kexample.com.+008+24680.key には公開鍵（DNSKEY レコード）、Kexample.com.+008+24680.private には秘密鍵が格納される"],
  "answerHints": ["Kexample.com.+008+24680.key には公開鍵"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-044",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "以下のコマンドで example.com ゾーンに DNSSEC 署名を行った。署名済みゾーンを公開するために named.conf で行うべき変更として正しいものを選択してください。\n\n$ dnssec-signzone -o example.com -k Kexample.com.+008+11111 \\\n    example.com.zone Kexample.com.+008+22222",
  "choices": [{
    "label": "A",
    "text": "zone 文の file を example.com.zone.signed に変更し、ゾーンを再読み込みする"
  }, {
    "label": "B",
    "text": "example.com.zone が署名済みの内容で上書きされるため、変更は不要である"
  }, {
    "label": "C",
    "text": "zone 文の file を Kexample.com.+008+22222.key に変更する"
  }, {
    "label": "D",
    "text": "zone 文の file を dsset-example.com. に変更する"
  }, {
    "label": "E",
    "text": "zone 文に dnssec-signzone yes; を追加する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dnssec-signzone は既定で元のゾーンファイル名に .signed を付けたファイル（example.com.zone.signed）に署名済みゾーンを出力するため、zone 文の file をこのファイルに変更して再読み込みします。-o はゾーンの起点、-k は KSK の指定です。dsset- ファイルは親ゾーンに登録する DS レコードを含むもので、ゾーンデータとして読み込むものではありません。",
  "answerKeys": ["以下のコマンドで"],
  "answerTexts": ["zone 文の file を example.com.zone.signed に変更し、ゾーンを再読み込みする"],
  "answerHints": ["zone 文の file を example"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-045",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "DNSSEC で使用されるリソースレコードの説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "RRSIG レコードには、ゾーンの秘密鍵が格納される"
  }, {
    "label": "B",
    "text": "DS レコードは子ゾーンの KSK（DNSKEY）のハッシュ値を含み、親ゾーンに登録される"
  }, {
    "label": "C",
    "text": "DNSKEY レコードは親ゾーンにのみ置かれ、子ゾーンには置かれない"
  }, {
    "label": "D",
    "text": "DS レコードは、各リソースレコードセットに対する署名である"
  }, {
    "label": "E",
    "text": "NSEC（または NSEC3）レコードは、問い合わせた名前やタイプが存在しないことを証明するために使われる"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "DS レコードは子ゾーンの KSK のハッシュ値で、親ゾーンに登録されることで信頼の連鎖を構成します。NSEC/NSEC3 は存在しない名前やタイプを署名付きで証明する（認証された不在証明）ために使われます。RRSIG はレコードセットに対する署名で秘密鍵そのものは含まず、DNSKEY は自ゾーンの公開鍵として子ゾーン自身に置かれます。",
  "answerKeys": ["DNSSEC で使用される"],
  "answerTexts": ["DS レコードは子ゾーンの KSK（DNSKEY）のハッシュ値を含み、親ゾーンに登録される", "NSEC（または NSEC3）レコードは、問い合わせた名前やタイプが存在しないことを証明するために使われる"],
  "answerHints": ["DS レコードは子", "NSEC"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-046",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "BIND をキャッシュ DNS サーバーとして運用している。組み込みのルートトラストアンカーを使って DNSSEC 検証を有効にする options の設定として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "trust-anchor auto;"
  }, {
    "label": "B",
    "text": "validate-dnssec root;"
  }, {
    "label": "C",
    "text": "dnssec-signzone yes;"
  }, {
    "label": "D",
    "text": "dnssec-enable sign;"
  }, {
    "label": "E",
    "text": "dnssec-validation auto;"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dnssec-validation auto; を指定すると、BIND に組み込まれたルートゾーンの KSK をトラストアンカーとして DNSSEC 検証を行い、その鍵は RFC 5011 に従って自動更新されます。dnssec-validation yes; の場合は、トラストアンカーを設定ファイルで明示的に指定する必要があります。dnssec-signzone は署名用のコマンドであり、named.conf のディレクティブではありません。",
  "answerKeys": ["BIND を"],
  "answerTexts": ["dnssec-validation auto;"],
  "answerHints": ["dnssec-validation"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-047",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "DNSSEC で一般的に使われる KSK（鍵署名鍵）と ZSK（ゾーン署名鍵）の役割の説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ZSK はゾーンの DNSKEY レコードセットに署名し、KSK はゾーン内のその他のレコードセットに署名する"
  }, {
    "label": "B",
    "text": "KSK は TSIG によるゾーン転送の認証に使い、ZSK は問い合わせの暗号化に使う"
  }, {
    "label": "C",
    "text": "KSK は親ゾーンが保持する秘密鍵で、ZSK は子ゾーンが保持する秘密鍵である"
  }, {
    "label": "D",
    "text": "KSK はゾーンの DNSKEY レコードセットに署名し、ZSK はゾーン内のその他のレコードセットに署名する"
  }, {
    "label": "E",
    "text": "KSK と ZSK は、同じ鍵ペアの公開鍵と秘密鍵をそれぞれ指す"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "KSK はゾーンの DNSKEY レコードセットに署名し、そのハッシュが DS レコードとして親ゾーンに登録されます。ZSK はゾーン内の通常のレコードセットに署名します。役割を分けることで、親ゾーンとの調整が必要な KSK を変更せずに ZSK を頻繁に更新できます。DNSSEC は応答の真正性を保証するもので、問い合わせの暗号化は行いません。",
  "answerKeys": ["DNSSEC で一般的に"],
  "answerTexts": ["KSK はゾーンの DNSKEY レコードセットに署名し、ZSK はゾーン内のその他のレコードセットに署名する"],
  "answerHints": ["KSK はゾーン"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-048",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "DANE を利用して、www.example.com の HTTPS（TCP 443 番ポート）サーバー証明書の情報を DNS に登録したい。TLSA レコードの所有者名として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "_tcp._443.www.example.com."
  }, {
    "label": "B",
    "text": "_https._tcp.www.example.com."
  }, {
    "label": "C",
    "text": "_443._tcp.www.example.com."
  }, {
    "label": "D",
    "text": "www.example.com._443._tcp."
  }, {
    "label": "E",
    "text": "_tlsa.www.example.com."
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TLSA レコードの所有者名は「_ポート番号._プロトコル.ホスト名」の形式で、この場合は _443._tcp.www.example.com. です。SRV レコードとは異なり、サービス名ではなくポート番号を使います。DANE ではレコードの真正性が前提となるため、ゾーンが DNSSEC で署名されている必要があります。",
  "answerKeys": ["DANE を"],
  "answerTexts": ["_443._tcp.www.example.com."],
  "answerHints": ["_443"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-049",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "split DNS を実現するため、以下のように view を設定した。クライアント 192.168.5.20 が www.example.com を問い合わせた場合の動作として正しいものを選択してください。\n\nacl internal { 192.168.0.0/16; };\nview \"internal\" {\n    match-clients { internal; };\n    recursion yes;\n    zone \"example.com\" { type master; file \"int/example.com.zone\"; };\n};\nview \"external\" {\n    match-clients { any; };\n    recursion no;\n    zone \"example.com\" { type master; file \"ext/example.com.zone\"; };\n};",
  "choices": [{
    "label": "A",
    "text": "internal ビューが適用され、int/example.com.zone の内容で応答する"
  }, {
    "label": "B",
    "text": "external ビューが適用される（any のほうが広い範囲に一致するため）"
  }, {
    "label": "C",
    "text": "後に定義された external ビューが優先される"
  }, {
    "label": "D",
    "text": "両方のビューに一致するため、named はエラーを返す"
  }, {
    "label": "E",
    "text": "両方のゾーンファイルの内容をマージして応答する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "view は named.conf に記述された順に評価され、match-clients に最初に一致した view が適用されます。192.168.5.20 は acl internal の 192.168.0.0/16 に含まれるため、先に定義された internal ビューのゾーンで応答します。any に一致するのは internal に該当しないクライアントだけになります。",
  "answerKeys": ["split"],
  "answerTexts": ["internal ビューが適用され、int/example.com.zone の内容で応答する"],
  "answerHints": ["internal"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-050",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "named.conf で view を使用する場合の説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "match-clients により、クライアントの送信元アドレスに応じて適用する view を選択できる"
  }, {
    "label": "B",
    "text": "1つの view には、ゾーンを1つしか定義できない"
  }, {
    "label": "C",
    "text": "view の評価は view 名のアルファベット順に行われる"
  }, {
    "label": "D",
    "text": "view を使うには、named をクライアントの種類ごとに別プロセスで起動する必要がある"
  }, {
    "label": "E",
    "text": "view を1つでも定義した場合、すべての zone 文をいずれかの view の中に記述しなければならない"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "view を使う場合、zone 文はすべて view の内側に記述する必要があり、view の外に zone 文があるとエラーになります。match-clients で送信元アドレスや TSIG 鍵などに応じて適用する view を選び、同じゾーン名に異なる内容を返す split DNS を 1 つの named プロセスで実現できます。1つの view には複数のゾーンを定義できます。",
  "answerKeys": ["named.conf で"],
  "answerTexts": ["match-clients により、クライアントの送信元アドレスに応じて適用する view を選択できる", "view を1つでも定義した場合、すべての zone 文をいずれかの view の中に記述しなければならない"],
  "answerHints": ["match", "view を1"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-051",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Apache 2.4 で次のアクセス制御を設定しました。この設定の動作として正しいものを選択してください。\n\n<Directory \"/var/www/html/internal\">\n    <RequireAll>\n        Require all granted\n        Require not ip 10.0.0.0/8\n    </RequireAll>\n</Directory>",
  "choices": [{
    "label": "A",
    "text": "Require not は RequireAll 内で使用できないため、構文エラーで起動に失敗する"
  }, {
    "label": "B",
    "text": "10.0.0.0/8 以外のすべてのクライアントからのアクセスを許可する"
  }, {
    "label": "C",
    "text": "10.0.0.0/8 のクライアントからのアクセスのみを許可する"
  }, {
    "label": "D",
    "text": "Require all granted が先に評価されるため、すべてのクライアントを許可する"
  }, {
    "label": "E",
    "text": "すべてのクライアントからのアクセスを拒否する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "RequireAll コンテナ内のディレクティブはすべての条件を満たした場合にのみ許可となります。Require all granted は常に真、Require not ip 10.0.0.0/8 は 10.0.0.0/8 以外で真となるため、結果として 10.0.0.0/8 以外が許可されます。Require は記述順で最初の一致を採用する方式ではなく、Require not は RequireAll 内で正しく使用できます。",
  "answerKeys": ["Apache 2.4 で次のアクセス"],
  "answerTexts": ["10.0.0.0/8 以外のすべてのクライアントからのアクセスを許可する"],
  "answerHints": ["10.0.0.0/8 以外のすべ"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-052",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ポート80で稼働中の Apache を、ポート8080でも同時に待ち受けるようにしたいと考えています。httpd.conf に追加すべき行を選択してください。",
  "choices": [{
    "label": "A",
    "text": "Listen 80,8080"
  }, {
    "label": "B",
    "text": "ListenPort 8080"
  }, {
    "label": "C",
    "text": "Listen 8080"
  }, {
    "label": "D",
    "text": "ServerPort 8080"
  }, {
    "label": "E",
    "text": "Port 8080"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Apache 2.x では待ち受けるポートやアドレスを Listen ディレクティブで指定し、複数ポートで待ち受ける場合は Listen 行を複数記述します。Port ディレクティブは Apache 1.3 までのもので、2.x では使用できません。ListenPort や ServerPort というディレクティブは存在せず、Listen にカンマ区切りで複数ポートを指定することもできません。",
  "answerKeys": ["ポート"],
  "answerTexts": ["Listen 8080"],
  "answerHints": ["Listen 8080"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-053",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "次の設定で、/var/www/html ディレクトリには index.php と default.html のみが存在します。クライアントが http://www.example.com/ にアクセスしたときの動作として正しいものを選択してください。\n\nDocumentRoot \"/var/www/html\"\nDirectoryIndex index.html index.php\n<Directory \"/var/www/html\">\n    Options None\n    Require all granted\n</Directory>",
  "choices": [{
    "label": "A",
    "text": "index.php を返す"
  }, {
    "label": "B",
    "text": "default.html を返す"
  }, {
    "label": "C",
    "text": "ディレクトリ内のファイル一覧を返す"
  }, {
    "label": "D",
    "text": "403 Forbidden を返す"
  }, {
    "label": "E",
    "text": "index.html が存在しないため 404 Not Found を返す"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "DirectoryIndex はディレクトリが要求された際に探すファイル名を列挙した順に試し、最初に見つかったファイルを返します。index.html が存在しないため、次の候補である index.php が返されます。default.html は DirectoryIndex に含まれていないため対象外であり、ファイル一覧の表示は Options Indexes が有効で候補が1つも見つからない場合の動作です。",
  "answerKeys": ["次の設定で"],
  "answerTexts": ["index.php を返す"],
  "answerHints": ["index.php"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-054",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/var/www/html/secret/.htaccess に Basic 認証の設定を記述しましたが、認証が要求されずにページが表示されてしまいます。httpd.conf の該当箇所は次のとおりです。原因として最も適切なものを選択してください。\n\n<Directory \"/var/www/html\">\n    Options FollowSymLinks\n    AllowOverride None\n    Require all granted\n</Directory>",
  "choices": [{
    "label": "A",
    "text": "Options に Indexes が含まれていないため"
  }, {
    "label": "B",
    "text": "Require all granted が .htaccess の設定より常に優先されるため"
  }, {
    "label": "C",
    "text": ".htaccess は DocumentRoot 直下にしか配置できないため"
  }, {
    "label": "D",
    "text": ".htaccess のファイル名は AccessFileName で必ず明示する必要があるため"
  }, {
    "label": "E",
    "text": "AllowOverride None により .htaccess が読み込まれていないため"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "AllowOverride None が指定されたディレクトリでは .htaccess ファイル自体が読み込まれません。認証設定を .htaccess で行うには、AllowOverride AuthConfig（または All）を指定する必要があります。AccessFileName の既定値は .htaccess なので明示は不要で、.htaccess はサブディレクトリにも配置できます。",
  "answerKeys": ["/var/www/html/"],
  "answerTexts": ["AllowOverride None により .htaccess が読み込まれていないため"],
  "answerHints": ["AllowOverride"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-055",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Basic 認証用のパスワードファイルに user1 が登録されていました。管理者が user2 を追加するために次のコマンドを実行したところ、user1 がログインできなくなりました。原因として正しいものを選択してください。\n\n# htpasswd -c /etc/httpd/.htpasswd user2",
  "choices": [{
    "label": "A",
    "text": "-c オプションはパスワードを平文で保存するため"
  }, {
    "label": "B",
    "text": "-c オプションによりパスワードファイルが新規作成され、既存の内容が上書きされたため"
  }, {
    "label": "C",
    "text": "-c オプションは指定ユーザー以外のアカウントをロックするため"
  }, {
    "label": "D",
    "text": "-c オプションは user1 のパスワードを user2 と同じものに変更するため"
  }, {
    "label": "E",
    "text": "htpasswd 実行後に apachectl graceful を実行していないため"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "htpasswd の -c オプションはパスワードファイルを新規作成するもので、既存ファイルがある場合は上書きされ、それまでのユーザー情報が失われます。既存ファイルにユーザーを追加する場合は -c を付けずに実行します。パスワードファイルは認証のたびに参照されるため、ユーザー追加後に Apache の再起動は不要です。",
  "answerKeys": ["Basic"],
  "answerTexts": ["-c オプションによりパスワードファイルが新規作成され、既存の内容が上書きされたため"],
  "answerHints": ["-c オプションにより"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-056",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "Apache で Basic 認証を設定する際に、htpasswd コマンドで作成したパスワードファイルのパスを指定するディレクティブ名を記述してください。\n\nAuthType Basic\nAuthName \"Restricted Area\"\n????????  /etc/httpd/.htpasswd\nRequire valid-user",
  "choices": [],
  "answer": ["AuthUserFile"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "AuthUserFile は mod_authn_file が提供するディレクティブで、ユーザー名とパスワードハッシュを格納したテキストファイルのパスを指定します。グループを使う場合は AuthGroupFile でグループファイルを指定します。AuthName は認証ダイアログに表示されるレルム名です。",
  "answerKeys": ["Apache で Basic"],
  "answerTexts": ["AuthUserFile"],
  "answerHints": ["AuthUserFile"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-057",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Apache 2.4 で次の名前ベースのバーチャルホストを設定しました。クライアントが Host ヘッダーに www.example.org を指定してこのサーバーにアクセスした場合、どのように処理されるかを選択してください。\n\n<VirtualHost *:80>\n    ServerName www.example.com\n    DocumentRoot /var/www/example_com\n</VirtualHost>\n<VirtualHost *:80>\n    ServerName www.example.net\n    DocumentRoot /var/www/example_net\n</VirtualHost>",
  "choices": [{
    "label": "A",
    "text": "メインサーバー設定の DocumentRoot で処理される"
  }, {
    "label": "B",
    "text": "最後に定義された www.example.net のバーチャルホストで処理される"
  }, {
    "label": "C",
    "text": "接続がリセットされ、応答は返されない"
  }, {
    "label": "D",
    "text": "最初に定義された www.example.com のバーチャルホストで処理される"
  }, {
    "label": "E",
    "text": "400 Bad Request が返される"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "名前ベースのバーチャルホストでは、Host ヘッダーがどの ServerName / ServerAlias にも一致しない場合、そのIPアドレスとポートに一致するバーチャルホストのうち設定ファイルで最初に定義されたものがデフォルトとして使われます。*:80 のバーチャルホストが定義されているため、メインサーバー設定には戻りません。そのため、意図しないサイトが表示されないよう、先頭にデフォルト用のバーチャルホストを置く運用がよく行われます。",
  "answerKeys": ["Apache 2.4 で次の名前"],
  "answerTexts": ["最初に定義された www.example.com のバーチャルホストで処理される"],
  "answerHints": ["最初に"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-058",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Apache 2.4 の名前ベースのバーチャルホストに関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "ServerAlias ディレクティブでバーチャルホストに別名を追加できる"
  }, {
    "label": "B",
    "text": "バーチャルホストごとに異なるIPアドレスを割り当てる必要がある"
  }, {
    "label": "C",
    "text": "NameVirtualHost ディレクティブで待ち受けアドレスを宣言しなければ機能しない"
  }, {
    "label": "D",
    "text": "ServerName ディレクティブは <VirtualHost> コンテナ内に記述できない"
  }, {
    "label": "E",
    "text": "クライアントが送信する Host ヘッダーの値によって処理するバーチャルホストが決まる"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "名前ベースのバーチャルホストは HTTP リクエストの Host ヘッダーを ServerName や ServerAlias と照合して処理先を決定するため、1つのIPアドレスで複数サイトを運用できます。バーチャルホストごとに異なるIPアドレスを使うのはIPベースのバーチャルホストです。Apache 2.4 では NameVirtualHost は不要（非推奨）となっており、ServerName は <VirtualHost> 内に記述するのが通常の使い方です。",
  "answerKeys": ["Apache 2.4 の"],
  "answerTexts": ["ServerAlias ディレクティブでバーチャルホストに別名を追加できる", "クライアントが送信する Host ヘッダーの値によって処理するバーチャルホストが決まる"],
  "answerHints": ["ServerAlias", "クライアント"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-059",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "Debian/Ubuntu 系の Apache で、/etc/apache2/sites-available/example.conf に記述したサイト設定を有効化し、/etc/apache2/sites-enabled/ にシンボリックリンクを作成するコマンド名を記述してください。\n\n# ???????? example",
  "choices": [],
  "answer": ["a2ensite"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "a2ensite は sites-available にあるサイト設定ファイルへのシンボリックリンクを sites-enabled に作成して有効化するコマンドで、無効化には a2dissite を使います。モジュールの有効化・無効化には a2enmod / a2dismod を使用します。変更を反映するには Apache のリロードが必要です。",
  "answerKeys": ["Debian/"],
  "answerTexts": ["a2ensite"],
  "answerHints": ["a2ensite"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-060",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Red Hat 系の Apache で mod_rewrite を読み込むための記述として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "LoadModule modules/mod_rewrite.so rewrite_module"
  }, {
    "label": "B",
    "text": "LoadModule rewrite_module modules/mod_rewrite.so"
  }, {
    "label": "C",
    "text": "AddModule rewrite_module modules/mod_rewrite.so"
  }, {
    "label": "D",
    "text": "Include modules/mod_rewrite.so"
  }, {
    "label": "E",
    "text": "LoadModule mod_rewrite.so"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LoadModule の書式は「LoadModule モジュール識別子 ファイルパス」で、相対パスは ServerRoot を基準に解釈されます。AddModule は Apache 1.3 の古いディレクティブで 2.x には存在しません。Include は設定ファイルを読み込むディレクティブで、共有オブジェクトの読み込みには使えません。",
  "answerKeys": ["Red Hat 系の Apache"],
  "answerTexts": ["LoadModule rewrite_module modules/mod_rewrite.so"],
  "answerHints": ["LoadModule rewrite_module"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-061",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "スレッドセーフでない PHP 拡張を含む mod_php を Apache で利用する場合に選択すべき MPM として、最も適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "event"
  }, {
    "label": "B",
    "text": "winnt"
  }, {
    "label": "C",
    "text": "worker"
  }, {
    "label": "D",
    "text": "threadpool"
  }, {
    "label": "E",
    "text": "prefork"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "prefork はスレッドを使わず、1つの子プロセスが1つの接続を処理する MPM で、スレッドセーフでないライブラリと組み合わせても安全に動作します。worker と event はマルチスレッドで動作するため、スレッドセーフでない mod_php との組み合わせには適しません。winnt は Windows 用の MPM です。",
  "answerKeys": ["スレッドセーフ"],
  "answerTexts": ["prefork"],
  "answerHints": ["prefork"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-062",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Apache を再起動する前に、設定ファイルの構文チェックを行うコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "apachectl graceful-stop"
  }, {
    "label": "B",
    "text": "apachectl lint"
  }, {
    "label": "C",
    "text": "apachectl configtest"
  }, {
    "label": "D",
    "text": "apachectl -t"
  }, {
    "label": "E",
    "text": "apachectl status"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "apachectl configtest と apachectl -t はどちらも設定ファイルを解析して構文エラーの有無を確認し、問題がなければ Syntax OK と表示します。apachectl status は mod_status を利用してサーバーの稼働状況を表示するもので、構文チェックは行いません。graceful-stop は処理中のリクエストを完了させてから停止するサブコマンドで、lint というサブコマンドは存在しません。",
  "answerKeys": ["Apache を"],
  "answerTexts": ["apachectl configtest", "apachectl -t"],
  "answerHints": ["apachectl configtest", "apachectl -t"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-063",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Apache の設定に次の LogFormat が定義されています。%>s によってアクセスログに記録される内容として正しいものを選択してください。\n\nLogFormat \"%h %l %u %t \\\"%r\\\" %>s %b\" common\nCustomLog logs/access_log common",
  "choices": [{
    "label": "A",
    "text": "リクエストを処理した子プロセスのPID"
  }, {
    "label": "B",
    "text": "クライアントのIPアドレス"
  }, {
    "label": "C",
    "text": "内部リダイレクト後の最終的なHTTPステータスコード"
  }, {
    "label": "D",
    "text": "レスポンスボディのバイト数"
  }, {
    "label": "E",
    "text": "リクエストの処理にかかった秒数"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "%s はステータスコードを表し、%>s とすると内部リダイレクトが発生した場合でも最終的なリクエストのステータスコードが記録されます。レスポンスボディのバイト数は %b、クライアントのIPアドレス（ホスト名）は %h、処理時間（秒）は %T、子プロセスのPIDは %P で記録します。",
  "answerKeys": ["Apache の設定に"],
  "answerTexts": ["内部リダイレクト後の最終的なHTTPステータスコード"],
  "answerHints": ["内部"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-064",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Apache に次の設定を追加しました。クライアントが http://www.example.com/old/page.html にアクセスしたときの応答として正しいものを選択してください。\n\nRedirect permanent /old https://www.example.com/new",
  "choices": [{
    "label": "A",
    "text": "ステータス 301 で https://www.example.com/new/page.html へリダイレクトする"
  }, {
    "label": "B",
    "text": "ステータス 302 で https://www.example.com/new/page.html へリダイレクトする"
  }, {
    "label": "C",
    "text": "ステータス 301 で https://www.example.com/new へリダイレクトする"
  }, {
    "label": "D",
    "text": "サーバー内部で /new/page.html の内容を返し、URLは変わらない"
  }, {
    "label": "E",
    "text": "ステータス 302 で https://www.example.com/new へリダイレクトする"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Redirect は指定したURLパスの接頭辞に一致したリクエストを、残りのパスを引き継いだ新しいURLへリダイレクトします。permanent を指定するとステータスコード 301 が返され、ステータスを省略した場合は 302（temp）となります。URLを変えずにサーバー内部で別の場所を参照するのは Alias や mod_rewrite による内部書き換えの動作です。",
  "answerKeys": ["Apache に"],
  "answerTexts": ["ステータス 301 で https://www.example.com/new/page.html へリダイレクトする"],
  "answerHints": ["ステータス 301 で https://www.example.com/new/page"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-065",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Apache 2.4 で「Alias /manual /opt/manual」を設定し、/opt/manual にHTMLファイルを配置しましたが、http://www.example.com/manual/ にアクセスすると 403 Forbidden となり、エラーログに「client denied by server configuration: /opt/manual/」と記録されました。最も適切な対処を選択してください。",
  "choices": [{
    "label": "A",
    "text": "AllowOverride All を <Directory /> に指定する"
  }, {
    "label": "B",
    "text": "Alias を ScriptAlias に変更する"
  }, {
    "label": "C",
    "text": "/opt/manual のパーミッションを 777 に変更する"
  }, {
    "label": "D",
    "text": "<Directory \"/opt/manual\"> を追加し、その中で Require all granted を指定する"
  }, {
    "label": "E",
    "text": "DocumentRoot を /opt/manual に変更する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Apache 2.4 の標準的な設定では <Directory /> で Require all denied が指定されているため、DocumentRoot 外のディレクトリを Alias で公開する場合は、そのディレクトリに対するアクセス許可を明示する必要があります。エラーメッセージの client denied by server configuration はアクセス制御による拒否を示しており、ファイルパーミッションの問題ではありません。ScriptAlias は CGI 実行用であり、今回の問題の解決にはなりません。",
  "answerKeys": ["Apache 2.4 で「"],
  "answerTexts": ["<Directory \"/opt/manual\"> を追加し、その中で Require all granted を指定する"],
  "answerHints": ["<Directory"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-066",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "index.html が存在しないディレクトリにアクセスすると、ディレクトリ内のファイル一覧が表示されてしまいます。ファイル一覧の表示を禁止するための <Directory> 内の記述として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "Options -Indexes"
  }, {
    "label": "B",
    "text": "Require not indexes"
  }, {
    "label": "C",
    "text": "IndexOptions Off"
  }, {
    "label": "D",
    "text": "AllowOverride -Indexes"
  }, {
    "label": "E",
    "text": "DirectoryIndex none"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ファイル一覧の自動生成は Options の Indexes で有効になるため、Options -Indexes とすると無効化され、インデックスファイルがない場合は 403 Forbidden が返されます。AllowOverride は .htaccess で上書き可能な設定の種類を指定するディレクティブで、一覧表示自体は制御しません。IndexOptions は mod_autoindex の一覧表示の見た目を調整するものです。",
  "answerKeys": ["index"],
  "answerTexts": ["Options -Indexes"],
  "answerHints": ["Options"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-067",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Apache の Options ディレクティブに指定できる値として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "AuthConfig"
  }, {
    "label": "B",
    "text": "FileInfo"
  }, {
    "label": "C",
    "text": "ExecCGI"
  }, {
    "label": "D",
    "text": "Limit"
  }, {
    "label": "E",
    "text": "FollowSymLinks"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ExecCGI は CGI スクリプトの実行を許可し、FollowSymLinks はシンボリックリンクをたどることを許可する Options の値です。AuthConfig、Limit、FileInfo は AllowOverride ディレクティブに指定する値で、.htaccess でどの種類のディレクティブを上書きできるかを指定するものです。",
  "answerKeys": ["Apache の Options"],
  "answerTexts": ["ExecCGI", "FollowSymLinks"],
  "answerHints": ["ExecCGI", "FollowSymLinks"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-068",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Apache 2.4 で、PHP を mod_php ではなく PHP-FPM と連携させて実行したいと考えています。次の設定を機能させるために必要な Apache モジュールの組み合わせとして正しいものを選択してください。\n\n<FilesMatch \"\\.php$\">\n    SetHandler \"proxy:unix:/run/php-fpm/www.sock|fcgi://localhost\"\n</FilesMatch>",
  "choices": [{
    "label": "A",
    "text": "mod_proxy_http と mod_rewrite"
  }, {
    "label": "B",
    "text": "mod_php と mod_cgi"
  }, {
    "label": "C",
    "text": "mod_proxy と mod_proxy_fcgi"
  }, {
    "label": "D",
    "text": "mod_fastcgi と mod_cgid"
  }, {
    "label": "E",
    "text": "mod_suexec と mod_actions"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Apache 2.4 で PHP-FPM と連携するには、mod_proxy と FastCGI プロトコルを扱う mod_proxy_fcgi を使用し、SetHandler で proxy:unix:ソケット|fcgi://... のように転送先を指定します。mod_proxy_http は HTTP でバックエンドに転送するためのモジュールで、FastCGI には対応しません。mod_cgi は CGI スクリプトを直接実行するモジュールで、PHP-FPM との通信には使いません。",
  "answerKeys": ["Apache 2.4 で、"],
  "answerTexts": ["mod_proxy と mod_proxy_fcgi"],
  "answerHints": ["mod_proxy "],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-069",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "アクセスが集中する時間帯に Web サイトの応答が遅くなり、Apache のエラーログに次のメッセージが記録されていました。最も適切な対処を選択してください。\n\n[mpm_event:error] AH00484: server reached MaxRequestWorkers setting,\n  consider raising the MaxRequestWorkers setting",
  "choices": [{
    "label": "A",
    "text": "KeepAliveTimeout の値を大きくする"
  }, {
    "label": "B",
    "text": "StartServers の値を小さくする"
  }, {
    "label": "C",
    "text": "Timeout の値を大きくする"
  }, {
    "label": "D",
    "text": "MaxRequestWorkers の値を（必要に応じて ServerLimit とともに）大きくする"
  }, {
    "label": "E",
    "text": "MaxConnectionsPerChild を 1 に設定する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "MaxRequestWorkers は同時に処理できるリクエスト数の上限で、この値に達すると新たな接続は待たされます。メモリ等のリソースに余裕があれば MaxRequestWorkers を引き上げ、上限を超える場合は ServerLimit も合わせて調整します。StartServers は起動時に生成する子プロセス数であり、同時処理数の上限ではありません。KeepAliveTimeout を大きくするとワーカーが長く占有され、状況は悪化しやすくなります。",
  "answerKeys": ["アクセス"],
  "answerTexts": ["MaxRequestWorkers の値を（必要に応じて ServerLimit とともに）大きくする"],
  "answerHints": ["MaxRequestWorkers"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-070",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Apache の ServerRoot ディレクティブの説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "Apache の実行ユーザーのホームディレクトリを指定する"
  }, {
    "label": "B",
    "text": "Web コンテンツを公開するディレクトリを指定する"
  }, {
    "label": "C",
    "text": "エラーページを格納するディレクトリを指定する"
  }, {
    "label": "D",
    "text": "chroot 環境のルートディレクトリを指定する"
  }, {
    "label": "E",
    "text": "設定ファイル、ログ、モジュールなどの相対パスの基準となるディレクトリを指定する"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ServerRoot は Apache のインストールディレクトリを示し、LoadModule、Include、ErrorLog などで指定した相対パスはこのディレクトリを基準に解釈されます。Red Hat 系では通常 /etc/httpd が設定されています。Web コンテンツを公開するディレクトリは DocumentRoot で指定します。",
  "answerKeys": ["Apache の ServerRoot"],
  "answerTexts": ["設定ファイル、ログ、モジュールなどの相対パスの基準となるディレクトリを指定する"],
  "answerHints": ["設定"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-071",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Apache の HTTPS 用バーチャルホストで、サーバー証明書とその秘密鍵を指定するディレクティブを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "SSLCipherSuite"
  }, {
    "label": "B",
    "text": "SSLCACertificatePath"
  }, {
    "label": "C",
    "text": "SSLCertificateKeyFile"
  }, {
    "label": "D",
    "text": "SSLVerifyClient"
  }, {
    "label": "E",
    "text": "SSLCertificateFile"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SSLCertificateFile は PEM 形式のサーバー証明書を、SSLCertificateKeyFile はその証明書に対応する秘密鍵を指定します。SSLCACertificatePath はクライアント証明書の検証に使う CA 証明書のディレクトリ、SSLVerifyClient はクライアント証明書認証の要否を指定するもので、サーバー証明書の指定ではありません。SSLCipherSuite は使用可能な暗号スイートを指定します。",
  "answerKeys": ["Apache の HTTPS"],
  "answerTexts": ["SSLCertificateKeyFile", "SSLCertificateFile"],
  "answerHints": ["SSLCertificateKeyFile", "SSLCertificateFile"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-072",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "mod_ssl を読み込み、<VirtualHost *:443> に証明書と秘密鍵を設定しましたが、HTTPS でアクセスするとエラーになり、ポート443で平文の HTTP 応答が返されていました。<VirtualHost> 内に不足している可能性が最も高い記述を選択してください。",
  "choices": [{
    "label": "A",
    "text": "Listen 443 https"
  }, {
    "label": "B",
    "text": "SSLEngine on"
  }, {
    "label": "C",
    "text": "SSLRequireSSL"
  }, {
    "label": "D",
    "text": "SSLProtocol all"
  }, {
    "label": "E",
    "text": "SSLOptions +StrictRequire"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SSLEngine on はそのバーチャルホストで SSL/TLS プロトコルを有効にするディレクティブで、これがないと証明書を設定していても平文の HTTP として処理されます。SSLRequireSSL は HTTPS 以外のアクセスを拒否するアクセス制御用のディレクティブです。SSLProtocol は使用するプロトコルのバージョンを制限するもので、SSL/TLS 自体を有効にするものではありません。",
  "answerKeys": ["mod_ssl"],
  "answerTexts": ["SSLEngine on"],
  "answerHints": ["SSLEngine"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-073",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "認証局から発行されたサーバー証明書を Apache に設定したところ、一部のクライアントで「証明書チェーンを検証できない」という警告が表示されました。証明書は中間 CA によって署名されています。この問題を解決する方法として最も適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "中間 CA 証明書を SSLCertificateKeyFile で指定する"
  }, {
    "label": "B",
    "text": "SSLCipherSuite に NULL を追加する"
  }, {
    "label": "C",
    "text": "中間 CA 証明書を SSLCertificateChainFile で指定するか、SSLCertificateFile のファイルにサーバー証明書に続けて連結する"
  }, {
    "label": "D",
    "text": "SSLProtocol から TLSv1.2 を除外する"
  }, {
    "label": "E",
    "text": "SSLVerifyClient require を設定する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "サーバーが中間 CA 証明書を送信していないと、中間証明書を持たないクライアントはチェーンを検証できません。SSLCertificateChainFile で中間 CA 証明書を指定するか、Apache 2.4.8 以降ではサーバー証明書ファイルに中間証明書を連結して SSLCertificateFile で指定します。SSLVerifyClient はクライアント証明書の検証を要求する設定で、サーバー証明書の問題とは無関係です。",
  "answerKeys": ["認証局から"],
  "answerTexts": ["中間 CA 証明書を SSLCertificateChainFile で指定するか、SSLCertificateFile のファイルにサーバー証明書に続けて連結する"],
  "answerHints": ["中間 CA 証明書を SSLCertificateChainFile"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-074",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Apache でクライアント証明書による認証を行うため、SSLVerifyClient require を設定しました。クライアント証明書を検証するための CA 証明書を指定するディレクティブを選択してください。",
  "choices": [{
    "label": "A",
    "text": "SSLCARevocationFile"
  }, {
    "label": "B",
    "text": "SSLCACertificateFile"
  }, {
    "label": "C",
    "text": "SSLCertificateChainFile"
  }, {
    "label": "D",
    "text": "SSLProxyCACertificateFile"
  }, {
    "label": "E",
    "text": "SSLCertificateFile"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SSLCACertificateFile は、クライアント証明書の発行元として信頼する CA 証明書を格納したファイルを指定します。SSLCertificateChainFile はサーバー証明書の中間 CA 証明書をクライアントに送るためのものです。SSLCARevocationFile は証明書失効リスト（CRL）を指定し、SSLProxyCACertificateFile はリバースプロキシとしてバックエンドのサーバー証明書を検証する際に使用します。",
  "answerKeys": ["Apache でクライアント"],
  "answerTexts": ["SSLCACertificateFile"],
  "answerHints": ["SSLCACertificateFile"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-075",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Apache で SSLv3、TLSv1.0、TLSv1.1 を無効にし、それより新しいプロトコルのみを許可する設定として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1"
  }, {
    "label": "B",
    "text": "SSLProtocol none +TLSv1"
  }, {
    "label": "C",
    "text": "SSLCipherSuite -SSLv3 -TLSv1 -TLSv1.1"
  }, {
    "label": "D",
    "text": "SSLProtocol !SSLv3 !TLSv1 !TLSv1.1"
  }, {
    "label": "E",
    "text": "SSLEngine TLSv1.2"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SSLProtocol はクライアントとの通信に使用できるプロトコルを指定し、all から -SSLv3 のように個別のプロトコルを除外できます。SSLCipherSuite は暗号スイートを指定するディレクティブで、プロトコルのバージョンを制御するものではありません。! による否定は SSLCipherSuite の書式であり、SSLProtocol では + と - を使います。",
  "answerKeys": ["Apache で SSLv3"],
  "answerTexts": ["SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1"],
  "answerHints": ["SSLProtocol all"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-076",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "セキュリティ診断で、Apache の HTTPS 接続において RC4 などの脆弱な暗号アルゴリズムの使用が許可されていると指摘されました。使用できる暗号アルゴリズムの組み合わせを制限するディレクティブを選択してください。",
  "choices": [{
    "label": "A",
    "text": "SSLCryptoDevice"
  }, {
    "label": "B",
    "text": "SSLVerifyDepth"
  }, {
    "label": "C",
    "text": "SSLProtocol"
  }, {
    "label": "D",
    "text": "SSLOptions"
  }, {
    "label": "E",
    "text": "SSLCipherSuite"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SSLCipherSuite はハンドシェイクで使用できる暗号スイートを OpenSSL の暗号文字列で指定するディレクティブで、!RC4 のように特定の暗号を除外できます。SSLProtocol は SSLv3 や TLSv1.2 などプロトコルのバージョンを制御します。SSLCryptoDevice はハードウェア暗号アクセラレーターを指定し、SSLVerifyDepth は証明書チェーンの検証深度を指定します。",
  "answerKeys": ["セキュリティ診断で"],
  "answerTexts": ["SSLCipherSuite"],
  "answerHints": ["SSLCipherSuite"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-077",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "クロスサイトトレーシング（XST）対策として、Apache で HTTP の TRACE メソッドを無効にしたいと考えています。適切な設定を選択してください。",
  "choices": [{
    "label": "A",
    "text": "ServerSignature Off"
  }, {
    "label": "B",
    "text": "HostnameLookups Off"
  }, {
    "label": "C",
    "text": "Require method TRACE"
  }, {
    "label": "D",
    "text": "TraceEnable Off"
  }, {
    "label": "E",
    "text": "ServerTokens Prod"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TraceEnable Off を指定すると TRACE メソッドのリクエストに対して 405 Method Not Allowed が返されるようになります。ServerSignature と ServerTokens はサーバーのバージョン情報の表示を制御するもので、TRACE メソッドには影響しません。HostnameLookups はアクセスログにクライアントのホスト名を記録するための DNS 逆引きを制御するものです。",
  "answerKeys": ["クロスサイトトレーシング"],
  "answerTexts": ["TraceEnable Off"],
  "answerHints": ["TraceEnable"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-078",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Apache のバージョンや OS の情報が HTTP レスポンスヘッダーやエラーページのフッターに表示されないようにするための設定を選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "ServerSignature Off"
  }, {
    "label": "B",
    "text": "ServerTokens Prod"
  }, {
    "label": "C",
    "text": "HostnameLookups Off"
  }, {
    "label": "D",
    "text": "SSLEngine off"
  }, {
    "label": "E",
    "text": "TraceEnable Off"
  }],
  "answer": ["A", "B"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ServerTokens Prod とすると、Server レスポンスヘッダーに出力される情報が「Apache」のみとなり、バージョンや OS は表示されなくなります。ServerSignature Off は、エラーページやディレクトリ一覧のフッターに表示されるサーバー情報の行を出力しないようにします。TraceEnable は TRACE メソッドの可否を、HostnameLookups はクライアントの DNS 逆引きを制御するもので、情報の表示とは関係ありません。",
  "answerKeys": ["Apache のバージョン"],
  "answerTexts": ["ServerSignature Off", "ServerTokens Prod"],
  "answerHints": ["ServerSignature", "ServerTokens"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-079",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "1つのIPアドレス上で、異なるサーバー証明書を使う複数の名前ベース HTTPS バーチャルホストを運用したいと考えています。これを可能にする TLS の拡張機能を選択してください。",
  "choices": [{
    "label": "A",
    "text": "ALPN"
  }, {
    "label": "B",
    "text": "HSTS"
  }, {
    "label": "C",
    "text": "OCSP Stapling"
  }, {
    "label": "D",
    "text": "PFS (Perfect Forward Secrecy)"
  }, {
    "label": "E",
    "text": "SNI (Server Name Indication)"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SNI は TLS ハンドシェイクの開始時にクライアントが接続先のホスト名をサーバーへ通知する拡張機能で、サーバーはこれをもとに適切な証明書を選択できます。SNI がなければ、HTTP の Host ヘッダーを受け取る前に証明書を提示する必要があるため、1つのIPアドレスで使える証明書は1つに限られます。OCSP Stapling は証明書の失効確認、HSTS は HTTPS の強制、ALPN はアプリケーションプロトコルの交渉に関する仕組みです。",
  "answerKeys": ["1つの"],
  "answerTexts": ["SNI (Server Name Indication)"],
  "answerHints": ["SNI"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-080",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "作成済みの秘密鍵 server.key を使って、認証局に提出する証明書署名要求（CSR）を server.csr として作成するコマンドとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "openssl req -new -key server.key -out server.csr"
  }, {
    "label": "B",
    "text": "openssl x509 -req -in server.key -out server.csr"
  }, {
    "label": "C",
    "text": "openssl rsa -in server.key -csr -out server.csr"
  }, {
    "label": "D",
    "text": "openssl genrsa -key server.key -out server.csr"
  }, {
    "label": "E",
    "text": "openssl ca -new -key server.key -out server.csr"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "openssl req -new は CSR を新規作成するコマンドで、-key で既存の秘密鍵を指定し、-out で出力ファイルを指定します。実行すると国名や組織名、コモンネームなどの入力を求められます。openssl genrsa は RSA 秘密鍵を生成するコマンド、openssl x509 -req は CSR から証明書に署名する際に使用するもので、CSR の作成には使いません。",
  "answerKeys": ["作成済みの秘密鍵"],
  "answerTexts": ["openssl req -new -key server.key -out server.csr"],
  "answerHints": ["openssl req"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-081",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "次のコマンドは、CSR ではなく自己署名証明書を直接作成します。??? に入る、自己署名証明書を出力させる openssl req のオプションを記述してください。\n\n$ openssl req ??? -newkey rsa:2048 -nodes -keyout server.key \\\n    -out server.crt -days 365",
  "choices": [],
  "answer": ["-x509"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "openssl req に -x509 オプションを付けると、CSR の代わりに自己署名の X.509 証明書が出力されます。-days で有効期限の日数を指定し、-newkey rsa:2048 で新しい RSA 鍵も同時に生成します。-nodes を指定すると秘密鍵がパスフレーズで暗号化されずに保存されます。",
  "answerKeys": ["次のコマンドは、"],
  "answerTexts": ["-x509"],
  "answerHints": ["-x509"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-082",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "サーバー再起動時に Apache の起動がパスフレーズ入力待ちで停止してしまい、自動起動できません。秘密鍵 server.key はパスフレーズで暗号化されています。パスフレーズを除去した秘密鍵を作成するコマンドとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "openssl req -nodes -in server.key -out server-nopass.key"
  }, {
    "label": "B",
    "text": "openssl genrsa -nodes -in server.key -out server-nopass.key"
  }, {
    "label": "C",
    "text": "openssl passwd -d server.key > server-nopass.key"
  }, {
    "label": "D",
    "text": "openssl rsa -in server.key -out server-nopass.key"
  }, {
    "label": "E",
    "text": "openssl x509 -in server.key -noout -out server-nopass.key"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "openssl rsa -in で暗号化された秘密鍵を読み込み、-out で暗号化オプションを付けずに出力すると、パスフレーズなしの秘密鍵が作成されます（実行時に元のパスフレーズの入力を求められます）。作成した鍵は所有者のみが読めるパーミッションで保護する必要があります。openssl passwd はパスワードハッシュを生成するコマンドで、秘密鍵の処理には使用しません。",
  "answerKeys": ["サーバー再起動時に"],
  "answerTexts": ["openssl rsa -in server.key -out server-nopass.key"],
  "answerHints": ["openssl rsa"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-083",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Squid のデフォルトの待ち受けポートとして、標準の squid.conf の http_port に設定されているポート番号を選択してください。",
  "choices": [{
    "label": "A",
    "text": "8000"
  }, {
    "label": "B",
    "text": "3128"
  }, {
    "label": "C",
    "text": "8080"
  }, {
    "label": "D",
    "text": "1080"
  }, {
    "label": "E",
    "text": "3130"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Squid のデフォルトの待ち受けポートは 3128 で、標準の squid.conf にも http_port 3128 と記述されています。3130 は ICP（Internet Cache Protocol）でキャッシュサーバー間の通信に使われるポートです。1080 は SOCKS プロキシで一般的に使われるポートです。",
  "answerKeys": ["Squid のデフォルト"],
  "answerTexts": ["3128"],
  "answerHints": ["3128"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-084",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "squid.conf に次の設定があります。192.168.1.10 のクライアントがこのプロキシを利用した場合の動作として正しいものを選択してください。\n\nacl localnet src 192.168.1.0/24\nhttp_access deny all\nhttp_access allow localnet",
  "choices": [{
    "label": "A",
    "text": "localnet に一致するため、アクセスが許可される"
  }, {
    "label": "B",
    "text": "許可と拒否が競合するため、Squid が起動しない"
  }, {
    "label": "C",
    "text": "http_access deny all に一致するため、アクセスが拒否される"
  }, {
    "label": "D",
    "text": "初回のみ拒否され、2回目以降は許可される"
  }, {
    "label": "E",
    "text": "より具体的な http_access allow localnet が優先され、アクセスが許可される"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "http_access は記述された順に評価され、最初に一致した行の allow または deny が適用されます。この設定では先頭の http_access deny all にすべてのクライアントが一致するため、後続の allow localnet は評価されません。許可したいルールは deny all より前に記述する必要があります。",
  "answerKeys": ["squid.conf に次の設定があり"],
  "answerTexts": ["http_access deny all に一致するため、アクセスが拒否される"],
  "answerHints": ["http_access"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-085",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "squid.conf の http_access 行が次の1行だけの場合、10.0.0.5 のクライアントからのリクエストはどのように処理されるかを選択してください。\n\nacl localnet src 192.168.1.0/24\nhttp_access allow localnet",
  "choices": [{
    "label": "A",
    "text": "一致する行がないため、最後の http_access 行と逆の動作である拒否となる"
  }, {
    "label": "B",
    "text": "ICP 経由で他のキャッシュサーバーに転送される"
  }, {
    "label": "C",
    "text": "エラーとなり Squid が終了する"
  }, {
    "label": "D",
    "text": "Squid のデフォルトポリシーにより常に許可される"
  }, {
    "label": "E",
    "text": "一致する行がないため許可される"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Squid では、どの http_access 行にも一致しなかった場合、最後に記述された http_access 行と逆の動作が適用されます。最後の行が allow のため、一致しないクライアントは拒否されます。この挙動に頼らず意図を明確にするため、最後に http_access deny all を記述するのが一般的です。",
  "answerKeys": ["squid.conf の"],
  "answerTexts": ["一致する行がないため、最後の http_access 行と逆の動作である拒否となる"],
  "answerHints": ["一致する行がないため、"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-086",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Squid の acl と http_access の論理評価に関する説明として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "1行の http_access に複数の ACL 名を並べると、いずれかの ACL に一致すればその行が適用される（OR）"
  }, {
    "label": "B",
    "text": "同じ ACL 名で複数の acl 行を定義すると、後の行が前の行を上書きする"
  }, {
    "label": "C",
    "text": "同じ ACL 名で複数の acl 行を定義すると、値はいずれかに一致すればよい（OR）として扱われる"
  }, {
    "label": "D",
    "text": "1行の http_access に複数の ACL 名を並べると、すべての ACL に一致した場合のみその行が適用される（AND）"
  }, {
    "label": "E",
    "text": "同じ ACL 名で複数の acl 行を定義すると、すべての値に一致する必要がある（AND）"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "http_access の1行に複数の ACL 名を記述した場合は AND 条件となり、すべての ACL に一致したときにだけその行の allow / deny が適用されます。一方、同じ ACL 名で定義した複数の値や複数の acl 行は OR 条件となり、いずれかに一致すればその ACL に一致したとみなされます。同じ名前の acl 行は上書きではなく追加として扱われます。",
  "answerKeys": ["Squid の acl"],
  "answerTexts": ["同じ ACL 名で複数の acl 行を定義すると、値はいずれかに一致すればよい（OR）として扱われる", "1行の http_access に複数の ACL 名を並べると、すべての ACL に一致した場合のみその行が適用される（AND）"],
  "answerHints": ["同じ ACL 名で複数の acl 行を定義すると、値はいず", "1行の http_access に複数の ACL 名を並べると、すべての"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-087",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "squid.conf に次の cache_dir が設定されています。「10000」が表す内容として正しいものを選択してください。\n\ncache_dir ufs /var/spool/squid 10000 16 256",
  "choices": [{
    "label": "A",
    "text": "キャッシュするオブジェクトの最大サイズ（KB）"
  }, {
    "label": "B",
    "text": "第1階層のサブディレクトリ数"
  }, {
    "label": "C",
    "text": "キャッシュに保存するオブジェクトの最大数"
  }, {
    "label": "D",
    "text": "キャッシュの保持期間（分）"
  }, {
    "label": "E",
    "text": "ディスクキャッシュとして使用する容量（MB）"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "cache_dir の書式は「cache_dir 格納形式 ディレクトリ 容量(MB) 第1階層ディレクトリ数 第2階層ディレクトリ数」で、10000 はディスクキャッシュとして使用する容量を MB 単位で指定しています。16 と 256 はキャッシュディレクトリ内に作成するサブディレクトリの数です。キャッシュするオブジェクトの最大サイズは maximum_object_size で指定します。",
  "answerKeys": ["squid.conf に次の cache_dir"],
  "answerTexts": ["ディスクキャッシュとして使用する容量（MB）"],
  "answerHints": ["ディスクキャッシュ"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-088",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Squid の cache_mem ディレクティブの説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "メモリに保持するキャッシュオブジェクトの有効期限を指定する"
  }, {
    "label": "B",
    "text": "頻繁に参照されるオブジェクトなどをメモリ上にキャッシュするための容量を指定する"
  }, {
    "label": "C",
    "text": "クライアント1台あたりに割り当てるメモリ量を指定する"
  }, {
    "label": "D",
    "text": "Squid プロセスが使用するメモリ全体の上限を指定する"
  }, {
    "label": "E",
    "text": "ディスクキャッシュの容量を指定する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "cache_mem は、転送中のオブジェクトや頻繁に参照されるオブジェクトなどをメモリ上に保持するための容量を指定します。これは Squid プロセス全体のメモリ使用量の上限ではなく、インデックスなど他の用途でも別途メモリが消費されるため、実際の使用量は cache_mem より大きくなります。ディスクキャッシュの容量は cache_dir で指定します。",
  "answerKeys": ["Squid の cache_mem"],
  "answerTexts": ["頻繁に参照されるオブジェクトなどをメモリ上にキャッシュするための容量を指定する"],
  "answerHints": ["頻繁に"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-089",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Squid で Basic 認証を設定しています。認証に成功したユーザーのみプロキシの利用を許可するには、??? にどの ACL タイプを指定すればよいかを選択してください。\n\nauth_param basic program /usr/lib64/squid/basic_ncsa_auth /etc/squid/passwd\nauth_param basic realm Squid proxy\nacl authusers ??? REQUIRED\nhttp_access allow authusers\nhttp_access deny all",
  "choices": [{
    "label": "A",
    "text": "src"
  }, {
    "label": "B",
    "text": "user"
  }, {
    "label": "C",
    "text": "basic_auth"
  }, {
    "label": "D",
    "text": "proxy_auth"
  }, {
    "label": "E",
    "text": "auth_user"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "proxy_auth タイプの ACL は auth_param で設定した認証プログラムを使ってユーザーを認証し、REQUIRED を指定すると認証に成功した任意のユーザーに一致します。特定のユーザーのみに限定する場合は REQUIRED の代わりにユーザー名を列挙します。src はクライアントの送信元IPアドレスに一致する ACL タイプで、認証とは関係ありません。",
  "answerKeys": ["Squid で Basic"],
  "answerTexts": ["proxy_auth"],
  "answerHints": ["proxy_auth"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-090",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "squid.conf に新しい cache_dir を追加しました。Squid を起動する前に、キャッシュ用のディレクトリ構造（スワップディレクトリ）を作成するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "squid -N"
  }, {
    "label": "B",
    "text": "squid -k rotate"
  }, {
    "label": "C",
    "text": "squid -z"
  }, {
    "label": "D",
    "text": "squid -k parse"
  }, {
    "label": "E",
    "text": "squid -k reconfigure"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "squid -z は cache_dir で指定されたキャッシュディレクトリ内にサブディレクトリ構造を作成するオプションです。squid -k reconfigure は実行中の Squid に設定ファイルを再読み込みさせ、squid -k parse は設定ファイルの構文を確認します。squid -k rotate はログのローテーション、squid -N はデーモン化せずにフォアグラウンドで実行するオプションです。",
  "answerKeys": ["squid.conf に新しい"],
  "answerTexts": ["squid -z"],
  "answerHints": ["squid -z"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-091",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Squid で example.com とそのすべてのサブドメインへのアクセスを禁止したいと考えています。次の設定の ??? に入る ACL タイプとして正しいものを選択してください。\n\nacl blocked ??? .example.com\nhttp_access deny blocked\nhttp_access allow localnet\nhttp_access deny all",
  "choices": [{
    "label": "A",
    "text": "url_regex_domain"
  }, {
    "label": "B",
    "text": "dst"
  }, {
    "label": "C",
    "text": "srcdomain"
  }, {
    "label": "D",
    "text": "domain"
  }, {
    "label": "E",
    "text": "dstdomain"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dstdomain はリクエスト先のホスト名（ドメイン）に一致する ACL タイプで、先頭にドットを付けた .example.com は example.com 自体とそのサブドメインすべてに一致します。dst は宛先のIPアドレスに一致するタイプで、ドメイン名を直接指定する用途には適しません。srcdomain はクライアント側のドメイン名（逆引き結果）に一致するタイプです。",
  "answerKeys": ["Squid で example"],
  "answerTexts": ["dstdomain"],
  "answerHints": ["dstdomain"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-092",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Nginx の設定ファイルを編集した後、サービスに反映する前に構文エラーがないかを確認するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "nginx -V"
  }, {
    "label": "B",
    "text": "nginx -t"
  }, {
    "label": "C",
    "text": "nginx -s test"
  }, {
    "label": "D",
    "text": "nginx -s check"
  }, {
    "label": "E",
    "text": "nginx -c"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nginx -t は設定ファイルの構文をチェックし、問題がなければ syntax is ok と test is successful を表示します。-c は使用する設定ファイルのパスを指定するオプションで、-V はバージョンとビルド時の configure オプションを表示します。-s はシグナルを送るオプションで、指定できるのは stop、quit、reopen、reload です。",
  "answerKeys": ["Nginx の設定"],
  "answerTexts": ["nginx -t"],
  "answerHints": ["nginx -t"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-093",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "稼働中の Nginx に、処理中の接続を切断せずに設定ファイルを再読み込みさせる方法として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "nginx -s quit"
  }, {
    "label": "B",
    "text": "Nginx のワーカープロセスに KILL シグナルを送る"
  }, {
    "label": "C",
    "text": "nginx -s reopen"
  }, {
    "label": "D",
    "text": "nginx -s reload"
  }, {
    "label": "E",
    "text": "Nginx のマスタープロセスに HUP シグナルを送る"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nginx -s reload は内部的にマスタープロセスへ HUP シグナルを送るため、どちらの方法でも設定が再読み込みされます。マスタープロセスは新しい設定でワーカープロセスを起動し、古いワーカーは処理中のリクエストを完了してから終了します。nginx -s quit は処理中のリクエストを完了させてから停止し、nginx -s reopen はログファイルを開き直すだけで設定は再読み込みされません。",
  "answerKeys": ["稼働中の Nginx"],
  "answerTexts": ["nginx -s reload", "Nginx のマスタープロセスに HUP シグナルを送る"],
  "answerHints": ["nginx -s reload", "Nginx のマスタープロセス"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-094",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Nginx に次の server ブロックが設定されています。Host ヘッダーが unknown.example.org のリクエストをポート80で受信した場合、どの server ブロックで処理されるかを選択してください。\n\nserver {\n    listen 80;\n    server_name www.example.com;\n}\nserver {\n    listen 80 default_server;\n    server_name _;\n    return 444;\n}\nserver {\n    listen 80;\n    server_name www.example.net;\n}",
  "choices": [{
    "label": "A",
    "text": "default_server が指定された2番目の server ブロック"
  }, {
    "label": "B",
    "text": "3番目の www.example.net の server ブロック"
  }, {
    "label": "C",
    "text": "1番目の www.example.com の server ブロック"
  }, {
    "label": "D",
    "text": "最後に定義された server ブロック"
  }, {
    "label": "E",
    "text": "どの server ブロックにも一致しないため 404 を返す"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Nginx は Host ヘッダーを server_name と照合し、一致する server ブロックがない場合は、その listen に default_server が指定された server ブロックで処理します。default_server の指定がなければ、そのアドレスとポートで最初に定義された server ブロックがデフォルトになります。server_name _ は一致しない名前として慣習的に使われるもので、特別な意味を持つわけではありません。",
  "answerKeys": ["Nginx に次の server"],
  "answerTexts": ["default_server が指定された2番目の server ブロック"],
  "answerHints": ["default_server"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-095",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Nginx に次の location ブロックが設定されています。/images/logo.png へのリクエストを処理する location ブロックを選択してください。\n\nlocation / {\n    root /var/www/html;\n}\nlocation /images/ {\n    root /data;\n}\nlocation ~ \\.png$ {\n    root /data/png;\n}",
  "choices": [{
    "label": "A",
    "text": "一致が複数あるため設定エラーになる"
  }, {
    "label": "B",
    "text": "location /images/"
  }, {
    "label": "C",
    "text": "location /"
  }, {
    "label": "D",
    "text": "location ~ \\.png$"
  }, {
    "label": "E",
    "text": "最も長い一致である location /images/ と location ~ \\.png$ の両方が順に適用される"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Nginx は最も長く一致するプレフィックス location を記憶したうえで、正規表現の location を記述順に評価し、一致した正規表現があればそれを優先します。/images/logo.png は正規表現 \\.png$ に一致するため、その location で処理されます。プレフィックス location の /images/ を優先させたい場合は、location ^~ /images/ と指定して正規表現の評価を行わないようにします。",
  "answerKeys": ["Nginx に次の location"],
  "answerTexts": ["location ~ \\.png$"],
  "answerHints": ["location ~"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-096",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Nginx に次の設定があります。http://www.example.com/static/css/style.css へのリクエストで参照されるファイルのパスを選択してください。\n\nserver {\n    listen 80;\n    server_name www.example.com;\n    location /static/ {\n        root /var/www;\n    }\n}",
  "choices": [{
    "label": "A",
    "text": "/var/www/static/static/css/style.css"
  }, {
    "label": "B",
    "text": "/var/www/css/style.css"
  }, {
    "label": "C",
    "text": "/var/www/static/css/style.css"
  }, {
    "label": "D",
    "text": "/static/css/style.css"
  }, {
    "label": "E",
    "text": "/var/www/html/static/css/style.css"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "root ディレクティブは、指定したディレクトリにリクエストURIのパス全体を連結してファイルパスを決定するため、/var/www/static/css/style.css が参照されます。location に一致した部分を置き換えたい場合は alias ディレクティブを使い、alias /var/www/; とすれば /var/www/css/style.css が参照されます。",
  "answerKeys": ["Nginx に次の設定があり"],
  "answerTexts": ["/var/www/static/css/style.css"],
  "answerHints": ["/var/www/static/css"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-097",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Nginx をリバースプロキシとして構成しています。バックエンドのアプリケーションサーバーでクライアントの実際の IPアドレスを取得できるようにするための設定を選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "proxy_set_header X-Real-IP $remote_addr;"
  }, {
    "label": "B",
    "text": "proxy_pass_request_headers off;"
  }, {
    "label": "C",
    "text": "proxy_hide_header X-Forwarded-For;"
  }, {
    "label": "D",
    "text": "proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;"
  }, {
    "label": "E",
    "text": "proxy_set_header Host $remote_addr;"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "proxy_set_header でバックエンドへ送るリクエストヘッダーを設定でき、X-Real-IP に $remote_addr を設定するとクライアントのIPアドレスを渡せます。$proxy_add_x_forwarded_for は、受信した X-Forwarded-For ヘッダーにクライアントのIPアドレスを追加した値になります。Host ヘッダーにはホスト名を設定すべきであり、proxy_hide_header はバックエンドからの応答ヘッダーをクライアントに渡さないための設定です。",
  "answerKeys": ["Nginx を"],
  "answerTexts": ["proxy_set_header X-Real-IP $remote_addr;", "proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;"],
  "answerHints": ["proxy_set_header X", "proxy_set_header X"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-098",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Nginx に次のリバースプロキシ設定があります。クライアントが /app/users/list にアクセスしたとき、バックエンドに送られるリクエストURIを選択してください。\n\nlocation /app/ {\n    proxy_pass http://127.0.0.1:8080/;\n}",
  "choices": [{
    "label": "A",
    "text": "/app/app/users/list"
  }, {
    "label": "B",
    "text": "/app/users/list"
  }, {
    "label": "C",
    "text": "/"
  }, {
    "label": "D",
    "text": "/8080/app/users/list"
  }, {
    "label": "E",
    "text": "/users/list"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "proxy_pass に URI（この場合は末尾の /）を含めると、リクエストURIのうち location に一致した部分 /app/ がその URI に置き換えられるため、/users/list がバックエンドに送られます。proxy_pass http://127.0.0.1:8080; のように URI を含めない場合は、元のリクエストURI /app/users/list がそのまま転送されます。",
  "answerKeys": ["Nginx に次のリバースプロキシ"],
  "answerTexts": ["/users/list"],
  "answerHints": ["/users"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-099",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Nginx と PHP-FPM を連携させたところ、PHP ページにアクセスすると「File not found.」と表示され、PHP-FPM のログに「Primary script unknown」と記録されました。設定は次のとおりです。追加すべき記述として最も適切なものを選択してください。\n\nlocation ~ \\.php$ {\n    root /var/www/html;\n    fastcgi_pass unix:/run/php-fpm/www.sock;\n    include fastcgi_params;\n}",
  "choices": [{
    "label": "A",
    "text": "proxy_set_header SCRIPT_NAME $uri;"
  }, {
    "label": "B",
    "text": "proxy_pass http://unix:/run/php-fpm/www.sock;"
  }, {
    "label": "C",
    "text": "fastcgi_pass_header Status;"
  }, {
    "label": "D",
    "text": "fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;"
  }, {
    "label": "E",
    "text": "fastcgi_index index.html;"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "PHP-FPM は FastCGI パラメーター SCRIPT_FILENAME で実行するスクリプトのパスを判断するため、これが正しく渡されないと Primary script unknown となります。fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name; により、root とリクエストされたスクリプト名を連結したパスが渡されます。proxy_pass や proxy_set_header は HTTP プロキシ用の設定で、FastCGI の通信には使用しません。",
  "answerKeys": ["Nginx と"],
  "answerTexts": ["fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;"],
  "answerHints": ["fastcgi_param"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-100",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/nginx/nginx.conf において、server ブロックを記述するコンテキストとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "events コンテキスト"
  }, {
    "label": "B",
    "text": "http コンテキスト"
  }, {
    "label": "C",
    "text": "location コンテキスト"
  }, {
    "label": "D",
    "text": "upstream コンテキスト"
  }, {
    "label": "E",
    "text": "main（トップレベル）コンテキストに直接記述する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "HTTP の仮想サーバーを定義する server ブロックは http コンテキスト内に記述し、その中に location ブロックを記述します。events コンテキストは worker_connections などの接続処理に関する設定を行う場所です。upstream はロードバランシング先のバックエンドサーバー群を定義するブロックで、http コンテキスト内に記述しますが、その中に server ブロックを書くことはできません。",
  "answerKeys": ["/etc/nginx"],
  "answerTexts": ["http コンテキスト"],
  "answerHints": ["http"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-101",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "smb.conf の構文を検査し、誤ったパラメータを警告したうえで有効な設定内容を表示するコマンドは何ですか。コマンド名のみを記述してください。",
  "choices": [],
  "answer": ["testparm"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "testparm は smb.conf を読み込んで構文や未知のパラメータをチェックし、解釈後の設定内容を表示します。設定変更後に smbd を再読み込みする前の確認に用いるのが一般的です。",
  "answerKeys": ["smb.conf の構文を"],
  "answerTexts": ["testparm"],
  "answerHints": ["testparm"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-102",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "smb.conf の [homes] セクションの説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "クライアントがユーザー名と同じ名前の共有に接続すると、そのユーザーのホームディレクトリが共有として提供される"
  }, {
    "label": "B",
    "text": "ゲストアカウントのホームディレクトリだけを公開する特別な共有である"
  }, {
    "label": "C",
    "text": "ドメインログオン時に使用する移動プロファイルの格納場所を定義する"
  }, {
    "label": "D",
    "text": "Samba ユーザーのパスワードデータベースの格納場所を指定する"
  }, {
    "label": "E",
    "text": "全ユーザーのホームディレクトリを親ディレクトリごと1つの共有として公開する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "[homes] は特殊セクションで、ユーザー名と同名の共有への接続時に、そのユーザーのホームディレクトリを動的に共有として割り当てます。パスワードデータベースの場所は passdb backend で指定し、移動プロファイルは logon path などで扱います。",
  "answerKeys": ["smb.conf の [homes"],
  "answerTexts": ["クライアントがユーザー名と同じ名前の共有に接続すると、そのユーザーのホームディレクトリが共有として提供される"],
  "answerHints": ["クライアント"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-103",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Samba サーバーを Active Directory ドメインのメンバーサーバーとして構成する際、smb.conf の [global] セクションに必要な設定はどれですか。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "realm = EXAMPLE.COM"
  }, {
    "label": "B",
    "text": "domain master = yes"
  }, {
    "label": "C",
    "text": "security = ads"
  }, {
    "label": "D",
    "text": "wins support = yes"
  }, {
    "label": "E",
    "text": "security = share"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "AD メンバーとして動作させるには security = ads を指定し、Kerberos レルム名を realm で設定します。security = share は Samba 4 で廃止された値であり、domain master や wins support はドメインメンバー化に必須ではありません。",
  "answerKeys": ["Samba サーバーを"],
  "answerTexts": ["realm = EXAMPLE.COM", "security = ads"],
  "answerHints": ["realm", "security = ads"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-104",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "管理者が Samba ユーザーを追加しようとして次のコマンドを実行したところ、エラーとなりました。最も考えられる原因を選択してください。\n\n# smbpasswd -a taro\nNew SMB password:\nRetype new SMB password:\nFailed to add entry for user taro.",
  "choices": [{
    "label": "A",
    "text": "パスワードが8文字未満である"
  }, {
    "label": "B",
    "text": "nmbd が起動していないため名前解決ができない"
  }, {
    "label": "C",
    "text": "taro が Linux のユーザーアカウントとして存在していない"
  }, {
    "label": "D",
    "text": "smb.conf に [homes] セクションが存在しない"
  }, {
    "label": "E",
    "text": "smbd が起動していない"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "smbpasswd -a で Samba ユーザーを追加するには、対応する Linux アカウントが /etc/passwd などに存在している必要があります。smbpasswd -a はローカルのパスワードデータベースを直接更新するため、smbd や nmbd の起動状態、[homes] の有無は原因になりません。",
  "answerKeys": ["管理者が Samba"],
  "answerTexts": ["taro が Linux のユーザーアカウントとして存在していない"],
  "answerHints": ["taro"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-105",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Samba のパスワードデータベースに登録されているユーザーの一覧を表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "smbstatus -b"
  }, {
    "label": "B",
    "text": "pdbedit -L"
  }, {
    "label": "C",
    "text": "net ads info"
  }, {
    "label": "D",
    "text": "testparm -v"
  }, {
    "label": "E",
    "text": "pdbedit -x"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "pdbedit -L は passdb backend に登録された Samba ユーザーを一覧表示します。pdbedit -x はユーザーの削除、smbstatus -b は接続中のユーザーの簡易表示、testparm -v はデフォルト値を含めた設定表示です。",
  "answerKeys": ["Samba のパスワードデータベースに登録されて"],
  "answerTexts": ["pdbedit -L"],
  "answerHints": ["pdbedit -L"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-106",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ユーザー taro として、サーバー fileserv が公開している共有の一覧を表示したいと考えています。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "testparm -L fileserv"
  }, {
    "label": "B",
    "text": "smbstatus -L //fileserv -U taro"
  }, {
    "label": "C",
    "text": "showmount -e fileserv"
  }, {
    "label": "D",
    "text": "smbclient -L //fileserv -U taro"
  }, {
    "label": "E",
    "text": "smbclient -l //fileserv -U taro"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "smbclient -L はサーバーが提供する共有の一覧を取得します。smbclient の -l はログファイルのベース名指定、smbstatus -L はローカルのロック情報表示です。showmount -e は NFS のエクスポート一覧を表示するコマンドです。",
  "answerKeys": ["ユーザー taro として"],
  "answerTexts": ["smbclient -L //fileserv -U taro"],
  "answerHints": ["smbclient -L"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-107",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "smbclient でパスワードの入力を求めずに匿名（ゲスト）で接続するためのオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-N"
  }, {
    "label": "B",
    "text": "-k"
  }, {
    "label": "C",
    "text": "-g"
  }, {
    "label": "D",
    "text": "-n"
  }, {
    "label": "E",
    "text": "-A"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "smbclient の -N（--no-pass）はパスワードプロンプトを表示せずに接続します。-n は自身の NetBIOS 名の指定、-A は認証情報ファイルの指定、-k は Kerberos 認証の使用、-g は解析しやすい形式での出力です。",
  "answerKeys": ["smbclient"],
  "answerTexts": ["-N"],
  "answerHints": ["-N"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-108",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Samba サーバーに現在接続しているクライアント、利用中の共有、ロックされているファイルを確認するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "smbpasswd"
  }, {
    "label": "B",
    "text": "pdbedit"
  }, {
    "label": "C",
    "text": "smbstatus"
  }, {
    "label": "D",
    "text": "nmblookup"
  }, {
    "label": "E",
    "text": "testparm"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "smbstatus は Samba への現在の接続状況、使用中の共有、ファイルロックの情報を表示します。testparm は設定の検査、nmblookup は NetBIOS 名の問い合わせ、pdbedit と smbpasswd はユーザーデータベースの管理に使用します。",
  "answerKeys": ["Samba サーバーに"],
  "answerTexts": ["smbstatus"],
  "answerHints": ["smbstatus"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-109",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "社内 LAN 上の Windows クライアントの NetBIOS 名が PC01 であることはわかっていますが、IP アドレスが不明です。NetBIOS 名前解決によって IP アドレスを調べるコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "smbstatus -b PC01"
  }, {
    "label": "B",
    "text": "pdbedit -L PC01"
  }, {
    "label": "C",
    "text": "testparm -s PC01"
  }, {
    "label": "D",
    "text": "smbpasswd -r PC01"
  }, {
    "label": "E",
    "text": "nmblookup PC01"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nmblookup は NetBIOS over TCP/IP の名前問い合わせを行い、NetBIOS 名に対応する IP アドレスを表示します。smbstatus は接続状況、pdbedit はユーザーデータベース、testparm は設定の検査に使うコマンドで、名前解決は行いません。",
  "answerKeys": ["社内 LAN"],
  "answerTexts": ["nmblookup PC01"],
  "answerHints": ["nmblookup"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-110",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "nmbd が使用するポートはどれですか。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "TCP 139"
  }, {
    "label": "B",
    "text": "TCP 445"
  }, {
    "label": "C",
    "text": "UDP 137"
  }, {
    "label": "D",
    "text": "UDP 138"
  }, {
    "label": "E",
    "text": "TCP 389"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nmbd は NetBIOS 名前サービスに UDP 137、データグラムサービスに UDP 138 を使用します。TCP 139 と TCP 445 は smbd がファイル共有のセッションに使用するポートで、TCP 389 は LDAP のポートです。",
  "answerKeys": ["nmbd"],
  "answerTexts": ["UDP 137", "UDP 138"],
  "answerHints": ["UDP", "UDP"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-111",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "winbindd の役割として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "NetBIOS 名の登録と名前解決を行い、ブラウズリストを管理する"
  }, {
    "label": "B",
    "text": "SMB/CIFS プロトコルによるファイル共有とプリンタ共有のサービスを提供する"
  }, {
    "label": "C",
    "text": "Windows ドメインのユーザーとグループを Linux の UID/GID に対応付け、NSS や PAM を通じてシステムから利用可能にする"
  }, {
    "label": "D",
    "text": "クライアントに IP アドレスと WINS サーバー情報を配布する"
  }, {
    "label": "E",
    "text": "smb.conf の変更を監視し、自動的に smbd を再起動する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "winbindd はドメインコントローラーと通信して Windows のユーザー・グループ情報を取得し、idmap 設定に基づいて UID/GID を割り当てます。NetBIOS の名前解決は nmbd、ファイル共有は smbd の役割です。",
  "answerKeys": ["winbindd"],
  "answerTexts": ["Windows ドメインのユーザーとグループを Linux の UID/GID に対応付け、NSS や PAM を通じてシステムから利用可能にする"],
  "answerHints": ["Windows"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-112",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "smb.conf を AD メンバー用に設定し、Kerberos の設定も完了しました。Samba サーバーをドメインに参加させるコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "wbinfo -u"
  }, {
    "label": "B",
    "text": "net ads info"
  }, {
    "label": "C",
    "text": "net ads testjoin -U Administrator"
  }, {
    "label": "D",
    "text": "kinit Administrator"
  }, {
    "label": "E",
    "text": "net ads join -U Administrator"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "net ads join はコンピューターアカウントを AD に作成してドメインに参加させます。net ads testjoin は参加状態の確認、net ads info はドメインコントローラーの情報表示、wbinfo -u はドメインユーザーの一覧表示であり、kinit は Kerberos チケットを取得するだけです。",
  "answerKeys": ["smb.conf を"],
  "answerTexts": ["net ads join -U Administrator"],
  "answerHints": ["net ads join"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-113",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Samba 4 を使用して、新しい Active Directory ドメインを作成し、そのドメインコントローラーとしてサーバーを構成するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "smbpasswd -a"
  }, {
    "label": "B",
    "text": "samba-tool user create"
  }, {
    "label": "C",
    "text": "samba-tool domain join"
  }, {
    "label": "D",
    "text": "samba-tool domain provision"
  }, {
    "label": "E",
    "text": "net ads join"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "samba-tool domain provision は新規 AD ドメインを作成し、DC としての初期設定を行います。samba-tool domain join は既存ドメインへの参加、samba-tool user create はユーザー作成、net ads join はメンバーサーバーとしての参加に使用します。",
  "answerKeys": ["Samba 4"],
  "answerTexts": ["samba-tool domain provision"],
  "answerHints": ["samba-tool domain provision"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-114",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "smb.conf に次の設定があります。ドメイン EXAMPLE のユーザーに割り当てられる UID の範囲を選択してください。\n\n[global]\n  workgroup = EXAMPLE\n  security = ads\n  realm = EXAMPLE.COM\n  idmap config * : backend = tdb\n  idmap config * : range = 3000-7999\n  idmap config EXAMPLE : backend = rid\n  idmap config EXAMPLE : range = 10000-999999",
  "choices": [{
    "label": "A",
    "text": "10000〜999999"
  }, {
    "label": "B",
    "text": "1000〜9999"
  }, {
    "label": "C",
    "text": "3000〜7999"
  }, {
    "label": "D",
    "text": "3000〜999999"
  }, {
    "label": "E",
    "text": "0〜7999"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "idmap config DOMAIN : range でドメインごとの ID 範囲を指定し、ここでは EXAMPLE ドメインに rid バックエンドで 10000〜999999 が使われます。idmap config * の 3000〜7999 は、個別設定のないドメインや BUILTIN などのデフォルト用の範囲です。",
  "answerKeys": ["smb.conf に"],
  "answerTexts": ["10000〜999999"],
  "answerHints": ["10000"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-115",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Linux クライアントの /etc/fstab で CIFS 共有を自動マウントする際、ユーザー名とパスワードを別ファイルから読み込むために指定するマウントオプションを選択してください。\n\n//fileserv/share  /mnt/share  cifs  ____=/etc/samba/cred,_netdev  0  0",
  "choices": [{
    "label": "A",
    "text": "cred_file"
  }, {
    "label": "B",
    "text": "credentials"
  }, {
    "label": "C",
    "text": "userfile"
  }, {
    "label": "D",
    "text": "authfile"
  }, {
    "label": "E",
    "text": "passwordfile"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mount.cifs の credentials オプションは、username= と password= を記述したファイルを指定します。fstab に平文のパスワードを書かずに済むため、ファイルのパーミッションを 600 などに制限して利用します。",
  "answerKeys": ["Linux クライアント"],
  "answerTexts": ["credentials"],
  "answerHints": ["credentials"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-116",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "smb.conf の共有セクションで、その共有への書き込みを許可する設定はどれですか。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "read only = yes"
  }, {
    "label": "B",
    "text": "browseable = yes"
  }, {
    "label": "C",
    "text": "writable = yes"
  }, {
    "label": "D",
    "text": "guest ok = yes"
  }, {
    "label": "E",
    "text": "read only = no"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "writable（writeable）は read only の反意語であり、read only = no と writable = yes は同じ意味です。browseable は共有一覧への表示、guest ok はゲスト接続の許可に関するパラメータで、書き込み可否は決めません。",
  "answerKeys": ["smb.conf の共有セクションで"],
  "answerTexts": ["writable = yes", "read only = no"],
  "answerHints": ["writable", "read only = no"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-117",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "共有 [sales] へのアクセスを、Linux の staff グループに所属するユーザーだけに制限したいと考えています。共有セクションに記述する設定として適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "admin users = @staff"
  }, {
    "label": "B",
    "text": "valid users = staff"
  }, {
    "label": "C",
    "text": "valid users = @staff"
  }, {
    "label": "D",
    "text": "valid groups = staff"
  }, {
    "label": "E",
    "text": "force group = staff"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "valid users でグループを指定するには @ を付け、@staff とします。staff とだけ書くと staff という名前のユーザーを指します。admin users は root 権限で操作させるユーザーの指定、force group は接続後のプライマリグループの強制であり、アクセス制限にはなりません。",
  "answerKeys": ["共有"],
  "answerTexts": ["valid users = @staff"],
  "answerHints": ["valid users = @staff"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-118",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "smb.conf の共有セクションに browseable = no を設定した場合の動作として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ネットワーク上のブラウズマスターとして動作しなくなる"
  }, {
    "label": "B",
    "text": "共有一覧には表示されるが、接続すると読み取り専用になる"
  }, {
    "label": "C",
    "text": "共有一覧に表示されず、共有名を指定しても接続できない"
  }, {
    "label": "D",
    "text": "共有一覧には表示されないが、共有名を直接指定すれば接続できる"
  }, {
    "label": "E",
    "text": "ゲストユーザーからのみ共有が見えなくなる"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "browseable = no は共有を一覧（ブラウズリスト）に表示しないだけで、アクセス制御ではありません。共有名を知っていれば接続できるため、アクセスを制限するには valid users や hosts allow などを併用します。",
  "answerKeys": ["smb.conf の共有セクションに"],
  "answerTexts": ["共有一覧には表示されないが、共有名を直接指定すれば接続できる"],
  "answerHints": ["共有一覧には表示されないが"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-119",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "smb.conf の [printers] セクションで、共有をプリンタ共有（印刷キュー）として機能させるために必要な設定を選択してください。",
  "choices": [{
    "label": "A",
    "text": "spool = yes"
  }, {
    "label": "B",
    "text": "browseable = yes"
  }, {
    "label": "C",
    "text": "cups = yes"
  }, {
    "label": "D",
    "text": "writable = yes"
  }, {
    "label": "E",
    "text": "printable = yes"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "printable = yes を指定すると、その共有はプリンタ共有となり、クライアントは path で指定したスプールディレクトリに印刷データを書き込めます。writable はファイル共有での書き込み許可であり、spool や cups というパラメータは存在しません。",
  "answerKeys": ["smb.conf の [printers"],
  "answerTexts": ["printable = yes"],
  "answerHints": ["printable"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-120",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "クライアントごとに別のログファイルを作成するため、次の設定を行いました。%m に展開される値を選択してください。\n\n[global]\n  log file = /var/log/samba/log.%m",
  "choices": [{
    "label": "A",
    "text": "クライアントの NetBIOS 名"
  }, {
    "label": "B",
    "text": "接続ユーザーのホームディレクトリ"
  }, {
    "label": "C",
    "text": "接続ユーザーのユーザー名"
  }, {
    "label": "D",
    "text": "クライアントの IP アドレス"
  }, {
    "label": "E",
    "text": "接続先の共有名"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "%m はクライアントの NetBIOS 名に置換されるため、クライアントごとにログを分けられます。ユーザー名は %U、共有名は %S、クライアントの IP アドレスは %I、ホームディレクトリは %H です。",
  "answerKeys": ["クライアントごとに"],
  "answerTexts": ["クライアントの NetBIOS 名"],
  "answerHints": ["クライアントの NetBIOS"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-121",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Windows クライアントのネットワーク上に Samba サーバーを FILESV01 という名前で表示させたいと考えています。[global] セクションで設定すべきパラメータを選択してください。",
  "choices": [{
    "label": "A",
    "text": "netbios aliases"
  }, {
    "label": "B",
    "text": "netbios name"
  }, {
    "label": "C",
    "text": "workgroup"
  }, {
    "label": "D",
    "text": "server string"
  }, {
    "label": "E",
    "text": "realm"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "netbios name はサーバーの NetBIOS 名を設定し、省略時はホスト名の先頭部分が使われます。server string はサーバーの説明文、workgroup は所属するワークグループやドメイン名、netbios aliases は追加の別名を指定します。",
  "answerKeys": ["Windows クライアント"],
  "answerTexts": ["netbios name"],
  "answerHints": ["netbios name"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-122",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "休職中の社員 hanako の Samba アカウントを、データベースから削除せずに一時的に使用できなくしたいと考えています。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "smbpasswd -a hanako"
  }, {
    "label": "B",
    "text": "smbpasswd -e hanako"
  }, {
    "label": "C",
    "text": "smbpasswd -n hanako"
  }, {
    "label": "D",
    "text": "smbpasswd -d hanako"
  }, {
    "label": "E",
    "text": "smbpasswd -x hanako"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "smbpasswd -d は Samba アカウントを無効化し、-e で再び有効化できます。-x はアカウントの削除、-a は追加、-n は空パスワードの設定です。",
  "answerKeys": ["休職中の"],
  "answerTexts": ["smbpasswd -d hanako"],
  "answerHints": ["smbpasswd -d"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-123",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Samba のパスワードデータベースにユーザーを追加できるコマンドはどれですか。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "smbstatus -a ユーザー名"
  }, {
    "label": "B",
    "text": "smbpasswd -a ユーザー名"
  }, {
    "label": "C",
    "text": "pdbedit -a ユーザー名"
  }, {
    "label": "D",
    "text": "nmblookup -A ユーザー名"
  }, {
    "label": "E",
    "text": "testparm -a ユーザー名"
  }],
  "answer": ["B", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "smbpasswd -a と pdbedit -a は、いずれも Samba のパスワードデータベースにユーザーを追加します。nmblookup -A は IP アドレスを指定したノードステータスの問い合わせであり、smbstatus と testparm はユーザーを追加する機能を持ちません。",
  "answerKeys": ["Samba のパスワードデータベースにユーザー"],
  "answerTexts": ["smbpasswd -a ユーザー名", "pdbedit -a ユーザー名"],
  "answerHints": ["smbpasswd", "pdbedit"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-124",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "次の共有設定があります。alice は staff グループのみ、bob は staff と admins の両グループに所属しています。ファイルシステムのパーミッションは十分に与えられているものとして、正しい説明を選択してください。\n\n[projects]\n  path = /srv/projects\n  read only = yes\n  valid users = @staff\n  write list = @admins",
  "choices": [{
    "label": "A",
    "text": "alice も bob も書き込み可能である"
  }, {
    "label": "B",
    "text": "alice は読み取りのみ可能で、bob は書き込みも可能である"
  }, {
    "label": "C",
    "text": "alice も bob も読み取りのみ可能である"
  }, {
    "label": "D",
    "text": "alice は読み取りのみ可能で、bob は接続できない"
  }, {
    "label": "E",
    "text": "alice は接続できず、bob は書き込み可能である"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "write list に含まれるユーザーは、read only = yes の共有でも書き込みが許可されます。bob は valid users の staff に含まれるため接続でき、さらに admins により書き込みも可能です。alice は staff のみなので接続はできますが読み取り専用です。",
  "answerKeys": ["次の共有設定があり"],
  "answerTexts": ["alice は読み取りのみ可能で、bob は書き込みも可能である"],
  "answerHints": ["alice は読み取りのみ可能で、bob は書き"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-125",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "存在しないユーザー名でログインしようとした接続はゲストとして受け入れ、既存ユーザーがパスワードを間違えた場合は拒否したいと考えています。[global] セクションの設定として適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "map to guest = Bad Password"
  }, {
    "label": "B",
    "text": "guest account = nobody"
  }, {
    "label": "C",
    "text": "guest only = yes"
  }, {
    "label": "D",
    "text": "map to guest = Never"
  }, {
    "label": "E",
    "text": "map to guest = Bad User"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "map to guest = Bad User は、存在しないユーザーでのログインをゲストアカウントに対応付け、既存ユーザーのパスワード誤りは拒否します。Bad Password はパスワード誤りもゲスト扱いにし、Never はゲストへの対応付けを行いません。guest account はゲストが使う Linux アカウントを指定するだけです。",
  "answerKeys": ["存在しない"],
  "answerTexts": ["map to guest = Bad User"],
  "answerHints": ["map to guest = Bad User"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-126",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NFS サーバーに次の /etc/exports を設定したところ、192.168.1.10 からは書き込めず、他のホストからは書き込めてしまいました。原因を選択してください。\n\n/srv/share  192.168.1.10 (rw)",
  "choices": [{
    "label": "A",
    "text": "rw の代わりに writable と記述する必要がある"
  }, {
    "label": "B",
    "text": "sync オプションが指定されていないため書き込みが拒否された"
  }, {
    "label": "C",
    "text": "ホスト名と括弧の間に空白があるため、192.168.1.10 はデフォルトの ro、全ホストが rw として解釈された"
  }, {
    "label": "D",
    "text": "root_squash が有効なため、すべてのユーザーが書き込めない"
  }, {
    "label": "E",
    "text": "IP アドレスではなくホスト名で指定する必要がある"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/exports ではホストとオプションの括弧の間に空白を入れると、括弧部分は別のエントリ（全ホスト対象）として解釈されます。その結果、192.168.1.10 はデフォルトの ro、それ以外の全ホストが rw になります。正しくは 192.168.1.10(rw) と続けて記述します。",
  "answerKeys": ["NFS サーバーに"],
  "answerTexts": ["ホスト名と括弧の間に空白があるため、192.168.1.10 はデフォルトの ro、全ホストが rw として解釈された"],
  "answerHints": ["ホスト"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-127",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NFS クライアントで root ユーザーが共有上にファイルを作成すると所有者が nobody になりますが、一般ユーザーが作成したファイルは本人の UID で作成されます。この動作をもたらしているエクスポートオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "root_squash"
  }, {
    "label": "B",
    "text": "all_squash"
  }, {
    "label": "C",
    "text": "sync"
  }, {
    "label": "D",
    "text": "no_root_squash"
  }, {
    "label": "E",
    "text": "secure"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "root_squash はクライアントの root（UID 0）からの要求を匿名ユーザー（通常 nobody）に対応付けるオプションで、デフォルトで有効です。all_squash はすべてのユーザーを匿名ユーザーに対応付け、no_root_squash は root をそのまま root として扱います。",
  "answerKeys": ["NFS クライアントで root"],
  "answerTexts": ["root_squash"],
  "answerHints": ["root_squash"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-128",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NFS サーバーの /etc/exports が次のとおりです。UID 1000 のクライアントユーザーがこの共有にファイルを作成した場合、サーバー上のファイルの所有者 UID を選択してください。\n\n/srv/pub  *(rw,sync,all_squash,anonuid=1500,anongid=1500)",
  "choices": [{
    "label": "A",
    "text": "0"
  }, {
    "label": "B",
    "text": "65534"
  }, {
    "label": "C",
    "text": "1500"
  }, {
    "label": "D",
    "text": "1000"
  }, {
    "label": "E",
    "text": "所有者は作成できずエラーになる"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "all_squash はすべてのユーザーを匿名ユーザーに対応付け、anonuid と anongid でその UID/GID を指定します。そのため UID 1000 のユーザーが作成したファイルも UID 1500 となります。anonuid を指定しない場合は通常 65534（nobody）が使われます。",
  "answerKeys": ["NFS サーバーの /"],
  "answerTexts": ["1500"],
  "answerHints": ["1500"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-129",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/exports からエントリを1つ削除し、別のエントリを追加しました。NFS サービスを再起動せずに、削除したエントリのエクスポート解除も含めて現在のエクスポート状態を /etc/exports と同期させるコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "exportfs -u"
  }, {
    "label": "B",
    "text": "showmount -e"
  }, {
    "label": "C",
    "text": "exportfs -v"
  }, {
    "label": "D",
    "text": "exportfs -r"
  }, {
    "label": "E",
    "text": "rpcinfo -p"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "exportfs -r はすべてのディレクトリを再エクスポートし、/etc/exports から削除されたエントリを解除して同期させます。exportfs -u はエクスポートの解除、exportfs -v は現在のエクスポート状況の表示、showmount -e はエクスポート一覧の問い合わせです。",
  "answerKeys": ["/etc/exports から"],
  "answerTexts": ["exportfs -r"],
  "answerHints": ["exportfs -r"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-130",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NFS サーバー上で、現在エクスポートされているディレクトリと、それぞれに適用されているオプションを表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "exportfs -v"
  }, {
    "label": "B",
    "text": "exportfs -f"
  }, {
    "label": "C",
    "text": "rpcinfo -s"
  }, {
    "label": "D",
    "text": "nfsstat -m"
  }, {
    "label": "E",
    "text": "showmount -d"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "exportfs -v は現在のエクスポート一覧を、適用されているオプションとともに表示します。showmount -d はクライアントにマウントされているディレクトリのみを表示し、nfsstat -m はクライアント側でマウント中の NFS ファイルシステムの情報を表示します。",
  "answerKeys": ["NFS サーバー上で"],
  "answerTexts": ["exportfs -v"],
  "answerHints": ["exportfs -v"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-131",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "NFS クライアントから、サーバー nfssrv がエクスポートしているディレクトリの一覧を確認するには「____ -e nfssrv」を実行します。空欄に入るコマンド名を記述してください。",
  "choices": [],
  "answer": ["showmount"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "showmount -e はサーバーの mountd に問い合わせ、エクスポート一覧とアクセスを許可されたクライアントを表示します。-a を指定するとクライアントとマウント中ディレクトリの組を表示します。",
  "answerKeys": ["NFS クライアントから、"],
  "answerTexts": ["showmount"],
  "answerHints": ["showmount"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-132",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NFS クライアントからマウントできないため、サーバー上で mountd や nfs が rpcbind に登録されているかを確認したいと考えています。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "exportfs -v"
  }, {
    "label": "B",
    "text": "rpcinfo -p"
  }, {
    "label": "C",
    "text": "rpcinfo -d"
  }, {
    "label": "D",
    "text": "nfsstat -r"
  }, {
    "label": "E",
    "text": "showmount -a"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "rpcinfo -p は rpcbind（ポートマッパー）に登録されている RPC プログラムの番号、バージョン、プロトコル、ポートを一覧表示します。rpcinfo -d は登録を削除する操作であり、nfsstat -r は RPC の統計情報を表示します。",
  "answerKeys": ["NFS クライアントからマウント"],
  "answerTexts": ["rpcinfo -p"],
  "answerHints": ["rpcinfo -p"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-133",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NFS クライアント側の統計情報だけを表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "nfsstat -m"
  }, {
    "label": "B",
    "text": "nfsstat -s"
  }, {
    "label": "C",
    "text": "nfsstat -n"
  }, {
    "label": "D",
    "text": "nfsstat -r"
  }, {
    "label": "E",
    "text": "nfsstat -c"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nfsstat -c はクライアント側の統計のみを表示します。-s はサーバー側の統計、-m はマウント中の NFS ファイルシステムの情報、-r は RPC の統計、-n は NFS の統計（クライアント・サーバー両方）を表示します。",
  "answerKeys": ["NFS クライアント側の"],
  "answerTexts": ["nfsstat -c"],
  "answerHints": ["nfsstat -c"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-134",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "NFSv4 の特徴として正しいものはどれですか。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "クライアントは必ず rpcbind に問い合わせて nfsd のポート番号を取得する"
  }, {
    "label": "B",
    "text": "ステートレスなプロトコルであり、ファイルロックは lockd と statd が別途処理する"
  }, {
    "label": "C",
    "text": "TCP ポート 2049 だけで通信でき、クライアントは mountd や rpcbind にアクセスする必要がない"
  }, {
    "label": "D",
    "text": "UDP のみを使用するため、ファイアウォールでは UDP 2049 だけを許可すればよい"
  }, {
    "label": "E",
    "text": "サーバー側で fsid=0 を指定したディレクトリを擬似ファイルシステムのルートとして公開できる"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "NFSv4 はマウントやロックの機能をプロトコルに統合しており、TCP 2049 のみで通信できます。また fsid=0 を付けたエクスポートを擬似ファイルシステムのルートとして公開できます。NFSv4 はステートフルなプロトコルで、通常は TCP を使用します。",
  "answerKeys": ["NFSv4 の"],
  "answerTexts": ["TCP ポート 2049 だけで通信でき、クライアントは mountd や rpcbind にアクセスする必要がない", "サーバー側で fsid=0 を指定したディレクトリを擬似ファイルシステムのルートとして公開できる"],
  "answerHints": ["TCP", "サーバー"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-135",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NFS サーバーのファイアウォールで、NFSv3 クライアントが RPC サービスのポート番号を問い合わせるために必要な rpcbind のポート番号を選択してください。",
  "choices": [{
    "label": "A",
    "text": "111"
  }, {
    "label": "B",
    "text": "20048"
  }, {
    "label": "C",
    "text": "135"
  }, {
    "label": "D",
    "text": "2049"
  }, {
    "label": "E",
    "text": "445"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "rpcbind（ポートマッパー）は TCP/UDP の 111 番ポートで待ち受け、RPC プログラム番号とポート番号を対応付けます。2049 は nfsd、135 は Microsoft RPC、445 は SMB で使用されるポートです。",
  "answerKeys": ["NFS サーバーのファイアウォール"],
  "answerTexts": ["111"],
  "answerHints": ["111"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-136",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NFS クライアントで次のようにマウントしていましたが、サーバー障害時にアプリケーションが応答しなくなりました。サーバーが応答しない場合に一定回数の再試行後、アプリケーションへエラーを返すようにするために追加するマウントオプションを選択してください。\n\n# mount -t nfs nfssrv:/srv/data /mnt/data",
  "choices": [{
    "label": "A",
    "text": "hard"
  }, {
    "label": "B",
    "text": "nolock"
  }, {
    "label": "C",
    "text": "noac"
  }, {
    "label": "D",
    "text": "soft"
  }, {
    "label": "E",
    "text": "bg"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "soft を指定すると、サーバーが応答しない場合に retrans で指定した回数だけ再試行した後、呼び出し元にエラーを返します。デフォルトの hard は無期限に再試行するため、プロセスが応答待ちのままになります。bg はマウント自体の再試行をバックグラウンドで行うオプションです。",
  "answerKeys": ["NFS クライアントで次のよう"],
  "answerTexts": ["soft"],
  "answerHints": ["soft"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-137",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "TCP Wrappers を利用して rpcbind などへのアクセスを制御する場合に、設定を記述するファイルはどれですか。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "/etc/exports"
  }, {
    "label": "B",
    "text": "/etc/hosts.deny"
  }, {
    "label": "C",
    "text": "/etc/hosts.allow"
  }, {
    "label": "D",
    "text": "/etc/securetty"
  }, {
    "label": "E",
    "text": "/etc/nfs.conf"
  }],
  "answer": ["B", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TCP Wrappers（libwrap）は /etc/hosts.allow と /etc/hosts.deny を参照し、hosts.allow に一致すれば許可、次に hosts.deny に一致すれば拒否します。/etc/exports は NFS のエクスポート設定、/etc/securetty は root のログインを許可する端末の指定です。",
  "answerKeys": ["TCP Wrappers を"],
  "answerTexts": ["/etc/hosts.deny", "/etc/hosts.allow"],
  "answerHints": ["/etc/hosts", "/etc/hosts"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-138",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/exports で指定するオプションのうち、書き込み内容をディスクに確定させてからクライアントに応答する（現在の nfs-utils のデフォルトである）ものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "wdelay"
  }, {
    "label": "B",
    "text": "async"
  }, {
    "label": "C",
    "text": "sync"
  }, {
    "label": "D",
    "text": "secure"
  }, {
    "label": "E",
    "text": "no_wdelay"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sync はデータが安定したストレージに書き込まれてから応答するため、サーバー障害時のデータ損失を防げます。async は書き込み完了前に応答するため高速ですが、サーバーがクラッシュするとデータが失われる可能性があります。wdelay は関連する書き込みをまとめるために書き込みを遅延させるオプションです。",
  "answerKeys": ["/etc/exports で指定する"],
  "answerTexts": ["sync"],
  "answerHints": ["sync"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-139",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "/etc/exports のクライアント指定として有効な書式はどれですか。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "192.168.1.10-20"
  }, {
    "label": "B",
    "text": "ALL"
  }, {
    "label": "C",
    "text": "*.example.com"
  }, {
    "label": "D",
    "text": "192.168.1.0:255.255.255.0"
  }, {
    "label": "E",
    "text": "192.168.1.0/24"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/exports ではネットワークを address/netmask または CIDR 表記で指定でき、ホスト名には * や ? のワイルドカードを使用できます。ALL は TCP Wrappers のキーワードであり、コロン区切りや範囲指定の書式は使用できません。",
  "answerKeys": ["/etc/exports の"],
  "answerTexts": ["*.example.com", "192.168.1.0/24"],
  "answerHints": ["*", "192.168.1.0/24"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-140",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/exports を編集せずに、/srv/tmp を一時的にホスト 192.168.1.20 へ読み書き可能でエクスポートしたいと考えています。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mount -t nfs -o rw 192.168.1.20:/srv/tmp /srv/tmp"
  }, {
    "label": "B",
    "text": "exportfs -o rw 192.168.1.20:/srv/tmp"
  }, {
    "label": "C",
    "text": "showmount -o rw 192.168.1.20:/srv/tmp"
  }, {
    "label": "D",
    "text": "exportfs -f rw 192.168.1.20:/srv/tmp"
  }, {
    "label": "E",
    "text": "exportfs -u rw 192.168.1.20:/srv/tmp"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "exportfs に client:/path を指定するとそのディレクトリを直接エクスポートでき、-o でオプションを指定します。この設定は /etc/exports に書き込まれないため、exportfs -r の実行やサービス再起動で失われます。-u はエクスポートの解除、-f はカーネルのエクスポートテーブルのフラッシュです。",
  "answerKeys": ["/etc/exports を"],
  "answerTexts": ["exportfs -o rw 192.168.1.20:/srv/tmp"],
  "answerHints": ["exportfs -o"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-141",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "dhcpd.conf に次の設定があります。このサブネットのクライアントに動的に割り当てられるアドレスとして正しいものを選択してください。\n\nsubnet 192.168.10.0 netmask 255.255.255.0 {\n  range 192.168.10.100 192.168.10.150;\n  option routers 192.168.10.1;\n}",
  "choices": [{
    "label": "A",
    "text": "192.168.10.100 と 192.168.10.150 の2個"
  }, {
    "label": "B",
    "text": "192.168.10.100〜192.168.10.150 の50個"
  }, {
    "label": "C",
    "text": "192.168.10.101〜192.168.10.149 の49個"
  }, {
    "label": "D",
    "text": "192.168.10.1〜192.168.10.254 の254個"
  }, {
    "label": "E",
    "text": "192.168.10.100〜192.168.10.150 の51個"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "range 文は開始アドレスと終了アドレスを指定し、両端を含む範囲が動的割り当てに使われるため 51 個となります。option routers はクライアントに通知するデフォルトゲートウェイであり、割り当て範囲には影響しません。",
  "answerKeys": ["dhcpd.conf に次の設定があります。この"],
  "answerTexts": ["192.168.10.100〜192.168.10.150 の51個"],
  "answerHints": ["192.168.10.100〜192.168.10.150 の51"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-142",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "dhcpd.conf に次の設定があります。クライアントが DHCPREQUEST で 10800 秒のリース期間を要求した場合に与えられるリース期間を選択してください。\n\ndefault-lease-time 3600;\nmax-lease-time 7200;",
  "choices": [{
    "label": "A",
    "text": "リース要求が拒否される"
  }, {
    "label": "B",
    "text": "7200秒"
  }, {
    "label": "C",
    "text": "10800秒"
  }, {
    "label": "D",
    "text": "14400秒"
  }, {
    "label": "E",
    "text": "3600秒"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "max-lease-time はクライアントが要求できるリース期間の上限で、それを超える要求は 7200 秒に制限されます。default-lease-time はクライアントがリース期間を指定しなかった場合に使われる値です。",
  "answerKeys": ["dhcpd.conf に次の設定があります。クライアント"],
  "answerTexts": ["7200秒"],
  "answerHints": ["7200"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-143",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "DHCP クライアントにデフォルトゲートウェイと DNS サーバーのアドレスを通知するために、dhcpd.conf に記述するオプションはどれですか。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "option domain-name-servers"
  }, {
    "label": "B",
    "text": "option dns-servers"
  }, {
    "label": "C",
    "text": "option gateway"
  }, {
    "label": "D",
    "text": "option domain-name"
  }, {
    "label": "E",
    "text": "option routers"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "デフォルトゲートウェイは option routers、DNS サーバーは option domain-name-servers で指定し、複数のアドレスはカンマで区切ります。option domain-name は DNS のドメイン名（検索ドメイン）の通知に使用し、option gateway や option dns-servers は存在しません。",
  "answerKeys": ["DHCP クライアントに"],
  "answerTexts": ["option domain-name-servers", "option routers"],
  "answerHints": ["option domain-name-servers", "option routers"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-144",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ネットワークプリンタに常に同じ IP アドレスを割り当てるため、dhcpd.conf に次の host 宣言を記述します。空欄に入るキーワードを選択してください。\n\nhost printer1 {\n   ____ 00:11:22:33:44:55;\n   fixed-address 192.168.10.20;\n}",
  "choices": [{
    "label": "A",
    "text": "hardware ethernet"
  }, {
    "label": "B",
    "text": "hardware-address"
  }, {
    "label": "C",
    "text": "ethernet"
  }, {
    "label": "D",
    "text": "host-id"
  }, {
    "label": "E",
    "text": "mac-address"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "host 宣言では hardware ethernet で MAC アドレスを指定してクライアントを識別し、fixed-address で割り当てる固定 IP アドレスを指定します。その他の選択肢は ISC dhcpd の構文に存在しません。",
  "answerKeys": ["ネットワークプリンタ"],
  "answerTexts": ["hardware ethernet"],
  "answerHints": ["hardware ethernet"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-145",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ISC DHCP サーバーが、払い出したリースの情報（IP アドレス、MAC アドレス、リース開始・終了時刻など）を記録するファイルの名前を選択してください。",
  "choices": [{
    "label": "A",
    "text": "dhcpd.conf"
  }, {
    "label": "B",
    "text": "leases.db"
  }, {
    "label": "C",
    "text": "dhcpd.pid"
  }, {
    "label": "D",
    "text": "dhcpd.leases"
  }, {
    "label": "E",
    "text": "dhclient.leases"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dhcpd はリース情報を dhcpd.leases に追記形式で記録し、再起動時にはこのファイルを読み込んでリース状態を復元します。dhclient.leases は DHCP クライアント側がリースを記録するファイルで、dhcpd.conf はサーバーの設定ファイルです。",
  "answerKeys": ["ISC DHCP サーバーが"],
  "answerTexts": ["dhcpd.leases"],
  "answerHints": ["dhcpd.leases"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-146",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "DHCP サーバーが存在しないセグメントのクライアントからのブロードキャスト要求を、別セグメントの DHCP サーバーへ転送する ISC DHCP のリレーエージェントのコマンド名を記述してください。",
  "choices": [],
  "answer": ["dhcrelay"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dhcrelay は DHCP リレーエージェントで、受信した DHCP 要求をユニキャストで指定した DHCP サーバーへ転送し、応答をクライアントに中継します。ルーターを越えて DHCP サーバーを共用する場合に使用します。",
  "answerKeys": ["DHCP サーバー"],
  "answerTexts": ["dhcrelay"],
  "answerHints": ["dhcrelay"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-147",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "radvd の説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "IPv6 の経路情報を RIPng で交換するルーティングデーモン"
  }, {
    "label": "B",
    "text": "IPv4 アドレスの重複を検出して通知するデーモン"
  }, {
    "label": "C",
    "text": "IPv6 のルーター広告（RA）を送信し、クライアントのステートレスアドレス自動設定（SLAAC）を可能にするデーモン"
  }, {
    "label": "D",
    "text": "DHCP のリース情報を DNS に動的に登録するデーモン"
  }, {
    "label": "E",
    "text": "DHCPv6 のリレーエージェントとして動作するデーモン"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "radvd（Router Advertisement Daemon）は /etc/radvd.conf の設定に基づいてルーター広告を送信し、プレフィックス情報などをクライアントに通知します。クライアントはこれを用いて SLAAC によりアドレスを自動生成します。DHCPv6 のリレーや経路制御プロトコルの機能はありません。",
  "answerKeys": ["radvd"],
  "answerTexts": ["IPv6 のルーター広告（RA）を送信し、クライアントのステートレスアドレス自動設定（SLAAC）を可能にするデーモン"],
  "answerHints": ["IPv6 のルーター"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-148",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "DHCPv6 サーバーが要求を待ち受けるポートを選択してください。",
  "choices": [{
    "label": "A",
    "text": "UDP 546"
  }, {
    "label": "B",
    "text": "TCP 547"
  }, {
    "label": "C",
    "text": "UDP 68"
  }, {
    "label": "D",
    "text": "UDP 67"
  }, {
    "label": "E",
    "text": "UDP 547"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "DHCPv6 ではサーバーとリレーエージェントが UDP 547、クライアントが UDP 546 を使用します。UDP 67 と UDP 68 は DHCPv4 のサーバーとクライアントのポートです。",
  "answerKeys": ["DHCPv6 サーバー"],
  "answerTexts": ["UDP 547"],
  "answerHints": ["UDP 547"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-149",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "IPv6 ネットワークで、クライアントにルーター広告を受信させたうえで、アドレスは DHCPv6 サーバーから取得させたいと考えています。/etc/radvd.conf のインターフェース設定に記述すべきものを選択してください。\n\ninterface eth0 {\n  AdvSendAdvert on;\n\n  ____\n  prefix 2001:db8:1::/64 {\n  };\n};",
  "choices": [{
    "label": "A",
    "text": "AdvOtherConfigFlag off;"
  }, {
    "label": "B",
    "text": "AdvDefaultPreference high;"
  }, {
    "label": "C",
    "text": "AdvSendAdvert off;"
  }, {
    "label": "D",
    "text": "AdvManagedFlag on;"
  }, {
    "label": "E",
    "text": "AdvLinkMTU 1280;"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "AdvManagedFlag on を設定すると RA の M フラグが立ち、クライアントはアドレスを DHCPv6（ステートフル）で取得します。AdvOtherConfigFlag は DNS サーバーなどアドレス以外の情報を DHCPv6 で取得させる O フラグです。AdvSendAdvert off にすると RA 自体が送信されません。",
  "answerKeys": ["IPv6 ネットワーク"],
  "answerTexts": ["AdvManagedFlag on;"],
  "answerHints": ["AdvManagedFlag"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-150",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ISC dhcpd を DHCPv6 サーバーとして起動するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "dhcpd --v6 -cf /etc/dhcp/dhcpd6.conf eth0"
  }, {
    "label": "B",
    "text": "dhcpd -6 -cf /etc/dhcp/dhcpd6.conf eth0"
  }, {
    "label": "C",
    "text": "radvd -6 -C /etc/dhcp/dhcpd6.conf"
  }, {
    "label": "D",
    "text": "dhcrelay -6 -cf /etc/dhcp/dhcpd6.conf eth0"
  }, {
    "label": "E",
    "text": "dhcpd -4 -cf /etc/dhcp/dhcpd6.conf eth0"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ISC dhcpd は -6 を指定すると DHCPv6 サーバーとして動作し、-cf で設定ファイルを指定します。DHCPv4 と DHCPv6 は別プロセスとして起動し、設定ファイルも dhcpd6.conf のように分けるのが一般的です。dhcrelay はリレーエージェント、radvd はルーター広告のデーモンです。",
  "answerKeys": ["ISC dhcpd を DHCPv6"],
  "answerTexts": ["dhcpd -6 -cf /etc/dhcp/dhcpd6.conf eth0"],
  "answerHints": ["dhcpd -6"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-151",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "PAM の制御フラグのうち、そのモジュールが失敗した時点で以降のモジュールを実行せず、直ちにアプリケーションへ失敗を返すものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "required"
  }, {
    "label": "B",
    "text": "include"
  }, {
    "label": "C",
    "text": "sufficient"
  }, {
    "label": "D",
    "text": "optional"
  }, {
    "label": "E",
    "text": "requisite"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "requisite はモジュールが失敗するとスタックの処理をその場で打ち切り、直ちに失敗を返します。required も失敗すれば最終結果は失敗になりますが、残りのモジュールは最後まで実行されます。sufficient は成功時に処理を打ち切るフラグで、optional は通常最終結果に影響しません。",
  "answerKeys": ["PAM の"],
  "answerTexts": ["requisite"],
  "answerHints": ["requisite"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-152",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/pam.d/ 内のあるサービスの auth スタックが次のように設定されています。ローカルユーザーが正しいパスワードを入力した場合の動作として正しいものを選択してください。\n\nauth  required    pam_env.so\nauth  sufficient  pam_unix.so\nauth  required    pam_deny.so",
  "choices": [{
    "label": "A",
    "text": "sufficient のモジュールは結果が無視されるため、pam_env.so の結果だけで判定される"
  }, {
    "label": "B",
    "text": "pam_deny.so は required なので、pam_unix.so の結果にかかわらず先に評価される"
  }, {
    "label": "C",
    "text": "pam_unix.so が成功した時点で認証成功となり、pam_deny.so は実行されない"
  }, {
    "label": "D",
    "text": "pam_unix.so が成功すると、パスワード変更処理が続けて実行される"
  }, {
    "label": "E",
    "text": "pam_unix.so が成功しても pam_deny.so が実行されるため、認証は必ず失敗する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sufficient のモジュールが成功し、それ以前の required モジュールが失敗していなければ、その時点でスタックの処理は成功として終了します。そのため pam_deny.so は実行されません。パスワードが誤っている場合は pam_unix.so が失敗し、続く pam_deny.so によって認証が拒否されます。",
  "answerKeys": ["/etc/pam.d/ 内のある"],
  "answerTexts": ["pam_unix.so が成功した時点で認証成功となり、pam_deny.so は実行されない"],
  "answerHints": ["pam_unix.so が成功した"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-153",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "PAM 設定ファイルで使用できるモジュールタイプを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "login"
  }, {
    "label": "B",
    "text": "identity"
  }, {
    "label": "C",
    "text": "session"
  }, {
    "label": "D",
    "text": "authorize"
  }, {
    "label": "E",
    "text": "account"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "PAM のモジュールタイプは auth、account、password、session の4種類です。account はアカウントの有効期限やアクセス可否を確認し、session はログイン前後の処理（ログ記録やリソース制限など）を行います。authorize、login、identity というモジュールタイプは存在しません。",
  "answerKeys": ["PAM 設定ファイルで"],
  "answerTexts": ["session", "account"],
  "answerHints": ["session", "account"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-154",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/security/limits.conf に次の行が記述されています。この設定の意味として正しいものを選択してください。\n\n@developers   hard    nofile   4096",
  "choices": [{
    "label": "A",
    "text": "developers グループのメンバーは、同時に開けるファイル数の上限を 4096 より大きくできない"
  }, {
    "label": "B",
    "text": "developers グループのメンバーは、作成できるファイルサイズが 4096KB に制限される"
  }, {
    "label": "C",
    "text": "developers グループのメンバーは、同時に実行できるプロセス数が 4096 に制限される"
  }, {
    "label": "D",
    "text": "developers グループのメンバーのログイン時の既定値が 4096 となり、ulimit で自由に引き上げられる"
  }, {
    "label": "E",
    "text": "developers というユーザーだけ、同時に開けるファイル数が 4096 に制限される"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "先頭の @ はグループ指定を表し、nofile はオープンできるファイルディスクリプタ数を意味します。hard 制限は一般ユーザーが ulimit で引き上げられない上限値です。プロセス数は nproc、ファイルサイズは fsize で指定し、引き上げ可能な既定値は soft 制限で設定します。この設定は pam_limits モジュールによって適用されます。",
  "answerKeys": ["/etc/security"],
  "answerTexts": ["developers グループのメンバーは、同時に開けるファイル数の上限を 4096 より大きくできない"],
  "answerHints": ["developers グループのメンバーは、同時に開ける"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-155",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "/etc/pam.d/ 内にアプリケーションのサービス名に対応する設定ファイルが存在しない場合に、代わりに使用される PAM 設定ファイルを絶対パスで記述してください。",
  "choices": [],
  "answer": ["/etc/pam.d/other"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "サービス名に一致するファイルが /etc/pam.d/ にない場合、PAM は /etc/pam.d/other の設定を使用します。安全のため、このファイルには pam_deny.so などで一律に拒否する設定を記述するのが一般的です。",
  "answerKeys": ["/etc/pam.d/ 内に"],
  "answerTexts": ["/etc/pam.d/other"],
  "answerHints": ["/etc/pam.d/other"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-156",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "システムメンテナンス中に、root 以外のユーザーのログインを一時的に拒否したいと考えています。pam_nologin モジュールが設定されている環境で行う操作として適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/shells からすべてのシェルを削除する"
  }, {
    "label": "B",
    "text": "/etc/security/limits.conf で maxlogins を 0 にする"
  }, {
    "label": "C",
    "text": "/etc/pam.d/other を削除する"
  }, {
    "label": "D",
    "text": "/etc/security/access.conf に ALL を記述する"
  }, {
    "label": "E",
    "text": "/etc/nologin ファイルを作成する"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "pam_nologin は /etc/nologin が存在する場合に root 以外のユーザーのログインを拒否し、そのファイルの内容をユーザーに表示します。メンテナンス終了後はファイルを削除すればログインが再び可能になります。/etc/pam.d/other を削除しても、既存サービスの設定ファイルには影響しません。",
  "answerKeys": ["システムメンテナンス"],
  "answerTexts": ["/etc/nologin ファイルを作成する"],
  "answerHints": ["/etc/nologin"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-157",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/pam.d/su に次の行を有効にしました。この設定による効果として正しいものを選択してください。\n\nauth    required    pam_wheel.so use_uid",
  "choices": [{
    "label": "A",
    "text": "su を実行したユーザーの UID が wheel グループの GID に変更される"
  }, {
    "label": "B",
    "text": "wheel グループのメンバーはパスワードなしで su を実行できる"
  }, {
    "label": "C",
    "text": "root ユーザーだけが su を実行できるようになる"
  }, {
    "label": "D",
    "text": "wheel グループに所属しないユーザーは su によるユーザー切り替えが拒否される"
  }, {
    "label": "E",
    "text": "wheel グループのメンバーは su を使用できなくなる"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "pam_wheel は wheel グループのメンバーシップを確認し、メンバーでないユーザーの su を拒否します。use_uid オプションはログイン名ではなく現在の UID に基づいてユーザーを判定する指定です。パスワードなしで su を許可するには pam_wheel.so に trust オプションを付け、sufficient で記述します。",
  "answerKeys": ["/etc/pam.d/su"],
  "answerTexts": ["wheel グループに所属しないユーザーは su によるユーザー切り替えが拒否される"],
  "answerHints": ["wheel グループに"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-158",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/pam.d/sshd に次の行を追加しました。/etc/ssh/denyusers に記載されているユーザー taro が SSH でログインしようとした場合の動作として正しいものを選択してください。\n\nauth  required  pam_listfile.so item=user sense=deny \\\n      file=/etc/ssh/denyusers onerr=succeed",
  "choices": [{
    "label": "A",
    "text": "/etc/ssh/denyusers の内容は sshd の再起動後に初めて反映される"
  }, {
    "label": "B",
    "text": "taro はパスワード認証なしでログインできる"
  }, {
    "label": "C",
    "text": "taro のログインは拒否される"
  }, {
    "label": "D",
    "text": "onerr=succeed が指定されているため、taro のログインは常に許可される"
  }, {
    "label": "E",
    "text": "taro だけがログインを許可され、他のユーザーは拒否される"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "pam_listfile は item で指定した項目（ここではユーザー名）がファイルに含まれるかを確認し、sense=deny の場合は一致したユーザーを拒否します。onerr=succeed はファイルが開けないなどのエラー時に成功を返す指定で、一致したユーザーの扱いには影響しません。一覧のユーザーだけを許可したい場合は sense=allow を指定します。",
  "answerKeys": ["/etc/pam.d/sshd に次の"],
  "answerTexts": ["taro のログインは拒否される"],
  "answerHints": ["taro の"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-159",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/pam.d/passwd に次の行があります。retry=3 の意味として正しいものを選択してください。\n\npassword  requisite  pam_pwquality.so retry=3 minlen=12",
  "choices": [{
    "label": "A",
    "text": "要件を満たさない新パスワードが入力された場合、最大3回まで再入力を求めてからエラーを返す"
  }, {
    "label": "B",
    "text": "新パスワードには3種類以上の文字種を含める必要がある"
  }, {
    "label": "C",
    "text": "過去3世代のパスワードを再利用できなくする"
  }, {
    "label": "D",
    "text": "パスワード変更は3日に1回までに制限される"
  }, {
    "label": "E",
    "text": "ログイン時に3回認証に失敗するとアカウントをロックする"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "pam_pwquality（旧 pam_cracklib）の retry は、強度チェックに不合格だった場合に新パスワードの入力を何回まで求めるかを指定します。minlen=12 は新パスワードの最小長の基準です。認証失敗によるロックは pam_faillock などの別モジュールが担当し、過去パスワードの再利用防止は pam_pwhistory や pam_unix の remember オプションで行います。",
  "answerKeys": ["/etc/pam.d/passwd"],
  "answerTexts": ["要件を満たさない新パスワードが入力された場合、最大3回まで再入力を求めてからエラーを返す"],
  "answerHints": ["要件を"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-160",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SSSD を導入し、/etc/pam.d/ の設定に pam_sss.so を追加しました。しかし LDAP 上のユーザー taro について id taro を実行すると「no such user」と表示されます。sssd は正常に起動しています。最も可能性の高い原因と対処を選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/security/limits.conf に taro のエントリを追加する"
  }, {
    "label": "B",
    "text": "/etc/nsswitch.conf の passwd 行と group 行に sss が含まれていないため、追加する"
  }, {
    "label": "C",
    "text": "/etc/passwd に taro のエントリを手動で追加する"
  }, {
    "label": "D",
    "text": "/etc/pam.d/ の pam_sss.so の制御フラグを required から optional に変更する"
  }, {
    "label": "E",
    "text": "/etc/pam.d/other に pam_sss.so を追加する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "PAM は認証処理を担当しますが、ユーザー名や UID などの情報の名前解決は NSS が担当し、/etc/nsswitch.conf の設定に従います。id コマンドがユーザーを解決できないのは、passwd や group の参照先に sss が指定されていないためと考えられます。passwd: files sss のように追加すると SSSD 経由でユーザー情報を取得できるようになります。",
  "answerKeys": ["SSSD を"],
  "answerTexts": ["/etc/nsswitch.conf の passwd 行と group 行に sss が含まれていないため、追加する"],
  "answerHints": ["/etc/nsswitch"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-161",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "/etc/pam.d/sshd に「auth include system-auth」と記述した場合の動作として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "system-auth という名前の PAM モジュールが読み込まれる"
  }, {
    "label": "B",
    "text": "system-auth に記述されているすべてのモジュールタイプの行が取り込まれる"
  }, {
    "label": "C",
    "text": "system-auth の設定は sshd の設定より優先され、sshd の他の auth 行は無視される"
  }, {
    "label": "D",
    "text": "system-auth に記述されている auth タイプの行がすべてその位置に取り込まれる"
  }, {
    "label": "E",
    "text": "system-auth の auth スタックは、それより前の行が失敗した場合にだけ評価される"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "include は指定したファイルから、同じモジュールタイプの行をすべてその位置に取り込みます。この例では system-auth 内の auth 行だけが読み込まれ、account や session の行は対象外です。共通設定を複数のサービスで再利用する目的でよく使われます。",
  "answerKeys": ["/etc/pam.d/sshd に「"],
  "answerTexts": ["system-auth に記述されている auth タイプの行がすべてその位置に取り込まれる"],
  "answerHints": ["system-auth に記述されている auth"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-162",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Linux-PAM の設定ファイルに関する記述として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "/etc/pam.d/ 内では、モジュールタイプごとに別のファイルを用意しなければならない"
  }, {
    "label": "B",
    "text": "/etc/pam.d/ 内のファイルを変更した場合、反映にはシステムの再起動が必須である"
  }, {
    "label": "C",
    "text": "optional の制御フラグを持つモジュールが失敗すると、スタック全体が必ず失敗になる"
  }, {
    "label": "D",
    "text": "/etc/pam.d/ ディレクトリが存在する場合、/etc/pam.conf は無視される"
  }, {
    "label": "E",
    "text": "/etc/pam.d/ 内のファイル名は、PAM を利用するサービス名（sshd、login など）に対応する"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Linux-PAM は /etc/pam.d/ が存在するとそちらを使用し、/etc/pam.conf は無視されます。/etc/pam.d/ 内のファイル名はサービス名に対応し、1つのファイルに複数のモジュールタイプを記述します。設定は次に PAM が呼び出された時点で読み込まれるため、再起動は不要です。optional のモジュールは、通常そのスタックの最終結果を決定しません。",
  "answerKeys": ["Linux-"],
  "answerTexts": ["/etc/pam.d/ ディレクトリが存在する場合、/etc/pam.conf は無視される", "/etc/pam.d/ 内のファイル名は、PAM を利用するサービス名（sshd、login など）に対応する"],
  "answerHints": ["/etc/pam.d/ ディレクトリ", "/etc/pam.d/ 内のファイル名は"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-163",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ldapsearch コマンドに -LLL オプションを指定した場合の出力として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "コメントと LDIF バージョン行を含まない LDIF 形式で出力される"
  }, {
    "label": "B",
    "text": "検索範囲がベース DN から3階層下までに制限される"
  }, {
    "label": "C",
    "text": "出力が LDAP サーバーのログファイルに書き込まれる"
  }, {
    "label": "D",
    "text": "属性値がすべて Base64 でエンコードされて出力される"
  }, {
    "label": "E",
    "text": "検索結果の件数が最大3件に制限される"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ldapsearch の -L は LDIFv1 形式で出力し、-LL はさらにコメントを省略、-LLL は LDIF のバージョン行も省略します。スクリプトで結果を処理する際によく使われます。検索件数の上限は -z、検索範囲は -s で指定します。",
  "answerKeys": ["ldapsearch コマンド"],
  "answerTexts": ["コメントと LDIF バージョン行を含まない LDIF 形式で出力される"],
  "answerHints": ["コメント"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-164",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "cn=admin,dc=example,dc=com として簡易認証でバインドし、パスワードは対話的に入力して、dc=example,dc=com 以下から uid が taro のエントリを検索したいと考えています。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ldapsearch -x -d \"cn=admin,dc=example,dc=com\" -W -b \"dc=example,dc=com\" \"(uid=taro)\""
  }, {
    "label": "B",
    "text": "ldapsearch -x -D \"cn=admin,dc=example,dc=com\" -W -H \"dc=example,dc=com\" \"(uid=taro)\""
  }, {
    "label": "C",
    "text": "ldapsearch -x -b \"cn=admin,dc=example,dc=com\" -W -D \"dc=example,dc=com\" \"(uid=taro)\""
  }, {
    "label": "D",
    "text": "ldapsearch -x -D \"cn=admin,dc=example,dc=com\" -W -s \"dc=example,dc=com\" \"(uid=taro)\""
  }, {
    "label": "E",
    "text": "ldapsearch -x -D \"cn=admin,dc=example,dc=com\" -W -b \"dc=example,dc=com\" \"(uid=taro)\""
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-x は簡易認証、-D はバインド DN、-W はパスワードの対話入力、-b は検索ベース DN を指定するオプションです。-d はデバッグレベル、-H は LDAP URI、-s は検索範囲（base、one、sub など）の指定に使います。-b と -D の値を入れ替えると、意図した DN でバインドや検索が行われません。",
  "answerKeys": ["cn=admin"],
  "answerTexts": ["ldapsearch -x -D \"cn=admin,dc=example,dc=com\" -W -b \"dc=example,dc=com\" \"(uid=taro)\""],
  "answerHints": ["ldapsearch -x -D \"cn=admin,dc=example,dc=com\" -W -b"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-165",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "DN が「uid=taro,ou=People,dc=example,dc=com」であるエントリの RDN を選択してください。",
  "choices": [{
    "label": "A",
    "text": "ou=People,dc=example,dc=com"
  }, {
    "label": "B",
    "text": "uid=taro"
  }, {
    "label": "C",
    "text": "dc=example,dc=com"
  }, {
    "label": "D",
    "text": "dc=com"
  }, {
    "label": "E",
    "text": "ou=People"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "RDN（相対識別名）は DN の最も左側の要素で、同じ親エントリの下でエントリを一意に識別します。この例では uid=taro が RDN で、ou=People,dc=example,dc=com は親エントリの DN です。dc=example,dc=com は一般にツリーのサフィックスとして使われます。",
  "answerKeys": ["DN が"],
  "answerTexts": ["uid=taro"],
  "answerHints": ["uid"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-166",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ldappasswd コマンドで、ユーザーに設定する新しいパスワードを対話的に入力させるオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-s"
  }, {
    "label": "B",
    "text": "-W"
  }, {
    "label": "C",
    "text": "-S"
  }, {
    "label": "D",
    "text": "-A"
  }, {
    "label": "E",
    "text": "-x"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ldappasswd の -S は新しいパスワードを対話的に入力させるオプションです。-s は新しいパスワードをコマンドラインで直接指定し、-A は古いパスワードを対話的に入力させます。-W はバインド用パスワードの入力、-x は簡易認証の指定です。",
  "answerKeys": ["ldappasswd"],
  "answerTexts": ["-S"],
  "answerHints": ["-S"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-167",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "次の内容の change.ldif を作成しました。この変更を LDAP サーバーに適用するコマンドとして適切なものを選択してください。\n\ndn: uid=taro,ou=People,dc=example,dc=com\nchangetype: modify\nreplace: telephoneNumber\ntelephoneNumber: 03-1234-5678",
  "choices": [{
    "label": "A",
    "text": "slapadd -l change.ldif"
  }, {
    "label": "B",
    "text": "ldapsearch -x -D \"cn=admin,dc=example,dc=com\" -W -f change.ldif"
  }, {
    "label": "C",
    "text": "slapcat -l change.ldif"
  }, {
    "label": "D",
    "text": "ldapmodify -x -D \"cn=admin,dc=example,dc=com\" -W -f change.ldif"
  }, {
    "label": "E",
    "text": "ldapdelete -x -D \"cn=admin,dc=example,dc=com\" -W -f change.ldif"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "changetype: modify を含む LDIF は ldapmodify の -f オプションでファイルを指定して適用します。ldapdelete の -f は削除する DN の一覧、ldapsearch の -f は検索フィルタの一覧を読み込むもので、LDIF の変更は適用できません。slapadd はエントリの追加専用で、slapcat の -l は出力先ファイルの指定です。",
  "answerKeys": ["次の内容の"],
  "answerTexts": ["ldapmodify -x -D \"cn=admin,dc=example,dc=com\" -W -f change.ldif"],
  "answerHints": ["ldapmodify"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-168",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "OpenLDAP のクライアントコマンドに関する記述として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "-W オプションはバインド用パスワードをコマンドライン引数として指定する"
  }, {
    "label": "B",
    "text": "ldapadd は ldapmodify -a と同等の動作をする"
  }, {
    "label": "C",
    "text": "ldapdelete は検索フィルタに一致するエントリをすべて削除する"
  }, {
    "label": "D",
    "text": "-H オプションで ldap://ldap.example.com/ のような形式の LDAP URI を指定する"
  }, {
    "label": "E",
    "text": "-x オプションを指定すると SASL 認証が使用される"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ldapadd は ldapmodify に -a（エントリの追加）を指定した場合と同じ動作をします。-H は接続先を LDAP URI 形式で指定するオプションです。パスワードを引数で指定するのは -w で、-W は対話的に入力させます。-x は SASL ではなく簡易認証を使う指定で、ldapdelete は検索フィルタではなく DN を指定して削除します。",
  "answerKeys": ["OpenLDAP のクライアントコマンド"],
  "answerTexts": ["ldapadd は ldapmodify -a と同等の動作をする", "-H オプションで ldap://ldap.example.com/ のような形式の LDAP URI を指定する"],
  "answerHints": ["ldapadd", "-H"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-169",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "ldapsearch -H ldaps://ldap.example.com/ のようにポート番号を省略して LDAPS で接続した場合に使用される、既定の TCP ポート番号を数字で記述してください。",
  "choices": [],
  "answer": ["636"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LDAPS（SSL/TLS で保護された LDAP）の既定ポートは 636 番です。通常の LDAP は 389 番を使用し、389 番のまま StartTLS で暗号化に切り替える方法もあります。",
  "answerKeys": ["ldapsearch -"],
  "answerTexts": ["636"],
  "answerHints": ["636"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-170",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SSSD で LDAP サーバーのユーザー情報を利用するため、/etc/sssd/sssd.conf を次のように設定しています。ユーザーやグループを検索する際のベース DN を指定するために追加すべきパラメータを選択してください。\n\n[sssd]\nservices = nss, pam\ndomains = example\n\n[domain/example]\nid_provider = ldap\nauth_provider = ldap\nldap_uri = ldap://ldap.example.com",
  "choices": [{
    "label": "A",
    "text": "ldap_search_base = dc=example,dc=com"
  }, {
    "label": "B",
    "text": "search_base = dc=example,dc=com"
  }, {
    "label": "C",
    "text": "olcSuffix = dc=example,dc=com"
  }, {
    "label": "D",
    "text": "BASE = dc=example,dc=com"
  }, {
    "label": "E",
    "text": "ldap_base_dn = dc=example,dc=com"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SSSD の LDAP プロバイダでは、検索のベース DN を ldap_search_base で指定します。BASE は OpenLDAP クライアントの ldap.conf で使う書式で、olcSuffix は slapd の cn=config でデータベースのサフィックスを指定する属性です。ldap_base_dn や search_base というパラメータは sssd.conf にはありません。",
  "answerKeys": ["SSSD で"],
  "answerTexts": ["ldap_search_base = dc=example,dc=com"],
  "answerHints": ["ldap_search_base"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-171",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "OpenLDAP の slapd-config（cn=config）方式に関する記述として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "slapd.d ディレクトリ以下の LDIF ファイルをテキストエディタで直接編集する方法が推奨されている"
  }, {
    "label": "B",
    "text": "設定が LDAP エントリとして保持され、ldapmodify による変更は slapd を再起動せずに反映される"
  }, {
    "label": "C",
    "text": "cn=config 方式では ACL を設定できない"
  }, {
    "label": "D",
    "text": "cn=config 方式ではスキーマを追加できず、slapd.conf の include でのみ読み込める"
  }, {
    "label": "E",
    "text": "設定は slapd.conf の1ファイルに保存され、変更後は必ず slapd の再起動が必要である"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "slapd-config では設定が cn=config をルートとする LDAP のツリーとして保持され、ldapmodify などで変更すると再起動なしで反映されます。slapd.d 以下の LDIF ファイルはチェックサムを持ち、直接編集は推奨されていません。ACL は olcAccess 属性で、スキーマは cn=schema,cn=config 以下のエントリとして追加できます。",
  "answerKeys": ["OpenLDAP の slapd"],
  "answerTexts": ["設定が LDAP エントリとして保持され、ldapmodify による変更は slapd を再起動せずに反映される"],
  "answerHints": ["設定が"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-172",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "olcRootPW に平文ではなく {SSHA} 形式のハッシュ値を設定したいと考えています。このハッシュ値を生成するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "slapindex"
  }, {
    "label": "B",
    "text": "slapcat"
  }, {
    "label": "C",
    "text": "slappasswd"
  }, {
    "label": "D",
    "text": "slaptest"
  }, {
    "label": "E",
    "text": "ldappasswd"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "slappasswd は入力したパスワードから {SSHA} などの形式のハッシュ値を生成し、olcRootPW や rootpw、userPassword 属性の値として使えます。ldappasswd は LDAP サーバー上のエントリのパスワードを変更するコマンドで、ハッシュ値を出力する用途ではありません。slapcat、slapindex、slaptest はデータの出力、インデックスの再構築、設定の検査に使います。",
  "answerKeys": ["olcRootPW"],
  "answerTexts": ["slappasswd"],
  "answerHints": ["slappasswd"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-173",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "OpenLDAP の rootdn（olcRootDN）に関する記述として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "rootdn のパスワードは userPassword 属性にのみ設定できる"
  }, {
    "label": "B",
    "text": "rootdn を設定すると匿名バインドが自動的に無効になる"
  }, {
    "label": "C",
    "text": "rootdn は cn=config データベースにだけ設定できる"
  }, {
    "label": "D",
    "text": "rootdn は必ずディレクトリツリー内に実在するエントリでなければならない"
  }, {
    "label": "E",
    "text": "rootdn として認証したユーザーには ACL の制限が適用されず、データベースに対するすべての操作が許可される"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "rootdn はそのデータベースの管理者で、ACL の制限を受けずにすべての操作を実行できます。rootdn はツリー内に実在するエントリである必要はなく、パスワードは rootpw（olcRootPW）で設定できます。rootdn は各データベースごとに設定するもので、匿名バインドの可否とは関係しません。",
  "answerKeys": ["OpenLDAP の rootdn"],
  "answerTexts": ["rootdn として認証したユーザーには ACL の制限が適用されず、データベースに対するすべての操作が許可される"],
  "answerHints": ["rootdn として"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-174",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "LDAP プロトコルを経由せず、slapd のデータベースに直接アクセスして処理を行うコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "ldapadd"
  }, {
    "label": "B",
    "text": "ldapsearch"
  }, {
    "label": "C",
    "text": "slapcat"
  }, {
    "label": "D",
    "text": "ldapmodify"
  }, {
    "label": "E",
    "text": "slapadd"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "slapadd と slapcat は slapd の設定を読み込んでデータベースに直接アクセスするオフライン用ツールで、大量データの一括登録や LDIF 形式でのバックアップに使います。ldapadd、ldapsearch、ldapmodify は LDAP プロトコルで稼働中の slapd に接続して操作するクライアントコマンドです。",
  "answerKeys": ["LDAP プロトコル"],
  "answerTexts": ["slapcat", "slapadd"],
  "answerHints": ["slapcat", "slapadd"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-175",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "slapd.conf で運用している既存の OpenLDAP サーバーで、検索性能を改善するため「index mail eq」を追加しました。既存データに対してもインデックスを有効にするために、slapd を停止した状態で実行すべきコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "slappasswd"
  }, {
    "label": "B",
    "text": "slaptest"
  }, {
    "label": "C",
    "text": "slapcat"
  }, {
    "label": "D",
    "text": "slapindex"
  }, {
    "label": "E",
    "text": "ldapmodify"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "slapd.conf にインデックスを追加しても、既存のデータには自動ではインデックスが作成されないため、slapindex で再構築します。slapindex はデータベースに直接アクセスするため、slapd を停止してから実行します。slapcat はデータの出力、slaptest は設定ファイルの検査に使うコマンドです。",
  "answerKeys": ["slapd.conf で"],
  "answerTexts": ["slapindex"],
  "answerHints": ["slapindex"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-176",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "OpenLDAP に次の ACL を設定しました。この ACL の動作として正しいものを選択してください。\n\naccess to attrs=userPassword\n    by self write\n    by anonymous auth\n    by * none",
  "choices": [{
    "label": "A",
    "text": "この ACL は userPassword 以外のすべての属性に適用される"
  }, {
    "label": "B",
    "text": "未認証のクライアントは userPassword を使ったバインド（認証）だけが可能で、値は読み取れない"
  }, {
    "label": "C",
    "text": "認証済みの他のユーザーは userPassword の値を読み取れる"
  }, {
    "label": "D",
    "text": "エントリ自身として認証したユーザーは userPassword を読み取れるが変更はできない"
  }, {
    "label": "E",
    "text": "未認証のクライアントは userPassword の値を読み取れる"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "by anonymous auth により、未認証のクライアントはバインド時のパスワード照合にだけ userPassword を利用でき、値を読み取ることはできません。by self write により本人は自分のパスワードを変更（および読み取り）でき、それ以外のユーザーは by * none により一切アクセスできません。attrs=userPassword の指定により、この ACL は userPassword 属性だけに適用されます。",
  "answerKeys": ["OpenLDAP に次の"],
  "answerTexts": ["未認証のクライアントは userPassword を使ったバインド（認証）だけが可能で、値は読み取れない"],
  "answerHints": ["未認証のクライアントは userPassword を"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-177",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "slapd.conf に次の順序で ACL を記述したところ、一般ユーザーが他人の userPassword を読み取れることが判明しました。原因として正しいものを選択してください。\n\naccess to *\n    by * read\n\naccess to attrs=userPassword\n    by self write\n    by anonymous auth\n    by * none",
  "choices": [{
    "label": "A",
    "text": "最初の access to * がすべての属性に一致し、以降の access 指定が評価されないため"
  }, {
    "label": "B",
    "text": "ACL は slapd.conf の下にある記述ほど優先されるため"
  }, {
    "label": "C",
    "text": "access to * は rootdn にだけ適用される指定であるため"
  }, {
    "label": "D",
    "text": "userPassword 属性には ACL を設定できないため"
  }, {
    "label": "E",
    "text": "by * read が by * none より優先されるという固定の優先順位があるため"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "slapd は access 指定を上から順に評価し、最初に対象（to 句）が一致した指定だけを使用します。access to * はすべてのエントリと属性に一致するため、userPassword に対しても最初の指定が使われ、全員が読み取れてしまいます。access to attrs=userPassword のような限定的な指定を、access to * より前に記述する必要があります。",
  "answerKeys": ["slapd.conf に"],
  "answerTexts": ["最初の access to * がすべての属性に一致し、以降の access 指定が評価されないため"],
  "answerHints": ["最初の"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-178",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "cn=config 方式の OpenLDAP サーバーで、データベースの管理者パスワードを変更するために次の rootpw.ldif を作成しました。ローカルの root ユーザーとしてこの変更を適用するコマンドとして適切なものを選択してください。\n\ndn: olcDatabase={1}mdb,cn=config\nchangetype: modify\nreplace: olcRootPW\nolcRootPW: {SSHA}xT8kR2bVq3mZ9pLwYc5nHfOdJe7aUs4G",
  "choices": [{
    "label": "A",
    "text": "ldapdelete -Y EXTERNAL -H ldapi:/// -f rootpw.ldif"
  }, {
    "label": "B",
    "text": "ldapsearch -Y EXTERNAL -H ldapi:/// -f rootpw.ldif"
  }, {
    "label": "C",
    "text": "slappasswd -f rootpw.ldif"
  }, {
    "label": "D",
    "text": "slapindex -f rootpw.ldif"
  }, {
    "label": "E",
    "text": "ldapmodify -Y EXTERNAL -H ldapi:/// -f rootpw.ldif"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "cn=config の変更は ldapmodify で行い、-Y EXTERNAL と -H ldapi:/// を指定すると UNIX ドメインソケット経由で接続し、ローカルの root の資格情報で SASL EXTERNAL 認証が行われます。多くのディストリビューションの既定 ACL では、この方法で接続した root に cn=config の管理権限が与えられています。ldapsearch や ldapdelete では modify の変更は適用できません。",
  "answerKeys": ["cn=config 方式の OpenLDAP"],
  "answerTexts": ["ldapmodify -Y EXTERNAL -H ldapi:/// -f rootpw.ldif"],
  "answerHints": ["ldapmodify"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-179",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "OpenLDAP に inetorgperson スキーマを読み込む際、あらかじめ読み込んでおく必要があるスキーマを選択してください（core スキーマは読み込み済みとします）。",
  "choices": [{
    "label": "A",
    "text": "misc"
  }, {
    "label": "B",
    "text": "dyngroup"
  }, {
    "label": "C",
    "text": "cosine"
  }, {
    "label": "D",
    "text": "openldap"
  }, {
    "label": "E",
    "text": "nis"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "inetorgperson スキーマは core スキーマに加え、cosine スキーマで定義された属性型を参照しているため、cosine を先に読み込む必要があります。順序を誤ると、未定義の属性型を参照しているというエラーで読み込みに失敗します。nis スキーマは posixAccount などを定義するもので、inetorgperson の前提ではありません。",
  "answerKeys": ["OpenLDAP に inetorgperson"],
  "answerTexts": ["cosine"],
  "answerHints": ["cosine"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-180",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "cn=config 方式の次のデータベース設定を slapd.conf 方式で記述する場合、olcDbDirectory に対応するディレクティブを選択してください。\n\ndn: olcDatabase={1}mdb,cn=config\nolcSuffix: dc=example,dc=com\nolcRootDN: cn=admin,dc=example,dc=com\nolcDbDirectory: /var/lib/ldap",
  "choices": [{
    "label": "A",
    "text": "dbpath"
  }, {
    "label": "B",
    "text": "suffix"
  }, {
    "label": "C",
    "text": "database"
  }, {
    "label": "D",
    "text": "datadir"
  }, {
    "label": "E",
    "text": "directory"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "olcDbDirectory はデータベースファイルを格納するディレクトリを指定する属性で、slapd.conf では directory ディレクティブに相当します。olcSuffix は suffix、olcRootDN は rootdn に対応し、database ディレクティブはバックエンドの種類（mdb など）を指定してデータベース定義を開始します。dbpath や datadir というディレクティブはありません。",
  "answerKeys": ["cn=config 方式の次の"],
  "answerTexts": ["directory"],
  "answerHints": ["directory"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-181",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "OpenLDAP のインデックス設定（index ディレクティブまたは olcDbIndex 属性）で指定できるインデックスの種類を選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "range"
  }, {
    "label": "B",
    "text": "sub"
  }, {
    "label": "C",
    "text": "regex"
  }, {
    "label": "D",
    "text": "eq"
  }, {
    "label": "E",
    "text": "exact"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "OpenLDAP のインデックスの種類には pres（存在）、eq（等価）、approx（近似）、sub（部分一致）があります。例えば index uid eq,sub のように属性ごとに指定し、eq は (uid=taro)、sub は (cn=*taro*) のようなフィルタの検索を高速化します。range、regex、exact というインデックスの種類はありません。",
  "answerKeys": ["OpenLDAP のインデックス"],
  "answerTexts": ["sub", "eq"],
  "answerHints": ["sub", "eq"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-182",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "slapd.conf を編集した後、slapd を再起動する前に設定ファイルの文法に誤りがないかを確認したいと考えています。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "slapadd"
  }, {
    "label": "B",
    "text": "slaptest"
  }, {
    "label": "C",
    "text": "slapindex"
  }, {
    "label": "D",
    "text": "slapcat"
  }, {
    "label": "E",
    "text": "slappasswd"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "slaptest は slapd の設定ファイルや設定ディレクトリを読み込んで文法を検査し、問題がなければ config file testing succeeded と表示します。-f と -F を組み合わせて slapd.conf を slapd.d 形式に変換する用途でもよく使われます。slapcat、slapindex、slapadd はデータベースのデータを扱うコマンドです。",
  "answerKeys": ["slapd.conf を"],
  "answerTexts": ["slaptest"],
  "answerHints": ["slaptest"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-183",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Postfix の main.cf が次のように設定されています。このサーバー上でユーザー taro がローカルからメールを送信した場合、差出人アドレスのドメイン部として使用されるものを選択してください。\n\nmyhostname = mail.example.com\nmydomain = example.com\nmyorigin = $mydomain",
  "choices": [{
    "label": "A",
    "text": "localhost"
  }, {
    "label": "B",
    "text": "mail.example.com"
  }, {
    "label": "C",
    "text": "localhost.localdomain"
  }, {
    "label": "D",
    "text": "example.com"
  }, {
    "label": "E",
    "text": "mail.example.com.example.com"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "myorigin はローカルで投稿されたメールの差出人アドレスに付加するドメインを指定するパラメータです。ここでは $mydomain が指定されているため example.com となり、差出人は taro@example.com になります。myorigin の既定値は $myhostname で、未設定の場合は mail.example.com が使われます。",
  "answerKeys": ["Postfix の main.cf が"],
  "answerTexts": ["example.com"],
  "answerHints": ["example"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-184",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "社内ネットワーク 192.168.10.0/24 のクライアントから Postfix サーバー経由で社外にメールを送信しようとしたところ、「Relay access denied」というエラーで拒否されました。main.cf で行う対処として適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "mynetworks に 192.168.10.0/24 を追加する"
  }, {
    "label": "B",
    "text": "myorigin に 192.168.10.0/24 を指定する"
  }, {
    "label": "C",
    "text": "inet_interfaces に 192.168.10.0/24 を指定する"
  }, {
    "label": "D",
    "text": "mydestination に 192.168.10.0/24 を追加する"
  }, {
    "label": "E",
    "text": "relayhost に 192.168.10.0/24 を指定する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mynetworks には信頼するクライアントのネットワークを指定し、ここに含まれるクライアントは外部宛のメールをリレーできます。mydestination はローカル配送するドメインの一覧、relayhost は外部宛メールの転送先 SMTP サーバーの指定です。inet_interfaces は Postfix が待ち受けるネットワークインターフェースを指定するパラメータです。",
  "answerKeys": ["社内ネットワーク"],
  "answerTexts": ["mynetworks に 192.168.10.0/24 を追加する"],
  "answerHints": ["mynetworks"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-185",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Postfix の main.cf で「relayhost = [smtp.isp.example]:587」のように、ホスト名を角括弧で囲む意味として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ホスト名ではなく IPv6 アドレスとして解釈する"
  }, {
    "label": "B",
    "text": "指定したホストに対して SMTP 認証を必須にする"
  }, {
    "label": "C",
    "text": "MX レコードの検索を行わず、指定したホスト名の A/AAAA レコードに直接接続する"
  }, {
    "label": "D",
    "text": "指定したホストとの通信を必ず TLS で暗号化する"
  }, {
    "label": "E",
    "text": "指定したホストが応答しない場合に限り使用する予備のリレー先とする"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "relayhost のホスト名を角括弧で囲むと、Postfix は MX レコードの検索を行わず、そのホスト名のアドレスに直接接続します。ISP の送信用サーバーなど、特定のホストへ確実に転送したい場合に使います。TLS や SMTP 認証は smtp_tls_security_level や smtp_sasl_auth_enable などの別のパラメータで設定します。",
  "answerKeys": ["Postfix の main.cf で"],
  "answerTexts": ["MX レコードの検索を行わず、指定したホスト名の A/AAAA レコードに直接接続する"],
  "answerHints": ["MX"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-186",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Postfix の postconf コマンドに関する記述として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "postconf -d は main.cf で変更された値だけを表示する"
  }, {
    "label": "B",
    "text": "postconf -r は Postfix の設定を再読み込みする"
  }, {
    "label": "C",
    "text": "postconf -p はメールキューの内容を表示する"
  }, {
    "label": "D",
    "text": "postconf -e 'パラメータ=値' で main.cf の設定を書き換えられる"
  }, {
    "label": "E",
    "text": "postconf -n は main.cf で明示的に設定されたパラメータだけを表示する"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "postconf -n は既定値から変更されている（main.cf に記述された）パラメータだけを表示し、設定の確認に便利です。postconf -e は main.cf のパラメータを直接編集します。postconf -d は各パラメータの既定値を表示するオプションです。キューの表示は postqueue -p、設定の再読み込みは postfix reload で行います。",
  "answerKeys": ["Postfix の postconf"],
  "answerTexts": ["postconf -e 'パラメータ=値' で main.cf の設定を書き換えられる", "postconf -n は main.cf で明示的に設定されたパラメータだけを表示する"],
  "answerHints": ["postconf -e", "postconf -n"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-187",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Postfix で mailq コマンドと同じ内容（キュー内のメール一覧）を表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "postfix flush"
  }, {
    "label": "B",
    "text": "postqueue -p"
  }, {
    "label": "C",
    "text": "postsuper -r ALL"
  }, {
    "label": "D",
    "text": "postqueue -f"
  }, {
    "label": "E",
    "text": "postfix check"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Postfix では sendmail 互換コマンドの mailq は postqueue -p と同じ動作をし、キュー ID、サイズ、到着時刻、送信者、宛先などを表示します。postqueue -f と postfix flush は保留中のメールの即時再配送を試みるコマンドです。postsuper -r はメールを再キューイングし、postfix check は設定や権限の検査を行います。",
  "answerKeys": ["Postfix で mailq"],
  "answerTexts": ["postqueue -p"],
  "answerHints": ["postqueue -p"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-188",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "配送先サーバーの障害により、Postfix の deferred キューに大量のメールが滞留しています。deferred キュー内のメールだけをすべて削除するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "postsuper -h ALL deferred"
  }, {
    "label": "B",
    "text": "postqueue -f deferred"
  }, {
    "label": "C",
    "text": "postfix flush deferred"
  }, {
    "label": "D",
    "text": "postqueue -d ALL deferred"
  }, {
    "label": "E",
    "text": "postsuper -d ALL deferred"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "postsuper -d はキューからメールを削除するオプションで、キュー ID の代わりに ALL を指定し、さらにキュー名を指定すると、そのキュー内のメールをすべて削除できます。postsuper -h はメールを hold キューに移して保留します。postqueue には -d による削除機能はなく、postqueue -f と postfix flush はキューの再配送を試みます。",
  "answerKeys": ["配送先"],
  "answerTexts": ["postsuper -d ALL deferred"],
  "answerHints": ["postsuper -d"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-189",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "/etc/aliases を編集した後、その内容を Postfix などが参照するエイリアスデータベースに反映させるために実行する sendmail 互換のコマンド名を記述してください。",
  "choices": [],
  "answer": ["newaliases"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "newaliases は /etc/aliases からエイリアスデータベース（/etc/aliases.db など）を再生成するコマンドです。Postfix では postalias /etc/aliases でも同じ処理を行えます。/etc/aliases を編集しただけではデータベースに反映されないため、編集後は必ず実行します。",
  "answerKeys": ["/etc/aliases"],
  "answerTexts": ["newaliases"],
  "answerHints": ["newaliases"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-190",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Postfix を起動したが、他のホストからの SMTP 接続を受け付けません。ss -tln で確認すると 25 番ポートは 127.0.0.1 でのみ待ち受けていました。確認すべき main.cf のパラメータを選択してください。",
  "choices": [{
    "label": "A",
    "text": "inet_interfaces"
  }, {
    "label": "B",
    "text": "relayhost"
  }, {
    "label": "C",
    "text": "mydestination"
  }, {
    "label": "D",
    "text": "mynetworks"
  }, {
    "label": "E",
    "text": "myhostname"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "inet_interfaces は Postfix が接続を待ち受けるネットワークインターフェースを指定します。loopback-only や localhost に設定されていると、127.0.0.1 などのループバックでしか待ち受けないため、外部からは接続できません。all に変更すると全インターフェースで待ち受けますが、変更の反映には postfix reload ではなく Postfix の再起動が必要です。",
  "answerKeys": ["Postfix を"],
  "answerTexts": ["inet_interfaces"],
  "answerHints": ["inet_interfaces"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-191",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Postfix でメール投稿用のサブミッションポート（587番）での待ち受けを有効にしたいと考えています。smtpd サービスの定義を追加・有効化するファイルを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/postfix/main.cf"
  }, {
    "label": "B",
    "text": "/etc/postfix/transport"
  }, {
    "label": "C",
    "text": "/etc/aliases"
  }, {
    "label": "D",
    "text": "/etc/postfix/master.cf"
  }, {
    "label": "E",
    "text": "/etc/postfix/access"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "master.cf は Postfix のマスタープロセスが起動するサービス（smtpd、pickup、qmgr など）とその待ち受けポートを定義するファイルです。submission inet n - n - - smtpd の行を有効にすると 587 番ポートで待ち受けます。main.cf は Postfix 全体の動作パラメータを設定するファイルで、transport や access はルーティングやアクセス制御用のテーブルです。",
  "answerKeys": ["Postfix でメール"],
  "answerTexts": ["/etc/postfix/master.cf"],
  "answerHints": ["/etc/postfix/master"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-192",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "~/.procmailrc に次のレシピがあります。1行目の「:0:」の末尾にある「:」の意味として正しいものを選択してください。\n\n:0:\n* ^Subject:.*\\[ml-users\\]\nml-users",
  "choices": [{
    "label": "A",
    "text": "条件に一致したメールのコピーを作成し、後続のレシピの処理も続ける"
  }, {
    "label": "B",
    "text": "条件に一致したメールを外部コマンドにパイプで渡す"
  }, {
    "label": "C",
    "text": "配送先ファイルへの書き込み時にローカルロックファイルを使用する"
  }, {
    "label": "D",
    "text": "条件の照合で大文字と小文字を区別する"
  }, {
    "label": "E",
    "text": "条件に一致したメールを破棄する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "procmail のレシピ開始行 :0 の後に : を付けると、配送時にローカルロックファイルを使用し、同時書き込みによる mbox ファイルの破損を防ぎます。このレシピは件名に [ml-users] を含むメールを ml-users ファイルに保存します。コピーを作成して処理を続けるのは c フラグ、大文字と小文字の区別は D フラグで指定し、パイプは配送先行の先頭に | を記述します。",
  "answerKeys": ["~"],
  "answerTexts": ["配送先ファイルへの書き込み時にローカルロックファイルを使用する"],
  "answerHints": ["配送先"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.2"
}, {
  "id": "202-193",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "メールボックスの形式に関する記述として正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "Maildir 形式ではメール保存時に必ずメールボックス全体のファイルロックが必要である"
  }, {
    "label": "B",
    "text": "Maildir 形式は Postfix 専用の形式で、Dovecot では読み取れない"
  }, {
    "label": "C",
    "text": "mbox 形式は1つのファイルに複数のメールを連結して保存し、各メールは「From 」で始まる行で区切られる"
  }, {
    "label": "D",
    "text": "mbox 形式ではメール1通ごとに個別のファイルが作成される"
  }, {
    "label": "E",
    "text": "Maildir 形式は1通のメールを1つのファイルとして保存し、tmp、new、cur の3つのサブディレクトリを使用する"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Maildir 形式はメールを1通ずつ個別のファイルとして保存し、tmp に書き込んでから new に移動する方式のため、ファイルロックが不要です。mbox 形式は1つのファイルにメールを連結し、From で始まる区切り行で各メールを区別するため、書き込み時にはロックが必要です。Maildir は Postfix、procmail、Dovecot など多くのソフトウェアで利用できます。",
  "answerKeys": ["メールボックス"],
  "answerTexts": ["mbox 形式は1つのファイルに複数のメールを連結して保存し、各メールは「From 」で始まる行で区切られる", "Maildir 形式は1通のメールを1つのファイルとして保存し、tmp、new、cur の3つのサブディレクトリを使用する"],
  "answerHints": ["mbox 形式は", "Maildir 形式は1"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.2"
}, {
  "id": "202-194",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ユーザー taro の ~/.forward に次の内容を記述しました。行頭にバックスラッシュを付けた「\\taro」の効果として正しいものを選択してください。\n\n\\taro\ntaro@example.org",
  "choices": [{
    "label": "A",
    "text": "エイリアスや転送をそれ以上展開せず、ローカルのメールボックスにもメールを残す"
  }, {
    "label": "B",
    "text": "この行をコメントとして扱い、無視する"
  }, {
    "label": "C",
    "text": "taro@example.org への転送を無効にする"
  }, {
    "label": "D",
    "text": "taro 宛てのメールをすべて破棄する"
  }, {
    "label": "E",
    "text": "taro のメールを root に転送する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "~/.forward で \\taro のように先頭にバックスラッシュを付けると、その宛先はそれ以上のエイリアスや .forward の展開を受けず、ローカルのメールボックスに配送されます。これにより、taro@example.org へ転送しつつローカルにもコピーを残せます。バックスラッシュがない場合、自分自身への転送が再び .forward で展開されてループの原因になります。",
  "answerKeys": ["ユーザー taro の"],
  "answerTexts": ["エイリアスや転送をそれ以上展開せず、ローカルのメールボックスにもメールを残す"],
  "answerHints": ["エイリアス"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.2"
}, {
  "id": "202-195",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "次の Sieve スクリプトを設定したところ、構文エラーで読み込みに失敗しました。原因として正しいものを選択してください。\n\nif header :contains \"subject\" \"[SPAM]\" {\n    fileinto \"Junk\";\n    stop;\n}",
  "choices": [{
    "label": "A",
    "text": "ヘッダ名は大文字で \"Subject\" と記述しなければならない"
  }, {
    "label": "B",
    "text": "fileinto を使用するための require \"fileinto\"; の宣言がない"
  }, {
    "label": "C",
    "text": "Sieve では if 文を使用できない"
  }, {
    "label": "D",
    "text": "stop は Sieve に存在しないコマンドである"
  }, {
    "label": "E",
    "text": "fileinto の引数には絶対パスを指定しなければならない"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Sieve では keep、discard、redirect などの基本コマンド以外の拡張機能を使う場合、スクリプトの先頭で require による宣言が必要です。fileinto は拡張機能のため、require \"fileinto\"; を記述しないとエラーになります。stop は処理を終了する基本コマンドで、ヘッダ名の比較では大文字と小文字は区別されません。",
  "answerKeys": ["次の Sieve"],
  "answerTexts": ["fileinto を使用するための require \"fileinto\"; の宣言がない"],
  "answerHints": ["fileinto を"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.2"
}, {
  "id": "202-196",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "メール受信プロトコルと既定のポート番号の組み合わせとして正しいものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "POP3 over SSL/TLS（POP3S）: 587"
  }, {
    "label": "B",
    "text": "POP3: 110"
  }, {
    "label": "C",
    "text": "IMAP over SSL/TLS（IMAPS）: 993"
  }, {
    "label": "D",
    "text": "IMAP: 145"
  }, {
    "label": "E",
    "text": "POP3 over SSL/TLS（POP3S）: 465"
  }],
  "answer": ["B", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "既定のポート番号は IMAP が 143、IMAPS が 993、POP3 が 110、POP3S が 995 です。465 は SMTP over SSL/TLS（SMTPS）、587 はメール投稿用のサブミッションポートで、いずれも送信側のポートです。",
  "answerKeys": ["メール受信"],
  "answerTexts": ["POP3: 110", "IMAP over SSL/TLS（IMAPS）: 993"],
  "answerHints": ["POP3:", "IMAP over"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.3"
}, {
  "id": "202-197",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Dovecot で、各ユーザーのホームディレクトリ内にある Maildir 形式のメールボックス ~/Maildir を参照するように設定したいと考えています。適切な設定を選択してください。",
  "choices": [{
    "label": "A",
    "text": "home_mailbox = Maildir/"
  }, {
    "label": "B",
    "text": "mailbox_path = maildir:~/Maildir"
  }, {
    "label": "C",
    "text": "maildir = ~/Maildir"
  }, {
    "label": "D",
    "text": "mail_location = mbox:~/Maildir"
  }, {
    "label": "E",
    "text": "mail_location = maildir:~/Maildir"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Dovecot では mail_location にメールボックスの形式と場所を「形式:パス」の書式で指定し、Maildir 形式の場合は maildir:~/Maildir とします。mbox: を指定すると mbox 形式として扱われます。home_mailbox は Postfix の main.cf で配送先のメールボックスを指定するパラメータです。",
  "answerKeys": ["Dovecot で、各"],
  "answerTexts": ["mail_location = maildir:~/Maildir"],
  "answerHints": ["mail_location = maildir"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.3"
}, {
  "id": "202-198",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Dovecot の設定のうち、既定値から変更されている項目だけを一覧表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "dovecot -F"
  }, {
    "label": "B",
    "text": "postconf -n"
  }, {
    "label": "C",
    "text": "doveadm reload"
  }, {
    "label": "D",
    "text": "doveconf -n"
  }, {
    "label": "E",
    "text": "doveconf -d"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "doveconf -n は既定値と異なる設定だけを表示するため、設定内容の確認やトラブル時の情報共有に使われます。doveconf -d は既定値を表示し、doveadm reload は設定の再読み込みを行います。postconf -n は Postfix の設定を表示するコマンドです。",
  "answerKeys": ["Dovecot の設定のうち"],
  "answerTexts": ["doveconf -n"],
  "answerHints": ["doveconf -n"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.3"
}, {
  "id": "202-199",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Dovecot を起動したところ、IMAP（143番ポート）では接続できますが、POP3（110番ポート）では接続できません。doveconf -n の出力の一部は次のとおりです。対処として適切なものを選択してください。\n\nprotocols = imap\nmail_location = maildir:~/Maildir\nssl = yes",
  "choices": [{
    "label": "A",
    "text": "Postfix の master.cf に pop3 サービスを追加する"
  }, {
    "label": "B",
    "text": "mail_location を mbox 形式に変更する"
  }, {
    "label": "C",
    "text": "protocols に pop3 を追加し、Dovecot に設定を反映させる"
  }, {
    "label": "D",
    "text": "ssl = required に変更する"
  }, {
    "label": "E",
    "text": "Courier IMAP を追加でインストールする"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Dovecot が提供するプロトコルは protocols で指定し、この例では imap だけが有効になっているため POP3 の待ち受けが行われていません。protocols = imap pop3 のように pop3 を追加し、設定を反映させます。ssl = required は平文認証を禁止する設定で、Postfix は POP3 サービスを提供しません。",
  "answerKeys": ["Dovecot を"],
  "answerTexts": ["protocols に pop3 を追加し、Dovecot に設定を反映させる"],
  "answerHints": ["protocols"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.3"
}, {
  "id": "202-200",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Dovecot で、ユーザー taro がパスワードで正しく認証できるかを、メールクライアントを使わずにサーバー上で確認したいと考えています。使用するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "postqueue -a taro"
  }, {
    "label": "B",
    "text": "doveconf auth taro"
  }, {
    "label": "C",
    "text": "dovecot --test-user taro"
  }, {
    "label": "D",
    "text": "doveadm auth test taro"
  }, {
    "label": "E",
    "text": "ldappasswd taro"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "doveadm auth test は Dovecot の認証プロセスを使って指定したユーザーの認証を試し、成功したかどうかを表示します。パスワードを引数で省略すると対話的に入力を求められます。doveconf は設定の表示に使うコマンドで、認証テストの機能はありません。",
  "answerKeys": ["Dovecot で、ユーザー"],
  "answerTexts": ["doveadm auth test taro"],
  "answerHints": ["doveadm"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.3"
}, {
  "id": "202-201",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ISPからDHCPでグローバルIPアドレスが動的に割り当てられるルーターで、内部LANのクライアントがインターネットへ接続できるよう送信元アドレスを変換したい。nat テーブルの POSTROUTING チェーンで指定するターゲットとして最も適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "REJECT"
  }, {
    "label": "B",
    "text": "MASQUERADE"
  }, {
    "label": "C",
    "text": "DNAT"
  }, {
    "label": "D",
    "text": "MARK"
  }, {
    "label": "E",
    "text": "REDIRECT"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "MASQUERADE は送信元アドレスを出力インターフェースに現在付与されているアドレスへ自動的に変換するため、IP アドレスが動的に変わる環境に適しています。DNAT は宛先アドレスの変換、REDIRECT はローカルホストのポートへの宛先変換であり、送信元の変換には使えません。MARK はパケットに印を付けるだけで、アドレスは変換しません。",
  "answerKeys": ["ISP"],
  "answerTexts": ["MASQUERADE"],
  "answerHints": ["MASQUERADE"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-202",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ルーターの外部インターフェース eth0 の TCP 80番ポートに届いたパケットを、内部の Web サーバー 192.168.1.10 の 80番ポートへ転送したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "iptables -t mangle -A PREROUTING -i eth0 -p tcp --dport 80 -j DNAT --to-destination 192.168.1.10:80"
  }, {
    "label": "B",
    "text": "iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j SNAT --to-source 192.168.1.10:80"
  }, {
    "label": "C",
    "text": "iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j DNAT --to-destination 192.168.1.10:80"
  }, {
    "label": "D",
    "text": "iptables -t nat -A POSTROUTING -o eth0 -p tcp --dport 80 -j DNAT --to-destination 192.168.1.10:80"
  }, {
    "label": "E",
    "text": "iptables -t filter -A INPUT -i eth0 -p tcp --dport 80 -j DNAT --to-destination 192.168.1.10:80"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "外部から届いたパケットの宛先変換は、ルーティング判断の前に処理される nat テーブルの PREROUTING チェーンで DNAT ターゲットを使って行います。DNAT は POSTROUTING チェーンや filter テーブル、mangle テーブルでは使用できません。SNAT は送信元アドレスを変換するもので、POSTROUTING チェーンで使用します。",
  "answerKeys": ["ルーターの外部"],
  "answerTexts": ["iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j DNAT --to-destination 192.168.1.10:80"],
  "answerHints": ["iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j DNAT"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-203",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "現在のカーネルに設定されている iptables のルールを、iptables-restore で読み込める形式で標準出力に書き出すコマンド名を記述してください。",
  "choices": [],
  "answer": ["iptables-save"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iptables-save は現在のルールセットをテーブルごとにテキスト形式で標準出力へ出力します。リダイレクトでファイルに保存しておけば、iptables-restore < ファイル名 で再適用できます。IPv6 の場合は ip6tables-save と ip6tables-restore を使用します。",
  "answerKeys": ["現在の"],
  "answerTexts": ["iptables-save"],
  "answerHints": ["iptables-save"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-204",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "次のコマンドを実行した結果として正しいものを選択してください。\n\n# iptables -P INPUT DROP",
  "choices": [{
    "label": "A",
    "text": "INPUT チェーンの末尾に、すべてのパケットを破棄するルールが追加される"
  }, {
    "label": "B",
    "text": "nat テーブルの INPUT チェーンのデフォルト動作が DROP に変更される"
  }, {
    "label": "C",
    "text": "INPUT チェーンのすべてのルールが削除され、すべてのパケットが破棄される"
  }, {
    "label": "D",
    "text": "INPUT チェーンの先頭に、すべてのパケットを破棄するルールが挿入される"
  }, {
    "label": "E",
    "text": "filter テーブルの INPUT チェーンで、どのルールにも一致しなかったパケットが破棄されるようになる"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-P オプションはチェーンのデフォルトポリシーを設定し、チェーン内のどのルールにも一致しなかったパケットに適用されます。既存のルールは削除されず、ルールとして追加や挿入されるわけでもありません。-t を省略した場合は filter テーブルが対象になります。",
  "answerKeys": ["次のコマンドを実行した結果として"],
  "answerTexts": ["filter テーブルの INPUT チェーンで、どのルールにも一致しなかったパケットが破棄されるようになる"],
  "answerHints": ["filter"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-205",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "INPUT チェーンのデフォルトポリシーを DROP にしたサーバーで、サーバー自身が開始した通信の応答パケットや、それに関連するパケットを受信できるようにしたい。追加するルールとして適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT"
  }, {
    "label": "B",
    "text": "iptables -A INPUT -m limit --limit ESTABLISHED -j ACCEPT"
  }, {
    "label": "C",
    "text": "iptables -A INPUT -p tcp --syn -j ACCEPT"
  }, {
    "label": "D",
    "text": "iptables -A OUTPUT -m state --state ESTABLISHED,RELATED -j DROP"
  }, {
    "label": "E",
    "text": "iptables -A INPUT -m state --state NEW,INVALID -j ACCEPT"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "state モジュール（または conntrack モジュール）を使うと、コネクション追跡の状態に基づいてパケットを判定できます。ESTABLISHED は既に確立した接続のパケット、RELATED は FTP のデータ接続や ICMP エラーなど既存の接続に関連するパケットを表します。NEW は新規接続、--syn は接続開始の SYN パケットに一致するため、応答パケットの許可には適しません。",
  "answerKeys": ["INPUT チェーン"],
  "answerTexts": ["iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT"],
  "answerHints": ["iptables -A INPUT -m state --state ESTABLISHED"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-206",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "iptables のターゲット DROP と REJECT の違いとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "REJECT は INPUT チェーンでのみ使用でき、DROP は FORWARD チェーンでのみ使用できる"
  }, {
    "label": "B",
    "text": "REJECT は送信元にエラー応答（デフォルトでは ICMP port unreachable）を返してから破棄するが、DROP は何も返さずに破棄する"
  }, {
    "label": "C",
    "text": "DROP は送信元にエラー応答を返してから破棄するが、REJECT は何も返さずに破棄する"
  }, {
    "label": "D",
    "text": "REJECT はパケットをログに記録してから許可し、DROP はログに記録せずに破棄する"
  }, {
    "label": "E",
    "text": "DROP はパケットを破棄するが、REJECT はパケットを送信元へそのまま転送し直す"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "REJECT はパケットを破棄すると同時に、送信元へエラーを返します。デフォルトは ICMP port unreachable で、--reject-with tcp-reset などで応答内容を変更できます。DROP は応答を一切返さないため、送信元はタイムアウトするまで待つことになります。どちらも filter テーブルの INPUT、FORWARD、OUTPUT チェーンで使用できます。",
  "answerKeys": ["iptables のターゲット"],
  "answerTexts": ["REJECT は送信元にエラー応答（デフォルトでは ICMP port unreachable）を返してから破棄するが、DROP は何も返さずに破棄する"],
  "answerHints": ["REJECT は送信元に"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-207",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "RFC 1918 で定義されているプライベート IPv4 アドレスの範囲として正しいものを選択してください。（3つ選択）",
  "choices": [{
    "label": "A",
    "text": "192.168.0.0/16"
  }, {
    "label": "B",
    "text": "10.0.0.0/8"
  }, {
    "label": "C",
    "text": "169.254.0.0/16"
  }, {
    "label": "D",
    "text": "172.16.0.0/12"
  }, {
    "label": "E",
    "text": "100.64.0.0/10"
  }],
  "answer": ["A", "B", "D"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "RFC 1918 が定めるプライベートアドレスは 10.0.0.0/8、172.16.0.0/12（172.16.0.0〜172.31.255.255）、192.168.0.0/16 の3つです。169.254.0.0/16 は DHCP サーバーから応答がない場合などに使われるリンクローカルアドレスです。100.64.0.0/10 は RFC 6598 で定められた、キャリアグレード NAT 用の共有アドレス空間です。",
  "answerKeys": ["RFC 1918"],
  "answerTexts": ["192.168.0.0/16", "10.0.0.0/8", "172.16.0.0/12"],
  "answerHints": ["192", "10.0", "172"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-208",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "内部ネットワーク 192.168.1.0/24 から外部インターフェース eth0 を通る通信の送信元アドレスを、固定のグローバルアドレス 203.0.113.10 に変換したい。正しいコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j SNAT --to-source 203.0.113.10"
  }, {
    "label": "B",
    "text": "iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j DNAT --to-source 203.0.113.10"
  }, {
    "label": "C",
    "text": "iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j SNAT --to-destination 203.0.113.10"
  }, {
    "label": "D",
    "text": "iptables -t nat -A PREROUTING -s 192.168.1.0/24 -i eth0 -j SNAT --to-source 203.0.113.10"
  }, {
    "label": "E",
    "text": "iptables -t filter -A FORWARD -s 192.168.1.0/24 -o eth0 -j SNAT --to-source 203.0.113.10"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "送信元アドレスの変換は、ルーティング判断の後に処理される nat テーブルの POSTROUTING チェーンで SNAT ターゲットを使います。変換後のアドレスは --to-source で指定し、--to-destination は DNAT 用のオプションです。SNAT は PREROUTING チェーンや filter テーブルでは使用できません。",
  "answerKeys": ["内部"],
  "answerTexts": ["iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j SNAT --to-source 203.0.113.10"],
  "answerHints": ["iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j SNAT --to-source"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-209",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "サーバーの INPUT チェーンが次の状態になっている。既存のルールを残したまま、SSH（22/tcp）の新規接続を受け付けるようにしたい。最も適切なコマンドを選択してください。\n\n# iptables -L INPUT -n --line-numbers\nChain INPUT (policy ACCEPT)\nnum  target  prot opt source      destination\n1    ACCEPT  all  --  0.0.0.0/0   0.0.0.0/0    state RELATED,ESTABLISHED\n2    ACCEPT  icmp --  0.0.0.0/0   0.0.0.0/0\n3    DROP    all  --  0.0.0.0/0   0.0.0.0/0",
  "choices": [{
    "label": "A",
    "text": "iptables -D INPUT 3 -p tcp --dport 22 -j ACCEPT"
  }, {
    "label": "B",
    "text": "iptables -A OUTPUT -p tcp --sport 22 -j ACCEPT"
  }, {
    "label": "C",
    "text": "iptables -P INPUT -p tcp --dport 22 ACCEPT"
  }, {
    "label": "D",
    "text": "iptables -A INPUT -p tcp --dport 22 -j ACCEPT"
  }, {
    "label": "E",
    "text": "iptables -I INPUT 3 -p tcp --dport 22 -j ACCEPT"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iptables のルールは上から順に評価され、最初に一致したルールのターゲットが適用されます。-A は末尾に追加するため、3番の DROP ルールより後ろになり、SSH の新規接続はその前に破棄されてしまいます。-I INPUT 3 とすれば DROP ルールの直前に挿入できます。-D はルールの削除、-P はデフォルトポリシーの設定に使うオプションです。",
  "answerKeys": ["サーバーの INPUT"],
  "answerTexts": ["iptables -I INPUT 3 -p tcp --dport 22 -j ACCEPT"],
  "answerHints": ["iptables -I"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-210",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "管理者が SSH でリモート接続した状態で、INPUT チェーンに ESTABLISHED,RELATED と SSH を許可するルールが設定されているサーバーに対し、次のコマンドを順に実行した。この後の状態として正しいものを選択してください。\n\n# iptables -P INPUT DROP\n# iptables -F",
  "choices": [{
    "label": "A",
    "text": "確立済みの SSH セッションはコネクション追跡によって常に許可されるため、切断されることはない"
  }, {
    "label": "B",
    "text": "-F は nat テーブルのルールだけを削除するため、filter テーブルのルールは残り SSH 接続は維持される"
  }, {
    "label": "C",
    "text": "ルールの削除と同時にデフォルトポリシーも ACCEPT に戻るため、すべての着信パケットが許可される"
  }, {
    "label": "D",
    "text": "INPUT チェーンのルールはすべて削除されるが、デフォルトポリシーは DROP のままなので、SSH を含むすべての着信パケットが破棄される"
  }, {
    "label": "E",
    "text": "ルールが空のチェーンでは、デフォルトポリシーに関係なくすべてのパケットが許可される"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iptables -F はチェーン内のルールを削除しますが、-P で設定したデフォルトポリシーは変更しません。そのため、許可ルールがすべて消えた状態で DROP ポリシーだけが残り、確立済みの SSH セッションのパケットも破棄されます。リモートで作業する場合は、先にポリシーを ACCEPT に戻してからフラッシュするなどの注意が必要です。",
  "answerKeys": ["管理者が SSH"],
  "answerTexts": ["INPUT チェーンのルールはすべて削除されるが、デフォルトポリシーは DROP のままなので、SSH を含むすべての着信パケットが破棄される"],
  "answerHints": ["INPUT"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-211",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "IPv6 パケットに対するパケットフィルタリングのルールを、iptables と同様の構文で設定するためのコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ip6filter"
  }, {
    "label": "B",
    "text": "iptables-ng"
  }, {
    "label": "C",
    "text": "ip6tables"
  }, {
    "label": "D",
    "text": "ipv6tables"
  }, {
    "label": "E",
    "text": "iptables6"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "IPv6 パケットのフィルタリングには ip6tables を使用し、テーブル、チェーン、ターゲットの考え方は iptables とほぼ同じです。iptables のルールは IPv4 にしか適用されないため、IPv6 を有効にしているホストでは ip6tables にも同等のルールを設定する必要があります。iptables6 や ipv6tables といったコマンドは存在しません。",
  "answerKeys": ["IPv6 パケット"],
  "answerTexts": ["ip6tables"],
  "answerHints": ["ip6tables"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-212",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "iptables の mangle テーブルの用途として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "パケットを許可するか破棄するかを判定する"
  }, {
    "label": "B",
    "text": "パケットの TOS や TTL の値を変更したり MARK を付与したりするなど、パケットヘッダの情報を書き換える"
  }, {
    "label": "C",
    "text": "送信元アドレスや宛先アドレスを変換する"
  }, {
    "label": "D",
    "text": "特定のパケットをコネクション追跡の対象から除外する"
  }, {
    "label": "E",
    "text": "パケットに SELinux のセキュリティコンテキストを付与する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "mangle テーブルは、TOS や TTL の変更、ポリシールーティングなどで使う MARK の付与といった、パケットヘッダの書き換えに使います。アドレス変換は nat テーブル、許可や破棄の判定は filter テーブルの役割です。コネクション追跡の除外は raw テーブル、SELinux のコンテキスト付与は security テーブルで行います。",
  "answerKeys": ["iptables の mangle"],
  "answerTexts": ["パケットの TOS や TTL の値を変更したり MARK を付与したりするなど、パケットヘッダの情報を書き換える"],
  "answerHints": ["パケットの"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-213",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "nftables で、現在設定されているすべてのテーブル、チェーン、ルールを表示するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "nft list ruleset"
  }, {
    "label": "B",
    "text": "nft -L"
  }, {
    "label": "C",
    "text": "nft dump tables"
  }, {
    "label": "D",
    "text": "nft print ruleset"
  }, {
    "label": "E",
    "text": "nft show all"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nft list ruleset を実行すると、nftables に設定されたルールセット全体が表示されます。特定のテーブルだけを表示する場合は nft list table inet filter のように指定します。nft では iptables のような -L オプションは使わず、list や add などのサブコマンドで操作します。",
  "answerKeys": ["nftables"],
  "answerTexts": ["nft list ruleset"],
  "answerHints": ["nft list"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-214",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "Linux ホストをルーターとして使うため、再起動や sysctl -p を行わずに、IPv4 パケットの転送をただちに有効にしたい。適切な方法を選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "/etc/sysctl.conf に net.ipv4.ip_forward = 1 を追記する"
  }, {
    "label": "B",
    "text": "modprobe ip_forward を実行する"
  }, {
    "label": "C",
    "text": "sysctl -w net.ipv4.ip_forward=1 を実行する"
  }, {
    "label": "D",
    "text": "iptables -P FORWARD ACCEPT を実行する"
  }, {
    "label": "E",
    "text": "echo 1 > /proc/sys/net/ipv4/ip_forward を実行する"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "カーネルのパケット転送は、sysctl -w net.ipv4.ip_forward=1 または /proc/sys/net/ipv4/ip_forward への 1 の書き込みで、ただちに有効になります。/etc/sysctl.conf への追記は再起動後も設定を維持するためのもので、sysctl -p を実行するか再起動するまで反映されません。iptables -P FORWARD ACCEPT は filter テーブルのポリシーを変えるだけで、カーネルの転送機能自体は有効になりません。",
  "answerKeys": ["Linux ホスト"],
  "answerTexts": ["sysctl -w net.ipv4.ip_forward=1 を実行する", "echo 1 > /proc/sys/net/ipv4/ip_forward を実行する"],
  "answerHints": ["sysctl", "echo"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-215",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "2つのネットワークインターフェースを持つ Linux ルーターで、一方のネットワークから他方のネットワークへ中継されるパケットをフィルタリングしたい。filter テーブルで使用するチェーンを選択してください。",
  "choices": [{
    "label": "A",
    "text": "INPUT"
  }, {
    "label": "B",
    "text": "OUTPUT"
  }, {
    "label": "C",
    "text": "POSTROUTING"
  }, {
    "label": "D",
    "text": "PREROUTING"
  }, {
    "label": "E",
    "text": "FORWARD"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ルーターを通過して別のネットワークへ転送されるパケットは、filter テーブルの FORWARD チェーンで処理されます。INPUT はルーター自身が宛先のパケット、OUTPUT はルーター自身が送信するパケットを対象とします。PREROUTING と POSTROUTING は nat や mangle などのテーブルにあるチェーンで、filter テーブルには存在しません。",
  "answerKeys": ["2つのネットワークインターフェース"],
  "answerTexts": ["FORWARD"],
  "answerHints": ["FORWARD"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-216",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "vsftpd で匿名（anonymous）ユーザーのログインを禁止する設定を選択してください。",
  "choices": [{
    "label": "A",
    "text": "anon_upload_enable=NO"
  }, {
    "label": "B",
    "text": "no_anon_password=YES"
  }, {
    "label": "C",
    "text": "anonymous_enable=NO"
  }, {
    "label": "D",
    "text": "anon_world_readable_only=NO"
  }, {
    "label": "E",
    "text": "local_enable=NO"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "anonymous_enable を NO にすると、anonymous や ftp というユーザー名での匿名ログインが拒否されます。anon_upload_enable は匿名ユーザーのアップロード可否、local_enable はローカルユーザーのログイン可否を制御するディレクティブです。no_anon_password=YES は、匿名ログイン時にパスワードを要求しないようにする設定です。",
  "answerKeys": ["vsftpd で"],
  "answerTexts": ["anonymous_enable=NO"],
  "answerHints": ["anonymous_enable"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-217",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "vsftpd.conf で chroot_local_user=YES を設定したときの動作として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "匿名ユーザーだけが /var/ftp の外側にアクセスできなくなる"
  }, {
    "label": "B",
    "text": "ローカルユーザーはホームディレクトリの外側にのみアクセスできるようになる"
  }, {
    "label": "C",
    "text": "chroot_list_file に記載されたユーザーだけがログインできるようになる"
  }, {
    "label": "D",
    "text": "ローカルユーザーはログイン後、自分のホームディレクトリをルートとして扱われ、その外側にアクセスできなくなる"
  }, {
    "label": "E",
    "text": "ローカルユーザーは root 権限で FTP セッションを実行するようになる"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "chroot_local_user=YES を設定すると、ローカルユーザーはログイン後にホームディレクトリへ chroot され、上位のディレクトリへ移動できなくなります。chroot_list_enable=YES と併用した場合、chroot_list_file に記載されたユーザーは逆に chroot の対象外になります。ログインできるユーザーを制限する仕組みではありません。",
  "answerKeys": ["vsftpd."],
  "answerTexts": ["ローカルユーザーはログイン後、自分のホームディレクトリをルートとして扱われ、その外側にアクセスできなくなる"],
  "answerHints": ["ローカルユーザーはログイン"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-218",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "次の設定の vsftpd で、ローカルユーザーはログインやダウンロードはできるが、ファイルのアップロードが Permission denied で失敗する。ディレクトリのパーミッションには問題がない。追加すべき設定を選択してください。\n\nlisten=YES\nanonymous_enable=NO\nlocal_enable=YES\nchroot_local_user=YES\nlocal_umask=022",
  "choices": [{
    "label": "A",
    "text": "chroot_local_user=NO"
  }, {
    "label": "B",
    "text": "anonymous_enable=YES"
  }, {
    "label": "C",
    "text": "write_enable=YES"
  }, {
    "label": "D",
    "text": "local_umask=000"
  }, {
    "label": "E",
    "text": "anon_upload_enable=YES"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "vsftpd では write_enable のデフォルト値が NO で、STOR、DELE、MKD などの書き込み系コマンドがすべて拒否されます。ローカルユーザーにアップロードを許可するには write_enable=YES が必要です。anon_upload_enable は匿名ユーザー向けの設定であり、local_umask は作成されるファイルのパーミッションを決めるだけで書き込みの可否には関係しません。",
  "answerKeys": ["次の設定の vsftpd で、ローカルユーザー"],
  "answerTexts": ["write_enable=YES"],
  "answerHints": ["write_enable"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-219",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "次の設定の vsftpd で、匿名ユーザーにファイルのアップロードを許可したい。追加が必要な設定を選択してください。なお、アップロード先ディレクトリは ftp ユーザーが書き込めるように設定済みである。（2つ選択）\n\nlisten=YES\nanonymous_enable=YES\nanon_root=/srv/ftp",
  "choices": [{
    "label": "A",
    "text": "write_enable=YES"
  }, {
    "label": "B",
    "text": "chroot_local_user=YES"
  }, {
    "label": "C",
    "text": "anon_mkdir_write_enable=YES"
  }, {
    "label": "D",
    "text": "local_enable=YES"
  }, {
    "label": "E",
    "text": "anon_upload_enable=YES"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "匿名ユーザーのアップロードには、匿名ユーザー向けの anon_upload_enable=YES と、書き込み系コマンド全体を有効にする write_enable=YES の両方が必要です。anon_mkdir_write_enable はディレクトリの作成を許可するもので、ファイルのアップロードには必要ありません。local_enable と chroot_local_user はローカルユーザー向けの設定です。",
  "answerKeys": ["次の設定の vsftpd で、匿名"],
  "answerTexts": ["write_enable=YES", "anon_upload_enable=YES"],
  "answerHints": ["write_enable", "anon_upload_enable"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-220",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "FTP のアクティブモードにおけるデータ接続の説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "サーバーがポート20から、PORT コマンドで通知されたクライアントのポートへ接続する"
  }, {
    "label": "B",
    "text": "クライアントがサーバーのポート20へ接続する"
  }, {
    "label": "C",
    "text": "サーバーがポート21から、クライアントのポート20へ接続する"
  }, {
    "label": "D",
    "text": "クライアントが、PASV コマンドの応答で通知されたサーバーのポートへ接続する"
  }, {
    "label": "E",
    "text": "クライアントがサーバーのポート21へ接続し、制御接続と同じ接続でデータを転送する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "アクティブモードでは、クライアントが PORT コマンドで待ち受けポートを通知し、サーバーがポート20からそのポートへデータ接続を張ります。パッシブモードでは、PASV の応答で通知されたサーバー側のポートへクライアントが接続します。クライアント側にファイアウォールや NAT がある環境では、サーバーからの着信が遮断されやすいため、パッシブモードがよく使われます。",
  "answerKeys": ["FTP"],
  "answerTexts": ["サーバーがポート20から、PORT コマンドで通知されたクライアントのポートへ接続する"],
  "answerHints": ["サーバーがポート20"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-221",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Apache HTTP Server に似た構文で設定ファイルを記述し、<Directory> や <Anonymous> といったブロックでアクセス制御を定義する FTP サーバーを選択してください。",
  "choices": [{
    "label": "A",
    "text": "in.ftpd"
  }, {
    "label": "B",
    "text": "ProFTPd"
  }, {
    "label": "C",
    "text": "vsftpd"
  }, {
    "label": "D",
    "text": "Pure-FTPd"
  }, {
    "label": "E",
    "text": "tftpd"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ProFTPd の設定ファイル proftpd.conf は Apache と同様の構文で記述し、<Directory> や <Anonymous> などのコンテキストブロックを使えます。vsftpd は「ディレクティブ=値」形式の vsftpd.conf を使います。Pure-FTPd は、主にコマンドラインオプション（またはそれを生成するラッパーの設定）で動作を指定します。",
  "answerKeys": ["Apache HTTP Server"],
  "answerTexts": ["ProFTPd"],
  "answerHints": ["ProFTPd"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-222",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "Pure-FTPd を、匿名ログインを禁止して認証済みのユーザーだけがログインできるように起動するオプションを選択してください。",
  "choices": [{
    "label": "A",
    "text": "-A"
  }, {
    "label": "B",
    "text": "-B"
  }, {
    "label": "C",
    "text": "-e"
  }, {
    "label": "D",
    "text": "-E"
  }, {
    "label": "E",
    "text": "-H"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Pure-FTPd の -E（--noanonymous）は匿名ログインを禁止し、認証されたユーザーだけを許可します。逆に -e（--anonymousonly）は匿名ログインだけを許可します。-A（--chrooteveryone）は全ユーザーをホームディレクトリに chroot し、-B はデーモンとしてバックグラウンドで起動するオプションです。",
  "answerKeys": ["Pure"],
  "answerTexts": ["-E"],
  "answerHints": ["-E"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-223",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SSH サーバーで root ユーザーによる直接ログインを一切禁止するための sshd_config の設定を選択してください。",
  "choices": [{
    "label": "A",
    "text": "RootLogin disable"
  }, {
    "label": "B",
    "text": "PermitRootLogin forced-commands-only"
  }, {
    "label": "C",
    "text": "PermitRootLogin prohibit-password"
  }, {
    "label": "D",
    "text": "AllowRoot no"
  }, {
    "label": "E",
    "text": "PermitRootLogin no"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "PermitRootLogin no とすると、認証方式に関係なく root での SSH ログインが拒否されます。prohibit-password はパスワード認証と keyboard-interactive 認証を禁止するだけで、公開鍵認証による root ログインは許可されます。forced-commands-only も、authorized_keys で command オプションを指定した公開鍵による root ログインを許可します。AllowRoot や RootLogin というディレクティブは存在しません。",
  "answerKeys": ["SSH サーバーで root"],
  "answerTexts": ["PermitRootLogin no"],
  "answerHints": ["PermitRootLogin no"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-224",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SSH クライアントの初回接続時に表示されたホスト鍵のフィンガープリントが正しいかを確認するため、サーバー上で Ed25519 ホスト公開鍵のフィンガープリントを表示したい。適切なコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ssh-keygen -l -f /etc/ssh/ssh_host_ed25519_key.pub"
  }, {
    "label": "B",
    "text": "ssh-keygen -y -f /etc/ssh/ssh_host_ed25519_key"
  }, {
    "label": "C",
    "text": "ssh-keygen -R /etc/ssh/ssh_host_ed25519_key.pub"
  }, {
    "label": "D",
    "text": "ssh-keygen -p -f /etc/ssh/ssh_host_ed25519_key"
  }, {
    "label": "E",
    "text": "ssh-keygen -c -f /etc/ssh/ssh_host_ed25519_key.pub"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ssh-keygen -l は -f で指定した鍵ファイルのフィンガープリントを表示し、現在のデフォルトでは SHA256 形式で出力されます（-E md5 で MD5 形式も表示可能）。-y は秘密鍵から公開鍵を出力し、-R は known_hosts から指定ホストのエントリを削除するオプションです。-p はパスフレーズの変更、-c は鍵のコメントの変更に使います。",
  "answerKeys": ["SSH クライアント"],
  "answerTexts": ["ssh-keygen -l -f /etc/ssh/ssh_host_ed25519_key.pub"],
  "answerHints": ["ssh-keygen -l"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-225",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SSH サーバーにログインできるユーザーを alice と bob の2人だけに制限したい。sshd_config に記述する設定として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "DenyUsers !alice !bob"
  }, {
    "label": "B",
    "text": "PermitUsers alice bob"
  }, {
    "label": "C",
    "text": "AllowUser alice bob"
  }, {
    "label": "D",
    "text": "AllowUsers alice bob"
  }, {
    "label": "E",
    "text": "AllowGroups alice bob"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "AllowUsers にはログインを許可するユーザー名をスペース区切りで指定し、指定されたユーザー以外はログインできなくなります。AllowGroups は対象をグループ名で指定するディレクティブなので、ユーザー名の指定には使えません。AllowUser や PermitUsers というディレクティブは存在しません。",
  "answerKeys": ["SSH サーバーに"],
  "answerTexts": ["AllowUsers alice bob"],
  "answerHints": ["AllowUsers"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-226",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "ローカルの公開鍵をリモートホストのユーザーの ~/.ssh/authorized_keys に追記し、必要に応じてディレクトリやパーミッションも設定するコマンド名を記述してください。",
  "choices": [],
  "answer": ["ssh-copy-id"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ssh-copy-id user@host を実行すると、ローカルの公開鍵がリモートの ~/.ssh/authorized_keys に追記されます。使用する公開鍵は -i オプションで指定できます。初回はパスワード認証で接続して鍵を登録し、以降は公開鍵認証でログインできるようになります。",
  "answerKeys": ["ローカルの公開鍵を"],
  "answerTexts": ["ssh-copy-id"],
  "answerHints": ["ssh-copy-id"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-227",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ユーザーが ssh-keygen -t ed25519 を実行し、保存先をデフォルトのままにして鍵ペアを作成した。作成された公開鍵ファイルのパスを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/ssh/ssh_host_ed25519_key.pub"
  }, {
    "label": "B",
    "text": "~/.ssh/id_ed25519.pub"
  }, {
    "label": "C",
    "text": "~/.ssh/known_hosts"
  }, {
    "label": "D",
    "text": "~/.ssh/id_ed25519"
  }, {
    "label": "E",
    "text": "~/.ssh/authorized_keys"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ssh-keygen は、デフォルトで秘密鍵を ~/.ssh/id_<鍵の種類>、公開鍵を同じ名前に .pub を付けたファイルとして保存します。~/.ssh/authorized_keys は、ログインを許可する公開鍵を登録するサーバー側のファイルです。/etc/ssh/ssh_host_ed25519_key.pub は SSH サーバー自身のホスト公開鍵です。",
  "answerKeys": ["ユーザーが"],
  "answerTexts": ["~/.ssh/id_ed25519.pub"],
  "answerHints": ["~/.ssh/id_ed25519.pub"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-228",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "パスフレーズ付きの秘密鍵で多数のサーバーに SSH 接続する管理者が、パスフレーズの入力を最初の1回だけにしたい。ssh-agent を起動した後、秘密鍵をエージェントに登録するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ssh-keygen -p -f ~/.ssh/id_ed25519"
  }, {
    "label": "B",
    "text": "ssh-agent -k ~/.ssh/id_ed25519"
  }, {
    "label": "C",
    "text": "ssh-copy-id -i ~/.ssh/id_ed25519"
  }, {
    "label": "D",
    "text": "ssh-keyscan ~/.ssh/id_ed25519"
  }, {
    "label": "E",
    "text": "ssh-add ~/.ssh/id_ed25519"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ssh-add は秘密鍵を ssh-agent に登録し、登録時にパスフレーズを一度入力すれば、以降の接続ではエージェントが認証を代行します。ssh-keygen -p はパスフレーズの変更、ssh-copy-id は公開鍵をリモートへ登録するコマンドです。ssh-agent -k は実行中のエージェントを終了させるオプションです。",
  "answerKeys": ["パスフレーズ"],
  "answerTexts": ["ssh-add ~/.ssh/id_ed25519"],
  "answerHints": ["ssh-add"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-229",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "次のコマンドを実行したときの動作として正しいものを選択してください。\n\n$ ssh -L 8080:db.internal:80 user@gw.example.com",
  "choices": [{
    "label": "A",
    "text": "db.internal の8080番ポートへの接続が、gw.example.com の80番ポートへ転送される"
  }, {
    "label": "B",
    "text": "gw.example.com の80番ポートへの接続が、ローカルホストの8080番ポートへ転送される"
  }, {
    "label": "C",
    "text": "ローカルホストの8080番ポートへの接続が、gw.example.com を経由して db.internal の80番ポートへ転送される"
  }, {
    "label": "D",
    "text": "gw.example.com の8080番ポートへの接続が、ローカルホストを経由して db.internal の80番ポートへ転送される"
  }, {
    "label": "E",
    "text": "ローカルホストの8080番ポートで SOCKS プロキシが起動し、宛先は db.internal:80 に限定される"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-L はローカルポートフォワーディングで、「ローカルポート:転送先ホスト:転送先ポート」の形式で指定します。ローカルの8080番ポートへの接続は SSH トンネルを通って gw.example.com に届き、そこから db.internal:80 へ接続されます。転送先ホスト名は SSH サーバー側で解決されるため、クライアントから直接到達できない内部ホストにもアクセスできます。",
  "answerKeys": ["次のコマンドを実行したときの"],
  "answerTexts": ["ローカルホストの8080番ポートへの接続が、gw.example.com を経由して db.internal の80番ポートへ転送される"],
  "answerHints": ["ローカルホストの8080番ポートへの"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-230",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "NAT ルーターの内側にあり外部から直接接続できない社内ホストに、外部の公開サーバー pub.example.com を経由して SSH 接続できるようにしたい。社内ホスト側で実行するコマンドとして適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "ssh -L 2222:localhost:22 user@pub.example.com"
  }, {
    "label": "B",
    "text": "ssh -X -p 2222 user@pub.example.com"
  }, {
    "label": "C",
    "text": "ssh -L 22:pub.example.com:2222 user@pub.example.com"
  }, {
    "label": "D",
    "text": "ssh -R 2222:localhost:22 user@pub.example.com"
  }, {
    "label": "E",
    "text": "ssh -D 2222 user@pub.example.com"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-R はリモートポートフォワーディングで、SSH サーバー側（pub.example.com）の2222番ポートへの接続が、トンネルを通って社内ホストの localhost:22 へ転送されます。これにより、pub.example.com にログインした利用者が2222番ポートを使って社内ホストへ SSH 接続できます。-L はローカル側のポートを転送する機能、-D は SOCKS プロキシ、-X は X11 転送を有効にするオプションです。",
  "answerKeys": ["NAT"],
  "answerTexts": ["ssh -R 2222:localhost:22 user@pub.example.com"],
  "answerHints": ["ssh -R"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-231",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ssh -D 1080 user@gw.example.com を実行したときの動作として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "gw.example.com の SSH サーバーに1080番ポートで接続する"
  }, {
    "label": "B",
    "text": "ローカルの1080番ポートで SOCKS プロキシが起動し、アプリケーションからの接続が gw.example.com を経由して任意の宛先へ転送される"
  }, {
    "label": "C",
    "text": "ローカルの1080番ポートへの接続が、gw.example.com の1080番ポートにのみ転送される"
  }, {
    "label": "D",
    "text": "1080秒間操作がない場合に SSH 接続を切断する"
  }, {
    "label": "E",
    "text": "gw.example.com の1080番ポートへの接続が、ローカルホストへ転送される"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-D はダイナミックポートフォワーディングで、指定したローカルポートで SOCKS プロキシとして待ち受けます。ブラウザなどに SOCKS プロキシとして設定すると、通信は SSH サーバーを経由して、アプリケーションが指定した任意の宛先へ転送されます。接続先の SSH サーバーのポート番号を指定するには -p を使います。",
  "answerKeys": ["ssh -D"],
  "answerTexts": ["ローカルの1080番ポートで SOCKS プロキシが起動し、アプリケーションからの接続が gw.example.com を経由して任意の宛先へ転送される"],
  "answerHints": ["ローカルの1080番ポートで"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-232",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "SSH サーバーを OS ごと再インストールした後、クライアントから接続すると次の警告が表示され、接続が中止された。サーバーのホスト鍵が正当に変更されたことを確認した上で、クライアント側で行う対処として適切なものを選択してください。\n\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\n...\nHost key verification failed.",
  "choices": [{
    "label": "A",
    "text": "サーバーの /etc/ssh/sshd_config で StrictModes no を設定する"
  }, {
    "label": "B",
    "text": "クライアントの ~/.ssh/id_ed25519 を削除して鍵ペアを作り直す"
  }, {
    "label": "C",
    "text": "サーバー上で ~/.ssh/authorized_keys を削除する"
  }, {
    "label": "D",
    "text": "ssh-add -D を実行してエージェントから鍵を削除する"
  }, {
    "label": "E",
    "text": "ssh-keygen -R server.example.com を実行し、known_hosts から古いホスト鍵を削除する"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "この警告は、クライアントの ~/.ssh/known_hosts に記録されたホスト鍵と、サーバーが提示したホスト鍵が一致しないことを示しています。正当な変更であれば、ssh-keygen -R ホスト名 で古いエントリを削除し、再接続して新しいホスト鍵を登録します。authorized_keys やクライアントのユーザー鍵はユーザー認証に使うもので、ホスト鍵の検証とは関係ありません。",
  "answerKeys": ["SSH サーバーを"],
  "answerTexts": ["ssh-keygen -R server.example.com を実行し、known_hosts から古いホスト鍵を削除する"],
  "answerHints": ["ssh-keygen"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-233",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "SSH サーバーで公開鍵認証によるログインを許可し、パスワード認証によるログインを禁止したい。sshd_config に設定する項目を選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "PubkeyAuthentication yes"
  }, {
    "label": "B",
    "text": "PermitEmptyPasswords yes"
  }, {
    "label": "C",
    "text": "X11Forwarding yes"
  }, {
    "label": "D",
    "text": "KbdInteractiveAuthentication yes"
  }, {
    "label": "E",
    "text": "PasswordAuthentication no"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "PubkeyAuthentication yes で公開鍵認証を有効にし、PasswordAuthentication no でパスワード認証を無効にします。KbdInteractiveAuthentication（旧 ChallengeResponseAuthentication）を yes にすると、PAM 経由でパスワード入力によるログインができてしまう場合があります。PermitEmptyPasswords yes は空パスワードのアカウントでのログインを許可する危険な設定で、X11Forwarding は認証方式とは関係ありません。",
  "answerKeys": ["SSH サーバーで公開鍵認証による"],
  "answerTexts": ["PubkeyAuthentication yes", "PasswordAuthentication no"],
  "answerHints": ["PubkeyAuthentication", "PasswordAuthentication"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-234",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "ユーザー alice の公開鍵をサーバーに登録したが、SSH 接続時に公開鍵認証が成功せず、パスワードの入力を求められる。sshd_config の StrictModes は yes である。原因として考えられるものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "クライアント上の秘密鍵 ~/.ssh/id_ed25519 のパーミッションが 600 になっている"
  }, {
    "label": "B",
    "text": "サーバー上の ~alice/.ssh/authorized_keys のパーミッションが 600 になっている"
  }, {
    "label": "C",
    "text": "サーバー上の ~alice/.ssh/authorized_keys のパーミッションが 666 になっている"
  }, {
    "label": "D",
    "text": "サーバー上の ~alice/.ssh ディレクトリのパーミッションが 700 になっている"
  }, {
    "label": "E",
    "text": "公開鍵がサーバー上の ~alice/.ssh/authorized_keys ではなく ~alice/.ssh/known_hosts に追記されている"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "StrictModes yes の場合、sshd はホームディレクトリ、~/.ssh、authorized_keys がグループやその他のユーザーから書き込み可能だと、その authorized_keys を使用しません。また、ログインを許可する公開鍵は authorized_keys に登録する必要があり、known_hosts はクライアント側で接続先のホスト鍵を記録するファイルです。~/.ssh の 700、authorized_keys の 600、秘密鍵の 600 は推奨される正しいパーミッションです。",
  "answerKeys": ["ユーザー alice"],
  "answerTexts": ["サーバー上の ~alice/.ssh/authorized_keys のパーミッションが 666 になっている", "公開鍵がサーバー上の ~alice/.ssh/authorized_keys ではなく ~alice/.ssh/known_hosts に追記されている"],
  "answerHints": ["サーバー上の ~alice/.ssh/authorized_keys のパーミッションが 666", "公開鍵が"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-235",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "OpenSSH サーバーが使用する Ed25519 ホスト秘密鍵のデフォルトのパスを選択してください。",
  "choices": [{
    "label": "A",
    "text": "/etc/ssh/ssh_host_ed25519_key"
  }, {
    "label": "B",
    "text": "/var/lib/ssh/host_ed25519_key"
  }, {
    "label": "C",
    "text": "~/.ssh/id_ed25519"
  }, {
    "label": "D",
    "text": "/etc/ssh/ssh_host_ed25519_key.pub"
  }, {
    "label": "E",
    "text": "/etc/ssh/ssh_known_hosts"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SSH サーバーのホスト鍵は /etc/ssh/ssh_host_<鍵の種類>_key に秘密鍵、同じ名前に .pub を付けたファイルに公開鍵として保存され、sshd_config の HostKey ディレクティブで指定されます。クライアントはこの公開鍵を known_hosts に記録して、接続先サーバーの正当性を検証します。~/.ssh/id_ed25519 はユーザー認証用の秘密鍵、/etc/ssh/ssh_known_hosts はシステム全体で共有する known_hosts ファイルです。",
  "answerKeys": ["OpenSSH"],
  "answerTexts": ["/etc/ssh/ssh_host_ed25519_key"],
  "answerHints": ["/etc/ssh/ssh_host_ed25519_key"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-236",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ネットワーク経由で対象ホストを検査し、多数の脆弱性テスト（NVT）と照合して既知の脆弱性や設定の不備を報告する、オープンソースの脆弱性スキャナを選択してください。",
  "choices": [{
    "label": "A",
    "text": "Snort"
  }, {
    "label": "B",
    "text": "AIDE"
  }, {
    "label": "C",
    "text": "OpenVAS"
  }, {
    "label": "D",
    "text": "chkrootkit"
  }, {
    "label": "E",
    "text": "fail2ban"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "OpenVAS は脆弱性テスト（NVT）のフィードを使って対象ホストのサービスを検査し、既知の脆弱性をレポートする脆弱性スキャナです。Snort はパケットをシグネチャと照合して攻撃を検知するネットワーク型 IDS であり、能動的な脆弱性検査は行いません。AIDE はファイルの改ざん検知、fail2ban はログを監視して不正なアクセス元を遮断するツール、chkrootkit はローカルでルートキットの痕跡を探すツールです。",
  "answerKeys": ["ネットワーク経由で"],
  "answerTexts": ["OpenVAS"],
  "answerHints": ["OpenVAS"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-237",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "サーバー上で、どの TCP ポートでサービスが待ち受けているかを一覧表示できるコマンドを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "netstat -tln"
  }, {
    "label": "B",
    "text": "ip route show"
  }, {
    "label": "C",
    "text": "netstat -r"
  }, {
    "label": "D",
    "text": "ss -s"
  }, {
    "label": "E",
    "text": "ss -tln"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ss と netstat では、-t で TCP、-l で LISTEN 状態のソケット、-n で数値表示を指定するため、-tln で待ち受け中の TCP ポートの一覧を表示できます。-p を加えると、待ち受けているプロセスも確認できます。netstat -r と ip route show はルーティングテーブルを表示し、ss -s はソケットの統計情報の要約を表示します。",
  "answerKeys": ["サーバー上で"],
  "answerTexts": ["netstat -tln", "ss -tln"],
  "answerHints": ["netstat -tln", "ss -tln"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-238",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "fail2ban の説明として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "システム内のルートキットの痕跡を検索する"
  }, {
    "label": "B",
    "text": "既知の脆弱性をネットワーク経由で検査し、レポートを作成する"
  }, {
    "label": "C",
    "text": "ファイルのハッシュ値をデータベースと比較し、改ざんを検出する"
  }, {
    "label": "D",
    "text": "ネットワークを流れるパケットをシグネチャと照合し、不正侵入を検知する"
  }, {
    "label": "E",
    "text": "ログファイルを監視し、認証失敗などを繰り返す送信元 IP アドレスをファイアウォールのルールで一定時間遮断する"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fail2ban は /var/log/auth.log などのログを監視し、SSH のログイン失敗などが一定回数を超えた送信元 IP アドレスを、iptables などのルールで一定時間遮断します。監視対象やしきい値はジェイルとして定義し、jail.local などで設定します。パケットのシグネチャ照合は Snort、ファイル改ざんの検出は AIDE、脆弱性の検査は OpenVAS の役割です。",
  "answerKeys": ["fail2ban の"],
  "answerTexts": ["ログファイルを監視し、認証失敗などを繰り返す送信元 IP アドレスをファイアウォールのルールで一定時間遮断する"],
  "answerHints": ["ログファイル"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-239",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "ネットワーク上のパケットをリアルタイムに解析し、ルール（シグネチャ）と照合して攻撃や不正アクセスを検知する、オープンソースのネットワーク型 IDS を選択してください。",
  "choices": [{
    "label": "A",
    "text": "rkhunter"
  }, {
    "label": "B",
    "text": "Snort"
  }, {
    "label": "C",
    "text": "chkrootkit"
  }, {
    "label": "D",
    "text": "AIDE"
  }, {
    "label": "E",
    "text": "OpenVAS"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Snort はパケットをキャプチャしてルールと照合する、代表的なネットワーク型 IDS です。AIDE はファイルの改ざんを検出するホスト型の整合性チェックツール、OpenVAS はネットワーク経由で脆弱性を検査するスキャナーです。rkhunter と chkrootkit は、ローカルシステムのルートキットを検出するツールです。",
  "answerKeys": ["ネットワーク上の"],
  "answerTexts": ["Snort"],
  "answerHints": ["Snort"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-240",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "AIDE をインストールし、aide --init で作成したデータベースを所定のファイル名に配置した。その後、ファイルシステムの現在の状態をデータベースと比較して改ざんを検査するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "aide --config-check"
  }, {
    "label": "B",
    "text": "aide --scan"
  }, {
    "label": "C",
    "text": "aide --audit"
  }, {
    "label": "D",
    "text": "aide --check"
  }, {
    "label": "E",
    "text": "aide --init"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "aide --check は、現在のファイルの属性やハッシュ値をデータベースと比較し、追加、削除、変更されたファイルを報告します。aide --init は新しいデータベースを作成するだけで、比較は行いません。aide --config-check は設定ファイルの構文を検査するオプションです。",
  "answerKeys": ["AIDE"],
  "answerTexts": ["aide --check"],
  "answerHints": ["aide --check"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-241",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "侵入されたおそれのあるサーバーで、ルートキットの痕跡を検出するために使用するツールを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "OpenVAS"
  }, {
    "label": "B",
    "text": "fail2ban"
  }, {
    "label": "C",
    "text": "Snort"
  }, {
    "label": "D",
    "text": "rkhunter"
  }, {
    "label": "E",
    "text": "chkrootkit"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "chkrootkit と rkhunter は、既知のルートキットのファイルや改ざんされたシステムコマンド、不審な設定などをローカルで検査するツールです。OpenVAS はネットワーク経由で脆弱性を検査するスキャナー、Snort はネットワーク型 IDS です。fail2ban はログに基づいて攻撃元を遮断するツールで、ルートキットの検出は行いません。",
  "answerKeys": ["侵入された"],
  "answerTexts": ["rkhunter", "chkrootkit"],
  "answerHints": ["rkhunter", "chkrootkit"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-242",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "メールサーバーの稼働を確認するため、次のように接続した。この結果からわかることとして正しいものを選択してください。\n\n$ telnet mail.example.com 25\nTrying 192.0.2.25...\nConnected to mail.example.com.\nEscape character is '^]'.\n220 mail.example.com ESMTP Postfix",
  "choices": [{
    "label": "A",
    "text": "mail.example.com で telnet サーバーが稼働している"
  }, {
    "label": "B",
    "text": "mail.example.com の SMTP サーバーへの認証に成功した"
  }, {
    "label": "C",
    "text": "mail.example.com の25番ポートで SMTP サーバー（Postfix）が待ち受け、応答している"
  }, {
    "label": "D",
    "text": "mail.example.com の25番ポートは待ち受けていないが、ICMP には応答している"
  }, {
    "label": "E",
    "text": "mail.example.com の25番ポートはファイアウォールで遮断されている"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "telnet や nc でポートを指定して接続すると、TCP 接続が確立できるかどうかと、サービスが返すバナーを確認できます。220 で始まる応答は SMTP サーバーの接続時の挨拶で、25番ポートで Postfix が応答していることがわかります。ポートが遮断されている場合は接続がタイムアウトし、待ち受けていない場合は Connection refused になります。",
  "answerKeys": ["メールサーバー"],
  "answerTexts": ["mail.example.com の25番ポートで SMTP サーバー（Postfix）が待ち受け、応答している"],
  "answerHints": ["mail.example.com の25番ポートで"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-243",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "公開されたソフトウェアの脆弱性ごとに CVE-2024-12345 のような一意の識別子を割り当て、共通の名称として参照できるようにしている仕組みを選択してください。",
  "choices": [{
    "label": "A",
    "text": "CVE"
  }, {
    "label": "B",
    "text": "CERT/CC"
  }, {
    "label": "C",
    "text": "OpenVAS"
  }, {
    "label": "D",
    "text": "Bugtraq"
  }, {
    "label": "E",
    "text": "IDS"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "CVE（Common Vulnerabilities and Exposures）は、脆弱性に CVE-年-番号 の形式で一意の識別子を付与する仕組みで、各種のセキュリティ情報やツールで共通に参照されます。Bugtraq は脆弱性情報を議論するメーリングリスト、CERT/CC はセキュリティインシデントへの対応や注意喚起を行う組織です。IDS は侵入検知システムの総称、OpenVAS は脆弱性スキャナーです。",
  "answerKeys": ["公開された"],
  "answerTexts": ["CVE"],
  "answerHints": ["CVE"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-244",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "OpenVPN に IANA が割り当てているポート番号と、OpenVPN のデフォルトのトランスポートプロトコルの組み合わせとして正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "443/TCP"
  }, {
    "label": "B",
    "text": "1194/TCP"
  }, {
    "label": "C",
    "text": "1723/TCP"
  }, {
    "label": "D",
    "text": "1194/UDP"
  }, {
    "label": "E",
    "text": "500/UDP"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "OpenVPN の標準ポートは1194番で、proto ディレクティブを省略した場合は UDP が使われます。ファイアウォールを越えるために proto tcp と port 443 を指定する運用もありますが、デフォルトではありません。500/UDP は IPsec の IKE、1723/TCP は PPTP が使用するポートです。",
  "answerKeys": ["OpenVPN に"],
  "answerTexts": ["1194/UDP"],
  "answerHints": ["1194/UDP"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-245",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "OpenVPN で、VPN をリモート拠点の LAN とイーサネットレベルでブリッジ接続し、ブロードキャストや IP 以外のプロトコルも通したい。設定ファイルで指定するデバイスとして適切なものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "dev ppp"
  }, {
    "label": "B",
    "text": "dev br"
  }, {
    "label": "C",
    "text": "dev eth"
  }, {
    "label": "D",
    "text": "dev tun"
  }, {
    "label": "E",
    "text": "dev tap"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "dev tap はレイヤー2の仮想イーサネットデバイスを作成し、イーサネットフレームをそのまま転送するため、ブリッジ接続やブロードキャストを使うプロトコルに対応できます。dev tun はレイヤー3の仮想デバイスで IP パケットだけを扱い、ルーティング方式の VPN で使われます。OpenVPN の dev で指定する仮想デバイスの種類は tun と tap です。",
  "answerKeys": ["OpenVPN で"],
  "answerTexts": ["dev tap"],
  "answerHints": ["dev tap"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-246",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "次の OpenVPN サーバー設定の push ディレクティブの効果として正しいものを選択してください。\n\nport 1194\nproto udp\ndev tun\nserver 10.8.0.0 255.255.255.0\npush \"route 192.168.10.0 255.255.255.0\"\nkeepalive 10 120",
  "choices": [{
    "label": "A",
    "text": "クライアントに、192.168.10.0/24 の範囲から VPN 用の IP アドレスを割り当てる"
  }, {
    "label": "B",
    "text": "接続したクライアントに、192.168.10.0/24 宛ての通信を VPN 経由で送るルートを追加させる"
  }, {
    "label": "C",
    "text": "クライアントのデフォルトゲートウェイを 192.168.10.1 に変更する"
  }, {
    "label": "D",
    "text": "サーバーに、192.168.10.0/24 宛てのルートを追加する"
  }, {
    "label": "E",
    "text": "192.168.10.0/24 から接続するクライアントだけを許可する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "push は、接続したクライアントにオプションを送って適用させるディレクティブで、push \"route ...\" はクライアントのルーティングテーブルに VPN 経由のルートを追加させます。VPN 用のアドレスは server ディレクティブで指定した 10.8.0.0/24 から割り当てられます。すべての通信を VPN 経由にするには、push \"redirect-gateway def1\" を使います。",
  "answerKeys": ["次の OpenVPN"],
  "answerTexts": ["接続したクライアントに、192.168.10.0/24 宛ての通信を VPN 経由で送るルートを追加させる"],
  "answerHints": ["接続した"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-247",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "fill",
  "question": "OpenVPN のクライアント設定ファイルで、接続先の OpenVPN サーバーのホスト名（または IP アドレス）とポート番号を「vpn.example.com 1194」のように指定するディレクティブ名を記述してください。",
  "choices": [],
  "answer": ["remote"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "クライアント設定では remote ホスト名 ポート番号 の形式で接続先サーバーを指定します。remote は複数行記述でき、最初のサーバーに接続できない場合は次のサーバーへの接続を試みます。クライアントモードで動作させるため、client ディレクティブもあわせて記述します。",
  "answerKeys": ["OpenVPN のクライアント"],
  "answerTexts": ["remote"],
  "answerHints": ["remote"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-248",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "OpenVPN の設定で tls-auth ta.key 0 を指定する目的として正しいものを選択してください。",
  "choices": [{
    "label": "A",
    "text": "共有鍵による HMAC 署名を TLS の制御チャネルのパケットに付与し、署名のないパケットを破棄して DoS 攻撃やポートスキャンへの耐性を高める"
  }, {
    "label": "B",
    "text": "クライアント証明書の代わりにユーザー名とパスワードで認証する"
  }, {
    "label": "C",
    "text": "Diffie-Hellman 鍵交換のパラメータを指定する"
  }, {
    "label": "D",
    "text": "データチャネルの暗号化方式を AES-256 に固定する"
  }, {
    "label": "E",
    "text": "サーバー証明書の失効リストを指定する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "tls-auth は、サーバーとクライアントで共有する鍵（ta.key）を使って TLS ハンドシェイクのパケットに HMAC 署名を付与し、署名が正しくないパケットを TLS 処理の前に破棄します。末尾の数字は鍵の方向で、通常はサーバー側を 0、クライアント側を 1 にします。証明書失効リストは crl-verify、DH パラメータは dh ディレクティブで指定します。",
  "answerKeys": ["OpenVPN の設定で"],
  "answerTexts": ["共有鍵による HMAC 署名を TLS の制御チャネルのパケットに付与し、署名のないパケットを破棄して DoS 攻撃やポートスキャンへの耐性を高める"],
  "answerHints": ["共有鍵による"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-249",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "single",
  "question": "easy-rsa 3 を使って OpenVPN 用の PKI を新規に構築する。認証局（CA）を作成する build-ca の前に、最初に実行するコマンドを選択してください。",
  "choices": [{
    "label": "A",
    "text": "./easyrsa build-server-full server nopass"
  }, {
    "label": "B",
    "text": "./easyrsa gen-crl"
  }, {
    "label": "C",
    "text": "./easyrsa init-pki"
  }, {
    "label": "D",
    "text": "./easyrsa gen-dh"
  }, {
    "label": "E",
    "text": "./easyrsa sign-req server server"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "easy-rsa 3 では、まず ./easyrsa init-pki で PKI 用のディレクトリ構造を初期化し、その後 build-ca で CA の証明書と秘密鍵を作成します。サーバー証明書は build-server-full や、gen-req と sign-req の組み合わせで作成し、gen-dh で DH パラメータを生成します。gen-crl は証明書失効リストを作成するコマンドで、証明書を失効させた後に使用します。",
  "answerKeys": ["easy-rsa 3"],
  "answerTexts": ["./easyrsa init-pki"],
  "answerHints": ["./easyrsa init"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-250",
  "track": "202",
  "source": "A4_試験対策問題集",
  "type": "multi",
  "question": "easy-rsa で PKI を構築し、tls-auth を使用する OpenVPN サーバーを設定した。サーバー側で作成したファイルのうち、クライアントにも配布する必要があるものを選択してください。（2つ選択）",
  "choices": [{
    "label": "A",
    "text": "CA の秘密鍵 ca.key"
  }, {
    "label": "B",
    "text": "DH パラメータ dh.pem"
  }, {
    "label": "C",
    "text": "サーバーの秘密鍵 server.key"
  }, {
    "label": "D",
    "text": "tls-auth 用の共有鍵 ta.key"
  }, {
    "label": "E",
    "text": "CA 証明書 ca.crt"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "クライアントはサーバー証明書を検証するために CA 証明書 ca.crt が必要で、tls-auth を使う場合はサーバーと同じ ta.key も必要です。これらに加えて、各クライアント用の証明書と秘密鍵を配布します。ca.key と server.key は秘密に保つべき鍵で、配布してはいけません。DH パラメータはサーバー側でのみ使用します。",
  "answerKeys": ["easy-rsa で"],
  "answerTexts": ["tls-auth 用の共有鍵 ta.key", "CA 証明書 ca.crt"],
  "answerHints": ["tls", "CA 証明書"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-251",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "OpenVPN サーバー設定ファイルの status パラメーターで指定したファイルから確認できる情報はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "openvpn デーモンが生成したエラーと警告"
  }, {
    "label": "B",
    "text": "ルーティング情報"
  }, {
    "label": "C",
    "text": "openvpn デーモンの CPU 使用率とメモリ使用量"
  }, {
    "label": "D",
    "text": "現在接続しているクライアントの一覧"
  }, {
    "label": "E",
    "text": "過去に接続したすべてのクライアントの履歴"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "OpenVPN の status は接続状況などの運用状態を指定ファイルへ定期的に出力する設定です。複数のクライアントを収容するサーバーでは、現在のクライアント一覧と VPN 内部のルーティング情報が含まれます。エラーや警告はログ、CPU やメモリの消費は OS 側の監視情報であり、status は更新時点の状態を示すため過去の全接続履歴の保存先でもありません。",
  "answerKeys": ["OpenVPN サーバー"],
  "answerTexts": ["ルーティング情報", "現在接続しているクライアントの一覧"],
  "answerHints": ["ルーティング", "現在接続してい"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-252",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "サーバーのセキュリティを高めるため、sshd 設定ファイルに存在する場合に変更すべき行はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "PermitEmptyPasswords yes"
  }, {
    "label": "B",
    "text": "PermitEmptyPasswords no"
  }, {
    "label": "C",
    "text": "Port 22"
  }, {
    "label": "D",
    "text": "PermitRootLogin yes"
  }, {
    "label": "E",
    "text": "IgnoreRhosts yes"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "設定名だけでなく値がどのログインを許しているかを読み取ります。PermitEmptyPasswords yes は空のパスワードを持つアカウントへのログインを許すため no へ変更します。PermitRootLogin yes は root への直接ログインを許すため制限を検討します。PermitEmptyPasswords no と IgnoreRhosts yes はすでに安全側の値であり、Port 22 の変更は認証上の問題そのものを解消しません。",
  "answerKeys": ["サーバーのセキュリティ"],
  "answerTexts": ["PermitEmptyPasswords yes", "PermitRootLogin yes"],
  "answerHints": ["PermitEmptyPasswords yes", "PermitRootLogin"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-253",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "対象ホストの開いている TCP ポートをスキャンする nmap のパラメーターはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "-sO"
  }, {
    "label": "B",
    "text": "-sZ"
  }, {
    "label": "C",
    "text": "-sT"
  }, {
    "label": "D",
    "text": "-sU"
  }, {
    "label": "E",
    "text": "-sS"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "-sT は TCP connect スキャンで、OS の connect 処理を使って対象ポートへの TCP 接続を試みます。-sS は TCP SYN スキャンで、SYN に対する応答からポートの状態を判定し、接続確立を最後まで完了させません。-sO は IP プロトコル番号の調査、-sU は UDP ポート、-sZ は SCTP を対象とする方式で、TCP ポートの開閉を調べる目的とは一致しません。",
  "answerKeys": ["対象ホスト"],
  "answerTexts": ["-sT", "-sS"],
  "answerHints": ["-sT", "-sS"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-254",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "Linux ルーターで次のコマンドを実行しました。\nip6tables -A FORWARD -s fe80::/64 -j DROP\nip6tables -A FORWARD -d fe80::/64 -j DROP\nこれらのコマンドについて正しい記述はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "送信元または宛先アドレスが fe80::/64 のパケットが FORWARD チェーンに現れることはない"
  }, {
    "label": "B",
    "text": "ネットワークノードはルーティングテーブル内のルーターを識別する際に常に fe80::/64 のアドレスを使用するため、これらのルールはパケット転送を無効にする"
  }, {
    "label": "C",
    "text": "対象ネットワークがすでに別のルールに含まれているため、2番目のコマンドで ip6tables がエラーを返す"
  }, {
    "label": "D",
    "text": "どちらの ip6tables コマンドもエラーメッセージや警告なしで完了する"
  }, {
    "label": "E",
    "text": "これらのルールにより、ルーター広告または DHCPv6 を通じた自動設定が抑止される"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fe80::/64 は IPv6 のリンクローカルアドレス範囲で、これを送信元または宛先に持つパケットは別リンクへルーティングされません。したがって FORWARD チェーンには現れず、このルールを追加しても中継パケットを新たに止めることにはなりません。一方、-A FORWARD -s/-d -j DROP はいずれも構文として成立するため、2つのコマンドはエラーや警告なしで登録されます。",
  "answerKeys": ["Linux ルーターで次の"],
  "answerTexts": ["送信元または宛先アドレスが fe80::/64 のパケットが FORWARD チェーンに現れることはない", "どちらの ip6tables コマンドもエラーメッセージや警告なしで完了する"],
  "answerHints": ["送信元または", "どちらの"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-255",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "OpenVPN がピアへ接続するときに動的な送信元ポートを使用するよう、クライアント設定ファイルで指定するオプションはどれですか。",
  "choices": [{
    "label": "A",
    "text": "src-port"
  }, {
    "label": "B",
    "text": "remote"
  }, {
    "label": "C",
    "text": "source-port"
  }, {
    "label": "D",
    "text": "nobind"
  }, {
    "label": "E",
    "text": "dynamic-bind"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "nobind は、OpenVPN がローカルのアドレスとポートへ明示的に固定バインドする動作を避ける設定です。これにより送信元ポートを OS の IP スタックが動的に割り当てます。remote は接続先のピアを指定する設定、lport は固定のローカルポート番号を指定する設定であり、src-port・source-port・dynamic-bind は OpenVPN の設定名ではありません。",
  "answerKeys": ["OpenVPN がピア"],
  "answerTexts": ["nobind"],
  "answerHints": ["nobind"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-256",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "vsftpd が匿名 FTP ユーザーのためにファイルシステム操作を行う際に使用する Linux ユーザーはどれですか。",
  "choices": [{
    "label": "A",
    "text": "vsftpd プロセスを実行している Linux ユーザー"
  }, {
    "label": "B",
    "text": "vsftpd が提供する FTP ルートディレクトリを所有する Linux ユーザー"
  }, {
    "label": "C",
    "text": "FTP サーバーへの匿名ログイン時に使用されたユーザー名と同じ名前の Linux ユーザー"
  }, {
    "label": "D",
    "text": "Linux ユーザー root。ただし vsftpd は全ユーザーが読み書きできるファイルだけを匿名ユーザーに許可する"
  }, {
    "label": "E",
    "text": "設定オプション ftp_username で指定された Linux ユーザー"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "vsftpd の匿名 FTP では、クライアントが入力したログイン名とサーバー上でファイル操作に使う Linux ユーザーは同じとは限りません。ftp_username は匿名 FTP 利用者のために使う Linux ユーザー名を指定する設定で、既定では ftp ユーザーが使われます。匿名利用者の読み書きの可否は、このアカウントが対象ファイルへ持つ権限と vsftpd の設定の両方で決まります。",
  "answerKeys": ["vsftpd が"],
  "answerTexts": ["設定オプション ftp_username で指定された Linux ユーザー"],
  "answerHints": ["設定"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-257",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "パスワードに基づくログインを完全に無効にするため、sshd 設定で no にすべき項目はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "PAMAuthentication"
  }, {
    "label": "B",
    "text": "KbdInteractiveAuthentication"
  }, {
    "label": "C",
    "text": "PermitPlaintextLogin"
  }, {
    "label": "D",
    "text": "UsePasswords"
  }, {
    "label": "E",
    "text": "PasswordAuthentication"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "PasswordAuthentication は SSH の password 方式、KbdInteractiveAuthentication は質問と応答による keyboard-interactive 方式を制御します。keyboard-interactive でも PAM を通じてパスワードを検証する場合があるため、password 方式だけを止めても別経路でパスワード認証が成立し得ます。両方を no にすることでパスワードを受け付ける経路をなくせます。PAMAuthentication・PermitPlaintextLogin・UsePasswords は OpenSSH の設定名ではありません。",
  "answerKeys": ["パスワード"],
  "answerTexts": ["KbdInteractiveAuthentication", "PasswordAuthentication"],
  "answerHints": ["KbdInteractiveAuthentication", "PasswordAuthentication"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-258",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "netfilter の INPUT チェーンのデフォルトポリシーを DROP に設定する場合、localhost へのトラフィックを許可するルールが必要なのはなぜですか。",
  "choices": [{
    "label": "A",
    "text": "localhost へのすべてのトラフィックは常に許可しなければならないため"
  }, {
    "label": "B",
    "text": "localhost 宛てパケットは netfilter の影響を受けないため、許可ルールの有無は問題にならない"
  }, {
    "label": "C",
    "text": "一部のアプリケーションが localhost インターフェースを使用して他のアプリケーションと通信するため"
  }, {
    "label": "D",
    "text": "syslogd が localhost でメッセージを受信するため"
  }, {
    "label": "E",
    "text": "iptables コマンドが localhost 上の netfilter 管理デーモン netfilterd と通信してパケットフィルタールールを作成・変更するため"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "localhost への IP 通信はループバックインターフェース lo を通って同じホスト内で届き、INPUT チェーンの対象になります。デフォルトポリシーが DROP なら、許可規則に該当しないホスト内部の通信も破棄されます。アプリケーションが同一ホスト上のデータベースや補助サービスと localhost 経由で通信している場合、必要なサービス間連携が失敗します。iptables はカーネル側の netfilter を直接設定するもので、netfilterd というデーモンは存在しません。",
  "answerKeys": ["netfilter"],
  "answerTexts": ["一部のアプリケーションが localhost インターフェースを使用して他のアプリケーションと通信するため"],
  "answerHints": ["一部の"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-259",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － SSH 鍵ペアを作成するコマンドは何ですか。パスやパラメーターを付けないコマンド名を入力してください。",
  "choices": [],
  "answer": ["ssh-keygen"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SSH の公開鍵認証では、本人だけが保持する秘密鍵と接続先へ登録する公開鍵を一組の鍵ペアとして使います。ssh-keygen はこの鍵ペアを新しく生成するコマンドで、保存先やパスフレーズを指定でき、公開鍵は秘密鍵のファイル名に .pub を付けた別ファイルへ保存されます。既存鍵のエージェント登録は ssh-add、公開鍵の接続先登録は ssh-copy-id と工程で区別します。",
  "answerKeys": ["空欄を埋めてください － SSH 鍵"],
  "answerTexts": ["ssh-keygen"],
  "answerHints": ["ssh-keygen"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-260",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "SSH 鍵を使用してリモート SSH サーバーへログインできるようにするため、内容をリモートサーバーへ転送する必要があるローカルファイルはどれですか。",
  "choices": [{
    "label": "A",
    "text": "~/.ssh/authorized_keys"
  }, {
    "label": "B",
    "text": "~/.ssh/config"
  }, {
    "label": "C",
    "text": "~/.ssh/id_rsa.pub"
  }, {
    "label": "D",
    "text": "~/.ssh/id_rsa"
  }, {
    "label": "E",
    "text": "~/.ssh/known_hosts"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "公開鍵認証では接続元が秘密鍵を保持し、接続先に対応する公開鍵を登録します。~/.ssh/id_rsa.pub は接続元利用者の RSA 公開鍵で、その内容をログインしたいリモートアカウントの ~/.ssh/authorized_keys に登録するとサーバーが署名を検証できます。秘密鍵 id_rsa を転送してはならず、known_hosts はサーバーの身元を記録する逆向きの役割です。",
  "answerKeys": ["SSH 鍵を"],
  "answerTexts": ["~/.ssh/id_rsa.pub"],
  "answerHints": ["~/.ssh/id_rsa.pub"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-261",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "中核として、ネットワーク脆弱性テスト群を備えたサーバーを持つネットワークセキュリティスキャナープロジェクトの名称はどれですか。",
  "choices": [{
    "label": "A",
    "text": "NetMap"
  }, {
    "label": "B",
    "text": "OpenVAS"
  }, {
    "label": "C",
    "text": "Smartscan"
  }, {
    "label": "D",
    "text": "Wireshark"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ネットワーク脆弱性テストは、通信先のサービスや設定に既知の弱点がないかを調べる検査で NVT とも呼ばれます。OpenVAS はこのテスト群をスキャナー側で実行して対象システムを評価するプロジェクトです。Wireshark はパケット解析、NetMap や Smartscan はこの文脈の実在するプロジェクト名ではありません。ポートの開閉確認だけでなく既知の脆弱性を検査する点が決め手です。",
  "answerKeys": ["中核として"],
  "answerTexts": ["OpenVAS"],
  "answerHints": ["OpenVAS"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-262",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "fail2ban における jail とは何ですか。",
  "choices": [{
    "label": "A",
    "text": "特定サービスに対する不正な IP アドレスをブロックする netfilter ルールチェーン"
  }, {
    "label": "B",
    "text": "ログファイル内の類似した攻撃パターンを監視すべきサーバー上のサービス群"
  }, {
    "label": "C",
    "text": "フィルター定義と、フィルターが一致したときに実行する1つ以上のアクションの組み合わせ"
  }, {
    "label": "D",
    "text": "fail2ban が実行される chroot 環境"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fail2ban は認証失敗などのログを調べ、条件に該当する接続元へ遮断などの対処を行う仕組みです。jail は、ログから何を検出するかを定めるフィルターと、検出条件を満たした場合に何をするかを定めるアクションを結び付ける設定単位で、監視対象や一定時間内の失敗回数、遮断期間なども設定できます。生成されるファイアウォール規則や chroot 環境とは区別します。",
  "answerKeys": ["fail2ban における"],
  "answerTexts": ["フィルター定義と、フィルターが一致したときに実行する1つ以上のアクションの組み合わせ"],
  "answerHints": ["フィルター"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-263",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "chroot jail 内で実行している vsftpd が次のエラーを出しました。\n/bin/vsftpd: error while loading shared libraries: libc.so.6:\ncannot open shared object file: No such file or directory.\nこのエラーを修正する操作はどれですか。",
  "choices": [{
    "label": "A",
    "text": "ルートファイルシステムの /etc/ld.so.conf に、chroot jail 内の適切な lib ディレクトリへのパスを記述する"
  }, {
    "label": "B",
    "text": "chroot jail 外の必要なライブラリを指すシンボリックリンクを作成する"
  }, {
    "label": "C",
    "text": "必要なライブラリを chroot jail 内の適切な lib ディレクトリへコピーする"
  }, {
    "label": "D",
    "text": "chroot コマンドのオプション --static_libs を指定してプログラムを実行する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "chroot はプロセスから見たファイルシステムのルートを指定ディレクトリへ変更します。動的リンクされた vsftpd は起動時に libc.so.6 などの共有ライブラリを読み込むため、実行ファイルだけを jail 内に置いても起動できません。エラーはライブラリの不足を示しているので、必要なライブラリを jail 内の対応する lib ディレクトリへコピーします。jail 外を指すシンボリックリンクは変更後のルートからたどれません。",
  "answerKeys": ["chroot"],
  "answerTexts": ["必要なライブラリを chroot jail 内の適切な lib ディレクトリへコピーする"],
  "answerHints": ["必要な"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-264",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Samba 設定パラメーター read only = yes と機能的に同一なのはどれですか。",
  "choices": [{
    "label": "A",
    "text": "browseable = no"
  }, {
    "label": "B",
    "text": "read write = no"
  }, {
    "label": "C",
    "text": "writeable = no"
  }, {
    "label": "D",
    "text": "write only = no"
  }, {
    "label": "E",
    "text": "write access = no"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Samba の read only は共有を読み取り専用として扱うかどうかを設定し、writeable はその逆に「書き込み可能か」を表す別名です。したがって read only = yes と writeable = no は同じ設定内容になります。browseable は共有名を一覧に表示するかという別の属性で、read write・write only・write access は Samba の正式なパラメーター名ではありません。",
  "answerKeys": ["Samba 設定パラメーター"],
  "answerTexts": ["writeable = no"],
  "answerHints": ["writeable"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-265",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Samba が CIFS パスワードを /etc/passwd および /etc/shadow 内のパスワードと照合できるようにするには、どのように設定する必要がありますか。",
  "choices": [{
    "label": "A",
    "text": "encrypt passwords = yes と password file = /etc/passwd を設定する"
  }, {
    "label": "B",
    "text": "encrypt passwords = yes、password file = /etc/passwd、password algorithm = crypt を設定する"
  }, {
    "label": "C",
    "text": "smbpasswd ファイルを削除し、passwd ファイルと shadow ファイルへのシンボリックリンクを作成する"
  }, {
    "label": "D",
    "text": "Samba が /etc/passwd と /etc/shadow を直接使用することはできない"
  }, {
    "label": "E",
    "text": "smbpasswd を実行して /etc/passwd と /etc/shadow を Samba パスワードファイルへ変換する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Samba の CIFS 認証で使う照合用データと、UNIX の /etc/shadow などに保存するパスワードハッシュは形式や計算方法が異なります。SMB のチャレンジ応答認証では対応した認証情報が必要で、UNIX の crypt 系ハッシュをそのまま検証データとして使うことはできません。Samba 側のパスワードデータベースやドメイン側の認証基盤を使います。これはパスワード照合方式の違いであり、Samba が Linux のユーザー情報を一切使わないという意味ではありません。",
  "answerKeys": ["Samba が"],
  "answerTexts": ["Samba が /etc/passwd と /etc/shadow を直接使用することはできない"],
  "answerHints": ["Samba"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-266",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Windows で Point'n'Print によるドライバー配布を可能にするには、プリンタードライバーをどの CIFS 共有に配置する必要がありますか。",
  "choices": [{
    "label": "A",
    "text": "winx64drv$"
  }, {
    "label": "B",
    "text": "print$"
  }, {
    "label": "C",
    "text": "共有名は smb.conf の各印刷可能共有にある print driver share オプションで指定する"
  }, {
    "label": "D",
    "text": "pnpdrivers$"
  }, {
    "label": "E",
    "text": "NETLOGON"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Point'n'Print は Windows クライアントが共有プリンターを利用するときにサーバーから対応するドライバーを取得する仕組みです。Samba では、印刷ジョブを受け付けるプリンター共有と、ドライバーファイルを置く print$ 共有を分けます。NETLOGON はドメインのログオンスクリプトなどを提供する共有で用途が異なり、winx64drv$ や pnpdrivers$ は定型の共有名ではありません。",
  "answerKeys": ["Windows で"],
  "answerTexts": ["print$"],
  "answerHints": ["print$"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-267",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ファイルサーバーの Active Directory ドメインへのメンバーシップを処理する Samba サービスはどれですか。",
  "choices": [{
    "label": "A",
    "text": "winbindd"
  }, {
    "label": "B",
    "text": "nmbd"
  }, {
    "label": "C",
    "text": "msadd"
  }, {
    "label": "D",
    "text": "admemb"
  }, {
    "label": "E",
    "text": "samba"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Active Directory のメンバーとして動く Samba ファイルサーバーは、ドメインのアカウントで利用者を確認し、Windows 側の SID と Linux 側の UID・GID を対応付ける必要があります。winbindd はドメインコントローラーと連携してこの認証・識別情報の連携を担います。nmbd は NetBIOS の名前解決やブラウズ情報の提供、samba デーモンは主に Samba の AD ドメインコントローラー機能で使われます。",
  "answerKeys": ["ファイルサーバーの"],
  "answerTexts": ["winbindd"],
  "answerHints": ["winbindd"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-268",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "NFS サーバー上の NFSv4 擬似ファイルシステムについて正しい記述はどれですか。",
  "choices": [{
    "label": "A",
    "text": "必ず /exports という名前でなければならない"
  }, {
    "label": "B",
    "text": "通常、エクスポートするディレクトリツリーの bind マウントを含む"
  }, {
    "label": "C",
    "text": "サーバー上の専用パーティションでなければならない"
  }, {
    "label": "D",
    "text": "/etc/pathmapd.conf の Nfsv4-Root オプションで定義される"
  }, {
    "label": "E",
    "text": "通常、エクスポートするディレクトリツリーへのシンボリックリンクを含む"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "NFSv4 の擬似ファイルシステムは、サーバーが公開するディレクトリ群をクライアントから一つの階層としてたどれるように見せる名前空間です。サーバー上で別々の場所にあるツリーを公開ルートの下へまとめる方法として bind マウントが使われ、データを複製せずに同じ実体を別のマウント位置から見せられます。/exports は公開ルートの例にすぎず固定の必須名ではありません。",
  "answerKeys": ["NFS サーバー上の"],
  "answerTexts": ["通常、エクスポートするディレクトリツリーの bind マウントを含む"],
  "answerHints": ["通常、エクスポートするディレクトリツリーの"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-269",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ユーザーから、Windows の管理共有と同様に一覧には表示されない、confidential という名前の Samba 共有を作成するよう依頼されました。一覧に表示されない Samba 共有を実現する設定はどれですか。",
  "choices": [{
    "label": "A",
    "text": "[confidential]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700"
  }, {
    "label": "B",
    "text": "[$confidential]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700"
  }, {
    "label": "C",
    "text": "[#confidential]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700"
  }, {
    "label": "D",
    "text": "[%confidential]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700"
  }, {
    "label": "E",
    "text": "[confidential$]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Windows の管理共有と同様の隠し共有名にする場合は、Samba の共有名の末尾に $ を付けます。角括弧内がクライアントに公開する共有名であり、path は保存先、comment は説明文です。$ を先頭に置いたり # や % を付けたりしても隠し共有の形式にはなりません。名前の非表示と利用者のアクセス権は別の機能なので、共有を隠すことをアクセス制御の代わりにはできません。",
  "answerKeys": ["ユーザーから"],
  "answerTexts": ["[confidential$]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700"],
  "answerHints": ["[confidential$"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-270",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "/etc/exports で有効なオプション名はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "rw"
  }, {
    "label": "B",
    "text": "ro"
  }, {
    "label": "C",
    "text": "rootsquash"
  }, {
    "label": "D",
    "text": "norootsquash"
  }, {
    "label": "E",
    "text": "uid"
  }],
  "answer": ["A", "B"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/exports は、NFS サーバーがどのディレクトリをどのクライアントへ公開し、どの条件で利用させるかを指定する設定ファイルです。rw は読み書き可能、ro は読み取り専用として公開する有効なオプションです。root 利用者の扱いを指定するのは root_squash・no_root_squash とアンダースコアを含む綴りで、匿名ユーザーの ID 指定は anonuid です。意味が似ていても正式な綴りでなければ認識されません。",
  "answerKeys": ["/etc/exports で有効な"],
  "answerTexts": ["rw", "ro"],
  "answerHints": ["rw", "ro"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-271",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "NFS サーバーがクライアントへ公開するファイルシステムを設定するために使用するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "exportfs"
  }, {
    "label": "B",
    "text": "mkfs.nfs"
  }, {
    "label": "C",
    "text": "mount"
  }, {
    "label": "D",
    "text": "nfsstat"
  }, {
    "label": "E",
    "text": "telinit"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "NFS でサーバーのディレクトリをクライアントへ公開することをエクスポートと呼びます。exportfs は公開するファイルシステムを登録・解除したり、エクスポート一覧を表示したりするコマンドで、/etc/exports を編集した後に exportfs -ra で一覧を更新できます。mount は利用側が公開領域を接続する操作、nfsstat は統計表示で対象が異なります。",
  "answerKeys": ["NFS サーバーが"],
  "answerTexts": ["exportfs"],
  "answerHints": ["exportfs"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-272",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "オプションを指定せずに DNS 問い合わせを実行したとき、最も多くの情報を表示するツールはどれですか。",
  "choices": [{
    "label": "A",
    "text": "dig"
  }, {
    "label": "B",
    "text": "nslookup"
  }, {
    "label": "C",
    "text": "host"
  }, {
    "label": "D",
    "text": "named-checkconf"
  }, {
    "label": "E",
    "text": "named-checkzone"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "DNS の応答には名前とアドレスの対応だけでなく、応答ヘッダーの状態やフラグ、QUESTION・ANSWER などのセクション、問い合わせ先や処理時間といった診断材料があります。dig は追加の表示指定をしない通常の問い合わせでもこれらを詳しく表示します。host の標準出力は簡潔で、named-checkconf と named-checkzone は設定やゾーンファイルの検査ツールです。",
  "answerKeys": ["オプション"],
  "answerTexts": ["dig"],
  "answerHints": ["dig"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-273",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "dig で DNS 検索を実行すると、次の応答が返されました。\n;; QUESTION SECTION:\n;5.123.168.192.in-addr.arpa.        IN      PTR\n\n;; ANSWER SECTION:\n5.123.168.192.in-addr.arpa.  600    IN      PTR  linuserv.example.net.123.168.192.in-addr.arpa.\n\n;; AUTHORITY SECTION:\n123.168.192.in-addr.arpa.    600    IN      NS      linuserv.example.net.\n\n;; ADDITIONAL SECTION:\nlinuserv.example.net.        600    IN      A       192.168.123.5\nこの異常な PTR 応答の原因はどれですか。",
  "choices": [{
    "label": "A",
    "text": "正引きゾーンファイルの PTR レコードで linuserv.example.net の後に . がない"
  }, {
    "label": "B",
    "text": "正引きゾーンファイルの PTR レコードで linuserv の後に . がない"
  }, {
    "label": "C",
    "text": "逆引きゾーンファイルの PTR レコードで linuserv.example.net の後に . がない"
  }, {
    "label": "D",
    "text": "逆引きゾーンのNS定義にある . を削除する必要がある"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "BIND のゾーンファイルでは、末尾にピリオドがないドメイン名は相対名として扱われ、現在の $ORIGIN が補われます。問い合わせ名は 5.123.168.192.in-addr.arpa. なので逆引きゾーンの PTR レコードが対象であり、参照先を linuserv.example.net と末尾のピリオドなしで書いたため、基準の 123.168.192.in-addr.arpa. が後ろに連結されています。完全なドメイン名として扱わせるには末尾までピリオドを付けます。",
  "answerKeys": ["dig で DNS"],
  "answerTexts": ["逆引きゾーンファイルの PTR レコードで linuserv.example.net の後に . がない"],
  "answerHints": ["逆引きゾーンファイル"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-274",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "DNS サーバーで再帰問い合わせをデフォルトで無効にするため、BIND のグローバル options に必要な設定はどれですか。",
  "choices": [{
    "label": "A",
    "text": "allow-recursive-query ( none; );"
  }, {
    "label": "B",
    "text": "allow-recursive-query off;"
  }, {
    "label": "C",
    "text": "recursion disabled; ;"
  }, {
    "label": "D",
    "text": "recursion none; ;"
  }, {
    "label": "E",
    "text": "recursion no;"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "BIND の再帰処理は、クライアントの代わりにほかの DNS サーバーへ問い合わせて回答を取得する機能で、options 内の recursion に真偽値を指定して切り替えます。recursion no; がその正式な書き方です。問い合わせ元を制限する設定は allow-recursion であり、allow-recursive-query という項目名はありません。機能の切り替えとアクセス制御は別の指定です。",
  "answerKeys": ["DNS サーバー"],
  "answerTexts": ["recursion no;"],
  "answerHints": ["recursion no;"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-275",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "親ゾーンから子ゾーン lab を委任しており、権威ネームサーバーの名前が子ゾーン内の ns1.lab である場合、glue record になり得る DNS リソースレコードはどれですか。",
  "choices": [{
    "label": "A",
    "text": "ns1.lab A 198.51.100.53"
  }, {
    "label": "B",
    "text": "lab NS 198.51.100.53"
  }, {
    "label": "C",
    "text": "ns1.lab NS 198.51.100.53"
  }, {
    "label": "D",
    "text": "ns1. A 198.51.100.53"
  }, {
    "label": "E",
    "text": "ns1.lab GLUE 198.51.100.53"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "委任では NS レコードが担当するネームサーバーの名前を示し、A レコードがその IPv4 アドレスを示します。担当サーバー名が子ゾーン内の ns1.lab だと、そのアドレスを知るために子ゾーンへ問い合わせる循環が生じるため、親ゾーンに補助的なアドレス情報を置いて循環を解くのが glue record です。NS の値にアドレスは書けず、GLUE というレコード型名も存在しません。ns1. は末尾のピリオドによる絶対名で別の名前になります。",
  "answerKeys": ["親"],
  "answerTexts": ["ns1.lab A 198.51.100.53"],
  "answerHints": ["ns1.lab A"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-276",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "DNSSEC は何のために使用されますか。",
  "choices": [{
    "label": "A",
    "text": "ネームサーバー間の DNS 問い合わせを暗号化する"
  }, {
    "label": "B",
    "text": "DNS ゾーンを暗号学的に認証する"
  }, {
    "label": "C",
    "text": "ローカルゾーンに対してセカンダリ DNS 問い合わせを行う"
  }, {
    "label": "D",
    "text": "DNS 問い合わせを開始したユーザーを認証する"
  }, {
    "label": "E",
    "text": "DNS 問い合わせと応答を暗号化する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "DNSSEC は DNS データに付けた電子署名を検証し、そのデータの出所と内容が改ざんされていないことを確認する仕組みです。暗号技術を使いますが、問い合わせや応答を読めなくする通信の暗号化とは目的が異なります。ゾーンのレコード群に付けた署名を公開鍵で検証し、信頼する鍵へつながる関係も確認します。利用者の本人確認やゾーンの複製とも区別します。",
  "answerKeys": ["DNSSEC は"],
  "answerTexts": ["DNS ゾーンを暗号学的に認証する"],
  "answerHints": ["DNS ゾーン"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-277",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください －\ndn: cn=Some Person, dc=example, dc=com\nchangetype: ________________\n...\n新しい LDAP エントリを追加する場合、上記 LDIF ファイル抜粋の空欄1に入るキーワードは何ですか。キーワードだけを入力してください。",
  "choices": [],
  "answer": ["add"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LDIF は LDAP ディレクトリのエントリや変更内容をテキストで表す形式です。dn は操作対象を識別する名前で、changetype はその対象に実行する操作を示します。新しいエントリを追加する場合は changetype: add を指定し、続けて作成するエントリの属性を記述します。changetype には既存属性を編集する modify、名前を変える modrdn、削除する delete もあり、操作前の対象の有無と変更内容で使い分けます。",
  "answerKeys": ["空欄を埋めてください －\ndn: cn=Some Person, dc=example, dc=com\nchangetype: ________________\n...\n新しい"],
  "answerTexts": ["add"],
  "answerHints": ["add"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-278",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "BIND ゾーンファイル内の @ 文字は何を示しますか。",
  "choices": [{
    "label": "A",
    "text": "DNS サーバーの完全修飾ホスト名"
  }, {
    "label": "B",
    "text": "named.conf のゾーン管理者のメールアドレスを表す別名"
  }, {
    "label": "C",
    "text": "named.conf の zone 文で定義されたゾーン名"
  }, {
    "label": "D",
    "text": "2つの CNAME エントリ間に別名を作成するための記号"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ゾーンファイルで名前欄に使う @ は、現在の基準ドメイン名である $ORIGIN を表します。読み込み開始時の $ORIGIN は named.conf の zone 文で定義したゾーン名なので、途中で基準を変えていなければ @ はそのゾーン名を示します。ゾーンの名前と、それを担当する DNS サーバーのホスト名は別であり、CNAME による別名対応とも異なります。",
  "answerKeys": ["BIND ゾーンファイル"],
  "answerTexts": ["named.conf の zone 文で定義されたゾーン名"],
  "answerHints": ["named.conf の zone"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-279",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "スレーブネームサーバーが接続できる送信元 IP アドレスを制限するために使用する BIND オプションはどれですか。",
  "choices": [{
    "label": "A",
    "text": "allow-zone-transfer"
  }, {
    "label": "B",
    "text": "allow-transfer"
  }, {
    "label": "C",
    "text": "allow-secondary"
  }, {
    "label": "D",
    "text": "allow-slaves"
  }, {
    "label": "E",
    "text": "allow-queries"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "スレーブネームサーバーはマスターからゾーン転送でゾーンデータを取得します。allow-transfer は転送を提供する側で、どの相手にゾーンデータを渡すかを IP アドレスなどで制限する設定です。通常の名前解決要求を許可する設定は allow-query であり、allow-zone-transfer・allow-secondary・allow-slaves は BIND の正式な設定名ではありません。",
  "answerKeys": ["スレーブネームサーバー"],
  "answerTexts": ["allow-transfer"],
  "answerHints": ["allow-transfer"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-280",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Apache HTTPD Web サーバー上のディレクトリをパスワードで保護するため、該当ディレクトリの .htaccess ファイルに次の設定を追加しました。\nAuthType Basic\nAuthName \"Protected Directory\"\nAuthUserFile /var/www/dir/.htpasswd\nRequire valid-user\nさらに、/var/www/dir/.htpasswd ファイルを作成し、次の内容を記述しました。\nusera:S3cr3t\nこれらのファイルが Web サーバープロセスによってすべて正しく処理されたとき、ディレクトリへのリクエストについて正しい記述はどれですか。",
  "choices": [{
    "label": "A",
    "text": "ユーザー usera はパスワード s3cr3t を使用してサイトへアクセスできる"
  }, {
    "label": "B",
    "text": "ユーザー usera としてディレクトリへアクセスすると HTTP エラーコード442（User Not Existent）が発生する"
  }, {
    "label": "C",
    "text": "リクエストには HTTP エラーコード500（Internal Server Error）で応答する"
  }, {
    "label": "D",
    "text": "ブラウザーは訪問者にユーザー名とパスワードの入力を求めるが、usera でのログインは成功しないように見える"
  }, {
    "label": "E",
    "text": "Web サーバーは認証を要求せずにディレクトリのコンテンツを配信する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "AuthType Basic はブラウザーへユーザー名とパスワードを求める認証方式を指定し、AuthUserFile はその照合に使うファイルを指定します。Apache の認証ファイルにはパスワードそのものではなく、htpasswd で作成するハッシュ値を保存します。平文を直接記した行では照合できないため認証は成立せず、入力画面は出てもログインできません。設定自体は有効なので内容が無認証で公開されることもありません。",
  "answerKeys": ["Apache HTTPD Web"],
  "answerTexts": ["ブラウザーは訪問者にユーザー名とパスワードの入力を求めるが、usera でのログインは成功しないように見える"],
  "answerHints": ["ブラウザー"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-281",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "HTTPS プロトコルのサポートを有効にする Apache HTTPD ディレクティブはどれですか。",
  "choices": [{
    "label": "A",
    "text": "HTTPSEngine on"
  }, {
    "label": "B",
    "text": "SSLEngine on"
  }, {
    "label": "C",
    "text": "SSLEnable on"
  }, {
    "label": "D",
    "text": "HTTPSEnable on"
  }, {
    "label": "E",
    "text": "StartTLS on"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "HTTPS は HTTP の通信を TLS で保護する方式で、Apache HTTPD では mod_ssl が TLS 処理を担当します。SSLEngine は mod_ssl の動作を切り替えるディレクティブで、on を指定すると対象のサーバー設定や仮想ホストで SSL/TLS 処理が有効になります。HTTPS サービス全体を動かすには mod_ssl の読み込み、待ち受け設定、証明書や秘密鍵の設定も必要です。",
  "answerKeys": ["HTTPS"],
  "answerTexts": ["SSLEngine on"],
  "answerHints": ["SSLEngine"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-282",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － Apache HTTPD サーバーでエラーログファイルの保存先を定義する設定ディレクティブは何ですか。オプションを付けないディレクティブ名を1つ入力してください。",
  "choices": [],
  "answer": ["ErrorLog"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Apache HTTPD のエラーログはサーバーが検出した問題や診断情報を記録するもので、クライアントからの要求を記録するアクセスログとは用途が異なります。ErrorLog はその出力先を定義するディレクティブで、サーバー全体だけでなく仮想ホストごとにも指定できます。記録するメッセージの詳細度を指定する LogLevel とは目的が異なります。",
  "answerKeys": ["空欄を埋めてください － Apache"],
  "answerTexts": ["ErrorLog"],
  "answerHints": ["ErrorLog"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-283",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "Apache HTTPD 設定ファイルの Alias ディレクティブと Redirect ディレクティブについて正しい記述はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "Alias は DocumentRoot 配下のファイルだけを参照できる"
  }, {
    "label": "B",
    "text": "Redirect は正規表現を使用する"
  }, {
    "label": "C",
    "text": "Redirect はクライアント側で処理される"
  }, {
    "label": "D",
    "text": "Alias はサーバー側で処理される"
  }, {
    "label": "E",
    "text": "Alias は有効な設定ディレクティブではない"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Alias は要求された URL のパスをサーバー上のファイルやディレクトリへ対応付ける設定で、その処理は Apache の内部で完結します。DocumentRoot 外のディレクトリも対象にできます。Redirect は別の URL へアクセスし直すようクライアントへ通知する設定で、ブラウザーが移動先へ新しい要求を送るため転送先の取得はクライアント側で行われます。正規表現を使うのは RedirectMatch です。",
  "answerKeys": ["Apache HTTPD 設定"],
  "answerTexts": ["Redirect はクライアント側で処理される", "Alias はサーバー側で処理される"],
  "answerHints": ["Redirect はクライアント", "Alias はサーバー"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-284",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "sales_net という ACL のユーザーに対し、sales_time という time ACL で指定した時間だけインターネットへのアクセスを許可する Squid の http_access ディレクティブはどれですか。",
  "choices": [{
    "label": "A",
    "text": "http_access deny sales_time sales_net"
  }, {
    "label": "B",
    "text": "http_access allow sales_net sales_time"
  }, {
    "label": "C",
    "text": "http_access allow sales_net and sales-time"
  }, {
    "label": "D",
    "text": "allow http_access sales_net sales_time"
  }, {
    "label": "E",
    "text": "http_access sales_net sales_time"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Squid の ACL は接続元や時間帯などの条件に名前を付けたものです。http_access では、その ACL に一致した要求を allow で許可するか deny で拒否し、同じ行に並べた複数の ACL はすべて一致する必要があります（AND 条件）。したがって http_access allow sales_net sales_time と書きます。論理演算子 and は不要で、allow や deny を省略したり行頭へ置いたりはできません。",
  "answerKeys": ["sales_net"],
  "answerTexts": ["http_access allow sales_net sales_time"],
  "answerHints": ["http_access allow sales_net sales_time"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-285",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Squid がクライアント要求を待ち受ける1つ以上のポート番号を設定する squid.conf のグローバルオプションはどれですか。",
  "choices": [{
    "label": "A",
    "text": "port"
  }, {
    "label": "B",
    "text": "client_port"
  }, {
    "label": "C",
    "text": "http_port"
  }, {
    "label": "D",
    "text": "server_port"
  }, {
    "label": "E",
    "text": "squid_port"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Squid はクライアントから Web への要求を受け、必要に応じて接続先サーバーへ取り次ぐプロキシです。squid.conf の http_port は、クライアントが Squid へ接続するための待ち受けポートを設定し、複数行に記述して複数の待ち受け先を設定できます。クライアント側の送信元ポートや接続先 Web サーバーのポートを設定する項目ではなく、アクセスの許可は http_access で別に制御します。",
  "answerKeys": ["Squid が"],
  "answerTexts": ["http_port"],
  "answerHints": ["http_port"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-286",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "mod_authz_core を使用する場合、Apache HTTPD 設定ファイルの Require に認可プロバイダーを指定する引数として使用できる文字列はどれですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "method"
  }, {
    "label": "B",
    "text": "all"
  }, {
    "label": "C",
    "text": "regex"
  }, {
    "label": "D",
    "text": "header"
  }, {
    "label": "E",
    "text": "expr"
  }],
  "answer": ["A", "B", "E"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Require は要求にアクセスを許すかどうかを判定する認可の設定で、mod_authz_core では Require の後ろに認可プロバイダー名を置き、その後に判定条件を続けます。method は HTTP メソッド、all は全要求を一律に許可・拒否（Require all granted / denied）、expr は式の評価結果で判定します。regex や header はプロバイダー名ではなく、正規表現やヘッダーを使う場合は expr の式として記述します。",
  "answerKeys": ["mod_authz_core"],
  "answerTexts": ["method", "all", "expr"],
  "answerHints": ["method", "all", "expr"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-287",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Apache HTTPD で HTTPS を提供するための証明書署名要求（CSR）を作成するツールはどれですか。",
  "choices": [{
    "label": "A",
    "text": "apachectl"
  }, {
    "label": "B",
    "text": "certgen"
  }, {
    "label": "C",
    "text": "cartool"
  }, {
    "label": "D",
    "text": "httpsgen"
  }, {
    "label": "E",
    "text": "openssl"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "CSR は公開鍵や証明書に記載したい識別情報を含み、対応する秘密鍵で署名された証明書署名要求です。openssl の req サブコマンドを使うと、秘密鍵に対応する公開鍵と申請情報から CSR を作成できます。apachectl は Apache の起動・停止や設定の構文確認に使う制御ツールで、certgen・cartool・httpsgen は標準のコマンドではありません。",
  "answerKeys": ["Apache HTTPD で HTTPS"],
  "answerTexts": ["openssl"],
  "answerHints": ["openssl"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-288",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "証明書署名要求への応答として、認証局から Web サーバー証明書と、その Web サーバー証明書へ署名した中間認証局の証明書が送られてきました。Apache HTTPD で Web サーバー証明書を使用するには、中間証明書をどのように扱うべきですか。",
  "choices": [{
    "label": "A",
    "text": "中間証明書を Web サーバー証明書と1つのファイルに連結し、そのファイルを SSLCertificateFile で指定する"
  }, {
    "label": "B",
    "text": "中間証明書は Web サーバーへ配備する前の証明書検証に使用し、その後は削除できる"
  }, {
    "label": "C",
    "text": "中間証明書を独立したファイルに保存し、そのファイルを SSLCACertificateFile で参照する"
  }, {
    "label": "D",
    "text": "正しい動作のテストに使用する Web ブラウザーの証明書ストアへ中間証明書をインポートする"
  }, {
    "label": "E",
    "text": "中間証明書を保管して認証局へ再送し、証明書の更新を要求する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "中間証明書は、サーバー証明書の発行元を確認し、ブラウザーが信頼するルート認証局までの証明書チェーンをつなぐために使います。Apache HTTPD 2.4.8 以降では、SSLCertificateFile の PEM 形式ファイルにサーバー証明書と中間証明書を含められ、先頭をサーバー証明書としてその署名元を続けることで検証用の連鎖を提示できます。SSLCACertificateFile はクライアント証明書の検証に使う信頼する認証局の設定で目的が異なります。",
  "answerKeys": ["証明書署名要求への"],
  "answerTexts": ["中間証明書を Web サーバー証明書と1つのファイルに連結し、そのファイルを SSLCertificateFile で指定する"],
  "answerHints": ["中間証明書を Web"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-289",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － Nginx の server 設定ブロックで、仮想ホストが利用可能になる TCP ポートと使用するプロトコルを定義するディレクティブは何ですか。値を付けないディレクティブ名を入力してください。",
  "choices": [],
  "answer": ["listen"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Nginx の server ブロックは仮想ホストの接続受付や要求処理を設定する単位です。listen は待ち受ける IP アドレスや TCP ポートを指定し、ssl などの引数によって TLS を使う接続であることも示します。たとえば listen 443 ssl; は443番ポートで TLS 接続を受け付ける設定です。ホスト名を照合する server_name や要求パスを照合する location とは処理段階が異なります。",
  "answerKeys": ["空欄を埋めてください － Nginx"],
  "answerTexts": ["listen"],
  "answerHints": ["listen"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-290",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "location / {\n    ____________ http://proxiedserver:8080;\n}\nNginx を介して Web サーバーをリバースプロキシする場合、上記設定例の空欄に入るキーワードはどれですか。",
  "choices": [{
    "label": "A",
    "text": "remote_proxy"
  }, {
    "label": "B",
    "text": "reverse_proxy"
  }, {
    "label": "C",
    "text": "proxy_reverse"
  }, {
    "label": "D",
    "text": "proxy_pass"
  }, {
    "label": "E",
    "text": "forward_to"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Nginx のリバースプロキシは、クライアントから受け取った要求を背後の Web サーバーへ送り、その応答をクライアントへ返す仕組みです。location は処理対象の要求パスを選び、proxy_pass はその要求を送る HTTP サーバーの宛先を指定します。後ろには通信方式、ホスト名、必要に応じてポートや URI を続けます。remote_proxy・reverse_proxy・proxy_reverse・forward_to は Nginx のディレクティブ名ではありません。",
  "answerKeys": ["location"],
  "answerTexts": ["proxy_pass"],
  "answerHints": ["proxy_pass"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-291",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "OpenLDAP で access ディレクティブをまったく指定していない場合、デフォルトの設定を表すものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "access to *\n    by *        read"
  }, {
    "label": "B",
    "text": "access to *\n    by anonymous  none\n    by *          read"
  }, {
    "label": "C",
    "text": "access to *\n    by anonymous  auth\n    by *          read"
  }, {
    "label": "D",
    "text": "access to *\n    by anonymous  write\n    by *          read"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "OpenLDAP の access 設定は、どのデータに、誰が、どの権限でアクセスできるかを定義します。アクセス制御が未指定のときの既定方針は全クライアントへの読み取り許可なので、access to * に by * read を組み合わせた形が同じ動作を表します。by 句は最初に一致したものが適用されるため、by anonymous none や auth を先に置くと匿名利用者の読み取りが許可されず既定動作と異なります。",
  "answerKeys": ["OpenLDAP で"],
  "answerTexts": ["access to *\n    by *        read"],
  "answerHints": ["access to *\n    by *"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-292",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ISC DHCPD を実行する DHCP サーバーで、MAC アドレス 08:00:2b:4c:59:23 の lpi というホストに常に IP アドレス 192.168.1.2 を割り当てる必要があります。この IP アドレス固定割り当てを実現する設定はどれですか。",
  "choices": [{
    "label": "A",
    "text": "host lpi {\n    hardware-ethernet 08:00:2b:4c:59:23;\n    fixed-address 192.168.1.2;\n}"
  }, {
    "label": "B",
    "text": "host lpi {\n    mac=08:00:2b:4c:59:23;\n    ip=192.168.1.2;\n}"
  }, {
    "label": "C",
    "text": "host lpi = 08:00:2b:4c:59:23 192.168.1.2"
  }, {
    "label": "D",
    "text": "host lpi {\n    hardware ethernet 08:00:2b:4c:59:23;\n    fixed-address 192.168.1.2;\n}"
  }, {
    "label": "E",
    "text": "host lpi {\n    hardware-address 08:00:2b:4c:59:23;\n    fixed-ip 192.168.1.2;\n}"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ISC DHCPD で特定の端末へ同じ IPv4 アドレスを渡すには、host 宣言の中で端末を識別する情報と固定割り当て先を結び付けます。MAC アドレスは hardware ethernet（hardware 文にハードウェア種別 ethernet を引数として続ける形）で指定し、配布する IPv4 アドレスは fixed-address で指定します。host の後ろの lpi は設定上の識別名にすぎません。hardware-ethernet のように1語にしたり fixed-ip と書いたりはできません。",
  "answerKeys": ["ISC DHCPD を実行する"],
  "answerTexts": ["host lpi {\n    hardware ethernet 08:00:2b:4c:59:23;\n    fixed-address 192.168.1.2;\n}"],
  "answerHints": ["host lpi {\n    hardware ethernet"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-293",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "slapd.conf ファイルに rootdn ディレクティブと rootpw ディレクティブが存在しない場合、LDAP 管理者アカウントはどのように設定されますか。",
  "choices": [{
    "label": "A",
    "text": "デフォルトの admin アカウントとパスワード admin が使用される"
  }, {
    "label": "B",
    "text": "slapd.conf の ACL によってアカウントが定義される"
  }, {
    "label": "C",
    "text": "デフォルトの admin アカウントがパスワードなしで使用される"
  }, {
    "label": "D",
    "text": "アカウントは /etc/ldap.secret ファイルで定義される"
  }, {
    "label": "E",
    "text": "アカウントは /etc/ldap.root.conf ファイルで定義される"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "OpenLDAP の rootdn は通常のアクセス制御を受けない特別な管理用 DN を指定し、rootpw はその認証用パスワードを設定する項目です。これらがない場合に既定の管理者が自動で用意されるわけではなく、認証可能な DN へ必要な書き込み権限などを slapd.conf の ACL で与えることで管理操作を行わせます。/etc/ldap.secret はクライアント側で認証情報を保存する用途で、管理者を定義するファイルではありません。",
  "answerKeys": ["slapd.conf ファイル"],
  "answerTexts": ["slapd.conf の ACL によってアカウントが定義される"],
  "answerHints": ["slapd"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-294",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ユーザー名およびグループ名の一覧と、それらが利用できるシステム資源の制限を記載した任意の設定ファイルをシステム管理者が使用できる PAM モジュールはどれですか。",
  "choices": [{
    "label": "A",
    "text": "pam_filter"
  }, {
    "label": "B",
    "text": "pam_limits"
  }, {
    "label": "C",
    "text": "pam_listfile"
  }, {
    "label": "D",
    "text": "pam_unix"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "pam_limits は、ユーザーのセッション開始時にプロセス数やオープンできるファイル数などのシステム資源へ上限を設定するモジュールです。通常は /etc/security/limits.conf を読み取りますが、conf= にファイルパスを指定すれば同じ形式の任意の別ファイルを使用できます。pam_listfile は一覧による許可・拒否の判定、pam_filter は入出力のフィルター、pam_unix は従来の UNIX アカウント認証で役割が異なります。",
  "answerKeys": ["ユーザー名および"],
  "answerTexts": ["pam_limits"],
  "answerHints": ["pam_limits"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-295",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － 以下 LDIF 抜粋によると、Robert Smith が所属する組織単位は何ですか。組織単位の値だけを入力してください。\ndn: cn=Robert Smith, ou=people, dc=example, dc=com\nobjectclass: inetOrgPerson\ncn: Robert Smith\ncn: Robert J Smith\ncn: bob smith\nsn: smith\nuid: rjsmith\nuserpassword: rJsmithH\ncarlicense: HISCAR 123\nhomephone: 555-111-2222\nmail: r.smith@example.com\nmail: rsmith@example.com\nmail: bob.smith@example.com\ndescription: swell guy",
  "choices": [],
  "answer": ["people"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LDIF は LDAP に格納するエントリーを属性名と値の組で表すテキスト形式です。dn はエントリーを識別する名前で、cn=Robert Smith, ou=people, dc=example, dc=com のように階層を表します。ou は組織単位、dc はドメイン名の構成要素を示すため、所属する組織単位の値は people です。求められているのは値だけなので ou= という表記や DN 全体は含めません。",
  "answerKeys": ["空欄を埋めてください － 以下"],
  "answerTexts": ["people"],
  "answerHints": ["people"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-296",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "PAM 設定ファイルの required 制御フラグについて正しい記述はどれですか。",
  "choices": [{
    "label": "A",
    "text": "モジュールが成功を返すと、同じタイプの以降のモジュールは呼び出されない"
  }, {
    "label": "B",
    "text": "そのモジュールの成功はモジュールタイプ全体の成功に必要であり、失敗すると直ちに呼び出し元アプリケーションへ制御が戻る"
  }, {
    "label": "C",
    "text": "そのモジュールの成功はモジュールタイプ全体の成功に必要だが、同じタイプの残りのモジュールもすべて呼び出される"
  }, {
    "label": "D",
    "text": "そのモジュールは重要ではなく、成功または失敗のどちらを返すかは関係ない"
  }, {
    "label": "E",
    "text": "モジュールが失敗を返すと、同じタイプの以降のモジュールは呼び出されない"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "PAM は認証などの処理を複数のモジュールに分担させ、同じ管理タイプのモジュールを順に評価します。required は、そのモジュールの成功が管理タイプ全体の成功に必要である一方、失敗しても結果を保持したまま後続のモジュールへ進む制御フラグです。失敗時に直ちに戻るのは requisite、成功を契機に残りを省略するのは sufficient です。",
  "answerKeys": ["PAM 設定ファイルの"],
  "answerTexts": ["そのモジュールの成功はモジュールタイプ全体の成功に必要だが、同じタイプの残りのモジュールもすべて呼び出される"],
  "answerHints": ["そのモジュールの成功はモジュールタイプ全体の成功に必要だが"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-297",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － ディレクトリベースの設定を使用する OpenLDAP サーバーで、その設定を保持する LDAP ツリーのルート要素名は何ですか。追加情報を付けず、要素名だけを入力してください。",
  "choices": [],
  "answer": ["cn=config"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "OpenLDAP のディレクトリベースの設定では、サーバー設定を LDAP エントリーとして扱い、cn=config を基点とする設定用ツリーに配置します。この方式では設定も DN を持ち、管理権限に応じて LDAP 操作で参照・変更できます。配下にはスキーマやデータベースごとの設定が置かれます。設問はツリーのルート要素名を求めているため、slapd.d などのファイルシステム上の名称ではなく cn=config と答えます。",
  "answerKeys": ["空欄を埋めてください － ディレクトリベース"],
  "answerTexts": ["cn=config"],
  "answerHints": ["cn=config"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-298",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "PAM モジュールはどのような形式で構成され、どこに格納されますか。",
  "choices": [{
    "label": "A",
    "text": "/etc/security/ にプレーンテキストファイルとして格納される"
  }, {
    "label": "B",
    "text": "/etc/pam.d/bin/ に静的リンクされたバイナリとして格納される"
  }, {
    "label": "C",
    "text": "/lib/modules/ 配下の対応するサブディレクトリに Linux カーネルモジュールとして格納される"
  }, {
    "label": "D",
    "text": "/lib/ ディレクトリ階層内に共有オブジェクトファイルとして格納される"
  }, {
    "label": "E",
    "text": "/usr/lib/pam/sbin/ に動的リンクされたバイナリとして格納される"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "PAM モジュールは、ログインなどを行うアプリケーションが PAM ライブラリを通じて読み込む、ユーザー空間の共有オブジェクトです。pam_unix.so のような .so ファイルとして提供され、標準的な配置先には /lib/security/ や /lib64/security/ などがあります。/etc/security/ に置かれるのはモジュールが読む設定ファイル、/etc/pam.d/ はサービスごとの呼び出し設定で、カーネルモジュールとも異なります。",
  "answerKeys": ["PAM モジュール"],
  "answerTexts": ["/lib/ ディレクトリ階層内に共有オブジェクトファイルとして格納される"],
  "answerHints": ["/lib/ "],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-299",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ISC DHCPD の設定で、対応する host セクションが設定内に存在するノードがアドレスプールを使用できるかどうかを指定するために使う文はどれですか。",
  "choices": [{
    "label": "A",
    "text": "identified-nodes"
  }, {
    "label": "B",
    "text": "unconfigured-hosts"
  }, {
    "label": "C",
    "text": "missing-peers"
  }, {
    "label": "D",
    "text": "unmatched-hwaddr"
  }, {
    "label": "E",
    "text": "unknown-clients"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ISC DHCPD では、対応する host 宣言があるクライアントを known-clients、ないクライアントを unknown-clients として分類します。pool 内の allow や deny と組み合わせ、deny unknown-clients とすれば host 宣言を持たないクライアントを拒否して登録済みクライアントに利用を限定できます。identified-nodes・unconfigured-hosts・missing-peers・unmatched-hwaddr は正式な分類名ではありません。",
  "answerKeys": ["ISC DHCPD の"],
  "answerTexts": ["unknown-clients"],
  "answerHints": ["unknown"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-300",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください －\ndn: cn=Some Person, dc=example, dc=com\nchangetype: ________________\n...\nLDAP エントリに対する変更を指定する場合、上記 LDIF ファイル抜粋の空欄に入るキーワードは何ですか。キーワードだけを入力してください。",
  "choices": [],
  "answer": ["add"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LDIF の変更レコードでは、dn で操作対象のエントリーを指定し、changetype で実行する操作の種類を示します。add は新しいエントリーを追加する操作、modify は既存エントリーの属性を変更する操作です。原文の指定解答は add ですが、提示された抜粋では changetype 以降が省略されており、新規追加か既存属性の更新かを区別する条件がない点に注意してください。",
  "answerKeys": ["空欄を埋めてください －\ndn: cn=Some Person, dc=example, dc=com\nchangetype: ________________\n...\nLDAP"],
  "answerTexts": ["add"],
  "answerHints": ["add"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-301",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － LDAP エントリのパスワード変更に使用できる OpenLDAP クライアントコマンドは何ですか。パスやパラメーターを付けず、コマンドだけを入力してください。",
  "choices": [],
  "answer": ["ldappasswd"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ldappasswd は、LDAP サーバーにパスワードの変更を要求する専用のクライアントコマンドで、通常の属性更新とは別に用意された Password Modify 拡張操作を利用します。変更が許可されるには認証や変更権限などサーバー側の条件を満たす必要があります。属性を編集する ldapmodify や、保存用のハッシュ値をローカルで生成する slappasswd とは役割が異なります。",
  "answerKeys": ["空欄を埋めてください － LDAP エントリ"],
  "answerTexts": ["ldappasswd"],
  "answerHints": ["ldappasswd"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-302",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ある会社が新しい DNS ドメイン名へ移行中で、Postfix サーバー上の全ユーザーについて旧・新両方のドメイン宛てメールを受信したいと考えています。これを実現するため更新すべき設定オプションはどれですか。",
  "choices": [{
    "label": "A",
    "text": "mydomain"
  }, {
    "label": "B",
    "text": "mylocations"
  }, {
    "label": "C",
    "text": "mydestination"
  }, {
    "label": "D",
    "text": "myhosts"
  }, {
    "label": "E",
    "text": "mydomains"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Postfix の mydestination は、このサーバーが最終的な配送先として受け取るドメイン名を列挙する設定です。旧ドメインと新ドメインの両方をここに並べれば、どちらの宛先も自分宛てとして受信しローカルの利用者へ配送できます。mydomain は既定のドメイン名を1つ定める設定であり、mylocations・myhosts・mydomains は Postfix の設定名ではありません。",
  "answerKeys": ["ある会社が"],
  "answerTexts": ["mydestination"],
  "answerHints": ["mydestination"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-303",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － Postfix のグローバル設定ファイルのパスは何ですか。パスを含む完全なファイル名を入力してください。",
  "choices": [],
  "answer": ["/etc/postfix/main.cf"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Postfix の main.cf は、ホスト名やローカル配送先ドメインなど全体の動作に関わるパラメーターを項目名と値の組で記述する主要な設定ファイルです。標準的には /etc/postfix/ に配置されるため、完全なパスは /etc/postfix/main.cf です。同じ場所の master.cf はサービスの起動定義を扱うファイルで役割が異なります。先頭の / を含む絶対パスで記述する点も重要です。",
  "answerKeys": ["空欄を埋めてください － Postfix の"],
  "answerTexts": ["/etc/postfix/main.cf"],
  "answerHints": ["/etc/postfix/main.cf"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-304",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Sieve フィルターは通常、メールに対していつ適用されますか。",
  "choices": [{
    "label": "A",
    "text": "メールがメールボックスへ配送されるとき"
  }, {
    "label": "B",
    "text": "メールが SMTP サーバーによって中継されるとき"
  }, {
    "label": "C",
    "text": "メールが SMTP スマートホストによって受信されるとき"
  }, {
    "label": "D",
    "text": "メールが MUA によって最初のサーバーへ送信されるとき"
  }, {
    "label": "E",
    "text": "メールが MUA によって取得されるとき"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Sieve は受信メールを条件に応じてメールボックスへ振り分けたり転送したりするためのフィルター言語です。通常は受信者のメールボックスへ配送する段階でサーバー側がルールを評価するため、利用者がメールソフトを起動している必要はありません。Dovecot では LDA や LMTP の配送処理に Sieve を組み込む構成があります。中継や取得の段階とは処理主体も時点も異なります。",
  "answerKeys": ["Sieve フィルターは"],
  "answerTexts": ["メールがメールボックスへ配送されるとき"],
  "answerHints": ["メールがメールボックス"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.3"
}, {
  "id": "202-305",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "会社のメールサーバーがオープンリレーとして設定されていることが判明しました。会社宛てメールを受信できる状態を維持しながら、このメールサーバーがオープンリレーとして使用されるのを防ぐのに役立つ対応はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "このサーバーがホストするドメイン宛てのメールだけを受け入れるよう Postfix を制限する"
  }, {
    "label": "B",
    "text": "IMAP 接続をサポートするよう Dovecot を設定する"
  }, {
    "label": "C",
    "text": "公開ネットワークでポート25の通信を許可しないよう netfilter を設定する"
  }, {
    "label": "D",
    "text": "内部ネットワークからの送信 SMTP だけを中継するよう Postfix を制限する"
  }, {
    "label": "E",
    "text": "メールボックス形式を mbox から maildir へ更新する"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "オープンリレーは、信頼していない外部の利用者から任意の外部宛てメールの中継を引き受けてしまう状態です。自社ドメイン宛てだけを受け入れる方針にすれば、自社宛ての受信を維持しつつ無関係な外部宛ての中継を排除できます。また mynetworks などで中継の利用元を内部ネットワークに限定すれば、外部クライアントによる中継利用を防げます。ポート25を一律に遮断すると外部からの正常な受信も止まります。",
  "answerKeys": ["会社の"],
  "answerTexts": ["このサーバーがホストするドメイン宛てのメールだけを受け入れるよう Postfix を制限する", "内部ネットワークからの送信 SMTP だけを中継するよう Postfix を制限する"],
  "answerHints": ["この", "内部"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-306",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Dovecot のインストール後、ps ax では Dovecot プロセスが次のように表示されました。\n31248 ?        S      0:00 dovecot/imap\n31253 ?        S      0:00 dovecot/imap-login\nプロセスをユーザーおよび接続相手と対応付け、ユーザー名、接続相手の IP アドレス、接続状態を表示するには、どのオプションを設定する必要がありますか。",
  "choices": [{
    "label": "A",
    "text": "Dovecot のビルド時に ./configure へ --with-linux-extprocnames を指定する"
  }, {
    "label": "B",
    "text": "sys.ps.allow_descriptions = 1 を sysctl.conf または /proc で設定する"
  }, {
    "label": "C",
    "text": "proc.all.show_status = 1 を sysctl.conf または /proc で設定する"
  }, {
    "label": "D",
    "text": "Dovecot 設定で verbose_proctitle = yes を指定する"
  }, {
    "label": "E",
    "text": "Dovecot 設定で process_format = \"%u %l %s\" を指定する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ps ax の COMMAND 欄には実行中のプログラムが公開するプロセスタイトルが表示されます。Dovecot の verbose_proctitle = yes を指定すると、プロセスタイトルに利用者名や接続相手の IP アドレスなどの詳細情報が反映され、どのプロセスがどの接続を担当しているか確認できます。sysctl のカーネル設定やログの書式指定ではなく、アプリケーション側がタイトルへ情報を加える設定です。",
  "answerKeys": ["Dovecot のインストール"],
  "answerTexts": ["Dovecot 設定で verbose_proctitle = yes を指定する"],
  "answerHints": ["Dovecot 設定で verbose_proctitle"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.2"
}, {
  "id": "202-307",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "コマンドライン引数を一切指定せず、1回の実行ですべてのエイリアスデータベースファイルを再構築できる Postfix コマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "makealiases"
  }, {
    "label": "B",
    "text": "newaliases"
  }, {
    "label": "C",
    "text": "postalias"
  }, {
    "label": "D",
    "text": "postmapbuild"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Postfix のエイリアスは、ローカルの宛先名を別の利用者や配送先へ対応付ける仕組みです。newaliases は引数を指定しなければ alias_database に記載されたエイリアスデータベースを更新するため、対象が複数ある構成でも一度の起動で処理できます。postalias は対象ファイルを引数で指定して変換するコマンドで、makealiases や postmapbuild は標準のコマンド名ではありません。",
  "answerKeys": ["コマンドライン引数を"],
  "answerTexts": ["newaliases"],
  "answerHints": ["newaliases"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-308",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － メッセージを変更せずに別のメールアドレスへ転送する Sieve フィルターのアクションは何ですか。パラメーターを付けず、アクション名だけを入力してください。",
  "choices": [],
  "answer": ["redirect"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Sieve の redirect は、受信したメッセージを指定した別のメールアドレスへ送るアクションです。本文や既存のヘッダーを変更せずに配送先だけを変えるため、元のメールを引用した新しいメールを作る転送操作とは異なります。配送経路を記録する Received などのヘッダーが付加されることはあります。利用者の標準メールボックスへ残すなら keep と、メッセージの行き先で判断します。",
  "answerKeys": ["空欄を埋めてください － メッセージ"],
  "answerTexts": ["redirect"],
  "answerHints": ["redirect"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.3"
}, {
  "id": "202-309",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "Dovecot がサポートする認証メカニズムはどれですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "ldap"
  }, {
    "label": "B",
    "text": "digest-md5"
  }, {
    "label": "C",
    "text": "cram-md5"
  }, {
    "label": "D",
    "text": "plain"
  }, {
    "label": "E",
    "text": "krb5"
  }],
  "answer": ["B", "C", "D"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "認証メカニズムは、クライアントがどの手順で本人であることを証明するかを決める方式です。Dovecot 2.3 系では digest-md5、cram-md5、plain などの SASL 認証方式を auth_mechanisms に指定できます。ldap は認証情報の参照先を示す仕組みでメカニズム名ではなく、Kerberos による認証のメカニズム名は krb5 ではなく GSSAPI です。",
  "answerKeys": ["Dovecot が"],
  "answerTexts": ["digest-md5", "cram-md5", "plain"],
  "answerHints": ["digest", "cram", "plain"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.2"
}, {
  "id": "202-310",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "NFSv4 に属し、NFSv3 には存在しないサービスはどれですか。",
  "choices": [{
    "label": "A",
    "text": "rpc.idmapd"
  }, {
    "label": "B",
    "text": "rpc.statd"
  }, {
    "label": "C",
    "text": "nfsd"
  }, {
    "label": "D",
    "text": "rpc.mountd"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "NFSv4 では、ファイルの所有者やグループを表す名前と、Linux 内部の数値である UID・GID を対応付ける仕組みが使われます。rpc.idmapd はこの ID と名前の変換を担当するデーモンで、数値の所有者情報を扱う NFSv3 との違いになります。rpc.statd はネットワーク状態監視、nfsd は NFS 要求の処理本体、rpc.mountd は MOUNT プロトコルの要求処理で、いずれも NFSv3 でも使われます。",
  "answerKeys": ["NFSv4 に"],
  "answerTexts": ["rpc.idmapd"],
  "answerHints": ["rpc.idmapd"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-311",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "smbpasswd を使用して暗号化された Samba パスワードを変更したとき、UNIX パスワードを Samba パスワードと同期させる対応はどれですか。",
  "choices": [{
    "label": "A",
    "text": "これは不可能なので、実現する対応はない"
  }, {
    "label": "B",
    "text": "パスワードを変換するため netvamp を定期的に実行する"
  }, {
    "label": "C",
    "text": "smb.conf に passwd program = /usr/bin/passwd %u を追加する"
  }, {
    "label": "D",
    "text": "smb.conf に unix password sync = yes を追加する"
  }, {
    "label": "E",
    "text": "smb.conf に smb unix password = sync を追加する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Samba のパスワード情報と UNIX のログイン用パスワード情報は別々に管理されます。unix password sync = yes は、Samba が処理するパスワード変更に合わせて対応する UNIX パスワードも変更するためのスイッチです。実際の変更処理には passwd program で指定した仕組みを利用しますが、それは変更手段の指定であり、同期の有無を制御する項目とは役割が異なります。",
  "answerKeys": ["smbpasswd"],
  "answerTexts": ["smb.conf に unix password sync = yes を追加する"],
  "answerHints": ["smb.conf に unix"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-312",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ファイルサーバーを Active Directory ドメイン intra.example.com へ参加させるため、次の smb.conf を作成しました。\n[global]\n    workgroup = intra.example.com\n    netbios name = Fileserver\n    server role = member server\n    idmap config * : backend = tdb\n    idmap config * : range = 10000-199999\n    winbind enum users = yes\n    winbind enum group = yes\nnet ads join コマンドでエラーが発生し、サーバーをドメインへ参加させられません。正常に参加させるにはどうすべきですか。",
  "choices": [{
    "label": "A",
    "text": "NT4 ドメインではなく Active Directory ドメインへ参加するため、server role を ad member server へ変更する"
  }, {
    "label": "B",
    "text": "smb.conf に realm = intra.example.com を追加し、workgroup をそのドメインの NetBIOS ワークグループ名へ変更する"
  }, {
    "label": "C",
    "text": "Active Directory ドメインにマシンアカウントを手動作成し、net ads join 実行時に -U でそのマシンアカウント名を指定する"
  }, {
    "label": "D",
    "text": "winbind は Active Directory ドメインと互換性がないため、winbind enum users と winbind enum groups を削除する"
  }, {
    "label": "E",
    "text": "Active Directory ドメインでは ID マッピングが全体で定義されメンバーサーバーでは変更できないため、すべての idmap 設定行を削除する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Active Directory への参加では、Kerberos の認証領域を指定する realm と、NetBIOS 形式の短いドメイン名を指定する workgroup を使い分けます。DNS 形式の intra.example.com を workgroup に入れるだけでは、この二つの名前を正しく指定したことになりません。realm を追加し、workgroup にはそのドメインの NetBIOS 名を設定します。winbind や idmap は AD 参加に必要な設定で、削除は解決になりません。",
  "answerKeys": ["ファイルサーバーを"],
  "answerTexts": ["smb.conf に realm = intra.example.com を追加し、workgroup をそのドメインの NetBIOS ワークグループ名へ変更する"],
  "answerHints": ["smb"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-313",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください －\n/usr および /bin を NFSv4 でエクスポートするために /exports を作成し、その中に /usr および /bin への有効なバインドマウントを用意しました。NFS サーバーの /etc/exports には次の行を追加しています。\n/exports      192.0.1.0/24 (rw, sync, fsid=0, crossmnt, no_subtree_check)\n/exports/usr  192.0.2.0/24 (rw, sync, fsid=0, crossmnt, no_subtree_check)\n/exports/bin  192.0.2.0/24 (rw, sync, fsid=0, crossmnt, no_subtree_check)\nNFS クライアントで mount -t nfs4 server:/ /mnt を実行すると、/mnt には NFSv4 のルートフォルダーではなくサーバーの /usr ディレクトリの内容が表示されます。サーバーの最上位をマウントしたときに NFSv4 ルートフォルダーが表示されるようにするには、/etc/exports のどのオプションを変更するか、子エクスポートから削除する必要がありますか。値やパラメーターを付けず、オプション名だけを入力してください。",
  "choices": [],
  "answer": ["fsid"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "NFSv4 では公開するディレクトリをクライアントから一つの名前空間として参照し、その起点を fsid=0 で指定します。設問では /exports を起点にしたいのに、子の /exports/usr と /exports/bin にも同じ fsid=0 があるため起点が重複しています。子エクスポートでは fsid の指定を削除するか、ルートと重複しない値へ変更します。入力するのはオプション名の fsid です。",
  "answerKeys": ["空欄を埋めてください －\n/"],
  "answerTexts": ["fsid"],
  "answerHints": ["fsid"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-314",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "samba-tool testparm コマンドは、Samba 設定について何を確認しますか。",
  "choices": [{
    "label": "A",
    "text": "設定が正常に読み込まれること"
  }, {
    "label": "B",
    "text": "サービスが期待どおりに動作すること"
  }, {
    "label": "C",
    "text": "システム起動時に Samba サービスが自動起動すること"
  }, {
    "label": "D",
    "text": "Samba サーバーの netfilter 設定が、設定内で定義されたサービスへのアクセスを一切遮断しないこと"
  }, {
    "label": "E",
    "text": "実行中のすべての Samba プロセスが最新バージョンの設定を使用していること"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "testparm は smb.conf の構文を検査し、設定を読み込んで解釈できるかを確認するコマンドです。設定ファイルを対象とする検査なので、共有への実際の接続や稼働中プロセスの状態を試す操作とは異なります。検査が通っても共有先の権限やネットワークの状態まで正常と確認されたわけではなく、自動起動の設定やファイアウォールの状態、実行中プロセスへの設定反映も別の確認対象です。",
  "answerKeys": ["samba-"],
  "answerTexts": ["設定が正常に読み込まれること"],
  "answerHints": ["設定が"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-315",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "主な目的がゲスト向けプリンターサービスを設定することである場合、対象のプリンター共有セクションで使用すべき Samba オプションはどれですか。",
  "choices": [{
    "label": "A",
    "text": "security = cups"
  }, {
    "label": "B",
    "text": "security = ldap"
  }, {
    "label": "C",
    "text": "security = pam"
  }, {
    "label": "D",
    "text": "guest ok = yes"
  }, {
    "label": "E",
    "text": "security = printing"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Samba のプリンター共有でゲスト利用を許可する設定は、共有単位の guest ok です。guest ok = yes を対象のプリンター共有セクションに指定すると、個別のパスワードを要求されずサーバーで指定されたゲストアカウントの権限で処理されます。印刷基盤を選ぶ設定は printing、プリンター共有であることを表す設定は printable などであり、security にこれらの値を与えるものではありません。",
  "answerKeys": ["主な"],
  "answerTexts": ["guest ok = yes"],
  "answerHints": ["guest"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-316",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Samba 設定ファイルには次の行があります。\nhosts allow = 192.168.1.100 192.168.2.0/255.255.255.0 localhost\nhosts deny = 192.168.2.31\ninterfaces = 192.168.1.0/255.255.255.0 192.168.2.0/255.255.255.0\n有線ネットワーク上の IP アドレス 192.168.1.177 のワークステーションは Samba サーバーへアクセスできません。一方、IP アドレス 192.168.2.93 の無線ラップトップはアクセスできます。さらに調査すると、有線ネットワーク上のほぼすべてのマシンが Samba サーバーへアクセスできません。ほかの誰かのアクセスを拒否することなく、有線ワークステーションの接続を許可する代替の hosts allow 宣言はどれですか。",
  "choices": [{
    "label": "A",
    "text": "hosts allow = 192.168.1.1-255"
  }, {
    "label": "B",
    "text": "hosts allow = 192.168.1.100 192.168.2.200 localhost"
  }, {
    "label": "C",
    "text": "hosts deny = 192.168.1.100/255.255.255.0 192.168.2.31 localhost"
  }, {
    "label": "D",
    "text": "hosts deny = 192.168.2.200/255.255.255.0 192.168.2.31 localhost"
  }, {
    "label": "E",
    "text": "hosts allow = 192.168.1.0/255.255.255.0 192.168.2.0/255.255.255.0 localhost"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "元の hosts allow では有線側が 192.168.1.100 の一台だけなので、192.168.1.177 を含むほかの有線マシンが許可されていません。E は有線側を 192.168.1.0/255.255.255.0 へ広げつつ、無線側の 192.168.2.0/255.255.255.0 と localhost の許可も維持するため、現在アクセスできる利用者を除外しません。interfaces はサーバーが利用するインターフェースの設定であり、許可範囲が自動的に広がるわけではありません。",
  "answerKeys": ["Samba 設定ファイル"],
  "answerTexts": ["hosts allow = 192.168.1.0/255.255.255.0 192.168.2.0/255.255.255.0 localhost"],
  "answerHints": ["hosts allow = 192.168.1.0"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.1"
}, {
  "id": "202-317",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － NFS カーネル統計を表示するコマンドは何ですか。パスやパラメーターを付けず、コマンドだけを入力してください。",
  "choices": [],
  "answer": ["nfsstat"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "NFS カーネル統計は、Linux が NFS の要求処理や RPC 通信の状況を集計した情報です。nfsstat はクライアント側の /proc/net/rpc/nfs やサーバー側の /proc/net/rpc/nfsd などに対応する情報を読み取り、項目ごとに読みやすく表示します。設定を書き換える道具ではなく、動作状況を統計から把握するコマンドです。",
  "answerKeys": ["空欄を埋めてください － NFS"],
  "answerTexts": ["nfsstat"],
  "answerHints": ["nfsstat"],
  "chap": "主題209 ファイル共有",
  "subtopic": "209.2"
}, {
  "id": "202-318",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Squid 設定で、サービスへのアクセス制限に用いるネットワークや時間を定義するキーワードはどれですか。",
  "choices": [{
    "label": "A",
    "text": "acl"
  }, {
    "label": "B",
    "text": "allow"
  }, {
    "label": "C",
    "text": "http_allow"
  }, {
    "label": "D",
    "text": "permit"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Squid の acl は、接続元ネットワークや利用時間など、アクセス制御で照合する条件に名前を付けて定義するキーワードです。src は接続元 IP アドレスやネットワーク、time は曜日や時間帯の判定に使われます。定義した条件を使って実際に許可・拒否を決めるのは http_access などの規則で、allow はその規則内の動作を表す語です。",
  "answerKeys": ["Squid 設定で"],
  "answerTexts": ["acl"],
  "answerHints": ["acl"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-319",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "www.example.com と www2.example.com の両方で利用できる仮想ホストを作成するため、次の Apache HTTPD 設定を用意しました。\n<VirtualHost *:80>\n    ServerName www.example.com\n    ServerName www2.example.com\n    ServerAdmin webmaster@example.com\n    DocumentRoot /var/www/\n    <Directory /srv/www/>\n        Require all granted\n    </Directory>\n</VirtualHost>\nApache HTTPD は設定ファイルを正常に処理しましたが、両方の名前へのリクエストが正しく処理されません。正常に動作させるには何を変更すべきですか。",
  "choices": [{
    "label": "A",
    "text": "各仮想ホストには名前を1つしか設定できないため、設定を2つの VirtualHost セクションへ分割する"
  }, {
    "label": "B",
    "text": "開始 VirtualHost タグのポート番号を ServerName 宣言の値にも付加する"
  }, {
    "label": "C",
    "text": "両方の仮想ホスト名を1つの ServerName 宣言へカンマ区切りで記述する"
  }, {
    "label": "D",
    "text": "両方の仮想ホスト名を開始 VirtualHost タグに記述する"
  }, {
    "label": "E",
    "text": "ServerName 宣言は1つだけにし、追加の名前は ServerAlias オプションで宣言する"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Apache の名前ベース仮想ホストでは、ServerName で代表となるホスト名を指定し、同じサイトを指す追加の名前は ServerAlias で指定します。ServerName を繰り返しても別名の一覧を定義したことにはなりません。www.example.com を ServerName に残し、www2.example.com を ServerAlias として扱えば、同じ DocumentRoot や許可設定を共有したまま二つの名前で同じコンテンツを提供できます。",
  "answerKeys": ["www"],
  "answerTexts": ["ServerName 宣言は1つだけにし、追加の名前は ServerAlias オプションで宣言する"],
  "answerHints": ["ServerName"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-320",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "次の Squid 設定抜粋があるとします。\ncache_dir ufs /var/spool/squid3/ 1024 16 256\n/var/spool/squid3/ ディレクトリ直下に存在するディレクトリはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "0F"
  }, {
    "label": "B",
    "text": "A0"
  }, {
    "label": "C",
    "text": "0b"
  }, {
    "label": "D",
    "text": "FF"
  }, {
    "label": "E",
    "text": "00"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "cache_dir ufs では、パスの後の数値は順にキャッシュ容量、第一階層のディレクトリ数、第二階層のディレクトリ数を表します。1024 16 256 の場合、直下には16個のディレクトリが作られ、その各ディレクトリの下に256個が作られます。名前は0から始まる大文字の16進表記なので、直下の範囲は 00 から 0F です。A0 は範囲外、FF は第二階層の最後、0b は小文字なので該当しません。",
  "answerKeys": ["次の Squid"],
  "answerTexts": ["0F", "00"],
  "answerHints": ["0F", "00"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.3"
}, {
  "id": "202-321",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "Server Name Indication（SNI）について正しい記述はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "TLS セッションをある Web サーバーから別の Web サーバーへ透過的にフェイルオーバーできる"
  }, {
    "label": "B",
    "text": "複数の SSL/TLS 保護された仮想 HTTP ホストを同じ IP アドレス上に共存させられる"
  }, {
    "label": "C",
    "text": "仮想ホストの X.509 証明書を使用して、HTTP サーバーが仮想ホスト名の DNS を更新できる"
  }, {
    "label": "D",
    "text": "TLS ハンドシェイク中に利用可能な仮想ホスト一覧をクライアントへ提供する"
  }, {
    "label": "E",
    "text": "TLS ハンドシェイク中に要求 URL のホスト名を送信する"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SNI は TLS ハンドシェイク中にクライアントが接続したいホスト名をサーバーへ伝える拡張です。HTTPS では HTTP リクエストより前に TLS の交渉と証明書の提示が行われるため、Host ヘッダーだけでは証明書の選択に間に合いません。クライアントは ClientHello の server_name 拡張で要求 URL のホスト名を通知し、これにより同じ IP アドレス上で複数の TLS 仮想ホストを共存させられます。",
  "answerKeys": ["Server"],
  "answerTexts": ["複数の SSL/TLS 保護された仮想 HTTP ホストを同じ IP アドレス上に共存させられる", "TLS ハンドシェイク中に要求 URL のホスト名を送信する"],
  "answerHints": ["複数の", "TLS ハンドシェイク中に要求"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-322",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "サーバーの SSL 証明書生成に使用した RSA 秘密鍵を指定する Apache HTTPD 設定ディレクティブはどれですか。",
  "choices": [{
    "label": "A",
    "text": "SSLCertificateKeyFile"
  }, {
    "label": "B",
    "text": "SSLKeyFile"
  }, {
    "label": "C",
    "text": "SSLPrivateKeyFile"
  }, {
    "label": "D",
    "text": "SSLRSAKeyFile"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Apache の HTTPS 設定では、公開鍵を含むサーバー証明書と、それに対応する秘密鍵を区別して指定します。証明書のファイルを扱うのが SSLCertificateFile、秘密鍵のファイルを扱うのが SSLCertificateKeyFile です。RSA は鍵の方式を表す語であり、ディレクティブ名が変わる理由にはなりません。SSLKeyFile・SSLPrivateKeyFile・SSLRSAKeyFile は mod_ssl の設定名ではありません。",
  "answerKeys": ["サーバーの SSL"],
  "answerTexts": ["SSLCertificateKeyFile"],
  "answerHints": ["SSLCertificateKeyFile"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-323",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Apache HTTPD でホストされるサイトに制限領域があり、ユーザーはファイル /srv/www/security/sitepasswd に対して認証する必要があります。Basic 認証を使用しているとき、データを失わずに既存ユーザーのパスワードを変更するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "htpasswd -c /srv/www/security/sitepasswd user"
  }, {
    "label": "B",
    "text": "htpasswd /srv/www/security/sitepasswd user"
  }, {
    "label": "C",
    "text": "htpasswd -n /srv/www/security/sitepasswd user"
  }, {
    "label": "D",
    "text": "htpasswd -D /srv/www/security/sitepasswd user"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "htpasswd は Basic 認証で使うユーザー名とパスワードのハッシュを保存したファイルを管理します。ファイル名とユーザー名だけを指定すると、既存ファイル内のそのユーザーの情報だけが更新され、ほかのレコードは保持されます。-c はファイルの新規作成を指定するため既存データが失われ、-n は標準出力へ表示するだけ、-D は該当ユーザーのレコードを削除するオプションです。",
  "answerKeys": ["Apache HTTPD でホスト"],
  "answerTexts": ["htpasswd /srv/www/security/sitepasswd user"],
  "answerHints": ["htpasswd /srv"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-324",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "None や Basic などの認証方式を指定する Apache HTTPD 設定ディレクティブはどれですか。",
  "choices": [{
    "label": "A",
    "text": "AuthUser"
  }, {
    "label": "B",
    "text": "AllowedAuthUser"
  }, {
    "label": "C",
    "text": "AuthType"
  }, {
    "label": "D",
    "text": "AllowAuth"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "AuthType は Basic などのユーザー認証方式を指定するディレクティブで、AuthType None はその範囲で認証を無効にします。認証情報をどこから読むかは AuthUserFile、どのユーザーを許可するかは Require という別の設定で、三つの役割に分けて読みます。AuthUser・AllowedAuthUser・AllowAuth は Apache の設定名ではありません。",
  "answerKeys": ["None"],
  "answerTexts": ["AuthType"],
  "answerHints": ["AuthType"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-325",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "次のうち、Apache HTTPD のログ設定ディレクティブはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "TransferLog"
  }, {
    "label": "B",
    "text": "AccessLog"
  }, {
    "label": "C",
    "text": "ErrorLog"
  }, {
    "label": "D",
    "text": "ServerLog"
  }, {
    "label": "E",
    "text": "VHostLog"
  }],
  "answer": ["A", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Apache のログには、受け付けた HTTP リクエストを記録するアクセスログと、診断情報や処理上の問題を記録するエラーログがあります。TransferLog は前者、ErrorLog は後者の出力先を設定するディレクティブです。ログ形式と出力先を一緒に指定する場合は CustomLog も使われます。AccessLog・ServerLog・VHostLog は正式なディレクティブ名ではなく、仮想ホストごとのログは各 VirtualHost 内で ErrorLog や CustomLog を指定して分離します。",
  "answerKeys": ["次のうち"],
  "answerTexts": ["TransferLog", "ErrorLog"],
  "answerHints": ["TransferLog", "ErrorLog"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.1"
}, {
  "id": "202-326",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Nginx の server 設定セクションで、サーバーがコンテンツを取得するファイルシステム上のパスを定義するオプションはどれですか。",
  "choices": [{
    "label": "A",
    "text": "location"
  }, {
    "label": "B",
    "text": "htdocs"
  }, {
    "label": "C",
    "text": "DocumentRoot"
  }, {
    "label": "D",
    "text": "root"
  }, {
    "label": "E",
    "text": "base_dir"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Nginx の root は、要求されたコンテンツをファイルシステムから探す際の基準ディレクトリを指定します。root が /srv/www で要求 URI が /img/logo.png なら、通常は /srv/www/img/logo.png が参照先になります。location は要求 URI のパターンに応じて設定を切り替えるセクションで、保存場所そのものを指定する root とは役割が異なります。DocumentRoot は Apache の設定名です。",
  "answerKeys": ["Nginx の server"],
  "answerTexts": ["root"],
  "answerHints": ["root"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-327",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Nginx で、FastCGI アプリケーションへリクエストをプロキシするために使用するディレクティブはどれですか。",
  "choices": [{
    "label": "A",
    "text": "fastcgi_pass"
  }, {
    "label": "B",
    "text": "fastcgi_proxy"
  }, {
    "label": "C",
    "text": "proxy_fastcgi"
  }, {
    "label": "D",
    "text": "proxy_fastcgi_pass"
  }, {
    "label": "E",
    "text": "fastcgi_forward"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "FastCGI は Web サーバーとアプリケーションの間でリクエストや応答を受け渡すためのプロトコルです。Nginx では、HTTP サーバーへの転送に使う proxy_pass と、FastCGI アプリケーションへの転送に使う fastcgi_pass を区別します。fastcgi_pass には TCP のアドレスとポート、または UNIX ドメインソケットなどを指定します。受け渡す変数などは fastcgi_param で設定します。",
  "answerKeys": ["Nginx で"],
  "answerTexts": ["fastcgi_pass"],
  "answerHints": ["fastcgi_pass"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.4"
}, {
  "id": "202-328",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Web サーバー証明書を要求するために認証局へ提出しなければならない情報はどれですか。",
  "choices": [{
    "label": "A",
    "text": "Web サーバーの秘密鍵"
  }, {
    "label": "B",
    "text": "Web サーバーの IP アドレス"
  }, {
    "label": "C",
    "text": "Web サーバーがサポートする暗号スイートの一覧"
  }, {
    "label": "D",
    "text": "Web サーバーの SSL 設定ファイル"
  }, {
    "label": "E",
    "text": "証明書署名要求"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "証明書署名要求（CSR）は、証明書に含めたい公開鍵や識別情報をまとめ、対応する秘密鍵で署名した発行申請データです。認証局はこの情報を基に必要な確認を行って証明書を発行します。秘密鍵は申請者側で保護すべき情報で認証局へ渡しません。暗号スイートの一覧や SSL 設定ファイルは Web サーバー側の内部設定であり、署名要求データではありません。",
  "answerKeys": ["Web サーバー証明書を"],
  "answerTexts": ["証明書署名要求"],
  "answerHints": ["証明書署名要求"],
  "chap": "主題208 Webサービス",
  "subtopic": "208.2"
}, {
  "id": "202-329",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "nmap は何の目的で TCP/IP スタックフィンガープリンティングを使用しますか。",
  "choices": [{
    "label": "A",
    "text": "リモートのオペレーティングシステムを判定するため"
  }, {
    "label": "B",
    "text": "特定のサーバーからの応答を除外するため"
  }, {
    "label": "C",
    "text": "同じリモートサーバーからの重複応答を識別するため"
  }, {
    "label": "D",
    "text": "リモートサーバーの応答を偽装するため"
  }, {
    "label": "E",
    "text": "フォレンジック目的でネットワーク上のサーバーを一意に識別するため"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TCP/IP スタックは OS が通信処理を実装した部分で、OS やそのバージョンが異なると通信要求への応答、TCP ウィンドウやオプション、IP・ICMP の振る舞いなどに特徴が現れます。nmap は複数の観測結果をデータベースの特徴と比較して相手の OS や実装の系統を判定します。応答の遮断や中継機器の影響もあるため判定は常に確実とは限らず、機器を一意に識別する仕組みでもありません。",
  "answerKeys": ["nmap は"],
  "answerTexts": ["リモートのオペレーティングシステムを判定するため"],
  "answerHints": ["リモートの"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-330",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "SSH サーバーから、または SSH サーバー経由で X11 接続を転送できるようにするには、sshd 設定ファイルのどの設定キーワードを yes に設定する必要がありますか。",
  "choices": [{
    "label": "A",
    "text": "AllowForwarding"
  }, {
    "label": "B",
    "text": "ForwardingAllow"
  }, {
    "label": "C",
    "text": "X11ForwardingAllow"
  }, {
    "label": "D",
    "text": "X11Forwarding"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "X11 転送は、リモート側で動く GUI アプリケーションの表示通信を SSH 接続に通し、手元の X サーバーへ届ける仕組みです。sshd の X11Forwarding を yes にすると、サーバー側でこの転送を許可する設定になります。クライアント側でも ssh の -X などで転送を要求し、表示先として使える X サーバーを用意する必要があります。AllowTcpForwarding などとは転送対象が異なります。",
  "answerKeys": ["SSH サーバーから"],
  "answerTexts": ["X11Forwarding"],
  "answerHints": ["X11Forwarding"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-331",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "OpenVPN が標準で使用するポート番号はどれですか。",
  "choices": [{
    "label": "A",
    "text": "1723"
  }, {
    "label": "B",
    "text": "4500"
  }, {
    "label": "C",
    "text": "500"
  }, {
    "label": "D",
    "text": "1194"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "OpenVPN はネットワーク越しに仮想的な通信経路を作る VPN ソフトウェアで、既定のポート番号は 1194 です。一般的な構成では UDP を使いますが TCP も選べ、使用プロトコルとポート番号は別の設定要素です。1723 は PPTP の制御用 TCP ポート、500 は IKE の UDP ポート、4500 は IPsec の NAT 越えに使う UDP ポートであり、いずれも別方式の番号です。",
  "answerKeys": ["OpenVPN が標準で"],
  "answerTexts": ["1194"],
  "answerHints": ["1194"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-332",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － sshd 設定ファイルで、指定したユーザー名だけにシステムへのログインを許可するオプションは何ですか。値を付けずにオプション名だけを入力してください。",
  "choices": [],
  "answer": ["AllowUsers"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "sshd の AllowUsers は、SSH ログインを許可するユーザー名の範囲を名前または名前のパターンで指定する設定です。許可リストを設定すると、そのリストに一致するユーザーだけがログインの対象になります。複数のユーザー名は空白で区切って指定します。許可対象になっても鍵やパスワードによる認証は必要で、「名前の許可」と「ログイン成功」は同じではありません。",
  "answerKeys": ["空欄を埋めてください － sshd"],
  "answerTexts": ["AllowUsers"],
  "answerHints": ["AllowUsers"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-333",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "標準的な構成で、fail2ban は違反した SSH クライアントをどのようにブロックしますか。",
  "choices": [{
    "label": "A",
    "text": "sshd の前段でプロキシとして動作し、接続を拒否する。"
  }, {
    "label": "B",
    "text": "sshd の設定を変更・調整する。"
  }, {
    "label": "C",
    "text": "設定された ban action を実行し、通常はファイアウォールの netfilter ルールを追加・管理する。"
  }, {
    "label": "D",
    "text": "クライアントへ送信される応答パケットを破棄する null route を作成する。"
  }, {
    "label": "E",
    "text": "sshd 用の TCP Wrapper 設定を変更・調整する。"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "fail2ban は認証失敗などの記録を監視し、条件に達した接続元に対して遮断用のアクションを実行する仕組みです。検知する処理と実際に通信を遮断する ban action は別の役割で、標準的な利用では iptables や nftables などを通して netfilter によるフィルタリングを管理します。遮断期間が終わったときの解除もアクションで扱います。sshd の設定ファイルを書き換えるわけではありません。",
  "answerKeys": ["標準的な構成で"],
  "answerTexts": ["設定された ban action を実行し、通常はファイアウォールの netfilter ルールを追加・管理する。"],
  "answerHints": ["設定された"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-334",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "vsftpd の設定ファイルで anonymous_enable を yes にした場合、匿名ユーザーとして認識される FTP ユーザー名はどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "anonymous"
  }, {
    "label": "B",
    "text": "ftp"
  }, {
    "label": "C",
    "text": "既存ユーザーに属さず、ほかの特別な意味も持たないすべてのユーザー名"
  }, {
    "label": "D",
    "text": "nobody"
  }, {
    "label": "E",
    "text": "guest"
  }],
  "answer": ["A", "B"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "anonymous_enable は、個別の利用者アカウントによらない匿名 FTP ログインを許可する設定です。匿名ログインの名前として特別に認識されるのは anonymous と ftp の二つで、知らないユーザー名をすべて匿名扱いする機能ではありません。サーバー内部でファイル操作に使うアカウントは ftp_username で指定され、クライアントが入力する名前とは分けて考えます。",
  "answerKeys": ["vsftpd の"],
  "answerTexts": ["anonymous", "ftp"],
  "answerHints": ["anonymous", "ftp"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-335",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "リモートの TCP ネットワークサービスに接続し、対話するために使用できるコマンドはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "nettalk"
  }, {
    "label": "B",
    "text": "nc"
  }, {
    "label": "C",
    "text": "telnet"
  }, {
    "label": "D",
    "text": "cat"
  }, {
    "label": "E",
    "text": "netmap"
  }],
  "answer": ["B", "C"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TCP サービスとの対話では、相手のホストとポートへ接続し、要求データを送って応答を読み取ります。nc は netcat とも呼ばれ、TCP 接続と標準入力・標準出力を結び付けてデータを送受信できます。telnet も接続先ポートを指定して文字でやり取りする TCP サービスの確認に利用できます。cat は自身で接続する機能を持たず、nettalk や netmap はこの用途の標準コマンド名ではありません。",
  "answerKeys": ["リモートの"],
  "answerTexts": ["nc", "telnet"],
  "answerHints": ["nc", "telnet"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.4"
}, {
  "id": "202-336",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ルーターのネットワークインターフェースで IPv6 を有効にすると、そのインターフェースにグローバル IPv6 アドレスが割り当てられていない場合でも、Linux のルーティングテーブルにはどの宛先への経路が現れますか。",
  "choices": [{
    "label": "A",
    "text": "fe80::/10"
  }, {
    "label": "B",
    "text": "0::/128"
  }, {
    "label": "C",
    "text": "0::/0"
  }, {
    "label": "D",
    "text": "fe80::/64"
  }, {
    "label": "E",
    "text": "2000::/3"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "IPv6 のリンクローカルアドレスは同じリンクに接続された機器同士の通信に使うアドレスです。Linux では通常、IPv6 を有効にしたインターフェースにリンクローカルアドレスが設定され、対応する fe80::/64 の経路が現れます。fe80::/10 は予約されたアドレス範囲の表記で実際の接続経路の長さとは異なり、0::/0 はデフォルト経路、2000::/3 はグローバルユニキャストの範囲です。",
  "answerKeys": ["ルーターのネットワークインターフェース"],
  "answerTexts": ["fe80::/64"],
  "answerHints": ["fe80::/64"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-337",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "すべての匿名 FTP ユーザーがアップロード済みファイル名を一覧表示できないようにするには、アップロードディレクトリの作成時にどのセキュリティ対策を取れますか。",
  "choices": [{
    "label": "A",
    "text": "ディレクトリに実行権限を設定しない。"
  }, {
    "label": "B",
    "text": "ディレクトリに読み取り権限を設定しない。"
  }, {
    "label": "C",
    "text": "ディレクトリに読み取り権限も実行権限も設定しない。"
  }, {
    "label": "D",
    "text": "ディレクトリに書き込み権限を設定しない。"
  }, {
    "label": "E",
    "text": "ディレクトリ内にほかのディレクトリを作成しない。"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ディレクトリの読み取り権限 r は、その中にあるファイル名の一覧を読むための権限です。実行権限 x は名前を指定して中の項目へアクセスするため、書き込み権限 w は項目の作成や削除のために使います。匿名 FTP の処理に適用される r を与えなければ一覧を取得できなくなり、w と x を残せばアップロードは可能です。名前をすでに知っているファイルへのアクセスまで禁止する効果はありません。",
  "answerKeys": ["すべての匿名"],
  "answerTexts": ["ディレクトリに読み取り権限を設定しない。"],
  "answerHints": ["ディレクトリに読み取り権限を"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.2"
}, {
  "id": "202-338",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "IPv6 の netfilter ルールを管理するために使用するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "iptables"
  }, {
    "label": "B",
    "text": "iptablesv6"
  }, {
    "label": "C",
    "text": "iptables6"
  }, {
    "label": "D",
    "text": "ip6tables"
  }, {
    "label": "E",
    "text": "ipv6tables"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "netfilter は Linux カーネルでパケットの通過判定などを行う仕組みです。iptables 系の管理では、IPv4 用の iptables と IPv6 用の ip6tables を分けて使い、それぞれのアドレス体系に対応するルールを操作します。iptables で確認した IPv4 側の設定だけから IPv6 側の制限は判断できません。iptablesv6・iptables6・ipv6tables は正式なコマンド名ではありません。",
  "answerKeys": ["IPv6 の"],
  "answerTexts": ["ip6tables"],
  "answerHints": ["ip6tables"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-339",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "INPUT、OUTPUT、FORWARD という組み込みチェーンを含む netfilter テーブルはどれですか。",
  "choices": [{
    "label": "A",
    "text": "ipconn"
  }, {
    "label": "B",
    "text": "filter"
  }, {
    "label": "C",
    "text": "nat"
  }, {
    "label": "D",
    "text": "default"
  }, {
    "label": "E",
    "text": "masq"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "iptables 系のテーブルは処理の目的で分かれ、filter はパケットを通すか破棄するかなどのフィルタリングを扱います。その中の INPUT は自機宛て、OUTPUT は自機で生成したもの、FORWARD は他の機器へ中継するものを区別するチェーンです。nat はアドレス変換を扱い PREROUTING や POSTROUTING などを使うため FORWARD を含みません。-t を省略した場合は通常 filter が操作対象になります。",
  "answerKeys": ["INPUT、"],
  "answerTexts": ["filter"],
  "answerHints": ["filter"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.1"
}, {
  "id": "202-340",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "ssh-keygen -t rsa を実行し、鍵ファイルの保存先について既定値を受け入れた場合、変更または作成されるファイルはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "~/.ssh/id_rsa.key"
  }, {
    "label": "B",
    "text": "~/.ssh/id_rsa.pub"
  }, {
    "label": "C",
    "text": "~/.ssh/id_rsa.prv"
  }, {
    "label": "D",
    "text": "~/.ssh/id_rsa.crt"
  }, {
    "label": "E",
    "text": "~/.ssh/id_rsa"
  }],
  "answer": ["B", "E"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ssh-keygen -t rsa は RSA の秘密鍵と公開鍵を対で生成します。既定の保存先では秘密鍵が ~/.ssh/id_rsa、公開鍵が ~/.ssh/id_rsa.pub です。秘密鍵には追加の拡張子が付かず、.pub が公開鍵側に付く接尾辞です。通常は公開鍵の内容を接続先の authorized_keys へ登録しますが、鍵の生成と登録は別の操作です。",
  "answerKeys": ["ssh-keygen"],
  "answerTexts": ["~/.ssh/id_rsa.pub", "~/.ssh/id_rsa"],
  "answerHints": ["~/.ssh/id_rsa.pub", "~/.ssh/id_rsa"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-341",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "VPN クライアント間のネットワークパケットを、追加処理のために OpenVPN サーバーを実行する Linux ホストへ渡すのではなく、OpenVPN 自身に転送させる設定オプションはどれですか。",
  "choices": [{
    "label": "A",
    "text": "inter-client-traffic"
  }, {
    "label": "B",
    "text": "client-to-client"
  }, {
    "label": "C",
    "text": "client-router"
  }, {
    "label": "D",
    "text": "client-pass"
  }, {
    "label": "E",
    "text": "grant-client-traffic"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "OpenVPN のサーバーモードでは、クライアント間の通信を OpenVPN 内部で転送する方法と、TUN/TAP を通じて Linux 側へ渡す方法を区別します。client-to-client を指定すると、クライアント間の対象トラフィックを OpenVPN 内部でルーティングするため、ホスト側へいったん渡しません。ホスト側でクライアント別のフィルタリングを行いたい構成とは処理経路が異なります。",
  "answerKeys": ["VPN"],
  "answerTexts": ["client-to-client"],
  "answerHints": ["client-to"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.5"
}, {
  "id": "202-342",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "下記形式で DNS 情報を出力するツールはどれですか。\nwww.example.com has address 172.25.25.55\nwww.example.com has address 172.25.25.63\nwww.example.com has IPv6 address fdb4:8fbc:36e1::101f",
  "choices": [{
    "label": "A",
    "text": "dig"
  }, {
    "label": "B",
    "text": "nslookup"
  }, {
    "label": "C",
    "text": "host"
  }, {
    "label": "D",
    "text": "named-checkconf"
  }, {
    "label": "E",
    "text": "named-checkzone"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "host は名前解決の結果を、ホスト名とアドレスの関係が読みやすい短い文章形式で表示します。「has address」「has IPv6 address」という定型句が host の表示と一致します。dig は応答セクション内に名前、TTL、クラス、レコードタイプ、値を並べる形式で、nslookup も表示の組み立てが異なります。named-checkconf と named-checkzone は設定やゾーンの検査ツールです。",
  "answerKeys": ["下記形式で"],
  "answerTexts": ["host"],
  "answerHints": ["host"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-343",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ほかのゾーンを再読み込みせず、指定したゾーンファイルの内容を BIND に再読み込みさせるために、ゾーン名とともに使用できる rndc サブコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "lookup"
  }, {
    "label": "B",
    "text": "reload"
  }, {
    "label": "C",
    "text": "fileupdate"
  }, {
    "label": "D",
    "text": "reread"
  }, {
    "label": "E",
    "text": "zoneupdate"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "rndc は稼働中の BIND の名前サーバー named に管理操作を指示するコマンドです。ゾーンファイルを編集した後、その内容を指定ゾーンだけに反映するには rndc reload example.com のようにゾーン名を付けます。ゾーン名を省略した reload は設定とゾーン全体が対象です。lookup・fileupdate・reread・zoneupdate はこの用途のサブコマンド名ではありません。",
  "answerKeys": ["ほかの"],
  "answerTexts": ["reload"],
  "answerHints": ["reload"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-344",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ゾーンファイルに次の行が含まれています。\n$ORIGIN example.com\nhost2.example.org. IN A 198.51.100.102\nこのファイルは、次の設定スタンザによって BIND の設定に組み込まれています。\nzone \"example.com\" {\n    type master;\n    file \"db.example.com\";\n};\nこの設定に含まれる問題はどれですか。",
  "choices": [{
    "label": "A",
    "text": "BIND 設定の zone ステートメントには cross-zone-data yes; ステートメントが必要である。"
  }, {
    "label": "B",
    "text": "ゾーンの階層外にある名前のレコードをこのゾーンに含めることはできない。"
  }, {
    "label": "C",
    "text": "特定のゾーン名として BIND 設定に組み込むゾーンファイルでは $ORIGIN 宣言を使用できない。"
  }, {
    "label": "D",
    "text": "A レコードの値は逆引き DNS 名でなければならないため、IPv4 アドレスを含めることはできない。"
  }, {
    "label": "E",
    "text": "ゾーンファイル内のレコード名には完全修飾ドメイン名を使用できない。"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "BIND のゾーンは管理する DNS 名の範囲を定めます。末尾にドットのある host2.example.org. は既に完全な名前なので $ORIGIN では補完されず、この A レコードの所有者名は example.com ゾーンの外にあります。別のゾーンで管理する名前を $ORIGIN の指定だけで現在のゾーンへ取り込むことはできません。問題はアドレスの値ではなく、それを結び付けるレコードの所有者名です。",
  "answerKeys": ["ゾーンファイルに"],
  "answerTexts": ["ゾーンの階層外にある名前のレコードをこのゾーンに含めることはできない。"],
  "answerHints": ["ゾーンの"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-345",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "逆引き DNS クエリに使用される DNS レコードタイプはどれですか。",
  "choices": [{
    "label": "A",
    "text": "CNAME"
  }, {
    "label": "B",
    "text": "IN"
  }, {
    "label": "C",
    "text": "PTR"
  }, {
    "label": "D",
    "text": "REV"
  }, {
    "label": "E",
    "text": "RIN"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "逆引きは IP アドレスに対応する名前を調べる問い合わせで、in-addr.arpa や ip6.arpa のゾーンに置かれた PTR レコードが使われます。CNAME は名前の別名を定義するレコード、IN はレコードのクラス名であってタイプではありません。REV・RIN というレコードタイプは存在しません。正引きで名前からアドレスを得る A・AAAA とは方向が逆です。",
  "answerKeys": ["逆引き DNS"],
  "answerTexts": ["PTR"],
  "answerHints": ["PTR"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-346",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － 下記設定による、このドメインの管理者の完全なメールアドレスを入力してください。\n$ORIGIN example.com\n@    IN   SOA  mars.example.com pluto.example.com (\n                2016073142\n                10800\n                3600\n                604800\n                86400 )",
  "choices": [],
  "answer": ["pluto@example.com"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SOA レコードでは、直後に主たる名前サーバーを表す MNAME、その次に管理者のメールボックスを表す RNAME が並びます。提示例の mars.example.com が MNAME、pluto.example.com が RNAME です。RNAME は最初のドットを @ に読み替えてメールアドレスにするため、管理者のアドレスは pluto@example.com となります。左端の @ は $ORIGIN を表す省略記号で別の役割です。",
  "answerKeys": ["空欄を埋めてください － 下記設定による"],
  "answerTexts": ["pluto@example.com"],
  "answerHints": ["pluto@example.com"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-347",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "DANE の目的は何ですか。",
  "choices": [{
    "label": "A",
    "text": "DNS で取得した名前情報の完全性を検証する。"
  }, {
    "label": "B",
    "text": "安全な動的 DNS 更新を可能にする。"
  }, {
    "label": "C",
    "text": "DNS 更新を高速化するため、キャッシュ DNS サーバーに保存された名前情報を無効化する。"
  }, {
    "label": "D",
    "text": "DNS ドメイン内で特定のサービスを提供するサーバーを検出する。"
  }, {
    "label": "E",
    "text": "X.509 証明書と DNS ホスト名との関連付けを検証する方法を提供する。"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "DANE は、DNS に登録した情報を利用して、TLS で示された X.509 証明書や公開鍵が対象の DNS 名のサービスに対応するかを検証する仕組みです。関連情報は TLSA レコードに記録し、その真正性と完全性を DNSSEC で確認します。DNS データ一般の検証は DNSSEC、安全な動的更新は TSIG など、サービスの発見は SRV レコードと役割が異なります。",
  "answerKeys": ["DANE の"],
  "answerTexts": ["X.509 証明書と DNS ホスト名との関連付けを検証する方法を提供する。"],
  "answerHints": ["X"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-348",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "BIND サーバーを TSIG を使用するようにアップグレードします。アルゴリズム hmac-md5 とキー skrKc4DoTzi/takIlPi7JZA== を使用する場合、上記候補のうち追加する必要がある設定はどれですか。",
  "choices": [{
    "label": "A",
    "text": "TSIG server.example.com. {\n    algorithm hmac-md5;\n    secret \"skrKc4DoTzi/takIlPi7JZA==\";\n};"
  }, {
    "label": "B",
    "text": "key.server.example.com. {\n    algorithm hmac-md5;\n    secret skrKc4DoTzi/takIlPi7JZA==;\n};"
  }, {
    "label": "C",
    "text": "key.server.example.com. {\n    algorithm hmac-md5;\n    secret \"skrKc4DoTzi/takIlPi7JZA==\";\n};"
  }, {
    "label": "D",
    "text": "key.server.example.com. {\n    algorithm=hmac-md5;\n    secret=\"skrKc4DoTzi/takIlPi7JZA==\";\n};"
  }, {
    "label": "E",
    "text": "key.server.example.com.\n    algorithm hmac-md5\n    secret \"skrKc4DoTzi/takIlPi7JZA==\";"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "TSIG は双方が共有する秘密情報を使って DNS メッセージの送信元と完全性を確認する仕組みです。BIND では key 宣言に鍵名、algorithm、secret を記述し、各項目をセミコロンで終え、全体を波括弧で囲みます。C はこの構造が整っており、秘密値を二重引用符で明示的に区切っています。TSIG という宣言名はなく、= で結ぶ形式やブロック構造のない記述も正しくありません。",
  "answerKeys": ["BIND サーバー"],
  "answerTexts": ["key.server.example.com. {\n    algorithm hmac-md5;\n    secret \"skrKc4DoTzi/takIlPi7JZA==\";\n};"],
  "answerHints": ["key.server.example.com. {\n    algorithm hmac-md5;\n    secret \"skrKc4DoTzi"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-349",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "サーバーにドメイン名情報を問い合わせることを許可するホストを named.conf で指定するオプションはどれですか。",
  "choices": [{
    "label": "A",
    "text": "allowed-hosts"
  }, {
    "label": "B",
    "text": "accept-query"
  }, {
    "label": "C",
    "text": "permit-query"
  }, {
    "label": "D",
    "text": "allow-query"
  }, {
    "label": "E",
    "text": "query-group"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "BIND の allow-query は、通常の DNS 問い合わせを許可する送信元ホストを指定する設定です。アドレス照合リストに IP アドレス、ネットワーク範囲、名前付き ACL などを記述して問い合わせ元を制限します。options で共通の設定を定めるほか、zone に指定して対象ゾーンの問い合わせ制御を定めることもできます。allowed-hosts・accept-query・permit-query・query-group は BIND の設定名ではありません。",
  "answerKeys": ["サーバーにドメイン"],
  "answerTexts": ["allow-query"],
  "answerHints": ["allow-query"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.3"
}, {
  "id": "202-350",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － Dovecot への接続一覧を表示する doveadm サブコマンドは何ですか。パラメータを付けずにサブコマンド名だけを入力してください。",
  "choices": [],
  "answer": ["who"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "doveadm who は、Dovecot に接続している利用者についてユーザー名・接続数・サービス・接続元を表示するサブコマンドです。標準の表示では同じ利用者の接続情報をまとめるため、1人が複数の接続を持つ場合もあると考えて読みます。利用状況を数値として集計する stats とは調査目的が異なり、本問は今の接続者を確認する操作を問うています。",
  "answerKeys": ["空欄を埋めてください － Dovecot"],
  "answerTexts": ["who"],
  "answerHints": ["who"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.2"
}, {
  "id": "202-351",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "Sieve フィルターで使用できるアクションはどれですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "drop"
  }, {
    "label": "B",
    "text": "discard"
  }, {
    "label": "C",
    "text": "fileinto"
  }, {
    "label": "D",
    "text": "relay"
  }, {
    "label": "E",
    "text": "reject"
  }],
  "answer": ["B", "C", "E"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Sieve は受信メールの条件を調べ、結果に応じて保存先の変更や廃棄などを指示するメールフィルター言語です。discard はメールを破棄し送信者に通知しません。fileinto は指定したメールボックスへ格納するアクションで、拡張機能のため require による宣言が必要です。reject は理由を示して配送を拒否します。drop や relay は Sieve のアクション名ではありません。",
  "answerKeys": ["Sieve フィルターで使用できる"],
  "answerTexts": ["discard", "fileinto", "reject"],
  "answerHints": ["discard", "fileinto", "reject"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.3"
}, {
  "id": "202-352",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "Sieve フィルターで条件を論理的に組み合わせられるステートメントはどれですか。2つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "allof"
  }, {
    "label": "B",
    "text": "anyof"
  }, {
    "label": "C",
    "text": "noneof"
  }, {
    "label": "D",
    "text": "and"
  }, {
    "label": "E",
    "text": "or"
  }],
  "answer": ["A", "B"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Sieve の条件テストは一致したかどうかを真偽として評価します。複数のテストを組み合わせる際は、すべての成立を必要とする allof と、少なくとも1つの成立でよい anyof を使い分けます。論理積・論理和という意味であっても Sieve の構文名は and や or ではなく、noneof という条件結合テストも存在しません。",
  "answerKeys": ["Sieve フィルターで条件を"],
  "answerTexts": ["allof", "anyof"],
  "answerHints": ["allof", "anyof"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.3"
}, {
  "id": "202-353",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Postfix サーバーで、受信者アドレスは変更せず、送信者アドレスだけを変更する設定パラメータはどれですか。",
  "choices": [{
    "label": "A",
    "text": "alias_maps"
  }, {
    "label": "B",
    "text": "alias_rewrite_maps"
  }, {
    "label": "C",
    "text": "sender_canonical_maps"
  }, {
    "label": "D",
    "text": "sender_rewrite_maps"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Postfix ではメールアドレスを検索表に従って別のアドレスへ変換できます。sender_canonical_maps はこの変換を送信者側に限定する設定で、送信者と受信者の双方に適用し得る canonical_maps に対し sender_ の部分が対象を絞ることを示します。alias_maps はローカル配送で受信者の別名を展開する用途、alias_rewrite_maps や sender_rewrite_maps は Postfix の標準パラメータ名ではありません。",
  "answerKeys": ["Postfix サーバー"],
  "answerTexts": ["sender_canonical_maps"],
  "answerHints": ["sender_canonical_maps"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-354",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － Postfix が外部宛てのメールを別の SMTP サーバーへ渡すようにする Postfix 設定オプションは何ですか。値を付けずにオプション名だけを入力してください。",
  "choices": [],
  "answer": ["relayhost"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "外部宛てメールを別の SMTP サーバーへ渡す場合、そのサーバーは最終受信者ではなく配送を引き継ぐ次の中継先です。relayhost は非ローカル配送の次ホップを指定する設定で、main.cf に relayhost = [smtp.example.net] のように書くと、角括弧内のホストを MX 検索による選び直しなしで次の配送先にできます。受信者アドレスの書き換えや中継許可の設定とは別です。",
  "answerKeys": ["空欄を埋めてください － Postfix が"],
  "answerTexts": ["relayhost"],
  "answerHints": ["relayhost"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-355",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "ユーザーメールの保存場所を指定する Dovecot 設定変数の名前はどれですか。",
  "choices": [{
    "label": "A",
    "text": "mbox"
  }, {
    "label": "B",
    "text": "mail_location"
  }, {
    "label": "C",
    "text": "user_dir"
  }, {
    "label": "D",
    "text": "maildir"
  }, {
    "label": "E",
    "text": "user_mail_dir"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Dovecot のメール保存設定では、mbox や Maildir という保存形式と、メールを置く保存場所を分けて考えます。mail_path を使用する Dovecot 2.4 系の設定では、mail_path がメールボックスのルートディレクトリを指定し、形式は mail_driver などで指定します。mbox や maildir は形式名、user_dir や user_mail_dir は標準の設定名ではありません。",
  "answerKeys": ["ユーザーメール"],
  "answerTexts": ["mail_location"],
  "answerHints": ["mail_location"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.2"
}, {
  "id": "202-356",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "Postfix のサービス設定ファイル master.cf では、サービス定義を次の行へどのように継続しますか。",
  "choices": [{
    "label": "A",
    "text": "継続はできず、サービス定義は1行に収める必要がある。"
  }, {
    "label": "B",
    "text": "最初の行の末尾をバックスラッシュ文字（U+005C）にする。"
  }, {
    "label": "C",
    "text": "次の行の先頭をプラス文字（+）にする。"
  }, {
    "label": "D",
    "text": "次の行の先頭を空白文字でインデントする。"
  }, {
    "label": "E",
    "text": "必要なすべてのフィールドが指定されるまで、自動的に後続行へ継続する。"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "master.cf では1つのサービス定義を1つの論理行として読み取りますが、物理行を複数使って記述できます。次の行の先頭をスペースやタブでインデントすると、その行は直前の論理行の続きとして扱われ、新しいサービスの開始ではないことをパーサーへ伝えます。行末のバックスラッシュやプラス文字は master.cf の継続指定ではありません。",
  "answerKeys": ["Postfix のサービス"],
  "answerTexts": ["次の行の先頭を空白文字でインデントする。"],
  "answerHints": ["次の行の先頭を空白文字で"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-357",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "過剰なメールトラフィックの原因となっているリモートサイトを特定できるよう、Postfix キュー内容の概要を表示するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "mailtraf"
  }, {
    "label": "B",
    "text": "queuequery"
  }, {
    "label": "C",
    "text": "qshape"
  }, {
    "label": "D",
    "text": "postmap"
  }, {
    "label": "E",
    "text": "poststats"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Postfix のキューは配送処理中や再試行待ちのメールを保持する待ち行列です。qshape は主に宛先ドメインごとの件数と、キューに入ってからの経過時間の分布を表示するため、特定のリモートサイト宛てのメールが大量に滞留していないかを調べられます。-s を使えば送信者側のドメインで集計できます。postmap は検索表の作成・検索で用途が異なります。",
  "answerKeys": ["過剰な"],
  "answerTexts": ["qshape"],
  "answerHints": ["qshape"],
  "chap": "主題211 電子メールサービス",
  "subtopic": "211.1"
}, {
  "id": "202-358",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "下記コマンドが返すエントリ集合はどれですか。\nldapsearch -x \"(|(cn=marie) (!(telephoneNumber=9*)))\"",
  "choices": [{
    "label": "A",
    "text": "cn が marie ではないか、telephoneNumber が9で始まらないエントリ"
  }, {
    "label": "B",
    "text": "cn が marie であるか、telephoneNumber が9で始まらないエントリ"
  }, {
    "label": "C",
    "text": "cn が marie であり、telephoneNumber が9で終わるエントリ"
  }, {
    "label": "D",
    "text": "cn が marie ではなく、telephoneNumber も9で始まらないエントリ"
  }, {
    "label": "E",
    "text": "cn が marie であるか、telephoneNumber が9で始まるエントリ"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LDAP の検索フィルターでは | が論理和、! が直後の条件の否定を表し、括弧が演算の対象を区切ります。左側の (cn=marie) は cn 属性が marie に一致する条件、右側の (!(telephoneNumber=9*)) は9で始まる電話番号の条件の否定です。最も外側の | がこの2つを「または」で結合するため、どちらか一方が成立するエントリが対象になります。-x は簡易認証の指定で論理には影響しません。",
  "answerKeys": ["下記コマンド"],
  "answerTexts": ["cn が marie であるか、telephoneNumber が9で始まらないエントリ"],
  "answerHints": ["cn が marie であるか、telephoneNumber が9で始まらない"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-359",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "DHCPv6 がサポートする IPv6 アドレス割り当ての種類はどれですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "更新可能な通常の IPv6 アドレスの割り当て"
  }, {
    "label": "B",
    "text": "更新できない一時 IPv6 アドレスの割り当て"
  }, {
    "label": "C",
    "text": "今後使用すべきでないブラックリスト登録済み IPv6 アドレスの割り当て"
  }, {
    "label": "D",
    "text": "ルーティングまたは追加割り当てに使用できる IPv6 プレフィックスの割り当て"
  }, {
    "label": "E",
    "text": "DHCPv6 サーバーに割り当てが記録されない匿名 IPv6 アドレスの割り当て"
  }],
  "answer": ["A", "B", "D"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "従来の DHCPv6 では、通常のアドレスを扱う IA_NA、一時アドレスを扱う IA_TA、プレフィックス委譲を扱う IA_PD という区分が使われていました。IA_NA は有効期間の延長を求める更新処理で同じアドレスを使い続けられ、IA_TA は短期間の利用を目的とし、IA_PD はルーターなどへプレフィックスを委譲して下位ネットワークへ分けて使わせます。ブラックリストや匿名アドレスという割り当て種別はありません。",
  "answerKeys": ["DHCPv6 が"],
  "answerTexts": ["更新可能な通常の IPv6 アドレスの割り当て", "更新できない一時 IPv6 アドレスの割り当て", "ルーティングまたは追加割り当てに使用できる IPv6 プレフィックスの割り当て"],
  "answerHints": ["更新可能な", "更新できな", "ルーティング"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-360",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － LDAP のオブジェクトで、そのオブジェクトに設定できるほかの属性を定義する属性は何ですか。値を付けずに属性名だけを入力してください。",
  "choices": [],
  "answer": ["objectClass"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LDAP ではエントリの属性構成をスキーマの規則に従って管理します。objectClass 属性はそのエントリに適用するオブジェクトクラスを指定するもので、クラスの定義には必須属性（MUST）と設定を許可する属性（MAY）が含まれ、親クラスから引き継がれる定義も適用されます。本問は個々の属性値ではなく、属性構成を決める側の属性名を答えます。",
  "answerKeys": ["空欄を埋めてください － LDAP の"],
  "answerTexts": ["objectClass"],
  "answerHints": ["objectClass"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-361",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "OpenLDAP ディレクトリ内のユーザーパスワードを変更するために使用するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "setent"
  }, {
    "label": "B",
    "text": "ldpasswd"
  }, {
    "label": "C",
    "text": "olppasswd"
  }, {
    "label": "D",
    "text": "ldappasswd"
  }, {
    "label": "E",
    "text": "ldapchpw"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ldappasswd は LDAP のパスワード変更拡張操作を利用して、サーバーへユーザーパスワードの変更を要求するコマンドです。対象ユーザー自身による変更か、権限を持つ管理者による変更かに応じて認証し、サーバー側のアクセス制御やパスワード方針に従って処理されます。保存用のハッシュを生成するだけの処理とは異なり、ldpasswd・olppasswd・ldapchpw は実在するコマンド名ではありません。",
  "answerKeys": ["OpenLDAP ディレクトリ"],
  "answerTexts": ["ldappasswd"],
  "answerHints": ["ldappasswd"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-362",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "下記 LDIF ファイルの抜粋について正しい記述はどれですか。\ndn: cn=PrintOperators,ou=Groups,o=IT,DC=mycompany,DC=example,DC=com",
  "choices": [{
    "label": "A",
    "text": "dn は domain name を表す。"
  }, {
    "label": "B",
    "text": "o は operator name を表す。"
  }, {
    "label": "C",
    "text": "cn は common name を表す。"
  }, {
    "label": "D",
    "text": "dn は relative distinguished name を表す。"
  }, {
    "label": "E",
    "text": "DC は delegation container を表す。"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LDIF の dn 行は後続の属性が属する LDAP エントリの識別名を示し、cn や ou、o、DC などの属性と値を階層に沿って並べたものです。cn は common name の属性名で、示された cn=PrintOperators では PrintOperators がその値です。dn は distinguished name の略で名前全体、o は organizationName、DC は domainComponent を表し、cn=PrintOperators だけなら RDN に当たります。",
  "answerKeys": ["下記 LDIF"],
  "answerTexts": ["cn は common name を表す。"],
  "answerHints": ["cn"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-363",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "LDIF ファイル形式に関する記述のうち、誤っているものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "dn 行には、後続行に列挙された属性を追加するエントリの識別名が記載される。"
  }, {
    "label": "B",
    "text": "ファイル内では、空行によってエントリ同士を区切る。"
  }, {
    "label": "C",
    "text": "属性値にバイナリデータが含まれる場合、その値は LDIF の規則に従って Base64 形式または URL 形式で表す必要がある。"
  }, {
    "label": "D",
    "text": "LDIF ファイルは任意の文字エンコーディングを使用できる。"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "LDIF は LDAP のエントリや変更内容をテキストとして交換する形式で、識別名や文字列の表現には UTF-8 の規則を使います。そのまま安全に記載できない属性値には Base64 や外部データを参照する URL の表現を使い、属性名の後の二重コロンが Base64、コロンと小なり記号の組み合わせが URL 参照を示します。任意の符号化を選べるという記述が誤りです。",
  "answerKeys": ["LDIF"],
  "answerTexts": ["LDIF ファイルは任意の文字エンコーディングを使用できる。"],
  "answerHints": ["LDIF"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.3"
}, {
  "id": "202-364",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "DHCP クライアントへ送信する IPv4 DNS サーバーアドレスを ISC DHCPD 設定ファイル内で定義するオプションはどれですか。",
  "choices": [{
    "label": "A",
    "text": "domain-name-servers"
  }, {
    "label": "B",
    "text": "domain-server"
  }, {
    "label": "C",
    "text": "name-server"
  }, {
    "label": "D",
    "text": "servers"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "ISC DHCPD はクライアントの IPv4 アドレスだけでなく、名前解決に使う DNS サーバーなどの情報も DHCP オプションとして配布できます。domain-name-servers は、option domain-name-servers 192.0.2.53, 192.0.2.54; のように問い合わせ先の DNS サーバーアドレスを1つ以上列挙するオプションです。ドメインの文字列を配る domain-name や経路を配る routers とは情報の種類が異なります。",
  "answerKeys": ["DHCP クライアントへ"],
  "answerTexts": ["domain-name-servers"],
  "answerHints": ["domain-name"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.1"
}, {
  "id": "202-365",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "環境変数を設定および解除する PAM モジュールはどれですか。",
  "choices": [{
    "label": "A",
    "text": "pam_set"
  }, {
    "label": "B",
    "text": "pam_shell"
  }, {
    "label": "C",
    "text": "pam-vars"
  }, {
    "label": "D",
    "text": "pam_env"
  }, {
    "label": "E",
    "text": "pam_export"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "pam_env は、設定に基づいて PAM の環境変数を設定したり解除したりするモジュールです。代表的な設定ファイルは /etc/security/pam_env.conf で、変数の既定値や上書きに関する規則を記述できます。PAM を使うアプリケーションがこの処理を実行し、その環境を利用者のセッションへ引き継ぎます。pam_shells はシェルの妥当性検査、export はシェルの組み込み操作で役割が異なります。",
  "answerKeys": ["環境変数を"],
  "answerTexts": ["pam_env"],
  "answerHints": ["pam_env"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-366",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "/etc/pam.d/ 内の設定ファイルで有効な行はどれですか。",
  "choices": [{
    "label": "A",
    "text": "auth required pam_unix.so try_first_pass nullok"
  }, {
    "label": "B",
    "text": "auth try_first_pass nullok, require pam_unix.so"
  }, {
    "label": "C",
    "text": "auth required:pam_unix.so(try_first_pass nullok)"
  }, {
    "label": "D",
    "text": "auth pam_unix.so(required try_first_pass nullok)"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "/etc/pam.d/ の設定行は、処理の種類・制御方法・モジュール・モジュール引数の順に空白で区切ります。auth が認証処理、required が結果の扱い、pam_unix.so が呼び出すモジュール、try_first_pass と nullok がそのモジュールの引数です。引数を制御欄に置いたり、コロンや括弧で関数呼び出しのように書いたりする形式は有効ではありません。",
  "answerKeys": ["/etc/pam.d/ 内の設定"],
  "answerTexts": ["auth required pam_unix.so try_first_pass nullok"],
  "answerHints": ["auth required pam_unix"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-367",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "single",
  "question": "root 以外のすべてのユーザーのログインを無効にする正しい方法はどれですか。",
  "choices": [{
    "label": "A",
    "text": "pam_block モジュールを /etc/login 設定ファイルとともに使用する。"
  }, {
    "label": "B",
    "text": "pam_deny モジュールを /etc/deny 設定ファイルとともに使用する。"
  }, {
    "label": "C",
    "text": "pam_pwdb モジュールを /etc/pwdv.conf 設定ファイルとともに使用する。"
  }, {
    "label": "D",
    "text": "pam_nologin モジュールを /etc/nologin ファイルとともに使用する。"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "pam_nologin は、/etc/nologin などのファイルが存在するときに root 以外のユーザーのログインを拒否する PAM モジュールです。ファイルの存在が抑止の切り替えを示し、その評価を pam_nologin が担います。新しいログインを止める仕組みであり、既存セッションを強制終了する操作ではありません。",
  "answerKeys": ["root 以外のすべ"],
  "answerTexts": ["pam_nologin モジュールを /etc/nologin ファイルとともに使用する。"],
  "answerHints": ["pam_nologin"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.2"
}, {
  "id": "202-368",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "multi",
  "question": "olcBackendConfig クラスのオブジェクトでバックエンドを指定する OpenLDAP 属性 olcBackend に使用できる値はどれですか。3つ選択してください。",
  "choices": [{
    "label": "A",
    "text": "xml"
  }, {
    "label": "B",
    "text": "mdb"
  }, {
    "label": "C",
    "text": "passwd"
  }, {
    "label": "D",
    "text": "ldap"
  }, {
    "label": "E",
    "text": "text"
  }],
  "answer": ["B", "C", "D"],
  "selectCount": 3,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "OpenLDAP のバックエンドは、データをどこへ保存するか、または外部の情報をどのように参照するかを実装する部分です。mdb は LMDB を利用してディレクトリのデータを保持する方式、passwd はシステムの passwd 情報を読み取り専用で参照する方式、ldap は別の LDAP サーバーへ要求を中継するプロキシ型です。xml や text は標準バックエンドの識別子ではありません。",
  "answerKeys": ["olcBackendConfig"],
  "answerTexts": ["mdb", "passwd", "ldap"],
  "answerHints": ["mdb", "passwd", "ldap"],
  "chap": "主題210 ネットワーククライアントの管理",
  "subtopic": "210.4"
}, {
  "id": "202-369",
  "track": "202",
  "source": "LPIC Level2 (202-450) 試験対策問題集",
  "type": "fill",
  "question": "空欄を埋めてください － SSH 鍵ペアを作成するコマンドは何ですか。パスやパラメーターを付けないコマンド名を入力してください。",
  "choices": [],
  "answer": ["ssh-keygen"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "SSH の公開鍵認証では、本人だけが保持する秘密鍵と接続先へ登録する公開鍵を組にして使います。ssh-keygen は指定した種類の公開鍵と秘密鍵からなる鍵ペアを生成するコマンドで、鍵の種類・保存先・パスフレーズなどを扱います。既存の鍵をエージェントへ登録する ssh-add や、公開鍵を接続先へ配布する ssh-copy-id とは作業の段階が異なります。",
  "answerKeys": ["空欄を埋めてください － SSH 鍵"],
  "answerTexts": ["ssh-keygen"],
  "answerHints": ["ssh-keygen"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}, {
  "id": "202-370",
  "track": "202",
  "source": "A3_LPIC2_201-450",
  "type": "single",
  "question": "dig コマンドで逆引き DNS ルックアップを実行したところ、回答の PTR レコードにホスト名の末尾のドット（.）がありませんでした。これは何が原因と考えられますか。",
  "choices": [{
    "label": "A",
    "text": "何も問題はない"
  }, {
    "label": "B",
    "text": "正引きゾーンファイルの PTR レコードの記述ミス"
  }, {
    "label": "C",
    "text": "正引きゾーンファイルの NS レコードの記述ミス"
  }, {
    "label": "D",
    "text": "逆引きゾーンファイルの PTR レコードの記述ミス"
  }, {
    "label": "E",
    "text": "逆引きゾーンファイルの NS レコードの記述ミス"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "DNS のゾーンファイルにおいて、ホスト名の末尾にドット（.）を付けないと、そのドメインのオリジン（$ORIGIN）が自動的に補完されてしまいます。逆引き用の PTR レコードに記述するホスト名（例: server.example.com.）の末尾にドットを付け忘れると、不完全なホスト名が返される原因となります。",
  "answerKeys": ["dig コマンド"],
  "answerTexts": ["逆引きゾーンファイルの PTR レコードの記述ミス"],
  "answerHints": ["逆引きゾーンファイルの PTR"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.2"
}, {
  "id": "202-371",
  "track": "202",
  "source": "A4_202",
  "type": "single",
  "question": "次の named.conf ファイルの抜粋にはどの単語が欠けていますか。\n________friends {\n    10.10.0.0/24; 192.168.1.0/24;\n};\noptions {\n    allow-query { friends; };\n};",
  "choices": [{
    "label": "A",
    "text": "networks"
  }, {
    "label": "B",
    "text": "net"
  }, {
    "label": "C",
    "text": "list"
  }, {
    "label": "D",
    "text": "acl"
  }, {
    "label": "E",
    "text": "group"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "BIND の named.conf では、acl ステートメントによって複数の IP アドレスやネットワークの集合に名前を付けて定義します。定義した名前（この例では friends）は、allow-query や allow-transfer などのオプションから参照できます。",
  "answerKeys": ["次の named"],
  "answerTexts": ["acl"],
  "answerHints": ["acl"],
  "chap": "主題207 ドメインネームサーバー（DNS）",
  "subtopic": "207.1"
}, {
  "id": "202-372",
  "track": "202",
  "source": "A4_202_低品質",
  "type": "multi",
  "question": "sshd 構成ファイルに次の行がある場合、サーバーのセキュリティを強化するために変更する必要があるのはどれですか。（2つお選びください。）",
  "choices": [{
    "label": "A",
    "text": "Protocol 2, 1"
  }, {
    "label": "B",
    "text": "PermitEmptyPasswords no"
  }, {
    "label": "C",
    "text": "Port 22"
  }, {
    "label": "D",
    "text": "PermitRootLogin yes"
  }, {
    "label": "E",
    "text": "IgnoreRhosts yes"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "",
  "decisionKey": "",
  "mnemonic": "Protocol 行に古いバージョン1が含まれていると、脆弱な旧プロトコルでの接続を許してしまうため、Protocol 2 のみに限定する必要があります。また PermitRootLogin yes は root への直接ログインを許可し攻撃対象を広げるため無効化すべきです。PermitEmptyPasswords no と IgnoreRhosts yes はすでに安全側の値であり、Port 22 の変更は認証上の問題そのものを解消しません。",
  "answerKeys": ["sshd"],
  "answerTexts": ["Protocol 2, 1", "PermitRootLogin yes"],
  "answerHints": ["Protocol", "PermitRootLogin"],
  "chap": "主題212 システムセキュリティ",
  "subtopic": "212.3"
}];

// ════════════════════════════════════════════════════════════════
//  HACK × THE × LPIC（LPIC-2 版）
//  LPIC-1 101 版と同一の学習モデル・同一の見た目。違いは1点だけ:
//   ・201 / 202 を同じアプリ内で切り替えられる（科目ごとに進捗は完全独立）
//   ・選択肢本文を見せず「問題文→記号」を自力想起させ、反射化する
//   ・active recall: 記号を言い切ってから採点（眺め禁止）
//   ・頭を使わせない: 次に何を解くかはエンジンが選ぶ。判断は「記号は?」だけ
//   ・進捗の主役は「反射化した問題数(=実力)」。ストリークは脇役
//  ※ QUESTIONS は本ファイル3行目に同梱（xlsx 全786問を変換したもの）
// ════════════════════════════════════════════════════════════════

// ── 科目（試験コード）──
// QUESTIONS[].track が "201" / "202"。ホームのトグルで切り替える。
const TRACKS = ["201", "202"];
// 科目ごとの8ブロック構成。LPIC-1 版の「イベント50問 / 自習30問の交互（5:3）」を
// そのまま維持し、総問数（201=414 / 202=372）に合わせて比率でスケールしたもの。
// 最後のブロックは端数を吸収するため、配列の値ではなく残り全部になる。
const BLOCK_SIZES_BY_TRACK = {
  "201": [65, 39, 65, 39, 65, 39, 65, 37],
  // 計 414
  "202": [58, 35, 58, 35, 58, 35, 58, 35] // 計 372
};

// ── 答え合わせ（記述式の正規化） ──
function normalize(s) {
  return (s || "").trim().toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xfee0)).replace(/\s+/g, "").replace(/\/+$/, "");
}
function judge(q, input) {
  if (q.type === "fill") return normalize(input) === normalize(q.answer[0]);
  if (q.type === "multi") {
    const a = [...q.answer].sort().join("");
    const b = [...input].sort().join("");
    return a === b;
  }
  return input[0] === q.answer[0];
}

// ════════════════════════════════════════════════════════════════
//  問題文に埋め込まれた「図表」の切り出し
//  元の問題集では図（コマンド実行結果・設定ファイル・ゾーンファイル・表）だった部分が、
//  DB では問題文の中にテキストで入っている。散文と同じ字体で折り返すと桁がずれて読めない
//  ため、行単位でコード行を判定し、端末風ブロック（等幅・折り返しなし）として分離する。
// ════════════════════════════════════════════════════════════════
const JP_CHAR = /[ぁ-ゟ゠-ヿ一-鿿、。？！（）「」]/; // 日本語＝散文の目印
const COL_ALIGN = /\S {2,}\S/; // 2連続以上の空白で桁揃え＝表
// 日本語混在でも ASCII がこの比率以上なら「コマンド列」とみなす（例: "pvcreate, ［空欄1］, mkfs, mount"）。
// 全786問で実測した結果、該当するのはその1行のみ（0.74）で、次に比率の高い散文行は 0.64。
// 1行問題の最大は 0.67 だが、下の1行ガードによりそれらは影響を受けない。
const ASCII_RATIO_MIN = 0.7;
function asciiRatio(line) {
  const t = line.replace(/\s/g, "");
  if (!t) return 0;
  let n = 0;
  for (let i = 0; i < t.length; i++) if (t.charCodeAt(i) < 128) n++;
  return n / t.length;
}
// 1行がコード（出力・設定・コマンド・表）か散文かを判定する。
//   ・日本語を含まない行 → コード（例: " r  b   swpd   free"、"tcpdump -i eth0 ..."）
//   ・日本語を含んでも桁揃えされている行 → 表（例: "月末   使用量" / "1月    400GB"）
//   ・日本語混在でも ASCII が大半 → コマンド列
//   ・空行は単独では決まらないので null を返し、前後の行から決める
function isCodeLine(line) {
  if (!line.trim()) return null;
  if (!JP_CHAR.test(line)) return true;
  if (COL_ALIGN.test(line)) return true;
  return asciiRatio(line) >= ASCII_RATIO_MIN;
}
// 問題文を [{code:false,text}, {code:true,text}, ...] に分解する。
// コード行が1つも無ければ null（＝従来どおり素のテキストで描画する）。
function splitQuestion(text) {
  const lines = (text || "").split("\n");
  // 1行しかない問題は必ず散文として扱う。図表は必ず独立した行に入っているため、
  // 設問文まるごとが端末ブロックになる事故を構造的に防ぐ。
  if (lines.length < 2) return null;
  const kind = lines.map(isCodeLine); // true=コード / false=散文 / null=空行
  if (!kind.some(k => k === true)) return null;
  // 空行の帰属: 前後の非空行が共にコードなら「ブロック内の空行」として残す。
  // systemd ユニットのセクション区切りや dig 応答のセクション区切りは意味を持つため。
  // それ以外（散文とコードの境目・末尾）は区切りなので捨てる。
  const resolved = kind.map((k, i) => {
    if (k !== null) return k;
    let up = null,
      down = null;
    for (let j = i - 1; j >= 0; j--) if (kind[j] !== null) {
      up = kind[j];
      break;
    }
    for (let j = i + 1; j < kind.length; j++) if (kind[j] !== null) {
      down = kind[j];
      break;
    }
    return up === true && down === true ? true : "drop";
  });
  const segs = [];
  lines.forEach((line, i) => {
    const r = resolved[i];
    if (r === "drop") return;
    const last = segs[segs.length - 1];
    if (last && last.code === r) last.lines.push(line);else segs.push({
      code: r,
      lines: [line]
    });
  });
  return segs.map(s => ({
    code: s.code,
    text: s.lines.join("\n").replace(/\s+$/, "")
  })).filter(s => s.text !== "");
}

// 問題文の描画。散文はそのまま（必要なら識別キーに青下線）、図表部分は端末風ブロックで
// 等幅・桁揃えのまま出す。長い行（最長167字）は折り返さず、ブロック内で横スクロールさせる。
function QuestionBody({
  q,
  mono,
  codeSize = 13,
  highlight = false
}) {
  const segs = splitQuestion(q.question);
  const prose = (t, i) => /*#__PURE__*/React.createElement("div", {
    key: "p" + i,
    style: {
      whiteSpace: "pre-wrap"
    }
  }, highlight ? /*#__PURE__*/React.createElement(Highlight, {
    text: t,
    keys: q.answerKeys,
    color: "#5cc8f5",
    on: true,
    variant: "soft"
  }) : t);
  if (!segs) return prose(q.question, 0);
  const last = segs.length - 1;
  return /*#__PURE__*/React.createElement(React.Fragment, null, segs.map((s, i) => s.code ?
  /*#__PURE__*/
  /* クリックは飲む: 覚える画面で出力をスクロール/選択しても選択肢が折りたたまれないように */
  React.createElement("pre", {
    key: "c" + i,
    onClick: e => e.stopPropagation(),
    style: {
      margin: `${i === 0 ? 0 : 10}px 0 ${i === last ? 0 : 10}px`,
      padding: "10px 12px",
      background: "#0d1218",
      border: "1px solid #2b3747",
      borderLeft: "3px solid #5b9bff",
      borderRadius: 8,
      overflowX: "auto",
      fontFamily: mono,
      fontSize: codeSize,
      fontWeight: 400,
      lineHeight: 1.65,
      letterSpacing: 0,
      color: "#cdd9e8",
      whiteSpace: "pre",
      tabSize: 8,
      cursor: "auto"
    }
  }, s.text) : prose(s.text, i)));
}

// 問題文中の識別キー（複数）に下線を引く。keys が空/未指定なら素のテキスト。
function Highlight({
  text,
  keys,
  color,
  on,
  variant = "underline"
}) {
  if (!on || !keys || keys.length === 0) return /*#__PURE__*/React.createElement(React.Fragment, null, text);
  // 出現位置を集めて重複・重なりを除去
  const ranges = [];
  for (const k of keys) {
    if (!k) continue;
    let from = 0,
      idx;
    while ((idx = text.indexOf(k, from)) !== -1) {
      ranges.push([idx, idx + k.length]);
      from = idx + k.length;
    }
  }
  if (ranges.length === 0) return /*#__PURE__*/React.createElement(React.Fragment, null, text);
  ranges.sort((a, b) => a[0] - b[0]);
  // 重なりをマージ
  const merged = [ranges[0]];
  for (let i = 1; i < ranges.length; i++) {
    const last = merged[merged.length - 1];
    if (ranges[i][0] <= last[1]) last[1] = Math.max(last[1], ranges[i][1]);else merged.push(ranges[i]);
  }
  const parts = [];
  let pos = 0;
  merged.forEach(([s, e], i) => {
    if (s > pos) parts.push(/*#__PURE__*/React.createElement("span", {
      key: "n" + i
    }, text.slice(pos, s)));
    const hStyle = variant === "marker" ? {
      background: color,
      color: "#15140a",
      fontWeight: 800,
      borderRadius: 3,
      padding: "1px 3px",
      WebkitBoxDecorationBreak: "clone",
      boxDecorationBreak: "clone"
    } : variant === "soft" ? {
      color,
      fontWeight: 700
    } // 下線なし・太字・色のみ（リンク誤認を避ける）
    : {
      color,
      borderBottom: `2px solid ${color}`,
      fontWeight: 800
    };
    parts.push(/*#__PURE__*/React.createElement("span", {
      key: "h" + i,
      style: hStyle
    }, text.slice(s, e)));
    pos = e;
  });
  if (pos < text.length) parts.push(/*#__PURE__*/React.createElement("span", {
    key: "tail"
  }, text.slice(pos)));
  return /*#__PURE__*/React.createElement(React.Fragment, null, parts);
}

// ════════════════════════════════════════════════════════════════
//  学習モデル: ブロック単位で「覚える→テスト」を反復。
//   ・覚える: 1ページ10問のリスト。答えは隠し、ホバー/タップで表示（赤シート式）。
//   ・テスト: 同じブロックの問題をまるごと出題。速度や箱は無し。とにかく覚えるテスト。
//   ・バッジ: テスト正答率90%以上でそのブロックに🏅（localStorageで永続化）。
// ════════════════════════════════════════════════════════════════
const PAGE_SIZE = 10; // 覚える画面の1ページ表示数
const PASS_PCT = 90; // バッジ獲得ライン（正答率%）
// 総合テスト（模試）: 全範囲から EXAM_SIZE 問。EXAM_PASS 以上で合格＝修了バッジ(銀)、EXAM_GOLD 以上で金バッジ。
const EXAM_SIZE = 60; // 出題数
const EXAM_PASS = 42; // 合格ライン（7割）
const EXAM_GOLD = 50; // 金バッジライン（豪華演出）
const EXAM_SLOTS = 5; // 修了バッジのコレクション枠
const RANDOM_BLOCK_N = 20; // ランダム演習（復習用）: 選んだブロックからランダム出題する固定数

// 主題ラベル("主題NNN タイトル")から主題番号を取り出す（フラット配列の主題順ソートに使用）
const chapNo = c => {
  const m = /主題\s*([0-9]+)/.exec(c || "");
  return m ? +m[1] : null;
};

// 配列をシャッフルして新配列を返す（Fisher–Yates・非破壊）。ランダム出題で使用。
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── 科目(201/202)ごとに独立した進捗を1つの localStorage キーに束ねて保存する ──
// 戻り値は「いま選んでいる科目の値」と「その科目だけを更新する setter」。
// これにより、下流のコードは科目の存在を意識せず LPIC-1 版と同じ書き方のままで済む。
function usePerTrack(key, track, fallback) {
  const [all, setAll] = useState(() => {
    try {
      const v = JSON.parse(localStorage.getItem(key) || "{}");
      return v && typeof v === "object" && !Array.isArray(v) ? v : {};
    } catch {
      return {};
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(all));
    } catch (e) {}
  }, [all]);
  const value = all[track] !== undefined ? all[track] : fallback;
  const set = useCallback(next => {
    setAll(prev => {
      const cur = prev[track] !== undefined ? prev[track] : fallback;
      return {
        ...prev,
        [track]: typeof next === "function" ? next(cur) : next
      };
    });
  }, [track]);
  return [value, set];
}

// 解説（xlsx の解説列）。暗記のテンポを崩さないよう既定は閉じたまま、
// 押したときだけ 💡 の黄色枠で開く。開くまでは淡色の1行に収める。
function Explain({
  text,
  subtle = false
}) {
  const [open, setOpen] = useState(false);
  if (!text) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: subtle ? 6 : 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen(o => !o);
    },
    "aria-expanded": open,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      width: "100%",
      padding: subtle ? "5px 2px" : "7px 2px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      fontSize: subtle ? 11.5 : 12.5,
      fontWeight: 700,
      color: open ? "#ffd27a" : subtle ? "#5b6878" : "#8794a6",
      transition: "color .15s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 10,
      transition: "transform .18s",
      transform: open ? "rotate(180deg)" : "none"
    }
  }, "\u25BE"), "\uD83D\uDCA1 ", open ? "解説を閉じる" : "解説を見る"), open && /*#__PURE__*/React.createElement("div", {
    className: "card-in",
    style: {
      marginTop: 4,
      fontSize: 13,
      color: "#ffd27a",
      background: "#2a2410",
      border: "1px solid #4a3f14",
      borderRadius: 10,
      padding: "9px 12px",
      lineHeight: 1.75,
      whiteSpace: "pre-wrap"
    }
  }, text));
}

// 覚える画面の1問カード。
//  ・問題文をクリック → 全選択肢を展開（正解の「見分けポイント」に下線）。
//    「下線だけ見れば、他の選択肢の中から答えを選べる」を自分で確認するため。
//  ・答えはホバー/タップで表示（赤シート式）。
function StudyCard({
  q,
  mono,
  flagged,
  onToggleFlag
}) {
  const [showChoices, setShowChoices] = useState(true); // 暗記のテンポ優先：最初から正解の選択肢を開いておく（折りたたみも可）
  const ansSet = new Set(q.answer);
  const texts = q.answerTexts && q.answerTexts.length ? q.answerTexts : q.answer;
  const hintFor = label => {
    const k = q.answer.indexOf(label);
    return k >= 0 && q.answerHints && q.answerHints[k] ? [q.answerHints[k]] : [];
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#181f2a",
      border: `1px solid ${flagged ? "#f6c24766" : "#2a3543"}`,
      borderRadius: 12,
      padding: "14px 16px",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      opacity: 0.4,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "#", q.id, "\u30FB", q.source), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#5b9bff",
      opacity: 0.8
    }
  }, showChoices ? "▲ 閉じる" : q.type === "fill" ? "▼ クリックで答え" : "▼ クリックで選択肢")), /*#__PURE__*/React.createElement("div", {
    onClick: () => setShowChoices(s => !s),
    style: {
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.75,
      cursor: "pointer",
      letterSpacing: 0.2
    }
  }, /*#__PURE__*/React.createElement(QuestionBody, {
    q: q,
    mono: mono,
    codeSize: 12.5,
    highlight: true
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleFlag,
    "aria-pressed": !!flagged,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      width: "100%",
      marginTop: 10,
      padding: "9px 0",
      borderRadius: 10,
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 800,
      transition: "background .15s, border-color .15s, box-shadow .15s",
      background: flagged ? "linear-gradient(90deg,#e0a830,#f6c247)" : "#141b26",
      border: `1.5px solid ${flagged ? "#f6c247" : "#3a4658"}`,
      color: flagged ? "#241a05" : "#c2cad8",
      boxShadow: flagged ? "0 0 14px #f6c24755" : "none"
    }
  }, flagged ? "🔖 要復習に登録中（押して解除）" : "🔖 要復習に追加する"), showChoices && (q.type !== "fill" ? /*#__PURE__*/React.createElement("div", {
    className: "card-in",
    style: {
      marginTop: 10,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, q.choices.map(c => {
    const correct = ansSet.has(c.label);
    return /*#__PURE__*/React.createElement("div", {
      key: c.label,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "baseline",
        padding: "7px 11px",
        borderRadius: 9,
        background: correct ? "#13241f" : "transparent",
        border: `1px solid ${correct ? "#34d39e55" : "#232d3b"}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: correct ? "#34d39e" : "#555",
        minWidth: 14,
        textAlign: "center",
        fontWeight: 800
      }
    }, c.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontFamily: mono,
        lineHeight: 1.5,
        color: correct ? "#eceff4" : "#8b97a8"
      }
    }, correct ? /*#__PURE__*/React.createElement(Highlight, {
      text: c.text,
      keys: hintFor(c.label),
      color: "#f6c247",
      on: true,
      variant: "marker"
    }) : c.text));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "card-in",
    style: {
      marginTop: 10,
      padding: "9px 12px",
      borderRadius: 9,
      background: "#13241f",
      border: "1px solid #34d39e55"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "#34d39e",
      marginRight: 8
    }
  }, "\u7B54\u3048"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      fontFamily: mono,
      color: "#eceff4"
    }
  }, texts.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, i > 0 ? "　/　" : "", /*#__PURE__*/React.createElement(Highlight, {
    text: t,
    keys: q.answerHints && q.answerHints[i] ? [q.answerHints[i]] : [],
    color: "#f6c247",
    on: true,
    variant: "marker"
  })))))), /*#__PURE__*/React.createElement(Explain, {
    text: q.mnemonic,
    subtle: true
  }));
}
function App() {
  // ── 科目（201 / 202）。localStorage で永続化。 ──
  const [track, setTrack] = useState(() => {
    try {
      const v = localStorage.getItem("lpic2-track");
      return TRACKS.includes(v) ? v : TRACKS[0];
    } catch {
      return TRACKS[0];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("lpic2-track", track);
    } catch (e) {}
  }, [track]);
  const questions = useMemo(() => QUESTIONS.filter(q => q.track === track), [track]);
  const trackCounts = useMemo(() => {
    const m = {};
    for (const q of QUESTIONS) m[q.track] = (m[q.track] || 0) + 1;
    return m;
  }, []);

  // 8ブロック化: まず主題番号で安定ソートした「主題順フラット配列」を作り、
  // 先頭から BLOCK_SIZES で区切って8ブロックにする。主題内順は元データ順を維持。
  //   sections[i] = ブロックiの問題配列 / sectionLabels[i] = "ブロックN"
  //   blocks[i]   = { no, kind(イベント/自習), size, chapSpan, chunkCount }
  const {
    sections,
    sectionLabels,
    blocks
  } = useMemo(() => {
    const BLOCK_SIZES = BLOCK_SIZES_BY_TRACK[track] || BLOCK_SIZES_BY_TRACK[TRACKS[0]];
    // 主題番号順の安定グルーピング → フラット化
    const map = new Map();
    for (const q of questions) {
      const c = q.chap || "その他";
      if (!map.has(c)) map.set(c, []);
      map.get(c).push(q);
    }
    const chapLabels = [...map.keys()].sort((a, b) => (chapNo(a) ?? 999) - (chapNo(b) ?? 999) || a.localeCompare(b));
    const flat = chapLabels.flatMap(c => map.get(c)); // 主題順フラット

    // 固定サイズで8分割。合計がデータ数とズレても端数は最後のブロックに寄せる。
    const secs = [];
    let pos = 0;
    for (let i = 0; i < BLOCK_SIZES.length; i++) {
      const size = i === BLOCK_SIZES.length - 1 ? flat.length - pos : BLOCK_SIZES[i];
      secs.push(flat.slice(pos, pos + size));
      pos += size;
    }
    const labels = secs.map((_, i) => `ブロック${i + 1}`);
    const blks = secs.map((qs, i) => {
      const nos = qs.map(q => chapNo(q.chap)).filter(n => n != null);
      const lo = Math.min(...nos),
        hi = Math.max(...nos);
      const chapSpan = nos.length === 0 ? "" : lo === hi ? `主題${lo}` : `主題${lo}〜${hi}`;
      return {
        no: i + 1,
        kind: i % 2 === 0 ? "イベント" : "自習",
        // 奇数ブロック(①③⑤⑦)=イベント / 偶数=自習
        size: qs.length,
        chapSpan,
        chunkCount: Math.max(1, Math.ceil(qs.length / PAGE_SIZE))
      };
    });
    return {
      sections: secs,
      sectionLabels: labels,
      blocks: blks
    };
  }, [questions, track]);
  const [screen, setScreen] = useState("home"); // home | testpick | study | test | result
  const [secIdx, setSecIdx] = useState(0);
  const [pickedSec, setPickedSec] = useState(null); // ホームのグリッドで開いているブロック（null=未選択）
  const [pickChunks, setPickChunks] = useState(() => new Set()); // testpick で選択中のチャンクindex集合

  // バッジ/最高スコア（localStorageで永続化・科目ごとに独立）
  const [records, setRecords] = usePerTrack("lpic2-records-blk", track, {});

  // 総合テスト（模試）の修了バッジ。"silver"(42〜49) / "gold"(50〜) を最大 EXAM_SLOTS 枠まで貯める。
  const [examSlotsStored, setExamSlots] = usePerTrack("lpic2-exam", track, []);
  const examSlots = Array.isArray(examSlotsStored) ? examSlotsStored.slice(0, EXAM_SLOTS) : [];

  // 間違えた問題（id→true）。テストで誤答→追加、正解→除去。
  const [wrongIds, setWrongIds] = usePerTrack("lpic2-wrong", track, {});

  // 要復習フラグ（id→true）。正解・不正解に関係なくユーザーが手動でON/OFF。自動では外れない。
  const [flaggedIds, setFlaggedIds] = usePerTrack("lpic2-flagged", track, {});
  function toggleFlag(id) {
    setFlaggedIds(f => {
      const n = {
        ...f
      };
      if (n[id]) delete n[id];else n[id] = true;
      return n;
    });
  }

  // 暗記モード: 10問ずつ「覚える→テスト」を繰り返す
  const [studyChunk, setStudyChunk] = useState(0); // 現在の10問セット
  const [studySub, setStudySub] = useState("learn"); // learn | quizdone
  const [quizScore, setQuizScore] = useState(null); // 暗記内テストの点 {correct,total}
  // セットごとの学習状態。studyProgress[secIdx][chunk] = 一発正解できなかった問題ID配列。
  //   undefined=未挑戦 / []=全問一発正解(完了) / [id,...]=ミスが残っている
  const [studyProgress, setStudyProgress] = usePerTrack("lpic2-study-blk", track, {});

  // テスト/クイズ共通ランナー状態
  const [testQueue, setTestQueue] = useState([]); // 出題中の問題配列
  const [testMode, setTestMode] = useState("section"); // section(ブロック・バッジ) | study(10・暗記)
  const [testPos, setTestPos] = useState(0);
  const [testResults, setTestResults] = useState([]); // [{id, ok}]
  const [phase, setPhase] = useState("answer"); // answer | reveal
  const [multiSel, setMultiSel] = useState([]);
  const [fillVal, setFillVal] = useState("");
  const [cursor, setCursor] = useState(0); // PC操作：矢印でハイライト中の選択肢index
  const [lastOk, setLastOk] = useState(null);
  const [lastInput, setLastInput] = useState(null); // 直近のユーザー回答（選択肢の印用）
  const [lastScore, setLastScore] = useState(null); // セクション結果画面用
  const [retry, setRetry] = useState(false); // 暗記10問テストで同じ問題をやり直し中（採点には影響させない）
  const [fullBlock, setFullBlock] = useState(true); // 直近のsectionテストがブロック全問か（🏅バッジ判定用）

  // ランダム出題モード
  const [randomLabel, setRandomLabel] = useState(""); // 実行中のスコープ表示名（"総合" or "ブロックN"）
  const [lastRandom, setLastRandom] = useState(null); // 再実行用 {scopeIdx, count}

  const secQuestions = sections[secIdx] || [];
  const chunkCount = Math.max(1, Math.ceil(secQuestions.length / PAGE_SIZE));
  const chunkQs = secQuestions.slice(studyChunk * PAGE_SIZE, studyChunk * PAGE_SIZE + PAGE_SIZE);
  const badgeCount = Object.values(records).filter(r => r && r.badge).length;
  const wrongList = questions.filter(q => wrongIds[q.id]); // 間違えた問題
  const flaggedList = questions.filter(q => flaggedIds[q.id]); // 要復習フラグを付けた問題（手動で外すまで残る）

  // 科目を切り替えたら、ブロック選択や暗記セットの位置をリセットしてホームの初期状態へ戻す。
  function switchTrack(t) {
    if (t === track) return;
    setTrack(t);
    setSecIdx(0);
    setPickedSec(null);
    setPickChunks(new Set());
    setStudyChunk(0);
    setStudySub("learn");
    setQuizScore(null);
    setLastScore(null);
    setLastRandom(null);
    setRandomLabel("");
    setScreen("home");
  }

  // ── 覚える進捗（セット単位） ──
  const blockChunks = i => Math.max(1, Math.ceil((sections[i] || []).length / PAGE_SIZE)); // そのブロックのセット数
  const setDoneCount = i => {
    // 全問一発正解でクリアしたセット数
    const p = studyProgress[i] || {};
    let n = 0;
    for (let k = 0; k < blockChunks(i); k++) {
      const m = p[k];
      if (m && m.length === 0) n++;
    }
    return n;
  };
  const setDots = i => {
    // 各セットの状態ドット（● 完了 / ◐ ミス残り / ○ 未着手）
    const p = studyProgress[i] || {};
    return Array.from({
      length: blockChunks(i)
    }, (_, k) => {
      const m = p[k];
      const done = m && m.length === 0,
        partial = m && m.length > 0;
      const color = done ? "#34d39e" : partial ? "#f6c247" : "#5b6878";
      return /*#__PURE__*/React.createElement("span", {
        key: k,
        "aria-hidden": "true",
        style: {
          fontSize: 14,
          lineHeight: 1,
          color
        }
      }, done ? "●" : partial ? "◐" : "○");
    });
  };

  // ── 総合テストの修了バッジ表示 ──
  const examGoldCount = examSlots.filter(s => s === "gold").length;
  const examComplete = examSlots.length >= EXAM_SLOTS; // 5枠コンプ
  const examMastered = examComplete && examGoldCount >= EXAM_SLOTS; // 全枠金＝完全制覇
  // 5枠のコレクション帯（🥇金 / 🏅銀 / 空）。size でアイコンの大きさを変える。
  const examStrip = (size = 26) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 6
    }
  }, Array.from({
    length: EXAM_SLOTS
  }, (_, k) => {
    const t = examSlots[k];
    return /*#__PURE__*/React.createElement("span", {
      key: k,
      "aria-hidden": "true",
      style: {
        width: size + 8,
        height: size + 8,
        borderRadius: 9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size,
        background: t === "gold" ? "#2a220e" : t === "silver" ? "#182430" : "#141b26",
        border: `1px solid ${t === "gold" ? "#e0a83088" : t === "silver" ? "#34d39e55" : "#232d3b"}`
      }
    }, t === "gold" ? "🥇" : t === "silver" ? "🏅" : "");
  }));

  // ── スタイル（暗記特化: 落ち着いた濃紺、最小限のグロー） ──
  const wrap = {
    minHeight: "100vh",
    boxSizing: "border-box",
    background: "radial-gradient(110% 60% at 50% 0%, #182238, transparent 62%), linear-gradient(180deg,#11161f,#0d1117)",
    color: "#eceff4",
    fontFamily: "system-ui, -apple-system, 'Hiragino Sans', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 16px",
    overflowX: "hidden"
  };
  const mono = "ui-monospace, 'SF Mono', Menlo, monospace";

  // ── 操作 ──
  function openStudy(i) {
    setSecIdx(i);
    setStudyChunk(0);
    setStudySub("learn");
    setScreen("study");
  }
  function beginRun(queue, mode) {
    setTestQueue(queue);
    setTestMode(mode);
    setTestPos(0);
    setTestResults([]);
    setPhase("answer");
    setMultiSel([]);
    setFillVal("");
    setLastOk(null);
    setRetry(false);
    setScreen("test");
  }
  // チャンク選択テスト画面を開く（初期は全チャンク選択）
  function openTestPick(i) {
    setSecIdx(i);
    const n = Math.max(1, Math.ceil((sections[i] || []).length / PAGE_SIZE));
    setPickChunks(new Set(Array.from({
      length: n
    }, (_, k) => k)));
    setScreen("testpick");
  }
  function startTest(i) {
    setSecIdx(i);
    setFullBlock(true);
    beginRun(sections[i] || [], "section");
  } // ブロック全問・🏅
  // testpick で選んだチャンクの問題をフラット順に連結して出題。全チャンク選択のときだけ🏅対象。
  function startPickTest() {
    const all = sections[secIdx] || [];
    const n = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
    const idxs = [...pickChunks].sort((a, b) => a - b);
    const queue = idxs.flatMap(c => all.slice(c * PAGE_SIZE, c * PAGE_SIZE + PAGE_SIZE));
    if (queue.length === 0) return;
    setFullBlock(pickChunks.size === n);
    beginRun(queue, "section");
  }
  function startChunkQuiz() {
    beginRun(chunkQs, "study");
  } // この10問
  function startChunkMisses() {
    // この回で一発正解できなかった問題だけ
    const ids = new Set((studyProgress[secIdx] || {})[studyChunk] || []);
    beginRun(chunkQs.filter(q => ids.has(q.id)), "study");
  }
  function startReview() {
    beginRun(wrongList.slice(), "review");
  } // 間違えた問題に挑戦
  // 要復習フラグを付けた問題に挑戦（正解するまで繰り返す・フラグは正解しても外れない＝ユーザーが手動で外すまで残る）
  function startFlagged() {
    if (flaggedList.length) beginRun(shuffle(flaggedList), "flagged");
  }

  // ── ランダム出題 ──
  const poolOf = scope => scope >= 0 ? sections[scope] || [] : questions; // 0〜7=ブロック
  // ランダム演習（復習用）: ブロックを選ぶだけの画面。ブロックをタップ＝RANDOM_BLOCK_N 問で即開始。
  function openBlockRandom() {
    setScreen("randompick");
  }
  function startRandom(scopeIdx, count) {
    const pool = poolOf(scopeIdx);
    const queue = shuffle(pool).slice(0, Math.min(count, pool.length));
    if (queue.length === 0) return;
    setRandomLabel(scopeIdx >= 0 ? sectionLabels[scopeIdx] : "総合");
    setLastRandom({
      scopeIdx,
      count
    });
    setFullBlock(false); // 🏅対象外（純粋な演習）
    beginRun(queue, "random");
  }
  // 直近ランダム演習で間違えた問題だけを再出題（結果はまた random 扱いなので連鎖する）。
  function startRandomMisses(missed) {
    if (missed && missed.length) beginRun(shuffle(missed), "random");
  }

  // ── 総合テスト（模試）: 全範囲から EXAM_SIZE 問をランダム出題 ──
  function startExam() {
    const queue = shuffle(questions).slice(0, Math.min(EXAM_SIZE, questions.length));
    if (queue.length === 0) return;
    setFullBlock(false);
    beginRun(queue, "exam");
  }
  // 総合テストの間違えた問題を、正解するまで繰り返す覚えるモードで再出題（結果はまた exammiss 扱いなので連鎖する）。
  function startExamMisses(missed) {
    if (missed && missed.length) beginRun(shuffle(missed), "exammiss");
  }
  function submitAnswer(input) {
    const q = testQueue[testPos];
    if (!q || phase !== "answer") return;
    const ok = judge(q, input);
    setLastOk(ok);
    setLastInput(input);
    // やり直し中（暗記10問テスト）は採点・復習プールに反映しない＝最初の不正解のまま。
    if (!retry) {
      setTestResults(r => [...r, {
        id: q.id,
        ok
      }]);
      // 誤答は復習プールへ。正解したら除外（どのテストでも共通）。
      setWrongIds(w => {
        const n = {
          ...w
        };
        if (ok) delete n[q.id];else n[q.id] = true;
        return n;
      });
    }
    setPhase("reveal");
  }
  // 暗記10問テストで同じ問題を解き直す（採点は最初の結果のまま）。
  function retryQuestion() {
    setPhase("answer");
    setMultiSel([]);
    setFillVal("");
    setLastOk(null);
    setRetry(true);
  }
  // 「正解するまで繰り返す」覚えるモード挙動を使うモード（暗記10問／ランダム演習／総合テストの覚え直し／要復習）。
  const isCram = m => m === "study" || m === "random" || m === "exammiss" || m === "flagged";
  function nextTest() {
    const next = testPos + 1;
    if (next >= testQueue.length) {
      const correct = testResults.filter(r => r.ok).length; // 直近回答まで反映済み
      const total = testQueue.length;
      const pct = Math.round(correct / total * 100);
      if (testMode === "section") {
        const pass = pct >= PASS_PCT; // このテスト単体の合否（部分選択でも表示する）
        const badge = fullBlock && pass; // 🏅ブロック合格は「全チャンク選択で合格」のときだけ
        // 成績(best/badge)は全ブロックテストのときだけ永続化。部分選択は記録しない。
        if (fullBlock) {
          setRecords(rec => {
            const prev = rec[secIdx] || {
              best: 0,
              badge: false
            };
            return {
              ...rec,
              [secIdx]: {
                best: Math.max(prev.best, pct),
                badge: prev.badge || badge
              }
            };
          });
        }
        setLastScore({
          correct,
          total,
          pct,
          badge,
          pass,
          full: fullBlock
        });
        setScreen("result");
      } else if (testMode === "exam") {
        // 総合テスト（模試）: 合否＋修了バッジ
        const pass = correct >= EXAM_PASS;
        const gold = correct >= EXAM_GOLD;
        const tier = gold ? "gold" : "silver";
        if (pass) {
          // 空き枠があれば埋める。満杯かつ金なら銀を1つ金に格上げ（＝全枠金＝完全制覇へ）。
          setExamSlots(prev => {
            const slots = (Array.isArray(prev) ? prev : []).slice(0, EXAM_SLOTS);
            if (slots.length < EXAM_SLOTS) slots.push(tier);else if (gold) {
              const i = slots.indexOf("silver");
              if (i >= 0) slots[i] = "gold";
            }
            return slots;
          });
        }
        // 総合テストで間違えた問題を lastScore に持たせ、「間違えた問題を覚える」導線に使う。
        const examMissedIds = new Set(testResults.filter(r => !r.ok).map(r => r.id));
        const examMissed = testQueue.filter(q => examMissedIds.has(q.id));
        setLastScore({
          correct,
          total,
          pct,
          exam: true,
          pass,
          gold,
          tier: pass ? tier : null,
          missed: examMissed
        });
        setScreen("result");
      } else if (testMode === "exammiss") {
        // 総合テストの覚え直し: 正解するまで繰り返した後、まだ残るミスを返す
        const missedIds = new Set(testResults.filter(r => !r.ok).map(r => r.id));
        const missed = testQueue.filter(q => missedIds.has(q.id));
        setLastScore({
          correct,
          total,
          pct,
          badge: false,
          exammiss: true,
          missed
        });
        setScreen("result");
      } else if (testMode === "flagged") {
        // 要復習フラグの挑戦: バッジ無し、フラグは正解しても外れない（結果画面は現在のフラグ数を見る）
        setLastScore({
          correct,
          total,
          pct,
          badge: false,
          flagged: true
        });
        setScreen("result");
      } else if (testMode === "review") {
        // 間違えた問題の復習: バッジ無し、結果画面へ
        setLastScore({
          correct,
          total,
          pct,
          badge: false,
          review: true
        });
        setScreen("result");
      } else if (testMode === "random") {
        // ランダム演習: バッジ無し、結果画面へ
        // この回で間違えた問題を lastScore に持たせ、「この演習のミスに挑戦」導線に使う。
        const missedIds = new Set(testResults.filter(r => !r.ok).map(r => r.id));
        const missed = testQueue.filter(q => missedIds.has(q.id));
        setLastScore({
          correct,
          total,
          pct,
          badge: false,
          random: true,
          label: randomLabel,
          missed
        });
        setScreen("result");
      } else {
        // 暗記内テスト: 採点して暗記画面へ戻る
        setQuizScore({
          correct,
          total
        });
        // このセットで一発正解できなかった問題IDを永続化（retry分は testResults に載らないので「最初の回答」で判定）。
        // 出題キュー内の誤答のみを残す。ミス挑戦時はキュー＝前回のミスなので、正解できたものが自動的に外れて完了(=[])に近づく。
        const missedIds = new Set(testResults.filter(r => !r.ok).map(r => r.id));
        const stillMissedIds = testQueue.filter(q => missedIds.has(q.id)).map(q => q.id);
        setStudyProgress(prev => {
          const sec = {
            ...(prev[secIdx] || {})
          };
          sec[studyChunk] = stillMissedIds;
          return {
            ...prev,
            [secIdx]: sec
          };
        });
        setStudySub("quizdone");
        setScreen("study");
      }
      return;
    }
    setTestPos(next);
    setPhase("answer");
    setMultiSel([]);
    setFillVal("");
    setLastOk(null);
    setRetry(false);
  }

  // 問題が変わったらハイライト位置を先頭に戻す
  useEffect(() => {
    setCursor(0);
  }, [testPos, screen]);

  // キーボード（テスト）: 矢印↑↓で選択肢を移動→Enterで決定。single=A〜E/1〜5即決も併用、multi=Spaceで選択。reveal=Enterで次へ
  useEffect(() => {
    if (screen !== "test") return;
    const q = testQueue[testPos];
    const h = e => {
      if (e.repeat) return; // キーリピート（押しっぱなし）での連続発火を無視＝記述入力のEnterでreveal画面を飛ばさない
      if (phase === "reveal") {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          // 覚えるモード系（暗記10問／ランダム演習／総合の覚え直し）で不正解なら Enter はやり直し（次へは出さない）。それ以外は次へ。
          if (isCram(testMode) && !lastOk) retryQuestion();else nextTest();
        }
        return;
      }
      if (!q) return;
      // 矢印で選択肢ハイライトを移動（single / multi 共通）。↑←=上/↓→=下。
      // multi は選択肢の次に「決定」ボタンも移動先に含める（最後の位置＝決定ボタン）。
      if ((q.type === "single" || q.type === "multi") && q.choices.length) {
        const maxIdx = q.type === "multi" ? q.choices.length : q.choices.length - 1;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          setCursor(c => Math.min(c + 1, maxIdx));
          return;
        }
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          setCursor(c => Math.max(c - 1, 0));
          return;
        }
      }
      if (q.type === "single") {
        if (e.key === "Enter") {
          e.preventDefault();
          const c = q.choices[cursor];
          if (c) submitAnswer([c.label]);
          return;
        }
        // A〜E / 1〜5 の即決も従来どおり使える
        const map = {
          a: "A",
          b: "B",
          c: "C",
          d: "D",
          e: "E",
          "1": "A",
          "2": "B",
          "3": "C",
          "4": "D",
          "5": "E"
        };
        const lab = map[e.key.toLowerCase()];
        if (lab && q.choices.some(c => c.label === lab)) submitAnswer([lab]);
      } else if (q.type === "multi") {
        // カーソルが選択肢の位置ならEnterでON/OFF、決定ボタンの位置（=choices.length）ならEnterで決定（マウスクリックと同じ効果）。
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (cursor >= q.choices.length) {
            if (multiSel.length) submitAnswer(multiSel);
            return;
          }
          const c = q.choices[cursor];
          if (!c) return;
          setMultiSel(s => s.includes(c.label) ? s.filter(x => x !== c.label) : [...s, c.label]);
          return;
        }
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  });

  // メニュー系画面（test以外＝ホーム/結果/ランダム選択/テスト選択/暗記など）: ↑↓で画面内のボタンを巡回フォーカス、Enterは標準でそのボタンを実行。
  useEffect(() => {
    if (screen === "test") return; // テスト画面は独自のキーボード操作を持つ
    const getBtns = () => Array.from(document.querySelectorAll("button")).filter(b => !b.disabled && b.offsetParent !== null);
    // 初期フォーカス: 意味のあるラベル（3文字以上）を持つ最初のボタン＝主要アクションに寄せる（← 等のアイコンボタンは初期選択から外す。矢印では行ける）
    const btns = getBtns();
    if (btns.length && !btns.includes(document.activeElement)) {
      (btns.find(b => (b.textContent || "").trim().length >= 3) || btns[0]).focus();
    }
    const h = e => {
      const tag = document.activeElement && document.activeElement.tagName || "";
      if (tag === "INPUT" || tag === "TEXTAREA") return; // 入力欄では矢印を奪わない
      if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(e.key)) return;
      const list = getBtns();
      if (!list.length) return;
      e.preventDefault();
      const idx = list.indexOf(document.activeElement);
      const down = e.key === "ArrowDown" || e.key === "ArrowRight";
      const n = idx < 0 ? 0 : down ? Math.min(idx + 1, list.length - 1) : Math.max(idx - 1, 0);
      list[n].focus();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [screen]);
  const styleTag = /*#__PURE__*/React.createElement("style", null, `
      .hideans{ filter: blur(6px); cursor: pointer; transition: filter .12s; border-radius: 5px; }
      .hideans:hover, .hideans.shown{ filter: none; }
      .row:hover{ border-color:#3a4658 !important; }
      .secrow:hover{ background:#1a2230 !important; }
      .secrow:active{ background:#1c2534 !important; }
      .panel-in{ animation: panelin .2s ease; }
      @keyframes panelin{ from{ opacity:0; transform:translateY(-6px) } to{ opacity:1; transform:none } }
      .iconbtn:hover{ border-color:#3a4658 !important; color:#eceff4 !important; background:#222b38 !important; }
      .secbtn:hover{ filter: brightness(1.18); }
      .secbtn:active{ transform: scale(.97); }
      .choice:hover{ border-color:#5b9bff !important; }
      .choice:active{ transform: scale(.99); }
      .card-in{ animation: fadein .25s ease; }
      /* opacity は 0 にしない（不正解→次へ で shake と animation を奪い合い fadein が再発火し、カードが一瞬消える＝白フラッシュになるため）。スライドのみ。 */
      @keyframes fadein{ from{transform:translateY(4px)} to{transform:none} }
      @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}75%{transform:translateX(6px)}}
      .shake{ animation: shake .3s; }
      button:focus-visible,input:focus-visible{ outline:2px solid #8ef0cf; outline-offset:2px; }
      @media (prefers-reduced-motion: reduce){ *{animation:none !important} }
    `);

  // ════════════════ HOME（ブロック一覧） ════════════════
  if (screen === "home") {
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 480,
        width: "100%",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 20,
        fontWeight: 900,
        letterSpacing: 2,
        margin: 0,
        whiteSpace: "nowrap",
        background: "linear-gradient(90deg,#5b9bff,#34d39e)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }
    }, "HACK \xD7 THE \xD7 LPIC"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 2,
        color: "#5b7088"
      }
    }, "LPIC ", track, "\u5BFE\u7B56\u554F\u984C")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        padding: "5px 12px",
        borderRadius: 999,
        background: "#161d28",
        border: "1px solid #252f3d",
        flex: "0 0 auto"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: 2,
        color: "#5b7088"
      }
    }, "BADGE"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: badgeCount > 0 ? "#34d39e" : "#c2cad8"
      }
    }, badgeCount, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#5b6878",
        fontWeight: 700
      }
    }, " / ", sections.length)))), /*#__PURE__*/React.createElement("div", {
      role: "group",
      "aria-label": "\u8A66\u9A13\u79D1\u76EE\u306E\u5207\u66FF",
      style: {
        display: "flex",
        gap: 4,
        padding: 4,
        marginBottom: 14,
        background: "#141b26",
        border: "1px solid #232d3b",
        borderRadius: 999
      }
    }, TRACKS.map(t => {
      const cur = t === track;
      return /*#__PURE__*/React.createElement("button", {
        key: t,
        onClick: () => switchTrack(t),
        "aria-pressed": cur,
        style: {
          flex: 1,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          padding: "9px 0",
          borderRadius: 999,
          cursor: "pointer",
          border: "none",
          fontSize: 14.5,
          fontWeight: 900,
          letterSpacing: 1,
          color: cur ? "#0e1420" : "#8b97a8",
          background: cur ? "linear-gradient(90deg,#5b9bff,#7fb6ff)" : "transparent",
          boxShadow: cur ? "0 2px 10px #5b9bff55" : "none",
          transition: "background .15s, color .15s"
        }
      }, t, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10.5,
          fontWeight: 700,
          opacity: cur ? 0.7 : 0.8
        }
      }, trackCounts[t] || 0, "\u554F"));
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 20px",
        fontSize: 12.5,
        lineHeight: 1.7,
        color: "#8794a6"
      }
    }, "\u554F\u984C\u3092\u8AAD\u3093\u3067\u3001\u53CD\u5C04\u7684\u306B\u6B63\u89E3\u306E\u9078\u629E\u80A2\u3092\u9078\u3079\u308B\u3088\u3046\u306B\u3059\u308B\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3067\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u5404\u30D6\u30ED\u30C3\u30AF\u306E\u30C6\u30B9\u30C8\u30679\u5272\u3092\u53D6\u308B\u3068\u30D0\u30C3\u30B8\u3092\u7372\u5F97\u3002", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#c2cad8",
        fontWeight: 700
      }
    }, "\u51688\u500B\u306E\u30D0\u30C3\u30B8\u3092\u96C6\u3081\u305F\u3089\u3001\u6E96\u5099\u5B8C\u4E86\uFF01")), flaggedList.length > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: startFlagged,
      className: "secbtn",
      style: {
        width: "100%",
        marginBottom: 14,
        padding: "11px 0",
        borderRadius: 10,
        fontSize: 13.5,
        fontWeight: 800,
        cursor: "pointer",
        background: "#241f10",
        border: "1px solid #6a5a2a",
        color: "#f6c247"
      }
    }, "\uD83D\uDD16 \u8981\u5FA9\u7FD2\u306B\u6311\u6226\uFF08", flaggedList.length, "\u554F\uFF09"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, sections.map((sec, i) => {
      const rec = records[i] || {
        best: 0,
        badge: false
      };
      const picked = pickedSec === i;
      const blk = blocks[i] || {
        no: i + 1,
        kind: "",
        chapSpan: ""
      };
      const isEvent = blk.kind === "イベント";
      const tagColor = isEvent ? "#9ec3ff" : "#5ee0b4"; // イベント=青 / 自習=緑
      const tagBg = isEvent ? "#16233a" : "#132720";
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: "#161d28",
          border: `1px solid ${picked ? "#3f6aa8" : rec.badge ? "#34d39e33" : "#232d3b"}`,
          borderRadius: 13,
          overflow: "hidden",
          transition: "border-color .15s"
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => setPickedSec(picked ? null : i),
        className: "secrow",
        "aria-expanded": picked,
        "aria-label": `${sectionLabels[i]}・${blk.kind}${rec.badge ? "・達成" : rec.best > 0 ? `・${rec.best}%` : "・未挑戦"}`,
        style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 14px",
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "inherit",
          textAlign: "left"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 28,
          height: 28,
          flex: "0 0 auto",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: rec.badge ? 16 : 14,
          fontWeight: 800,
          background: rec.badge ? "#15291f" : "#1b2330",
          border: `1px solid ${rec.badge ? "#34d39e55" : "#2a3543"}`,
          color: rec.badge ? "#34d39e" : "#9aa6b6"
        }
      }, rec.badge ? "🏅" : blk.no), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 7,
          fontSize: 15,
          fontWeight: 800
        }
      }, sectionLabels[i], /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: 0.5,
          color: tagColor,
          background: tagBg,
          border: `1px solid ${tagColor}44`,
          borderRadius: 6,
          padding: "1px 6px"
        }
      }, blk.kind)), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 600,
          color: "#5b6878"
        }
      }, blk.chapSpan, " \u30FB ", sec.length, "\u554F")), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 700,
          whiteSpace: "nowrap",
          color: rec.badge ? "#34d39e" : rec.best > 0 ? "#f6c247" : "#5b6878"
        }
      }, rec.badge ? "🏅" : rec.best > 0 ? `${rec.best}%` : "未挑戦"), /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: "0 0 auto",
          color: "#5b6878",
          fontSize: 12,
          transition: "transform .18s",
          transform: picked ? "rotate(180deg)" : "none"
        }
      }, "\u25BE")), picked && /*#__PURE__*/React.createElement("div", {
        className: "panel-in",
        style: {
          display: "flex",
          gap: 10,
          padding: "0 14px 13px"
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => openStudy(i),
        className: "secbtn",
        style: {
          flex: 1,
          padding: "10px 0",
          borderRadius: 10,
          fontSize: 14,
          fontWeight: 800,
          cursor: "pointer",
          background: "#13241f",
          border: "1px solid #2f6f5c",
          color: "#5ee0b4"
        }
      }, "\u899A\u3048\u308B"), /*#__PURE__*/React.createElement("button", {
        onClick: () => openTestPick(i),
        className: "secbtn",
        style: {
          flex: 1,
          padding: "10px 0",
          borderRadius: 10,
          fontSize: 14,
          fontWeight: 800,
          cursor: "pointer",
          background: "#1a2740",
          border: "1px solid #3f6aa8",
          color: "#9ec3ff"
        }
      }, "\u30C6\u30B9\u30C8")));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        padding: "14px 16px",
        borderRadius: 13,
        background: "#141b26",
        border: "1px solid #232d3b"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 900
      }
    }, "\uD83C\uDFB2 \u30E9\u30F3\u30C0\u30E0\u6F14\u7FD2"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: 0.5,
        color: "#9ec3ff",
        background: "#16233a",
        border: "1px solid #9ec3ff44",
        borderRadius: 6,
        padding: "1px 6px"
      }
    }, "\u5FA9\u7FD2")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        fontWeight: 600,
        color: "#8794a6",
        marginBottom: 11
      }
    }, "\u5FD8\u308C\u304B\u3051\u305F\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3093\u3067\u30E9\u30F3\u30C0\u30E0", RANDOM_BLOCK_N, "\u554F\u3002\u8A18\u61B6\u306E\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u306B\u3002"), /*#__PURE__*/React.createElement("button", {
      onClick: openBlockRandom,
      className: "secbtn",
      style: {
        width: "100%",
        padding: "11px 0",
        borderRadius: 10,
        fontSize: 13.5,
        fontWeight: 800,
        cursor: "pointer",
        background: "#1a2740",
        border: "1px solid #3f6aa8",
        color: "#9ec3ff"
      }
    }, "\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3093\u3067\u5FA9\u7FD2\uFF08", RANDOM_BLOCK_N, "\u554F\uFF09")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        padding: "16px 16px 15px",
        borderRadius: 14,
        background: "linear-gradient(180deg,#16231d,#131b26)",
        border: `1px solid ${examMastered ? "#e0a83088" : examComplete ? "#34d39e55" : "#2f6f5c"}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 900,
        color: "#5ee0b4"
      }
    }, "\uD83C\uDFAF \u7DCF\u5408\u30C6\u30B9\u30C8\uFF08\u6A21\u8A66\uFF09"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: 0.5,
        color: "#f6c247",
        background: "#2a220e",
        border: "1px solid #e0a83055",
        borderRadius: 6,
        padding: "1px 6px"
      }
    }, "\u4ED5\u4E0A\u3052\u30FB\u672C\u756A\u5F62\u5F0F")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        fontWeight: 600,
        color: "#8794a6",
        marginBottom: 12
      }
    }, "\u5168\u7BC4\u56F2\u304B\u3089", EXAM_SIZE, "\u554F\u30E9\u30F3\u30C0\u30E0\u51FA\u984C\u30FB", EXAM_PASS, "\u554F\uFF087\u5272\uFF09\u3067\u5408\u683C\uFF1D\u4FEE\u4E86\u30D0\u30C3\u30B8\uD83C\uDFC5\uFF0F", EXAM_GOLD, "\u554F\u4EE5\u4E0A\u3067\u91D1\uD83E\uDD47"), examStrip(26), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        fontSize: 11.5,
        fontWeight: 700,
        marginTop: 8,
        color: examMastered ? "#f6c247" : examComplete ? "#34d39e" : "#8794a6"
      }
    }, examMastered ? "🎉 完全制覇！" : `修了バッジ ${examSlots.length} / ${EXAM_SLOTS}`), /*#__PURE__*/React.createElement("button", {
      onClick: startExam,
      style: {
        width: "100%",
        marginTop: 13,
        padding: "13px 0",
        borderRadius: 11,
        fontSize: 15,
        fontWeight: 900,
        cursor: "pointer",
        color: "#10141c",
        background: "linear-gradient(90deg,#5ee0b4,#34d39e)",
        border: "none",
        boxShadow: "0 0 20px #34d39e33"
      }
    }, "\uD83C\uDFAF \u6A21\u8A66\u306B\u6311\u6226\uFF08", Math.min(EXAM_SIZE, questions.length), "\u554F\uFF09")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        justifyContent: "center",
        marginTop: 14,
        paddingBottom: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (confirm(`LPIC ${track} のバッジ・成績をすべてリセットします（修了バッジも含む）。よろしいですか？`)) {
          setRecords({});
          setExamSlots([]);
        }
      },
      style: {
        ...linkBtn,
        color: "#ff8a8a"
      }
    }, "\u6210\u7E3E\u3092\u30EA\u30BB\u30C3\u30C8"))));
  }

  // ════════════════ TESTPICK（テスト範囲をチャンク単位で選ぶ） ════════════════
  if (screen === "testpick") {
    const blk = blocks[secIdx] || {
      no: secIdx + 1,
      kind: "",
      chapSpan: ""
    };
    // 各チャンクの問数（最後のチャンクは端数）
    const chunkSizes = Array.from({
      length: chunkCount
    }, (_, i) => Math.min(PAGE_SIZE, secQuestions.length - i * PAGE_SIZE));
    const selectedCount = [...pickChunks].reduce((s, c) => s + (chunkSizes[c] || 0), 0);
    const allSelected = pickChunks.size === chunkCount;
    const toggleChunk = c => setPickChunks(prev => {
      const n = new Set(prev);
      if (n.has(c)) n.delete(c);else n.add(c);
      return n;
    });
    const toggleAll = () => setPickChunks(allSelected ? new Set() : new Set(Array.from({
      length: chunkCount
    }, (_, k) => k)));
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 480,
        width: "100%",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      "aria-label": "\u30DB\u30FC\u30E0\u3078\u623B\u308B",
      className: "iconbtn",
      style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "#1b2330",
        border: "1px solid #2a3543",
        color: "#c2cad8",
        cursor: "pointer",
        fontSize: 17,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, "\u2190"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: 1.15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 900,
        letterSpacing: 0.5
      }
    }, sectionLabels[secIdx], " \u30C6\u30B9\u30C8"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: "#5b7088"
      }
    }, blk.kind, " \u30FB ", blk.chapSpan)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36
      },
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "18px 0 12px",
        fontSize: 12.5,
        lineHeight: 1.7,
        color: "#8794a6"
      }
    }, "\u51FA\u984C\u3059\u308B\u7BC4\u56F2\u309210\u554F\u305A\u3064\u9078\u3079\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#9ec3ff",
        fontWeight: 700
      }
    }, "\u5168\u90E8\u3092\u9078\u3093\u30679\u5272\u5408\u683C\u3059\u308B\u3068\u3001\u3053\u306E\u30D6\u30ED\u30C3\u30AF\u5408\u683C\uD83C\uDFC5"), "\u306B\u306A\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("button", {
      onClick: toggleAll,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        marginBottom: 8,
        borderRadius: 11,
        cursor: "pointer",
        background: "#141b26",
        border: "1px solid #2a3543",
        color: "#c2cad8",
        fontSize: 13,
        fontWeight: 800,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: 6,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 900,
        background: allSelected ? "#1a2740" : "transparent",
        border: `1px solid ${allSelected ? "#5b9bff" : "#3a4658"}`,
        color: "#9ec3ff"
      }
    }, allSelected ? "✓" : ""), allSelected ? "すべて解除" : "すべて選択"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7
      }
    }, Array.from({
      length: chunkCount
    }).map((_, i) => {
      const on = pickChunks.has(i);
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => toggleChunk(i),
        "aria-pressed": on,
        "aria-label": `ブロック${blk.no}-${i + 1}（${chunkSizes[i]}問）${on ? "・選択中" : ""}`,
        style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 14px",
          borderRadius: 12,
          cursor: "pointer",
          textAlign: "left",
          background: on ? "#16233a" : "#161d28",
          border: `1px solid ${on ? "#3f6aa8" : "#232d3b"}`,
          color: "inherit",
          transition: "border-color .12s, background .12s"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          flex: "0 0 auto",
          borderRadius: 6,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 900,
          background: on ? "#1a2740" : "transparent",
          border: `1px solid ${on ? "#5b9bff" : "#3a4658"}`,
          color: "#9ec3ff"
        }
      }, on ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          fontSize: 15,
          fontWeight: 800
        }
      }, blk.no, "-", i + 1, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 600,
          color: "#5b6878",
          marginLeft: 8
        }
      }, chunkSizes[i], "\u554F")));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#8794a6",
        marginBottom: 10
      }
    }, "\u51FA\u984C\u6570 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 900,
        color: selectedCount > 0 ? "#eceff4" : "#5b6878"
      }
    }, selectedCount), " \u554F", allSelected ? "（ブロック全問）" : ""), /*#__PURE__*/React.createElement("button", {
      onClick: startPickTest,
      disabled: selectedCount === 0,
      style: {
        ...primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)"),
        width: "100%",
        opacity: selectedCount === 0 ? 0.4 : 1,
        cursor: selectedCount === 0 ? "not-allowed" : "pointer"
      }
    }, "\u26A1 \u30C6\u30B9\u30C8\u958B\u59CB\uFF08", selectedCount, "\u554F\uFF09"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      style: {
        ...linkBtn,
        marginTop: 16
      }
    }, "\u30D6\u30ED\u30C3\u30AF\u4E00\u89A7\u3078"))));
  }

  // ════════════════ RANDOMPICK（ランダム演習＝復習用: ブロックを選ぶ） ════════════════
  if (screen === "randompick") {
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 480,
        width: "100%",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      "aria-label": "\u30DB\u30FC\u30E0\u3078\u623B\u308B",
      className: "iconbtn",
      style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "#1b2330",
        border: "1px solid #2a3543",
        color: "#c2cad8",
        cursor: "pointer",
        fontSize: 17,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, "\u2190"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 900,
        letterSpacing: 0.5
      }
    }, "\uD83C\uDFB2 \u30E9\u30F3\u30C0\u30E0\u6F14\u7FD2\uFF08\u5FA9\u7FD2\uFF09"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36
      },
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "18px 0 12px",
        fontSize: 12.5,
        lineHeight: 1.7,
        color: "#8794a6"
      }
    }, "\u5FD8\u308C\u304B\u3051\u305F\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3076\u3068\u3001\u305D\u306E\u4E2D\u304B\u3089", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#9ec3ff",
        fontWeight: 700
      }
    }, "\u30E9\u30F3\u30C0\u30E0", RANDOM_BLOCK_N, "\u554F"), "\u3092\u30B7\u30E3\u30C3\u30D5\u30EB\u3057\u3066\u51FA\u984C\u3057\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u30D0\u30C3\u30B8\u5224\u5B9A\u306F\u306A\u3057\u30FB\u8A18\u61B6\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u7528\u3067\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: 2,
        color: "#5b7088",
        margin: "6px 0 10px"
      }
    }, "\u5FA9\u7FD2\u3059\u308B\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3076"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, sections.map((sec, i) => {
      const blk = blocks[i] || {
        no: i + 1,
        kind: ""
      };
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => startRandom(i, RANDOM_BLOCK_N),
        className: "secbtn",
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "13px 14px",
          borderRadius: 12,
          cursor: "pointer",
          background: "#141b26",
          border: "1px solid #2a3543",
          color: "#eceff4",
          textAlign: "left",
          width: "100%"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 28,
          height: 28,
          flex: "0 0 auto",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 800,
          background: "#1a2740",
          border: "1px solid #3f6aa8",
          color: "#9ec3ff"
        }
      }, blk.no), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          minWidth: 0,
          fontSize: 14.5,
          fontWeight: 800
        }
      }, sectionLabels[i]), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11.5,
          fontWeight: 800,
          color: "#5ee0b4",
          whiteSpace: "nowrap"
        }
      }, "\uD83C\uDFB2 ", Math.min(RANDOM_BLOCK_N, sec.length), "\u554F"));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        margin: "18px 0 10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "#232d3b"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: 1.5,
        color: "#5b7088",
        whiteSpace: "nowrap"
      }
    }, "\u307E\u305F\u306F"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "#232d3b"
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => startRandom(-1, RANDOM_BLOCK_N),
      className: "secbtn",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "15px 16px",
        borderRadius: 12,
        cursor: "pointer",
        background: "linear-gradient(180deg,#27406b,#1d3052)",
        border: "1px solid #3f6aa8",
        color: "#eceff4",
        textAlign: "left",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, "\uD83C\uDF10"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 900
      }
    }, "\u5168\u4F53\u304B\u3089\u30E9\u30F3\u30C0\u30E0"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        opacity: 0.75,
        marginTop: 1
      }
    }, "\u5168\u30D6\u30ED\u30C3\u30AF\u6A2A\u65AD")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 800,
        color: "#f6c247",
        whiteSpace: "nowrap"
      }
    }, "\uD83C\uDFB2 ", RANDOM_BLOCK_N, "\u554F")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      style: {
        ...linkBtn,
        display: "block",
        margin: "20px auto 0"
      }
    }, "\u30DB\u30FC\u30E0\u3078")));
  }

  // ════════════════ STUDY（暗記: 10覚える→10テスト の繰り返し） ════════════════
  if (screen === "study") {
    // 暗記内テストの結果
    if (studySub === "quizdone") {
      const s = quizScore || {
        correct: 0,
        total: 0
      };
      const isLast = studyChunk + 1 >= chunkCount;
      const perfect = s.total > 0 && s.correct === s.total;
      const misses = (studyProgress[secIdx] || {})[studyChunk] || []; // この回で一発正解できなかった問題ID
      const remaining = chunkCount - (studyChunk + 1); // このブロックで残っているセット数
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 30
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, sectionLabels[secIdx], " \u30FB \u30BB\u30C3\u30C8 ", studyChunk + 1, " / ", chunkCount), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 54,
          fontWeight: 900,
          margin: "10px 0 0",
          color: perfect ? "#8ef0cf" : "#34d39e"
        }
      }, s.correct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 22,
          opacity: 0.7
        }
      }, " / ", s.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          opacity: 0.6,
          marginTop: 2
        }
      }, perfect ? "全問正解 ✓" : "正解"), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 20,
          padding: "12px 14px",
          borderRadius: 12,
          background: "#141b26",
          border: "1px solid #232d3b"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12.5,
          fontWeight: 800,
          color: "#c2cad8"
        }
      }, sectionLabels[secIdx], "\uFF1A", /*#__PURE__*/React.createElement("span", {
        style: {
          color: "#34d39e"
        }
      }, setDoneCount(secIdx)), " / ", chunkCount, " \u30BB\u30C3\u30C8\u5B8C\u4E86"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          gap: 6,
          marginTop: 8
        }
      }, setDots(secIdx))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 22
        }
      }, misses.length > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: startChunkMisses,
        style: primaryBtn("linear-gradient(90deg,#e0a830,#f6c247)")
      }, "\uD83D\uDD01 \u30DF\u30B9\u306B\u6311\u6226\uFF08", misses.length, "\u554F\uFF09"), !isLast ?
      /*#__PURE__*/
      /* 前進導線は常に目立つ primary。残りセット数を明示して“終わった誤解”を防ぐ */
      React.createElement("button", {
        onClick: () => {
          setStudyChunk(c => c + 1);
          setStudySub("learn");
        },
        style: primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)")
      }, "\u6B21\u306E\u30BB\u30C3\u30C8\u3078\uFF08\u6B8B\u308A", remaining, "\uFF09\u2192") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          fontWeight: 800,
          color: "#8ef0cf",
          marginTop: 2
        }
      }, "\uD83C\uDF89 \u6700\u5F8C\u306E\u30BB\u30C3\u30C8\uFF01\u4ED5\u4E0A\u3052\u306B\u30D6\u30ED\u30C3\u30AF\u30C6\u30B9\u30C8\u3067\u529B\u8A66\u3057"), /*#__PURE__*/React.createElement("button", {
        onClick: () => startTest(secIdx),
        style: primaryBtn("linear-gradient(90deg,#34d39e,#8ef0cf)")
      }, "\u26A1 \u30D6\u30ED\u30C3\u30AF\u30C6\u30B9\u30C8\uFF08", secQuestions.length, "\u554F\uFF09")), /*#__PURE__*/React.createElement("button", {
        onClick: () => setStudySub("learn"),
        style: ghostBtn
      }, "\u899A\u3048\u308B\u753B\u9762\u306B\u623B\u308B"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: {
          ...linkBtn,
          marginTop: 6
        }
      }, "\u30D6\u30ED\u30C3\u30AF\u4E00\u89A7\u3078"))));
    }
    // learn: 現在の10問を覚える
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        width: "100%",
        paddingBottom: 92
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      "aria-label": "\u30DB\u30FC\u30E0\u3078\u623B\u308B",
      className: "iconbtn",
      style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "#1b2330",
        border: "1px solid #2a3543",
        color: "#c2cad8",
        cursor: "pointer",
        fontSize: 17,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, "\u2190"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: 1.1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: 3,
        color: "#5b7088"
      }
    }, "BLOCK"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 17,
        fontWeight: 900,
        letterSpacing: 0.5
      }
    }, (blocks[secIdx] || {}).no ?? secIdx + 1)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36
      },
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: "#c2cad8"
      }
    }, "\u899A\u3048\u308B \u30FB \u30BB\u30C3\u30C8 ", studyChunk + 1, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#5b6878",
        fontWeight: 700
      }
    }, "/ ", chunkCount)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: "#5b7088"
      }
    }, "\u5B8C\u4E86 ", setDoneCount(secIdx), " / ", chunkCount)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 999,
        background: "#1b2330",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${Math.round(setDoneCount(secIdx) / chunkCount * 100)}%`,
        background: "linear-gradient(90deg,#34d39e,#8ef0cf)",
        borderRadius: 999,
        transition: "width .25s"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        flexWrap: "wrap",
        gap: 4,
        padding: 4,
        marginTop: 14,
        marginBottom: 4,
        background: "#141b26",
        border: "1px solid #232d3b",
        borderRadius: 999
      }
    }, Array.from({
      length: chunkCount
    }).map((_, i) => {
      const cur = i === studyChunk;
      const m = (studyProgress[secIdx] || {})[i]; // undefined=未挑戦 / []=完了 / [..]=ミス残り
      const done = m && m.length === 0; // 全問正解で学習完了
      const partial = m && m.length > 0; // 挑戦したがミスが残っている
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => {
          setStudyChunk(i);
          setStudySub("learn");
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          minWidth: 54,
          padding: "7px 14px",
          fontSize: 14,
          fontWeight: 800,
          borderRadius: 999,
          cursor: "pointer",
          border: "none",
          color: cur ? "#0e1420" : done ? "#34d39e" : partial ? "#f6c247" : "#8b97a8",
          background: cur ? "linear-gradient(90deg,#5b9bff,#7fb6ff)" : "transparent",
          boxShadow: cur ? "0 2px 10px #5b9bff55" : "none",
          transition: "background .15s, color .15s"
        }
      }, secIdx + 1, "-", i + 1, done && /*#__PURE__*/React.createElement("span", {
        "aria-label": "\u5B66\u7FD2\u5B8C\u4E86",
        style: {
          fontSize: 13,
          fontWeight: 900,
          color: cur ? "#0e1420" : "#34d39e"
        }
      }, "\u2713"), partial && /*#__PURE__*/React.createElement("span", {
        "aria-label": `ミス残り${m.length}問`,
        style: {
          minWidth: 16,
          height: 16,
          padding: "0 4px",
          boxSizing: "border-box",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 99,
          fontSize: 10,
          fontWeight: 900,
          lineHeight: 1,
          color: cur ? "#0e1420" : "#f6c247",
          background: cur ? "#f6c247" : "#3a2f0e",
          border: `1px solid ${cur ? "#f6c247" : "#f6c24766"}`
        }
      }, m.length));
    })), /*#__PURE__*/React.createElement("div", {
      className: "card-in",
      style: {
        marginTop: 14
      }
    }, chunkQs.map(q => /*#__PURE__*/React.createElement(StudyCard, {
      key: q.id,
      q: q,
      mono: mono,
      flagged: !!flaggedIds[q.id],
      onToggleFlag: () => toggleFlag(q.id)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 30,
        pointerEvents: "none",
        padding: "16px 16px calc(16px + env(safe-area-inset-bottom))",
        background: "linear-gradient(180deg, transparent, #0d1117 34%)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: "0 auto",
        pointerEvents: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, ((studyProgress[secIdx] || {})[studyChunk] || []).length > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: startChunkMisses,
      style: {
        width: "100%",
        padding: "12px",
        fontSize: 15,
        fontWeight: 800,
        borderRadius: 13,
        cursor: "pointer",
        color: "#ffe9b8",
        border: "1px solid #f6c24766",
        background: "linear-gradient(180deg,#2a2410,#1c1808)"
      }
    }, "\uD83D\uDD01 \u30DF\u30B9\u306B\u6311\u6226\uFF08", ((studyProgress[secIdx] || {})[studyChunk] || []).length, "\u554F\uFF09"), /*#__PURE__*/React.createElement("button", {
      onClick: startChunkQuiz,
      style: {
        width: "100%",
        padding: "17px",
        fontSize: 18,
        fontWeight: 900,
        border: "none",
        borderRadius: 16,
        cursor: "pointer",
        color: "#10141c",
        background: "linear-gradient(90deg,#34d39e,#8ef0cf)",
        boxShadow: "0 6px 26px #34d39e55"
      }
    }, "\u26A1 \u3053\u306E", chunkQs.length, "\u554F\u3092\u30C6\u30B9\u30C8"))));
  }

  // ════════════════ TEST（テスト/暗記内チェック 共通ランナー） ════════════════
  if (screen === "test") {
    const q = testQueue[testPos];
    if (!q) return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag);
    const qTotal = testQueue.length;
    const isSection = testMode === "section";
    const isReview = testMode === "review";
    const isRandom = testMode === "random";
    const isExam = testMode === "exam";
    const isExamMiss = testMode === "exammiss";
    const isFlagged = testMode === "flagged";
    const runTitle = isSection ? `${sectionLabels[secIdx]} テスト` : isExam ? "🎯 総合テスト（模試）" : isExamMiss ? "🔁 総合テストの覚え直し" : isFlagged ? "🔖 要復習に挑戦" : isReview ? "🔁 間違えた問題に挑戦" : isRandom ? `🎲 ${randomLabel} ランダム` : `第${studyChunk + 1}セット チェック`;
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 12,
        opacity: 0.75
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (isRandom) openBlockRandom();else if (isSection || isReview || isExam || isExamMiss || isFlagged) setScreen("home");else {
          setStudySub("learn");
          setScreen("study");
        }
      },
      style: {
        background: "none",
        border: "none",
        color: "#8b97a8",
        cursor: "pointer",
        fontSize: 13
      }
    }, "\u2190 \u4E2D\u65AD"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, runTitle), /*#__PURE__*/React.createElement("span", null, testPos + 1, " / ", qTotal)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: "#1a2230",
        borderRadius: 99,
        overflow: "hidden",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${testPos / qTotal * 100}%`,
        height: "100%",
        background: "linear-gradient(90deg,#5b9bff,#34d39e)",
        transition: "width .3s"
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => toggleFlag(q.id),
      "aria-pressed": !!flaggedIds[q.id],
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        width: "100%",
        marginTop: 12,
        padding: "11px 0",
        borderRadius: 12,
        cursor: "pointer",
        fontSize: 14,
        fontWeight: 800,
        transition: "background .15s, border-color .15s, box-shadow .15s",
        background: flaggedIds[q.id] ? "linear-gradient(90deg,#e0a830,#f6c247)" : "#161d28",
        border: `1.5px solid ${flaggedIds[q.id] ? "#f6c247" : "#3a4658"}`,
        color: flaggedIds[q.id] ? "#241a05" : "#c2cad8",
        boxShadow: flaggedIds[q.id] ? "0 0 16px #f6c24755" : "none"
      }
    }, flaggedIds[q.id] ? "🔖 要復習に登録中（押して解除）" : "🔖 要復習に追加する"), /*#__PURE__*/React.createElement("div", {
      className: phase === "reveal" && !lastOk ? "shake" : "",
      style: {
        marginTop: 16,
        background: "linear-gradient(180deg,#1b2330,#141a24)",
        border: `1.5px solid ${phase === "reveal" ? lastOk ? "#2faf86" : "#d9636e" : "#2a3543"}`,
        borderRadius: 18,
        padding: "22px 20px",
        boxShadow: phase === "reveal" && !lastOk ? `0 0 12px #d9636e1c` : "none",
        transition: "border-color .2s, box-shadow .2s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
        fontSize: 11,
        opacity: 0.5
      }
    }, /*#__PURE__*/React.createElement("span", null, "#", q.id, "\u30FB", q.source), /*#__PURE__*/React.createElement("span", null, q.type === "fill" ? "記述で入力" : q.type === "multi" ? `${q.selectCount}つ選ぶ` : "1つ選ぶ")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 1.65
      }
    }, /*#__PURE__*/React.createElement(QuestionBody, {
      q: q,
      mono: mono,
      codeSize: 13,
      highlight: false
    })), phase === "reveal" && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        borderTop: "1px solid #2a3543",
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 900,
        marginBottom: 10,
        color: lastOk ? "#34d39e" : "#ff6b6b"
      }
    }, lastOk ? "✓ 正解" : "✕ 不正解"), q.type !== "fill" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, q.choices.map(c => {
      const correct = q.answer.includes(c.label);
      const picked = Array.isArray(lastInput) && lastInput.includes(c.label);
      const k = q.answer.indexOf(c.label);
      const hint = k >= 0 && q.answerHints && q.answerHints[k] ? [q.answerHints[k]] : [];
      return /*#__PURE__*/React.createElement("div", {
        key: c.label,
        style: {
          display: "flex",
          gap: 10,
          alignItems: "baseline",
          padding: "8px 11px",
          borderRadius: 9,
          background: correct ? "#14271f" : "transparent",
          border: `1px solid ${correct ? "#34d39e66" : picked ? "#ff6b6b66" : "#232d3b"}`
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 800,
          minWidth: 14,
          textAlign: "center",
          color: correct ? "#34d39e" : picked ? "#ff8a8a" : "#555"
        }
      }, c.label), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 15,
          fontFamily: mono,
          lineHeight: 1.5,
          flex: 1,
          color: correct ? "#eceff4" : "#8b97a8"
        }
      }, correct ? /*#__PURE__*/React.createElement(Highlight, {
        text: c.text,
        keys: hint,
        color: "#f6c247",
        on: true,
        variant: "marker"
      }) : c.text), picked && !correct && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          color: "#ff8a8a",
          whiteSpace: "nowrap"
        }
      }, "\u3042\u306A\u305F\u306E\u56DE\u7B54"));
    })) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        opacity: 0.5,
        marginBottom: 4
      }
    }, "\u7B54\u3048"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 800,
        color: "#eceff4",
        lineHeight: 1.6,
        fontFamily: mono
      }
    }, (q.answerTexts && q.answerTexts.length ? q.answerTexts : q.answer).map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement(Highlight, {
      text: t,
      keys: q.answerHints && q.answerHints[i] ? [q.answerHints[i]] : [],
      color: "#f6c247",
      on: true,
      variant: "marker"
    })))), !lastOk && lastInput ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#ff8a8a",
        marginTop: 6
      }
    }, "\u3042\u306A\u305F\u306E\u56DE\u7B54: ", String(lastInput)) : null), /*#__PURE__*/React.createElement(Explain, {
      key: q.id,
      text: q.mnemonic
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, phase === "answer" ? /*#__PURE__*/React.createElement(React.Fragment, null, q.type === "single" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 9
      }
    }, q.choices.map((c, i) => /*#__PURE__*/React.createElement("button", {
      key: c.label,
      className: "choice",
      onMouseDown: e => e.preventDefault(),
      onClick: () => submitAnswer([c.label]),
      onMouseEnter: () => setCursor(i),
      style: {
        ...choiceRow("#1b2330", "#2a3543"),
        ...(i === cursor ? {
          boxShadow: "inset 0 0 0 2px #8ef0cf"
        } : {})
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        opacity: 0.3,
        minWidth: 16,
        textAlign: "center"
      }
    }, c.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontFamily: mono,
        lineHeight: 1.5
      }
    }, c.text))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        opacity: 0.4,
        marginTop: 4,
        textAlign: "center"
      }
    }, "\u2191\u2193\u3067\u79FB\u52D5\u30FBEnter\u3067\u6C7A\u5B9A\uFF08A\u301CE\u30AD\u30FC\u3067\u3082\u5373\u6C7A\uFF09")), q.type === "multi" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 9
      }
    }, q.choices.map((c, i) => {
      const on = multiSel.includes(c.label);
      return /*#__PURE__*/React.createElement("button", {
        key: c.label,
        className: "choice",
        onMouseDown: e => e.preventDefault(),
        onMouseEnter: () => setCursor(i),
        onClick: () => setMultiSel(s => on ? s.filter(x => x !== c.label) : [...s, c.label]),
        style: {
          ...choiceRow(on ? "#2a3f6e" : "#1b2330", on ? "#5b9bff" : "#2a3543"),
          ...(i === cursor ? {
            boxShadow: "inset 0 0 0 2px #8ef0cf"
          } : {})
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16,
          fontWeight: 900,
          color: on ? "#5b9bff" : "#444",
          minWidth: 22,
          textAlign: "center"
        }
      }, on ? "✓" : "○"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16,
          fontFamily: mono,
          lineHeight: 1.5
        }
      }, c.text));
    })), /*#__PURE__*/React.createElement("button", {
      onMouseDown: e => e.preventDefault(),
      onMouseEnter: () => setCursor(q.choices.length),
      onClick: () => multiSel.length && submitAnswer(multiSel),
      disabled: !multiSel.length,
      style: {
        ...primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)"),
        width: "100%",
        marginTop: 10,
        opacity: multiSel.length ? 1 : 0.4,
        ...(cursor === q.choices.length ? {
          boxShadow: "inset 0 0 0 2px #8ef0cf"
        } : {})
      }
    }, "\u6C7A\u5B9A\uFF08", multiSel.length, "/", q.selectCount, "\uFF09"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        opacity: 0.4,
        marginTop: 6,
        textAlign: "center"
      }
    }, "\u2191\u2193\u3067\u79FB\u52D5\u30FBEnter\u3067\u9078\u629E\uFF0F\u6C7A\u5B9A\u30DC\u30BF\u30F3\u307E\u3067\u52D5\u304B\u3057\u3066Enter\u3067\u56DE\u7B54")), q.type === "fill" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: fillVal,
      onChange: e => setFillVal(e.target.value),
      onKeyDown: e => {
        if (e.key === "Enter" && fillVal.trim()) {
          e.preventDefault();
          e.stopPropagation();
          submitAnswer(fillVal);
        }
      },
      placeholder: "\u7B54\u3048\u3092\u5165\u529B",
      spellCheck: false,
      autoFocus: true,
      style: {
        flex: 1,
        padding: "14px 16px",
        background: "#1b2330",
        color: "#eceff4",
        border: "1px solid #2a3543",
        borderRadius: 12,
        fontFamily: mono,
        fontSize: 16,
        outline: "none"
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => fillVal.trim() && submitAnswer(fillVal),
      style: primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)")
    }, "\u6C7A\u5B9A"))) : isCram(testMode) && !lastOk ?
    /*#__PURE__*/
    /* 覚えるモード系（暗記10問／ランダム演習／総合の覚え直し）で不正解のときは「次へ」を出さず、正解するまで「もう一度チャレンジ」だけ（採点は最初の不正解のまま）。学習動線の制御。 */
    React.createElement("button", {
      onClick: retryQuestion,
      style: {
        width: "100%",
        padding: "13px",
        fontSize: 15,
        fontWeight: 800,
        border: "1px solid #3f6aa8",
        borderRadius: 12,
        cursor: "pointer",
        color: "#dbe8ff",
        background: "linear-gradient(180deg,#27406b,#1d3052)"
      }
    }, "\uD83D\uDD01 \u3082\u3046\u4E00\u5EA6\u30C1\u30E3\u30EC\u30F3\u30B8\uFF08Enter\uFF09") :
    /*#__PURE__*/
    /* 次へは主張を抑える（彩度/サイズを下げ、問題文と黄マーカーが一番目立つように） */
    React.createElement("button", {
      onClick: nextTest,
      style: {
        width: "100%",
        padding: "13px",
        fontSize: 15,
        fontWeight: 800,
        border: "1px solid #2f7a66",
        borderRadius: 12,
        cursor: "pointer",
        color: "#dff5ec",
        background: "linear-gradient(180deg,#235d4d,#1b463b)"
      }
    }, testPos + 1 >= qTotal ? isSection ? "結果を見る（Enter）" : "採点する（Enter）" : "次へ →（Enter）"))));
  }

  // ════════════════ RESULT（結果） ════════════════
  if (screen === "result") {
    const s = lastScore || {
      correct: 0,
      total: 0,
      pct: 0,
      badge: false
    };
    if (s.exam) {
      // 総合テスト（模試）の結果
      const need = Math.max(0, EXAM_PASS - s.correct);
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 30
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, "\uD83C\uDFAF \u7DCF\u5408\u30C6\u30B9\u30C8\uFF08\u6A21\u8A66\uFF09\u306E\u7D50\u679C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 64,
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "10px 0 0",
          color: s.pass ? s.gold ? "#f6c247" : "#34d39e" : "#c2cad8",
          textShadow: s.pass ? s.gold ? "0 0 30px #f6c24766" : "0 0 28px #34d39e55" : "none"
        }
      }, s.correct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 24,
          opacity: 0.7
        }
      }, " / ", s.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          opacity: 0.6,
          marginTop: 2
        }
      }, "\u6B63\u89E3\uFF08", s.pct, "%\uFF09\u30FB\u5408\u683C\u30E9\u30A4\u30F3 ", EXAM_PASS, "\u554F"), s.pass ? /*#__PURE__*/React.createElement("div", {
        className: "card-in",
        style: {
          marginTop: 18
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 46
        }
      }, s.gold ? "🥇" : "🏅"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 18,
          fontWeight: 900,
          color: s.gold ? "#f6c247" : "#34d39e",
          marginTop: 2
        }
      }, s.gold ? "金の修了バッジ獲得！" : "合格・修了バッジ獲得！"), s.gold && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          opacity: 0.75,
          marginTop: 4
        }
      }, EXAM_GOLD, "\u554F\u4EE5\u4E0A\u306E\u8C6A\u83EF\u30D0\u30C3\u30B8 \u2728")) : /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 18
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 20,
          fontWeight: 900,
          color: "#f6c247"
        }
      }, "\u4E0D\u5408\u683C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          opacity: 0.6,
          marginTop: 6,
          lineHeight: 1.7
        }
      }, "\u3042\u3068", need, "\u554F\u3067\u5408\u683C\uFF08", EXAM_PASS, "\u554F\uFF1D7\u5272\uFF09\u3002")), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 22,
          padding: "14px",
          borderRadius: 13,
          background: "#141b26",
          border: "1px solid #232d3b"
        }
      }, examStrip(28), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          marginTop: 9,
          color: examMastered ? "#f6c247" : examComplete ? "#34d39e" : "#8794a6"
        }
      }, examMastered ? "🎉 完全制覇！" : `修了バッジ ${examSlots.length} / ${EXAM_SLOTS}`)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 24
        }
      }, s.missed && s.missed.length > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: () => startExamMisses(s.missed),
        style: primaryBtn("linear-gradient(90deg,#e0a830,#f6c247)")
      }, "\uD83D\uDD01 \u9593\u9055\u3048\u305F\u554F\u984C\u3092\u899A\u3048\u308B\uFF08", s.missed.length, "\u554F\uFF09"), /*#__PURE__*/React.createElement("button", {
        onClick: startExam,
        style: primaryBtn("linear-gradient(90deg,#5ee0b4,#34d39e)")
      }, "\uD83C\uDFAF \u3082\u3046\u4E00\u5EA6 \u7DCF\u5408\u30C6\u30B9\u30C8"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: ghostBtn
      }, "\u30DB\u30FC\u30E0\u3078"))));
    }
    if (s.exammiss) {
      // 総合テストの覚え直し結果（正解するまで繰り返した後、まだ残るミス）
      const remain = s.missed ? s.missed.length : 0;
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 34
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, "\uD83D\uDD01 \u899A\u3048\u76F4\u3057\u306E\u7D50\u679C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 60,
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "10px 0 0",
          color: "#34d39e"
        }
      }, s.correct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 22,
          opacity: 0.7
        }
      }, " / ", s.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          opacity: 0.6,
          marginTop: 2
        }
      }, "\u6B63\u89E3"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          marginTop: 18,
          lineHeight: 1.7,
          color: remain === 0 ? "#34d39e" : "#c2cad8"
        }
      }, remain === 0 ? "🎉 全部覚えた！" : `残り ${remain}問`), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 26
        }
      }, remain > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: () => startExamMisses(s.missed),
        style: primaryBtn("linear-gradient(90deg,#e0a830,#f6c247)")
      }, "\u3082\u3046\u4E00\u5EA6 \u9593\u9055\u3048\u305F\u554F\u984C\u3092\u899A\u3048\u308B"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: ghostBtn
      }, "\u30DB\u30FC\u30E0\u3078"))));
    }
    if (s.review) {
      // 間違えた問題の復習結果
      const remain = wrongList.length;
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 34
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, "\uD83D\uDD01 \u5FA9\u7FD2\u306E\u7D50\u679C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 60,
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "10px 0 0",
          color: "#34d39e"
        }
      }, s.correct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 22,
          opacity: 0.7
        }
      }, " / ", s.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          opacity: 0.6,
          marginTop: 2
        }
      }, "\u6B63\u89E3"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          marginTop: 18,
          lineHeight: 1.7,
          color: remain === 0 ? "#34d39e" : "#c2cad8"
        }
      }, remain === 0 ? "🎉 苦手をすべてクリア！" : `残り苦手 ${remain}問`), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 26
        }
      }, remain > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: startReview,
        style: primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)")
      }, "\u3082\u3046\u4E00\u5EA6 \u9593\u9055\u3048\u305F\u554F\u984C\u306B\u6311\u6226"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: ghostBtn
      }, "\u30DB\u30FC\u30E0\u3078"))));
    }
    if (s.flagged) {
      // 要復習フラグの挑戦結果（フラグは正解しても外れない＝残り数はflaggedListそのもの）
      const remain = flaggedList.length;
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 34
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, "\uD83D\uDD16 \u8981\u5FA9\u7FD2\u306E\u7D50\u679C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 60,
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "10px 0 0",
          color: "#34d39e"
        }
      }, s.correct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 22,
          opacity: 0.7
        }
      }, " / ", s.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          opacity: 0.6,
          marginTop: 2
        }
      }, "\u6B63\u89E3"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          marginTop: 18,
          lineHeight: 1.7,
          color: remain === 0 ? "#34d39e" : "#c2cad8"
        }
      }, remain === 0 ? "🎉 要復習が0問に！" : `要復習に残っている問題 ${remain}問`), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          opacity: 0.5,
          marginTop: 6,
          lineHeight: 1.7
        }
      }, "\u6B63\u89E3\u3057\u3066\u3082\uD83D\uDD16\u306F\u81EA\u52D5\u3067\u5916\u308C\u307E\u305B\u3093\u3002\u89E3\u8AAC\u753B\u9762\u306E\uD83D\uDD16\u30DC\u30BF\u30F3\u3067\u624B\u52D5\u3067\u5916\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 26
        }
      }, remain > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: startFlagged,
        style: primaryBtn("linear-gradient(90deg,#e0a830,#f6c247)")
      }, "\u3082\u3046\u4E00\u5EA6 \u8981\u5FA9\u7FD2\u306B\u6311\u6226"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: ghostBtn
      }, "\u30DB\u30FC\u30E0\u3078"))));
    }
    if (s.random) {
      // ランダム演習の結果（バッジ無し）
      const pass = s.pct >= PASS_PCT;
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 34
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, "\uD83C\uDFB2 ", s.label, " \u30E9\u30F3\u30C0\u30E0\u306E\u7D50\u679C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 64,
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "10px 0 0",
          color: pass ? "#34d39e" : "#c2cad8",
          textShadow: pass ? "0 0 28px #34d39e55" : "none"
        }
      }, s.pct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 26
        }
      }, "%")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          opacity: 0.6,
          marginTop: 2
        }
      }, s.correct, " / ", s.total, " \u554F\u6B63\u89E3"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 26
        }
      }, s.missed && s.missed.length > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: () => startRandomMisses(s.missed),
        style: primaryBtn("linear-gradient(90deg,#e0a830,#f6c247)")
      }, "\uD83D\uDD01 \u3053\u306E\u6F14\u7FD2\u306E\u30DF\u30B9\u306B\u6311\u6226\uFF08", s.missed.length, "\u554F\uFF09"), /*#__PURE__*/React.createElement("button", {
        onClick: openBlockRandom,
        style: primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)")
      }, "\uD83C\uDFB2 \u3082\u3046\u4E00\u5EA6\u30E9\u30F3\u30C0\u30E0\uFF08\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3076\uFF09"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: ghostBtn
      }, "\u30DB\u30FC\u30E0\u3078"))));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 460,
        width: "100%",
        textAlign: "center",
        paddingTop: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        letterSpacing: 4,
        opacity: 0.6
      }
    }, sectionLabels[secIdx], " \u7D50\u679C", s.full ? "" : "（範囲選択）"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 64,
        fontWeight: 900,
        lineHeight: 1.1,
        margin: "10px 0 0",
        color: s.pass ? "#34d39e" : "#c2cad8",
        textShadow: s.pass ? "0 0 28px #34d39e55" : "none"
      }
    }, s.pct, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 26
      }
    }, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        opacity: 0.6,
        marginTop: 2
      }
    }, s.correct, " / ", s.total, " \u554F\u6B63\u89E3"), s.badge ?
    /*#__PURE__*/
    /* ブロック全問を選択して合格＝🏅ブロック合格 */
    React.createElement("div", {
      className: "card-in",
      style: {
        fontSize: 44,
        marginTop: 18
      }
    }, "\uD83C\uDFC5", /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 900,
        color: "#34d39e",
        marginTop: 4
      }
    }, "\u30D6\u30ED\u30C3\u30AF\u5408\u683C\uFF01")) : s.pass ?
    /*#__PURE__*/
    /* 合格ラインは超えたが、部分選択なのでブロック合格(🏅)ではない */
    React.createElement("div", {
      className: "card-in",
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 900,
        color: "#34d39e"
      }
    }, "\u2713 \u5408\u683C"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        opacity: 0.7,
        marginTop: 6,
        lineHeight: 1.7
      }
    }, "\u5168\u30C1\u30E3\u30F3\u30AF\u3092\u9078\u3093\u3067\u5408\u683C\u3059\u308B\u3068", /*#__PURE__*/React.createElement("br", null), "\u30D6\u30ED\u30C3\u30AF\u5408\u683C\uD83C\uDFC5\u306B\u306A\u308A\u307E\u3059\u3002")) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 900,
        color: "#f6c247"
      }
    }, "\u4E0D\u5408\u683C"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: 0.6,
        marginTop: 6,
        lineHeight: 1.7
      }
    }, "\u3042\u3068", Math.max(1, Math.ceil(s.total * PASS_PCT / 100) - s.correct), "\u554F\u3067\u5408\u683C\uFF08", PASS_PCT, "%\uFF09\u3002", /*#__PURE__*/React.createElement("br", null), "\u899A\u3048\u76F4\u3057\u3066\u3082\u3046\u4E00\u5EA6\u3002")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => openTestPick(secIdx),
      style: primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)")
    }, "\u3082\u3046\u4E00\u5EA6\u30C6\u30B9\u30C8"), /*#__PURE__*/React.createElement("button", {
      onClick: () => openStudy(secIdx),
      style: ghostBtn
    }, "\u899A\u3048\u76F4\u3059")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      style: {
        ...linkBtn,
        marginTop: 18
      }
    }, "\u30D6\u30ED\u30C3\u30AF\u4E00\u89A7\u3078")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, styleTag);
}
const linkBtn = {
  background: "none",
  border: "none",
  color: "#8b97a8",
  cursor: "pointer",
  fontSize: 12,
  padding: 0,
  textDecoration: "underline"
};
const ghostBtn = {
  padding: "16px 22px",
  fontSize: 15,
  fontWeight: 700,
  color: "#c2cad8",
  background: "transparent",
  border: "1px solid #2f3a49",
  borderRadius: 14,
  cursor: "pointer"
};
function primaryBtn(grad) {
  return {
    flex: 1,
    padding: "16px",
    fontSize: 16,
    fontWeight: 800,
    color: "#10141c",
    background: grad,
    border: "none",
    borderRadius: 14,
    cursor: "pointer",
    boxShadow: "0 0 22px #5b9bff44"
  };
}
function choiceRow(bg, bd) {
  return {
    display: "flex",
    alignItems: "center",
    gap: 14,
    textAlign: "left",
    padding: "16px 18px",
    background: bg,
    border: `2px solid ${bd}`,
    borderRadius: 16,
    cursor: "pointer",
    color: "#fff",
    transition: "transform .08s, background .15s, border .15s"
  };
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
