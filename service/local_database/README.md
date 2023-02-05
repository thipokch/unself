# Unself Local Database

This is the local database for the Unself project. The database is implemented with a SQLite database.

## Package Structure

The directories are structured as follows:

* `connection` - Platform implementation of the connection to the database.
* `converter` - Converters for different types.
* `dao` - Data access objects for the different tables.
* `mapper` - Mappers between records and domain objects for the different tables.
* `orm` - Object relational mapping for the dynamic tables.
* `table` - Schema and definitions for the different tables.
