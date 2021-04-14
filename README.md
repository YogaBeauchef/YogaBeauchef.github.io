# YogaBeauchef.github.io
Web site https://YogaBeauchef.github.io

## Requisits

Installed `bundler`

```
# install bundler
# notice that $HOME/.gem/ruby/*/bin must be in your PATH
which bundle && echo "bundle is installed" || sudo gem install --user-install bundler:2.0.1
```

## First Time Local Run

There the steps to reproduce in orter to run the website locally.

```
git clone git@github.com:YogaBeauchef/YogaBeauchef.github.io.git
cd YogaBeauchef.github.io

# install bundles
bundle config path 'vendor/bundle' --local
bundle install

# run
bundle exec jekyll serve
```

