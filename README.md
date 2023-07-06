# Marvel

![Desktop](/public/docs/marvel-desktop.png)

## [Online DEMO](https://marvel-developer.vercel.app/)

To start the application, you must first obtain the Marvel plublic key and
private key.

To do this, go to https://developer.marvel.com/ create account, then go to https://developer.marvel.com/documentation/authorization for more details.


After having created the account in `marvel.developer`, you must generate the public key and the private key.

Change the `env.template` file name to `.env.local`


change the file by adding your credentials.

```
NEXT_PUBLIC_API_KEY_NOT_FOUND='YOUR API KEY NOT FOUND'
NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY='Your Marvel api plublic key'
NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY='Your Marvel api private key'
```

Now install the dependencies.
```zsh
yarn install
```

Now we can run application.
```zsh
yarn dev
```
