# Step 1: Create a dictionary to store movies and their ratings
movies = {}

def add_movie():
    movie_name = input("Enter the movie name: ")
    if movie_name not in movies:
        movies[movie_name] = []  # Initialize an empty list for ratings
        print(f"Movie \"{movie_name}\" added!")
    else:
        print("Movie already exists.")

def rate_movie():
    movie_name = input("Enter the movie name: ")
    if movie_name in movies:
        try:
            rating = int(input("Enter your rating (1-5): "))
            if 1 <= rating <= 5:
                movies[movie_name].append(rating)
                print(f"Rating added for '{movie_name}' {rating}")
            else:
                print("Invalid rating. Rating must be between 1 and 5.")
        except ValueError:
            print("Please enter a valid number.")
    else:
        print("Movie not found.")

def view_average_ratings():
    if not movies:
        print("No movies have been added yet.")
    else:
        print("Average Ratings:")
        for movie, ratings in movies.items():
            if ratings:
                average = sum(ratings) / len(ratings)
                print(f"{movie}: {average:.2f}")
            else:
                print(f"{movie}: No ratings yet.")

def main():
    while True:
        print("\n1. Add a Movie")
        print("2. Rate a Movie")
        print("3. View Average Ratings")
        print("4. Exit")
        choice = input("Enter your choice: ")
        if choice == "1":
            add_movie()
        elif choice == "2":
            rate_movie()
        elif choice == "3":
            view_average_ratings()
        elif choice == "4":
            print("Exiting the application. Goodbye!")
            break
        else:
            print("Invalid choice. Try again.")

if __name__ == "__main__":
    main()