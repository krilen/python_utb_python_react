import api

if __name__ == "__main__":
    app = api.create_app()
    app.run(debug=True)

