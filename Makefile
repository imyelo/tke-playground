DATE = `date +"%Y%m%d"`

version:
	@if [ ${DATE} = `cut -d . -s -f 1 ./packages/sayhi/.version` ]; then \
		echo ${DATE}.`expr "$(cut -d . -s -f 2 ./packages/sayhi/.version) + 1"`; \
	else \
		echo ${DATE}.`cut -d . -s -f 2 ./packages/sayhi/.version`; \
	fi

sayhi:
	@cd packages/sayhi && \
		yarn build && \
		echo ccr.ccs.tencentyun.com/yelozyhuang/sayhi:${DATE}
		# docker build -t ccr.ccs.tencentyun.com/yelozyhuang/sayhi
